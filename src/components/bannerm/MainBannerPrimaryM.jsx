import React from 'react';
import '../bannerm/MainBannerPrimaryM.scss';
import NavigationM from '../bannerm/NavigationM';
import DisplayBannerM from '../bannerm/DisplayBannerM.jsx';

function MainBannerPrimaryM() {
  return <>

            <div className="component-primary-banner-m">

                <NavigationM />
                <DisplayBannerM />

            </div>

        </>;
}

export default MainBannerPrimaryM;