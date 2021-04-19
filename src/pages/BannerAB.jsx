import React, { useEffect } from 'react';

import MainBannerPrimaryAB from '../components/bannerab/MainBannerPrimaryAB';
import '../pages/BannerAB.scss';

function BannerAB() {

  useEffect(() => {
      document.title = 'Template - Banner AB';
  })

  return (
    <>
      <MainBannerPrimaryAB />
    </>
  );
}

export default BannerAB;