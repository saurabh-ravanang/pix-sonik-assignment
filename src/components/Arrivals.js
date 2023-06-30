import React from "react";
import img1 from '../Assets/ptoduct (1).png'
import img2 from '../Assets/ptoduct (2).png'
import img3 from '../Assets/ptoduct (3).png'
import img4 from '../Assets/ptoduct (4).png'

export default function Arrivals() {
  return (
    <>
      <h3 style={{ textAlign: "center",margin:'20px' }}>NEW ARRIVALS </h3>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magni.
      </p>
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',gap:'50px',padding:'20px'}}> 
      <div class="card" style={{width:'20rem'}}>
        <div style={{backgroundColor:'grey'}}><img src={img1} class="card-img-top" alt="..." /></div>
        <div class="card-body">
            <h3>&#9733; &#9733; &#9733;</h3>
          <h5 style={{marginBottom:'20px'}} class="card-title">CLANITAS CST CLEAN PROCCESS</h5>
          <h5 style={{marginBottom:'10px'}} class="card-text"> &#8377; 500 </h5>
          <a href="#" class="btn btn-warning">
            Add to cart
          </a>
        </div>
      </div>
      <div class="card" style={{width:'20rem'}}>
        <div style={{backgroundColor:'grey'}}><img src={img2} class="card-img-top" alt="..." /></div>
        <div class="card-body">
            <h3>&#9733; &#9733; &#9733;</h3>
          <h5 style={{marginBottom:'20px'}} class="card-title">CLANITAS CST CLEAN PROCCESS</h5>
          <h5 style={{marginBottom:'10px'}} class="card-text"> &#8377; 500 </h5>
          <a href="#" class="btn btn-warning">
            Add to cart
          </a>
        </div>
      </div>
      <div class="card" style={{width:'20rem'}}>
        <div style={{backgroundColor:'grey'}}><img src={img3} class="card-img-top" alt="..." /></div>
        <div class="card-body">
            <h3>&#9733; &#9733; &#9733;</h3>
          <h5 style={{marginBottom:'20px'}} class="card-title">CLANITAS CST CLEAN PROCCESS</h5>
          <h5 style={{marginBottom:'10px'}} class="card-text"> &#8377; 500 </h5>
          <a href="#" class="btn btn-warning">
            Add to cart
          </a>
        </div>
      </div>
      <div class="card" style={{width:'20rem'}}>
        <div style={{backgroundColor:'grey'}}><img src={img4} class="card-img-top" alt="..." /></div>
        <div class="card-body">
            <h3>&#9733; &#9733; &#9733;</h3>
          <h5 style={{marginBottom:'20px'}} class="card-title">CLANITAS CST CLEAN PROCCESS</h5>
          <h5 style={{marginBottom:'10px'}} class="card-text"> &#8377; 500 </h5>
          <a href="#" class="btn btn-warning">
            Add to cart
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
