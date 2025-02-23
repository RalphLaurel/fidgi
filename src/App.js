    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import ApplicationsLayout from './components/application/ApplicationsLayout';
    import './App.css';
    import Slider from "./components/Slider";



    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZyb250JTIwZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww',
            content: (
                <>
                    <h1>Слайд 1</h1>
                    <p>Описание первого слайда</p>
                </>
            )
        },
        {
            image: 'https://images.unsplash.com/photo-1623520333087-62b8793e3d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZyb250JTIwZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww',
            content: (
                <>
                    <h1>Слайд 2</h1>
                    <p>Описание второго слайда</p>
                </>
            )
        }
    ];

    function App() {
        return (
            <Router>
                <div className="app-container">
                    {/* Навигационная панель */}
                    <Navbar />

                    {/* Основное содержимое */}
                    <main>
                        <Routes>
                            {/* Домашняя страница со слайдером */}
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Slider slides={slides} />
                                        <div className="home-page">
                                            <div className="text-container">
                                                <h1>Добро пожаловать на главную страницу</h1>
                                                <p>Используйте навигационную панель для перехода к приложениям.</p>
                                            </div>
                                            <div className="text-container-1">
                                                <h1>Заголовок</h1>
                                                <p>Текст</p>
                                            </div>
                                            <div className="text-container-2">
                                                <h1>Заголовок</h1>
                                                <p>Текст</p>
                                            </div>
                                        </div>
                                    </>
                                }
                            />
                            {/* Страница приложений без слайдера */}
                            <Route path="/application/*" element={<ApplicationsLayout />} />
                        </Routes>
                    </main>

                    {/* Футер */}
                    <Footer />
                </div>
            </Router>
        );
    }

    export default App;

