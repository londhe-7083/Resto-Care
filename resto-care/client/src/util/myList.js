export const myFoodListItems = JSON.parse(localStorage.getItem('list')) || []

export const myFoodListCount = myFoodListItems.length