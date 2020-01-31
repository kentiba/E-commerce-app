import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignupAndLogin from "./pages/signUp-login/signUp-login.component";

import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionsSnapShotToMap
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./store/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./store/user/user.selectors";
import { updateCollections } from "./store/shop/shop.actions";
import "./App.css";
import CheckoutPage from "./pages/checkout/checkout.component";
import CollectionPage from "./pages/collection/collection.component";

class App extends React.Component {
  unSubscribeFromAuth = null;
  unSubscribeFromSnap = null;
  componentDidMount() {
    //// STORING USER AUTHENTICATION ////
    const { setCurrentUser, updateCollections } = this.props;
    //auth.onauthstatachnage will return a function that when it gets called it will close the subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //onSnapshot will fire whenever there is a change in the data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });

    //// IMPORTING COLLECTIONS FROM FIREBASE ////
    //TODO : this should be moved to shop component or homepage
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapShot => {
      const collectionMap = convertCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionMap);
    });
  }

  componentWillMount() {
    return this.unSubscribeFromAuth;
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/authentication"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignupAndLogin />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
