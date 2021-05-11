import React from 'react'
import mesero from '../assets/mesero.png';
import './select.css'

const Select = () =>{
    return (
        <div className="header">
            <img src={mesero} className="mesero" alt="mesero" />
            <div>
                <select>
                    <option>Mesa</option>
                    <option >Mesa 1</option>
                    <option >Mesa 2</option>
                    <option >Mesa 3</option>
                    <option >Mesa 4</option>
                    <option >Mesa 5</option>
                    <option >Mesa 6</option>
                    <option >Mesa 7</option>
                    <option >Mesa 8</option>
                    <option >Mesa 9</option>
                    <option >Mesa 10</option>
                </select>
            </div>
        </div>
        
    )
}

export default Select;