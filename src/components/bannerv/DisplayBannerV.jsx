import React from 'react';
import '../bannerv/DisplayBannerV.scss';

function DisplayBannerV() {
  return <>
            <div className="display-banner-v">
                <div className="container">
                    <div className="row justify-content-center align-items-center py-0 py-lg-2 py-xl-5">
                        <div className="col-12 col-md-6 col-lg-5 py-3 py-md-0">
                            <h1 className="my-1">Your deserve more beautiful lists</h1>
                            <p className="my-3 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>

                            <div className="row my-3 mt-md-5">
                                <div className="col-12 text-center text-md-left">
                                    <button className="bt-download mr-0 mr-md-3"><img src="/images/bt-google.png" className="img-fluid" alt="Button Download Google" /></button>
                                    <button className="bt-download mr-0 mr-md-3"><img src="/images/bt-apple.png" className="img-fluid" alt="Button Download Apple" /></button>
                                </div>
                            </div>

                            <p className="my-2 my-md-4  text-center text-md-left"><span>Now on Android, iPhone & iPad</span></p>
                        </div>

                        <div className="col-auto mx-auto my-3 my-md-0">
                            <img src="/images/iphone-portrait.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerV;