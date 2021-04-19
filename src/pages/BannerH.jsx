import React, { useEffect } from 'react';

import '../pages/BannerH.scss';
import MainBannerPrimaryH from '../components/bannerh/MainBannerPrimaryH';

function BannerH() {

  useEffect(() => {
      document.title = 'Template - Banner H';
  })

  return (
    <>
      <MainBannerPrimaryH />
    </>
  );
}

export default BannerH;