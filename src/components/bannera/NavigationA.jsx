import React from 'react';
import '../bannera/NavigationA.scss';
import Logo from '../../images/logo.png';

function NavigationA() {
  return <>
            <div className="component-nav-a">


                <div className="container-lg-fluid container-md p-0">
                    <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-0 py-lg-2 py-xl-4 justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src={Logo} alt="Logo" /></a>                     

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse" id="navbar-primary">
                            <div className="row navbar">
                                <ul className="nav align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">NEWS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bt-primary--nav ml-3" href="/">GET STARTED <i className="bi bi-arrow-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>        
        </>;
}

export default NavigationA;