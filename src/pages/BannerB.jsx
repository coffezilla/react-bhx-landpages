import React, { useEffect } from 'react';

import '../pages/BannerB.scss';
import MainBannerPrimaryB from '../components/bannerb/MainBannerPrimaryB';

function BannerB() {

  useEffect(() => {
      document.title = 'Template - Banner B';
  })

  return (
    <>
      <MainBannerPrimaryB />
    </>
  );
}

export default BannerB;