
import React from 'react'
import "../hoja-de-estilos/Detail.css"
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Detail = (props) => {

  const { id } = useParams();

  const [character, setCharacter] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((char) => {
      setCharacter(char);
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
    return setCharacter({});
  }, [id]); 
  
  const navigate = useNavigate();

  const backToHome = ()=>navigate("/Cards")

  return (
    <div className='detal'>
  <div className='divdeinfo'>
      <button onClick={()=>{backToHome()}} className='BotonRegreso'>Regresar</button>
      <div className="control-panel">
        <p className='infoafter'> Informacion extra </p>
        <div className="selection-view">
          <img className='imagenddd' src={character.image} alt="" />
          <p className='infoSV' >{`Nombre: ${character.name === undefined ? 'Desconocido' :character.name }`}</p>
          <p className='infoSV' >{`Identificador #${character.id === undefined ? 'Desconocido' :character.id }`}</p>
          <p className='infoSV' >{`Genero: ${character.gender === undefined ? 'Desconocido' :character.gender }`}</p>
{/*           <p className='infoSV' >{`Ubicacion: ${character.laction ? character.laction.name ? character.location.name : 'nada'  : 'hola' }`}</p> */}
          <p className='infoSV' >{`Origen: ${character.origin ? character.origin.name : 'Desconocido'}`}</p>
          <p className='infoSV' >{`Especie: ${character.species === undefined ? 'Desconocido' :character.species }  ${character.type !== '' ? `Tipo: ${character.type}` : ''}`}</p>
          <p className='infoSV' >{`Primer avistamiento: ${character.created === undefined ? 'Desconocido' :character.created.slice(0, 10) }`}</p>
          <p className='infoSV' >{`Primer avistamiento: Episodio ${String(character.episode).slice(-2)}`}</p>
        </div> 
      </div>
  </div>
</div>
  )
}

export default Detail