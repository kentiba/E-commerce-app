import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../store/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  return collection ? (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <WithSpinner />
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
