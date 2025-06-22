import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const prodLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState(prodLocalStorage)

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])


   const addItem = (item, cantidad)=>{
    if(isInCart(item.id)){
        const updatedCart = cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                return prod
            }
        })
        setCart(updatedCart)
        
    }else{

        setCart([...cart, {...item, quantity:cantidad}])
    }
   }

  
   const clear = () =>{
    setCart([])
   }

  
   const removeItem = (id) => {
    setCart(cart.filter((prod)=> prod.id !== id))
   }

 
   const isInCart = (id)=>{
    return cart.some((prod)=> prod.id === id)
   }

   const cartQuantity = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
   }
   const cartTotal = () => {
    return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
   }


const itemQuantity = (id)=>{
    const itemInCart = cart.find((item)=> item.id === id)
    if(itemInCart){
        return itemInCart.quantity
    }else{
        return 0
    }
}
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, cartTotal, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}