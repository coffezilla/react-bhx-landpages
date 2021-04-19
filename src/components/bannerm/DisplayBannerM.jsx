import React from 'react';
import '../bannerm/DisplayBannerM.scss';

function DisplayBannerM() {
  return <>
            <div className="display-banner-m p-3 p-md-0 pb-md-2 pb-lg-5">
                <div className="container wrapper-banner mb-1 mb-md-2 mb-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-7 col-lg-6 p-3 p-md-5">
                            <img src="/images/logo-microsoft.png" className="img-fluid mb-3 mb-md-5" alt=""/>
                            <h1 className="mb-3">Landing Page</h1>
                            <h2>WordPress Theme for Single Product</h2>
                            <p className="my-2 my-md-4">Debutant - WordPress Theme for all type of websites! It has more than <strong>40+ Complete Elementor demos that can simply</strong> import and edit on Elementor.</p>

                            <div className="row align-items-center ">
                                <div className="col-auto">
                                    <img src="/images/icon-user.png" alt=""/>
                                </div>
                                <div className="col p-0"><strong>Discover Debutant</strong></div>
                            </div>

                            <ul className="wrapper-list--legend mt-4">
                                <li>Full Elementor compatibility</li>
                                <li>Full Elementor compatibility</li>
                            </ul>

                        </div>
                        <div className="col-12 col-md wrapper-banner--cover"  style={{backgroundImage: `url('/images/background-vertical.jpg')`}}>

                        </div>


                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerM;