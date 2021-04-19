import React, { useEffect } from 'react';

import '../pages/BannerR.scss';
import MainBannerPrimaryR from '../components/bannerr/MainBannerPrimaryR';

function BannerP() {

  useEffect(() => {
      document.title = 'Template - Banner R';
  })

  return (
    <>
      <MainBannerPrimaryR />
    </>
  );
}

export default BannerP;