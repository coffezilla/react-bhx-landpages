import React from 'react';
import '../bannerx/DisplayBannerX.scss';

function DisplayBannerX() {
  return <>
            <div className="display-banner-x">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5 py-3 py-md-5 wrap-banner-header">
                            <img src="/images/logo-google.png" className="img-fluid" alt=""/>

                            <div className="my-3 my-md-5 wrapper-display--banner">
                                <h1 className="my-1">Your deserve more beautiful lists</h1>
                                <p className="my-3 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>
                            </div>

                            <form action="/" className="form-banner-signup row m-0">
                                <input className="col-8" placeholder="Your email" type="email"/>
                                <button className="col">GET STARTED</button>
                            </form>
                            <ul className="my-3 wrapper-list-features justify-content-around row">
                                <li><i className="bi bi-twitter"></i> Free 30 days of</li>
                                <li><i className="bi bi-twitter"></i> Free 30 days of</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 wrap-banner-cover" style={{backgroundImage: `url('/images/background-bloodborne.jpg')`}}></div>

                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerX;