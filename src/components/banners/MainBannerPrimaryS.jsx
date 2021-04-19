import React from 'react';
import '../banners/MainBannerPrimaryS.scss';
import NavigationS from '../banners/NavigationS';
import DisplayBannerS from '../banners/DisplayBannerS.jsx';

function MainBannerPrimaryS() {
  return <>

            <div className="component-primary-banner-s">

                <NavigationS />
                <DisplayBannerS />

            </div>

        </>;
}

export default MainBannerPrimaryS;