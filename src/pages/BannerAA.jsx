import React, { useEffect } from 'react';

import '../pages/BannerAA.scss';
import MainBannerPrimaryAA from '../components/banneraa/MainBannerPrimaryAA';

function BannerAA() {

  useEffect(() => {
      document.title = 'Template - Banner Z';
  })

  return (
    <>
      <MainBannerPrimaryAA />
    </>
  );
}

export default BannerAA;