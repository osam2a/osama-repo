import { useContext } from 'react';
import { CartsContext } from '../../context/Cart.context';
import Tarch from '../FontAwesomeIcon/tarch/Tarch.component';
import Button from '../button/Button.component';
const CartItem = ({ props }) => {
  const { id, name, imageUrl, price, quntity } = props;

  const { removeItemFromCart } = useContext(CartsContext);

  const removItem = () => {
    removeItemFromCart(props);
  };

  return (
    <div
      id={id}
      className='w-full flex flex-wrap justify-evenly items-center gap-1 font-sans relative'
    >
      <Tarch target={props} />
      <img src={imageUrl} alt='sdf' className='w-3/5 ' />
      <div className='w-full flex flex-col justify-center items-center  '>
        <h1 className='font-medium break-before '>{name}</h1>
        <h2 className='text-base font- w-fit'>
          {quntity}* ${price}
        </h2>
      </div>
      <Button
        type='button'
        buttonType='google'
        moreProps=' px-4 py-1 font-medium border-none hover:bg-red-500 '
        onClick={removItem}
      >
        remove
      </Button>
    </div>
  );
};

export default CartItem;
