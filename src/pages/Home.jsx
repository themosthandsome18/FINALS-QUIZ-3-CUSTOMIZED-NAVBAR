import React from 'react';
import '../style.css';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="about-container">
      <img src={profile} alt="Profile" className="profile-img" />
      <h1>Zup it's Ralph Richmond Amarillo</h1>
      <h2>Editor, Actors, Malandi</h2>
      <p>
       I'm a storyteller at heart    part editor, part actor, and 100% personality.
With a passion for seamless transitions and emotionally driven scenes, I thrive both behind the screen and in front of the camera. My editing brings rhythm and polish to raw footage, while my acting breathes life into characters and moments.Whether it’s adding charm to a performance or extra flair to a project, I believe that boldness and authenticity make everything more memorable.
      </p>
    </section>
  );
}