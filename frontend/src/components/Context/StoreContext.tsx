import { createContext, useState, useEffect } from "react";
import { dummyShowsData } from "../../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState(dummyShowsData); // use local data
  const [isLoading, setIsLoading] = useState(true);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 0) - 1;
      if (newCount <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: newCount };
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      const itemInfo = food_list.find((item) => item._id === itemId);
      if (itemInfo) totalAmount += itemInfo.price * quantity;
    }
    return totalAmount;
  };

  // Simulate loading (optional)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300); // fake load delay
    return () => clearTimeout(timer);
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>Loading local food items...</p>
      </div>
    );
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
