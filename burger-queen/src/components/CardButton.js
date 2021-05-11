import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CardButton.css'


export default function CardButton({name, price, onClick}) {


    return (
      <button className='btn btn-warning btn-lg card-container'
        onClick={onClick}
      >    
          <h1>{name}</h1>
          <h3> ${price}</h3>
    
      </button>
    );
  }
  