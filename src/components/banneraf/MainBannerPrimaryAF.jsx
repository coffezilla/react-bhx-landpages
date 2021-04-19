import React from 'react';
import '../banneraf/MainBannerPrimaryAF.scss';
import NavigationAF from '../banneraf/NavigationAF';
import DisplayBannerAF from '../banneraf/DisplayBannerAF.jsx';

function MainBannerPrimaryAF() {
  return <>

            <div className="component-primary-banner-af">

                <NavigationAF />
                <DisplayBannerAF />

            </div>

        </>;
}

export default MainBannerPrimaryAF;