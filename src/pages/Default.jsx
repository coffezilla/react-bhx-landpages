import React, { useEffect } from 'react';
import ContentCards from '../components/ContentCards'; 
import NavbarMain from '../components/NavbarMain';


// Style
import '../pages/Default.scss';

function Default () {

    
    useEffect(() => {
        document.title = 'Landpage samples';
    })
    
      
    return (
        <>

        <NavbarMain />

        <ContentCards />

            
            

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