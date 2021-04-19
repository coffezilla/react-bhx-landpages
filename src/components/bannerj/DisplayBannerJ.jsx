import React from 'react';
import '../bannerj/DisplayBannerJ.scss';

function DisplayBannerJ() {
  return <>
            <div className="display-banner-j py-0 py-md-2 py-lg-5">
                <div className="container-fluid container-md">
                    <div className="row justify-content-center py-3 py-md-2 py-lg-5">

                        <div className="col-12 col-md-6 col-lg-7 text-center text-md-left">
                            <h1 className="my-1">Make cool Landing pages with Apolo</h1>
                            <p className="my-0 my-md-4 pr-0 pr-md-5">Block invasive data trackers. Eliminate redirecting mobile ads. Protect your network traffic with strong encryption. Enter your e-mail address below to participate in our upcoming beta.</p>

                            <div className="buttons-list row my-3 mt-md-5">
                                <div className="col-12">
                                    <button className="bt-download mr-3"><img src="/images/bt-google.png" alt="Button Download Google" /></button>
                                    <button className="bt-download mr-0 mr-md-3"><img src="/images/bt-apple.png" alt="Button Download Apple" /></button>
                                </div>
                            </div>
    
                            <p className="my-4"><em>* Available on <strong>iPhone</strong>, <strong>iPad</strong> and all <strong>Android</strong> devices</em></p>
                        </div>


                        <div className="col-auto mx-auto">
                            <img src="/images/iphone-portrait.png" className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerJ;