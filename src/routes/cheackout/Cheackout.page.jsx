import React, { useContext } from 'react';
import { CartsContext } from '../../context/Cart.context';
import CheackoutItems from '../../componet/cheakout/Cheackout.component';

const Cheackout = () => {
  const { items, totalPrice } = useContext(CartsContext);
  const address = ['product', 'name', 'quntity', 'price'];

  return (
    <div className='border-b-2 border-gray-400'>
      <div className='flex justify-evenly items-center gap-12 px-2 text-lg font-semibold'>
        {address.map((e, index) => (
          <h1 key={index}>{e}</h1>
        ))}
      </div>

      {items.map((element) => (
        <CheackoutItems key={element.id} props={element} />
      ))}
      {totalPrice != 0 && (
        <h1 className='text-3xl font-extrabold text-right uppercase '>
          total : ${totalPrice}
        </h1>
      )}
    </div>
  );
};

export default Cheackout;
