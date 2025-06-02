package com.example.BackendApp.controller;

import com.example.BackendApp.model.UserWorkoutPlan;
import com.example.BackendApp.service.UserWorkoutPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-workout-plans")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176", 
                        "http://127.0.0.1:5173", "http://127.0.0.1:5174", "http://127.0.0.1:5175", "http://127.0.0.1:5176",
                        "http://192.168.8.184:5173", "http://192.168.8.184:5174", "http://192.168.8.184:5175", "http://192.168.8.184:5176"}, 
             allowCredentials = "true")
public class UserWorkoutPlanController {

    private final UserWorkoutPlanService userWorkoutPlanService;

    @Autowired
    public UserWorkoutPlanController(UserWorkoutPlanService userWorkoutPlanService) {
        this.userWorkoutPlanService = userWorkoutPlanService;
    }

    @PostMapping("/{userId}/start/{workoutPlanId}")
    public ResponseEntity<Map<String, Object>> startWorkoutPlan(
            @PathVariable Long userId,
            @PathVariable Long workoutPlanId) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            UserWorkoutPlan userWorkoutPlan = userWorkoutPlanService.startWorkoutPlan(userId, workoutPlanId);
            response.put("success", true);
            response.put("message", "Workout plan started successfully");
            response.put("data", userWorkoutPlan);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/{userId}/save/{workoutPlanId}")
    public ResponseEntity<Map<String, Object>> saveWorkoutPlan(
            @PathVariable Long userId,
            @PathVariable Long workoutPlanId) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            UserWorkoutPlan userWorkoutPlan = userWorkoutPlanService.saveWorkoutPlan(userId, workoutPlanId);
            response.put("success", true);
            response.put("message", "Workout plan saved successfully");
            response.put("data", userWorkoutPlan);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{userId}/remove/{workoutPlanId}")
    public ResponseEntity<Map<String, Object>> removeWorkoutPlan(
            @PathVariable Long userId,
            @PathVariable Long workoutPlanId) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            boolean removed = userWorkoutPlanService.removeWorkoutPlan(userId, workoutPlanId);
            if (removed) {
                response.put("success", true);
                response.put("message", "Workout plan removed successfully");
            } else {
                response.put("success", false);
                response.put("message", "Workout plan not found or already removed");
            }
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{userId}/active")
    public ResponseEntity<Map<String, Object>> getActiveWorkoutPlans(@PathVariable Long userId) {
        Map<String, Object> response = new HashMap<>();
        List<UserWorkoutPlan> activePlans = userWorkoutPlanService.getActiveWorkoutPlans(userId);
        
        response.put("success", true);
        response.put("data", activePlans);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{userId}/saved")
    public ResponseEntity<Map<String, Object>> getSavedWorkoutPlans(@PathVariable Long userId) {
        Map<String, Object> response = new HashMap<>();
        List<UserWorkoutPlan> savedPlans = userWorkoutPlanService.getSavedWorkoutPlans(userId);
        
        response.put("success", true);
        response.put("data", savedPlans);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{userId}/all")
    public ResponseEntity<Map<String, Object>> getAllUserWorkoutPlans(@PathVariable Long userId) {
        Map<String, Object> response = new HashMap<>();
        List<UserWorkoutPlan> allPlans = userWorkoutPlanService.getAllUserWorkoutPlans(userId);
        
        response.put("success", true);
        response.put("data", allPlans);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{userId}/plan/{workoutPlanId}")
    public ResponseEntity<Map<String, Object>> getUserWorkoutPlan(
            @PathVariable Long userId,
            @PathVariable Long workoutPlanId) {
        
        Map<String, Object> response = new HashMap<>();
        Optional<UserWorkoutPlan> plan = userWorkoutPlanService.getUserWorkoutPlan(userId, workoutPlanId);
        
        if (plan.isPresent()) {
            response.put("success", true);
            response.put("data", plan.get());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.put("success", false);
            response.put("message", "Workout plan not found for this user");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{userId}/progress/{workoutPlanId}")
    public ResponseEntity<Map<String, Object>> updateWorkoutPlanProgress(
            @PathVariable Long userId,
            @PathVariable Long workoutPlanId,
            @RequestParam(required = false) Integer currentWeek,
            @RequestParam(required = false) Integer completionPercentage) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            UserWorkoutPlan updatedPlan = userWorkoutPlanService.updateWorkoutPlanProgress(userId, workoutPlanId, currentWeek, completionPercentage);
            
            response.put("success", true);
            response.put("message", "Progress updated successfully");
            response.put("data", updatedPlan);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }
} 