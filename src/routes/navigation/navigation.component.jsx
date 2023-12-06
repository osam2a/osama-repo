import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const navigation = () => {
  return (
    <>
      <div className='navigation p-5 flex justify-between items-center'>
        <div>
          <Link to='/'>
            <div className='w-fit'>logo</div>
          </Link>
        </div>

        <div className='navigation  flex justify-evenly items-center gap-6 text-lg font-bold '>
          <div>
            <Link to='/home'>HOME</Link>
          </div>

          <div>
            <Link to='/header'>SHOP</Link>
          </div>

          <div>
            <Link to='/test'>CARDS</Link>
          </div>

          <div>
            <Link to='/header'>ABOUT</Link>
          </div>
          <div>
            <Link to='/auth'>Sign In</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default navigation;
