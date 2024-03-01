import React, { createContext, useState } from 'react';
//as the actual the value you wnat to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
