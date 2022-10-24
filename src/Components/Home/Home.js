import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import Middle from './MiddleMain/Middle';
import Rght from './RightSide/Rght';

const Home = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
            <div className='col-span-1'>
                <LeftSide ></LeftSide>
            </div>
            <div className='col-span-2'>
                <Middle ></Middle>
            </div>
            <div className='col-span-1'>
                <Rght ></Rght>
            </div>

        </div>
    );
};

export default Home;