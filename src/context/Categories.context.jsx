import React, { useState, createContext, useEffect } from 'react';
import { getCollectionAndDcuments } from '../utils/firebase/firebase.utils.jsx';

export const CategoryContext = createContext({
  categoryMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDcuments();
      setCategoryMap(categoryMap);
    };
    getCategoryMap();
  }, []);

  const value = { categoryMap };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
