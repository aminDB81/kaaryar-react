import React, {useState} from 'react';
import "./styles.css"

const RegistrationForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        city: '',
        gender: '',
        skills: [],
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const invalidEmails = require('../data/invalid-emails.json');
    const weakPasswords = require('../data/weak-passwords.json');
    const cities = require('../data/cities.json');
    const skillsList = require('../data/skills.json');

    const validateForm = () => {
        const newErrors = {};

        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'repeatPassword', 'city', 'gender'];
        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = `${field === 'email' ? 'ایمیل' : field} الزامی است`;
            }
        });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'فرمت ایمیل نامعتبر است';
        }

        const isWeakPassword = weakPasswords.includes(formData.password.toLowerCase());
        if (formData.password && (formData.password.length < 8 || isWeakPassword)) {
            newErrors.password = 'رمز عبور باید حداقل ۸ کاراکتر باشد و رایج نباشد';
        }

        if (formData.repeatPassword !== formData.password) {
            newErrors.repeatPassword = 'رمز عبور و تکرار آن باید یکسان باشند';
        }

        if (!formData.city) {
            newErrors.city = 'لطفاً یک شهر را انتخاب کنید';
        }

        if (!formData.gender) {
            newErrors.gender = 'لطفاً جنسیت خود را انتخاب کنید';
        }

        if (formData.skills.length === 0) {
            newErrors.skills = 'لطفاً حداقل یک مهارت انتخاب کنید';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        validateForm();

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully:', formData);
            setFormData(initialFormData);
            setIsSubmitted(false);
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setErrors({});
        setIsSubmitted(false);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        const trimmedValue = name === 'email' || name === 'password' ? value.trim() : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: trimmedValue,
        }));

        if (isSubmitted) {
            validateForm();
        }
    };

    const handleSkillsChange = (event) => {
        const {name, checked, value} = event.target;
        const updatedSkills = checked ? [...formData.skills, value] : formData.skills.filter((skill) => skill !== value);

        setFormData((prevData) => ({
            ...prevData,
            skills: updatedSkills,
        }));

        if (isSubmitted) {
            validateForm();
        }
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
            <div>
                <label htmlFor="firstName">نام : </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>

            <div>
                <label htmlFor="lastName">نام خانوادگی : </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>

            <div>
                <label htmlFor="email">ایمیل : </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
                <label htmlFor="password">رمز عبور : </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <div>
                <label htmlFor="repeatPassword">تکرار رمز عبور : </label>
                <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
                {errors.repeatPassword && <div className="error">{errors.repeatPassword}</div>}
            </div>

            <div className="city-section">
                <label className="city-label" htmlFor="city">شهر : </label>
                <select className="city-select" id="city" name="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                {errors.city && <div className="error">{errors.city}</div>}
            </div>


            <div>
                <label>جنسیت</label>
                <label htmlFor="male">مرد</label>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                />


                <label htmlFor="female">زن</label>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                />


                <label htmlFor="unspecified">ترجیح میدهم نگویم</label>
                <input
                    type="radio"
                    id="unspecified"
                    name="gender"
                    value="unspecified"
                    checked={formData.gender === 'unspecified'}
                    onChange={handleChange}
                />


                {errors.gender && <div className="error">{errors.gender}</div>}
            </div>

            <div>
                <label>مهارت ها</label>
                {skillsList.map((skill) => (
                    <div key={skill}>
                        <input
                            type="checkbox"
                            id={skill}
                            name="skills"
                            value={skill}
                            checked={formData.skills.includes(skill)}
                            onChange={handleSkillsChange}
                        />
                        <label htmlFor={skill}>{skill}</label>
                    </div>
                ))}
                {errors.skills && <div className="error">{errors.skills}</div>}
            </div>

            <button type="submit">Register</button>
            <button type="reset">Empty All</button>
        </form>
    );
};

export default RegistrationForm;
