import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplicationsLayout from './components/application/ApplicationsLayout';
import './App.css';
import backgroundImage from './components/background.jpg'
import Slider from 'react-slick';
/*import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Навигационная панель */}
                <Navbar />

                {/* Основное содержимое */}
                <main>
                    <Routes>
                        {/* Домашняя страница */}
                        <Route
                            path="/"
                            element={
                                <div
                                    className="home-page"
                                    style={{
                                        backgroundImage: `url(${backgroundImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minHeight: 'calc(100vh - 120px)',
                                        padding: '2rem',
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* Контейнер для текста */}
                                    <div className="text-container">
                                        <h1>Добро пожаловать на главную страницу</h1>
                                        <p>Используйте навигационную панель для перехода к приложениям.</p>
                                    </div>

                                </div>
                            }
                        />


                        {/* Страница приложений */}
                        <Route path="/application/*" element={<ApplicationsLayout/>}/>
                    </Routes>
                </main>

                {/* Футер */}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
