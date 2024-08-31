import React from 'react'

export default function ProductCardDetails() {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">DigiPro Multipurpose Marketplace HTML Template</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Single Product</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="single-product-desc">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="item-preview">
                                <div className="item-prev-area">

                                    <div className="preview-img-wrapper">
                                        <div className="item__preview-img">
                                            <div className="item__preview-slider">
                                                <div className="prev-slide">
                                                    <img src="img/single1.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single2.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single3.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single1.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single2.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single3.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single1.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single2.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single3.jpg" alt="Preview Image" />
                                                </div>
                                                <div className="prev-slide">
                                                    <img src="img/single1.jpg" alt="Preview Image" />
                                                </div>
                                            </div>

                                            <div className="prev-nav thumb-nav">
                                                <span className="lnr nav-left icon-arrow-left"></span>
                                                <span className="lnr nav-right icon-arrow-right"></span>
                                            </div>
                                        </div>

                                        <div className="item__preview-thumb">
                                            <div className="prev-thumb">
                                                <div className="thumb-slider">
                                                    <div className="item-thumb">
                                                        <img src="img/thumb1.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb2.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb3.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb4.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb5.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb1.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb2.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb3.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb4.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                    <div className="item-thumb">
                                                        <img src="img/thumb5.jpg" alt="Thumbnail Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="item-preview--excerpt">

                                    <div className="item-preview--action">
                                        <div className="action-btns">
                                            <a href="#" className="btn btn--lg btn-primary">Live Preview</a>
                                            <a href="#" className="btn btn--lg btn--icon btn-outline-primary">
                                                <span className="lnr icon-heart"></span>Add To Favorites</a>
                                        </div>
                                    </div>


                                    <div className="item-preview--activity">
                                        <div className="activity-single">
                                            <p>
                                                <span className="icon-basket"></span> Total Sales
                                            </p>
                                            <p>2451</p>
                                        </div>
                                        <div className="activity-single">
                                            <p>
                                                <span className="icon-star"></span> Reviews
                                            </p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </li>
                                                <li>(35)</li>
                                            </ul>
                                        </div>
                                        <div className="activity-single">
                                            <p>
                                                <span className="icon-heart"></span>Favorities
                                            </p>
                                            <p>425</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="item-info">
                                <div className="item-navigation">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li>
                                            <a href="#product-details" className="active" id="tab1" aria-controls="product-details"
                                                role="tab" data-toggle="tab" aria-selected="true">
                                                <span className="icon icon-docs"></span> Item Details</a>
                                        </li>
                                        <li>
                                            <a href="#product-comment" id="tab2" aria-controls="product-comment" role="tab"
                                                data-toggle="tab">
                                                <span className="icon icon-bubbles"></span> Comments </a>
                                        </li>
                                        <li>
                                            <a href="#product-review" id="tab3" aria-controls="product-review" role="tab"
                                                data-toggle="tab">
                                                <span className="icon icon-star"></span> Reviews
                                                <span>(35)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#product-support" id="tab4" aria-controls="product-support" role="tab"
                                                data-toggle="tab">
                                                <span className="icon icon-support"></span> Support</a>
                                        </li>
                                        <li>
                                            <a href="#product-faq" id="tab5" aria-controls="product-faq" role="tab"
                                                data-toggle="tab">
                                                <span className="icon icon-question"></span> item FAQ</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <div className="fade show tab-pane product-tab active" id="product-details" role="tabpanel"
                                        aria-labelledby="tab1">
                                        <div className="tab-content-wrapper">
                                            <h3>Landing Page Details</h3>
                                            <p className="p-bottom-30">Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the
                                                mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent
                                                pharetra,
                                                justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque.
                                                Praesent
                                                pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut
                                                scelerisque.</p>
                                            <h3>Features With Image:</h3>
                                            <img src="img/prodesc.jpg" alt="This is product description thumbnail" />

                                            <h3>Features With HTML List Unordered:</h3>
                                            <ul>
                                                <li>Six different themes for product slider</li>
                                                <li>Featured products slider form selected categories.</li>
                                                <li>Product slider form specific categories of products. Include or exclude
                                                    categories.
                                                </li>
                                                <li>Product slider form specific tags of products. Include or exclude tags. New</li>
                                            </ul>

                                            <h3>Features With HTML List Ordered:</h3>
                                            <ol>
                                                <li>Six different themes for product slider</li>
                                                <li>Featured products slider form selected categories.</li>
                                                <li>Product slider form specific categories of products. Include or exclude
                                                    categories.
                                                </li>
                                                <li>Product slider form specific tags of products. Include or exclude tags. New</li>
                                            </ol>

                                            <h3>Features With HTML List Ordered:</h3>
                                            <iframe width="100" height="400" src="https://www.youtube.com/embed/w2zIUJrglR4"
                                                allowfullscreen></iframe>
                                        </div>
                                    </div>

                                    <div className="fade tab-pane product-tab" id="product-comment" role="tabpanel"
                                        aria-labelledby="tab2">
                                        <div className="thread">
                                            <ul className="media-list thread-list">








                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m1.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="media-heading">
                                                                    <a href="author.html">
                                                                        <h4>Themexylum</h4>
                                                                    </a>
                                                                    <span>9 Hours Ago</span>
                                                                </div>
                                                                <span className="comment-tag buyer">Purchased</span>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                interdum mollis. </p>
                                                        </div>
                                                    </div>


                                                    <ul className="children">
                                                        <li className="single-thread depth-2">
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <a href="#">
                                                                        <img className="media-object" src="img/m2.png"
                                                                            alt="Commentator Avatar" />
                                                                    </a>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="media-heading">
                                                                        <h4>AazzTech</h4>
                                                                        <span>6 Hours Ago</span>
                                                                    </div>
                                                                    <span className="comment-tag author">Author</span>
                                                                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra,
                                                                        justo ut sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi interdum mollis. </p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li className="single-thread depth-2">
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <a href="#">
                                                                        <img className="media-object" src="img/m1.png"
                                                                            alt="Commentator Avatar" />
                                                                    </a>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="media-heading">
                                                                        <h4>Themexylum</h4>
                                                                        <span>9 Hours Ago</span>
                                                                    </div>
                                                                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra,
                                                                        justo ut sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi interdum mollis. </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>


                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>





                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="media-heading">
                                                                    <a href="author.html">
                                                                        <h4>EchoTheme</h4>
                                                                    </a>
                                                                    <span>9 Hours Ago</span>
                                                                </div>

                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                interdum mollis. </p>
                                                        </div>
                                                    </div>





                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>







                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m3.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="media-heading">
                                                                    <a href="author.html">
                                                                        <h4>SnazzyTheme</h4>
                                                                    </a>
                                                                    <span>9 Hours Ago</span>
                                                                </div>
                                                                <span className="comment-tag buyer">Purchased</span>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                interdum mollis. </p>
                                                        </div>
                                                    </div>





                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>





                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m4.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="media-heading">
                                                                    <a href="author.html">
                                                                        <h4>ThemeValley</h4>
                                                                    </a>
                                                                    <span>9 Hours Ago</span>
                                                                </div>

                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                interdum mollis. </p>
                                                        </div>
                                                    </div>





                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png"
                                                                    alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>



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


                                            <div className="comment-form-area">
                                                <h4>Leave a comment</h4>


                                                <div className="media comment-form">
                                                    <div className="media-left">
                                                        <a href="#">
                                                            <img className="media-object" src="img/m7.png" alt="Commentator Avatar" />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <form action="#" className="comment-reply-form">
                                                            <textarea name="reply-comment"
                                                                placeholder="Write your comment..."></textarea>
                                                            <button className="btn btn--sm btn-primary">Post Comment</button>
                                                        </form>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="fade tab-pane product-tab" id="product-review" role="tabpanel"
                                        aria-labelledby="tab3">
                                        <div className="thread thread_review">
                                            <ul className="media-list thread-list">


                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m1.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>Themexylum</h4>
                                                                        </a>
                                                                        <span>9 Hours Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Support</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>EcoTheme</h4>
                                                                        </a>
                                                                        <span>12 Hours Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Customizability</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m3.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>SnzTheme</h4>
                                                                        </a>
                                                                        <span>1 Day Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Degin Quality</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m4.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>ThemeValley</h4>
                                                                        </a>
                                                                        <span>20 Days Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Others</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m5.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>AazzTech</h4>
                                                                        </a>
                                                                        <span>1 Month Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Features</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>





                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m1.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>Jhon Smith</h4>
                                                                        </a>
                                                                        <span>1 Month Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Code Quality</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>Stephen George</h4>
                                                                        </a>
                                                                        <span>2 Month Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Support</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m3.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>ThemeShpe</h4>
                                                                        </a>
                                                                        <span>3 Month Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Others</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m4.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>WeBake</h4>
                                                                        </a>
                                                                        <span>6 Month Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Design Quality</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>
                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m5.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>WPPlugin</h4>
                                                                        </a>
                                                                        <span>8 Month Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Support</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>
                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li className="single-thread">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m1.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="clearfix">
                                                                <div className="pull-left">
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>ThemeLand</h4>
                                                                        </a>
                                                                        <span>1 Year Ago</span>
                                                                    </div>
                                                                    <div className="rating product--rating">
                                                                        <ul>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star"></span></li>
                                                                            <li><span className="fa fa-star-half-o"></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <span className="review_tag">Support</span>
                                                                </div>
                                                                <a href="#" className="reply-link">Reply</a>
                                                            </div>
                                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                sceleris que the mattis, leo quam aliquet congue placerat.</p>
                                                        </div>
                                                    </div>




                                                    <div className="media depth-2 reply-comment">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src="img/m2.png" alt="Commentator Avatar" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                                <textarea className="bla" name="reply-comment" placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--md btn-primary">Post Comment</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>



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

                                    <div className="fade tab-pane product-tab" id="product-support" role="tabpanel" aria-labelledby="tab4">
                                        <div className="support">
                                            <div className="support__title">
                                                <h3>Contact the Author</h3>
                                            </div>
                                            <div className="support__form">
                                                <div className="usr-msg">
                                                    <p>
                                                        Please <a href="login.html">sign in</a> to contact this author.
                                                    </p>

                                                    <form action="#" className="support_form">
                                                        <div className="form-group">
                                                            <label htmlFor="subj">Support Subject:</label>
                                                            <input type="text" id="subj" className="text_field" placeholder="Enter your subject" />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="supmsg">Support Query:</label>
                                                            <textarea className="text_field" id="supmsg" name="supmsg" placeholder="Enter your text..."></textarea>
                                                        </div>
                                                        <button type="submit" className="btn btn--lg btn-primary">
                                                            Submit Now
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fade tab-pane product-tab" id="product-faq" role="tabpanel" aria-labelledby="tab5">
                                        <div className="tab-content-wrapper">

                                            <div className="faq-accordion">
                                                <div className="panel-group accordion" role="tablist" id="accordion">
                                                    <div className="panel accordion__single" id="panel-one">
                                                        <div className="single_acco_title">
                                                            <h4>
                                                                <a data-toggle="collapse" href="#collapse1" className="collapsed"
                                                                    aria-expanded="false" data-target="#collapse1"
                                                                    aria-controls="collapse1">
                                                                    <span>How to write the changelog for theme updates?</span>
                                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <div id="collapse1" className="panel-collapse collapse" aria-labelledby="panel-one"
                                                            data-parent="#accordion">
                                                            <div className="panel-body">
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                    interdum mollis. Aliquip placeat salvia cillum iphone. Seitan
                                                                    aliquip
                                                                    quis cardigan american apparel, butcher. Nunc placerat mi id nisi
                                                                    interdum mollis. Praesent pharetra, justo ut sceleris que the
                                                                    mattis,
                                                                    leo quam aliquet congue placerat mi id nisi interdum mollis. Aliquip
                                                                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american
                                                                    apparel, butcher .</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel accordion__single" id="panel-two">
                                                        <div className="single_acco_title">
                                                            <h4>
                                                                <a data-toggle="collapse" href="#collapse2" className="collapsed"
                                                                    aria-expanded="false" data-target="#collapse2"
                                                                    aria-controls="collapse2">
                                                                    <span>Why do I need to login to purchase an item on DigiPro?</span>
                                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <div id="collapse2" className="panel-collapse collapse" aria-labelledby="panel-two"
                                                            data-parent="#accordion">
                                                            <div className="panel-body">
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                    interdum mollis. Aliquip placeat salvia cillum iphone. Seitan
                                                                    aliquip
                                                                    quis cardigan american apparel, butcher. Nunc placerat mi id nisi
                                                                    interdum mollis. Praesent pharetra, justo ut sceleris que the
                                                                    mattis,
                                                                    leo quam aliquet congue placerat mi id nisi interdum mollis. Aliquip
                                                                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american
                                                                    apparel, butcher .</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel accordion__single" id="panel-three">
                                                        <div className="single_acco_title">
                                                            <h4>
                                                                <a data-toggle="collapse" href="#collapse3" className="collapsed"
                                                                    aria-expanded="false" data-target="#collapse3"
                                                                    aria-controls="collapse3">
                                                                    <span>How to create an account on DigiPro?</span>
                                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <div id="collapse3" className="panel-collapse collapse"
                                                            aria-labelledby="panel-three" data-parent="#accordion">
                                                            <div className="panel-body">
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                    interdum mollis. Aliquip placeat salvia cillum iphone. Seitan
                                                                    aliquip
                                                                    quis cardigan american apparel, butcher. Nunc placerat mi id nisi
                                                                    interdum mollis. Praesent pharetra, justo ut sceleris que the
                                                                    mattis,
                                                                    leo quam aliquet congue placerat mi id nisi interdum mollis. Aliquip
                                                                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american
                                                                    apparel, butcher .</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel accordion__single" id="panel-four">
                                                        <div className="single_acco_title">
                                                            <h4>
                                                                <a data-toggle="collapse" href="#collapse4" className="collapsed"
                                                                    aria-expanded="false" data-target="#collapse4"
                                                                    aria-controls="collapse4">
                                                                    <span>How to write the changelog for theme updates?</span>
                                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <div id="collapse4" className="panel-collapse collapse" aria-labelledby="panel-four"
                                                            data-parent="#accordion">
                                                            <div className="panel-body">
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                    interdum mollis. Aliquip placeat salvia cillum iphone. Seitan
                                                                    aliquip
                                                                    quis cardigan american apparel, butcher. Nunc placerat mi id nisi
                                                                    interdum mollis. Praesent pharetra, justo ut sceleris que the
                                                                    mattis,
                                                                    leo quam aliquet congue placerat mi id nisi interdum mollis. Aliquip
                                                                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american
                                                                    apparel, butcher .</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel accordion__single" id="panel-five">
                                                        <div className="single_acco_title">
                                                            <h4>
                                                                <a data-toggle="collapse" href="#collapse5" className="collapsed"
                                                                    aria-expanded="false" data-target="#collapse5"
                                                                    aria-controls="collapse5">
                                                                    <span>Do you recommend using a download manager software?</span>
                                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <div id="collapse5" className="panel-collapse collapse" aria-labelledby="panel-five"
                                                            data-parent="#accordion">
                                                            <div className="panel-body">
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                    interdum mollis. Aliquip placeat salvia cillum iphone. Seitan
                                                                    aliquip
                                                                    quis cardigan american apparel, butcher. Nunc placerat mi id nisi
                                                                    interdum mollis. Praesent pharetra, justo ut sceleris que the
                                                                    mattis,
                                                                    leo quam aliquet congue placerat mi id nisi interdum mollis. Aliquip
                                                                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american
                                                                    apparel, butcher .</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel accordion__single" id="panel-six">
                                                        <div className="single_acco_title">
                                                            <h4>
                                                                <a data-toggle="collapse" href="#collapse6" className="collapsed"
                                                                    aria-expanded="false" data-target="#collapse6"
                                                                    aria-controls="collapse6">
                                                                    <span>How to purchase an item on DigiPro?</span>
                                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <div id="collapse6" className="panel-collapse collapse" aria-labelledby="panel-six"
                                                            data-parent="#accordion">
                                                            <div className="panel-body">
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue placerat mi id nisi
                                                                    interdum mollis. Aliquip placeat salvia cillum iphone. Seitan
                                                                    aliquip
                                                                    quis cardigan american apparel, butcher. Nunc placerat mi id nisi
                                                                    interdum mollis. Praesent pharetra, justo ut sceleris que the
                                                                    mattis,
                                                                    leo quam aliquet congue placerat mi id nisi interdum mollis. Aliquip
                                                                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american
                                                                    apparel, butcher .</p>
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

                        <div className="col-lg-4 col-md-12">
                            <aside className="sidebar sidebar--single-product">

                                <div className="sidebar-card card-pricing">
                                    <div className="price">
                                        <h1>
                                            <sup>$</sup>20 -
                                            <sup>$</sup>60
                                        </h1>
                                    </div>
                                    <ul className="pricing-options">
                                        <li>
                                            <div className="custom-radio">
                                                <input type="radio" id="opt1" className="" name="filter_opt" checked />
                                                <label for="opt1">
                                                    <span className="circle"></span>Single Site License –
                                                    <span className="pricing__opt">$20.00</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-radio">
                                                <input type="radio" id="opt2" className="" name="filter_opt" />
                                                <label for="opt2">
                                                    <span className="circle"></span>2 Sites License –
                                                    <span className="pricing__opt">$40.00</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-radio">
                                                <input type="radio" id="opt3" className="" name="filter_opt" />
                                                <label for="opt3">
                                                    <span className="circle"></span>Multi Site License –
                                                    <span className="pricing__opt">$60.00</span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="purchase-button">
                                        <a href="#" className="btn btn--lg btn-primary">Purchase Now</a>
                                        <a href="#" className="btn btn--lg cart-btn btn-secondary">
                                            <span className="icon-basket"></span> Add To Cart</a>
                                    </div>
                                </div>


                                <div className="sidebar-card card--product-infos">
                                    <div className="card-title">
                                        <h4>Product Information</h4>
                                    </div>

                                    <ul className="infos">
                                        <li>
                                            <p className="data-label">Released</p>
                                            <p className="info">16 June 2015</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Updated</p>
                                            <p className="info">28 July 2016 </p>
                                        </li>
                                        <li>
                                            <p className="data-label">Version</p>
                                            <p className="info">1.2</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Category</p>
                                            <p className="info">Corporate & Business</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Layout</p>
                                            <p className="info">Responsive</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Retina Ready</p>
                                            <p className="info">No</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Files Included</p>
                                            <p className="info">Html, CSS, JavaScript</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Browser</p>
                                            <p className="info">IE10, IE11, Firefox, Safari, Opera, Chrome5</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Bootstrap</p>
                                            <p className="info">Bootstrap 4</p>
                                        </li>
                                        <li>
                                            <p className="data-label">Tags</p>
                                            <p className="info">
                                                <a href="#">business</a>,
                                                <a href="#">template</a>,
                                                <a href="#">onepage</a>,
                                                <a href="#">creative</a>,
                                                <a href="#">responsive</a>,
                                                <a href="#">corporate</a>,
                                                <a href="#">Bootstrap3</a>,
                                                <a href="#">html5</a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>


                                <div className="sidebar-card social-share-card">
                                    <p>Social Share:</p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="author-card sidebar-card">
                                    <div className="card-title">
                                        <h4>Product Information</h4>
                                    </div>

                                    <div className="author-infos">
                                        <div className="author-top">
                                            <div className="author_avatar">
                                                <img src="img/author-avatar.jpg" alt="Presenting the broken author avatar :D" />
                                            </div>

                                            <div className="author">
                                                <h5>AazzTech</h5>
                                                <p>Joined: 08 April 2016</p>
                                            </div>
                                        </div>

                                        <div className="social social--color--filled">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-dribbble"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-linkedin"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="author-btn">
                                            <a href="#" className="btn btn--sm btn-primary">View Profile</a>
                                            <a href="#" className="btn btn--sm btn-secondary">Send Message</a>
                                        </div>
                                    </div>
                                </div>

                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <section className="more_product_area p-top-105 p-bottom-75">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>More Items by <span>Aazztech</span>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="product-single latest-single">

                                <div className="product-thumb">

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
                        <div className="col-lg-4 col-md-6">








                            <div className="product-single latest-single">

                                <div className="product-thumb">

                                    <figure>
                                        <img src="img/product2.png" alt="" className="img-fluid" />
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
                                            <img className="auth-img" src="img/auth-img2.png" alt="author image" />
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
                                        <img src="img/product3.png" alt="" className="img-fluid" />
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
                                            <img className="auth-img" src="img/auth-img3.png" alt="author image" />
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

                    </div>
                </div>
            </section>


        </>
    )
}
