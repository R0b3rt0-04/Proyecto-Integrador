import Card from './Card';
import "../hoja-de-estilos/Cards.css"


const Cards = (props) => {


  return (
    <ul className='contenedor'  >
      {
  props.characters.map((element, index)=> <li key={index}  ><Card 
  index = {index}
  classname={element.name}
  id={element.id}    
  name={element.name} 
  species={element.species}
  gender={element.gender}
  status={element.status}     
  image={element.image}     
  cierre={props.cierre} 
       /></li> )
}

    </ul>
  )
}

export default Cards