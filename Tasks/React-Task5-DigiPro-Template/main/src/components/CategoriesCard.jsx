import React from 'react'

export default function CategoriesCard() {
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6">

                <div className="product-single latest-single">
                    <div className="product-thumb">
                        <figure>
                            <img src="img/product2.png" alt="" className="img-fluid" />
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
                        <div className="product-rating2">
                            <ul className="list-unstyled">
                                <li className="stars">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-excerpt">
                        <h5>
                            <a href="#">TheBizz Wordpress Theme</a>
                        </h5>
                        <ul className="titlebtm">
                            <li>
                                <img className="auth-img" src="img/auth-img3.png" alt="author image" />
                                <p>
                                    <a href="#">Azztech</a>
                                </p>
                            </li>
                            <li className="product_cat">
                                in
                                <a href="#">Wordpress</a>
                            </li>
                        </ul>
                        <ul className="product-facts clearfix">
                            <li className="price">$59</li>
                            <li className="sells">
                                <span className="icon-basket"></span>52
                            </li>
                            <li className="product-fav">
                                <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
