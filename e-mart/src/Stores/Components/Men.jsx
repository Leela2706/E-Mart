import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const firstFiveImages = menData.slice(0, 5)

    return (
        <>
            <div className="proTitle">
                <h2>Mens</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='imgBox'>
                                <img className='proImg' src={item.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Men
