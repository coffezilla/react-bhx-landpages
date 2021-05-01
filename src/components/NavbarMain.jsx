import React from 'react';
import imgLogo from '../images/logo.png';

// scss
import '../components/NavbarMain.scss';

function NavbarMain () {

    function selectType(type) {
        console.log('Features '+type)
    }

    return (
        <>
            <div className="component-nav--main">

                <div className="container-fluid p-0 ">
                    <nav className="navbar  navbar-expand-md px-4 px-md-3 py-2 py-md-0 py-lg-0  justify-content-between">
                        
                        <a className="navbar-brand py-3 py-md-0" href="/"><img src={imgLogo} alt="Logo" /></a>                        

                        <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                            <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                            <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
                        </button>
                        
                        <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                            <div className="row navbar py-0 m-0">

                                <ul className="nav col-auto align-items-center px-0">

                                    <li className="nav-item mr-3">
                                        <span className="navbar-text">332</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" onClick={() => selectType(1)} href="#search">Banners</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" onClick={() => selectType(2)} href="#search">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="/">Footers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="/">Forms</a>
                                    </li>

                                </ul> 

                            </div>

                            {/* <form action="/" className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Busca nome..." aria-label="Busca"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busca</button>
                            </form> */}

                        </div>
                    </nav>
                </div>

            </div>   
        </>
    )
}

export default NavbarMain;