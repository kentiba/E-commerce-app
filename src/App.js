import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import signupAndLogin from "./pages/signUp-login/signUp-login.component";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unSubscribeFromAuth = null;

  componentDidMount() {
    //auth.onauthstatachnage will return a function that when it gets called it will close the subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillMount() {
    return this.unSubscribeFromAuth;
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/authentication" component={signupAndLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
