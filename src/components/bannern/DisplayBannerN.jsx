import React from 'react';
import '../bannern/DisplayBannerN.scss';

function DisplayBannerN() {
  return <>
            <div className="display-banner-n py-1 py-md-5">
                <div className="container-fluid container-lg">
                    <div className="row justify-content-between">

                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <h1 className="my-1">Your deserve more beautiful lists</h1>
                            <p className="my-2 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>
                            <img src="/images/tablet-2.png" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-12 col-md-6 col-lg-5 mx-auto py-4 py-md-0 order-1 order-md-2">
                            <form action="/" className="form-banner--signup p-4 p-md-5">
                                <h2 className="mb-4">Download the eBook, for free!</h2>
                                <p className="my-2">Simply fill out your details below to grab your copy of the eBook.</p>
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Your Email"/>
                                <input type="text" placeholder="Job title"/>
                                <input type="text" placeholder="Company"/>
                                <button className="my-2">Download the eBook</button>
                                <p className="text-center"><span>We don’t spam or give your email address away.</span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerN;