import React from 'react';
import '../bannern/MainBannerPrimaryN.scss';
import NavigationN from '../bannern/NavigationN';
import DisplayBannerN from '../bannern/DisplayBannerN.jsx';

function MainBannerPrimaryN() {
  return <>

            <div className="component-primary-banner-n">

                <NavigationN />
                <DisplayBannerN />

            </div>

        </>;
}

export default MainBannerPrimaryN;