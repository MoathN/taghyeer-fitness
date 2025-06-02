package com.example.BackendApp.service;

import com.example.BackendApp.model.Payment;
import com.example.BackendApp.model.User;
import com.example.BackendApp.repository.PaymentRepository;
import com.example.BackendApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    public Payment processPayment(Long userId, String planType, Double amount, String cardNumber, String cardHolderName) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        Payment payment = new Payment();
        payment.setUser(user);
        payment.setAmount(amount);
        payment.setPlanType(planType);
        payment.setCardLastFourDigits(cardNumber.substring(cardNumber.length() - 4));
        payment.setCardHolderName(cardHolderName);
        payment.setPaymentDate(LocalDateTime.now());
        payment.setStatus("SUCCESS");
        payment.setTransactionId(generateTransactionId());

        // Update user's membership type
        user.setMembershipType(planType);
        userRepository.save(user);

        return paymentRepository.save(payment);
    }

    public List<Payment> getUserPayments(Long userId) {
        return paymentRepository.findByUserId(userId);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findByOrderByPaymentDateDesc();
    }

    private String generateTransactionId() {
        return UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }
} 