import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebMessenger = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Web Sosal</h1>
            <p>SosalMessenger???!</p>
            <button onClick={() => navigate('/')}>Back to Cards</button>
        </div>
    );
};

export default WebMessenger;