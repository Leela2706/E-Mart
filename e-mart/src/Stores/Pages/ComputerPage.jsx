import React from 'react'
import { computerData } from '../data/computers'

const ComputerPage = () => {
  return (
    <>
    <div className='pageSection'>
        {computerData.map((item)=>{
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

export default ComputerPage
