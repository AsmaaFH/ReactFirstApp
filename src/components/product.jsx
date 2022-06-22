import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Product extends Component {

  state = {
    name: this.props.product.name,
    count: this.props.product.count,
  }
  
  getClasses(){
    return this.props.product.count === 0 ?
    "badge bg-danger rounded mx-1" :
    this.props.product.count <= 3 ?
    "badge bg-warning rounded mx-1" :
    "badge bg-primary rounded mx-1"
  }
  render() {
    console.log(this.props)
    return (
      <div className='m-1 p-1'>
        <div className="row">
        <Link to = {`/products/${this.props.product.id}`} className='col-md-2'>{this.props.product.name}</Link>
          <span className='col-md-1'><span className={this.getClasses()}>{this.props.product.count}</span></span>
          <span className='text-success col-md-2'>{this.props.product.price}</span>
          <div className='col-md-2'>
            <button onClick={this.props.onIncrement} className='btn btn-primary'>+</button>
          </div>
          <button className='btn col-md-2' onClick={() => this.props.onDelete(this.props.product)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    )
  }
}

export default Product;