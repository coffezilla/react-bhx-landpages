import React from 'react';
import '../bannerab/MainBannerPrimaryAB.scss';
import NavigationAB from '../bannerab/NavigationAB';
import DisplayBannerAB from '../bannerab/DisplayBannerAB.jsx';

function MainBannerPrimaryAB() {
  return <>

            <div className="component-primary-banner-ab">

                <NavigationAB />
                <DisplayBannerAB />

            </div>

        </>;
}

export default MainBannerPrimaryAB;