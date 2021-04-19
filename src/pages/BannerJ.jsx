import React, { useEffect } from 'react';

import '../pages/BannerJ.scss';
import MainBannerPrimaryJ from '../components/bannerj/MainBannerPrimaryJ';

function BannerJ() {

  useEffect(() => {
      document.title = 'Template - Banner J';
  })

  return (
    <>
      <MainBannerPrimaryJ />
    </>
  );
}

export default BannerJ;