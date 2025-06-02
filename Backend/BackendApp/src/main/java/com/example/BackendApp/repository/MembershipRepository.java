package com.example.BackendApp.repository;

import com.example.BackendApp.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Long> {
    
    List<Membership> findByActiveTrue();
    
    List<Membership> findByActiveTrueOrderByPriceAsc();
    
    List<Membership> findByNameContainingIgnoreCase(String name);
} 