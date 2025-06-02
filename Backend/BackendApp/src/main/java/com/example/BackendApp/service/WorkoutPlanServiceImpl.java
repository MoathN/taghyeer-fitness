package com.example.BackendApp.service;

import com.example.BackendApp.model.WorkoutPlan;
import com.example.BackendApp.repository.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkoutPlanServiceImpl implements WorkoutPlanService {

    private final WorkoutPlanRepository workoutPlanRepository;

    @Autowired
    public WorkoutPlanServiceImpl(WorkoutPlanRepository workoutPlanRepository) {
        this.workoutPlanRepository = workoutPlanRepository;
    }

    @Override
    public List<WorkoutPlan> getAllWorkoutPlans() {
        return workoutPlanRepository.findAll();
    }

    @Override
    public Optional<WorkoutPlan> getWorkoutPlanById(Long id) {
        return workoutPlanRepository.findById(id);
    }

    @Override
    public WorkoutPlan saveWorkoutPlan(WorkoutPlan workoutPlan) {
        return workoutPlanRepository.save(workoutPlan);
    }

    @Override
    public void deleteWorkoutPlan(Long id) {
        workoutPlanRepository.deleteById(id);
    }

    @Override
    public List<WorkoutPlan> getFeaturedWorkoutPlans() {
        return workoutPlanRepository.findByFeaturedTrue();
    }

    @Override
    public List<WorkoutPlan> getWorkoutPlansByCategory(String category) {
        return workoutPlanRepository.findByCategory(category);
    }

    @Override
    public List<WorkoutPlan> getWorkoutPlansByDifficulty(String difficulty) {
        return workoutPlanRepository.findByDifficulty(difficulty);
    }

    @Override
    public List<WorkoutPlan> getWorkoutPlansByTrainer(String trainer) {
        return workoutPlanRepository.findByTrainer(trainer);
    }
} 