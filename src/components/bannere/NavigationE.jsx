import React from 'react';
import '../bannere/NavigationE.scss';
import imgLogo from '../../images/logo-white.png';

function NavigationE() {
  return <>
            <div className="component-nav-e">

            <div className="container-lg-fluid container-lg p-0">
                    <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-2 py-md-2 py-lg-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src={imgLogo} alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <div className="row navbar mx-1">

                                <ul className="nav col-auto align-items-center">

                                <li className="nav-item">
                                    <a className="nav-link active" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">What We Do</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Our Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Blog</a>
                                </li>

                                </ul> 

                            </div>

                        </div>
                    </nav>
                </div>

            </div>      
        </>;
}

export default NavigationE;