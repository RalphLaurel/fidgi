import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Card from './../Card';
import './ApplicationsLayout.css';
import WebMessenger from "./WebMSG";
import WebStore from "./WebSTR";

const ApplicationsLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние меню для мобильных устройств

    const appsData = [
        {
            id: 1,
            image: "https://example.com/messenger.jpg",
            title: "Мессенджер",
            description: "Приложение для общения",
            path: "web-messenger"
        },
        {
            id: 2,
            image: "https://example.com/store.jpg",
            title: "Магазин",
            description: "Онлайн-магазин",
            path: "web-store"
        }
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]); // Следим за изменением пути


    return (
        <div className="applications-container">
            {/* Кнопка для открытия/закрытия меню на мобильных устройствах */}
            <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Список приложений */}
            <div className={`apps-list ${isMenuOpen ? 'open' : ''}`}>
                {appsData.map(app => (
                    <Card
                        key={app.id}
                        {...app}
                        onClick={() => {
                            navigate(app.path);
                            setIsMenuOpen(false); // Закрываем меню после выбора приложения
                        }}
                    />
                ))}
            </div>

            {/* Контент приложения */}
            <div className="app-content">
                <Routes>
                    <Route path="web-messenger" element={<WebMessenger />} />
                    <Route path="web-store" element={<WebStore />} />
                </Routes>
            </div>
        </div>
    );
};

export default ApplicationsLayout;