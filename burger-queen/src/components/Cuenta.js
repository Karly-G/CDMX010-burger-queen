import React from 'react'
import CuentaItem from './CuentaItem'

export default function Cuenta({data}) {


    return (
        <div>
            <p>Cuenta</p>
            <ul>
                {
                    data.map((item, i) => {
                        return <CuentaItem
                            key={i}
                            name={item.nombre}
                        />
                    })
                }
            </ul>
        </div>
    )
}
