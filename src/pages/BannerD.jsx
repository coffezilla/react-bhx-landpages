import React, { useEffect } from 'react';

import '../pages/BannerD.scss';
import MainBannerPrimaryD from '../components/bannerd/MainBannerPrimaryD';

function BannerD() {

  useEffect(() => {
      document.title = 'Template - Banner D';
  })

  return (
    <>
      <MainBannerPrimaryD />
    </>
  );
}

export default BannerD;