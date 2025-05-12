import React from 'react';
import '../style.css';
import profile from '../assets/profile.jpg'; 

export default function About() {
  return (
    <section className="about-container">
       <div className="about-text">
       <img src={profile} alt="Profile" className="profile-img" />
          <h2>Know about Me</h2>
          <p>
            I’m a passionate creative specializing in both video editing and acting. Welp sometimes i dont give effort in things that doesnt intrig me, With a strong eye for detail and storytelling, I bring raw footage to life through clean, impactful edits ensuring every scene flows with purpose and emotion.
          </p>
          <p>
            As an <strong>actor</strong>, I thrive in expressing authentic characters and connecting with audiences through nuanced performance. My work is driven by a deep appreciation for visual <strong>storytelling</strong>,<strong> strong collaboration</strong>, and a <strong>bold</strong>, expressive energy that adds personality to every project.
          </p>
        </div>
    </section>
  );
}