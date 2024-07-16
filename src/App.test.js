import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App Component', () => {
  test('renders Home component by default', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
    );

    expect(screen.getByText('Welcome to Little Lemon restaurant')).toBeInTheDocument();
  });

  test('navigates to Menu component when Menu link is clicked', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
    );

    userEvent.click(screen.getByText('Menu'));
    expect(screen.getByText('Italian style pizza')).toBeInTheDocument();
  });

  test('navigates to Booking component when Booking link is clicked', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
    );

    userEvent.click(screen.getByText('Booking'));
    expect(screen.getByText('Book a table')).toBeInTheDocument();
  });

  test('navigates to About component when About link is clicked', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
    );

    userEvent.click(screen.getByText('About'));
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('renders 404 page for non-existent route', () => {
    render(
        <MemoryRouter initialEntries={['/non-existent']}>
          <App />
        </MemoryRouter>
    );

    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
  });
});
