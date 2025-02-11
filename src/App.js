import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Card from './components/Card';
import WebMessenger from "./components/WebMSG";
import Portfolio from './components/Portfolio';
import './App.css';
import WebStore from "./components/WebSTR"


function App() {
    const cardsData = [
        {
            id: 1,
            image: "https://avatars.mds.yandex.net/i?id=8213ecd5c1a38e6678f2a1c0be9cff79_l-4303091-images-thumbs&n=13",
            title: "Магаз",
            description: "пися",
            path: "/web-store"
        },
        {
            id: 2,
            image: "https://i.pinimg.com/originals/c9/e4/b3/c9e4b3822cb96cab091698094d020cd7.jpg",
            title: "Мессенджер",
            description: "Проект мессенджера (лента новостей)",
            path: "/web-development"
        },
        {
            id: 3,
            image: "https://images.wallpaperscraft.com/image/single/circles_lines_background_43438_3200x2400.jpg",
            title: "Портфолио",
            description: "Проект портфолио/визитки",
            path: "/mobile-apps"
        }
    ];

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home cardsData={cardsData} />} />
                <Route path="/web-store" element={<WebStore />} />
                <Route path="/web-development" element={<WebMessenger />} />
                <Route path="/mobile-apps" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

const Home = ({ cardsData, BackGroundImage }) => {
    const navigate = useNavigate();


    return (
        <div className="container">
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    onClick={() => navigate(card.path)}
                />
            ))}
        </div>
    );
};

export default App;