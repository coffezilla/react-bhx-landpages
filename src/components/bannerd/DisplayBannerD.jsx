import React from 'react';
import '../bannerd/DisplayBannerD.scss';
import imgTablet from '../../images/tablet-mockup.png';

function DisplayBannerD() {
  return <>

            <div className="display-banner-d py-0 py-md-2 py-xl-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-8 col-md-6 my-4 my-md-0">
                            <h1 className="my-1">You deserve more beautiful lists</h1>
                            <p className="my-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply. Get your tasks under lovely control.</p>
                            <div className="row mt-5">
                                <div className="col-12">
                                    <button className="bt-banner-secondary m-1 mr-md-3">BOOK A DEMO</button>
                                    <button className="bt-banner-primary m-1 mr-md-3">START FOR FREE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-5 my-4 my-sm-0">
                            <img src={imgTablet} alt="Display" className="cover--banner"/>
                        </div>

                    </div>

                
                </div>
            </div>
        </>;
}

export default DisplayBannerD;