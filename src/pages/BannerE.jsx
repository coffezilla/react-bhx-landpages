import React, { useEffect } from 'react';

import '../pages/BannerE.scss';
import MainBannerPrimaryE from '../components/bannere/MainBannerPrimaryE';

function BannerE() {

  useEffect(() => {
      document.title = 'Template - Banner E';
  })

  return (
    <>
      <MainBannerPrimaryE />
    </>
  );
}

export default BannerE;