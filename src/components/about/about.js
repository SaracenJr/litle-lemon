import React from 'react';
import './about.css';
import '../../App.css';

const About = () => {
    return (
        <section id="about" className="tab-content">
            <h2>About Us</h2>
            <p>
                Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and
                Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic
                and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
            </p>
            <p>
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to
                pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and
                his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort
                to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean
                region.
            </p>
            <h2>
                Our Menu Highlights:
            </h2>
            <ul>
                <li>
                    <p>
                        <h3>Pizza:</h3> Our pizzas are freshly baked with a crispy crust and topped with the finest
                        ingredients. Whether you prefer classic Margherita or adventurous toppings, we have a pizza for
                        every taste.
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Pasta:</h3> Indulge in our handcrafted pasta dishes, from classic Spaghetti Carbonara to
                        rich and creamy Fettuccine Alfredo.
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Italian Wine:</h3> Explore our curated selection of Italian wines, each bottle chosen to
                        complement the flavors of our dishes and elevate your dining experience.
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Lasagna:</h3> Dive into our decadent lasagna, layers of pasta sheets enveloped in hearty
                        Bolognese sauce and melted mozzarella, a comforting favorite for every visit.
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Bruschetta:</h3> Start your meal with our vibrant bruschetta, featuring crusty bread topped
                        with fresh tomatoes, basil, and drizzled with olive oil, a burst of Mediterranean flavors.
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Ambience:</h3> Enjoy our inviting atmosphere adorned with rustic decor and ambient lighting,
                        perfect for intimate dinners or gatherings with friends and family.
                    </p>
                </li>
            </ul>
        </section>
    )
};

export default About;
