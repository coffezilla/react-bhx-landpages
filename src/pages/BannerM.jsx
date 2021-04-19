import React, { useEffect } from 'react';

import '../pages/BannerM.scss';
import MainBannerPrimaryM from '../components/bannerm/MainBannerPrimaryM';

function BannerM() {

  useEffect(() => {
      document.title = 'Template - Banner M';
  })

  return (
    <>
      <MainBannerPrimaryM />
    </>
  );
}

export default BannerM;