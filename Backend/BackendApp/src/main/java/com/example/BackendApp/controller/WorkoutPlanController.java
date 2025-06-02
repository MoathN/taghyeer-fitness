package com.example.BackendApp.controller;

import com.example.BackendApp.model.WorkoutPlan;
import com.example.BackendApp.service.WorkoutPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/workout-plans")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176", 
                        "http://127.0.0.1:5173", "http://127.0.0.1:5174", "http://127.0.0.1:5175", "http://127.0.0.1:5176",
                        "http://192.168.8.184:5173", "http://192.168.8.184:5174", "http://192.168.8.184:5175", "http://192.168.8.184:5176"}, 
             allowCredentials = "true")
public class WorkoutPlanController {

    private final WorkoutPlanService workoutPlanService;

    @Autowired
    public WorkoutPlanController(WorkoutPlanService workoutPlanService) {
        this.workoutPlanService = workoutPlanService;
    }

    @GetMapping
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlans() {
        List<WorkoutPlan> workoutPlans = workoutPlanService.getAllWorkoutPlans();
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getWorkoutPlanById(@PathVariable Long id) {
        return workoutPlanService.getWorkoutPlanById(id)
                .map(workoutPlan -> new ResponseEntity<Object>(workoutPlan, HttpStatus.OK))
                .orElse(new ResponseEntity<>(Map.of(
                    "success", false,
                    "message", "Workout plan not found with id: " + id
                ), HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<WorkoutPlan> createWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        WorkoutPlan savedWorkoutPlan = workoutPlanService.saveWorkoutPlan(workoutPlan);
        return new ResponseEntity<>(savedWorkoutPlan, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateWorkoutPlan(@PathVariable Long id, @RequestBody WorkoutPlan workoutPlan) {
        return workoutPlanService.getWorkoutPlanById(id)
                .map(existingWorkoutPlan -> {
                    workoutPlan.setId(id);
                    WorkoutPlan updatedWorkoutPlan = workoutPlanService.saveWorkoutPlan(workoutPlan);
                    return new ResponseEntity<Object>(updatedWorkoutPlan, HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>(Map.of(
                    "success", false,
                    "message", "Workout plan not found with id: " + id
                ), HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteWorkoutPlan(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        
        return workoutPlanService.getWorkoutPlanById(id)
                .map(workoutPlan -> {
                    workoutPlanService.deleteWorkoutPlan(id);
                    response.put("success", true);
                    response.put("message", "Workout plan deleted successfully");
                    return new ResponseEntity<>(response, HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>(Map.of(
                    "success", false,
                    "message", "Workout plan not found with id: " + id
                ), HttpStatus.NOT_FOUND));
    }

    @GetMapping("/featured")
    public ResponseEntity<List<WorkoutPlan>> getFeaturedWorkoutPlans() {
        List<WorkoutPlan> featuredWorkoutPlans = workoutPlanService.getFeaturedWorkoutPlans();
        return new ResponseEntity<>(featuredWorkoutPlans, HttpStatus.OK);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<WorkoutPlan>> getWorkoutPlansByCategory(@PathVariable String category) {
        List<WorkoutPlan> workoutPlans = workoutPlanService.getWorkoutPlansByCategory(category);
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }

    @GetMapping("/difficulty/{difficulty}")
    public ResponseEntity<List<WorkoutPlan>> getWorkoutPlansByDifficulty(@PathVariable String difficulty) {
        List<WorkoutPlan> workoutPlans = workoutPlanService.getWorkoutPlansByDifficulty(difficulty);
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }

    @GetMapping("/trainer/{trainer}")
    public ResponseEntity<List<WorkoutPlan>> getWorkoutPlansByTrainer(@PathVariable String trainer) {
        List<WorkoutPlan> workoutPlans = workoutPlanService.getWorkoutPlansByTrainer(trainer);
        return new ResponseEntity<>(workoutPlans, HttpStatus.OK);
    }
} 