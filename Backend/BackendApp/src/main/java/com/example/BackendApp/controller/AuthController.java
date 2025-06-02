package com.example.BackendApp.controller;

import com.example.BackendApp.model.User;
import com.example.BackendApp.repository.UserRepository;
import com.example.BackendApp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, 
                         AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        if (email == null || password == null) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Email and password are required");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // Debugging output
            System.out.println("Login attempt for: " + email);
            
            // Check if user exists
            if (!userRepository.existsByEmail(email)) {
                Map<String, Object> response = new HashMap<>();
                response.put("success", false);
                response.put("message", "User not found");
                response.put("notFound", true);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }

            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Get user data
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new NoSuchElementException("User not found with email: " + email));
            
            // Generate JWT token
            String token = jwtUtil.generateToken(email);
            
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", user.getId());
            userData.put("name", user.getName());
            userData.put("email", user.getEmail());
            userData.put("role", user.getRole());
            userData.put("joinDate", user.getJoinDate());
            userData.put("status", user.getStatus());
            userData.put("membershipType", user.getMembershipType());

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("token", token);
            response.put("user", userData);
            
            System.out.println("Login successful for: " + email);

            return ResponseEntity.ok(response);
        } catch (BadCredentialsException e) {
            System.out.println("Bad credentials for: " + email);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        } catch (Exception e) {
            System.out.println("Login exception: " + e.getMessage());
            e.printStackTrace();
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Login failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> registerRequest) {
        String name = registerRequest.get("name");
        String email = registerRequest.get("email");
        String password = registerRequest.get("password");
        String membershipType = registerRequest.get("membershipType");

        System.out.println("Registration request received - Name: " + name + ", Email: " + email);
        Map<String, Object> response = new HashMap<>();

        // Validate required fields
        if (name == null || email == null || password == null) {
            System.out.println("Registration failed: Missing required fields");
            response.put("success", false);
            response.put("message", "Name, email, and password are required");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            // Check if user already exists
            boolean userExists = userRepository.existsByEmail(email);
            System.out.println("Checking if user exists with email: " + email + " - Result: " + userExists);
            
            if (userExists) {
                System.out.println("Registration failed: Email already in use - " + email);
                response.put("success", false);
                response.put("message", "Email is already in use");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }

            // Create new user
            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(passwordEncoder.encode(password));
            user.setRole("member"); // Default role
            user.setStatus("active"); // Default status
            
            // Set membership type if provided
            if (membershipType != null && !membershipType.isEmpty()) {
                user.setMembershipType(membershipType);
            } else {
                user.setMembershipType("free"); // Default membership type
            }
            
            // Save user
            User savedUser = userRepository.save(user);
            System.out.println("New user registered successfully: " + savedUser.getEmail() + " with ID: " + savedUser.getId());

            // Generate JWT token
            String token = jwtUtil.generateToken(email);

            // Prepare response data
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", savedUser.getId());
            userData.put("name", savedUser.getName());
            userData.put("email", savedUser.getEmail());
            userData.put("role", savedUser.getRole());
            userData.put("joinDate", savedUser.getJoinDate());
            userData.put("status", savedUser.getStatus());
            userData.put("membershipType", savedUser.getMembershipType());

            response.put("success", true);
            response.put("message", "Registration successful");
            response.put("token", token);
            response.put("user", userData);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            System.err.println("Registration failed with exception: " + e.getMessage());
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Registration failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}