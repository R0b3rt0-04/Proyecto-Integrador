import React, { useEffect } from "react";
import "../hoja-de-estilos/Card.css"
import { Botondecierre } from "./Botondecierre";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addfavorite, deletefavorite} from '../Redux/actions'


export default function Card(props) {

   const path = useLocation().pathname

   const favorites =  useSelector(state => state.myfavorites)

   const dispatch = useDispatch()

   const [isfav, setIsfav] = useState(false)

   const handlefavorite = () => {
      if(isfav){
         setIsfav(false) 
         dispatch(deletefavorite(props.id))
      }
      else{
         setIsfav(true) 
         dispatch(addfavorite(props))
      }
   }


   useEffect(() => {
      favorites.forEach((element) => {
          if(element.id === props.id) {
         setIsfav(true) 
         } 
      });
   
   }, [])

   return ( 

      <div className={`personaje${props.index === 0 ? '0' : ''}`} style={path === '/favorites' ? {display: 'block'} : (isfav ? {display: 'none'} : {display: 'block'})} key={`${props.name}1`} >
            <div className="carta-fondo"   >
           {/* <div onClick={handlefavorite} className={`fase2${!isfav ? 'favoff' : 'favon'}`}  ></div> */}

               {
              isfav ? (<div onClick={handlefavorite} className={`fase2favon`}  ></div>) : (<div onClick={handlefavorite} className={`fase2favoff`}  ></div>)
               }

                 <div className="nombreCarta"  >
                  <h4 className="titulocarta"><u>{`${props.name}`}</u></h4>
                  </div> 
                  <div className="botoncierre">
                  <Botondecierre cierre = {props.cierre} value = {props.name} />
                  </div>
                  <Link to={`/detail/${props.id}`} >
                  <img className="imagen-carta" src={props.image} alt={`imagen de ${props.name}`} />
                  </Link>
                  <div className="divInfo"  >
                     <p className="infocard1">{props.species === 'unknown' ? 'Desconocido' : props.species}</p>
                     <p className="infocard2">{`${props.name} está ${props.status === 'Alive' ? 'vivo' : 'muerto'}`}</p>
                     <p className="infocard2">{`Personaje numero ${props.id}`}</p>
                  </div>
            </div>
         </div>
   );
   }