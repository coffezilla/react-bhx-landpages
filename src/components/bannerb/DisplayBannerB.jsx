import React from 'react';
import '../bannerb/DisplayBannerB.scss';
import btGoogle from '../../images/bt-google.png';
import btApple from '../../images/bt-apple.png';
import smartphoneMockup from '../../images/iphone-mockup.png';


function DisplayBannerB() {
  return <>
            <div className="display-banner-b py-0 py-md-5 py-xl-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center py-lg-0 py-xl-5">
                        <div className="col-12 col-md-5 col-lg-4 col-xl-5 mx-auto my-3 my-md-0 order-2 order-md-1 text-center text-md-left">
                            <img src={smartphoneMockup} className="img-fluid" alt="Logo" />
                        </div>

                        <div className="col-12 col-md-5 my-3 my-md-5 mx-auto order-1 order-md-2 text-center text-md-left wrapper-display--banner">
                            <h1 className="my-2 my-md-1">You deserve more beautiful lists</h1>
                            <p className="my-1 my-md-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply. Get your tasks under lovely control.</p>

                            <div className="row my-3 mt-md-5 text-center text-md-left">
                                <div className="col-12">
                                    <button className="bt-download mr-3"><img src={btGoogle} alt="Button Download Google" /></button>
                                    <button className="bt-download mr-3 mr-md-0"><img src={btApple} alt="Button Download Apple" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerB;