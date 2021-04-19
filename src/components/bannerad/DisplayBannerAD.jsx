import React from 'react';
import '../bannerad/DisplayBannerAD.scss';

function DisplayBannerAD() {
  return <>

            <div className="display-banner-ad py-0 py-xl-5 overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-12 col-md-6 py-3 py-md-0">
                            <h1>Landing Pages</h1>
                            <p className="my-4">Track and analyze all your data in one central location.Track and analyze all your data in one central location.</p>
                            <div className="row mt-0 mt-md-5">
                                <div className="col-12">
                                    <button className="bt-primary mr-0 mr-md-3">Start Free Trial</button>
                                </div>
                            </div>
                            <p className="my-0 my-md-3"><span>See Ontraport in Action</span></p> 
                        </div>
                        <div className="col-12 col-md-5 py-3 py-md-0">
                            <img src="/images/tablet.png" alt="Display" />
                        </div>

                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerAD;