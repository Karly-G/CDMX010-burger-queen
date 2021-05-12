import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CardButton.css'


export default function CardButton({name, price, onClick}) {

    return (
      <button className='btn btn-warning btn-sm'
        onClick={onClick}>
          <h1>{name}</h1>
          <h1>${price}</h1>
      </button>
    );
  }
  