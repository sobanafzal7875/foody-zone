import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className=' text-black py-8 mt-10 mb-10 '>
      <div className='container mx-auto px-4'>
        {/* Logo and Social Icons */}
        <div className='flex flex-col items-center space-y-6'>
          <img src="/logo.png" alt="Logo" className='w-32 h-auto' />
          <div className='flex space-x-6'>
            <FacebookIcon className='cursor-pointer hover:text-yellow-400 transition-colors duration-500' />
            <TwitterIcon className='cursor-pointer hover:text-yellow-400 transition-colors  duration-300' />
            <YouTubeIcon className='cursor-pointer hover:text-yellow-400 transition-colors  duration-300' />
            <PinterestIcon className='cursor-pointer hover:text-yellow-400 transition-colors duration-300' />
            <InstagramIcon className='cursor-pointer hover:text-yellow-400 transition-colors duration-300' />
          </div>
        </div>

        {/* Navigation Links */}
        <div className='flex justify-center flex-wrap gap-4 mt-8'>
          {['ABOUT', 'MENU', 'ORDER NOW', 'LOCATION', 'GALLERY', 'CONTACT'].map((item, index, array) => (
            <span
              key={item}
              className={`cursor-pointer hover:text-yellow-400 transition-colors duration-300 ${
                index !== array.length - 1 ? 'border-r border-gray-600 pr-4' : ''
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Copyright Text */}
        <div className='text-center mt-8 text-gray-400'>
          <p>2021 © Copyright, Testo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;