package com.example.BackendApp.service;

import com.example.BackendApp.model.WorkoutPlan;
import java.util.List;
import java.util.Optional;

public interface WorkoutPlanService {
    
    List<WorkoutPlan> getAllWorkoutPlans();
    
    Optional<WorkoutPlan> getWorkoutPlanById(Long id);
    
    WorkoutPlan saveWorkoutPlan(WorkoutPlan workoutPlan);
    
    void deleteWorkoutPlan(Long id);
    
    List<WorkoutPlan> getFeaturedWorkoutPlans();
    
    List<WorkoutPlan> getWorkoutPlansByCategory(String category);
    
    List<WorkoutPlan> getWorkoutPlansByDifficulty(String difficulty);
    
    List<WorkoutPlan> getWorkoutPlansByTrainer(String trainer);
} 