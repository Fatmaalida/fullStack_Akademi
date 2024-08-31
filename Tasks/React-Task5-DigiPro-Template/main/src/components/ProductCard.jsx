import React from 'react'

export default function ProductCard() {
    return (
        <>

            <div className="col-lg-4 col-md-6">










                <div className="product-single latest-single">

                    <div className="product-thumb">
                        <div className="s-promotion">-40%</div>
                        <figure>
                            <img src="img/product1.png" alt="" className="img-fluid" />
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
                                <img className="auth-img" src="img/auth-img.png" alt="author image" />
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
        </>)
}
