import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartsContext } from '../../context/Cart.context';
import Button from '../button/Button.component';
import CartItem from '../CartItem/CartItem.component';
const CartDropdown = () => {
  const { items } = useContext(CartsContext);
  const navigate = useNavigate();
  const goToCheackoutHundler = () => {
    navigate('/cheackout');
  };
  return (
    <div
      className={` cart-dropdown-container bg-white w-52 h-96 border border-black absolute z-50 -right-4 top-16`}
    >
      <div className='cart-items h-4/5 overflow-auto mb-3 flex flex-col gap-5 p-2 '>
        {items.length > 0 ? (
          items.map((item, index) => {
            return <CartItem key={index} props={item} />;
          })
        ) : (
          <h1 className='text-center font-extrabold uppercase text-xl m-auto text-cyan-600'>
            it is empaty
          </h1>
        )}
      </div>
      <Button
        onClick={goToCheackoutHundler}
        type='button'
        moreProps='m-auto block '
      >
        go to cheakout
      </Button>
    </div>
  );
};

export default CartDropdown;
