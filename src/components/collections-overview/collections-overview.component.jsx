import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../store/shop/shop.selectors";
import "./collections-overview.styles.scss";
import WithSpinner from "../with-spinner/with-spinner.component";

const collectionsOverview = ({ collections }) => {
  return collections ? (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  ) : (
    <WithSpinner />
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(collectionsOverview);
