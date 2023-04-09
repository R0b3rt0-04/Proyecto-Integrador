import React from 'react'
import "../hoja-de-estilos/Botondecierre.css"
import { useDispatch } from 'react-redux'
import { closecard } from '../Redux/actions'

export const Botondecierre = (props) => {
  
  const dispatch = useDispatch()

  return (
    <div>
        <button value={props.value} onClick={()=>{dispatch(closecard(props.value))}} className='Botondecierre' style={{fontSize: "15px"}} >X</button>
    </div>
  )
}