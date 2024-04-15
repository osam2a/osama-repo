import React, { useContext } from 'react';
import { CartsContext } from '../../context/Cart.context';
import Tarch from '../FontAwesomeIcon/tarch/Tarch.component';

const PurchasItem = ({ props }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartsContext);
  const { id, name, imageUrl, price, quntity } = props;

  const removeItem = () => {
    removeItemFromCart(props);
  };

  const addItem = () => {
    addItemToCart(props);
  };

  return (
    <div
      id={id}
      className='relative h-40 w-full grid grid-cols-4 grid-rows-1 items-center justify-items-center  p-3 my-4 border-t-2 border-gray-400  text-xl '
    >
      <img src={imageUrl} alt={name} className='h-full ' />

      <h1 className='font-extrabold font-serif'>{name}</h1>

      <div className=' h-fit w-full flex items-center justify-center gap-2'>
        <span onClick={addItem} className='cursor-pointer'>
          +
        </span>
        <h2> {quntity} </h2>
        <span onClick={removeItem} className='cursor-pointer'>
          -{' '}
        </span>
      </div>

      <h2> {price} </h2>
      <Tarch target={props} moreProps={`static`} />
    </div>
  );
};

export default PurchasItem;
