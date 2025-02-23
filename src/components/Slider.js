import React, { useState, useEffect } from 'react';
import './Slider.css';
import './slider/left.svg';
import './slider/right.svg';

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Автоматическое переключение
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Предзагрузка изображений для плавности (опционально)
    useEffect(() => {
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });
    }, [slides]);

    return (
        <div
            className="sliderapp"
            style={{
                '--background-image': `url(${slides[currentSlide].image})`
            }}
        >
            <div className="slider-contentapp">
                {slides[currentSlide].content}
            </div>

            <button
                className="slider-prevapp"
                onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            >
                ←
            </button>
            <button
                className="slider-nextapp"
                onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
            >
                →
            </button>
        </div>
    );
};

export default Slider;