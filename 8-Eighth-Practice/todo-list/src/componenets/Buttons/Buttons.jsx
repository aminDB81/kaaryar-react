import React from 'react';
import "./Buttons.css"
const ButtonSection = ({ handleDeleteAll, handleAdd }) => (
    <div className="button-section">
        <button className="text-center first-button" onClick={handleDeleteAll}>
            حذف همه
        </button>
        <button className="text-center second-button" onClick={handleAdd}>
            اضافه کردن
        </button>
    </div>
);

export default ButtonSection;
