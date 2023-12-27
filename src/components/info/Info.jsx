import React from 'react';


const Info = ({ title, description }) => {

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
        </div>
    );
};

export default Info;