import { FiHeart } from "react-icons/fi";
import camera from "../assets/gearcamera.jpg";
import xbox from "../assets/xbox.jpg";
import iwatch from "../assets/shortwatch.jpg";

const ProductShow = () => {
  const products = [
    {
      discount: "40% OFF",
      category: "ELECTRONICS",
      name: "Samsung Gear 360 Camera",
      price: "$29.00",
      oldPrice: "$48.00",
      sold: 50,
      available: 75,
      img: camera,
    },
    {
      discount: "30% OFF",
      category: "ELECTRONICS",
      name: "Microsoft Xbox One Wireless Controller",
      price: "$499.00",
      oldPrice: "$699.00",
      sold: 25,
      available: 40,
      img: xbox,
    },
    {
      discount: "30% OFF",
      category: "ELECTRONICS",
      name: "Apple Watch Series 5",
      price: "$499.00",
      oldPrice: "$599.00",
      sold: 25,
      available: 40,
      img: iwatch,
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="pb-3 px-4 pt-4">
        <h1 className="text-xl font-semibold mb-2">FEATURED PRODUCTS</h1>
        <div className="flex items-center w-full h-0.5">
          <div className="w-20 h-[2px] bg-amber-500"></div>
          <div className="flex-1 h-[1px] bg-black/10"></div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden"
          >
            {/* Discount + heart */}
            <div className="flex items-center justify-between px-5 pt-3">
              <p
                className="text-white text-sm px-2 py-1 rounded"
                style={{ backgroundColor: "#188038" }}
              >
                {product.discount}
              </p>
              <FiHeart className="text-gray-700 cursor-pointer" />
            </div>

            {/* Image with hover effect */}
            <div className="flex justify-center py-4 relative group">
              <img
                src={product.img}
                alt={product.name}
                className="h-40 object-contain"
              />
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 
                           bg-amber-300 text-black text-sm px-4 py-2 rounded-md
                           opacity-0 translate-y-3 
                           group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-500 ease-in-out cursor-pointer shadow-md"
              >
                Add to Cart
              </div>
            </div>

            {/* Details */}
            <div className="px-5 pb-4">
              <p className="text-sm text-gray-500">{product.category}</p>
              <h4 className="font-semibold">{product.name}</h4>
              <h4 className="text-lg font-bold">
                {product.price}{" "}
                <span className="line-through text-gray-400 text-sm">
                  {product.oldPrice}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShow;
