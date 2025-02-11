import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebStore = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>WebstrongZHopa</h1>
            <p>Sosal???</p>
            <button onClick={() => navigate('/')}>Back to Cards</button>
        </div>
    );
};

export default WebStore;