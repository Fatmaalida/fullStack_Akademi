import React from 'react';

export default function Checkout() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">Checkout</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dashboard-area p-top-100 p-bottom-70">
                <div className="dashboard_contents">
                    <div className="container">
                        <form action="#" className="setting_form">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="information_module">
                                        <div className="toggle_title">
                                            <h4>Billing Information </h4>
                                        </div>
                                        <div className="information__set">
                                            <div className="information_wrapper form--fields">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="first_name">First Name
                                                                <sup>*</sup>
                                                            </label>
                                                            <input type="text" id="first_name" className="text_field" placeholder="First Name" defaultValue="Ron"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="last_name">Last Name
                                                                <sup>*</sup>
                                                            </label>
                                                            <input type="text" id="last_name" className="text_field" placeholder="Last Name" defaultValue="Doe"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="company">Company Name
                                                        <sup>*</sup>
                                                    </label>
                                                    <input type="text" id="company" className="text_field" placeholder="AazzTech" defaultValue="AazzTech"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="email">Email Address
                                                        <sup>*</sup>
                                                    </label>
                                                    <input type="text" id="email" className="text_field" placeholder="Email address" defaultValue="contact@aazztech.com"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="country1">Country
                                                        <sup>*</sup>
                                                    </label>
                                                    <div className="select-wrap select-wrap2">
                                                        <select name="country" id="country1" className="text_field">
                                                            <option value="">Select one</option>
                                                            <option value="bangladesh">Bangladesh</option>
                                                            <option value="india">India</option>
                                                            <option value="uruguye">Uruguye</option>
                                                            <option value="australia">Australia</option>
                                                            <option value="neverland">Neverland</option>
                                                            <option value="atlantis">Atlantis</option>
                                                        </select>
                                                        <span className="icon-arrow-down"></span>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="address1">Address Line 1</label>
                                                    <input type="text" id="address1" className="text_field" placeholder="Address line one"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="address2">Address Line 2</label>
                                                    <input type="text" id="address2" className="text_field" placeholder="Address line two"/>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="m-bottom-sm">
                                                            <label htmlFor="city">City / State
                                                                <sup>*</sup>
                                                            </label>
                                                            <div className="select-wrap select-wrap2">
                                                                <select name="city" id="city" className="text_field">
                                                                    <option value="">Select one</option>
                                                                    <option value="dhaka">Dhaka</option>
                                                                    <option value="sydney">Sydney</option>
                                                                    <option value="newyork">New York</option>
                                                                    <option value="london">London</option>
                                                                    <option value="mexico">New Mexico</option>
                                                                </select>
                                                                <span className="icon-arrow-down"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="">
                                                            <label htmlFor="zipcode">Zip / Postal Code
                                                                <sup>*</sup>
                                                            </label>
                                                            <input type="text" id="zipcode" className="text_field" placeholder="zip/postal code"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="information_module order_summary">
                                        <div className="toggle_title">
                                            <h4>Order Summary</h4>
                                        </div>

                                        <ul>
                                            <li className="item">
                                                <a href="single-product.html" target="_blank">Finance and Consulting Business Theme</a>
                                                <span>$60</span>
                                            </li>
                                            <li className="item">
                                                <a href="single-product.html" target="_blank">Visibility Manager Subscriptions</a>
                                                <span>$60</span>
                                            </li>
                                            <li>
                                                <p>Estimated Taxes & Fees:</p>
                                                <span>$2</span>
                                            </li>
                                            <li className="total_ammount">
                                                <p>Total</p>
                                                <span>$122.00</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="information_module payment_options">
                                        <div className="toggle_title">
                                            <h4>Select Payment Method</h4>
                                        </div>

                                        <ul>
                                            <li>
                                                <div className="custom-radio">
                                                    <input type="radio" id="opt1" name="filter_opt"/>
                                                    <label htmlFor="opt1">
                                                        <span className="circle"></span>Credit Card</label>
                                                </div>
                                                <img src="img/cards.png" alt="Visa Cards"/>
                                            </li>

                                            <li>
                                                <div className="custom-radio">
                                                    <input type="radio" id="opt2" name="filter_opt"/>
                                                    <label htmlFor="opt2">
                                                        <span className="circle"></span>Paypal</label>
                                                </div>
                                                <img src="img/paypal.png" alt="Visa Cards"/>
                                            </li>

                                            <li>
                                                <div className="custom-radio">
                                                    <input type="radio" id="opt3" name="filter_opt"/>
                                                    <label htmlFor="opt3">
                                                        <span className="circle"></span>DigiPro Credit</label>
                                                </div>
                                                <p>Balance
                                                    <span className="bold">$180</span>
                                                </p>
                                            </li>
                                        </ul>

                                        <div className="payment_info modules__content">
                                            <div className="form-group">
                                                <label htmlFor="card_number">Card Number</label>
                                                <input id="card_number" type="text" className="text_field" placeholder="Enter your card number here..."/>
                                            </div>

                                            <label htmlFor="name">Expire Date</label>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <div className="select-wrap select-wrap2">
                                                            <select name="months" id="name">
                                                                <option value="">Month</option>
                                                                <option value="jan">Jan</option>
                                                                <option value="feb">Feb</option>
                                                                <option value="mar">Mar</option>
                                                                <option value="apr">Apr</option>
                                                                <option value="may">May</option>
                                                                <option value="jun">Jun</option>
                                                                <option value="jul">Jul</option>
                                                                <option value="aug">Aug</option>
                                                                <option value="sep">Sep</option>
                                                                <option value="oct">Oct</option>
                                                                <option value="nov">Nov</option>
                                                                <option value="dec">Dec</option>
                                                            </select>
                                                            <span className="icon-arrow-down"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <div className="select-wrap select-wrap2">
                                                            <select name="years" id="years">
                                                                <option value="">Year</option>
                                                                <option value="28">2028</option>
                                                                <option value="27">2027</option>
                                                                <option value="26">2026</option>
                                                                <option value="25">2025</option>
                                                                <option value="24">2024</option>
                                                                <option value="23">2023</option>
                                                                <option value="22">2022</option>
                                                                <option value="21">2021</option>
                                                                <option value="20">2020</option>
                                                            </select>
                                                            <span className="icon-arrow-down"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="cv_code">CVV Code</label>
                                                        <input id="cv_code" type="text" className="text_field" placeholder="Enter code"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name2">Name on Card</label>
                                                        <input id="name2" type="text" className="text_field" placeholder="Enter name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn--round btn--default">Confirm Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
