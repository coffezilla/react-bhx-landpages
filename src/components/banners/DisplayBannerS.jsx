import React from 'react';
import '../banners/DisplayBannerS.scss';

function DisplayBannerS() {
  return <>
            <div className="display-banner-s py-0 py-md-2 py-lg-5"> 
                <div className="container">
                    <div className="row justify-content-center align-items-center py-0 py-md-3 py-lg-5">

                        <div className="col-12 col-md-6 mx-auto py-3 py-md-0">
                            <h1 className="my-1">Don’t Waste Your Ad Spend on Slow Web Pages</h1>
                            <p className="my-3 my-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui, sit ipsam quo soluta voluptates ratione quam, at magnam deserunt repellat impedit dolores officia.</p>
                            <p><span>CELEBRE O DIA DO ROCK EM NOSSA COMPANHIA, BASTA SE INSCREVER NO FORMULÁRIO ABAIXO.</span></p>
                        </div>

                        <div className="col-auto mx-auto  py-3 py-md-0">
                            <img src="/images/iphone-portrait.png" className="img-fluid" alt="Logo" />
                        </div>

                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerS;