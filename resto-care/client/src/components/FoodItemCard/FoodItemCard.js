import React, {useState} from 'react'
import './FoodItemCard.css'

function FoodItemCard({category, description,imgUrl, price, title}) {

const[quantity, setQuantity] = useState(1)

async function addToList(){
  const listObject = {
    name:title,
    price:price,
    quantity:quantity
  }

  // add to list localstorage

  const existingList = JSON.parse(localStorage.getItem('list')) || []

  existingList.push(listObject)

  localStorage.setItem('list', JSON.stringify(existingList))
}

  return (
    <div className="col-md-3">
      <div className="food-item-card">
      <div>
        <img src={imgUrl} className="food-item-card-header-img"/>
        </div>
        <h2> {title} </h2>
        <p>{description}</p>
        <p>{price}</p>
        <span>{category}</span>
        <div className='quantity-btn-container'>
         <span className='qnt-btn' onClick={(e)=>{setQuantity(quantity-1)}}>-</span>
         <span className='qnt-text'> {quantity} </span>
         <span className='qnt-btn' onClick={(e)=>{setQuantity(quantity+1)}}>+</span>
        </div>
      <div>
        <button type='button' className='btn-add-to-list' onClick={addToList}>Add To List</button>
      </div>
      </div>
    </div>
  )
}

export default FoodItemCard


