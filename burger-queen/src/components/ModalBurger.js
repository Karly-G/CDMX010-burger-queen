import React from 'react'


export default function ModalBurger(props) {
    return (
        <div className="modal" onClick={props.clickModal}>
            <p>Are you sure?</p>
            <button>Cancel</button>
            <button>Confirm</button>  
        </div>
    )
}
