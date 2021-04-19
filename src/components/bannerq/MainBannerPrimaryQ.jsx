import React from 'react';
import '../bannerq/MainBannerPrimaryQ.scss';
import NavigationQ from '../bannerq/NavigationQ';
import DisplayBannerQ from '../bannerq/DisplayBannerQ.jsx';

function MainBannerPrimaryQ() {
  return <>

            <div className="component-primary-banner-q">

                <NavigationQ /> 
                <DisplayBannerQ />

            </div>

        </>;
}

export default MainBannerPrimaryQ;