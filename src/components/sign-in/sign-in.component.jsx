import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";
export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            label="email"
            value={email}
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            required
            label="password"
            value={password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
