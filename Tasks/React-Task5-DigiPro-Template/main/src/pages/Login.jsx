import React from 'react';

function Login() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">Login</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login_area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                            <form action="#">
                                <div className="cardify login">
                                    <div className="login--header">
                                        <h3>Welcome Back</h3>
                                        <p>You can sign in with your username</p>
                                    </div>

                                    <div className="login--form">
                                        <div className="form-group">
                                            <label htmlFor="user_name">Username</label>
                                            <input id="user_name" type="text" className="text_field" placeholder="Enter your username..." />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pass">Password</label>
                                            <input id="pass" type="password" className="text_field" placeholder="Enter your password..." />
                                        </div>

                                        <div className="form-group">
                                            <div className="custom_checkbox">
                                                <input type="checkbox" id="ch2"/>
                                                <label htmlFor="ch2">
                                                    <span className="shadow_checkbox"></span>
                                                    <span className="label_text">Remember me</span>
                                                </label>
                                            </div>
                                        </div>

                                        <button className="btn btn--md btn-primary" type="submit">Login Now</button>

                                        <div className="login_assist">
                                            <p className="recover">Lost your
                                                <a href="recover-pass.html">username</a> or
                                                <a href="recover-pass.html">password</a>?
                                            </p>
                                            <p className="signup">Don't have an
                                                <a href="signup.html">account</a>?
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

export default Login;
