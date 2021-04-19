import React from 'react';
import '../bannerae/DisplayBannerAE.scss';

function DisplayBannerAE() {
  return <>
            <div className="display-banner-ae py-0 py-xl-5">
                <div className="container">
                    <div className="row justify-content-center py-0 py-md-3 py-xl-5">
                        <div className="col-12 col-md-12 col-lg-7 py-3 py-md-0">
                            <h1 className="my-1">Where works <span>*</span> happens</h1>
                            <p className="my-3 my-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>

                            <form action="/" className="form-banner-signup row m-0">
                                <input className="col-7 mr-2" placeholder="Your email" type="email"/>
                                <button className="col-auto">Get Started</button>
                            </form>

                            <p><span>Already joined a Slack team? <a href="/">Sign in</a></span></p>
                        </div>

                        <div className="col-auto py-3 py-md-0">
                            <img src="/images/iphone-portrait.png" className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerAE;