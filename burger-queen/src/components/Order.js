import React, {useEffect, useState} from 'react'
import MenuButtons from './MenuButtons'
import Cuenta from './Cuenta'
import {useGetData} from './hooks/useGetData'
import ModalBurger from './ModalBurger'
import Backdrop from './Backdrop'


export default function Order() {
    const getData = useGetData();
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
     const [modalOpen, setModalOpen] = useState(false);
   
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

   

    const handleAdd=()=>{
      setModalOpen(true)
  
    }
  
    const handleClose=()=>{
      setModalOpen(false)
    }

 
    return (
        <div style={{
            display: "flex"
            
        }}>  <div>
        <button onClick={handleAdd}>Extras</button>
        {modalOpen ? <ModalBurger clickModal={handleClose}/> :null }
        {modalOpen && <Backdrop clickModal={handleClose}/>}
        </div>

            <div className="Buttons">
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
