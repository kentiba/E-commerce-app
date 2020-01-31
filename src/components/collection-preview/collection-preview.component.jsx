import React from "react";
import Collectionitem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import "./collection-preview.styles.scss";
const collectionPreview = ({ routeName, title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <Collectionitem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default collectionPreview;
