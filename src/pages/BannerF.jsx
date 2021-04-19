import React, { useEffect } from 'react';

import MainBannerPrimaryF from '../components/bannerf/MainBannerPrimaryF';
import '../pages/BannerF.scss';

function BannerF() {

  useEffect(() => {
      document.title = 'Template - Banner F';
  })

  return (
    <>
      <MainBannerPrimaryF />
    </>
  );
}

export default BannerF;