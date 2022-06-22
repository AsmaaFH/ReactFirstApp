import React, { Component } from 'react';

import axios from 'axios';

class ProductForm extends Component {

  state = {
    name: 'name',
    price: 'price',
  }
  
  HandleSubmit = async (e) => {
    e.preventDefault();
    const obj ={...this.state, count: 0, isInCart: false}
    await axios.post('http://localhost:3000/products', obj)
    console.log('Submit')
  }

  getProduct = async () => {
    console.log('getProduct')
    const prod = await axios.get('http://localhost:3000/products/3').then(res=> console.log(res.data))
  }
  
  HandleChange = e => {
    let state ={...this.state}
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state)
  }

  render() {
    return (
    <React.Fragment>
      <button onClick={this.getProduct}>Test</button>
      <h1>Add/Update</h1>
      <form className="mt-3" onSubmit={this.HandleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">name</label>
          <div className="col-sm-10">
            <input 
              name="name"
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.HandleChange}
            />

          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input 
              name="price"
              type="number" 
              placeholder='Price'
              className="form-control" 
              id="price" 
              value={this.state.price}
              onChange={this.HandleChange}
            />
            
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </React.Fragment>
    )
  }
}

export default ProductForm;
