package com.example.BackendApp.repository;

import com.example.BackendApp.model.User;
import com.example.BackendApp.model.UserWorkoutPlan;
import com.example.BackendApp.model.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserWorkoutPlanRepository extends JpaRepository<UserWorkoutPlan, Long> {
    List<UserWorkoutPlan> findByUser(User user);
    
    List<UserWorkoutPlan> findByUserAndActive(User user, boolean active);
    
    List<UserWorkoutPlan> findByUserAndSaved(User user, boolean saved);
    
    Optional<UserWorkoutPlan> findByUserAndWorkoutPlan(User user, WorkoutPlan workoutPlan);
    
    boolean existsByUserAndWorkoutPlanAndActive(User user, WorkoutPlan workoutPlan, boolean active);
    
    boolean existsByUserAndWorkoutPlanAndSaved(User user, WorkoutPlan workoutPlan, boolean saved);
} 