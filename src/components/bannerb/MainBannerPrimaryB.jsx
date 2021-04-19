import React from 'react';
import '../bannerb/MainBannerPrimaryB.scss';
import NavigationB from '../bannerb/NavigationB';
import DisplayBannerB from '../bannerb/DisplayBannerB.jsx';

function MainBannerPrimaryB() {
  return <>

            <div className="component-primary-banner-b">

                <NavigationB />
                <DisplayBannerB />

            </div>

        </>;
}

export default MainBannerPrimaryB;