package com.example.BackendApp.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "workout_plans")
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    
    @Column(columnDefinition = "TEXT")
    private String longDescription;
    
    private String category;
    private Integer duration;
    private Integer sessions;
    private String difficulty;
    private String image;
    private boolean featured;
    private String trainer;
    private String trainerImage;
    
    @ElementCollection
    private List<String> equipment = new ArrayList<>();
    
    @ElementCollection
    private List<String> goals = new ArrayList<>();
    
    @OneToMany(mappedBy = "workoutPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<WorkoutWeek> weeks = new ArrayList<>();
    
    @OneToMany(mappedBy = "workoutPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<WorkoutReview> reviews = new ArrayList<>();

    public WorkoutPlan() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Integer getSessions() {
        return sessions;
    }

    public void setSessions(Integer sessions) {
        this.sessions = sessions;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public String getTrainerImage() {
        return trainerImage;
    }

    public void setTrainerImage(String trainerImage) {
        this.trainerImage = trainerImage;
    }

    public List<String> getEquipment() {
        return equipment;
    }

    public void setEquipment(List<String> equipment) {
        this.equipment = equipment;
    }

    public List<String> getGoals() {
        return goals;
    }

    public void setGoals(List<String> goals) {
        this.goals = goals;
    }

    public List<WorkoutWeek> getWeeks() {
        return weeks;
    }

    public void setWeeks(List<WorkoutWeek> weeks) {
        this.weeks = weeks;
    }

    public List<WorkoutReview> getReviews() {
        return reviews;
    }

    public void setReviews(List<WorkoutReview> reviews) {
        this.reviews = reviews;
    }
    
    public void addWeek(WorkoutWeek week) {
        weeks.add(week);
        week.setWorkoutPlan(this);
    }
    
    public void removeWeek(WorkoutWeek week) {
        weeks.remove(week);
        week.setWorkoutPlan(null);
    }
    
    public void addReview(WorkoutReview review) {
        reviews.add(review);
        review.setWorkoutPlan(this);
    }
    
    public void removeReview(WorkoutReview review) {
        reviews.remove(review);
        review.setWorkoutPlan(null);
    }
} 
