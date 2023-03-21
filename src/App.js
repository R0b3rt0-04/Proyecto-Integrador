import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
/* import Cards from './components/Cards.jsx'
import NavDesktop from './components/NavDesktop' */
import About from './components/About'
import Home from './components/Home'
import Inicio from './components/Inicio'
import Detail from './components/Detail'
import Form from './components/Form'
import { useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites'

function App () {
  
  const [characters, setCharacters] =  React.useState([])
  
  const [access, setAccess] = useState(false)

  let email = 'ejemplo@fakemail.com'

  let password = 'C0Ñtra5eÑa'

  const navigate =  useNavigate()

  const login = (aobj) => {
    if (aobj.password === password && aobj.email === email){
      setAccess(true);
      navigate('/i');
    }
  }

  useEffect(() => {
     !access && navigate('/');
  }, [access]);
  
  const reboot = () => setCharacters([])

  const ordenar = () => characters.length > 1 ? setCharacters([...[...characters.sort((n, n2)=> n.id - n2.id)].sort((n, n2)=> n.id - n2.id)]) : ''
  
  const cierre = (event)=> setCharacters(characters.filter(n => n.name !== event.target.value))

  const ponerAlInicio = (persid) => setCharacters([characters[characters.findIndex(n => n.id === persid )], ...characters.filter(n => n.id !== persid)])
  
  const idrandom = ()=>{
   let idr = Math.floor(Math.random() * 826);
   if (idr >= 1) return idr
   else return idrandom()
  }

  const random =  ()=>{
    let idr2 =  idrandom()
    if (characters.length === 826) window.alert('Ya tienes todos los personajes') 
    if(characters.find(n => n.id === idr2) === undefined){
      fetch(`https://rickandmortyapi.com/api/character/${idr2}`)
      .then((response) => response.json())
      .then((data) => setCharacters((oldChars) => [data,...oldChars ]))
    }
    else  random()
    }

const onSearch = (a) => {
  //conciente de que es inesesario pero decidí mantenerlo
  if ((a.length === a.split('').filter(Element => Element === ' ').length | a === '') | a <= 0 | a >= 827 ){ 
    return
  }
   else {fetch(`https://rickandmortyapi.com/api/character/${a}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name !== "undefined" & characters.every(n => n.id !== data.id))  setCharacters((oldChars) => [data,...oldChars ]);
     else characters.find(n => n.id === data.id) ? ponerAlInicio(data.id) : window.alert('No hay personajes con ese ID');
  })}
}

    return(
      <div>
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/i' element={<Inicio/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/Cards" element={<Home cierre={cierre} characters={characters} ordenar={ordenar} reboot={reboot} random={random} onSearch={onSearch} />}/>
        <Route path='/Detail/:id' element={<Detail/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
      </div>
    )

}

export default App