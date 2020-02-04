import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../store/user/user.actions";
import { connect } from "react-redux";
import "./sign-up.styles.scss";
export class signUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }
    const { signUpStart } = this.props;
    signUpStart({ displayName, email, password });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="Display Name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userInfo => dispatch(signUpStart(userInfo))
});

export default connect(null, mapDispatchToProps)(signUp);
