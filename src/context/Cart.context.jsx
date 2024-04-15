import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const flag = cartItems.find((e) => e.id === productToAdd.id);

  if (flag)
    return cartItems.map((element) =>
      element.id === productToAdd.id
        ? { ...element, quntity: element.quntity + 1 }
        : element
    );

  return [...cartItems, { ...productToAdd, quntity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const flag = cartItems.find(
    (e) => e.quntity >= 2 && e.id === productToRemove.id
  );

  if (flag)
    return cartItems.map((element) => {
      if (element.id === productToRemove.id && element.quntity >= 2)
        return { ...element, quntity: element.quntity - 1 };
      else return element;
    });
  return cartItems.filter((e) => e.id !== productToRemove.id);
};

export const clearItem = (cartItems, productToRemove) => {
  return cartItems.filter((e) => e.id !== productToRemove.id);
};

export const CartsContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  /* ***** ***  ***** */
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  /* ***** ***  ***** */
  totalPrice: 0,
  setTotalPrice: () => {},
  /********** */
});

export const CartsProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCounter = items.reduce(
      (total, cartItem) => total + cartItem.quntity,
      0
    );
    const newTotalPrice = items.reduce(
      (total, cartItem) => (total += cartItem.quntity * cartItem.price),
      0
    );

    setCartCounter(newCartCounter);
    setTotalPrice(newTotalPrice);
  }, [items]);

  const addItemToCart = (productToAdd) => {
    setItems(addCartItem(items, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setItems(removeCartItem(items, productToRemove));
  };
  const clearCart = (productToClear) => {
    setItems(clearItem(items, productToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    /** */
    items,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    /* */
    cartCounter,
    totalPrice,
  };

  return (
    <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
  );
};
