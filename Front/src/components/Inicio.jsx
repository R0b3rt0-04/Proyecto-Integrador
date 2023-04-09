import React from 'react'
import { Link } from 'react-router-dom'
import "../hoja-de-estilos/Inicio.css"
const Inicio = () => {
  return (
    <div className='IIInicio'>
      <nav className='Cimagentitulo'>
        <img className='imagenRYCD' src="/titulo.png" alt="Titulo" />
      </nav>
      <div className='imagnesdeinicio' >
          <h2 className='inicioTexto' >Toca el portal para iniciar</h2>
          <div className='divdegif'>
          <Link to={'/Cards'}>
          <img className='Gif' src="/portal-rick-and-morty.gif" alt="portal" />
          </Link>
          </div>
      </div>
      <div className='fondo'>
      </div>
    </div>
  )
}

export default Inicio