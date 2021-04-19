import React from 'react';
import '../bannerx/NavigationX.scss';

function NavigationX() {
  return <>
            <div className="component-nav-x">
                <div className="container-lg-fluid container-lg">
                    <nav className="navbar py-1 px-0 px-md-3 py-md-4 justify-content-between">
                        <a className="navbar-brand" href="/"><img src="/images/logo-google.png" alt="Logo" /></a>
                        
                        <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link bt-primary ml-3" href="/">GET STARTED <i class="bi bi-arrow-right"></i></a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>        
        </>;
}

export default NavigationX;