import React from "react";

const TrainerMichael = () => {
  return (
    <div style={{ 
      backgroundColor: "#1a1625",
      color: "#ffffff", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#ff6b6b", marginBottom: "30px" }}>Michael Rodriguez - Cardio & HIIT</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop" 
            alt="Michael Rodriguez" 
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
            Michael Rodriguez is a high-energy trainer who specializes in cardio and HIIT workouts. 
            With a background in competitive athletics, he brings intensity and passion to every session, 
            helping clients push their limits and achieve maximum results.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Education & Certifications</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Master's in Exercise Physiology, Stanford University</li>
            <li style={{ marginBottom: "10px" }}>HIIT Specialist Certification, International Sports Sciences Association</li>
            <li style={{ marginBottom: "10px" }}>TRX Suspension Training Certification</li>
            <li style={{ marginBottom: "10px" }}>CPR/AED Certified</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Professional Experience</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>HIIT Program Director at TAGHYEER (2019-Present)</li>
            <li style={{ marginBottom: "10px" }}>Cardio Specialist at Urban Fitness Club (2016-2019)</li>
            <li style={{ marginBottom: "10px" }}>NCAA Track & Field Athlete (2012-2016)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Specialties</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>High-Intensity Interval Training</li>
            <li style={{ marginBottom: "10px" }}>Cardiovascular Conditioning</li>
            <li style={{ marginBottom: "10px" }}>Circuit Training</li>
            <li style={{ marginBottom: "10px" }}>Metabolic Training</li>
            <li style={{ marginBottom: "10px" }}>Sports Performance</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Achievements</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Developed the popular 'HIIT45' program implemented in 5 major gym chains</li>
            <li style={{ marginBottom: "10px" }}>Helped clients lose a combined 2,000+ pounds through his HIIT programs</li>
            <li style={{ marginBottom: "10px" }}>Featured in Men's Health for innovative cardio techniques</li>
            <li style={{ marginBottom: "10px" }}>Former collegiate track star with multiple conference championships</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Classes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>HIIT45</h3>
              <p style={{ marginBottom: "10px" }}>A 45-minute high-intensity interval training session designed to maximize calorie burn and boost metabolism.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Mondays, Wednesdays & Fridays, 6:00 AM - 6:45 AM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Cardio Blast</h3>
              <p style={{ marginBottom: "10px" }}>A heart-pumping cardio session combining running, rowing, and cycling for maximum endurance gains.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Tuesdays & Thursdays, 5:30 PM - 6:30 PM</p>
              <p>Level: Intermediate to Advanced</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Athletic Performance</h3>
              <p style={{ marginBottom: "10px" }}>Specialized training for athletes looking to improve speed, agility, and sport-specific conditioning.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Saturdays, 9:00 AM - 10:30 AM</p>
              <p>Level: Intermediate to Advanced</p>
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
            Book a Session with Michael
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerMichael; 