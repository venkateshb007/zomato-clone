import React from 'react'
import Collection from '../common/collection'
import "./diningOut.css"
import Filters from "../common/filters"
import {diningOut} from "../../data/diningOut"
import ExploreSection from "../common/exploreSection"


const collectionList =[
  {
    id:1,
    title:"bangalore/romantic-restaurants",
    cover:"https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665640799.jpg",
    places:"12 Places",
  },
  {
    id:2,
    title:"Best Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665565737.jpg",
    places:"20 Places",
  },
  {
    id:3,
    title:"New in Town",
    cover:"	https://b.zmtcdn.com/data/collections/1d1e838de3c921a6bdacb382a3d01c62_1667458986.jpg",
    places:"8 Places",
  },
  {
    id:4,
    title:"Live Cricket Screening",
    cover:"	https://b.zmtcdn.com/data/collections/4cb740de1b62f5d068fdba054c93ef9e_1666339697.jpg",
    places:"6 Places",
  },
  {
    id:5,
    title:"Picturesque Cafes",
    cover:"https://b.zmtcdn.com/data/collections/b90996d69bfe8d8c7e36d3a56893df74_1657000323.jpg",
    places:"10 Places",
  },
  {
    id:6,
    title:"Great Buffets",
    cover:"https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
    places:"16 Places",
  },
  {
    id:7,
    title:"World Vegan Month",
    cover:"https://b.zmtcdn.com/data/collections/8a5d8298d4f218d1ae8923419f1af2fb_1667298875.jpg",
    places:"16 Places",
  },
  {
    id:8,
    title:"World on Your Plate",
    cover:"https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
    places:"8 Places",
  },
]

const diningFilters=[
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName='Best Dining Restaurants near you in Bengaluru'/>
    </div>
  )
}

export default DiningOut




