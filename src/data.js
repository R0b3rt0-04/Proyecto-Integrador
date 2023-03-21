
import {characters, setCharacters} from './App'

export const random = ()=>{
  fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name )   {
        setCharacters((oldChars) => [data,...oldChars ]);
     } else {
        window.alert('UPS..! Prueba de nuevo (⓿_⓿)');
     }
  });
}
export const cierre = (event)=> {
  setCharacters(
    characters.filter(n => n.name !== event.target.value)
  )
}

export const onSearch = (a) => {
  if (a.length === a.split('').filter(Element => Element === ' ').length | a === '') {
    alert(`Introduzca un id o nombre nombre valido ╰（‵□′）╯ `)
  }
  else {fetch(`https://rickandmortyapi.com/api/character/${a}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
     if (data.name !== "undefined" & characters.every(n => n.id !== data.id) & data.id < 826)   {
        setCharacters((oldChars) => [data,...oldChars ]);
     } else {
        characters.find(n => n.id === data.id) ? window.alert('Ya tienes el personaje en tu lista') : window.alert('No hay personajes con ese ID');
     }
  });}
}