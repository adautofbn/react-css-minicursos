import React, { Component } from "react";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";

export default class ProductSummary extends Component {
  render() {
    // TODO: implement this component
    return (
      <div className="app-wrapper">
        {this.props.products.map(product => {
          return (
            <article className="item-wrapper">
              <>
                <img src={product.items[0].images[0].imageUrl} />
                <ProductName names={product.productName} />
                <ProductPrice
                  prices={product.items[0].sellers[0].commertialOffer.Price}
                />
                <BuyButton />
              </>
            </article>
          );
        })}
      </div>
    );
  }
}
