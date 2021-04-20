import React from 'react';
import { Link } from 'react-router-dom';

function CardsPreview () {
    return (
        <>
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
        </>
    )
}

export default CardsPreview;