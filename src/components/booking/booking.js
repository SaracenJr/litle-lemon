import React, { useState } from 'react';
import './booking.css';
import '../../App.css';

const Booking = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!date) {
            newErrors.date = 'Date is required';
        }
        if (!time) {
            newErrors.time = 'Time is required';
        }
        if (!guests) {
            newErrors.guests = 'Number of guests is required';
        } else if (isNaN(+guests) || +guests <= 0) {
            newErrors.guests = 'Number of guests must be a positive number';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setNotification('');
            return;
        }

        setNotification('Table booked successfully!');
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setGuests('');
        setErrors({});
    };

    return (
        <section id="booking">
            <h2>Please book a table!</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                {notification && <div className="notification">{notification}</div>}
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
                        }}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                        }}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, date: '' }));
                        }}
                    />
                    {errors.date && <div className="error-message">{errors.date}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, time: '' }));
                        }}
                    />
                    {errors.time && <div className="error-message">{errors.time}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Guests"
                        value={guests}
                        onChange={(e) => {
                            setGuests(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, guests: '' }));
                        }}
                    />
                    {errors.guests && <div className="error-message">{errors.guests}</div>}
                </div>
                <button type="submit">Book Now</button>
            </form>
        </section>
    );
};

export default Booking;

