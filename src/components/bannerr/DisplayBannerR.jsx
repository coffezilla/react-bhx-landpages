import React from 'react';
import '../bannerr/DisplayBannerR.scss';

function DisplayBannerR() {
  return <>
            <div className="display-banner-r">
                <div className="wrapper-header--banner pb-0 pb-md-2 pb-lg-5">

                    <div className="container">
                        <div className="row justify-content-around align-items-center py-md-5">
                            <div className="col-5 py-3 py-md-0">
                                <img src="/images/logo-netflix.png" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-12 col-lg-5 py-3 py-md-0 text-md-right">
                                <p className="info-date"><span>13 DE JULHO</span></p>
                                <h1 className="info-title my-3">Aula de Marketing Digital 100% Online e Gratuita!</h1>
                                <button>Participar gratuitamente</button>
                            </div>
                        </div>
                        <div className="row justify-content-around align-items-center py-3 py-md-2 py-lg-5">    
                            <div className="col-12 col-lg-5">
                                <blockquote>
                                    <p>"Você não vende um produto, você vende um relacionamento com o consumidor."</p>
                                    <cite>Henry Hyundai Souza - Gerente geral de marketing</cite>
                                </blockquote>
                            </div>
                            <div className="col-12 col-lg-5">
                                <p>Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.Everlist is bringing sexy back to your daily lists. Groceries, trips, errands, and daily todos.Everlist is bringing sexy back to your.</p>
                            </div>
                        </div>

                        <div className="row wrapper-display">
                            <div className="col-12 col-md-5 mx-auto text-center py-3 py-md-0">
                                <p>CELEBRE O DIA DO ROCK EM NOSSA COMPANHIA, BASTA SE INSCREVER NO FORMULÁRIO ABAIXO.</p>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="wrapper-footer--banner">
                    <div className="container">
                        <div className="row wrapper-form--signup py-3 py-md-2 py-lg-5">
                            <div className="col-12 col-md-5 mx-auto">
                                <form action="/" className="form-signup--banner">
                                    <input type="text" placeholder="Seu nome" />
                                    <input type="email" placeholder="Seu email" />
                                    <button>Participar do show</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>;
}

export default DisplayBannerR;