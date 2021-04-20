import React from 'react';
import '../bannera/DisplayBannerA.scss';
import btGoogle from '../../images/bt-google.png';
import btApple from '../../images/bt-apple.png';
import smartphoneMockup from '../../images/iphone-mockup.png';

function DisplayBannerA() {
  return <>
            <div className="display-banner-a py-xl-2">
                <div className="container-fluid container-md">
                    <div className="row justify-content-center align-items-center py-md-2 py-lg-5">
                        <div className="col-12 col-md-4 col-xl-3 mx-auto order-2 order-md-1 text-center text-md-left">
                            <img src={smartphoneMockup} className="img-fluid" alt="Logo" />
                        </div>

                        <div className="col-12 col-md-6 order-1 order-md-2 my-4 py-md-5 my-0 text-center text-md-left">
                            <h2>Marketplace for</h2>
                            <h1 className="my-2">você merece mais deserve more beautiful lists</h1>
                            <p className="my-2 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>

                            <div className="row my-3 mt-md-5">
                                <div className="col-12 text-center text-md-left">
                                    <button className="bt-download mr-0 mr-md-3"><img src={btGoogle} className="img-fluid" alt="Button Download Google" /></button>
                                    <button className="bt-download mr-0 mr-md-3"><img src={btApple} className="img-fluid" alt="Button Download Apple" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerA;