import React from 'react'
import CategoriesCard from '../components/CategoriesCard'

export default function Categories() {
    return (
        <>
            <section className="hero-area2 hero-area3 bgimage">
                <div className="bg_image_holder">
                    <img src="img/hero-image01.png" alt="background-image" />
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
                                                        <input type="text" className="text_field" placeholder="Search your products..." />
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
            <div className="filter-area product-filter-area filter-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filter-bar">

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
                        <div className="col-xl-3 col-lg-4 col-md-12 order-lg-0 order-md-1 order-sm-1 order-1">
                            <aside className="sidebar product--sidebar">

                                <div className="sidebar-card card--category">
                                    <a className="card-title" href="#collapse1" data-toggle="collapse"  role="button"
                                        aria-expanded="false" aria-controls="collapse1">
                                        <h5>Categories
                                            <span className="icon-arrow-down"></span>
                                        </h5>
                                    </a>
                                    <div className="collapse show collapsible-content" id="collapse1">
                                        <ul className="card-content">
                                            <li>
                                                <a href="#">
                                                    Wordpress
                                                    <span className="item-count">35</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Landing Page
                                                    <span className="item-count"> 45</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Psd Template
                                                    <span className="item-count">13</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Plugins
                                                    <span className="item-count">08</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    HTML Template
                                                    <span className="item-count">34</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Components
                                                    <span className="item-count">78</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Joomla Template
                                                    <span className="item-count">26</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="sidebar-card card--filter">
                                    <a className="card-title" href="#collapse2" data-toggle="collapse" role="button"
                                        aria-expanded="false" aria-controls="collapse2">
                                        <h5>Filter Products
                                            <span className="icon-arrow-down"></span>
                                        </h5>
                                    </a>
                                    <div className="collapse show collapsible-content" id="collapse2">
                                        <ul className="card-content">
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt1" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt1">Trending Products</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt2" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt2">Popular Products</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt3" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt3">New Products</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt4" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt4">Best Seller</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt5" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt5">Best Rating</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt6" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt6">Free Support</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="opt7" className="custom-control-input" name="filter_opt" />
                                                    <label className="custom-control-label" htmlFor="opt7">On Sale</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>



                                    <div className="sidebar-card card--slider">
                                        <a className="card-title" href="#collapse3" data-toggle="collapse" role="button"
                                            aria-expanded="false" aria-controls="collapse3">
                                            <h5>Filter Products
                                                <span className="icon-arrow-down"></span>
                                            </h5>
                                        </a>
                                        <div className="collapse show collapsible-content" id="collapse3">
                                            <div className="card-content">

                                                <div className="range-slider price-range"></div>
                                                <div className="price-ranges">
                                                    <span className="from rounded">$30</span>
                                                    <span className="to rounded">$300</span>
                                                </div>

                                                <div className="search-update">
                                                    <a href="#" className="btn btn-sm btn-primary">Search Update</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="sidebar-card card--category card--date-range">
                                        <a className="card-title" href="#collapse4" data-toggle="collapse" role="button"
                                            aria-expanded="false" aria-controls="collapse4">
                                            <h5>Date Range
                                                <span className="icon-arrow-down"></span>
                                            </h5>
                                        </a>
                                        <div className="collapse show collapsible-content" id="collapse4">
                                            <ul className="card-content">
                                                <li>
                                                    <a href="#">
                                                        Last Week
                                                        <span className="item-count">35</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Last Month
                                                        <span className="item-count"> 45</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Last 6 Month
                                                        <span className="item-count">13</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Last Year
                                                        <span className="item-count">08</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </aside>
                        </div>

                        <div className="col-xl-9 col-lg-8 col-md-12 order-lg-1 order-md-0 order-sm-0 order-0 product-list">
                            <div className="row">
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>
                                <CategoriesCard></CategoriesCard>

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
                    <img src="img/cta-bg.png" alt="" />
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
