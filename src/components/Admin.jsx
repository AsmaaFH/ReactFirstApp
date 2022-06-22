import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Admin extends Component {

  render() {
    console.log(this.props);
    return (
    <React.Fragment>
      <Link to="/productform/new" className="badge bg-primary">Add New</Link>
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
                <Link to ={`/productform/${prod.id}`} className="badge bg-primary">
                  <FontAwesomeIcon  icon={faPenToSquare}/>
                </Link>

                </td>
                <td>
                  <button className='btn'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
    </React.Fragment>
    )
  }
}

export default Admin;
