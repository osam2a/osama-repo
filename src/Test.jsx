import React from 'react';

const Test = () => {
  return (
    <div className='flex flex-col gap-6 my-20 mx-auto w-fit '>
      <div className='flex gap-9'>
        <div className='w-14 h-14 rounded-lg bg-red-400 peer'></div>
        <div
          className='w-14 h-14 rounded-lg bg-red-400 duration-1000 ease-out peer-hover:shrinkLabel
        '
        ></div>
      </div>
    </div>
  );
};

export default Test;
