
import React from 'react'

function ErrorPage() {
  return (
    <>
        <section className="four_o_four_area section--padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <img src="img/404.png" alt="404 page"/>
                    <div className="not_found">
                        <h2>Oops! Page Not Found</h2>
                        <a href="index.html" className="btn btn--md btn-primary">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default ErrorPage