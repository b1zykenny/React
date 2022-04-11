import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import '../index.scss';

const HomePage = () => {
    return (
        <div className='ListLink'>
            <Link className='PageLinks' to={'/'}>Home</Link>
            <Link className='PageLinks' to={'/profile'}>Profile</Link>
            <Link className='PageLinks' to={'/messages'}>Messages</Link>
            <Link className='PageLinks' to={'/bot'}>Bot</Link>
        </div>
    );
};

export default HomePage;