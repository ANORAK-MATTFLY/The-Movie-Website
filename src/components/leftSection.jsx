import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBookOpen, faFilm, faUserFriends, faVideo, faPenNib, faCog } from "@fortawesome/free-solid-svg-icons";




function LeftSide(){
    return(
        <LeftSection className='leftSection' >
        <div className='links'>
          <ul>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faThLarge} style={{ marginRight:'10px' }} />  Main</a></li>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faBookOpen} style={{ marginRight:'10px' }} />  All Reviews</a></li>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faFilm} style={{ marginRight:'10px' }} />  Movies</a></li>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faUserFriends} style={{ marginRight:'10px' }} />  Actors</a></li>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faVideo} style={{ marginRight:'10px' }} />  Produser</a></li>
          </ul>
        </div>

        <Settings>
          <ul>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faPenNib} style={{ marginRight:'10px' }} />  My Reviews</a></li>
            <li><a href="/"> <FontAwesomeIcon className="Icon1" icon={faCog} style={{ marginRight:'10px' }} />  Settings</a></li>
          </ul>
        </Settings>
      </LeftSection>
    )
}

const LeftSection = styled.section`

`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
  align-items: center;
  height: 78%;
  width: 100%;
`;


export default LeftSide;