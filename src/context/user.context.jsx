import React, { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  getDataFromAuht,
} from '../utils/firebase/firebase.utils';
//as the actual the value you wnat to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const NumberUser = createContext({
  currentNumber: null,
  setNumber: () => null,
});
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  const [currentNumber, setNumber] = useState(0);
  const valNumber = { currentNumber, setNumber };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) getDataFromAuht(user);
      setCurrentUser(user);
    });
    // console.log(unsubscribe());
    return unsubscribe;
  }, []);
  return (
    <NumberUser.Provider value={valNumber}>
      {' '}
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </NumberUser.Provider>
  );
};

export { UserProvider };
