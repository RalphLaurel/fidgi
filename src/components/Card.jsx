import React from 'react';
import './Card.css';

const Card = ({ image, title, description, onClick }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card__content">
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={onClick}>Read More</button>
            </div>
        </div>
    );
};

export default Card;