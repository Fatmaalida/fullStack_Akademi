import React from 'react'

function BlogCard() {
  return (
    <>
      <div className="col-lg-4 col-md-6">

        <div className="single_blog blog--card">
          <figure>
            <img src="img/blog3.jpg" alt="Blog image" />
            <figcaption>
              <div className="blog__content">
                <a href="#" className="blog__title">
                  <h4>Best Related Post Plugin</h4>
                </a>
                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                  the mattis, leo quam aliquet congue.</p>
              </div>
              <div className="blog__meta">
                <div className="date_time">
                  <span className="icon-clock"></span>
                  <p>24 Feb 2017</p>
                </div>
                <div className="comment_view">
                  <p className="comment"><span className="icon-bubble"></span>45</p>
                  <p className="view"><span className="icon-eye"></span>345</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
    </>
  )
}

export default BlogCard