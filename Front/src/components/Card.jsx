import React from "react";
import "../hoja-de-estilos/Card.css"
import { Botondecierre } from "./Botondecierre";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addfavorite, deletefavorite} from '../Redux/actions'


export default function Card(props) {

   const path = useLocation().pathname

   const dispatch = useDispatch()


   return ( 

      <div className={`personaje${props.index === 0 ? '0' : ''}`}  key={`${props.name}1`} >
            <div className="carta-fondo"   >
               {
               path === '/favorites' ? (<div onClick={()=>{dispatch(deletefavorite(props.id))}} className={`fase2favon`}  ></div>) : (<div onClick={()=>{dispatch(addfavorite(props))}} className={`fase2favoff`}  ></div>)
               }

                 <div className="nombreCarta"  >
                  <h4 className="titulocarta"><u>{`${props.name}`}</u></h4>
                  </div> 
                  <div className="botoncierre">
                  <Botondecierre  value = {props.id} />
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