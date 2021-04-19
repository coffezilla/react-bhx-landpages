import React from 'react';
import '../bannerh/DisplayBannerH.scss';

function DisplayBannerH() {
  return <>
            <div className="display-banner-h py-0 py-md-5">
                <div className="container">
                    <div className="row justify-content-between align-items-center p-3 py-xs-5 py-md-5">
                        
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 p-3 p-md-4 wrapper-display--banner">
                            <h1 className="my-1">Earn money as an Airbnb host</h1>
                            <p className="my-2 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>
                            <button>Start Hosting</button>
                        </div>

                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerH;