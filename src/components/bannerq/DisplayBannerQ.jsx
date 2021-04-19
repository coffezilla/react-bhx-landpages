import React from 'react';
import '../bannerq/DisplayBannerQ.scss';

function DisplayBannerQ() {
  return <>
            <div className="display-banner-q">
                <div className="wrapper-header--banner">
                    <div className="container-fluid container-lg">

                        <div className="row pt-0 pt-md-2 pt-lg-5">
                            <div className="col-12 col-md-7 py-3">
                                <h1>Faça uma demonstração do software e entenda como otimizar seus resultados</h1>
                            </div>
                            <div className="col-12 col-md-4 form-signup--header mx-auto row align-items-center text-center py-3 py-md-5">
                                <div className="col-12">
                                    <h2>Sim, quero falar com um especialista</h2>
                                    <p>Preencha seus dados abaixo. Juntos, vamos planejar o crescimento da sua empresa com toda a força do nosso software</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="wrap-footer--banner">
                    <div className="container-fluid container-lg">
                        <div className="row pb-5">
                            <div className="col-12 col-md-5 pt-3 pt-md-5 mx-auto order-2 order-md-1">
                                <h3>Impulsione o seu crescimento. Cada vez mais!</h3>
                                <hr className="my-1 my-md-4"/>
                                <p className="my-4">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and.</p>
                                <ul className="container wrapper-list--features py-4">
                                    <li className="row align-items-center">
                                        <div className="col-auto">
                                            <img src="/images/icon-user.png" alt=""/>
                                        </div>
                                        <div className="col">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.</div>
                                    </li>
                                    <li className="row align-items-center">
                                        <div className="col-auto">
                                            <img src="/images/icon-user.png" alt=""/>
                                        </div>
                                        <div className="col">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.</div>
                                    </li>
                                    <li className="row align-items-center">
                                        <div className="col-auto">
                                            <img src="/images/icon-user.png" alt=""/>
                                        </div>
                                        <div className="col">Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.</div>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-1 d-none d-md-block"></div>
                            <div className="col-12 col-md-4 form-signup--body mx-auto p-3 p-md-4 order-1 order-md-2">
                                <form action="/" className="form-signup--banner">
                                    <label htmlFor="">Nome *</label>
                                    <input type="text" id=""/>
                                    <label htmlFor="">Email *</label>
                                    <input type="email" id=""/>
                                    <label htmlFor="">Empresa *</label>
                                    <input type="text" id=""/>
                                    <label htmlFor="">Cargo *</label>
                                    <input type="text" id=""/>
                                    <label htmlFor="">4 + 3 = ?</label>
                                    <input type="text" id=""/>
                                    <button className="mt-2">SOLICITAR DEMO</button>
                                    <p className="pt-3 m-0 text-center"><span>Te ajudar a crescer: sim | Fazer spam: não</span></p>
                                </form>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>;
}

export default DisplayBannerQ;