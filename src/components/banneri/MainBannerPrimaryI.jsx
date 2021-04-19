import React from 'react';
import '../banneri/MainBannerPrimaryI.scss';
import NavigationI from '../banneri/NavigationI';
import DisplayBannerI from '../banneri/DisplayBannerI.jsx';

function MainBannerPrimaryI() {
  return <>

            <div className="component-primary-banner-i">

                <NavigationI />
                <DisplayBannerI />

            </div>

        </>;
}

export default MainBannerPrimaryI;