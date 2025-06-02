package com.example.BackendApp.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_workout_plans")
public class UserWorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "workout_plan_id", nullable = false)
    private WorkoutPlan workoutPlan;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "last_accessed")
    private LocalDateTime lastAccessed;

    @Column(name = "current_week")
    private Integer currentWeek = 1;

    @Column(name = "is_active")
    private boolean active = false;
    
    @Column(name = "is_saved")
    private boolean saved = false;
    
    @Column(name = "completion_percentage")
    private Integer completionPercentage = 0;

    // Default constructor
    public UserWorkoutPlan() {
        this.startDate = LocalDateTime.now();
        this.lastAccessed = LocalDateTime.now();
    }

    // Constructor with user and workout plan
    public UserWorkoutPlan(User user, WorkoutPlan workoutPlan) {
        this();
        this.user = user;
        this.workoutPlan = workoutPlan;
    }

    // Constructor with user, workout plan, and status flags
    public UserWorkoutPlan(User user, WorkoutPlan workoutPlan, boolean active, boolean saved) {
        this(user, workoutPlan);
        this.active = active;
        this.saved = saved;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getLastAccessed() {
        return lastAccessed;
    }

    public void setLastAccessed(LocalDateTime lastAccessed) {
        this.lastAccessed = lastAccessed;
    }

    public Integer getCurrentWeek() {
        return currentWeek;
    }

    public void setCurrentWeek(Integer currentWeek) {
        this.currentWeek = currentWeek;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public boolean isSaved() {
        return saved;
    }

    public void setSaved(boolean saved) {
        this.saved = saved;
    }

    public Integer getCompletionPercentage() {
        return completionPercentage;
    }

    public void setCompletionPercentage(Integer completionPercentage) {
        this.completionPercentage = completionPercentage;
    }
    
    // Update the last accessed timestamp
    public void updateLastAccessed() {
        this.lastAccessed = LocalDateTime.now();
    }
} 