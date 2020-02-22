import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./store/user/user.selectors";
import { checkUserSession } from "./store/user/user.actions";
import WithSpinner from "./components/with-spinner/with-spinner.component";
import "./App.css";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import paymentSuccessfullPage from "./pages/paymentSuccessfullPage/paymentSuccessfullPage.component";
//lazy loading -- to prevent downloading all files when the user navigate only to landing page
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignupAndLogin = lazy(() =>
  import("./pages/signUp-login/signUp-login.component")
);
const CollectionPage = lazy(() =>
  import("./pages/collection/collection.component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<WithSpinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/shop/:collectionId"
              component={CollectionPage}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/done" component={paymentSuccessfullPage} />
            <Route
              exact
              path="/authentication"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignupAndLogin />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
