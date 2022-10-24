import React from 'react';

const NavBar = () => {
    return (
        <div className='flex flex-row bg-slate-400'>
            <div className='basis-1/4'>Left</div>
            <div className='basis-3/4'>Right</div>
        </div>
    );
};

export default NavBar;