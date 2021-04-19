import React from 'react';
import '../banneri/DisplayBannerI.scss';

function DisplayBannerI() {
  return <>
            <div className="display-banner-i pt-0 pt-md-2 pt-lg-5">
                <div className="container-fluid container-md">
                    <div className="row justify-content-center align-items-center ">

                        <div className="col-12 py-3 py-md-0 col-md-5 m-auto text-center">
                            <img src="/images/logo-netflix.png" className="img-fluid col-6 col-md-12" alt="Huge Logo"/>
                            <h1 className="my-2 my-md-5">The best way to create and share a grocery  shopping list and organize your recipes.</h1>

                            <div className="row mt-4 mt-md-5">
                                <div className="col-12">
                                    <button className="bt-download mr-3"><img src="/images/bt-google.png" alt="Button Download Google" /></button>
                                    <button className="bt-download mr-3"><img src="/images/bt-apple.png" alt="Button Download Apple" /></button>
                                </div>
                            </div>

                            <p className="py-2 py-md-4 ">Now Available on <strong>Android</strong> and <strong>iPhone</strong></p>
                        </div>

                        <div className="col-auto m-auto">
                            <img src="/images/iphone-portrait-cut.png" className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerI;