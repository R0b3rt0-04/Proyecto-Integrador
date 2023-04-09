import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';

const Favorites = () => {
   
  const {myfavorites} = useSelector(state => state)

    const navigate = useNavigate();

    const ToCards = ()=>navigate("/cards")

  return (
    <div className='CFvas'>
      <div className='para boton'>
    <button onClick={ToCards} >Home<b>↩</b></button>
      </div>
      <div className='paracadrs' >
        <Cards />
      </div>


    </div>
  )
}

export default Favorites