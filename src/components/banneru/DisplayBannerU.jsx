import React from 'react';
import '../banneru/DisplayBannerU.scss';

function DisplayBannerU() {
  return <>
            <div className="display-banner-u ">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-12 col-md-10 pt-3 pt-md-0">
                            <h1 className="my-1 text-center">You deserve more beautiful lists</h1>
                        </div>
                        <div className="col-12 col-md-7">
                            <p className="my-3 my-md-4 text-center">The one and only solution for any kind of mobile app landing needs. Just change the screenshots and texts and you are good to go.</p>
                        </div>
                    
                    </div>  
                    <div className="row justify-content-center align-items-center pt-0 pt-md-5">
                        <div className="col-auto py-3 py-md-0">
                            <img src="/images/iphone-portrait-cut.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerU;