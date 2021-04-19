import React, { useEffect } from 'react';

import '../pages/BannerX.scss';
import MainBannerPrimaryX from '../components/bannerx/MainBannerPrimaryX';

function BannerX() {

  useEffect(() => {
      document.title = 'Template - Banner X';
  })

  return (
    <>
      <MainBannerPrimaryX />
    </>
  );
}

export default BannerX;