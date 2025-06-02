package com.example.BackendApp.repository;

import com.example.BackendApp.model.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutPlanRepository extends JpaRepository<WorkoutPlan, Long> {
    
    List<WorkoutPlan> findByFeaturedTrue();
    
    List<WorkoutPlan> findByCategory(String category);
    
    List<WorkoutPlan> findByDifficulty(String difficulty);
    
    List<WorkoutPlan> findByTrainer(String trainer);
} 