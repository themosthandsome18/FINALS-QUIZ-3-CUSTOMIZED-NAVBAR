import React from 'react';
import '../style.css';

export default function Projects() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>Projects I've done and proud of</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
          <li>🎬 <strong>FILM ACTORS</strong> – I've been an actor for over 8 years a talent I never specifically wished for, but one I'm incredibly grateful to have discovered.</li>
          <li>✨ <strong>PORTFOLIO WEBSITE</strong> – A responsive React portfolio to showcase my skills.</li>
          <li>🎞️ <strong>EDITOR</strong> – I love editing, especially when it’s something that excites me. When a project sparks my interest, I pour my energy into perfecting every detail. But if it doesn’t resonate with me, I’ll be honest I don’t invest as much effort.</li>
          <li>🌐 <strong>API INTEGREGATION</strong> – Connect to public APIs to retrieve and present real-time data.</li>
          <li>🎤 <strong>SINGING</strong> – Singing has always been a part of who I am. Whether I'm performing for an audience or simply enjoying the music</li>
          <li>🕺 <strong>DANCING</strong> – As for dancing it's how I express who I am and connect with the world around me.</li>
          <li>🖌️ <strong>WEB DESIGN</strong> – I’m currently learning web design through online resources like YouTube. While I’m still growing my skills, I’m determined to improve and make web design my career one day.</li>
        </ul>
      </div>
    </section>
  );
}