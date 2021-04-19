import React from 'react';
import '../bannerad/MainBannerPrimaryAD.scss';
import NavigationAD from '../bannerad/NavigationAD';
import DisplayBannerAD from '../bannerad/DisplayBannerAD.jsx';

function MainBannerPrimaryAD() {
  return <>

            <div className="component-primary-banner-ad">

                <NavigationAD />
                <DisplayBannerAD />

            </div>

        </>;
}

export default MainBannerPrimaryAD;