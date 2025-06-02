package com.example.BackendApp.repository;

import com.example.BackendApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    List<User> findByRole(String role);
    List<User> findByStatus(String status);
    List<User> findByMembershipType(String membershipType);
    List<User> findByNameContainingIgnoreCase(String name);
    List<User> findAllByOrderByJoinDateDesc();
} 