import React from 'react'
import BlogCard from '../components/BlogCard'

function Blog() {
    return (
        <>


            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">Blog Version One</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Blog Version One</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="blog_area section--padding">
                <div className="container">
                    <div className="row" data-uk-grid>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">



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


        </>
    )
}

export default Blog