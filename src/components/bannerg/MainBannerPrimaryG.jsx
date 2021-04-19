import React from 'react';
import '../bannerg/MainBannerPrimaryG.scss';
import NavigationG from '../bannerg/NavigationG';
import DisplayBannerG from '../bannerg/DisplayBannerG.jsx';

function MainBannerPrimaryG() {
  return <>

            <div className="component-primary-banner-g">

                <NavigationG />
                <DisplayBannerG />

            </div>

        </>;
}

export default MainBannerPrimaryG;