import React, { useState } from "react";

const TooltipButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        // Получаем координаты клика
        const x = event.clientX;
        const y = event.clientY;

        // Устанавливаем позицию tooltip
        setTooltipPosition({ x, y });

        // Показываем tooltip
        setShowTooltip(true);

        // Через 2 секунды скрываем tooltip
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    return (
        <div>
            <button onClick={handleClick}>Нажми на меня</button>
            {showTooltip && (
                <div
                    style={{
                        position: "fixed",
                        left: tooltipPosition.x + 10, // Смещаем tooltip немного вправо от курсора
                        top: tooltipPosition.y + 10, // Смещаем tooltip немного ниже курсора
                        backgroundColor: "black",
                        color: "white",
                        padding: "5px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        zIndex: 1000, // Чтобы tooltip был поверх других элементов
                    }}
                >
                    Привет, я tooltip!
                </div>
            )}
        </div>
    );
};

export default TooltipButton;