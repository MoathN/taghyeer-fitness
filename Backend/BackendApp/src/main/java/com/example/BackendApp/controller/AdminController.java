package com.example.BackendApp.controller;

import com.example.BackendApp.model.Contact;
import com.example.BackendApp.model.Membership;
import com.example.BackendApp.model.Product;
import com.example.BackendApp.model.User;
import com.example.BackendApp.model.WorkoutPlan;
import com.example.BackendApp.model.UserWorkoutPlan;
import com.example.BackendApp.repository.MembershipRepository;
import com.example.BackendApp.repository.ProductRepository;
import com.example.BackendApp.repository.UserRepository;
import com.example.BackendApp.repository.UserWorkoutPlanRepository;
import com.example.BackendApp.service.ContactService;
import com.example.BackendApp.service.WorkoutPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000", "http://127.0.0.1:3000"}, allowCredentials = "true")
public class AdminController {

    private final ContactService contactService;
    private final UserRepository userRepository;
    private final MembershipRepository membershipRepository;
    private final ProductRepository productRepository;
    private final WorkoutPlanService workoutPlanService;
    private final UserWorkoutPlanRepository userWorkoutPlanRepository;

    @Autowired
    public AdminController(ContactService contactService, UserRepository userRepository, 
                          MembershipRepository membershipRepository, ProductRepository productRepository, 
                          WorkoutPlanService workoutPlanService, UserWorkoutPlanRepository userWorkoutPlanRepository) {
        this.contactService = contactService;
        this.userRepository = userRepository;
        this.membershipRepository = membershipRepository;
        this.productRepository = productRepository;
        this.workoutPlanService = workoutPlanService;
        this.userWorkoutPlanRepository = userWorkoutPlanRepository;
    }

    // Dashboard stats
    @GetMapping("/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();
        
        // Count stats for each entity
        long userCount = userRepository.count();
        long contactCount = contactService.getAllContacts().size();
        long unreadContactCount = contactService.getUnreadContacts().size();
        long membershipCount = membershipRepository.count();
        long productCount = productRepository.count();
        long workoutPlanCount = workoutPlanService.getAllWorkoutPlans().size();
        
        stats.put("userCount", userCount);
        stats.put("contactCount", contactCount);
        stats.put("unreadContactCount", unreadContactCount);
        stats.put("membershipCount", membershipCount);
        stats.put("productCount", productCount);
        stats.put("workoutPlanCount", workoutPlanCount);
        
        return new ResponseEntity<>(stats, HttpStatus.OK);
    }

