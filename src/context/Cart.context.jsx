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

  const setTotalPriceEffect = useEffect(() => {
    const newCartCounter = items.reduce(
      (total, cartItem) => total + cartItem.quntity,
      0
    );
    setCartCounter(newCartCounter);
  }, [items]);

  const setQuntityEffect = useEffect(() => {
    const newTotalPrice = items.reduce(
      (total, cartItem) => (total += cartItem.quntity * cartItem.price),
      0
    );
    setTotalPrice(newTotalPrice);
  }, [items]);

  const getItemsFromLocalStorage = useEffect(() => {
    if (localStorage.getItem(`pro`))
      setItems(JSON.parse(localStorage.getItem(`pro`)));
  }, []);

  const addItemToCart = (productToAdd) => {
    const newItem = addCartItem(items, productToAdd);
    localStorage.setItem(`pro`, JSON.stringify(newItem));
    setItems(newItem);
  };

  const removeItemFromCart = (productToRemove) => {
    const removeItem = removeCartItem(items, productToRemove);
    setItems(removeItem);
    localStorage.setItem(`pro`, JSON.stringify(removeItem));
  };

  const clearCart = (productToClear) => {
    const clearCart = clearItem(items, productToClear);
    setItems(clearCart);
    localStorage.setItem(`pro`, JSON.stringify(clearCart));
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
