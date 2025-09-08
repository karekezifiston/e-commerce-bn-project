import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { dummyShowsData } from "../../assets/assets";

// 1️⃣ Define types
interface FoodItem {
  _id: string;
  title: string;
  price: number;
  location: string;
  backdrop_path: string;
}

interface StoreContextType {
  food_list: FoodItem[];
  cartItems: Record<string, number>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
}

interface StoreContextProviderProps {
  children: ReactNode;
}

// 2️⃣ Create context
export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [food_list] = useState<FoodItem[]>(dummyShowsData); // no setter needed
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (itemId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      const itemInfo = food_list.find((item) => item._id === itemId);
      if (itemInfo) totalAmount += itemInfo.price * quantity;
    }
    return totalAmount;
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const contextValue: StoreContextType = {
    food_list,
    cartItems,
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

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
