import React from 'react';

const Link = ({ route }) => {
    return (
        <div>
            <a href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;