import React, { useEffect } from 'react';

import '../pages/BannerI.scss';
import MainBannerPrimaryI from '../components/banneri/MainBannerPrimaryI';

function BannerI() {

  useEffect(() => {
      document.title = 'Template - Banner I';
  })

  return (
    <>
      <MainBannerPrimaryI />
    </>
  );
}

export default BannerI;