import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 



export default function Burger({burger, price, onClick}) {

    return (
      <button className='btn btn-warning btn-lg card-container'
        onClick={onClick}>
          <h1>{burger}</h1>
      </button>
    );
  }
  