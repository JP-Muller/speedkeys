import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dash-master">
      <aside className='ad-column'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08APsAnQxOyiWsxuOmKGFDkXJ06FXCxI4iFk9wnweozoRHa2u&s' alt='ad-column' />
      </aside>
      <main className='main-content'>
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
      </main>
      <aside className='ad-column'>
        <img src='https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2018/07/free-trial-planet-2-med.jpg' alt='ad-column' />
      </aside>
    </div>
  );
}

export default Dashboard;
