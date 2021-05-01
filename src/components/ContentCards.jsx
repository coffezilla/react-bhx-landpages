import React from 'react';
import CardsPreview from '../components/CardsPreview';

function ContentCards () {


    let typeSearch = 'banner';


    const itensPreviewArr = [
        {
            'name': "Banner A",
            'description': "Banner A description",
            'link': '/banner-a',
            'coverUrl': 'preview_banner_a',
            'type': 'banner'
        },
        {
            'name': "Banner B",
            'description': "Banner B description",
            'link': '/banner-b',
            'coverUrl': 'preview_banner_b',
            'type': 'banner'
        }
    ]

  
    const itensPreviewSearch = itensPreviewArr.filter(( key ) => {
        return key.type === typeSearch;
    })



    return (
        <>
            <section className="container my-5">
                <div className="row">
                    {
                        itensPreviewSearch.map((item, index) => {
                            return (
                                <CardsPreview 
                                key={index}
                                name={item.name}
                                description={item.description}
                                link={item.link}
                                coverUrl={item.coverUrl}
                                />
                            )
                        })
                    }

                </div>
            </section>

        </> 
    )
}

export default ContentCards;

