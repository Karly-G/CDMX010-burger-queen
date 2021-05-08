import React, {useState} from 'react'
import MenuButtons from './MenuButtons'
import Cuenta from './Cuenta'
import {useGetData} from './hooks/useGetData'


export default function Order() {
    const getData = useGetData();
    const [list, setList] = useState([]);
    console.log(getData);

    const handleClick = (e)=>{
        setList()
        console.log('click', e)

    }
    return (
        <div style={{
            display: "flex"
        }}>
            <div>
                <MenuButtons 
                    data={getData}
                    onClick={handleClick}
                />
            </div>    
            <div>
                <Cuenta
                    data={getData}
                />
            </div>
        </div>
    )
}
