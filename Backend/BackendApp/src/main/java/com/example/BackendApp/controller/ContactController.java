package com.example.BackendApp.controller;

import com.example.BackendApp.model.Contact;
import com.example.BackendApp.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<Object> submitContact(@RequestBody Contact contact) {
        try {
            System.out.println("Received contact submission: " + contact.getName() + " - " + contact.getEmail());
            
            // Validate required fields
            if (contact.getName() == null || contact.getName().trim().isEmpty() ||
                contact.getEmail() == null || contact.getEmail().trim().isEmpty() ||
                contact.getSubject() == null || contact.getSubject().trim().isEmpty() ||
                contact.getMessage() == null || contact.getMessage().trim().isEmpty()) {
                
                Map<String, Object> response = new HashMap<>();
                response.put("success", false);
                response.put("message", "Please fill in all required fields");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            Contact savedContact = contactService.saveContact(contact);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Message sent successfully");
            response.put("contact", savedContact);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            System.err.println("Error saving contact: " + e.getMessage());
            e.printStackTrace();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Failed to send message: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        List<Contact> contacts = contactService.getAllContacts();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }

    @GetMapping("/unread")
    public ResponseEntity<List<Contact>> getUnreadContacts() {
        List<Contact> unreadContacts = contactService.getUnreadContacts();
        return new ResponseEntity<>(unreadContacts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getContactById(@PathVariable Long id) {
        return contactService.getContactById(id)
                .map(contact -> new ResponseEntity<Object>(contact, HttpStatus.OK))
                .orElseGet(() -> {
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", false);
                    response.put("message", "Contact not found with id: " + id);
                    return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
                });
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<Object> markAsRead(@PathVariable Long id) {
        Contact updatedContact = contactService.markAsRead(id);
        if (updatedContact != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Message marked as read");
            response.put("contact", updatedContact);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Contact not found with id: " + id);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteContact(@PathVariable Long id) {
        try {
            if (!contactService.getContactById(id).isPresent()) {
                Map<String, Object> response = new HashMap<>();
                response.put("success", false);
                response.put("message", "Contact not found with id: " + id);
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            contactService.deleteContact(id);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Contact deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Failed to delete contact: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
} 