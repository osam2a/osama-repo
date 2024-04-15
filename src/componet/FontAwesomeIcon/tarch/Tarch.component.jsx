import { useContext } from 'react';
import { CartsContext } from '../../../context/Cart.context';
import Icon from '../FontAwesomeIcon.component';
export const Tarch = ({ target }) => {
  const { clearCart } = useContext(CartsContext);
  return (
    <Icon nameIcon={'fa-solid fa-trash'} onClick={() => clearCart(target)} />
  );
};
export default Tarch;
