import React, { useEffect } from 'react';

import '../pages/BannerT.scss';
import MainBannerPrimaryT from '../components/bannert/MainBannerPrimaryT';

function BannerT() {

  useEffect(() => {
      document.title = 'Template - Banner T';
  })

  return (
    <>
      <MainBannerPrimaryT />
    </>
  );
}

export default BannerT;