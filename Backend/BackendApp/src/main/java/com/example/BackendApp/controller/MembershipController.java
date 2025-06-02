package com.example.BackendApp.controller;

import com.example.BackendApp.model.Membership;
import com.example.BackendApp.repository.MembershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/memberships")
@CrossOrigin(origins = "*")
public class MembershipController {

    private final MembershipRepository membershipRepository;

    @Autowired
    public MembershipController(MembershipRepository membershipRepository) {
        this.membershipRepository = membershipRepository;
    }

    @GetMapping
    public ResponseEntity<List<Membership>> getAllMemberships() {
        List<Membership> memberships = membershipRepository.findAll();
        return new ResponseEntity<>(memberships, HttpStatus.OK);
    }

    @GetMapping("/active")
    public ResponseEntity<List<Membership>> getActiveMemberships() {
        List<Membership> activeMemberships = membershipRepository.findByActiveTrue();
        return new ResponseEntity<>(activeMemberships, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getMembershipById(@PathVariable Long id) {
        return membershipRepository.findById(id)
                .map(membership -> new ResponseEntity<Object>(membership, HttpStatus.OK))
                .orElseGet(() -> {
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", false);
                    response.put("message", "Membership not found with id: " + id);
                    return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
                });
    }

    @PostMapping
    public ResponseEntity<Membership> createMembership(@RequestBody Membership membership) {
        membership.setCreatedAt(LocalDateTime.now());
        membership.setUpdatedAt(LocalDateTime.now());
        
        if (membership.getActive() == null) {
            membership.setActive(true);
        }
        
        Membership savedMembership = membershipRepository.save(membership);
        return new ResponseEntity<>(savedMembership, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateMembership(@PathVariable Long id, @RequestBody Membership membershipDetails) {
        return membershipRepository.findById(id)
                .map(existingMembership -> {
                    if (membershipDetails.getName() != null) {
                        existingMembership.setName(membershipDetails.getName());
                    }
                    
                    if (membershipDetails.getDescription() != null) {
                        existingMembership.setDescription(membershipDetails.getDescription());
                    }
                    
                    if (membershipDetails.getPrice() != null) {
                        existingMembership.setPrice(membershipDetails.getPrice());
                    }
                    
                    if (membershipDetails.getDuration() != null) {
                        existingMembership.setDuration(membershipDetails.getDuration());
                    }
                    
                    if (membershipDetails.getFeatures() != null) {
                        existingMembership.setFeatures(membershipDetails.getFeatures());
                    }
                    
                    if (membershipDetails.getActive() != null) {
                        existingMembership.setActive(membershipDetails.getActive());
                    }
                    
                    existingMembership.setUpdatedAt(LocalDateTime.now());
                    
                    Membership updatedMembership = membershipRepository.save(existingMembership);
                    return new ResponseEntity<Object>(updatedMembership, HttpStatus.OK);
                })
                .orElseGet(() -> {
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", false);
                    response.put("message", "Membership not found with id: " + id);
                    return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
                });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteMembership(@PathVariable Long id) {
        return membershipRepository.findById(id)
                .map(membership -> {
                    membershipRepository.delete(membership);
                    
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", true);
                    response.put("message", "Membership deleted successfully");
                    
                    return new ResponseEntity<Object>(response, HttpStatus.OK);
                })
                .orElseGet(() -> {
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", false);
                    response.put("message", "Membership not found with id: " + id);
                    
                    return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
                });
    }
} 