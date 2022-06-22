import React, { Component } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "./navbar";
import ShoppingCard from "./shoppingCard";
import About from "./about";
import Team from './team';
import Company from './company';
import Home from "./home";
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu';
import Login from './login';
import Admin from './Admin';
import ProductForm from './prodForm';

class App extends Component {
  state = {
    products:[
    ],
    cart:[]
  };

  async componentDidMount(){
    let {data} = await axios.get('http://localhost:3000/products')
    this.setState({products: data})
  }

  render() {
    return(
      <React.Fragment>
        <Navbar itemsCount={this.state.products.filter(p=>p.count>0).length}></Navbar>
        <main className='container'>
          <Routes>
            <Route path="/about" element={<About />} >
              <Route path='team' element={<Team />}></Route>
              <Route path='company' element={<Company />}></Route>
            </Route>

            <Route path="/manu" element={<Menu products={this.state.products} onCartChange={this.handleCartChange}/>}/>

            <Route path="/login" element={<Login />} />
            <Route path="/card" element={
              <ShoppingCard
              products={this.state.products}
              onDelete={this.handleCartChange}
              onIncrement={this.incrementHandler}
              onReset={this.resetHandler}>
            </ShoppingCard>
            } />
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<Admin products={this.state.products}/>} />
            <Route path="productform/:id" element={<ProductForm />} />
            <Route path="/products/:id" element={<ProductDetails products={this.state.products}/>} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/home"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>
      </React.Fragment>
    )
  }
  handleDelete = (prod) => {
    const products = this.state.products.filter(p => p.id !== prod.id);
    this.setState({products});
  }
  resetHandler = () => {
    let products =[...this.state.products]
    products = products.map(p => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  }
  incrementHandler = (product) => {
    
    let incProduct = this.state.products.filter(p => p.id === product.id);

    let count = ++incProduct[0].count;
    this.setState({count})
  }
  handleCartChange = (prod) =>{
    let products = [...this.state.products]
    let myProd = products.filter(p => p.id === prod.id)[0]
    myProd.isInCart =!myProd.isInCart;
    this.setState({products})
  }
}

export default App;