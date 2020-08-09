import React, { useState } from 'react';
import './sass/main.scss';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import LeftSide from './leftSection';
import NavBar from './navBar';
import RightSide from './rightSide';
import Main from './main';
import Popup from './popUp';
import axios from 'axios'

function HomePage() {
  const [movies, setMovies] = useState([])
  let [searchedItem, setSearch] = useState("");
  const [state, setState] = useState({
    results: [],
    selected: {}
  });
  const apiKey = 'f482964b09c3bde6b4872a88c420f460';
  const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';

  // Events handeling
  
  const handleSubmit = (e) => {
    fetch(apiUrl + apiKey + '&query=' + searchedItem)
      .then(data => data.json())
      .then(data => {
        setMovies(data.results)
        let results = data.results;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    e.preventDefault()
  }


  const handelChange = (e) => {
    setSearch(searchedItem = e.target.value)
  }

  const openPopup = id => {
    axios('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + 'f482964b09c3bde6b4872a88c420f460').then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <Conatainer className='container'>
      {/* {currentMovie == null ? <> <NavBar handleSubmit={handleSubmit} handelChange={handelChange} /> <LeftSide /> <Main movies={movies} viewMovieInfo={viewMovieInfo} /> <RightSide /> </> : <MovieInfo closeMovieInfo={closeMovieInfo} currentMovie={currentMovie} />} */}
  <NavBar handleSubmit={handleSubmit} handelChange={handelChange} /> <LeftSide /> <Main movies={movies} openPopup={openPopup} /> <RightSide />
  {(typeof state.selected.original_title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    </Conatainer>
  )
}

const Conatainer = styled.div`
`;

export default HomePage;