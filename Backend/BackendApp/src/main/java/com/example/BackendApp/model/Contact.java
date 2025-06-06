package com.example.BackendApp.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String subject;
    
    @Column(columnDefinition = "TEXT")
    private String message;
    
    @Column(name = "submission_date")
    private LocalDateTime submissionDate;
    
    @Column(name = "is_read")
    private boolean isRead;
    
    @Column(name = "read_date")
    private LocalDateTime readDate;
    
    @Column
    private String phone;

    public Contact() {
        this.submissionDate = LocalDateTime.now();
        this.isRead = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(LocalDateTime submissionDate) {
        this.submissionDate = submissionDate;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
        if (read) {
            this.readDate = LocalDateTime.now();
        }
    }

    public LocalDateTime getReadDate() {
        return readDate;
    }

    public void setReadDate(LocalDateTime readDate) {
        this.readDate = readDate;
    }
} 
