import React, { useEffect } from 'react';

import '../pages/BannerAD.scss';
import MainBannerPrimaryAD from '../components/bannerad/MainBannerPrimaryAD';

function BannerAD() {

  useEffect(() => {
      document.title = 'Template - Banner AD';
  })

  return (
    <>
      <MainBannerPrimaryAD />
    </>
  );
}

export default BannerAD;