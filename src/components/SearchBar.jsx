import React from "react";
import '../hoja-de-estilos/SearchBar.css'
import { useNavigate } from "react-router-dom";

export default function SearchBar(props) {
   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   }

   const navigate = useNavigate();

   const ToAbout = ()=>navigate("/About")
   
   const ToFavs = ()=>navigate("/favorites")

   const [character, setCharacter ] = React.useState('')

   return (
      <div className="contenedorDELASearchBar">
         <div className="divdebusqueda">
            <input  min="1" max="826" type="number" className="cdtext" onChange={handleInputChange} value={character} />
            <button className="bbdtext" onClick={()=>{props.onSearch(character); character >= 827 ? setCharacter('') : setCharacter(`${Number(character)+1}`) }}>Buscar</button>
         </div>
            <button className="bbdtext" onClick={()=>{props.random(); setCharacter('')}}>random</button>
            <button className="bbdtext" onClick={()=>{props.ordenar()}}>Ordenar </button>
            <button className="bbdtext" onClick={()=>{props.reboot(); setCharacter('')}}>Reiniciar</button>
            <button className="bbdtext" onClick={()=>{ToAbout()}} >About</button>
            <button className="bbdtext" onClick={()=>{ToFavs()}} >Favsɷ</button>
            

      </div>
   );
}

