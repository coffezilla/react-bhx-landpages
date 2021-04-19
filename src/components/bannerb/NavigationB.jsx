import React from 'react';
import '../bannerb/NavigationB.scss';
import Logo from '../../images/logo.png';

function NavigationB() {
  return <>
  
            <div className="component-nav-b">

                <div className="container-lg-fluid container-lg p-0">
                    <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-0 py-md-2 py-lg-4  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src={Logo} alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-grid"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <div className="navbar row mx-1">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">SUBSCRIBE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bt-primary-nav ml-3" href="/">GET IT FREE</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>

            </div>   

        </>;
}

export default NavigationB;