import React from 'react'
import styled from 'styled-components';
import uuid from 'uuid/dist/v1';

const Main = ({movies, openPopup})=>{
 
    return(
        <MainSction className='mainSection' style={{ overflow: 'auto' }} >
        {

          movies.map((movie)=>{
            return (<Card key={uuid()} onClick={() => openPopup(movie.id)} style={{ backgroundImage:"url(" + `https://image.tmdb.org/t/p/w500/${movie.poster_path}`+ ")"}} >
              <div className="poster-overlay">
                <div className="card-content">
                <h2 style={{ color:'white', fontSize:'16px'}} > {movie.original_title} </h2>
                <p style={{ color:'rgb(248, 195, 125)' }} > ⭐ {movie.popularity} </p>
                </div>
              </div>
            </Card>
            )
          })
        }
      </MainSction>
    )
}


const MainSction = styled.div`

`;

const Card = styled.div`
background-size:cover;
height:200px;
width:100%;  
background-repeat: 'no-repeat'; 

`;

export default Main;