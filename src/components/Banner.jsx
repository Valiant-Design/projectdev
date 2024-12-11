import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Banner = () => {
    const navigate = useNavigate();

  return (
    <div className='flex bg-[#17a2b8] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'> 
        {/* Left Side */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Connect with trusted</p>
                <p className='mt-3 mb-10'>repair professionals.</p>
            </div>
            {/* <button  onClick={() => {navigate('/login'), scrollTo(0, 0)}} className='bg-white text-smsm:text-base text=gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300'>Create Account</button> */}
            <StyledWrapper>
              <a href="#speciality" className="button-wrapper">
                <button onClick={() => {navigate('/login'), scrollTo(0, 0)}} className="button">
                  <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                  ConnectNow!
                </button>
              </a>
            </StyledWrapper>
        </div>

        {/* RightSide */}
        <div className='hidden md:block md:w-1/2 lg-w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-10 max-w-md' src={assets.banner_img} alt="" />
        </div>
    </div>

  )
}



const StyledWrapper = styled.div`
  .button {
    width: 170px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: white;
    border-radius: 30px;
    color: rgb(19, 19, 19);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: 0.2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    padding-left: 8px;
    transition-duration: 0.5s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  .bell path {
    fill: rgb(19, 19, 19);
  }

  .button:hover {
    background-color: #5bc0de;
    transition-duration: 0.5s;
    color: white;
  }

  .button:active {
    transform: scale(0.97);
    transition-duration: 0.2s;
  }

  .button:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }
`;


export default Banner