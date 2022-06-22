import React, { Component } from "react";
import Cart from "./cart";

class Menu extends Component {

  addToCart(){

  }
  render() {
    return (
      <React.Fragment>
        <h1>Menu</h1>
        <table className="table">
          <thead>
            <tr>
              <th key="1" scope="col">Name</th>
              <th key="2" scope="col">Price</th>
              <th key="3" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map( prod => 
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <Cart product = {prod} onclick={(prod) => this.props.onCartChange(prod)}/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Menu;