import React from 'react';
import '../bannert/DisplayBannerT.scss';

function DisplayBannerT() {
  return <>
            <div className="display-banner-t py-0 py-md-0 py-xl-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center py-0 py-md-2 py-xl-5">

                        <div className="col-auto mx-auto py-3 py-md-0 order-2 order-md-1">
                            <img src="/images/iphone-portrait.png" className="img-fluid" alt="Logo" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 mx-auto order-1 order-md-2 py-3 py-md-0">
                            <h1 className="my-1">Don’t Waste Your Ad Spend on Slow Web Pages</h1>
                            <p className="my-3 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>

                            <div className="row m-0">
                                <a href="/" className="col-auto bt-secundary--banner mr-0 mr-md-4">SEE A DEMO</a>
                                <a href="/" className="col-auto bt-primary--banner">TRY IT NOW FOR FREE</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerT;