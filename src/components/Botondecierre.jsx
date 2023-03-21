import React from 'react'
import "../hoja-de-estilos/Botondecierre.css"

export const Botondecierre = (props) => {
  return (
    <div>
        <button value={props.value} onClick={props.cierre} className='Botondecierre' style={{fontSize: "15px"}} >X</button>
    </div>
  )
}