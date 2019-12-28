import React from "react";
import { login } from "../../Redux/Reducers/userReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./Auth.css";

function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function loginUser(e) {
    props.login(username, password);
    e.preventDefault()
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      loginUser();
    }
  }

  let { user } = props;
  if (user.loggedIn) return <Redirect to="/" />;
  return (
    <div className="parent-container">
      <form>
        <div className="container">
          <label>
            <b>Username:</b>
          </label>
          <input
            type="text"
            value={username}
            placeholder="Enter Username"
            onChange={e => setUsername(e.target.value)}
            required
          />

          <label>
            <b>Password:</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button" onClick={e => loginUser(e)}>
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" /> Remember
            me
          </label>
          <p>
            Not a member? <a href="#/register">Sign up here</a>
          </p>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <a href="/">
            <button type="button" className="cancel-button">
              Cancel
            </button>
          </a>
          <span className="password-recovery">
            Forgot <a href="#/">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps, { login })(Login);
