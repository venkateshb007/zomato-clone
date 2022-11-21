import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliveryCollections.css'
import DeliveryItem from './deliveryItem';


const deliveryItem = [
    {
        id: 1,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 2,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id: 3,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id: 4,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 5,
        title: "Paratha",
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    },
    {
        id: 6,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id: 7,
        title: "Dal",
        cover: "https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png",
    },
    {
        id: 8,
        title: "Kebabs",
        cover: "https://b.zmtcdn.com/data/dish_photos/4c6/4f2cb1bfb215d0af454e65291aec74c6.jpg",
    },
    {
        id: 9,
        title: "Fries",
        cover: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
    },
    {
        id: 10,
        title: "Ice Cream",
        cover: "https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
    },
    {
        id: 11,
        title: "Coffee",
        cover: "https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png",
    },
    {
        id: 12,
        title: "Bowl",
        cover: "https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png",
    },
];

const settings = {
    infinite: false,
    // speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
    return (
        <div className='delivery-collections'>
            <div className='max-width'>

                <div className='collection-title'>Inspiration for your first order</div>

                <div>
                    <Slider {...settings}>
                        {deliveryItem.map((item) => {
                            return <DeliveryItem item={item} />
                        })}
                    </Slider>
                </div>


            </div>
        </div>
    )
}

export default DeliveryCollections;