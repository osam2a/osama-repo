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

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) getDataFromAuht(user);
      setCurrentUser(user);
    });
    // console.log(unsubscribe());
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
