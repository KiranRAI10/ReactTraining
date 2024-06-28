import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <>
    <div class="card">
    <img src="/street.png" alt="Product Image" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">Product Title</h2>
      <p class="card-description">This is a short description of the product.</p>
      <p class="card-price">$19.99</p>
      <button class="card-button">Add to Cart</button>
    </div>
  </div>
    
    </>
  )
}

