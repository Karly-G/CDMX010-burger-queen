import React, {useEffect, useState} from 'react'
import MenuButtons from './MenuButtons'
import Cuenta from './Cuenta'
import {useGetData} from './hooks/useGetData'


export default function Order() {
    const getData = useGetData();
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
   
    const addCard = (e)=>{
        setList([...list, e ])

    }

    useEffect(()=>{
        getTotal()

    }, [list])

    const getTotal = ()=>{
        let suma = 0;
        for(let i =0; i<list.length; i++){
            console.log('list', list)
            suma+= list[i].precio
        } 
        setTotal(suma)
    }

 
    return (
        <div style={{
            display: "flex"
        }}>
            <div>
                <MenuButtons 
                    data={getData}
                    onClick={addCard}
                />
            </div>    
            <div>
                <Cuenta
                    data={list}
                    cuentaTotal={total}
                />
            </div>
        </div>
    )
}
