import React from 'react'
import './FoodItemCard.css'

function FoodItemCard({category, description,imgUrl, price, title}) {
  return (
    <div>
      <div className="food-item-card">
        <img src={imgUrl} />
      </div>
    </div>
  )
}

export default FoodItemCard


