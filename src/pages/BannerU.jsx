import React, { useEffect } from 'react';

import MainBannerPrimaryU from '../components/banneru/MainBannerPrimaryU';
import '../pages/BannerU.scss';

function BannerU() {

  useEffect(() => {
      document.title = 'Template - Banner U';
  })

  return (
    <>
      <MainBannerPrimaryU />
    </>
  );
}

export default BannerU;