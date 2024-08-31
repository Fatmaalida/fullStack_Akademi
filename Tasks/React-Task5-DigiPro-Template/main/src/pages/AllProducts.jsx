import React from 'react'
import ProductCard from '../components/ProductCard'

export default function AllProducts() {
    return (
        <>

            <section className="hero-area2 hero-area3 bgimage">
                <div className="bg_image_holder">
                    <img src="img/hero-image01.png" alt="background-image"/>
                </div>
                <div className="hero-content content_above">
                    <div className="content-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero__content__title">
                                        <h1>7,685 Premium Templates & Themes</h1>
                                    </div>
                                    <div className="search-area">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-3">

                                                <div className="search_box2">
                                                    <form action="#">
                                                        <input type="text" className="text_field" placeholder="Search your products..."/>
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


            <div className="filter-area product-filter-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filter-bar">

                                <div className="filter__option filter--dropdown">
                                    <a href="#" id="drop1" className="dropdown-trigger dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Categories
                                        <span className="icon-arrow-down"></span>
                                    </a>
                                    <ul className="custom_dropdown custom_drop2 dropdown-menu" aria-labelledby="drop1">
                                        <li>
                                            <a href="#">Wordpress
                                                <span>35</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Landing Page
                                                <span>45</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Psd Template
                                                <span>13</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Plugins
                                                <span>08</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">HTML Template
                                                <span>34</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Components
                                                <span>78</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="filter__option filter--dropdown">
                                    <a href="#" id="drop2" className="dropdown-trigger dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Filter By
                                        <span className="icon-arrow-down"></span>
                                    </a>
                                    <ul className="custom_dropdown dropdown-menu" aria-labelledby="drop2">
                                        <li>
                                            <a href="#">Trending items</a>
                                        </li>
                                        <li>
                                            <a href="#">Popular items</a>
                                        </li>
                                        <li>
                                            <a href="#">New items </a>
                                        </li>
                                        <li>
                                            <a href="#">Best seller </a>
                                        </li>
                                        <li>
                                            <a href="#">Best rating </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="filter__option filter--dropdown filter--range">
                                    <a href="#" id="drop3" className="dropdown-trigger dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Price Range
                                        <span className="icon-arrow-down"></span>
                                    </a>
                                    <div className="custom_dropdown dropdown-menu" aria-labelledby="drop3">

                                        <div className="range-slider price-range"></div>
                                        <div className="price-ranges">
                                            <span className="from rounded">$30</span>
                                            <span className="to rounded">$300</span>
                                        </div>

                                    </div>
                                </div>


                                <div className="filter__option filter--select">
                                    <div className="select-wrap">
                                        <select name="price">
                                            <option value="12">12 Items per page</option>
                                            <option value="15">15 Items per page</option>
                                            <option value="25">25 Items per page</option>
                                        </select>
                                        <span className="icon-arrow-down"></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product-grid p-bottom-100">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 product-list">
                            <div className="row">
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>
<ProductCard></ProductCard>


                            </div>



                            <nav className="pagination-default">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="fa fa-long-arrow-left"></i></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">10</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="fa fa-long-arrow-right"></i></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>


                        </div>

                    </div>
                </div>
            </section>


            <section className="cta2 bgimage">
                <div className="bg_image_holder">
                    <img src="img/cta-bg.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cta-content">
                                <div className="cta-text">
                                    <h2>Ready To Join Our Marketplace!</h2>
                                    <p>Grow your marketing and be happy with your online business</p>
                                </div>
                                <div className="cta-btn">
                                    <a href="#" className="btn btn--md btn-primary">Join Us Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
