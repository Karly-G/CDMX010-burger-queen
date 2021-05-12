import React from 'react'
import CuentaItem from './CuentaItem'
import './cuenta.css'

export default function Cuenta({data, cuentaTotal, }) {
    console.log(data)


    return (
        <div>
            <div className= 'border'></div>
            <div className= 'container img'>
            <p>Cuenta</p>
            <ul>
                {
                    data.map((item, i) => {
                        return <CuentaItem
                            key={i}
                            name={item.nombre}
                            precio={item.precio}
                        />
                        
                    })
                }
            </ul>
            <div>Total: ${cuentaTotal} </div>
            </div>

     
        </div>
    )
}
