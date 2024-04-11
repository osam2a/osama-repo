import { useContext } from 'react';
import { CartsContext } from '../../context/Cart.context';

import ShoppingIcon from './shopping-bag.svg?react';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartsContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div
      className=' cart-icon-container relative cursor-pointer '
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className='w-8 text-red-600 top-0 ' />
      <span className='item-count text-sm absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
        0
      </span>
    </div>
  );
};
export default CardIcon;
