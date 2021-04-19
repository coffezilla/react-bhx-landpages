import React, { useEffect } from 'react';

import '../pages/BannerAC.scss';
import MainBannerPrimaryAC from '../components/bannerac/MainBannerPrimaryAC';

function BannerAC() {

  useEffect(() => {
      document.title = 'Template - Banner AC';
  })

  return (
    <>
      <MainBannerPrimaryAC />
    </>
  );
}

export default BannerAC;