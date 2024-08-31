import React from 'react';

function Register() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">Signup</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Signup</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signup_area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <form action="#">
                                <div className="cardify signup_form">
                                    <div className="login--header">
                                        <h3>Create Your Account</h3>
                                        <p>Please fill the following fields with appropriate information to register a new DigiPro account.</p>
                                    </div>

                                    <div className="login--form">
                                        <div className="form-group">
                                            <label htmlFor="urname">Your Name</label>
                                            <input id="urname" type="text" className="text_field" placeholder="Enter your Name"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email_ad">Email Address</label>
                                            <input id="email_ad" type="text" className="text_field" placeholder="Enter your email address"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="user_name">Username</label>
                                            <input id="user_name" type="text" className="text_field" placeholder="Enter your username..."/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input id="password" type="password" className="text_field" placeholder="Enter your password..."/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="con_pass">Confirm Password</label>
                                            <input id="con_pass" type="password" className="text_field" placeholder="Confirm password"/>
                                        </div>

                                        <button className="btn btn--md register_btn btn-primary" type="submit">Register Now</button>

                                        <div className="login_assist">
                                            <p>Already have an account?
                                                <a href="login.html">Login</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