    // User management endpoints
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        System.out.println("Admin API: GET /api/admin/users requested");
        try {
            List<User> users = userRepository.findAllByOrderByJoinDateDesc();
            System.out.println("Admin API: Found " + users.size() + " users");
            
            // Print each user for debugging
            for (User user : users) {
                System.out.println("User: " + user.getId() + " - " + user.getName() + " - " + user.getEmail());
            }
            
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            System.err.println("Admin API: Error fetching users: " + e.getMessage());
            e.printStackTrace();
            throw e; // Rethrow to send proper error response
        }
    }

    @GetMapping("/users/role/{role}")
    public ResponseEntity<List<User>> getUsersByRole(@PathVariable String role) {
        List<User> users = userRepository.findByRole(role);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users/status/{status}")
    public ResponseEntity<List<User>> getUsersByStatus(@PathVariable String status) {
        List<User> users = userRepository.findByStatus(status);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users/membership/{membershipType}")
    public ResponseEntity<List<User>> getUsersByMembershipType(@PathVariable String membershipType) {
        List<User> users = userRepository.findByMembershipType(membershipType);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users/search")
    public ResponseEntity<List<User>> searchUsersByName(@RequestParam String name) {
        List<User> users = userRepository.findByNameContainingIgnoreCase(name);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "User not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable Long id, @RequestBody Map<String, String> updates) {
        Optional<User> userOpt = userRepository.findById(id);
        
        if (!userOpt.isPresent()) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "User not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        User user = userOpt.get();
        
        // Update fields if present in the request
        if (updates.containsKey("name")) {
            user.setName(updates.get("name"));
        }
        if (updates.containsKey("role")) {
            user.setRole(updates.get("role"));
        }
        if (updates.containsKey("status")) {
            user.setStatus(updates.get("status"));
        }
        if (updates.containsKey("membershipType")) {
            user.setMembershipType(updates.get("membershipType"));
        }

        User updatedUser = userRepository.save(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "User not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        userRepository.deleteById(id);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "User deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // Contact management endpoints
    @GetMapping("/contacts")
    public ResponseEntity<List<Contact>> getAllContacts() {
        List<Contact> contacts = contactService.getAllContacts();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }

    @GetMapping("/contacts/unread")
    public ResponseEntity<List<Contact>> getUnreadContacts() {
        List<Contact> unreadContacts = contactService.getUnreadContacts();
        return new ResponseEntity<>(unreadContacts, HttpStatus.OK);
    }

    @PutMapping("/contacts/{id}/read")
    public ResponseEntity<Object> markContactAsRead(@PathVariable Long id) {
        Contact updatedContact = contactService.markAsRead(id);
        
        if (updatedContact != null) {
            return new ResponseEntity<>(updatedContact, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Contact not found with id: " + id, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/contacts/{id}")
    public ResponseEntity<Map<String, Object>> deleteContact(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        
        return contactService.getContactById(id)
                .map(contact -> {
                    contactService.deleteContact(id);
                    response.put("success", true);
                    response.put("message", "Contact deleted successfully");
                    return new ResponseEntity<>(response, HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>(createErrorResponse("Contact not found with id: " + id), HttpStatus.NOT_FOUND));
    }
    
    // Helper method for error responses
    private Map<String, Object> createErrorResponse(String message) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", message);
        return response;
    }

    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        System.out.println("Admin API: Test endpoint called");
        return new ResponseEntity<>("API is working", HttpStatus.OK);
    }

    @GetMapping("/debug/users")
    public ResponseEntity<Map<String, Object>> debugUsers() {
        System.out.println("Admin API: DEBUG /api/admin/debug/users requested");
        Map<String, Object> response = new HashMap<>();
        
        try {
            List<User> users = userRepository.findAll();
            List<Map<String, Object>> usersList = new ArrayList<>();
            
            System.out.println("Total users in database: " + users.size());
            
            for (User user : users) {
                Map<String, Object> userMap = new HashMap<>();
                userMap.put("id", user.getId());
                userMap.put("name", user.getName());
                userMap.put("email", user.getEmail());
                userMap.put("role", user.getRole());
                userMap.put("status", user.getStatus());
                userMap.put("membershipType", user.getMembershipType());
                userMap.put("joinDate", user.getJoinDate());
                
                usersList.add(userMap);
                
                System.out.println("User: ID=" + user.getId() + 
                                  ", Name=" + user.getName() + 
                                  ", Email=" + user.getEmail() + 
                                  ", Role=" + user.getRole() + 
                                  ", Status=" + user.getStatus());
            }
            
            response.put("success", true);
            response.put("count", users.size());
            response.put("users", usersList);
            
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            System.err.println("Error in debug endpoint: " + e.getMessage());
            e.printStackTrace();
            
            response.put("success", false);
            response.put("error", e.getMessage());
            
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Workout plan endpoints
    @GetMapping("/workout-plans")
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlans() {
        List<WorkoutPlan> workoutPlans = workoutPlanService.getAllWorkoutPlans();
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }

    @PostMapping("/workout-plans")
    public ResponseEntity<WorkoutPlan> createWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        WorkoutPlan savedPlan = workoutPlanService.saveWorkoutPlan(workoutPlan);
        return new ResponseEntity<>(savedPlan, HttpStatus.CREATED);
    }

    @GetMapping("/workout-plans/{id}")
    public ResponseEntity<Object> getWorkoutPlanById(@PathVariable Long id) {
        Optional<WorkoutPlan> plan = workoutPlanService.getWorkoutPlanById(id);
        if(plan.isPresent()) {
            return new ResponseEntity<>(plan.get(), HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Workout plan not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/workout-plans/{id}")
    public ResponseEntity<Object> updateWorkoutPlan(@PathVariable Long id, @RequestBody WorkoutPlan workoutPlan) {
        Optional<WorkoutPlan> existingPlan = workoutPlanService.getWorkoutPlanById(id);
        if(existingPlan.isPresent()) {
            workoutPlan.setId(id);
            WorkoutPlan updatedPlan = workoutPlanService.saveWorkoutPlan(workoutPlan);
            return new ResponseEntity<>(updatedPlan, HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Workout plan not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/workout-plans/{id}")
    public ResponseEntity<Object> deleteWorkoutPlan(@PathVariable Long id) {
        Optional<WorkoutPlan> plan = workoutPlanService.getWorkoutPlanById(id);
        if(plan.isPresent()) {
            workoutPlanService.deleteWorkoutPlan(id);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Workout plan deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Workout plan not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    // Membership endpoints
    @GetMapping("/memberships")
    public ResponseEntity<List<Membership>> getAllMemberships() {
        List<Membership> memberships = membershipRepository.findAll();
        return new ResponseEntity<>(memberships, HttpStatus.OK);
    }

    @PostMapping("/memberships")
    public ResponseEntity<Membership> createMembership(@RequestBody Membership membership) {
        Membership savedMembership = membershipRepository.save(membership);
        return new ResponseEntity<>(savedMembership, HttpStatus.CREATED);
    }

    @GetMapping("/memberships/{id}")
    public ResponseEntity<Object> getMembershipById(@PathVariable Long id) {
        Optional<Membership> membership = membershipRepository.findById(id);
        if(membership.isPresent()) {
            return new ResponseEntity<>(membership.get(), HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Membership not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/memberships/{id}")
    public ResponseEntity<Object> updateMembership(@PathVariable Long id, @RequestBody Membership membershipDetails) {
        Optional<Membership> membership = membershipRepository.findById(id);
        if(membership.isPresent()) {
            membershipDetails.setId(id);
            Membership updatedMembership = membershipRepository.save(membershipDetails);
            return new ResponseEntity<>(updatedMembership, HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Membership not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/memberships/{id}")
    public ResponseEntity<Object> deleteMembership(@PathVariable Long id) {
        Optional<Membership> membership = membershipRepository.findById(id);
        if(membership.isPresent()) {
            membershipRepository.deleteById(id);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Membership deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Membership not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    // Product endpoints
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/user-workout-plans")
    public ResponseEntity<Map<String, Object>> getUserWorkoutPlanStats() {
        Map<String, Object> stats = new HashMap<>();
        
        try {
            // Get all user workout plans
            List<UserWorkoutPlan> allPlans = userWorkoutPlanRepository.findAll();
            
            // Get active plans
            List<UserWorkoutPlan> activePlans = allPlans.stream()
                    .filter(UserWorkoutPlan::isActive)
                    .collect(Collectors.toList());
                    
            // Get saved plans
            List<UserWorkoutPlan> savedPlans = allPlans.stream()
                    .filter(UserWorkoutPlan::isSaved)
                    .collect(Collectors.toList());
                    
            // Get most popular workout plans by count
            Map<WorkoutPlan, Long> planCounts = allPlans.stream()
                    .collect(Collectors.groupingBy(UserWorkoutPlan::getWorkoutPlan, Collectors.counting()));
                    
            List<Map<String, Object>> popularPlans = planCounts.entrySet().stream()
                    .sorted(Map.Entry.<WorkoutPlan, Long>comparingByValue().reversed())
                    .limit(5)
                    .map(entry -> {
                        Map<String, Object> plan = new HashMap<>();
                        plan.put("id", entry.getKey().getId());
                        plan.put("title", entry.getKey().getTitle());
                        plan.put("count", entry.getValue());
                        return plan;
                    })
                    .collect(Collectors.toList());
                    
            // Get recent user workout plan activity
            List<Map<String, Object>> recentActivity = allPlans.stream()
                    .sorted(Comparator.comparing(UserWorkoutPlan::getLastAccessed).reversed())
                    .limit(10)
                    .map(plan -> {
                        Map<String, Object> activity = new HashMap<>();
                        activity.put("id", plan.getId());
                        activity.put("userId", plan.getUser().getId());
                        activity.put("userName", plan.getUser().getName());
                        activity.put("workoutPlanId", plan.getWorkoutPlan().getId());
                        activity.put("workoutPlanTitle", plan.getWorkoutPlan().getTitle());
                        activity.put("active", plan.isActive());
                        activity.put("saved", plan.isSaved());
                        activity.put("lastAccessed", plan.getLastAccessed());
                        activity.put("completionPercentage", plan.getCompletionPercentage());
                        return activity;
                    })
                    .collect(Collectors.toList());
                    
            stats.put("totalUserWorkoutPlans", allPlans.size());
            stats.put("activePlans", activePlans.size());
            stats.put("savedPlans", savedPlans.size());
            stats.put("popularWorkoutPlans", popularPlans);
            stats.put("recentActivity", recentActivity);
            stats.put("success", true);
            
            return new ResponseEntity<>(stats, HttpStatus.OK);
        } catch (Exception e) {
            stats.put("success", false);
            stats.put("message", e.getMessage());
            return new ResponseEntity<>(stats, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
} 