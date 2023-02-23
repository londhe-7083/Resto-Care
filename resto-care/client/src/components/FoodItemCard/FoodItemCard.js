import React, {useState} from 'react'
import './FoodItemCard.css'
import swal from 'sweetalert'

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

  await swal ({
    title: "adding to List",
    icon: "success",
  })
  window.location.reload()
}

  return (
    <div className="col-md-3 food-item-card-container">
      <div className="food-item-card">
      <div className='img-container'>
        <img src={imgUrl} className="food-item-card-header-img"/>
        </div>
        <h4> {title} </h4>
        <h5>{description}</h5>
        <h5>{price}</h5>
        <span className='category'>{category}</span>
        <div className="sc-fGSyRc fSXTKp"></div>
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


