import React from 'react';
import { Link } from "react-router-dom";
import { UserConsumer } from "../../context/UserContext";
import './Home.css'; // Optional custom CSS file

const Home = (props) => {
    return (
        <div className="home">
            {/* Hero Section with Background */}
            <section className='hero-section'>
                <div className='hero-background'>
                    <div className='hero-overlay'></div>
                </div>
                <div className='container'>
                    <div className='row align-items-center min-vh-100'>
                        <div className='col-lg-8 mx-auto text-center text-white'>
                            <div className='hero-content'>
                                <div className='badge badge-primary badge-pill px-4 py-2 mb-4'>
                                    🚗 Premium Car Rental
                                </div>
                                <h1 className='display-3 font-weight-bold mb-4 hero-title'>
                                    Drive Your Dreams with <span className='text-warning'>RentCar</span>
                                </h1>
                                <p className='lead hero-subtitle mb-5'>
                                    Experience the freedom of the open road with our premium fleet.
                                    <br />Fast, reliable, and effortless car rentals tailored for you.
                                </p>
                                <div className='cta-buttons d-flex flex-column p-6 flex-sm-row justify-content-center '>
                                    <Link
                                        to='/cars/all'
                                        className='btn btn-warning btn-lg px-5 py-3 shadow-lg font-weight-bold btn-hover'
                                    >
                                        🚀 Explore Our Fleet
                                    </Link>
                                    {props.user.isLoggedIn && (
                                        props.user.role !== 'ADMIN'
                                            ? (
                                                <Link
                                                    to='/cars/available'
                                                    className='btn btn-outline-light btn-lg px-5 py-3 shadow-sm btn-hover'
                                                >
                                                    📅 Available Cars
                                                </Link>
                                            )
                                            : (
                                                <Link
                                                    to='/rents/pending'
                                                    className='btn btn-outline-light btn-lg px-5 py-3 shadow-sm btn-hover'
                                                >
                                                    ⏳ Pending Rents
                                                </Link>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='scroll-indicator'>
                    <div className='scroll-arrow'></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='stats-section py-5 bg-dark text-white'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-3 col-6 mb-4'>
                            <div className='stat-item'>
                                <h2 className='display-4 font-weight-bold text-warning mb-2'>500+</h2>
                                <p className='text-light'>Vehicles Available</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-6 mb-4'>
                            <div className='stat-item'>
                                <h2 className='display-4 font-weight-bold text-warning mb-2'>24/7</h2>
                                <p className='text-light'>Customer Support</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-6 mb-4'>
                            <div className='stat-item'>
                                <h2 className='display-4 font-weight-bold text-warning mb-2'>50+</h2>
                                <p className='text-light'>Locations</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-6 mb-4'>
                            <div className='stat-item'>
                                <h2 className='display-4 font-weight-bold text-warning mb-2'>10K+</h2>
                                <p className='text-light'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='features-section py-5 bg-light'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-lg-8 mx-auto text-center'>
                            <h2 className='display-4 font-weight-bold mb-4'>Why Choose RentCar?</h2>
                            <p className='lead text-muted'>We provide the best car rental experience with premium services</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 mb-4'>
                            <div className='feature-card card border-0 shadow-lg h-100 hover-lift'>
                                <div className='card-body text-center p-4'>
                                    <div className='feature-icon mb-4'>
                                        <div className='icon-wrapper bg-primary rounded-circle mx-auto'>
                                            <i className='fas fa-bolt fa-2x text-white'></i>
                                        </div>
                                    </div>
                                    <h4 className='font-weight-bold mb-3'>Instant Booking</h4>
                                    <p className='text-muted'>
                                        Book your preferred car in seconds with our streamlined process
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mb-4'>
                            <div className='feature-card card border-0 shadow-lg h-100 hover-lift'>
                                <div className='card-body text-center p-4'>
                                    <div className='feature-icon mb-4'>
                                        <div className='icon-wrapper bg-success rounded-circle mx-auto'>
                                            <i className='fas fa-shield-alt fa-2x text-white'></i>
                                        </div>
                                    </div>
                                    <h4 className='font-weight-bold mb-3'>Fully Insured</h4>
                                    <p className='text-muted'>
                                        Comprehensive insurance coverage for complete peace of mind
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mb-4'>
                            <div className='feature-card card border-0 shadow-lg h-100 hover-lift'>
                                <div className='card-body text-center p-4'>
                                    <div className='feature-icon mb-4'>
                                        <div className='icon-wrapper bg-warning rounded-circle mx-auto'>
                                            <i className='fas fa-tag fa-2x text-white'></i>
                                        </div>
                                    </div>
                                    <h4 className='font-weight-bold mb-3'>Best Prices</h4>
                                    <p className='text-muted'>
                                        Competitive rates with transparent pricing and no hidden fees
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='cta-section py-5 bg-primary text-white'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8'>
                            <h3 className='display-5 font-weight-bold mb-3'>Ready to Hit the Road?</h3>
                            <p className='lead mb-0'>Join thousands of satisfied customers and book your perfect car today!</p>
                        </div>
                        <div className='col-lg-4 text-lg-right text-center'>
                            <Link
                                to='/cars/all'
                                className='btn btn-light btn-lg px-5 py-3 shadow-lg font-weight-bold btn-hover'
                            >
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

const HomeWithUserContext = (props) => {
    return (
        <UserConsumer>
            {({ user }) => (
                <Home {...props} user={user}/>
            )}
        </UserConsumer>
    )
};

export default HomeWithUserContext;
