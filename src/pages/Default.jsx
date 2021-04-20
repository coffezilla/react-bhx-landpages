import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../images/logo.png';

// Style
import '../pages/Default.scss';

function Default () {
    
    useEffect(() => {
        document.title = 'Landpage samples';
    })
    
      
    return (
        <>

<div className="component-nav--main">

    <div className="container-lg-fluid container-lg p-0">
        <nav className="navbar navbar-expand-md px-4 px-md-3 px-lg-0 py-2 py-md-0 py-lg-0  justify-content-between">
            
            <a className="navbar-brand py-3 py-md-0" href="/"><img src={imgLogo} alt="Logo" /></a>                        

            <button className="navbar-toggler collapsed" data-target="#navbar-primary" data-toggle="collapse">
                <span className="navbar-toggler-open-icon"><i className="bi bi-caret-up"></i></span>
                <span className="navbar-toggler-close-icon"><i className="bi bi-caret-down"></i></span>
            </button>
            
            <div className="navbar-collapse collapse justify-content-between" id="navbar-primary">

                <div className="row navbar py-0">

                    <ul className="nav col-auto align-items-center">

                        <li className="nav-item mr-3">
                            <span className="navbar-text">332</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Banners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Footers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Forms</a>
                        </li>

                    </ul> 

                </div>

                <form action="/" className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Busca nome..." aria-label="Busca"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busca</button>
                    </form>

            </div>
        </nav>
    </div>

</div>   



            <section className="container-lg my-5">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4 wrapper-card--preview mb-5">
                        <div className="content-card">
                            <div className="card-cover">

                            </div>
                            <div className="card-title p-5">
                                <div className="row align-items-center text-left justify-content-between">
                                    <div className="col-auto">
                                        <h2>Banner A</h2> 
                                        <p>Banner básico</p>
                                    </div>
                                    <div className="col-auto">
                                    <Link to="/banner-a" className="btn-default">Preview</Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 wrapper-card--preview mb-5">
                        <div className="content-card">
                            <div className="card-cover">

                            </div>
                            <div className="card-title p-5">
                                <div className="row align-items-center text-left justify-content-between">
                                    <div className="col-auto">
                                        <h2>Banner B</h2> 
                                        <p>Banner básico</p>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/banner-b" className="btn-default">Preview</Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 wrapper-card--preview mb-5">
                        <div className="content-card">
                            <div className="card-cover">

                            </div>
                            <div className="card-title p-5">
                                <div className="row align-items-center text-left justify-content-between">
                                    <div className="col-auto">
                                        <h2>Banner C</h2> 
                                        <p>Banner básico</p>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/banner-c" className="btn-default">Preview</Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 wrapper-card--preview mb-5">
                        <div className="content-card">
                            <div className="card-cover">

                            </div>
                            <div className="card-title p-5">
                                <div className="row align-items-center text-left justify-content-between">
                                    <div className="col-auto">
                                        <h2>Banner D</h2> 
                                        <p>Banner básico</p>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/banner-d" className="btn-default">Preview</Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 wrapper-card--preview mb-5">
                        <div className="content-card">
                            <div className="card-cover">

                            </div>
                            <div className="card-title p-5">
                                <div className="row align-items-center text-left justify-content-between">
                                    <div className="col-auto">
                                        <h2>Banner E</h2> 
                                        <p>Banner básico</p>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/banner-e" className="btn-default">Preview</Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>


                    






                </div>
            </section>
            

            {/* <h1>Landpages template</h1> */}
            {/* <p>Here you've got a bunch of samples to use and create landpages.</p> */}

            {/* <ul> */}
                {/* <li><Link to="/banner-a">Banner A</Link></li> */}
                {/* <li><Link to="/banner-b">Banner B</Link></li> */}
                {/* <li><Link to="/banner-c">Banner C</Link></li> */}
                {/* <li><Link to="/banner-d">Banner D</Link></li> */}
                {/* <li><Link to="/banner-e">Banner E</Link></li> */}
                {/* <li><Link to="/banner-f">Banner F</Link></li>
                <li><Link to="/banner-g">Banner G</Link></li>
                <li><Link to="/banner-h">Banner H</Link></li>
                <li><Link to="/banner-i">Banner I</Link></li>
                <li><Link to="/banner-j">Banner J</Link></li>
                <li><Link to="/banner-k">Banner K</Link></li>
                <li><Link to="/banner-l">Banner L</Link></li>
                <li><Link to="/banner-m">Banner M</Link></li>
                <li><Link to="/banner-n">Banner N</Link></li>
                <li><Link to="/banner-o">Banner O</Link></li>
                <li><Link to="/banner-p">Banner P</Link></li>
                <li><Link to="/banner-q">Banner Q</Link></li>
                <li><Link to="/banner-r">Banner R</Link></li>
                <li><Link to="/banner-s">Banner S</Link></li>
                <li><Link to="/banner-t">Banner T</Link></li>
                <li><Link to="/banner-u">Banner U</Link></li>
                <li><Link to="/banner-v">Banner V</Link></li>
                <li><Link to="/banner-x">Banner X</Link></li>
                <li><Link to="/banner-z">Banner Z</Link></li>

                <li><Link to="/banner-aa">Banner AA</Link></li>
                <li><Link to="/banner-ab">Banner AB</Link></li>
                <li><Link to="/banner-ac">Banner AC</Link></li>
                <li><Link to="/banner-ad">Banner AD</Link></li>
                <li><Link to="/banner-ae">Banner AE</Link></li>
                <li><Link to="/banner-af">Banner AF</Link></li> */}
            {/* </ul> */}
        </>
    );
}

export default Default;