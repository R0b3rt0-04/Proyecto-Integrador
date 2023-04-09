import React from "react";
import '../hoja-de-estilos/SearchBar.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addcharacter, poneralinicio, reset, tosort } from "../Redux/actions";

export default function SearchBar(props) {
   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   }
   const dispatch = useDispatch()

   const allcharactersredux = useSelector(state => state.allcharacters)
   const charactersredux = useSelector(state => state.characters)

   const onSearchredux = (a) =>{
      if ((a.length === a.split('').filter(Element => Element === ' ').length | a === '') | a <= 0 | a >= 827 ) return
      if (!Boolean(allcharactersredux.find(e => e.id === Number(a)))) {
         dispatch(addcharacter(a))
      }else if(Boolean(allcharactersredux.find(e => e.id === Number(a)))){
         dispatch(poneralinicio(a))
      }
    }

    const idrandom = ()=>{
      let idr = Math.floor(Math.random() * 826);
      if (idr >= 1) return idr
      else return idrandom()
     }
   
     const random =  ()=>{
       let idr2 =  idrandom()
       if(Boolean(charactersredux.find(n => n.id === idr2))) dispatch(poneralinicio(idr2))
       if(!Boolean(allcharactersredux.find(n => n.id === idr2))){
        dispatch(addcharacter(idr2))
       }
       else  random()
       }

   const navigate = useNavigate();

   const ToAbout = ()=>navigate("/About")
   
   const ToFavs = ()=>navigate("/favorites")

   const [character, setCharacter ] = React.useState('')

   return (
      <div className="contenedorDELASearchBar">
         <div className="divdebusqueda">
            <input  min="1" max="826" type="number" className="cdtext" onChange={handleInputChange} value={character} />
            <button className="bbdtext" onClick={()=>{onSearchredux(character); character >= 827 ? setCharacter('') : setCharacter(`${Number(character)+1}`) }}>Buscar</button>
         </div>
            <button className="bbdtext" onClick={()=>{random(); setCharacter('')}}>random</button>
            <button className="bbdtext" onClick={()=>{dispatch(tosort())}}>Ordenar </button>
            <button className="bbdtext" onClick={()=>{dispatch(reset()); setCharacter('')}}>Reiniciar</button>
            <button className="bbdtext" onClick={()=>{ToAbout()}} >About</button>
            <button className="bbdtext" onClick={()=>{ToFavs()}} >Favsɷ</button>
            

      </div>
   );
}

