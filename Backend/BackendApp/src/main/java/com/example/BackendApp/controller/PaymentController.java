package com.example.BackendApp.controller;

import com.example.BackendApp.model.Payment;
import com.example.BackendApp.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"}, allowCredentials = "true")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/process")
    public ResponseEntity<?> processPayment(@RequestBody Map<String, Object> paymentRequest) {
        try {
            Long userId = Long.parseLong(paymentRequest.get("userId").toString());
            String planType = (String) paymentRequest.get("planType");
            Double amount = Double.parseDouble(paymentRequest.get("amount").toString());
            String cardNumber = (String) paymentRequest.get("cardNumber");
            String cardHolderName = (String) paymentRequest.get("cardHolderName");

            Payment payment = paymentService.processPayment(userId, planType, amount, cardNumber, cardHolderName);
            return ResponseEntity.ok(payment);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Payment>> getUserPayments(@PathVariable Long userId) {
        return ResponseEntity.ok(paymentService.getUserPayments(userId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Payment>> getAllPayments() {
        return ResponseEntity.ok(paymentService.getAllPayments());
    }
} 