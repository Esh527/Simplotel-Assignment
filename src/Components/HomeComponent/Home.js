import React from 'react';
import './home.css';

const Home = ({ data }) => {
  console.log(data);

  return (
    <div className='home-container'>
      <div className='container-one'>
        <div className='image-container'>
        <div className='text-container'>
        <h1>LOREM IPSUM</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book</p>
          </div> 
        </div>
      </div>
      <div className='container-two'>
        <h1>Order Now</h1>
        <div className='card-container'>
          <div className='burger-container'>
            <img className="burger" alt="BURGER" src='https://res.cloudinary.com/draisdub8/image/upload/v1721889141/Simplotel_Assignment/img4_cl998d.jpg'/>
          <h1 className='burger-text'>BURGER</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='pizza-container'>
            <img className="pizza" alt="PIZZA" src='https://res.cloudinary.com/draisdub8/image/upload/v1721889141/Simplotel_Assignment/img2_qiztsb.jpg'/>
          <h1 className='pizza-text'>PIZZA</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='pasta-container'>
            <img className="pasta" alt="PASTA" src='https://res.cloudinary.com/draisdub8/image/upload/v1721889141/Simplotel_Assignment/img3_laqgsm.jpg'/>
          <h1 className='pasta-text'>PASTA</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
        
        </div>
        <button className='button'>Order Now</button>
      </div>
    </div>
  );
}

export default Home;
