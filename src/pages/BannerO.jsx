import React, { useEffect } from 'react';

import '../pages/BannerO.scss';
import MainBannerPrimaryO from '../components/bannero/MainBannerPrimaryO';

function BannerO() {

  useEffect(() => {
      document.title = 'Template - Banner O';
  })

  return (
    <>
      <MainBannerPrimaryO />
    </>
  );
}

export default BannerO;