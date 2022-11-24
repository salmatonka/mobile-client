import React from 'react';
import img1 from '../../../assets/images/daniel-romero-q-RQba-XCgU-unsplash.jpg';
import img2 from '../../../assets/images/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg';
import img3 from '../../../assets/images/lacie-slezak-eJsh9LKnX_A-unsplash.jpg';
import img4 from '../../../assets/images/vista-wei-oLl-PEbpoCg-unsplash.jpg';
const Banner = () => {
    return (
        <div className='pt-10 bg-violet-200'>
      
        <h1 className="text-3xl my-5 font-bold text-center  dark:text-gray-900">What is mMarket.com?</h1>
        <p className="text-center mt-5 dark:text-gray-900 ">mMarket.com is one of the world’s largest wholesale marketplaces, with 20 years of experience helping business-to-business <br /> (B2B) companies buy and sell their goods around the world.</p>
        
        <div className="carousel w-full h-80 pt-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img3} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img2} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

</div>
    );
};

export default Banner;