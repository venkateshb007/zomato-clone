import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topBrands.css'

const topBrandsList = [
  {
    id:1,
    title:"Meghana Foods",
    time:"36min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png",
  },
  {
    id:2,
    title:"Domino's Pizza",
    time:"30min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
  },
  {
    id:3,
    title:"Empire Restaurant",
    time:"36min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png",
  },
  {
    id:4,
    title:"EatFit",
    time:"28min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429766.png",
  },
  {
    id:5,
    title:"McDonald's",
    time:"29min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
  },
  {
    id:6,
    title:"California Burrito",
    time:"26min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png",
  },
  {
    id:7,
    title:"KFC",
    time:"25min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
  },
  {
    id:8,
    title:"A2B - Adyar Ananda Bhavan",
    time:"39min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png",
  },
  {
    id:9,
    title:"FreshMenu",
    time:"27min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png",
  },
  {
    id:10,
    title:"Leon's Burgers & Wings",
    time:"30min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/30ebb0e7aac79d952b3cfbf77802fac9_1663653518.png",
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

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand)=>{
          return <div>
            <div className='top-brands-cover'>
              <img src={brand.cover} className='top-brands-image' alt={brand.title} />
              <div className='top-brands-title'>{brand.title}</div>
              <div className='top-brands-time'>{brand.time}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  )
}

export default TopBrands;

