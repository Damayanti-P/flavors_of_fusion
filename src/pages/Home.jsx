import React from 'react'
import HomeCardCaroasel from '../components/HomeCardCaroasel'
import HomeBestSeller from '../components/HomeBestSeller'

const Home = () => {
  return (
   <> 
   <div className='home-main-div'>
      <div className='home-main-div-inner'>
        <h3 className='home-headings'>What's on your mind?</h3>
        <div className='home-carosal-div'>
             <HomeCardCaroasel/>
        </div>
        <hr className='line-btwn'/>
        <h3 className='home-headings'>Best seller this week</h3>
    <div >
    <HomeBestSeller/>
</div>
        </div>
        
        
    </div>
   
</>
  )
}

export default Home
