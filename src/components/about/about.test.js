import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './about';

describe('About Component', () => {
    test('renders About Us heading', () => {
        render(<About />);
        expect(screen.getByText('About Us')).toBeInTheDocument();
    });

    test('renders first paragraph about the restaurant', () => {
        render(<About />);
        expect(screen.getByText(/Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant/i)).toBeInTheDocument();
    });

    test('renders second paragraph about the owners', () => {
        render(<About />);
        expect(screen.getByText(/Little Lemon is owned by two Italian brothers, Mario and Adrian/i)).toBeInTheDocument();
    });

    test('renders Our Menu Highlights heading', () => {
        render(<About />);
        expect(screen.getByText('Our Menu Highlights:')).toBeInTheDocument();
    });

    test('renders all menu items', () => {
        render(<About />);

        expect(screen.getByText('Pizza:')).toBeInTheDocument();
        expect(screen.getByText('Our pizzas are freshly baked with a crispy crust and topped with the finest ingredients. Whether you prefer classic Margherita or adventurous toppings, we have a pizza for every taste.')).toBeInTheDocument();

        expect(screen.getByText('Pasta:')).toBeInTheDocument();
        expect(screen.getByText('Indulge in our handcrafted pasta dishes, from classic Spaghetti Carbonara to rich and creamy Fettuccine Alfredo.')).toBeInTheDocument();

        expect(screen.getByText('Italian Wine:')).toBeInTheDocument();
        expect(screen.getByText('Explore our curated selection of Italian wines, each bottle chosen to complement the flavors of our dishes and elevate your dining experience.')).toBeInTheDocument();

        expect(screen.getByText('Lasagna:')).toBeInTheDocument();
        expect(screen.getByText('Dive into our decadent lasagna, layers of pasta sheets enveloped in hearty Bolognese sauce and melted mozzarella, a comforting favorite for every visit.')).toBeInTheDocument();

        expect(screen.getByText('Bruschetta:')).toBeInTheDocument();
        expect(screen.getByText('Start your meal with our vibrant bruschetta, featuring crusty bread topped with fresh tomatoes, basil, and drizzled with olive oil, a burst of Mediterranean flavors.')).toBeInTheDocument();

        expect(screen.getByText('Ambience:')).toBeInTheDocument();
        expect(screen.getByText('Enjoy our inviting atmosphere adorned with rustic decor and ambient lighting, perfect for intimate dinners or gatherings with friends and family.')).toBeInTheDocument();
    });
});
