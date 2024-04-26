import { useContext } from 'react';
import Button from '../button/Button.component';
import { CartsContext } from '../../context/Cart.context';

const PorductCard = ({ props }) => {
  const { id, name, imageUrl, price } = props;
  const { addItemToCart } = useContext(CartsContext);

  const addProductToCart = () => {
    addItemToCart(props);
  };

  return (
    <div
      id={id}
      className='group relative min-h-[300px] flex flex-col items-center justify-center gap-4 border border-gray-300 my-2 py-2 px-3 rounded-sm hover:border-black hover:bg-gray-200 transition-all'
    >
      <div className=' h-4/6 overflow-hidden group-hover:scale-105 transition-all'>
        <img src={imageUrl} alt={name} className='' />
      </div>

      <span className='name text-lg font-bold '>{name}</span>

      <span className='price text-lg font-bold '>{price}</span>

      <Button
        onClick={addProductToCart}
        type='button'
        buttonType='inverted'
        moreProps='uppercase w-3/5 font-bold absolute bottom-1/3 left-1/2 -translate-x-1/2 - hidden group-hover:block'
      >
        add to cart
      </Button>
    </div>
  );
};

export default PorductCard;
