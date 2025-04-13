import React from "react";

const TrainerEmily = () => {
  return (
    <div style={{ 
      backgroundColor: "#1a1625",
      color: "#ffffff", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#ff6b6b", marginBottom: "30px" }}>Emily Chen - Yoga & Flexibility</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&auto=format&fit=crop" 
            alt="Emily Chen" 
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
            Emily Chen brings tranquility and mindfulness to TAGHYEER with her extensive yoga expertise. 
            A registered yoga teacher with over 500 hours of training, Emily helps clients improve flexibility, 
            reduce stress, and create harmony between mind and body.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Education & Certifications</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>RYT-500 Certification, Yoga Alliance</li>
            <li style={{ marginBottom: "10px" }}>Bachelor's in Kinesiology, University of Washington</li>
            <li style={{ marginBottom: "10px" }}>Meditation and Mindfulness Certification</li>
            <li style={{ marginBottom: "10px" }}>Specialized training in Yin Yoga and Restorative practices</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Professional Experience</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Lead Yoga Instructor at TAGHYEER (2017-Present)</li>
            <li style={{ marginBottom: "10px" }}>Founder of Mindful Movement Yoga Studio (2015-2017)</li>
            <li style={{ marginBottom: "10px" }}>Wellness Retreat Leader, International (2013-Present)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Specialties</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Vinyasa Flow</li>
            <li style={{ marginBottom: "10px" }}>Yin Yoga</li>
            <li style={{ marginBottom: "10px" }}>Flexibility Training</li>
            <li style={{ marginBottom: "10px" }}>Meditation Practices</li>
            <li style={{ marginBottom: "10px" }}>Injury Recovery Yoga</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Achievements</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Developed yoga therapy program helping 150+ clients recover from injuries</li>
            <li style={{ marginBottom: "10px" }}>Led yoga retreats in Bali, Costa Rica, and Thailand</li>
            <li style={{ marginBottom: "10px" }}>Author of 'Everyday Flexibility' e-book with 10,000+ downloads</li>
            <li style={{ marginBottom: "10px" }}>Featured in Yoga Journal for innovative flexibility techniques</li>
          </ul>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#ff6b6b", marginBottom: "15px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>Classes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Morning Flow</h3>
              <p style={{ marginBottom: "10px" }}>Start your day with a revitalizing Vinyasa flow that energizes the body and calms the mind.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Mondays, Wednesdays & Fridays, 7:00 AM - 8:00 AM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Restorative Yin</h3>
              <p style={{ marginBottom: "10px" }}>A gentle practice focusing on deep tissue release, improved flexibility, and stress reduction.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Tuesdays & Thursdays, 7:30 PM - 8:45 PM</p>
              <p>Level: All Levels</p>
            </div>
            <div style={{ backgroundColor: "#2a2a4a", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Yoga for Athletes</h3>
              <p style={{ marginBottom: "10px" }}>Specialized yoga practice designed to complement athletic training, enhance recovery, and prevent injuries.</p>
              <p style={{ marginBottom: "10px" }}>Schedule: Sundays, 10:00 AM - 11:15 AM</p>
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
            Book a Session with Emily
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerEmily; 