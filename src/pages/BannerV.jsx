import React, { useEffect } from 'react';

import '../pages/BannerV.scss';
import MainBannerPrimaryV from '../components/bannerv/MainBannerPrimaryV';

function BannerV() {

  useEffect(() => {
      document.title = 'Template - Banner V';
  })

  return (
    <>
      <MainBannerPrimaryV />
    </>
  );
}

export default BannerV;