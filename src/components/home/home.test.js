import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home';

describe('Home Component', () => {
    test('renders the promo banner with heading and paragraph', () => {
        render(<Home />);

        expect(screen.getByText('Welcome to Little Lemon restaurant')).toBeInTheDocument();
        expect(screen.getByText(/Experience the best dining experience in town./i)).toBeInTheDocument();
    });

    test('renders the Delicious food column with heading and paragraph', () => {
        render(<Home />);

        expect(screen.getByText('Delicious food')).toBeInTheDocument();
        expect(screen.getByText(/Our menu is packed with delicious dishes/i)).toBeInTheDocument();
    });

    test('renders the Friendly Staff column with heading and paragraph', () => {
        render(<Home />);

        expect(screen.getByText('Friendly Staff')).toBeInTheDocument();
        expect(screen.getByText(/Our staff is dedicated to providing you with the best service/i)).toBeInTheDocument();
    });

    test('renders the Comfortable restaurant column with heading and paragraph', () => {
        render(<Home />);

        expect(screen.getByText('Comfortable restaurant')).toBeInTheDocument();
        expect(screen.getByText(/Enjoy your meal in a warm and cozy setting/i)).toBeInTheDocument();
    });

    test('renders all column photos', () => {
        render(<Home />);

        expect(screen.getByTestId('food-photo')).toBeInTheDocument();
        expect(screen.getByTestId('staff-photo')).toBeInTheDocument();
        expect(screen.getByTestId('restaurant-photo')).toBeInTheDocument();
    });
});
