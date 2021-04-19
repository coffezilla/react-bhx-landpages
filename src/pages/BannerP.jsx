import React, { useEffect } from 'react';

import '../pages/BannerP.scss';
import MainBannerPrimaryP from '../components/bannerp/MainBannerPrimaryP';

function BannerP() {

  useEffect(() => {
      document.title = 'Template - Banner P';
  })

  return (
    <>
      <MainBannerPrimaryP />
    </>
  );
}

export default BannerP;