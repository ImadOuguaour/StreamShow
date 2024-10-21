import { ButtonNext, ButtonPrev } from "../components/MediaSlider/SliderButtons";

const sliderSettings : object = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonPrev />,
    responsive: [
        {
            breakpoint: 1750,
            settings: {
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
            },
        },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
        },
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
            },
            },
        {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        },
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        },
        },
    ],
}

export default sliderSettings;