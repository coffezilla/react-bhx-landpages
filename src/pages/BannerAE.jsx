import React, { useEffect } from 'react';

import '../pages/BannerAE.scss';
import MainBannerPrimaryAE from '../components/bannerae/MainBannerPrimaryAE';

function BannerAE() {

  useEffect(() => {
      document.title = 'Template - Banner AE';
  })

  return (
    <>
      <MainBannerPrimaryAE />
    </>
  );
}

export default BannerAE;