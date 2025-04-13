import React from "react";

const TrainerDavid = () => {
  return (
    <div style={{ 
      backgroundColor: "#1a1625",
      color: "#ffffff", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#ff6b6b", marginBottom: "30px" }}>David Wilson - Nutrition & Weight Loss</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop" 
            alt="David Wilson" 
            style={{ 
              width: "200px", 
              height: "200px", 
              objectFit: "cover", 
              borderRadius: "50%",
              marginBottom: "20px",
              border: "3px solid #ff6b6b"
            }} 
          />
          <p style={{ textAlign: "center", maxWidth: "700px", lineHeight: "1.6", marginBottom: "20px" }}>
            David Wilson combines evidence-based nutrition science with practical coaching to help clients 
            transform their relationship with food. With a specialty in sustainable weight management, 
            David has helped hundreds of clients achieve their body composition goals without extreme diets.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Education & Certifications</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Master's in Nutritional Science, Cornell University</li>
            <li style={{ marginBottom: "10px" }}>Certified Sports Nutritionist, International Society of Sports Nutrition</li>
            <li style={{ marginBottom: "10px" }}>Precision Nutrition Level 2 Coach</li>
            <li style={{ marginBottom: "10px" }}>Certified Diabetes Educator</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Professional Experience</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Head of Nutrition at TAGHYEER (2018-Present)</li>
            <li style={{ marginBottom: "10px" }}>Clinical Nutritionist, University Hospital (2015-2018)</li>
            <li style={{ marginBottom: "10px" }}>Sports Team Nutritionist, Professional Soccer (2012-2015)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Specialties</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Weight Management</li>
            <li style={{ marginBottom: "10px" }}>Metabolic Optimization</li>
            <li style={{ marginBottom: "10px" }}>Sports Nutrition</li>
            <li style={{ marginBottom: "10px" }}>Meal Planning</li>
            <li style={{ marginBottom: "10px" }}>Habit-Based Coaching</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Achievements</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Helped clients lose a combined total of 5,000+ pounds with 85% maintaining their results</li>
            <li style={{ marginBottom: "10px" }}>Developed the 'Metabolic Reset' program used in our nutrition department</li>
            <li style={{ marginBottom: "10px" }}>Author of 'Eat for Performance' with foreword by Olympic athletes</li>
            <li style={{ marginBottom: "10px" }}>Regular contributor to Nutrition Science Review</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Classes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Metabolic Reset</h3>
              <p style={{ marginBottom: "10px" }}>A comprehensive approach to optimizing metabolism and facilitating sustainable weight loss.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Mondays, 6:30 PM - 8:00 PM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Sports Nutrition</h3>
              <p style={{ marginBottom: "10px" }}>Learn how to fuel your body for optimal athletic performance and recovery.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Wednesdays, 5:30 PM - 7:00 PM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Meal Prep Workshop</h3>
              <p style={{ marginBottom: "10px" }}>Hands-on workshop teaching practical meal preparation skills for healthy eating on a busy schedule.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Every other Saturday, 10:00 AM - 12:00 PM</p>
              <p>Level: All Levels</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
          <button style={{ 
            backgroundColor: "#ff6b6b", 
            color: "white", 
            padding: "12px 30px", 
            fontSize: "16px", 
            border: "none", 
            borderRadius: "5px",
            cursor: "pointer" 
          }}>
            Book a Session with David
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerDavid; 