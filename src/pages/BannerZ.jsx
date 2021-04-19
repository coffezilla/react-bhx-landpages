import React, { useEffect } from 'react';

import '../pages/BannerZ.scss';
import MainBannerPrimaryZ from '../components/bannerz/MainBannerPrimaryZ';

function BannerZ() {

  useEffect(() => {
      document.title = 'Template - Banner Z';
  })

  return (
    <>
      <MainBannerPrimaryZ />
    </>
  );
}

export default BannerZ;