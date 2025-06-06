package com.example.BackendApp.repository;

import com.example.BackendApp.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    
    List<Contact> findByIsReadFalse();
    
    List<Contact> findAllByOrderBySubmissionDateDesc();
} 