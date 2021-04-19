import React from 'react';
import '../bannerac/DisplayBannerAC.scss';

function DisplayBannerAC() {
  return <>

            <div className="display-banner-ac py-0 py-lg-5 overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-between my-0 my-md-4">

                        <div className="col-12 col-md-6 py-3 py-md-0">
                            <h1 className="my-1"><span>Automate</span> email marketing your way</h1>
                            <p className="my-3 my-md-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply. Get your tasks under lovely control.</p>
                            <div className="row mt-0 mt-md-5">
                                <div className="col-12">
                                    <button className="bt-primary mr-0 mr-md-3">BOOK A DEMO</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 py-3 py-md-0">
                            <img src="/images/tablet.png" alt="Display" />
                        </div>

                    </div>

                
                </div>
            </div>
        </>;
}

export default DisplayBannerAC;