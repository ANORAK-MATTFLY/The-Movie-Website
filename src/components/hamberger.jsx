import React from 'react'
import styled from 'styled-components';
import { Dropdown, Input } from 'semantic-ui-react'


const tagOptions = [
    {
        key: 'Important',
        text: 'Main',
        icon:'grid layout',
        value: 'Important',
    },
    {
        key: 'Important',
        text: 'All Reviews',
        icon:'book',
        value: 'Important',
    },
    {
        key: 'Announcement',
        text: 'Movies',
        icon:'film',
        value: 'Announcement',
    },
    {
        key: 'Cannot Fix',
        text: 'Actors',
        icon:'users',
        value: 'Cannot Fix',
    },
    {
        key: 'News',
        text: 'Produser',
        icon:'video',
        value: 'News',
    },
    {
        key: 'Enhancement',
        text: 'My Reviews',
        icon:'pencil alternate',
        value: 'Enhancement',
    },
    {
        key: 'Change Declined',
        text: 'Settings',
        icon:'settings',
        value: 'Change Declined',
    }
]


const Hamberger = () => {
    return (
        <div className="nav">
            <Dropdown
                text='Menu'
                icon='grid layout'
                floating
                labeled
                button
                className='icon'
                id='dropdown'
                style={{  backgroundColor: 'rgb(32, 32, 32)', color:'white' }}
            >
                <Dropdown.Menu style={{ width: '160px' }}>
                    <Dropdown.Menu scrolling>
                        {tagOptions.map((option) => (
                                <Dropdown.Item key={option.value} {...option} style={{  width: '160px', color:'white', backgroundColor: 'rgb(32, 32, 32)' }} />
                        ))}
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}


export default Hamberger;