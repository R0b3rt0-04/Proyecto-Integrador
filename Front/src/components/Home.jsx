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
            <SearchBar />
          </div>
        </div>
           <div className='Cards111'>
            <Cards characters={props.characters}/>
            </div> 
        </div>
    </div>
  )
}

export default Home