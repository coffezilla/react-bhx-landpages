import React, { useEffect } from 'react';

import '../pages/BannerK.scss';
import MainBannerPrimaryK from '../components/bannerk/MainBannerPrimaryK';

function BannerK() {

  useEffect(() => {
      document.title = 'Template - Banner K';
  })

  return (
    <>
      <MainBannerPrimaryK />
    </>
  );
}

export default BannerK;