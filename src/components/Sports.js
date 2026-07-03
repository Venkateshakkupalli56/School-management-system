import React from "react";
import '../styles/Sports.css';

const Sports = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <h1>Elite Sports Arena</h1>
        <p>Unleash your potential, conquer the game</p>
      </header>

      {/* Navigation */}
      {/* <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Sports</a>
        <a href="#">Events</a>
        <a href="#">Membership</a>
        <a href="#">Contact</a>
      </nav> */}

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight">
          <h2>⚽ Football</h2>
          <p>Top‑tier coaching and weekly matches.</p>
        </div>
        <div className="highlight">
          <h2>🏀 Basketball</h2>
          <p>Indoor courts with national‑level trainers.</p>
        </div>
        <div className="highlight">
          <h2>🏏 Cricket</h2>
          <p>Professional pitches and competitive leagues.</p>
        </div>
        <div className="highlight">
          <h2>🏋️ Fitness</h2>
          <p>Modern gym facilities for strength and endurance.</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule">
        <h2>Upcoming Matches</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Sport</th>
              <th>Teams</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>July 10, 2026</td>
              <td>Football</td>
              <td>Elite FC vs Rising Stars</td>
              <td>Main Stadium</td>
            </tr>
            <tr>
              <td>July 15, 2026</td>
              <td>Basketball</td>
              <td>Warriors vs Titans</td>
              <td>Indoor Arena</td>
            </tr>
            <tr>
              <td>July 20, 2026</td>
              <td>Cricket</td>
              <td>Elite XI vs Challengers</td>
              <td>Cricket Ground</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Elite Sports Arena | Train. Compete. Win.</p>
      </footer>
    </div>
  );
};

export default Sports;
