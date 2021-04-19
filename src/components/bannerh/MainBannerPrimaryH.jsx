import React from 'react';
import '../bannerh/MainBannerPrimaryH.scss';
import NavigationH from '../bannerh/NavigationH';
import DisplayBannerH from '../bannerh/DisplayBannerH.jsx';

function MainBannerPrimaryH() {
  return <>

            <div className="component-primary-banner-h">

                <NavigationH />
                <DisplayBannerH />

            </div>

        </>;
}

export default MainBannerPrimaryH;