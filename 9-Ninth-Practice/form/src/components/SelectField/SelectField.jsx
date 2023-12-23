import React from 'react';

const SelectField = ({ id, name, value, options, label, onChange, onBlur, error }) => (
    <div className="city-section">
        <label className="city-label" htmlFor={id}>{label} : </label>
        <select className="city-select" id={id} name={name} value={value} onChange={onChange} onBlur={onBlur}>
            <option value="">شهر خود را انخاب کنید</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        {error && <div className="error">{error}</div>}
    </div>
);

export default SelectField;
