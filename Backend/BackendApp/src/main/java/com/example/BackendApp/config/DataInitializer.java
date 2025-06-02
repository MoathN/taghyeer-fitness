package com.example.BackendApp.config;

import com.example.BackendApp.model.User;
import com.example.BackendApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public DataInitializer(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Only initialize if no users exist
        if (userRepository.count() == 0) {
            System.out.println("Initializing default admin user...");
            
            User adminUser = new User();
            adminUser.setName("Admin");
            adminUser.setEmail("admin@taghyeer.com");
            adminUser.setPassword(passwordEncoder.encode("admin123"));
            adminUser.setRole("admin");
            adminUser.setStatus("active");
            adminUser.setMembershipType("premium");
            adminUser.setJoinDate(LocalDateTime.now());
            
            userRepository.save(adminUser);
            System.out.println("Default admin user created successfully.");
        } else {
            System.out.println("Users already exist, skipping initialization.");
        }
    }
} 