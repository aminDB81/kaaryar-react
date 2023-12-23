import React from 'react';

const RadioButtons = ({ name, options, value, onChange, onBlur, error }) => (
    <div>
        <label>جنسیت :</label>
        {options.map((option) => (
            <div key={option}>
                <label htmlFor={option}>{option}</label>
                <input
                    type="radio"
                    id={option}
                    name={name}
                    value={option}
                    checked={value === option}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        ))}
        {error && <div className="error">{error}</div>}
    </div>
);

export default RadioButtons;
