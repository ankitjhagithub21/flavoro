import React from 'react'
import FoodItem from './FoodItem'

const FoodContainer = ({data}) => {
  return (
    <section className="body-font">
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap -m-4 ">
        {
          data.map((item)=>{
            return <FoodItem key={item.id} item={item}/>
          })
        }
        
       
      </div>
    </div>
  </section>
  
  )
}

export default FoodContainer