
import React, { useState, useEffect } from "react";

function EmployeeValidationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [validInputs, setValidInputs] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    const employeeIdRegex = /^[0-9]{6}$/;

    const isNameValid = (name) => name.length >= 4 && nameRegex.test(name);
    const isEmailValid = (email) => emailRegex.test(email);
    const isEmployeeIdValid = (employeeId) => employeeIdRegex.test(employeeId);
    const isJoiningDateValid = (joiningDate) => new Date(joiningDate) < new Date();

    useEffect(() => {
        setValidInputs(
            isNameValid(name) &&
            isEmailValid(email) &&
            isEmployeeIdValid(employeeId) &&
            isJoiningDateValid(joiningDate)
        );
    }, [name, email, employeeId, joiningDate]);

    const handleSubmit = () => {
        setName('');
        setEmail('');
        setEmployeeId('');
        setJoiningDate('');
    };

    return (
        <div className="layout-column align-items-center mt-20">
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
                <input
                    className="w-100"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    placeholder="Name"
                    data-testid="input-name-test"
                />
                {!isNameValid(name) && (
                    <p className="error mt-2">Name must be at least 4 characters long and only contain letters and spaces</p>
                )}
            </div>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
                <input
                    className="w-100"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    placeholder="Email"
                />
                {!isEmailValid(email) && (
                    <p className="error mt-2">Email must be a valid email address</p>
                )}
            </div>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
                <input
                    className="w-100"
                    type="text"
                    name="employeeId"
                    value={employeeId}
                    onChange={(evt) => setEmployeeId(evt.target.value)}
                    placeholder="Employee ID"
                />
                {!isEmployeeIdValid(employeeId) && (
                    <p className="error mt-2">Employee ID must be exactly 6 digits</p>
                )}
            </div>
            <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
                <input
                    className="w-100"
                    type="date"
                    name="joiningDate"
                    value={joiningDate}
                    onChange={(evt) => setJoiningDate(evt.target.value)}
                    placeholder="Joining Date"
                />
                {!isJoiningDateValid(joiningDate) && (
                    <p className="error mt-2">Joining Date cannot be in the future</p>
                )}
            </div>
            <button data-testid="submit-btn" type="submit" disabled={!validInputs} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default EmployeeValidationForm;
