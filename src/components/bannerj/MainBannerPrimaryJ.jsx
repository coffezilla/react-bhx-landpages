import React from 'react';
import '../bannerj/MainBannerPrimaryJ.scss';
import NavigationJ from '../bannerj/NavigationJ';
import DisplayBannerJ from '../bannerj/DisplayBannerJ.jsx';

function MainBannerPrimaryJ() {
  return <>

            <div className="component-primary-banner-j">

                <NavigationJ />
                <DisplayBannerJ />

            </div>

        </>;
}

export default MainBannerPrimaryJ;