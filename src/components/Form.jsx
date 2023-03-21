import React, {useState} from 'react'
import '../hoja-de-estilos/Form.css'
import validationF from './validation'


const Form = (props) => {

  const [datauser,  setDatauser] = useState({email:'', password:''}) 

  const [errors, setErrors] = useState({email: '', password:''})

  const handlechange = event => {

    setErrors(validationF({...datauser, [event.target.name]: event.target.value,})); 
    
    setDatauser({...datauser, [event.target.name ]: event.target.value}); 
}

  const handlesubmit = () => {
      props.login(datauser)
  }

  return (
    <div className='Contlog'>
        <div className='log'>
          <form className='form' onSubmit={handlesubmit}>
            <label htmlFor="user">Usuario</label>
            <input onChange={handlechange} type="email" id='email' name='email' value={datauser.email} />
            <label htmlFor="password">Contraseña</label>
            <input onChange={handlechange} maxlength='10' name='password' value={datauser.password} type="password" id="password" minlength="6" pattern=".*\d+.*"  />
            <button>Iniciar</button>
            <button onClick={()=>{props.login({email:'ejemplo@fakemail.com', password:'C0Ñtra5eÑa'})}} >Inicio automatico</button>
          {errors.email ? <p>{errors.email}</p> : ''}
          {errors.emaillong? <p>{errors.emaillong}</p> : ''}
          {errors.passwordN? <p>{errors.passwordN}</p> : ''}
          {errors.passwordL? <p>{errors.passwordL}</p> : ''}
          </form>
        </div>
    </div>
  )
}

export default Form