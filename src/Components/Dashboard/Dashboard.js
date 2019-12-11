import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dash-container">
      <header className='mt-3 mb-4'>
        <h1>SpeedKeys - Test your speed!</h1>
      </header>
      <div className="menu-link">
        <a href="#/practice">
          <h3>Solo Play</h3>
        </a>
        <p>Increase your typing skills on your own</p>
      </div>
      <div className="menu-link">
        <h3>Multiplayer</h3>
        <p>Join other players and compete online!</p>
      </div>
    </div>
  );
}

export default Dashboard;
