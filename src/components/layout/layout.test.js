import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Layout from './layout';

describe('Layout Component', () => {
    test('renders the header with logo', () => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );

        const headerLogo = screen.getAllByRole('img', { name: /logo/i })[0];
        expect(headerLogo).toBeInTheDocument();
    });

    test('renders navigation links', () => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Menu')).toBeInTheDocument();
        expect(screen.getByText('Booking')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });

    test('renders the footer with logo and info', () => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );

        const footerLogo = screen.getAllByRole('img', { name: /logo/i })[1];
        expect(footerLogo).toBeInTheDocument();

        expect(screen.getByText(/© 2024 Little Lemon. All rights reserved./i)).toBeInTheDocument();
    });

    test('renders the Outlet component', () => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );

        expect(screen.getByTestId('outlet')).toBeInTheDocument();
    });
});
