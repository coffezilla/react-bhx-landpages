import React, { useEffect } from 'react';

import '../pages/BannerAF.scss';
import MainBannerPrimaryAF from '../components/banneraf/MainBannerPrimaryAF';

function BannerAF() {

  useEffect(() => {
      document.title = 'Template - Banner AF';
  })

  return (
    <>
      <MainBannerPrimaryAF />
    </>
  );
}

export default BannerAF;