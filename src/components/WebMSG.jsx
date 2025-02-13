import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WebMSG.css';

const WebMessenger = () => {
    const navigate = useNavigate(); // Хук для навигации
    const [theme, setTheme] = useState('light'); // Состояние для темы
    const [posts, setPosts] = useState([]); // Состояние для постов
    const [newPostText, setNewPostText] = useState(''); // Состояние для текста нового поста
    const [showTooltip, setShowTooltip] = useState(false); // Состояние для отображения tooltip
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Позиция tooltip
    const [tooltipText, setTooltipText] = useState(''); // Текст tooltip

    // Функция для смены темы
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Функция для добавления нового поста, хз они в итоге стали отображаться //
    const addPost = () => {
        if (newPostText.trim()) {
            setPosts([...posts, { id: Date.now(), text: newPostText }]);
            setNewPostText('');
        }
    };

    // Функция для показа tooltip
    const handleShowTooltip = (event, text) => {
        const x = event.clientX;
        const y = event.clientY;
        setTooltipPosition({ x, y });
        setTooltipText(text);
        setShowTooltip(true);
    };

    // Функция для скрытия tooltip//
    const handleHideTooltip = () => {
        setShowTooltip(false);
    };

    return (
        <div className={`app ${theme}`}>
            {/* Кнопка "Back to Cards" в верхнем левом углу */}
            <div className="back-button">
                <button onClick={() => navigate('/')}>Back to Cards</button>
            </div>

            {/* Навигационная панель */}
            <nav className="navbar">
                <button
                    onMouseEnter={(e) => handleShowTooltip(e, 'Лента: Здесь отображаются все посты(Ой, функция в разработке)')}
                    onMouseLeave={handleHideTooltip}
                >
                    Лента
                </button>
                <button
                    onMouseEnter={(e) => handleShowTooltip(e, 'Подписки: Посты от пользователей, на которых вы подписаны(Ой, функция в разработке)')}
                    onMouseLeave={handleHideTooltip}
                >
                    Подписки
                </button>
                <button
                    onMouseEnter={(e) => handleShowTooltip(e, 'Каналы: Группы и сообщества(Ой, функция в разработке)')}
                    onMouseLeave={handleHideTooltip}
                >
                    Каналы
                </button>
                <div className="theme-slider">
                    <span>Тема:</span>
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </nav>

            {/* Зона для создания нового поста */}
            <div className="new-post">
                <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="Напишите что-нибудь..."
                />
                <button onClick={addPost}>Опубликовать</button>
            </div>

            {/* Лента постов */}
            <div className="feed">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <div className="avatar"></div>
                            <span className="username">Никнейм</span>
                        </div>
                        <div className="post-content">
                            <p>{post.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Всплывающее сообщение (tooltip) */}
            {showTooltip && (
                <div
                    style={{
                        position: 'fixed',
                        left: tooltipPosition.x + 10,
                        top: tooltipPosition.y + 10,
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '5px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        zIndex: 1000,
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </div>
    );
};

export default WebMessenger;