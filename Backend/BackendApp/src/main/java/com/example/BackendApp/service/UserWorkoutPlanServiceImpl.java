package com.example.BackendApp.service;

import com.example.BackendApp.model.User;
import com.example.BackendApp.model.UserWorkoutPlan;
import com.example.BackendApp.model.WorkoutPlan;
import com.example.BackendApp.repository.UserRepository;
import com.example.BackendApp.repository.UserWorkoutPlanRepository;
import com.example.BackendApp.repository.WorkoutPlanRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserWorkoutPlanServiceImpl implements UserWorkoutPlanService {

    private final UserWorkoutPlanRepository userWorkoutPlanRepository;
    private final UserRepository userRepository;
    private final WorkoutPlanRepository workoutPlanRepository;

    @Autowired
    public UserWorkoutPlanServiceImpl(
            UserWorkoutPlanRepository userWorkoutPlanRepository,
            UserRepository userRepository,
            WorkoutPlanRepository workoutPlanRepository) {
        this.userWorkoutPlanRepository = userWorkoutPlanRepository;
        this.userRepository = userRepository;
        this.workoutPlanRepository = workoutPlanRepository;
    }

    @Override
    @Transactional
    public UserWorkoutPlan startWorkoutPlan(Long userId, Long workoutPlanId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
        
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId)
                .orElseThrow(() -> new IllegalArgumentException("Workout plan not found with id: " + workoutPlanId));
        
        Optional<UserWorkoutPlan> existingPlan = userWorkoutPlanRepository.findByUserAndWorkoutPlan(user, workoutPlan);
        
        if (existingPlan.isPresent()) {
            UserWorkoutPlan plan = existingPlan.get();
            plan.setActive(true);
            plan.setLastAccessed(LocalDateTime.now());
            return userWorkoutPlanRepository.save(plan);
        } else {
            UserWorkoutPlan newPlan = new UserWorkoutPlan(user, workoutPlan, true, false);
            return userWorkoutPlanRepository.save(newPlan);
        }
    }

    @Override
    @Transactional
    public UserWorkoutPlan saveWorkoutPlan(Long userId, Long workoutPlanId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
        
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId)
                .orElseThrow(() -> new IllegalArgumentException("Workout plan not found with id: " + workoutPlanId));
        
        Optional<UserWorkoutPlan> existingPlan = userWorkoutPlanRepository.findByUserAndWorkoutPlan(user, workoutPlan);
        
        if (existingPlan.isPresent()) {
            UserWorkoutPlan plan = existingPlan.get();
            plan.setSaved(true);
            plan.setLastAccessed(LocalDateTime.now());
            return userWorkoutPlanRepository.save(plan);
        } else {
            UserWorkoutPlan newPlan = new UserWorkoutPlan(user, workoutPlan, false, true);
            return userWorkoutPlanRepository.save(newPlan);
        }
    }

    @Override
    @Transactional
    public boolean removeWorkoutPlan(Long userId, Long workoutPlanId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
        
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId)
                .orElseThrow(() -> new IllegalArgumentException("Workout plan not found with id: " + workoutPlanId));
        
        Optional<UserWorkoutPlan> existingPlan = userWorkoutPlanRepository.findByUserAndWorkoutPlan(user, workoutPlan);
        
        if (existingPlan.isPresent()) {
            userWorkoutPlanRepository.delete(existingPlan.get());
            return true;
        }
        return false;
    }

    @Override
    public List<UserWorkoutPlan> getActiveWorkoutPlans(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return new ArrayList<>();
        }
        
        User user = userOpt.get();
        return userWorkoutPlanRepository.findByUserAndActive(user, true);
    }

    @Override
    public List<UserWorkoutPlan> getSavedWorkoutPlans(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return new ArrayList<>();
        }
        
        User user = userOpt.get();
        return userWorkoutPlanRepository.findByUserAndSaved(user, true);
    }

    @Override
    public List<UserWorkoutPlan> getAllUserWorkoutPlans(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return new ArrayList<>();
        }
        
        User user = userOpt.get();
        return userWorkoutPlanRepository.findByUser(user);
    }

    @Override
    public Optional<UserWorkoutPlan> getUserWorkoutPlan(Long userId, Long workoutPlanId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<WorkoutPlan> planOpt = workoutPlanRepository.findById(workoutPlanId);
        
        if (!userOpt.isPresent() || !planOpt.isPresent()) {
            return Optional.empty();
        }
        
        return userWorkoutPlanRepository.findByUserAndWorkoutPlan(userOpt.get(), planOpt.get());
    }

    @Override
    @Transactional
    public UserWorkoutPlan updateWorkoutPlanProgress(Long userId, Long workoutPlanId, Integer currentWeek, Integer completionPercentage) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));
        
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId)
                .orElseThrow(() -> new IllegalArgumentException("Workout plan not found with id: " + workoutPlanId));
        
        UserWorkoutPlan plan = userWorkoutPlanRepository.findByUserAndWorkoutPlan(user, workoutPlan)
                .orElseThrow(() -> new IllegalArgumentException("User has not started this workout plan"));
        
        if (currentWeek != null) {
            plan.setCurrentWeek(currentWeek);
        }
        
        if (completionPercentage != null) {
            plan.setCompletionPercentage(completionPercentage);
        }
        
        plan.updateLastAccessed();
        return userWorkoutPlanRepository.save(plan);
    }
} 