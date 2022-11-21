import React from 'react'
import './deliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
    <div>
    <div className='bg absolute-center'>
        <div className="delivery-item-cover">
            <img src={item.cover} 
            className="delivery-item-image" 
            alt={item.title} />
        </div>
    </div>
     <div className='delivery-item-title absolute-center
     '>{item.title}</div>
     </div>
  )
}

export default DeliveryItem;