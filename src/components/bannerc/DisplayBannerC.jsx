import React from 'react';
import '../bannerc/DisplayBannerC.scss';
import tableMockup from '../../images/tablet-mockup.png';

function DisplayBannerC() {
  return <>
            <div className="display-banner-c py-0 py-xl-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-12 col-md-7 my-3 my-md-0">
                            <h1 className="my-2 text-center">You deserve more beautiful lists</h1>
                            <p className="my-0 my-md-4 text-center">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply. Get your tasks under lovely control.</p>

                            <div className="row text-center my-4 m-md-0">
                                <div className="col-12">
                                    <button className="bt-banner-primary mx-2">Watch Video</button>
                                    <span> OR </span>
                                    <button className="bt-banner-primary mx-2">Learn More</button>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="row justify-content-center align-items-center py-3 py-md-5">
                        <div className="col-auto">
                            <img src={tableMockup} className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerC;