package com.example.BackendApp.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "workout_days")
public class WorkoutDay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String day;
    private String focus;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workout_week_id")
    private WorkoutWeek workoutWeek;
    
    @OneToMany(mappedBy = "workoutDay", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Exercise> exercises = new ArrayList<>();

    public WorkoutDay() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getFocus() {
        return focus;
    }

    public void setFocus(String focus) {
        this.focus = focus;
    }

    public WorkoutWeek getWorkoutWeek() {
        return workoutWeek;
    }

    public void setWorkoutWeek(WorkoutWeek workoutWeek) {
        this.workoutWeek = workoutWeek;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
    
    public void addExercise(Exercise exercise) {
        exercises.add(exercise);
        exercise.setWorkoutDay(this);
    }
    
    public void removeExercise(Exercise exercise) {
        exercises.remove(exercise);
        exercise.setWorkoutDay(null);
    }
} 
