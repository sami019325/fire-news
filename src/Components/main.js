import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavBar from './../NavBar';
import LeftSide from './Home/LeftSide/LeftSide';
import Middle from './Home/MiddleMain/Middle';
import Rght from './Home/RightSide/Rght';
import NavBar from './NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                <div className='col-span-1'>
                    <LeftSide ></LeftSide>
                </div>
                <div className='col-span-2'>
                    <Middle ></Middle>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-1'>
                    <Rght ></Rght>
                </div>

            </div>

        </div>
    );
};

export default Main;