import React, { useEffect } from 'react';

import '../pages/BannerA.scss';
import MainBannerPrimaryA from '../components/bannera/MainBannerPrimaryA';

function BannerA() {

  useEffect(() => {
      document.title = 'Banner A';
  })

  return (
    <>
      <MainBannerPrimaryA />
    </>
  );
}

export default BannerA;