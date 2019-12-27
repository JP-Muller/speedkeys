import React from "react";

export default function Navbar() {
  const centerNavItem = {
    fontSize: "13px",
    display: "flex",
    justifyContent: "center"
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#1736",
        boxShadow: "0px .8px grey",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px"
      }}
    >
      <a className="navbar-brand" href="#/">
        Speed Keys
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/practice">
              Practice
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/leaderboards">
              Leaderboards
            </a>
          </li>
        </ul>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <ul className="navbar-nav my-2 my-lg-0">
              <div>
                <li className="nav-item active mr-4">Guest</li>
                <a href="#/login">
                  <li className="nav-item active mr-4" style={centerNavItem}>
                    Login
                  </li>
                </a>
              </div>
              <div>
                <li className="nav-item active mr-3">Skill</li>
                <li className="nav-item active mr-3" style={centerNavItem}>
                  0
                </li>
              </div>
              <div>
                <li className="nav-item active mr-3">AVG Speed</li>
                <li className="nav-item active mr-3" style={centerNavItem}>
                  0 WPM
                </li>
              </div>
              <div>
                <li className="nav-item active mr-3">Races</li>
                <li className="nav-item active mr-3" style={centerNavItem}>
                  0
                </li>
              </div>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}
