import React from 'react';
import './menu.css';
import '../../App.css';

const Menu = () => {
    return (
        <section id="menu" className="tab-content">
            <div className="columns">
                <div className="column pizza">
                    <div id="pizza" className="photo" data-testid="pizza-photo"></div>
                        <h2>Italian style pizza</h2>
                        <p>
                            Our pizzas are freshly baked with a crispy crust and topped with the finest ingredients.
                            Whether you prefer classic Margherita or adventurous toppings, we have a pizza for every
                            taste.
                        </p>
                </div>
                <div className="column pasta">
                    <div id="pasta" className="photo" data-testid="pasta-photo"></div>
                        <h2>Italian pasta</h2>
                        <p>
                            Indulge in our delectable pasta dishes, crafted with the finest ingredients and bursting
                            with flavors. From creamy Alfredo to savory Bolognese, each pasta dish is prepared to
                            perfection, ensuring a delightful dining experience that will satisfy your cravings.
                        </p>
                </div>
                <div className="column lasagna">
                    <div id="food" className="photo" data-testid="food-photo"></div>
                        <h2>Lasagna</h2>
                        <p>
                            Experience the comforting layers of our homemade lasagna, filled with savory meat or fresh
                            vegetables, smothered in rich tomato sauce and creamy béchamel. A timeless Italian classic
                            that promises to satisfy every palate.
                        </p>
                </div>
                <div className="column bruschetta">
                    <div id="sandwich" className="photo" data-testid="sandwich-photo"></div>
                        <h2>Bruschetta</h2>
                        <p>
                            Delight in the simplicity of bruschetta, featuring toasted bread topped with ripe tomatoes,
                            fresh basil, garlic, and a drizzle of extra virgin olive oil. A perfect appetizer that
                            captures the essence of Italian culinary tradition.
                        </p>
                </div>
                <div className="column vine">
                    <div id="vine" className="photo" data-testid="vine-photo"></div>
                        <h2>Vine</h2>
                        <p>
                            Savor our exquisite selection of Italian wines, renowned for their rich flavors and
                            impeccable craftsmanship. From robust reds to crisp whites, each bottle embodies the essence
                            of Italy's finest vineyards, perfect for enhancing your dining experience.
                        </p>
                </div>
            </div>
        </section>
    )
};

export default Menu;
