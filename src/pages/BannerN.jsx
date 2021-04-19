import React, { useEffect } from 'react';

import '../pages/BannerN.scss';
import MainBannerPrimaryN from '../components/bannern/MainBannerPrimaryN';

function BannerN() {

  useEffect(() => {
      document.title = 'Template - Banner N';
  })

  return (
    <>
      <MainBannerPrimaryN />
    </>
  );
}

export default BannerN;