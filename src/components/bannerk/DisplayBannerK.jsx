import React from 'react';
import '../bannerk/DisplayBannerK.scss';

function DisplayBannerK() {
  return <>
            <div className="display-banner-k">
                <div className="wrapper-header--banner">
                    <div className="container-fluid container-md py-3 py-md-2 py-lg-5">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-6 m-auto text-center">
                                <h1 className="my-1">Make cool Landing pages with Apolo</h1>
                                <p className="my-2 my-md-4">Astro is better way to promote your startup mobile app.</p>

                                <div className="row my-3 mt-md-3">
                                    <div className="col-12">
                                        <button className="bt-download mr-3"><img src="/images/bt-google.png" alt="Button Download Google" /></button>
                                        <button className="bt-download mr"><img src="/images/bt-apple.png" alt="Button Download Apple" /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="wrapper-footer--banner">
                    <div className="container">
                        <div className="row py-0 py-md-5">
                            <div className="col-12 col-md-4 text-left text-md-right order-2 order-md-1">
                                <ul className="wrapper-list--features">
                                    <li>
                                        <img src="/images/icon-feature.png" alt=""/>
                                        <h3>GREAT INTERFACE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ratione, nostrum sint maiores libero minima tempore fugit iste eaque!</p>
                                    </li>
                                    <li>
                                        <img src="/images/icon-feature.png" alt=""/>
                                        <h3>GREAT INTERFACE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ratione, nostrum sint maiores libero minima tempore fugit iste eaque!</p>
                                    </li>
                                    <li>
                                        <img src="/images/icon-feature.png" alt=""/>
                                        <h3>GREAT INTERFACE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ratione, nostrum sint maiores libero minima tempore fugit iste eaque!</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center col my-4 my-md-0 mx-auto order-1 order-md-2">
                                <img src="/images/iphone-portrait.png" className="spotlight img-fluid" alt="Logo" />
                            </div>
                            <div className="col-12 col-md-4 text-left order-2 order-md-3">
                                <ul className="wrapper-list--features">
                                    <li>
                                        <img src="/images/icon-feature.png" alt=""/>
                                        <h3>GREAT INTERFACE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ratione, nostrum sint maiores libero minima tempore fugit iste eaque!</p>
                                    </li>
                                    <li>
                                        <img src="/images/icon-feature.png" alt=""/>
                                        <h3>GREAT INTERFACE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ratione, nostrum sint maiores libero minima tempore fugit iste eaque!</p>
                                    </li>
                                    <li>
                                        <img src="/images/icon-feature.png" alt=""/>
                                        <h3>GREAT INTERFACE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ratione, nostrum sint maiores libero minima tempore fugit iste eaque!</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerK;