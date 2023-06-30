import React from 'react'
import img1 from '../Assets/brand logo-home page-01.jpg'
import img2 from '../Assets/brand logo-home page-02.jpg'
import img3 from '../Assets/brand logo-home page-03.jpg'

export default function Home() {
  return (
    <>
    <div className='HomeContainer'>
        <div className="h-div">
      <h3>EXPERIENCE THE POWER WITHIN</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque neque optio praesentium doloribus pariatur provident autem accusamus omnis animi quia, perferendis harum consequatur porro qui itaque natus magni ipsam laboriosam.</p>
      <button className='btn'>View Collection</button>
      </div>
    </div>
    <div className="home-two">
        <div className="imgbox">
            <img src={img1} alt="" />
        </div>
        <div className="imgbox">
            <img src={img2} alt="" />
        </div>
        <div className="imgbox">
            <img src={img3} alt="" />
        </div>
    </div>
    </>
  )
}
