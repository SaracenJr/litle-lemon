import React from 'react';
import './home.css';
import '../../App.css';

const Home = () => {
    return (
        <section id="home" className="tab-content">
            <div className="promo-banner">
                <h1>Welcome to Little Lemon restaurant</h1>
                <p>
                    Experience the best dining experience in town. Our menu features a variety of dishes made from the
                    freshest ingredients, prepared by our top chefs.
                </p>
            </div>

            <div className="columns">
                <div className="column food">
                    <div id="food" className="photo" data-testid="food-photo"></div>
                    <h2>Delicious food</h2>
                    <p>
                        Our menu is packed with delicious dishes, made with the freshest ingredients. From
                        appetizers to main courses and desserts, we have something to satisfy every craving.
                    </p>
                </div>
                <div className="column staff">
                    <div id="staff" className="photo" data-testid="staff-photo"></div>
                        <h2>Friendly Staff</h2>
                        <p>
                            Our staff is dedicated to providing you with the best service. From the moment you walk in,
                            you'll be greeted with a smile and treated like family.
                        </p>
                </div>
                <div className="column restaurant">
                    <div id="restaurant" className="photo" data-testid="restaurant-photo"></div>
                        <h2>Comfortable restaurant</h2>
                        <p>
                            Enjoy your meal in a warm and cozy setting. Our restaurant is designed to make you feel at
                            home, with comfortable seating and a relaxed atmosphere.
                        </p>
                </div>
            </div>
        </section>
    )
};

export default Home;
