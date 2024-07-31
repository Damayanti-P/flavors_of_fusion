import React, { useState, useRef } from 'react';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import { HomeBestSellerData } from './Data/HomeBestSellerData';
import HomeBestSellercard from './HomeBestSellercard';

const HomeBestSeller = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4}
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            carouselRef.current.slidePrev();
            setActiveIndex(activeIndex - 1);
        }
    };

    const slideNext = () => {
        if (activeIndex < HomeBestSellerData.length - 1) {
            carouselRef.current.slideNext();
            setActiveIndex(activeIndex + 1);
        }
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const items = HomeBestSellerData.map((item, index) => (
        <HomeBestSellercard key={index} dish={item} />
    ));

    return (
        <div className='home-card-carousel'>
            <div className='home-card-carousel-inner'>
                <div className='alice-carousel'>
                <Button
                    onClick={slidePrev}
                    className='button-for-bestseller-card-carousel-back'
                    aria-label="previous"
                    disabled={activeIndex === 0}
                >
                    <ArrowCircleLeftIcon className='arrow' />
                </Button>
                <Button
                    onClick={slideNext}
                    className='button-for-bestseller-card-carousel-next'
                    aria-label="next"
                    disabled={activeIndex >= HomeBestSellerData.length - 5}
                >
                    <ArrowCircleRightIcon className='arrow' />
                </Button>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    disableDotsControls
                    disableButtonsControls
                />
                </div>
               
            </div>
        </div>
    );
};



export default HomeBestSeller
