import React, { useEffect } from 'react';

import '../pages/BannerS.scss';
import MainBannerPrimaryS from '../components/banners/MainBannerPrimaryS';

function BannerS() {

  useEffect(() => {
      document.title = 'Template - Banner S';
  })

  return (
    <>
      <MainBannerPrimaryS />
    </>
  );
}

export default BannerS;