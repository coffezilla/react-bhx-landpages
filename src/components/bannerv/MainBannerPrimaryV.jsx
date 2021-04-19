import React from 'react';
import '../bannerv/MainBannerPrimaryV.scss';
import NavigationV from '../bannerv/NavigationV';
import DisplayBannerV from '../bannerv/DisplayBannerV.jsx';

function MainBannerPrimaryV() {
  return <>

            <div className="component-primary-banner-v">

                <NavigationV />
                <DisplayBannerV />

            </div>

        </>;
}

export default MainBannerPrimaryV;