import React from 'react';
import '../bannera/MainBannerPrimaryA.scss';
import NavigationA from '../bannera/NavigationA';
import DisplayBannerA from '../bannera/DisplayBannerA.jsx';

function MainBannerPrimaryA() {
  return <>

            <div className="component-primary-banner-a">

                <NavigationA />
                <DisplayBannerA />

            </div>

        </>;
}

export default MainBannerPrimaryA;