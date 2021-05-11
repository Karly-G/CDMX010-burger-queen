import React from 'react'


export default function Backdrop(props) {
    return (
        <div className="extrasContainer" onClick={props.clickModal}>
            <form action="" class="categories">
                    <input type="checkbox" value="Doble"/>
                    <label class="category">Doble</label><br></br>
                    <input type="checkbox"  value="Queso"/>
                    <label class="category">Queso</label><br></br>
                    <input type="checkbox" value="Huevo"/>
                    <label class="category">Huevo</label><br></br>
             <button>Cancel</button>
             <button>Confirm</button>       
            </form>  
      </div>
        
    )
}
