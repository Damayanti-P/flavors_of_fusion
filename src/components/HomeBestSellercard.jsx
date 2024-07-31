import React from 'react'

const HomeBestSellercard = ({dish}) => {
  return (
    <>
    <div className='best-seller-card-container '>
        <div className='best-seller-caroasel-card '>
            <img className='best-seller-card-img ' src={dish.image} alt="" />
        </div>
        <div className='heading-div'>
            <h3 className='heading'>{dish.title}</h3>
            <p className='description'>{dish.Description}</p>
        </div>
    </div>

</>
  )
}

export default HomeBestSellercard
