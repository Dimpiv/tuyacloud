import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

import "./authCarousel.css"
import slide_1 from "../../../images/slide_1_test.jpg"
import slide_2 from "../../../images/slide_2_test.jpg"
import slide_3 from "../../../images/slide_3_test.jpg"


const items = [
    {
        id: 1,
        src: slide_1,
        caption: 'Управляй светом',
        text: 'Дом не может считаться жилищем человека, пока в нем нет пищи и огня не только для тела, но и для разума  '
    },
    {
        id: 2,
        src: slide_2,
        caption: 'Будь современный',
        text: 'Не по дому следует почитать хозяина, а дом по хозяину'
    },
    {
        id: 3,
        src: slide_3,
        caption: 'Находись в комфорте',
        text: 'Все, что мне нужно – это комната, где можно положить шляпу и нескольких друзей'
    }
];

const AuthCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img className="slide" src={item.src} alt={item.altText} />
                <CarouselCaption className="text-left caption_text" captionText={item.text} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
                        max-width: 100%;
                        height: 390px;
                        background: white;
                     }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
};

export default AuthCarousel;
