import React from 'react';


export default function CardPrueba({name, price, onClick}) {


    return (
      <button
         className="card-container"
         onClick={onClick}
      >    
           <h1>{name}</h1>
           <h2> ${price}</h2>
    
      </button>
    );
  }
  