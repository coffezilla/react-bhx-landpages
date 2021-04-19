import React from 'react';
import '../bannerz/MainBannerPrimaryZ.scss';
import NavigationZ from '../bannerz/NavigationZ';
import DisplayBannerZ from '../bannerz/DisplayBannerZ.jsx';

function MainBannerPrimaryZ() {
  return <>

            <div className="component-primary-banner-z">

                <NavigationZ />
                <DisplayBannerZ />

            </div>

        </>;
}

export default MainBannerPrimaryZ;