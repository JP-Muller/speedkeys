import React from "react";
import { signup } from "../../Redux/Reducers/userReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  let { user } = props;

  function registerUser() {
    let profilePic = `https://robohash.org/${username}`;
    props.signup(username, password, country, profilePic);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      registerUser();
    }
  }

  return <div>hehe</div>;
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps, { signup })(Register);
