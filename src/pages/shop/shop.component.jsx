import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../store/shop/shop.actions";
import { connect } from "react-redux";

import CollectionPage from "../collection/collection.component";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <CollectionsOverview />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
          exact
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
