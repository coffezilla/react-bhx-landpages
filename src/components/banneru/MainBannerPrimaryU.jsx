import React from 'react';
import '../banneru/MainBannerPrimaryU.scss';
import NavigationU from '../banneru/NavigationU';
import DisplayBannerU from '../banneru/DisplayBannerU.jsx';

function MainBannerPrimaryU() {
  return <>

            <div className="component-primary-banner-u">

                <NavigationU />
                <DisplayBannerU />

            </div>

        </>;
}

export default MainBannerPrimaryU;