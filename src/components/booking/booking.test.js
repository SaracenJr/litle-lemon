import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Booking from './booking';

test('renders Booking component and shows error messages on invalid submission', () => {
    render(<Booking />);

    fireEvent.click(screen.getByText('Book Now'));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('Number of guests is required')).toBeInTheDocument();
});

test('removes error message when input is corrected', () => {
    render(<Booking />);

    fireEvent.click(screen.getByText('Book Now'));
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
});

test('shows notification message on successful form submission', () => {
    render(<Booking />);

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '19:00' } });

    fireEvent.click(screen.getByText('Book Now'));

    expect(screen.getByText('Table booked successfully!')).toBeInTheDocument();
});
