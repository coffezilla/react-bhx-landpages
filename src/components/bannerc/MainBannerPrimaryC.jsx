import React from 'react';
import '../bannerc/MainBannerPrimaryC.scss';
import NavigationC from '../bannerc/NavigationC';
import DisplayBannerC from '../bannerc/DisplayBannerC.jsx';

function MainBannerPrimaryC() {
  return <>

            <div className="component-primary-banner-c">

                <NavigationC />
                <DisplayBannerC />

            </div>

        </>;
}

export default MainBannerPrimaryC;