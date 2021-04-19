import React from 'react';
import '../bannerl/MainBannerPrimaryL.scss';
import NavigationL from '../bannerl/NavigationL';
import DisplayBannerL from '../bannerl/DisplayBannerL.jsx';

function MainBannerPrimaryL() {
  return <>

            <div className="component-primary-banner-l">

                <NavigationL />
                <DisplayBannerL />

            </div>

        </>;
}

export default MainBannerPrimaryL;