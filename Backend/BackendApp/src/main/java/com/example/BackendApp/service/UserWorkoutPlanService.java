package com.example.BackendApp.service;

import com.example.BackendApp.model.User;
import com.example.BackendApp.model.UserWorkoutPlan;
import com.example.BackendApp.model.WorkoutPlan;

import java.util.List;
import java.util.Optional;

public interface UserWorkoutPlanService {
    UserWorkoutPlan startWorkoutPlan(Long userId, Long workoutPlanId);
    
    UserWorkoutPlan saveWorkoutPlan(Long userId, Long workoutPlanId);
    
    boolean removeWorkoutPlan(Long userId, Long workoutPlanId);
    
    List<UserWorkoutPlan> getActiveWorkoutPlans(Long userId);
    
    List<UserWorkoutPlan> getSavedWorkoutPlans(Long userId);
    
    List<UserWorkoutPlan> getAllUserWorkoutPlans(Long userId);
    
    Optional<UserWorkoutPlan> getUserWorkoutPlan(Long userId, Long workoutPlanId);
    
    UserWorkoutPlan updateWorkoutPlanProgress(Long userId, Long workoutPlanId, Integer currentWeek, Integer completionPercentage);
} 