import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import RadioButtons from '../RadioButtons/RadioButtons';
import CheckboxList from '../CheckboxList/CheckboxList';
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

    const invalidEmails = require('../../data/invalid-emails.json');
    const weakPasswords = require('../../data/weak-passwords.json');
    const cities = require('../../data/cities.json');
    const skillsList = require('../../data/skills.json');
    const handleReset = () => {
        setFormData(initialFormData);
        setErrors({});
    };
    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'repeatPassword', 'city', 'gender'];
        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = `${field === 'email' ? 'ایمیل' : field} الزامی است`;
            }
        });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const persianLettersRegex = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/u;

        if (!formData.firstName) {
            newErrors.firstName = 'نام الزامی است';
        } else if (!persianLettersRegex.test(formData.firstName)) {
            newErrors.firstName = 'نام باید شامل حروف فارسی باشد';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'نام خانوادگی الزامی است';
        } else if (!persianLettersRegex.test(formData.lastName)) {
            newErrors.lastName = 'نام خانوادگی باید شامل حروف فارسی باشد';
        }
        if (!formData.email) {
            newErrors.email = 'ایمیل الزامی است';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'فرمت ایمیل نامعتبر است';
        } else if (invalidEmails.includes(formData.email)) {
            newErrors.email = 'ایمیل وارد شده تکراری است ';
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{12,}$/;
        const isWeakPassword = weakPasswords.includes(formData.password.toLowerCase());

        if (!formData.password) {
            newErrors.password = 'رمز عبور الزامی است';
        } else if (formData.password.length < 12) {
            newErrors.password = 'رمز عبور باید حداقل 12 کاراکتر باشد';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'رمز عبور باید شامل حداقل یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی و یک عدد باشد';
        } else if (isWeakPassword) {
            newErrors.password = 'رمز عبور وارد شده ضعیف است';
        }

        if (!formData.repeatPassword) {
            newErrors.repeatPassword = 'تکرار رمز عبور الزامی است';
        } else if (formData.repeatPassword !== formData.password) {
            newErrors.repeatPassword = 'رمز عبور و تکرار آن باید یکسان باشند';
            newErrors.password = 'رمز عبور و تکرار آن باید یکسان باشند';
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

        const isFormValid = validateForm();

        if (isFormValid) {
            alert("ثبت نام موفقیت آمیز بود");
            alert("برای مشاهده اطلاعات کنسول مرورگر خود را باز کنید");
            console.log('Form submitted successfully:', formData);
            setFormData(initialFormData);
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        const trimmedValue = name === 'email' || name === 'password' ? value.trim() : value;

        if (formData[name] !== undefined) {
            validateField(name, trimmedValue);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: trimmedValue,
        }));
    };
    const validateField = (fieldName, value) => {
        const newErrors = {...errors};

        switch (fieldName) {
            case 'firstName':
                if (!value) {
                    newErrors[fieldName] = 'نام الزامی است';
                } else if (!/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/u.test(value)) {
                    newErrors[fieldName] = 'نام باید شامل حروف فارسی باشد';
                }
                break;

            case 'lastName':
                if (!value) {
                    newErrors[fieldName] = 'نام خانوادگی الزامی است';
                }else if (!/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/u.test(value)) {
                    newErrors[fieldName] = 'نام خانوادگی باید شامل حروف فارسی باشد';
                }
                break;

            case 'email':
                if (!value) {
                    newErrors[fieldName] = 'ایمیل الزامی است';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors[fieldName] = 'فرمت ایمیل نامعتبر است';
                } else if (invalidEmails.includes(value)) {
                    newErrors[fieldName] = 'ایمیل وارد شده تکراری است';
                }
                break;

            case 'city':
                if (!value) {
                    newErrors[fieldName] = 'انتخاب شهر الزامی است';
                }
                break;

            case 'gender':
                if (!value) {
                    newErrors[fieldName] = `${fieldName === 'email' ? 'ایمیل' : fieldName} الزامی است`;
                }
                break;

            case 'password':
                const isWeakPassword = weakPasswords.includes(value.toLowerCase());

                if (!value) {
                    newErrors[fieldName] = 'رمز عبور الزامی است';
                } else if (value.length < 12) {
                    newErrors[fieldName] = 'رمز عبور باید حداقل 12 کاراکتر باشد';
                } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value)) {
                    newErrors[fieldName] = 'رمز عبور باید شامل حداقل یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی و یک عدد باشد';
                } else if (isWeakPassword) {
                    newErrors[fieldName] = 'رمز عبور وارد شده ضعیف است';
                }
                break;

            case 'repeatPassword':
                if (!value) {
                    newErrors[fieldName] = 'تکرار رمز عبور الزامی است';
                }
                break;

            case 'skills':
                if (formData.skills.length === 0) {
                    newErrors.skills = 'لطفاً حداقل یک مهارت انتخاب کنید';
                }
                break;

            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleBlur = (event) => {
        const {name, value} = event.target;
        validateField(name, value);
    };

    const handleSkillsChange = (event) => {
        const {checked, value} = event.target;
        const updatedSkills = checked ? [...formData.skills, value] : formData.skills.filter((skill) => skill !== value);

        setFormData((prevData) => ({
            ...prevData,
            skills: updatedSkills,
        }));
    };

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
            <InputField
                id="firstName"
                name="firstName"
                value={formData.firstName}
                type="text"
                label="نام"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
            />

            <InputField
                id="lastName"
                name="lastName"
                value={formData.lastName}
                type="text"
                label="نام خانوادگی"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
            />

            <InputField
                id="email"
                name="email"
                value={formData.email}
                type="email"
                label="ایمیل"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
            />

            <InputField
                id="password"
                name="password"
                value={formData.password}
                type="password"
                label="پسورد"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
            />

            <InputField
                id="repeatPassword"
                name="repeatPassword"
                value={formData.repeatPassword}
                type="password"
                label="تکرار پسورد"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.repeatPassword}
            />

            <SelectField
                id="city"
                name="city"
                value={formData.city}
                options={cities}
                label="شهر"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.city}
            />

            <RadioButtons
                name="gender"
                options={['مرد', 'زن', 'ترجیح میدم نگویم']}
                value={formData.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.gender}
            />

            <CheckboxList
                options={skillsList}
                selectedSkills={formData.skills}
                onChange={handleSkillsChange}
                onBlur={handleBlur}
                error={errors.skills}
            />

            <button type="submit">ثبت نام</button>
            <button type="reset">پاک کردن همه</button>
        </form>
    );
};

export default RegistrationForm;
