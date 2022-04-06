import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';


const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/profile'}>Profile</CustomLink>
                <CustomLink to={'/messages'}>Messages</CustomLink>
                <CustomLink to={'/bot'}>Bot</CustomLink>
            </header >
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;