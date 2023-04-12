import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from '../../content/data/carousel.json';

const Home = (props) => {
    return (
        <>
            <Carousel id="myCarousel" carouselData={CarouselData} prevText="Prev" nextText="Next" />
        </>
    );
};

export default Home;