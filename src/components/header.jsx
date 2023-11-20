import React from 'react';
import icon from '../images/Group.png'

function Header() {
    return (
        <>
           <div className='header'>
            <h1 className='page-title'>Home</h1>
            <img src= {icon} alt="" className='top-tweets'/>
           </div>
        </>
    );
}


export default Header