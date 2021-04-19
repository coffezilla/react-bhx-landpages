import React from 'react';
import '../bannerab/DisplayBannerAB.scss';

function DisplayBannerAB() {
  return <>
            <div className="display-banner-ab pt-0 pt-md-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-12 col-md-10 py-3 py-md-0">
                            <h1 className="my-1 text-center">You deserve more beautiful lists</h1>
                            <p className="my-3 my-md-4 text-center">The one and only solution for any kind of mobile app landing needs. Just change the screenshots and texts and you are good to go.</p>
                        </div>

                    </div>  

                    <div className="text-center mb-0 mb-md-5 mt-0 mt-md-3 py-3 py-md-0">
                        <button className="bt-signup--signup">CLICK TO START DOWNLOAD</button>
                    </div>

                    <div className="row justify-content-center align-items-center my-3 my-md-0">
                        <div className="col-auto">
                            <img src="/images/iphone-portrait-cut.png" className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerAB;