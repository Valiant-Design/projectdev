import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div className='p-10 md:p-20 bg-gray-50 mt-10'>
      <div className='text-center text-4xl font-semibold text-gray-700'>
        <p>About <span className='text-[#17a2b8]'>Us</span></p>
      </div>

      <div className='my-12 flex flex-col md:flex-row items-center justify-between gap-16'>
        <div className='text-lg text-gray-600 md:w-1/2 space-y-6'>
          <p className='text-xl font-medium text-gray-800'>
            Welcome to <span className='font-bold text-[#17a2b8]'>Repair All</span>
          </p>
          <p  className='mb-10'>
            Repair All is your go-to platform for connecting with skilled repair specialists, making it easy and hassle-free to solve any repair needs. We understand the frustration of finding the right professional to fix your broken appliances, gadgets, vehicles, or home essentials. Whether it’s a plumber, electrician, carpenter, mechanic, or any other repair expert, Repair All ensures you’re just a few clicks away from trusted help.

            With our network of verified specialists and a user-friendly interface, we aim to save you time and provide peace of mind by delivering top-notch repair services tailored to your needs.

            Let Repair All handle the hard part—so you can get back to what matters most!.
          </p>
          
          <p className="text-lg font-bold text-[#17a2b8]">Our Vision</p>
          <p>
            Our vision is to create a seamless healthcare experience for every user. We bridge the gap between patients and healthcare providers, making it easier to access the care you need when you need it.
          </p>
        </div>
        <img className='w-full max-w-[300px] md:max-w-[450px] rounded-xl shadow-lg' src={assets.header_img} alt="About Img" />
      </div>

      <div className='text-xl my-6 text-center text-gray-700'>
        <p>Why <span className='font-semibold text-[#17a2b8]'>Choose Us</span></p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='flex flex-col gap-5 p-6 bg-white border rounded-lg shadow-md hover:bg-[#17a2b8] hover:text-white transition-all duration-300'>
          <b className='text-lg'>Performance</b>
          <p className='text-sm'>
            Our services are reliable, fast, and guaranteed.
          </p>
        </div>
        <div className='flex flex-col gap-5 p-6 bg-white border rounded-lg shadow-md hover:bg-[#17a2b8] hover:text-white transition-all duration-300'>
          <b className='text-lg'>Simplicity</b>
          <p className='text-sm'>
            Connect with trusted professionals in your area with ease.
          </p>
        </div>
        <div className='flex flex-col gap-5 p-6 bg-white border rounded-lg shadow-md hover:bg-[#17a2b8] hover:text-white transition-all duration-300'>
          <b className='text-lg'>Competence</b>
          <p className='text-sm'>
            Get matched with professionals tailored to your needs, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
