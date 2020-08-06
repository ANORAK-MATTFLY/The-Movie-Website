import React from 'react';
import { Button, Image, Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import './sass/main.scss';


function HomePage() {
  return (
    <Conatainer className='container' >
      <HeadSection className='headSection' >
        <HeaderLeftSide className='headLeftsideSection' >
          <h2 className='title'> critique. </h2>
          <h1 className='secondaryText'>All Reviews</h1>
        </HeaderLeftSide>
        <div className="search-section">
            <div className="search-box">
            <input className='search-text' type="text" name="search" placeholder='Tape to search'/>
            <a href="#" className='search-btn' ></a>
          </div>
        </div>
      </HeadSection>
      <LeftSection className='leftSection' >
        <div className='links'>
          <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#">All Reviews</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Actors</a></li>
            <li><a href="#">Produser</a></li>
            <li><a href="#">All Reviews</a></li>
          </ul>
        </div>

        <Settings>
          <ul>
            <li><a href="#">My Reviews</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </Settings>
      </LeftSection>
      <MainSction className='mainSection' >
        <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
                <Card className='card'>
                </Card>
      </MainSction>
      <RightSection className='rightSection'>
        <div className="rightTilte">
          <h1 className='Activities'>Activities</h1>
        </div>
        <div className="rightSectionContainer">
        <div className="ImageSection">
          <div className="ImageShadow"></div>
        </div>
        <h3 className='RightSideTitle'>New Reviews</h3>
        <ul className='LeftUl'>
            <li><a href="#">Once Upon a Time</a> <span>100</span></li>
            <li><a href="#">F&F: Hobbs and Shaw</a> <span>100</span></li>
            <li><a href="#">The Angry Birds Movie </a> <span>6</span></li>
            <li><a href="#">Avengers: Endgame</a> <span>256</span></li>
            <li><a href="#">The Lion King</a> <span>19</span></li>
            <li><a href="#">Toy Story 2</a> <span>170</span></li>
          </ul>
        </div>
      </RightSection>

    </Conatainer>
  )
}

const Conatainer = styled.div`
`;


const HeadSection = styled.section`
`;

const HeaderLeftSide = styled.div`

`;


const MainSction = styled.div`

`;


const RightSection = styled.section`

`;

const LeftSection = styled.section`

`;

const Card = styled.div`

`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
  align-items: center;
  height: 78%;
  width: 100%;
  // border: 1px white solid;
`;



export default HomePage;