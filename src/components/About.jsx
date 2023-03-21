import React from 'react'
import "../hoja-de-estilos/About.css"
import { useNavigate } from 'react-router-dom'
const About = () => {

  const navigate = useNavigate();

  const backToHome = ()=>navigate("/Cards")

  return (
    <div className='Back'>
      <div className='glass'>
      <h1 className='AT1'>Acerca de mi</h1>
      <div className='contenedorabout'>
        <div className='Cimagen'>
          <img className='imagen' src="/Yo.png" alt="Imagen de roberto" />
        </div>
        <div className='Textc'>
            <h2 className='AT2'>Hola..! y gracias por estar aqui.</h2>
          <p className='AP1'>Mi nombre es Roberto Hernandez, tengo 20 años, actualmente recido en Mexico y en este momento me encuentro introduciendome en el mundo del desarrollo 
            web con esta que es mi primer app / pagina web 
          </p>
          <button className='Yo'>Un poco mas de mi</button>
        <button className='Yo' onClick={()=>{backToHome()}} >Volver</button>
        </div>
        </div>
     </div>
    </div>
  )
}

export default About