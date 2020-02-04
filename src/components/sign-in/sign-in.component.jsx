import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSigninStart,
  emailSigninStart
} from "../../store/user/user.actions";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.emailSigninStart(email, password);
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSigninStart } = this.props;
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
