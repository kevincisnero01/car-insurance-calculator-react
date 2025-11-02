import React from 'react';
import "./Spinner.css";

const Spinner = () => {
    return ( 
        <div className='flex items-center justify-center h-28'>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    );
}

export default Spinner;