import React from 'react';
import { Link } from 'react-router-dom';

// scss
import '../components/CardsPreview.scss';

// images
import IMAGES from '../images/index.jsx';


 

const CardsPreview = (props) => {
    
    // console.log(IMAGES.BgCard1)
    // const {
    //     props.coverUrl,
    //   } = this.props
  
        // default its not necessary for all react version
    //   const imageCover = require('../images/' + props.coverUrl + '.jpg').default;
    //   console.log(imageCover)



    return (
        <>
        <div className="col-12 col-md-6 col-lg-6 col-xl-4 wrapper-card--preview mb-5">
            <div className="content-card">
                <div className="card-cover" style={{backgroundImage: `url(${IMAGES[props.coverUrl]})`}}>
                    {/* <img src={IMAGES[props.coverUrl]} alt=""/> */}
                </div>
                <div className="card-title p-5">
                    <div className="row align-items-center text-left justify-content-between">
                        <div className="col-auto">
                            <h2>{props.name}</h2> 
                            <p>{props.description}</p>
                        </div>
                        <div className="col-auto">
                            <Link to={props.link} className="btn-default">Preview</Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default CardsPreview;