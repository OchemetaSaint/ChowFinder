import React from 'react'
import './restaurantCard.css'

function RestaurantCard(props) {

 
  return (
    <section className='Restaurant'>
        <main className='Restaurant-wrapper'>
            <div className='Restaurant-image'>
            <img src="./src/assets/image 9.png" alt="food"/></div>
            <div className='Restaurant-name'>
                <h4>{props.name}</h4>
                <p>{props.address}</p>
            </div>
            <div className='Restaurant-btn'>
                <button>See more</button>
            </div>
        </main>
       </section>
  )
}

export default RestaurantCard