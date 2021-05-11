import React from 'react'

export default function CuentaItem({name, precio, categoria}) {
    
    return (
        <li className='orderContainer'>
            {name}
            $ {precio}
        </li>
    )
}
