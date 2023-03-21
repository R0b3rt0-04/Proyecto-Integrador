import React from 'react'
import "../hoja-de-estilos/Home.css"
import Cards from './Cards'
import SearchBar from './SearchBar'


const Home = (props) => {
  return (
    <div className='contenedorHome' >
        <div className='contenedorCards' >
        <div className='tituloHome'>
          <img src="/titulo.png" alt="" width={"28%"} />
          <div className='busqueda' >
            <SearchBar ordenar={props.ordenar} reboot={props.reboot} random={props.random} onSearch={props.onSearch} />
          </div>
        </div>
           <div className='Cards111'>
            <Cards cierre={props.cierre} characters={props.characters}/>
            </div> 
        </div>
    </div>
  )
}

export default Home