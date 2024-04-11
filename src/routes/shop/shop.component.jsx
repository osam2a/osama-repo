import { useContext } from 'react';

import { ProductContext } from '../../context/Products.context';
import { CartsContext } from '../../context/cart.context';

import ProductCard from '../../componet/product-card/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductContext);
  // const gg = useContext(CartsContext);
  // console.log(gg);
  return (
    <div className='card-container grid grid-cols-4 max-sm:grid-cols-1 gap-x-2 gap-y-1 '>
      {products.map((element) => {
        return <ProductCard props={element} key={element.id} />;
      })}
    </div>
  );
};

export default Shop;
