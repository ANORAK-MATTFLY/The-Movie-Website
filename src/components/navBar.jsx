import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import Hamberger from './hamberger';

function NavBar({handelChange, handleSubmit}){
    return(
        <HeadSection className='headSection' >
        <HeaderLeftSide className='headLeftsideSection' >
          <h2 className='title'> critique. </h2>
          <h1 className='secondaryText'>All Movies</h1>
        </HeaderLeftSide>
        <div className="search-section">
            <form className="search-box" onSubmit={handleSubmit}  action="">
              <input className='search-text' type="text" name="search" onChange={handelChange} placeholder='Tape to search' />
              <span className="srch" onClick={handelChange}>
              <a href="#"> <FontAwesomeIcon className='search-btn' icon={faSearch} style={{ width:'30px' }}  /></a>
              </span>
            </form>
            <Hamberger />
        </div>
      </HeadSection>
    )
}

const HeadSection = styled.nav`
`;

const HeaderLeftSide = styled.div`

`;

export default NavBar;