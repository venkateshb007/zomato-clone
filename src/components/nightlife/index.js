import React from 'react'
import './nightlife.css'
import Filters from "../common/filters"
import Collection from '../common/collection'
import ExploreSection from "../common/exploreSection"
import {nightLife} from "../../data/nightLife"



const nightFilters =[
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

const collectionList = [
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
];

const nightList=nightLife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Bengaluru'/>
    </div>
  )
  
}

export default Nightlife