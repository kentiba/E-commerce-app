import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { fetchCollectionStart } from "../../store/shop/shop.actions";
import { connect } from "react-redux";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
