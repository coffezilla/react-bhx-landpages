import React, { useEffect } from 'react';

import '../pages/BannerG.scss';
import MainBannerPrimaryG from '../components/bannerg/MainBannerPrimaryG';

function BannerG() {

  useEffect(() => {
      document.title = 'Template - Banner G';
  })

  return (
    <>
      <MainBannerPrimaryG />
    </>
  );
}

export default BannerG;