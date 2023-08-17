import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from "./components/Detail";
import Form from './components/Form';
import Favorites from './components/Favorites';


/* const example = {
  name: 'Morty Smith',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
} */

function App () {

  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  let userName = "nestor@test.com";
  let password = "nestor123"
  /* let [inputValue, setInputValue] = useState(""); */


  const onSearch = (id) => {

    /* setCharacters([
      ...characters,
      example
    ]);
    */
  
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(response => response.data)
    .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });

  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(response => response.data)
    .then((data) => {
        const { access } = data;
        setAccess(access);
        access && navigate('/home');
    });
  }


  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  return (
    <div className='App' style={{ padding: '25px' }}>

      {
        location.pathname !== "/" ? <Nav onSearch={onSearch}/> : null
      }
      
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App;
