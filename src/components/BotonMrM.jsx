import React from 'react'

const BotonMrM = (props) => {
  return (
    <div onClick={props.action} className='contenedorBMM' >
        <img src={`public\Cajas/${props.type}`} alt="" />
        <p key={`caja${props.type}`} >{props.type}</p>
    </div>
  )
}

export default BotonMrM