import React from 'react';
import '../bannere/DisplayBannerE.scss';
 

function DisplayBannerE() {
  return <>
            <div className="display-banner-e py-0 py-xl-5">
                <div className="container">
                    <div className="row justify-content-between align-items-center py-0 py-md-5">

                        <div className="col-12 col-md-6 py-4 pb-md-3 pb-md-5 py-md-5 pr-md-5 text-center text-md-left">

                            <h1 className="my-1">Your deserve more beautiful lists</h1>
                            <p className="my-1 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>

                            <div className="row my-1 mt-md-5 my-4 my-md-0">
                                <div className="col-12">
                                    <button className="bt-primary mr-md-3">Our Latest Project</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 mx-auto pb-4 pb-md-0">
                            <form action="/" className="form-signup--banner p-4 p-md-5">
                                <h2>Get Started</h2>
                                <p className="my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quod, tenetur minima mollitia impedit assumenda atque cupiditate facilis eaque sed?</p>
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Your Email"/>
                                <input type="tel" placeholder="Your Phone"/>
                                <button className="my-2">Sign Up Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerE;