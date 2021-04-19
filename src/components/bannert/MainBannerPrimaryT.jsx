import React from 'react';
import '../bannert/MainBannerPrimaryT.scss';
import NavigationT from '../bannert/NavigationT';
import DisplayBannerT from '../bannert/DisplayBannerT.jsx';

function MainBannerPrimaryT() {
  return <>

            <div className="component-primary-banner-t">

                <NavigationT />
                <DisplayBannerT />

            </div>

        </>;
}

export default MainBannerPrimaryT;