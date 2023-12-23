import React from 'react';

const InputField = ({ id, name, value, type, label, onChange, onBlur, error }) => (
    <>
    <div>
        <label htmlFor={id}>{label} : </label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        {error && <div className="error">{error}</div>}
    </div>
    </>
);

export default InputField;
