import React from "react";

const TrainerJasmine = () => {
  return (
    <div style={{ 
      backgroundColor: "#1a1625",
      color: "#ffffff", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#ff6b6b", marginBottom: "30px" }}>Jasmine Ali - Functional Training</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=300&auto=format&fit=crop" 
            alt="Jasmine Ali" 
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
            Jasmine Ali is an expert in functional training, focusing on improving movement patterns for everyday health.
            With her innovative approach to fitness, she helps clients build strength, mobility, and coordination
            that translates directly to improved quality of life and injury prevention.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Education & Certifications</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Master's in Exercise Science, University of Florida</li>
            <li style={{ marginBottom: "10px" }}>Functional Movement Systems (FMS) Level 2 Certified</li>
            <li style={{ marginBottom: "10px" }}>NASM Corrective Exercise Specialist</li>
            <li style={{ marginBottom: "10px" }}>Precision Nutrition Coach</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Professional Experience</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Functional Training Specialist at TAGHYEER (2019-Present)</li>
            <li style={{ marginBottom: "10px" }}>Movement Coach at Athletic Performance Institute (2016-2019)</li>
            <li style={{ marginBottom: "10px" }}>Rehabilitation Assistant, Sports Medicine Clinic (2014-2016)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Specialties</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Functional Movement Training</li>
            <li style={{ marginBottom: "10px" }}>Movement Pattern Correction</li>
            <li style={{ marginBottom: "10px" }}>Mobility and Stability Work</li>
            <li style={{ marginBottom: "10px" }}>Injury Prevention</li>
            <li style={{ marginBottom: "10px" }}>Core Strength Development</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Achievements</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Developed the "Move Better, Live Better" program implemented in corporate wellness initiatives</li>
            <li style={{ marginBottom: "10px" }}>Helped 200+ clients overcome chronic pain through corrective exercise</li>
            <li style={{ marginBottom: "10px" }}>Featured speaker at the Functional Movement Summit 2022</li>
            <li style={{ marginBottom: "10px" }}>Contributor to "Movement Matters" publications</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Classes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Functional Foundations</h3>
              <p style={{ marginBottom: "10px" }}>Master the fundamental movement patterns that form the basis of all physical activity.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Mondays & Wednesdays, 4:30 PM - 5:30 PM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Movement Restoration</h3>
              <p style={{ marginBottom: "10px" }}>Focused on correcting movement dysfunction and restoring optimal mobility and stability.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Tuesdays & Thursdays, 6:30 PM - 7:30 PM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Core & More</h3>
              <p style={{ marginBottom: "10px" }}>Build core strength and stability that transfers to improved performance in all activities.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Fridays, 5:00 PM - 6:00 PM</p>
              <p>Level: Intermediate</p>
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
            Book a Session with Jasmine
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerJasmine; 