import React from 'react'
import { watchData } from '../data/watch'

const WatchesPage = () => {
  return (
    <>
    
     <div className='pageSection'>
         {watchData.map((item)=>{
             return(
                 <div>
                     <div className="pageImg">
                         <img src={item.image}  alt="" />
                     </div>
                     <div className="proModel">
                         {item.company},{item.model}
                     </div>
                 </div>
             )
         })}
 
     </div>
    </>
  )
}

export default WatchesPage