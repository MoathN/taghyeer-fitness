import React from "react";

const TrainerChris = () => {
  return (
    <div style={{ 
      backgroundColor: "#1a1625",
      color: "#ffffff", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#ff6b6b", marginBottom: "30px" }}>Chris Thompson - Bodybuilding</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop" 
            alt="Chris Thompson" 
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
            Chris Thompson is a professional bodybuilder with extensive experience in muscle development and physique transformation.
            With over 15 years in competitive bodybuilding, Chris brings unparalleled expertise in the art and science of building 
            an aesthetic physique while maintaining optimal health.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Education & Certifications</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Bachelor's in Sports Science, Ohio State University</li>
            <li style={{ marginBottom: "10px" }}>IFBB Professional Bodybuilder</li>
            <li style={{ marginBottom: "10px" }}>Certified Strength and Conditioning Specialist (CSCS)</li>
            <li style={{ marginBottom: "10px" }}>Sports Nutrition Specialist</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Professional Experience</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Head Bodybuilding Coach at TAGHYEER (2020-Present)</li>
            <li style={{ marginBottom: "10px" }}>Professional Bodybuilding Competitor (2013-Present)</li>
            <li style={{ marginBottom: "10px" }}>Physique Transformation Specialist, Elite Fitness (2015-2020)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Specialties</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Hypertrophy Training</li>
            <li style={{ marginBottom: "10px" }}>Competition Preparation</li>
            <li style={{ marginBottom: "10px" }}>Body Recomposition</li>
            <li style={{ marginBottom: "10px" }}>Advanced Training Techniques</li>
            <li style={{ marginBottom: "10px" }}>Posing and Presentation</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Achievements</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>3-time National Physique Committee (NPC) Champion</li>
            <li style={{ marginBottom: "10px" }}>IFBB Pro Card holder since 2016</li>
            <li style={{ marginBottom: "10px" }}>Top 5 placement in Mr. Olympia 2019</li>
            <li style={{ marginBottom: "10px" }}>Featured in multiple fitness publications including Muscle & Fitness</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Classes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Mass Building 101</h3>
              <p style={{ marginBottom: "10px" }}>Learn the fundamentals of effective muscle building through proper training, nutrition, and recovery.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Mondays & Thursdays, 6:00 PM - 7:30 PM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Competition Prep</h3>
              <p style={{ marginBottom: "10px" }}>Comprehensive preparation for bodybuilding and physique competitions, including training, nutrition, and posing.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Tuesdays & Fridays, 5:30 PM - 7:00 PM</p>
              <p>Level: Advanced</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Advanced Techniques</h3>
              <p style={{ marginBottom: "10px" }}>Master advanced training methods like drop sets, supersets, and periodization for continued muscle growth.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Wednesdays, 7:00 PM - 8:30 PM</p>
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
            Book a Session with Chris
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerChris; 