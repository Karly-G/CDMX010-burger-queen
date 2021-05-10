import React, {useState, useEffect} from 'react'
import CardButton from './CardButton'

export default function MenuButtons({data, onClick}) {
   

    return (
        <div>
            <div className= 'menu' >
                
                {
                    data && data.map((cardItem, i) =>{
                        return(
                            <CardButton
                                key={i}
                                name={cardItem.nombre}
                                price={cardItem.precio}
                                onClick={() => onClick(cardItem)}
                            />
                        ) 
                    })
                }
                
            </div>
      
                
        </div>  
    )
}

