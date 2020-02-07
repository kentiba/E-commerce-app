import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSigninStart,
  emailSigninStart
} from "../../store/user/user.actions";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

const SignIn = ({ googleSigninStart, emailSigninStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSigninStart(email, password);
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          required
          label="email"
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="password"
          required
          label="password"
          value={password}
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSigninStart}
          >
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
