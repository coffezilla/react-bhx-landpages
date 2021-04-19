import React, { useEffect } from 'react';

import '../pages/BannerC.scss';
import MainBannerPrimaryC from '../components/bannerc/MainBannerPrimaryC';

function BannerC() {

  useEffect(() => {
      document.title = 'Template - Banner C';
  })

  return (
    <>
      <MainBannerPrimaryC />
    </>
  );
}

export default BannerC;