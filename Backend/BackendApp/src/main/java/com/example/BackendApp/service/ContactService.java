package com.example.BackendApp.service;

import com.example.BackendApp.model.Contact;
import java.util.List;
import java.util.Optional;

public interface ContactService {
    List<Contact> getAllContacts();
    List<Contact> getUnreadContacts();
    Optional<Contact> getContactById(Long id);
    Contact saveContact(Contact contact);
    Contact markAsRead(Long id);
    void deleteContact(Long id);
} 