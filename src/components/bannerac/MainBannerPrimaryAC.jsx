import React from 'react';
import '../bannerac/MainBannerPrimaryAC.scss';
import NavigationAC from '../bannerac/NavigationAC';
import DisplayBannerAC from '../bannerac/DisplayBannerAC.jsx';

function MainBannerPrimaryAC() {
  return <>

            <div className="component-primary-banner-ac">

                <NavigationAC />
                <DisplayBannerAC />

            </div>

        </>;
}

export default MainBannerPrimaryAC;