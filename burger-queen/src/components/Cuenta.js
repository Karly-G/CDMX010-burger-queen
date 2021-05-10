import React from 'react'
import CuentaItem from './CuentaItem'

export default function Cuenta({data, cuentaTotal}) {
 console.log(data)


    return (
        <div>
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
            <div>Total: {cuentaTotal} </div>
        </div>
    )
}
