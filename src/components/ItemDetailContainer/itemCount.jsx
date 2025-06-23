import {useState, useEffect} from 'react'
const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)
   
    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if(count < stock){

            setCount (count + 1)
        }
    }

  return (
  <>
  {stock === 0 ? <p>Lo sentimos no hay stock disponible de este producto 😭</p>
  : <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
     <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span  className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
     <button className='btn btn-primary' onClick={()=>onAdd(count)} disabled={stock === 0 || count === 0} >Agregar al carrito</button>
   </div>}
  </>
  )
}
export default ItemCount