import React, { useEffect } from 'react';

import '../pages/BannerQ.scss';
import MainBannerPrimaryQ from '../components/bannerq/MainBannerPrimaryQ';

function BannerQ() {

  useEffect(() => {
      document.title = 'Template - Banner Q';
  })

  return (
    <>
      <MainBannerPrimaryQ />
    </>
  );
}

export default BannerQ;