import React from "react";

const TrainerTest = () => {
  return (
    <div style={{ 
      backgroundColor: "#1a1625",
      color: "#ffffff", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#ff6b6b", marginBottom: "30px" }}>Chris Adam - Strength & Conditioning</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=300&auto=format&fit=crop" 
            alt="Chris Adam" 
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
            Chris Adam is one of our most experienced trainers, specializing in strength training and athletic conditioning. 
            With over a decade of experience, he has helped hundreds of clients achieve their fitness goals through 
            personalized training programs.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Education & Certifications</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Bachelor's degree in Exercise Science, University of California</li>
            <li style={{ marginBottom: "10px" }}>Certified Strength and Conditioning Specialist (CSCS)</li>
            <li style={{ marginBottom: "10px" }}>National Academy of Sports Medicine (NASM) Certified Personal Trainer</li>
            <li style={{ marginBottom: "10px" }}>CrossFit Level 2 Trainer</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Professional Experience</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Head Strength Coach at Elite Athletics (2018-Present)</li>
            <li style={{ marginBottom: "10px" }}>Personal Trainer at FitLife Gym (2015-2018)</li>
            <li style={{ marginBottom: "10px" }}>Strength and Conditioning Coach for University Track Team (2013-2015)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Specialties</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Strength Training</li>
            <li style={{ marginBottom: "10px" }}>Olympic Weightlifting</li>
            <li style={{ marginBottom: "10px" }}>Athletic Performance Enhancement</li>
            <li style={{ marginBottom: "10px" }}>Functional Fitness</li>
            <li style={{ marginBottom: "10px" }}>Resistance Training</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Achievements</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Helped 3 clients qualify for national weightlifting competitions</li>
            <li style={{ marginBottom: "10px" }}>Developed conditioning programs for professional athletes</li>
            <li style={{ marginBottom: "10px" }}>Featured in 'Fitness Today' magazine for innovative training methods</li>
            <li style={{ marginBottom: "10px" }}>Regional Powerlifting Champion (2016)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Classes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Power Lifting Fundamentals</h3>
              <p style={{ marginBottom: "10px" }}>Learn proper form and technique for the big three lifts: squat, bench press, and deadlift.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Tuesdays & Thursdays, 6:00 PM - 7:30 PM</p>
              <p>Level: Beginner to Intermediate</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Athletic Conditioning</h3>
              <p style={{ marginBottom: "10px" }}>High-intensity training focused on improving speed, agility, and explosive power.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Mondays & Wednesdays, 5:30 PM - 7:00 PM</p>
              <p>Level: Intermediate to Advanced</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Olympic Weightlifting</h3>
              <p style={{ marginBottom: "10px" }}>Master the snatch and clean & jerk with proper technique and programming.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Saturdays, 10:00 AM - 12:00 PM</p>
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
            Book a Session with Sarah
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerTest;