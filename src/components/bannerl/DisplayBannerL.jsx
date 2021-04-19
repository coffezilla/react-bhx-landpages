import React from 'react';
import '../bannerl/DisplayBannerL.scss';

function DisplayBannerL() {
  return <>
            <div className="display-banner-l py-0 py-md-0 py-lg-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 py-3 py-md-2 py-lg-5 text-center text-md-left">
                            <h1 className="my-1">Download your best app landing</h1>
                            <p className="my-3 my-md-4">Lorem ipsum dolor sit amet, consetetur sadpscing eili, sed dmo nymy eirmod.</p>

                            <div className="row mt-2">
                                <div className="col-12">
                                    <button className="bt-download  m-1 m-lg-0 mr-0 mr-lg-3">Google Play (Android)</button>
                                    <button className="bt-download  m-1 m-lg-0 mr-0 mr-lg-3">App Store (iOS)</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto mx-auto  my-0 my-sm-5 my-xl-3">
                            <img src="/images/iphone-portrait.png" className="img-fluid" alt="Logo" />
                        </div>

                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerL;