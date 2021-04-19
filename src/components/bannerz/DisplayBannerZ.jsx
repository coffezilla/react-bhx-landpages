import React from 'react';
import '../bannerz/DisplayBannerZ.scss';

function DisplayBannerZ() {
  return <>

            <div className="display-banner-z py-0 py-md-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-12 col-md-6 py-3 py-md-0">
                            <h1>LANDING PAGES</h1>
                            <h2 className="my-1">Create post-click landing page experiences at scale</h2>
                            <p className="my-3 my-md-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply. Get your tasks under lovely control.</p>
                            <div className="row mt-0 mt-md-5 text-center txt-md-left">
                                <div className="col-12"> 
                                    <button className="bt-primary--banner mr-3">BOOK A DEMO</button>
                                    <button className="bt-secondary--banner mr-0 mr-md-3">START FOR FREE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <img src="/images/tablet.png" className="img-fluid" alt="Display" />
                        </div>

                    </div>

                
                </div>
            </div>
        </>;
}

export default DisplayBannerZ;