import React, { useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from '../../content/data/carousel.json';
import GetInTouchForm from '../../components/Utilities/GetInTouchForm';
import Testimonial from '../../components/Testimonial/Testimonial';
import Heading from '../../components/Utilities/Heading';

const serviceList = [
    { id: 1, text: 'Change Coloring' },
    { id: 2, text: 'HairCuts' },
    { id: 3, text: 'Perfect Hairstyles' },
    { id: 4, text: 'Makeup' }
];


const Home = (props) => {

    const [service, setService] = useState(serviceList);

    return (
        <>
            <Carousel id="myCarousel" carouselData={CarouselData} prevText="Prev" nextText="Next" />
            <div className='container our-service-main-wrapper'>
                <Heading class='text-center' heading='Our Services' />
                <div className='our-service-wrapper'>

                    {
                        service.map((item) =>
                            <div key={item.id}>
                                <img src={require('../../content/images/service/1.png')} />
                                <p>Change Coloring </p>
                            </div>)
                    }
                </div>
            </div>
            <Testimonial />
            <div className='container'>
                <div className='get-in-touch'>
                    <GetInTouchForm />
                </div>
            </div>
        </>
    );
};

export default Home;