import React, { Component } from "react";
// import { useParams, useLocation, useNavigate, useMatch,useSearchParams } from "react-router-dom";

class ProductDetails extends Component { 

  handleSave(){
    console.log('Save');
  }

  render(){
    return (
      <React.Fragment>
        {/* <h2>{product.title}</h2>
        <span>{product.count}</span> */}
        <button onClick={this.handleSave}>Save</button>
      </React.Fragment>
    )
  }

}

export default ProductDetails;