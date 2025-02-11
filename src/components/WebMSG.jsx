import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WebMSG.css';

const WebMessenger = () => {
        const navigate = useNavigate(); // Хук для навигации
        const [theme, setTheme] = useState('light'); // Состояние для темы
        const [posts, setPosts] = useState([]); // Состояние для постов
        const [newPostText, setNewPostText] = useState(''); // Состояние для текста нового поста

        // Функция для смены темы
        const toggleTheme = () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
        };

        // Функция для добавления нового поста
        const addPost = () => {
            if (newPostText.trim()) {
                setPosts([...posts, { id: Date.now(), text: newPostText }]);
                setNewPostText('');
            }
        };

        // Функция для показа сообщения при наведении
        const showTooltip = (event) => {
            alert('Элемент в разработке');
        };

        return (
            <div className={`app ${theme}`}>
                {/* Кнопка "Back to Cards" в верхнем левом углу */}
                <div className="back-button">
                    <button onClick={() => navigate('/')}>Back to Cards</button>
                </div>

                {/* Навигационная панель */}
                <nav className="navbar">
                    <button onMouseEnter={showTooltip}>Лента</button>
                    <button onMouseEnter={showTooltip}>Подписки</button>
                    <button onMouseEnter={showTooltip}>Каналы</button>
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
            </div>
        );
    };


export default WebMessenger;