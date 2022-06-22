import React, { Component } from "react";
import Product from './product';


class ShoppingCard extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Shopping Card</h1>
        <button onClick={this.props.onReset} className="btn btn-secondary">Reset</button>
        {this.props.products.filter(p => p.isInCart).map(product => 
          <Product 
            key={product.id} 
            product = {product} 
            onDelete = {()=>this.props.onDelete(product)} 
            onIncrement={()=>this.props.onIncrement(product)}>
            <h2>{product.id}</h2>
          </Product>
        )}
      </React.Fragment>
    )
  }
}

export default ShoppingCard;