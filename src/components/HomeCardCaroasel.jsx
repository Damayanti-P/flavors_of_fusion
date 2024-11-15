import React, { useState, useRef } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HomecardCaroesalImg } from './Data/HomecardCaroesalImg';


const HomeCardCaroasel = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    // const {setSelectedCategory}=useAppContext();

    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 }
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            carouselRef.current.slidePrev();
            setActiveIndex(activeIndex - 1);
        }
    };

    const slideNext = () => {
        if (activeIndex < HomecardCaroesalImg.length - 1) {
            carouselRef.current.slideNext();
            setActiveIndex(activeIndex + 1);
        }
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const items = HomecardCaroesalImg.map((item, index) => (
        <div
            key={index}
            onClick={() => navigate(`/menu?key=${item.key}`)} // Navigate with query parameter
            style={{ cursor: 'pointer' }} // Make items clickable
        >
            <HomeSectionCard dish={item} />
        </div>
    ));

    return (
        <div className='home-card-carousel'>
            <div className='home-card-carousel-inner'>
                <div className='alice-carousel'>
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
                <Button
                    onClick={slidePrev}
                    className='button-for-home-card-carousel-back'
                    aria-label="previous"
                    disabled={activeIndex === 0}
                >
                    <ArrowCircleLeftIcon className='arrow' />
                </Button>
                <Button
                    onClick={slideNext}
                    className='button-for-home-card-carousel-next'
                    aria-label="next"
                    disabled={activeIndex >= HomecardCaroesalImg.length - 5}
                >
                    <ArrowCircleRightIcon className='arrow' />
                </Button>
            </div>
        </div>
    );
};

export default HomeCardCaroasel;
