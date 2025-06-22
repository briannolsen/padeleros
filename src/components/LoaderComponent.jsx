import React from 'react'
import { BarLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <BarLoader color='black' size={70}/>
    </div>
  )
}

export default LoaderComponent