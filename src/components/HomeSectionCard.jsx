import React from 'react'

const HomeSectionCard = ({ dish }) => {
    return (
        <>
            <div className='caroasel-card-container '>
                <div className='caroasel-card '>
                    <img className='caroasel-card-img ' src={dish.image} alt="" />
                </div>
            </div>

        </>
    )
}

export default HomeSectionCard
