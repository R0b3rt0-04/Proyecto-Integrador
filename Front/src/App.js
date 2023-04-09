import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Inicio from './components/Inicio'
import Detail from './components/Detail'
import Form from './components/Form'
import { useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites'

function App () {
  
  const navigate =  useNavigate()
  const [access, setAccess] = useState(false)
  let email = 'ejemplo@fakemail.com'
  let password = 'C0Ñtra5eÑa'

  const login = (aobj) => {
    if (aobj.password === password && aobj.email === email){
      setAccess(true);
      navigate('/i');
    }
  }

  useEffect(() => {
     !access && navigate('/');
  }, [access]);
    

    return(
      <div>
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/i' element={<Inicio/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/Cards" element={<Home />}/>
        <Route path='/Detail/:id' element={<Detail/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
      </div>
    )

}

export default App