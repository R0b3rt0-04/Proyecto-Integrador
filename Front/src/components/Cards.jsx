import Card from './Card';
import "../hoja-de-estilos/Cards.css"
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const Cards = (props) => {

  const path = useLocation().pathname
  const characters = useSelector(state => state.characters)
  const favs = useSelector(state => state.myfavorites)

  const site = () => {
    if(path === '/favorites') return favs
    else return characters
  }


  return (
    <ul className='contenedor'  >
      {
  site().map((element, index)=> <li key={index}  ><Card 
  index = {index}
  classname={element.name}
  id={element.id}    
  name={element.name} 
  species={element.species}
  gender={element.gender}
  status={element.status}     
  image={element.image}     
       /></li> )
}

    </ul>
  )
}

export default Cards