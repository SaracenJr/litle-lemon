import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from './menu';

describe('Menu Component', () => {
    test('renders Italian style pizza column with heading and paragraph', () => {
        render(<Menu />);

        expect(screen.getByText('Italian style pizza')).toBeInTheDocument();
        expect(screen.getByText(/Our pizzas are freshly baked with a crispy crust/i)).toBeInTheDocument();
    });

    test('renders Italian pasta column with heading and paragraph', () => {
        render(<Menu />);

        expect(screen.getByText('Italian pasta')).toBeInTheDocument();
        expect(screen.getByText(/Indulge in our delectable pasta dishes/i)).toBeInTheDocument();
    });

    test('renders Lasagna column with heading and paragraph', () => {
        render(<Menu />);

        expect(screen.getByText('Lasagna')).toBeInTheDocument();
        expect(screen.getByText(/Experience the comforting layers of our homemade lasagna/i)).toBeInTheDocument();
    });

    test('renders Bruschetta column with heading and paragraph', () => {
        render(<Menu />);

        expect(screen.getByText('Bruschetta')).toBeInTheDocument();
        expect(screen.getByText(/Delight in the simplicity of bruschetta/i)).toBeInTheDocument();
    });

    test('renders Vine column with heading and paragraph', () => {
        render(<Menu />);

        expect(screen.getByText('Vine')).toBeInTheDocument();
        expect(screen.getByText(/Savor our exquisite selection of Italian wines/i)).toBeInTheDocument();
    });

    test('renders all column photos', () => {
        render(<Menu />);

        expect(screen.getByTestId('pizza-photo')).toBeInTheDocument();
        expect(screen.getByTestId('pasta-photo')).toBeInTheDocument();
        expect(screen.getByTestId('lasagna-photo')).toBeInTheDocument();
        expect(screen.getByTestId('bruschetta-photo')).toBeInTheDocument();
        expect(screen.getByTestId('vine-photo')).toBeInTheDocument();
    });
});
