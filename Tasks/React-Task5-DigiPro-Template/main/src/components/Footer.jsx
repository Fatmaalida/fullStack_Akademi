import React from 'react'

export default function Footer() {
    return (
        <>
            <section className="clients-logo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="partners">
                                <div className="partner">
                                    <img src="img/cl01.png" alt="partner image"/>
                                </div>
                                <div className="partner">
                                    <img src="img/cl02.png" alt="partner image"/>
                                </div>
                                <div className="partner">
                                    <img src="img/cl03.png" alt="partner image"/>
                                </div>
                                <div className="partner">
                                    <img src="img/cl04.png" alt="partner image"/>
                                </div>
                                <div className="partner">
                                    <img src="img/cl02.png" alt="partner image"/>
                                </div>
                                <div className="partner">
                                    <img src="img/cl03.png" alt="partner image"/>
                                </div>
                                <div className="partner">
                                    <img src="img/cl04.png" alt="partner image"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="subscribe bgimage">
                <div className="bg_image_holder">
                    <img src="img/subscribe-bg.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 subscribe-inner">
                            <div className="envelope-svg">
                                <img src="img/svg/newsletter.svg" alt="" className="svg"/>
                            </div>
                            <p>Subscribe to get the latest themes, templates and offer information. Dont worry, we wont send
                                spam!</p>

                            <form action="#" className="subscribe-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Enter your email address" required/>
                                        <button type="submit" className="btn btn--sm btn-primary">Subscribe</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>






            <footer className="footer-area footer--light">
                <div className="footer-big">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">

                                    <div className="widget-about">
                                        <img src="img/footer-logo.png" alt="" className="img-fluid"/>
                                            <p>Pellentesque facilisis the ullamcorp keer sapien interdum is the magna pellentesque
                                                kequis
                                                hasellus keur condimentum eleifend.</p>
                                            <ul className="contact-details">
                                                <li>
                                                    <span className="icon-earphones"></span>
                                                    Call Us:
                                                    <a href="tel:344-755-111">344-755-111</a>
                                                </li>
                                                <li>
                                                    <span className="icon-envelope-open"></span>
                                                    <a href="mailto:support@aazztech.com">support@aazztech.com</a>
                                                </li>
                                            </ul>
                                    </div>

                                </div>

                            </div>


                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-menu footer-menu--1">
                                        <h5 className="footer-widget-title">Popular Category</h5>
                                        <ul>
                                            <li>
                                                <a href="#">Wordpress</a>
                                            </li>
                                            <li>
                                                <a href="#">Plugins</a>
                                            </li>
                                            <li>
                                                <a href="#">Joomla Template</a>
                                            </li>
                                            <li>
                                                <a href="#">Admin Template</a>
                                            </li>
                                            <li>
                                                <a href="#">HTML Template</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>


                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h5 className="footer-widget-title">Our Company</h5>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">How It Works</a>
                                            </li>
                                            <li>
                                                <a href="#">Affiliates</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Plan & Pricing</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>


                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h5 className="footer-widget-title">Help Support</h5>
                                        <ul>
                                            <li>
                                                <a href="#">Support Forum</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms & Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Support Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Refund Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="#">Buyers Faq</a>
                                            </li>
                                            <li>
                                                <a href="#">Sellers Faq</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>&copy; 2018
                                        <a href="#">DigiPro</a>. All rights reserved. Created by
                                        <a href="#">AazzTech</a>
                                    </p>
                                </div>

                                <div className="go_top">
                                    <span className="icon-arrow-up"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
