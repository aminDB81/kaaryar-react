import React from 'react';

const CheckboxList = ({ options, selectedSkills, onChange, onBlur, error }) => (
    <div>
        <label>مهارت ها</label>
        {options.map((skill) => (
            <div key={skill}>
                <label htmlFor={skill}>{skill}</label>
                <input
                    type="checkbox"
                    id={skill}
                    name="skills"
                    value={skill}
                    checked={selectedSkills.includes(skill)}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        ))}
        {error && <div className="error">{error}</div>}
    </div>
);

export default CheckboxList;
