import React from 'react';
import '../bannerf/DisplayBannerF.scss';

function DisplayBannerF() {
  return <>
            <div className="display-banner-f pt-0 pt-md-2 pt-lg-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-12 col-md-10 py-2 py-md-0">
                            <h1 className="my-1 text-center">You deserve more beautiful lists</h1>
                            <h2 className="my-1 my-md-4 text-center">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos managed simply.</h2>

                            <div className="row text-center justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <form action="/" className="form-signup--banner p-3 row justify-content-center">
                                        <input className="my-1 mx-md-2 col-12 col-md-5" placeholder="Insira seu email" type="text"/>
                                        <button className="my-1 mx-md-2 col-12 col-md-5">Começar a avaliação gratuita</button>
                                    </form>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-12 col-md-9">
                                    <p className="my-1 my-md-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque sit placeat nobis vitae sequi commodi nam sapiente asperiores hic!</p>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                    <div className="row justify-content-center align-items-center py-2">
                        <div className="col-auto">
                            <img src="/images/tablet.png" className="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerF;