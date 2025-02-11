import React from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Mobile Apps</h1>
            <p>Welcome to the Mobile Apps section!</p>
            <button onClick={() => navigate('/')}>Back to Cards</button>
        </div>
    );
};

export default Portfolio;