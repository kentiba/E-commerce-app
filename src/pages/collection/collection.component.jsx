import React, { Component } from "react";
import { connect } from "react-redux";
import {
  selectCollection,
  errorMessage,
  isFetching
} from "../../store/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import "./collection.styles.scss";
import { fetchCollectionStart } from "../../store/shop/shop.actions";

class CollectionPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionStart();
  }
  render() {
    const { collection, isFetching, errorMessage } = this.props;
    console.log(collection, isFetching, errorMessage);

    if (!isFetching && collection) {
      return (
        <div className="collection-page">
          <h2 className="title">{collection.title}</h2>
          <div className="items">
            {collection.items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    } else if (errorMessage) {
      return <p>Error: {errorMessage}</p>;
    } else {
      return <WithSpinner />;
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  errorMessage: errorMessage(state),
  isFetching: isFetching(state)
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
