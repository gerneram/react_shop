import React, { useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import Order from './Order';

const showOrders = (props) =>{
  let summ = 0
  props.orders.forEach(el => summ += Number.parseFloat(el.price))
    
  return(
    <div>
      {props.orders.map(el =>(
        <Order onDelete = {props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summ'>Summ: {new Intl.NumberFormat().format(summ)}$</p>
    </div>
  )
}

const showNothing = () =>{
  return (
    <div className='empty'>
      <h2>Cart is empty</h2>
    </div>
  )
}

export default function Header(props) {
  
  let [cartOpen, setCartOpen] = useState(false)
  
  return (
    <header>
    <span className='logo'>House staff</span>
    <ul className='nav'>
        <li>About us</li>
        <li>Contact</li>
        <li>Account</li>

    </ul>
    <IoCartSharp onClick={( ()=> setCartOpen(cartOpen = !cartOpen))} className={`shop-cart-button ${cartOpen && 'active'}`}/>
    
    {cartOpen && (
      <div className='shop-cart'>
        {props.orders.length > 0 ? showOrders(props) : showNothing()}
          
      </div>
    )}
    <div className='presentation'></div>
    </header>
  )
}
