package com.example.BackendApp.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "workout_weeks")
public class WorkoutWeek {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer weekNumber;
    private String description;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workout_plan_id")
    private WorkoutPlan workoutPlan;
    
    @OneToMany(mappedBy = "workoutWeek", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<WorkoutDay> workouts = new ArrayList<>();

    public WorkoutWeek() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getWeekNumber() {
        return weekNumber;
    }

    public void setWeekNumber(Integer weekNumber) {
        this.weekNumber = weekNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public List<WorkoutDay> getWorkouts() {
        return workouts;
    }

    public void setWorkouts(List<WorkoutDay> workouts) {
        this.workouts = workouts;
    }
    
    public void addWorkout(WorkoutDay workout) {
        workouts.add(workout);
        workout.setWorkoutWeek(this);
    }
    
    public void removeWorkout(WorkoutDay workout) {
        workouts.remove(workout);
        workout.setWorkoutWeek(null);
    }
} 
