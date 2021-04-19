import React from 'react';
import '../bannerp/DisplayBannerP.scss';

function DisplayBannerP() {
  return <>
            <div className="display-banner-p py-0 py-lg-2 py-xl-5">
                <div className="container">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-12 col-md-6 py-3 py-md-0">
                            <h1 className="mb-4">Great Marketing Makes The Customer Feel Smart.</h1>
                            <p className="my-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.</p>
                            <button className="bt-primary">LEARN MORE</button>
                        </div>

                        <div className="col-auto mx-auto my-3 my-md-0">
                            <img src="/images/iphone-portrait.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerP;