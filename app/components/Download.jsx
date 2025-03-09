import React from 'react';

const Download = () => {
  return (
    <div className='bg-yellow-400 xl:h-[565px] h-auto py-10 xl:py-0'>
      <div className='flex flex-col xl:flex-row justify-center items-center mt-10 xl:mt-32 px-4'>
        {/* Text Container */}
        <div className='xl:ms-10 p-5 w-full xl:w-2/6 text-center xl:text-left'>
          <h2 className='text-2xl font-semibold text-amber-700'>DOWNLOAD MOBILE APP AND</h2>
          <h2 className='text-4xl xl:text-6xl font-bold text-amber-900'>SAVE UPTO 20%</h2>
          <p className='text-amber-800 mt-4'>
            Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius
          </p>
          <div className='flex flex-wrap mt-4 justify-center xl:justify-start items-center gap-6'>
            <img src="/appstore.png" alt="App Store" className='w-40 xl:w-48  ' />
            <img src="/googleplay.png" alt="Google Play" className='w-40 xl:w-48' />
          </div>
        </div>

        {/* Image Container */}
        <div className='relative mt-10 xl:mt-0 xl:bottom-20'>
          <img src="e-shop.png" alt="E-Shop" className='w-64 xl:w-auto' />
        </div>
      </div>
    </div>
  );
};

export default Download;