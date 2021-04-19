import React from 'react';
import '../bannerae/MainBannerPrimaryAE.scss';
import NavigationAE from '../bannerae/NavigationAE';
import DisplayBannerAE from '../bannerae/DisplayBannerAE.jsx';

function MainBannerPrimaryAE() {
  return <>

            <div className="component-primary-banner-ae">

                <NavigationAE />
                <DisplayBannerAE />

            </div>

        </>;
}

export default MainBannerPrimaryAE;