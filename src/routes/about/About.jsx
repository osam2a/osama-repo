import React, { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const About = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1 className='text-5xl m-auto font-bold w-fit'>this page Home</h1>
      <button
        type='button'
        className='block  active:bg-green-600 hover:bg-white rounded-xl bg-black transition-all text-3xl text-red-500 hover:text-black text bg-center px-2 py-3 m-auto my-7'
      >
        decrees
      </button>
      <h2 className='text-5xl m-auto font-bold w-fit'>
        {currentUser && currentUser.email}
      </h2>
    </div>
  );
};

export default About;
