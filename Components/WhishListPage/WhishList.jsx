import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [whishlistedItems, setWhishlistedItems] = useState([]);

  return (
    <WishlistContext.Provider value={{ whishlistedItems, setWhishlistedItems }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
