import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../store/user/user.actions";
import { connect } from "react-redux";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    e.preventDefault();
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userInfo => dispatch(signUpStart(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);
