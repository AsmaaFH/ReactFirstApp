import Joi from "joi-browser";
import React, { Component } from "react";

class Login extends Component {

  state = {
    username: 'username',
    password: 'password',
    email: 'example@gmail.com',
    errors:{}
  }

 
  schema = Joi.object().keys({
    password: Joi.string()
      .required()
      .label("Password"),
    username: Joi.string()
      .label("Username")
      .required(),
    
    email: Joi.string()
      .label("Email")
      .required()
  });

  HandleSubmit = (e) =>{
    e.preventDefault();
    
    const errors = this.validate();

    if(errors) return;

    //Backend Call
    console.log('Submit');
  }
  validate = () => {

    let state = {...this.state};
    delete state.errors

    let result = Joi.validate(state, this.schema,  { abortEarly: false })

    let errors ={};

    if(result.error === null){
      this.setState({ errors: {} });
      return null
    }

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    this.setState({errors})
    return errors
  }

  HandleChange = e => {
    let state ={...this.state}
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state)
  }
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form className="mt-3" onSubmit={this.HandleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input 
                name="username"
                type="text"
                className="form-control"
                id="inputUsername3"
                value={this.state.username}
                onChange={this.HandleChange}
              />
              {this.state.errors.username && <div className="alert alert-danger mt-1">{this.state.errors.username}</div>}

            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input 
                name="password"
                type="password" 
                className="form-control" 
                id="inputPassword3" 
                value={this.state.password}
                onChange={this.HandleChange}
              />
              {this.state.errors.password && <div className="alert alert-danger mt-1">{this.state.errors.password}</div>}
              
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label mt-1">Email</label>
            <div className="col-sm-10">
              <input 
                name="email"
                type="email" 
                className="form-control" 
                id="email" 
                value={this.state.email}
                onChange={this.HandleChange}
              />
              {this.state.errors.email && <div className="alert alert-danger">{this.state.errors.email}</div>}

            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Login;