import React from 'react';
import styled from 'styled-components';


function RightSide(){
    return(
        <RightSection className='rightSection'>
        <div className="rightTilte">
          <h1 className='Activities'>Trends</h1>
        </div>
        <div className="rightSectionContainer">
          <div className="ImageSection">
            <div className="ImageShadow"></div>
          </div>
          <h3 className='RightSideTitle'>New Reviews</h3>
          <ul className='LeftUl'>
            <li><a href="/">Once Upon a Time</a> <span> 🔥 256</span></li>
            <li><a href="/">Hobbs and Shaw</a> <span>🔥 245</span></li>
            <li><a href="/">The Angry Birds Movie </a> <span>6</span></li>
            <li><a href="/">Avengers: Endgame</a> <span> 256</span></li>
            <li><a href="/">The Lion King</a> <span>⚡ 19</span></li>
            <li><a href="/">Toy Story 2</a> <span>⚡ 170</span></li>
          </ul>
        </div>
      </RightSection>
    )
}

const RightSection = styled.section`

`;

export default RightSide;