import './App.css';
import inputData from "./users.json"
import {useState} from "react"
function App() {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {inputData.map(input => {
                    if (input.type === 'text' || input.type === 'email' || input.type === 'password') {
                        return (
                            <div className="form-group" key={input.id}>
                                <label htmlFor={input.name}>{input.label}</label>
                                <br />
                                <input
                                    type={input.type}
                                    id={input.name}
                                    name={input.name}
                                    required={input.required}
                                    placeholder={input.placeholder}
                                    onChange={handleInputChange}
                                />
                            </div>
                        );
                    } else if (input.type === 'select') {
                        return (
                            <div className="form-group" key={input.id}>
                                <label htmlFor={input.name}>{input.label}</label>
                                <br />
                                <select
                                    id={input.name}
                                    name={input.name}
                                    required={input.required}
                                    onChange={handleInputChange}
                                >
                                    {input.options.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        );
                    } else if (input.type === 'radio') {
                        return (
                            <div className="form-group" key={input.id}>
                                <label>{input.label}</label>
                                {input.options.map(option => (
                                    <label key={option.value} className="radio-label">
                                        <input
                                            type={input.type}
                                            name={input.name}
                                            value={option.value}
                                            required={input.required}
                                            onChange={handleInputChange}
                                        />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        );
                    }
                    return null;
                })}
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default App;