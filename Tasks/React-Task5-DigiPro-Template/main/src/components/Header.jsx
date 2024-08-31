import React from 'react'

export default function header() {
    return (
        <>
            <div className="menu-area">
                <div className="top-menu-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-fullwidth">
                                    <div className="logo-wrapper">
                                        <div className="logo logo-top">
                                            <a href="index.html"><img src="img/logo.png" alt="logo image" className="img-fluid" /></a>
                                        </div>
                                    </div>

                                    <div className="menu-container">
                                        <div className="d_menu">

                                            <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                    data-target="#bs-example-navbar-collapse-1"
                                                    aria-controls="bs-example-navbar-collapse-1"
                                                    aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon icon-menu"></span>
                                                </button>

                                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                                    <ul className="navbar-nav">
                                                        <li className="has_dropdown">
                                                            <a href="index.html">Home</a>
                                                            <div className="dropdown dropdown--menu">
                                                                <ul>
                                                                    <li>
                                                                        <a href="index.html">Home Multi Vendor</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index2.html">Home Two Single User</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index3.html">Home Three Product</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index4.html">Home Four Product</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index5.html">Home Five Product</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="has_dropdown">
                                                            <a href="all-products.html">All Product</a>
                                                            <div className="dropdown dropdown--menu">
                                                                <ul>
                                                                    <li>
                                                                        <a href="all-products.html">Recent Items</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="all-products.html">Popular Items</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="index5.html">Free Templates</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Follow Feed</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Top Authors</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="has_dropdown">
                                                            <a href="category-grid.html">Categories</a>
                                                            <div className="dropdown dropdown--menu">
                                                                <ul>
                                                                    <li>
                                                                        <a href="category-grid.html">Popular Items</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Admin Templates</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Blog / Magazine / News</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Creative</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Corporate Business</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Resume Portfolio</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">eCommerce</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Entertainment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category-grid.html">Landing Pages</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="has_megamenu">
                                                            <a href="#">Elements</a>
                                                            <div className="dropdown_megamenu contained">
                                                                <div className="megamnu_module">
                                                                    <div className="menu_items">
                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="accordion.html">Accordion</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="alert.html">Alert</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="brands.html">Brands</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="buttons.html">Buttons</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="cards.html">Cards</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="charts.html">Charts</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="content-block.html">Content Block</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="dropdowns.html">Dropdowns</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="features.html">Features</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="info-box.html">Info Box</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="modal.html">Modal</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="peoples.html">Peoples</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="products.html">Products</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="social.html">Social</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="tab.html">Tabs</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="table.html">Table</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="testimonials.html">Testimonials</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="timeline.html">Timeline</a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="typography.html">Typography</a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="headers.html">Header Styles</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="pricing.html">Pricing</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="has_megamenu">
                                                            <a href="#">Pages</a>
                                                            <div className="dropdown_megamenu">
                                                                <div className="megamnu_module">
                                                                    <div className="menu_items">
                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li className="title">Product</li>
                                                                                <li>
                                                                                    <a href="all-products.html">Products Grid</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="category-grid.html">Category Grid</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="search-product.html">Search Product</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product.html">Single Product
                                                                                        V1</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product-v2.html">Single Product
                                                                                        V2</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-product-v3.html">Single Product
                                                                                        V3</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="cart.html">Shopping Cart</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="checkout.html">Checkout</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li className="title">Author</li>
                                                                                <li>
                                                                                    <a href="author.html">Author Profile</a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="notification.html">Notifications</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="message.html">Message Inbox</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="message-compose.html">Message
                                                                                        Compose</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="favourites.html">Favorites Items</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="career.html">Job Posts</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="job-detail.html">Job Details</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li className="title">Dashboard</li>
                                                                                <li>
                                                                                    <a href="dashboard.html">Dashboard</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-setting.html">Account
                                                                                        Settings</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-purchase.html">Author
                                                                                        Purchases</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-add-credit.html">Add
                                                                                        Credits</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-statement.html">Statements</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="invoice.html">Invoice</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-upload.html">Upload Item</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-manage-item.html">Manage Items</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="edit-item.html">Edit Items</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="dashboard-withdrawal.html">Withdrawals</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="add-payment-method.html">Add Payment
                                                                                        Method</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="order-confirm.html">Order Confirm</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li className="title">User</li>
                                                                                <li>
                                                                                    <a href="support-forum.html">Support Forum</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="support-forum-detail.html">Forum
                                                                                        Details</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="support-forum-form.html">Forum Form</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="login.html">Login</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="signup.html">Register</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="recover-pass.html">Recovery
                                                                                        Password</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="customer-dashboard.html">Customer
                                                                                        Dashboard</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="customer-downloads.html">Customer
                                                                                        Downloads</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="customer-info.html">Customer Info</a>
                                                                                </li>
                                                                            </ul>

                                                                            <ul>
                                                                                <li className="title">Blog</li>
                                                                                <li>
                                                                                    <a href="blog1.html">Blog V-1</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="blog2.html">Blog V-2</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="single-blog.html">Single Blog</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className="menu_column">
                                                                            <ul>
                                                                                <li className="title">Other</li>
                                                                                <li>
                                                                                    <a href="how-it-works.html">How It Works</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="about.html">About Us</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="pricing.html">Pricing Plan</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="testimonial.html">Testimonials</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="faq.html">FAQs</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="faq-details.html">FAQ's Details</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="affiliate.html">Affiliates</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="term-condition.html">Terms &amp;
                                                                                        Conditions</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="event.html">Event</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="event-detail.html">Event Detail</a>
                                                                                </li>
                                                                                <li className="has_badge">
                                                                                    <a href="badges.html">Badges <span
                                                                                        className="badge badge-primary">New</span></a>

                                                                                </li>
                                                                                <li>
                                                                                    <a href="404.html">404 Error page</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="contact.html">contact</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </nav>

                                        </div>
                                    </div>


                                    <div className="author-menu">

                                        <div className="author-area">
                                            <div className="search-wrapper">
                                                <div className="nav_right_module search_module">
                                                    <span className="icon-magnifier search_trigger"></span>

                                                    <div className="search_area">
                                                        <form action="#">
                                                            <div className="input-group input-group-light">
                                                                <span className="icon-left" id="basic-addon1">
                                                                    <i className="icon-magnifier"></i>
                                                                </span>
                                                                <input type="text" className="form-control search_field"
                                                                    placeholder="Type words and hit enter..."/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="author__notification_area">
                                                <ul>
                                                    <li className="has_dropdown">
                                                        <div className="icon_wrap">
                                                            <span className="icon-bell"></span>
                                                            <span className="notification_status noti"></span>
                                                        </div>

                                                        <div className="dropdown notification--dropdown">

                                                            <div className="dropdown_module_header">
                                                                <h6>My Notifications</h6>
                                                            </div>

                                                            <div className="notifications_module">
                                                                <div className="notification">
                                                                    <div className="notification__info">
                                                                        <div className="info_avatar">
                                                                            <img src="img/notification_head.png" alt="" />
                                                                        </div>
                                                                        <div className="info">
                                                                            <p>
                                                                                <span>Anderson</span> added to Favourite
                                                                                <a href="#">Mccarther Coffee Shop</a>
                                                                            </p>
                                                                            <p className="time">Just now</p>
                                                                        </div>
                                                                    </div>


                                                                    <div className="notification__icons ">
                                                                        <span className="icon-heart loved noti_icon"></span>
                                                                    </div>

                                                                </div>


                                                                <div className="notification">
                                                                    <div className="notification__info">
                                                                        <div className="info_avatar">
                                                                            <img src="img/notification_head2.png" alt="" />
                                                                        </div>
                                                                        <div className="info">
                                                                            <p>
                                                                                <span>Michael</span> commented on
                                                                                <a href="#">DigiPro Extension Bundle</a>
                                                                            </p>
                                                                            <p className="time">Just now</p>
                                                                        </div>
                                                                    </div>


                                                                    <div className="notification__icons ">
                                                                        <span className="icon-bubble commented noti_icon"></span>
                                                                    </div>

                                                                </div>


                                                                <div className="notification">
                                                                    <div className="notification__info">
                                                                        <div className="info_avatar">
                                                                            <img src="img/notification_head3.png" alt=""/>
                                                                        </div>
                                                                        <div className="info">
                                                                            <p>
                                                                                <span>Khamoka </span>purchased
                                                                                <a href="#"> Visibility Manager
                                                                                    Subscriptions</a>
                                                                            </p>
                                                                            <p className="time">Just now</p>
                                                                        </div>
                                                                    </div>


                                                                    <div className="notification__icons ">
                                                                        <span className="icon-basket-loaded purchased noti_icon"></span>
                                                                    </div>

                                                                </div>


                                                                <div className="notification">
                                                                    <div className="notification__info">
                                                                        <div className="info_avatar">
                                                                            <img src="img/notification_head4.png" alt="" />
                                                                        </div>
                                                                        <div className="info">
                                                                            <p>
                                                                                <span>Anderson</span> added to Favourite
                                                                                <a href="#">Mccarther Coffee Shop</a>
                                                                            </p>
                                                                            <p className="time">Just now</p>
                                                                        </div>
                                                                    </div>


                                                                    <div className="notification__icons "><span
                                                                        className="icon-star reviewed noti_icon"></span>
                                                                    </div>

                                                                </div>

                                                                <div className="text-center m-top-30 p-left-20 p-right-20"><a
                                                                    href="notification.html"
                                                                    className="btn btn-primary btn-md btn-block">View
                                                                    All</a></div>

                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="has_dropdown">
                                                        <div className="icon_wrap">
                                                            <span className="icon-envelope-open"></span>
                                                            <span className="notification_status msg"></span>
                                                        </div>

                                                        <div className="dropdown messaging--dropdown">
                                                            <div className="dropdown_module_header">
                                                                <h6>My Messages</h6>
                                                            </div>

                                                            <div className="messages">
                                                                <a href="message.html" className="message recent">
                                                                    <div className="message__actions_avatar">
                                                                        <div className="avatar">
                                                                            <img src="img/notification_head4.png" alt="" />
                                                                        </div>
                                                                    </div>


                                                                    <div className="message_data">
                                                                        <div className="name_time">
                                                                            <div className="name">
                                                                                <p>NukeThemes</p>
                                                                                <span className="icon-envelope"></span>
                                                                            </div>

                                                                            <span className="time">Just now</span>
                                                                            <p>Hello John Smith! Nunc placerat mi ...</p>
                                                                        </div>
                                                                    </div>

                                                                </a>


                                                                <a href="message.html" className="message recent">
                                                                    <div className="message__actions_avatar">
                                                                        <div className="avatar">
                                                                            <img src="img/notification_head5.png" alt="" />
                                                                        </div>
                                                                    </div>


                                                                    <div className="message_data">
                                                                        <div className="name_time">
                                                                            <div className="name">
                                                                                <p>Crazy Coder</p>
                                                                                <span className="icon-envelope"></span>
                                                                            </div>

                                                                            <span className="time">Just now</span>
                                                                            <p>Hi! Nunc placerat mi id nisi interum ...</p>
                                                                        </div>
                                                                    </div>

                                                                </a>


                                                                <a href="message.html" className="message">
                                                                    <div className="message__actions_avatar">
                                                                        <div className="avatar">
                                                                            <img src="img/notification_head2.png" alt="" />
                                                                        </div>
                                                                    </div>


                                                                    <div className="message_data">
                                                                        <div className="name_time">
                                                                            <div className="name">
                                                                                <p>Hybrid Insane</p>
                                                                            </div>

                                                                            <span className="time">Just now</span>
                                                                            <p>Hi! Nunc placerat mi id nisi interum ...</p>
                                                                        </div>
                                                                    </div>

                                                                </a>


                                                                <a href="message.html" className="message">
                                                                    <div className="message__actions_avatar">
                                                                        <div className="avatar">
                                                                            <img src="img/notification_head3.png" alt="" />
                                                                        </div>
                                                                    </div>


                                                                    <div className="message_data">
                                                                        <div className="name_time">
                                                                            <div className="name">
                                                                                <p>ThemeXylum</p>
                                                                            </div>

                                                                            <span className="time">Just now</span>
                                                                            <p>Hi! Nunc placerat mi id nisi interum ...</p>
                                                                        </div>
                                                                    </div>

                                                                </a>


                                                                <a href="message.html" className="message">
                                                                    <div className="message__actions_avatar">
                                                                        <div className="avatar">
                                                                            <img src="img/notification_head4.png" alt="" />
                                                                        </div>
                                                                    </div>


                                                                    <div className="message_data">
                                                                        <div className="name_time">
                                                                            <div className="name">
                                                                                <p>NukeThemes</p>
                                                                                <span className="icon-envelope"></span>
                                                                            </div>

                                                                            <span className="time">Just now</span>
                                                                            <p>Hello John Smith! Nunc placerat mi ...</p>
                                                                        </div>
                                                                    </div>

                                                                </a>

                                                            </div>
                                                            <div className="text-center m-top-30 m-bottom-30 p-left-20 p-right-20">
                                                                <a href="message.html"
                                                                    className="btn btn-primary btn-md btn-block">View All</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="has_dropdown">
                                                        <div className="icon_wrap">
                                                            <span className="icon-basket-loaded"></span>
                                                            <span className="notification_count purch">2</span>
                                                        </div>

                                                        <div className="dropdown dropdown--cart">
                                                            <div className="cart_area">
                                                                <div className="cart_list">
                                                                    <div className="cart_product">
                                                                        <div className="product__info">
                                                                            <div className="thumbn">
                                                                               <img src="img/capro1.jpg" alt="cart product thumbnail"/>
                                                                            </div>

                                                                            <div className="info">
                                                                                <a className="title" href="single-product.html">Finance
                                                                                    and Consulting Business Theme</a>
                                                                                <div className="cat">
                                                                                    <a href="#">
                                                                                        <img src="img/catword.png"
                                                                                            alt="" />Wordpress</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="product__action">
                                                                            <a href="#">
                                                                                <span className="icon-trash"></span>
                                                                            </a>
                                                                            <p>$60</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cart_product">
                                                                        <div className="product__info">
                                                                            <div className="thumbn">
                                                                                <img src="img/capro2.jpg"
                                                                                    alt="cart product thumbnail" />
                                                                            </div>

                                                                            <div className="info">
                                                                                <a className="title" href="single-product.html">Flounce
                                                                                    - Multipurpose OpenCart Theme</a>
                                                                                <div className="cat">
                                                                                    <a href="#">
                                                                                        <img src="img/catword.png"
                                                                                            alt="" />Wordpress</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="product__action">
                                                                            <a href="#">
                                                                                <span className="icon-trash"></span>
                                                                            </a>
                                                                            <p>$60</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="total">
                                                                    <p>
                                                                        <span>Total :</span>$80</p>
                                                                </div>
                                                                <div className="cart_action">
                                                                    <a className="btn btn-primary" href="cart.html">View
                                                                        Cart</a>
                                                                    <a className="btn btn-secondary" href="checkout.html">Checkout</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="author-author__info has_dropdown">
                                                <div className="author__avatar online">
                                                    <img src="img/user-avater.png" alt="user avatar"
                                                        className="rounded-circle" />
                                                </div>

                                                <div className="dropdown dropdown--author">
                                                    <div className="author-credits d-flex">
                                                        <div className="author__avatar">
                                                            <img src="img/user-avater.png" alt="user avatar"
                                                                className="rounded-circle" />
                                                        </div>
                                                        <div className="autor__info">
                                                            <p className="name">
                                                                Chris Bent
                                                            </p>
                                                            <p className="amount">$20.45</p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="author.html">
                                                                <span className="icon-user"></span>Profile</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard.html">
                                                                <span className="icon-home"></span> Dashboard</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-setting.html">
                                                                <span className="icon-settings"></span> Setting</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">
                                                                <span className="icon-basket"></span>Purchases</a>
                                                        </li>
                                                        <li>
                                                            <a href="favourites.html">
                                                                <span className="icon-heart"></span> Favourite</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-add-credit.html">
                                                                <span className="icon-credit-card"></span>Add Credits</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-statement.html">
                                                                <span className="icon-chart"></span>Sale Statement</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-upload.html">
                                                                <span className="icon-cloud-upload"></span>Upload Item</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-manage-item.html">
                                                                <span className="icon-notebook"></span>Manage Item</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-withdrawal.html">
                                                                <span className="icon-briefcase"></span>Withdrawals</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="icon-logout"></span>Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>



                                        <div className="mobile_content ">
                                            <span className="icon-user menu_icon"></span>


                                            <div className="offcanvas-menu closed">
                                                <span className="icon-close close_menu"></span>
                                                <div className="author-author__info">
                                                    <div className="author__avatar v_middle">
                                                        <img src="img/user-avater.png" alt="user avatar" />
                                                    </div>
                                                </div>


                                                <div className="author__notification_area">
                                                    <ul>
                                                        <li>
                                                            <a href="notification.html">
                                                                <div className="icon_wrap">
                                                                    <span className="icon-bell"></span>
                                                                    <span className="notification_count noti">25</span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="message.html">
                                                                <div className="icon_wrap">
                                                                    <span className="icon-envelope"></span>
                                                                    <span className="notification_count msg">6</span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="cart.html">
                                                                <div className="icon_wrap">
                                                                    <span className="icon-basket"></span>
                                                                    <span className="notification_count purch">2</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>


                                                <div className="dropdown dropdown--author">
                                                    <ul>
                                                        <li>
                                                            <a href="author.html">
                                                                <span className="icon-user"></span>Profile</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard.html">
                                                                <span className="icon-home"></span> Dashboard</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-setting.html">
                                                                <span className="icon-settings"></span> Setting</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">
                                                                <span className="icon-basket"></span>Purchases</a>
                                                        </li>
                                                        <li>
                                                            <a href="favourites.html">
                                                                <span className="icon-heart"></span> Favourite</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-add-credit.html">
                                                                <span className="icon-credit-card"></span>Add Credits</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-statement.html">
                                                                <span className="icon-chart"></span>Sale Statement</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-upload.html">
                                                                <span className="icon-cloud-upload"></span>Upload Item</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-manage-item.html">
                                                                <span className="icon-notebook"></span>Manage Item</a>
                                                        </li>
                                                        <li>
                                                            <a href="dashboard-withdrawal.html">
                                                                <span className="icon-briefcase"></span>Withdrawals</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="icon-logout"></span>Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="text-center">
                                                    <a href="signup.html" className="author-area__seller-btn inline">Become a
                                                        Seller</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
