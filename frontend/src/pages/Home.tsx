import { useContext } from "react";
import FeatureSection from "../components/FeatureSection";
import cartImage from "../../public/assets/cake-cart.png";
import { StoreContext } from "../components/Context/StoreContext";

// 1️⃣ Define a type for the food items (same as context)
interface FoodItem {
  _id: string;
  title: string;
  price: number | string;
  location: string;
  backdrop_path: string;
}

const Home = () => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) return null; // context fallback

  const { cartItems, food_list, removeFromCart } = storeContext;

  // Calculate total count in cart
  const cartCount = Object.values(cartItems).reduce((total, num) => total + num, 0);

  // Parse price (supports strings like "800k" or numbers)
  const parsePrice = (price: string | number) => {
    if (typeof price === "number") return price;
    const lower = price.toLowerCase();
    if (lower.includes("k")) return parseFloat(lower) * 1000;
    if (lower.includes("m")) return parseFloat(lower) * 1000000;
    return parseFloat(lower);
  };

  return (
    <div className="grid grid-cols-[1fr_17rem] gap-1 w-full px-6">
      {/* Feature Section */}
      <FeatureSection />

      {/* Cart Section */}
      <div className="flex justify-center mt-22">
        <div className="flex-col bg-white h-600 max-h-70 w-94 flex justify-start rounded-lg p-3">
          {/* Cart Header */}
          <div className="text-red-700 font-bold mb-2 text-2xl">
            Your Cart ({cartCount})
          </div>

          {cartCount === 0 ? (
            // Empty Cart
            <div className="flex flex-col items-center">
              <img src={cartImage} width={100} alt="cart" />
              <div className="text-orange-950 text-xs text-center">
                Your added items will appear here
              </div>
            </div>
          ) : (
            // Filled Cart
            <div className="flex flex-col gap-3 overflow-y-auto max-h-64 pr-1">
              {food_list
                .filter((item: FoodItem) => cartItems[item._id])
                .map((item: FoodItem) => {
                  const quantity = cartItems[item._id];
                  const totalPrice = parsePrice(item.price) * quantity;

                  return (
                    <div key={item._id}>
                                                  {/* Image */}
                            <img
                              src={item.backdrop_path} // <-- use the imported local image
                              alt={item.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                      <span className="text-sm font-medium truncate text-zinc-800 text-wrap w-">
                        {item.location}
                      </span>
                      <div className="flex items-center gap-2 border-b pb-1">
                        <div className="flex flex-col flex-1">
                          <span className="flex gap-2 items-center text-sm text-gray-600">
                            <span className="text-red-500 font-bold">{quantity}× </span>$
                            {parsePrice(item.price).toLocaleString()}
                            <span className="text-sm font-bold text-yellow-700">
                              ${totalPrice.toLocaleString()}
                            </span>
                          </span>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="ml-1 text-zinc-400 text-xs font-bold border pt-0 pb-0.5 px-1.5 rounded-2xl hover:text-red-700"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
