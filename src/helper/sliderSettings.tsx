import { ButtonNext, ButtonPrev } from "../components/SliderButtons";

const sliderSettings : object = {
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonPrev />,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
        },
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        },
        },
        {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
        },
        },
    ],
}

export default sliderSettings;