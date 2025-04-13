import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='lg:mr-10 m-1 text-center hover:bg-amber-300 '><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;