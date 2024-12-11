import React from 'react';
import styled from 'styled-components';
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-8 bg-[#17a2b8] px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center text-center gap-6">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Do U want a professional <br /> REPAIR & FIXES ?
        </p>
        <p className="text-white text-lg font-light">
          A professional platform to connect and get repairs done—fast, reliable, and guaranteed
        </p>

        <div className='flex flex-col md:flex-row mb-5'>
          <div className='px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-2 text-[-12px] hover:bg-black hover:text-white transition-all duration-300 text-black-500 cursor-pointer'>
          <b>Performance:</b>
          <p>Our repairs are reliable, fast, and guaranteed.</p>
          </div>
          <div className='px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-2 text-[-12px] hover:bg-black hover:text-white transition-all duration-300 text-black-500 cursor-pointer'>
            <b>Simplicity:</b>
            <p>Connect with trusted repairman in your area.</p>
          </div>
          <div className='px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-2 text-[-12px] hover:bg-black hover:text-white transition-all duration-300 text-black-500 cursor-pointer'>
            
            <b>Competence:</b>
            <p>Get matched with a repairman anytime, <br /> tailored to your busy lifestyle.</p>
          </div>
        </div>

        <StyledWrapper>
          <a href="#speciality" className="button-wrapper">
            <button className="button">
              <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              Connect Now!
            </button>
          </a>
        </StyledWrapper>
      </div>
    </div>


  )
}


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Ensures stacking of text and button */
  // min-height: 100vh; 

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



export default Header