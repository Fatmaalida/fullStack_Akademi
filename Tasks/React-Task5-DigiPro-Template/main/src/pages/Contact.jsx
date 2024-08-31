import React from 'react'

export default function Contact() {
    return (
        <>


            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">Contact Us</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-title">
                                        <h1>How can We <span className="highlighted">Help?</span></h1>
                                        <p>Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis
                                            fugats. Lid est laborum dolo rumes fugats untras.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">

                                    <div className="contact_tile">
                                        <span className="tiles__icon icon-location-pin"></span>
                                        <h4 className="tiles__title">Office Address</h4>
                                        <div className="tiles__content">
                                            <p>202 New Hampshire Avenue , Northwest #100, New York-2573</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4">

                                    <div className="contact_tile">
                                        <span className="tiles__icon icon-earphones"></span>
                                        <h4 className="tiles__title">Phone Number</h4>
                                        <div className="tiles__content">
                                            <p><p>1-800-643-4500</p> <p>1-800-643-4500</p></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4">

                                    <div className="contact_tile">
                                        <span className="tiles__icon icon-envelope-open"></span>
                                        <h4 className="tiles__title">Phone Number</h4>
                                        <div className="tiles__content">
                                            <p><p>support@aazztech.com</p> <p>support@aazztech.com</p></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-12">
                                    <div className="contact_form cardify">
                                        <div className="contact_form__title">
                                            <h2>Leave Your Messages</h2>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <div className="contact_form--wrapper">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Name" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Name" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <textarea cols="30" rows="10" placeholder="Yout text here"></textarea>

                                                        <div className="sub_btn">
                                                            <button type="button" className="btn btn--md btn-primary">Send Request
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="map"></div>


        </>
    )
}
