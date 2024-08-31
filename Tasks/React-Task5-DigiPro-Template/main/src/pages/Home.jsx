import React from 'react'

export default function Home() {
    return (
        <>
            <section className="hero-area bgimage">
                <div className="bg_image_holder">
                    <img src="img/hero-image01.png" alt="background-image"/>
                </div>
                <div className="hero-content content_above">
                    <div className="content-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero__content__title">
                                        <h1 className="display-3">
                                            Build A Better
                                            <br />
                                            Digital Product Marketplace
                                        </h1>
                                        <p className="tagline">DigiPro is the most powerful, & customizable template for Easy Digital
                                            Downloads Products</p>
                                    </div>


                                    <div className="search-area">
                                        <div className="row">
                                            <div className="col-md-10 offset-md-1">

                                                <div className="search_box">
                                                    <form action="#">
                                                        <input type="text" className="text_field" placeholder="Search your products..."/>
                                                            <div className="search__select select-wrap">
                                                                <select name="category" className="select--field">
                                                                    <option value="">All Categories</option>
                                                                    <option value="">PSD</option>
                                                                    <option value="">HTML</option>
                                                                    <option value="">WordPress</option>
                                                                    <option value="">Plugins</option>
                                                                </select>
                                                                <span className="icon-arrow-down"></span>
                                                            </div>
                                                            <button type="submit" className="search-btn btn--lg btn-primary">Search Now</button>
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


            <section className="featured-area section--padding bgcolor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h1>Featured Products</h1>
                                <p>Pellentesque facilisis the ullamcorper sapien interdum magna pellentesque kequis. Phasellus
                                    condimentum eleifend kerat.</p>
                            </div>
                        </div>

                        <div className="col-md-12">

                            <div className="product-slide-area owl-carousel">

                                <div className="product-single">
                                    <div className="featured-badge">
                                        <span>Featured</span>
                                    </div>
                                    <div className="product-thumb">
                                        <figure>
                                            <img src="img/fp01.png" alt="" className="img-fluid"/>
                                                <figcaption>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a href="#">
                                                                <span className="icon-basket"></span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Live Demo</a>
                                                        </li>
                                                    </ul>
                                                </figcaption>
                                        </figure>
                                    </div>
                                    <div className="product-excerpt">
                                        <h3>
                                            <a href="#">One Page Resume HTML Template</a>
                                        </h3>
                                        <ul className="titlebtm">
                                            <li>
                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                    <p>
                                                        <a href="#">AazzTech</a>
                                                    </p>
                                            </li>
                                            <li className="product_cat">
                                                in
                                                <a href="#">Template</a>
                                            </li>
                                        </ul>
                                        <ul className="product-facts clearfix">
                                            <li className="price"><span>$20</span></li>
                                            <li className="sells">
                                                <span className="icon-basket"></span>341
                                            </li>
                                            <li className="product-fav">
                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                            </li>
                                            <li className="product-rating">
                                                <ul className="list-unstyled">
                                                    <li className="stars">
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                    </li>
                                                    <li className="total-rating">
                                                        <span>(4)</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="product-single">
                                    <div className="featured-badge">
                                        <span>Featured</span>
                                    </div>
                                    <div className="product-thumb">
                                        <figure>
                                            <img src="img/fp02.png" alt="" className="img-fluid"/>
                                                <figcaption>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a href="#">
                                                                <span className="icon-basket"></span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Live Demo</a>
                                                        </li>
                                                    </ul>
                                                </figcaption>
                                        </figure>
                                    </div>
                                    <div className="product-excerpt">
                                        <h3>
                                            <a href="#">TheBizz Wordpress Theme</a>
                                        </h3>
                                        <ul className="titlebtm">
                                            <li>
                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                    <p>
                                                        <a href="#">AazzTech</a>
                                                    </p>
                                            </li>
                                            <li className="product_cat">
                                                in
                                                <a href="#">Wordpress</a>
                                            </li>
                                        </ul>
                                        <ul className="product-facts clearfix">
                                            <li className="price"><span>$59</span></li>
                                            <li className="sells">
                                                <span className="icon-basket"></span>171
                                            </li>
                                            <li className="product-fav">
                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                            </li>
                                            <li className="product-rating">
                                                <ul className="list-unstyled">
                                                    <li className="stars">
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                    </li>
                                                    <li className="total-rating">
                                                        <span>(4)</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="product-single">
                                    <div className="featured-badge">
                                        <span>Featured</span>
                                    </div>
                                    <div className="product-thumb">
                                        <figure>
                                            <img src="img/fp01.png" alt="" className="img-fluid"/>
                                                <figcaption>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a href="#">
                                                                <span className="icon-basket"></span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Live Demo</a>
                                                        </li>
                                                    </ul>
                                                </figcaption>
                                        </figure>
                                    </div>
                                    <div className="product-excerpt">
                                        <h3>
                                            <a href="#">DigiPro EDD Template</a>
                                        </h3>
                                        <ul className="titlebtm">
                                            <li>
                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                    <p>
                                                        <a href="#">AazzTech</a>
                                                    </p>
                                            </li>
                                            <li className="product_cat">
                                                in
                                                <a href="#">HTML</a>
                                            </li>
                                        </ul>
                                        <ul className="product-facts clearfix">
                                            <li className="price"><span>$22</span></li>
                                            <li className="sells">
                                                <span className="icon-basket"></span>364
                                            </li>
                                            <li className="product-fav">
                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                            </li>
                                            <li className="product-rating">
                                                <ul className="list-unstyled">
                                                    <li className="stars">
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                        <span><i className="fa fa-star"></i></span>
                                                    </li>
                                                    <li className="total-rating">
                                                        <span>(4)</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="more-item-btn">
                                <a href="#" className="btn btn--lg btn-secondary">More Featured Items</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-product section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h1>Newest Products</h1>
                                <p>Pellentesque facilisis the ullamcorper sapien interdum magna pellentesque kequis. Phasellus
                                    condimentum eleifend kerat.</p>
                            </div>
                        </div>

                        <div className="col-lg-12">

                            <div className="product-list">
                                <ul className="nav nav__product-list" id="lp-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab-one" data-toggle="tab" href="#tab1" role="tab"
                                            aria-controls="tab1" aria-selected="true">All Items</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-two" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2"
                                            aria-selected="false">WordPress</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-three" data-toggle="tab" href="#tab3" role="tab"
                                            aria-controls="tab3" aria-selected="false">Site Template</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-four" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4"
                                            aria-selected="false">PSD Template</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-five" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5"
                                            aria-selected="false">Joomla</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-six" data-toggle="tab" href="#tab6" role="tab" aria-controls="tab6"
                                            aria-selected="false">User Interface</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-seven" data-toggle="tab" href="#tab7" role="tab"
                                            aria-controls="tab7" aria-selected="false">Landing Page</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-eight" data-toggle="tab" href="#tab8" role="tab"
                                            aria-controls="tab8" aria-selected="false">Software</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="lp-tab-content">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab-one">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab-two">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab-three">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab-four">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab-five">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab-six">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab-seven">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="tab8" role="tabpanel" aria-labelledby="tab-eight">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product1.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">E-commerce Shopping Cart</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">WordPress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product2.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TheBizz Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img2.png" alt="author image"/>
                                                                    <p><a href="#">Aaazztech</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product3.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">DigiPro EDD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">EchoTheme</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">HTML</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product4.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">AppPress PSD Template</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">PSD</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product5.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">Rida Wordpress Theme</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Wordpress</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6">








                                                <div className="product-single latest-single">

                                                    <div className="product-thumb">

                                                        <figure>
                                                            <img src="img/product6.png" alt="" className="img-fluid"/>
                                                                <figcaption>
                                                                    <ul className="list-unstyled">
                                                                        <li><a href="#"><span className="icon-basket"></span></a></li>
                                                                        <li><a href="#">Live Demo</a></li>
                                                                    </ul>
                                                                </figcaption>
                                                        </figure>
                                                    </div>

                                                    <div className="product-excerpt">
                                                        <h5>
                                                            <a href="#">TableGen Wordpress Plugin</a>
                                                        </h5>
                                                        <ul className="titlebtm">
                                                            <li>
                                                                <img className="auth-img" src="img/auth-img3.png" alt="author image"/>
                                                                    <p><a href="#">Theme-Valley</a></p>
                                                            </li>
                                                            <li className="product_cat">
                                                                in
                                                                <a href="#">Plugin</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="product-facts clearfix">
                                                            <li className="price">$24</li>
                                                            <li className="sells">
                                                                <span className="icon-basket"></span>141
                                                            </li>
                                                            <li className="product-fav">
                                                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                                            </li>
                                                            <li className="product-rating">
                                                                <ul className="list-unstyled">
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_active"></span></li>
                                                                    <li><span className="rate_disabled"></span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center m-top-20">
                                    <a href="#" className="btn btn--lg btn-primary">All New Products</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className="services ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-single">
                                <span className="icon-lock"></span>
                                <h4>Secure Paument</h4>
                                <p>Pellentesque facilisis kamcorper sapien interdum magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-single">
                                <span className="icon-like"></span>
                                <h4>Quality Products</h4>
                                <p>Pellentesque facilisis kamcorper sapien interdum magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-single">
                                <span className="icon-wallet"></span>
                                <h4>14 Days Money Backs</h4>
                                <p>Pellentesque facilisis kamcorper sapien interdum magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-single">
                                <span className="icon-people"></span>
                                <h4>24/7 Customer Care</h4>
                                <p>Pellentesque facilisis kamcorper sapien interdum magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="counter-up-area bgimage">
                <div className="bg_image_holder">
                    <img src="img/countbg.png" alt=""/>
                </div>
                <div className="container content_above">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="counter-up">

                                <div className="counter warning">
                                    <span className="icon-briefcase"></span>
                                    <span className="count_up">38,436</span>
                                    <p>Items for sale</p>
                                </div>


                                <div className="counter info">
                                    <span className="icon-basket"></span>
                                    <span className="count_up">68,257</span>
                                    <p>Total Sale</p>
                                </div>


                                <div className="counter secondary">
                                    <span className="icon-emotsmile"></span>
                                    <span className="count_up">25,567</span>
                                    <p>Happy Customers</p>
                                </div>


                                <div className="counter danger">
                                    <span className="icon-people"></span>
                                    <span className="count_up">76,458</span>
                                    <p>Members</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="working-process section--padding">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="section-title">
                                <h1>It Works Really Easy</h1>
                                <p>Pellentesque facilisis the ullamcorper sapien interdum magna pellentesque kequis. Phasellus
                                    condimentum
                                    eleifend kerat.
                                </p>
                            </div>
                        </div>


                        <div className="col-md-12 step-single">
                            <div className="step-count">
                                <span>Step 1</span>
                                <span><i className="fa fa-long-arrow-down"></i></span>
                            </div>
                            <div className="row">
                                <div className="col-md-6 step-text r-padding">
                                    <div>
                                        <h2>Choose Your Template</h2>
                                        <p>Pellentesque facilisis the ullamcorper sapien interdum is the magna pellentesque kequis.
                                            Phasellus keur condimentum eleifend kerat Pellentesque facilisis the ullamcorper sapien
                                            interdum magna pellentesque kequis. Phasellus condimen kettum eleifend kerat.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 step-image l-padding">
                                    <div>
                                        <img src="img/step01.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 step-single">
                            <div className="step-count step-count2">
                                <span>Step 2</span>
                                <span><i className="fa fa-long-arrow-down"></i></span>
                            </div>
                            <div className="row">
                                <div className="col-md-6 step-image r-padding">
                                    <div>
                                        <img src="img/step01.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-md-6 step-text l-padding">
                                    <div>
                                        <h2>Add it to Shopping Cart</h2>
                                        <p>Pellentesque facilisis the ullamcorper sapien interdum is the magna pellentesque kequis.
                                            Phasellus keur condimentum eleifend kerat Pellentesque facilisis the ullamcorper sapien
                                            interdum magna pellentesque kequis. Phasellus condimen kettum eleifend kerat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 step-single">
                            <div className="step-count step-last">
                                <span>Step 3</span>
                                <span className="icon-emotsmile"></span>
                            </div>
                            <div className="row">
                                <div className="col-md-6 step-text r-padding">
                                    <div>
                                        <h2>Purchase Your Product</h2>
                                        <p>Pellentesque facilisis the ullamcorper sapien interdum is the magna pellentesque kequis.
                                            Phasellus keur condimentum eleifend kerat Pellentesque facilisis the ullamcorper sapien
                                            interdum magna pellentesque kequis. Phasellus condimen kettum eleifend kerat.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 step-image l-padding">
                                    <div>
                                        <img src="img/step01.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="testimonial2 bgimage">
                <div className="bg_image_holder">
                    <img src="img/testimonial-bg.png" alt=""/>
                </div>
                <div className="container content_above">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title section-title-light">
                                <h1>We’ve Made Happy Over 2 Million Customers</h1>
                            </div>
                        </div>

                        <div className="col-md-12 testimonial-carousel">
                            <div className="row">

                                <div className="col-lg-8 offset-lg-2 col-md-12 slider-for">
                                    <div className="tsingle">
                                        <span className="quotei">
                                            <i className="fa fa-quote-right"></i>
                                        </span>
                                        <p>Pellentesque facilisis the ullamcorper sapien interdum is the magna over was kelleu pellen
                                            tesque kequis. The mate was a mighty sailing Skipper this knew it was much more walking.</p>
                                        <h3>@Patrick Pool</h3>
                                        <span className="auth-title">Product Designer</span>
                                    </div>
                                    <div className="tsingle">
                                        <span className="quotei">
                                            <i className="fa fa-quote-right"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem illo dolor
                                            animi a harum, mollitia quas suscipit sit voluptatibus facilis fugit, ullam consequuntur
                                            cumque.
                                        </p>
                                        <h3>@Jhonathan Scott</h3>
                                        <span className="auth-title">UI Expert</span>
                                    </div>
                                    <div className="tsingle">
                                        <span className="quotei">
                                            <i className="fa fa-quote-right"></i>
                                        </span>
                                        <p>Pellentesque facilisis the ullamcorper sapien interdum is the magna over was kelleu pellen
                                            tesque kequis. The mate was a mighty sailing Skipper this knew it was much more walking.
                                        </p>
                                        <h3>@Liam Planket</h3>
                                        <span className="auth-title">Web Developer</span>
                                    </div>
                                    <div className="tsingle">
                                        <span className="quotei">
                                            <i className="fa fa-quote-right"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem illo dolor
                                            animi a harum, mollitia quas suscipit sit voluptatibus facilis fugit, ullam consequuntur
                                            cumque.
                                        </p>
                                        <h3>@Fizz Rahman</h3>
                                        <span className="auth-title">UI Expert</span>
                                    </div>
                                    <div className="tsingle">
                                        <span className="quotei">
                                            <i className="fa fa-quote-right"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, cupiditate, cumque iste
                                            eos delectus, nisi culpa doloremque cum impedit velit quibusdam! Sapiente deserunt debitis
                                            totam.
                                        </p>
                                        <h3>@Mash Mortaza</h3>
                                        <span className="auth-title">UI Expert</span>
                                    </div>
                                    <div className="tsingle">
                                        <span className="quotei">
                                            <i className="fa fa-quote-right"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem illo dolor
                                            animi a harum, mollitia quas suscipit sit voluptatibus facilis fugit, ullam consequuntur
                                            cumque.
                                        </p>
                                        <h3>@Jhonathan Scott</h3>
                                        <span className="auth-title">UI Expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-bottom-nav content_above">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 slider-nav">
                                <div>
                                    <span>
                                        <img src="img/c1.jpg" alt="" className="img-fluid rounded-circle"/>     
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="img/c2.jpg" alt="" className="img-fluid rounded-circle"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="img/c3.jpg" alt="" className="img-fluid rounded-circle"/>
                                    </span>
                                </div>
                                <div>
                                    <span>7
                                        <img src="img/c4.jpg" alt="" className="img-fluid rounded-circle"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="img/c5.jpg" alt="" className="img-fluid rounded-circle"/>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="img/c2.jpg" alt="" className="img-fluid rounded-circle"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="cta">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h1>Join Our Community Club</h1>
                            </div>
                        </div>

                        <div className="col-md-5 cta-single">
                            <h3>Want to Sell Your Products</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repudiandae veritatis qui officiis
                                molestiae
                                quas ipsa id sint quia amet consectetur adipisicing elit.</p>
                            <a href="#" className="btn btn--lg btn-primary">Become an Author</a>
                        </div>
                        <div className="col-md-2 cta-divider">
                            <span>OR</span>
                        </div>
                        <div className="col-md-5 cta-single">
                            <h3>Start Shopping Today</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repudiandae veritatis qui officiis
                                molestiae
                                quas ipsa id sint quia amet consectetur adipisicing elit.</p>
                            <a href="#" className="btn btn--lg btn-secondary">Create an Account</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
