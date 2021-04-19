import React, { useEffect } from 'react';

import '../pages/BannerL.scss';
import MainBannerPrimaryL from '../components/bannerl/MainBannerPrimaryL';

function BannerL() {

  useEffect(() => {
      document.title = 'Template - Banner L';
  })

  return (
    <>
      <MainBannerPrimaryL />
    </>
  );
}

export default BannerL;