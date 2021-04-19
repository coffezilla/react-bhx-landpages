import React from 'react';
import '../banneraa/DisplayBannerAA.scss';

function DisplayBannerAA() {
  return <>

            <div className="display-banner-aa py-0 py-md-2 py-xl-5 overflow-hidden">
                <div className="container ">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-12 col-md-6 py-3 py-md-0">
                            <h1 className="my-1">Create post-click landing page experiences at scale</h1>
                            <p className="my-3 my-md-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply. Get your tasks under lovely control.</p>
                            <div className="buttons-list row mt-3 mt-md-2 mt-lg-5">
                                <div className="col-12 text-center text-md-left">
                                    <button className="bt-banner-primary mr-3">START FOR FREE</button>
                                    <button className="bt-banner-secondary mr-0 mr-md-3">BOOK A DEMO</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 my-3 my-md-0">
                            <img src="/images/tablet.png" alt="Display" />
                        </div>
                    </div>

                
                </div>
            </div>
        </>;
}

export default DisplayBannerAA;