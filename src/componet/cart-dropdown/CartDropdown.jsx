import { useContext } from 'react';
import { CartsContext } from '../../context/Cart.context';
import Button from '../button/Button.component';

const CartDropdown = () => {
  const once = (fn) => {
    let done = false;
    return (...args) => {
      if (!done) {
        done = true;

        fn(...args);
      } else done = false;
    };
  };

  const print = () => {
    console.log(`hi`);
  };
  const hh = once(print);
  once(print);
  once(print);
  return (
    <div
      className={` cart-dropdown-container bg-white w-48 h-80 border border-black absolute z-50 -right-4 top-16`}
    >
      <div className='cart-items h-4/5'></div>
      <Button
        onClick={() => {
          hh();
        }}
        type='button'
        moreProps='m-auto  block '
      >
        go to cheakout
      </Button>
    </div>
  );
};

export default CartDropdown;
