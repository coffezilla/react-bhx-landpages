import React from 'react';
import '../bannerp/MainBannerPrimaryP.scss';
import NavigationP from '../bannerp/NavigationP';
import DisplayBannerP from '../bannerp/DisplayBannerP.jsx';

function MainBannerPrimaryP() {
  return <>

            <div className="component-primary-banner-p">

                <NavigationP />
                <DisplayBannerP />

            </div>

        </>;
}

export default MainBannerPrimaryP;