
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({product}) => {
const {AddToCart} = useCart();
return (
<div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  {/* Image Section */}
  <div className="relative overflow-hidden bg-gray-50">
    <img
      src={product.image}
      alt={product.name}
      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Price Badge */}
    <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 backdrop-blur-md shadow-lg">
      <span className="font-bold text-gray-900">
        ${product.price.toFixed(2)}
      </span>
    </div>

    {/* Category Badge */}
    <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
      {product.category}
    </div>
  </div>

  {/* Content */}
  <div className="p-6">

    {/* Title + Rating */}
    <div className="flex items-start justify-between gap-3">
      <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
        {product.name}
      </h2>

      <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-600">
        ⭐ {product.rating}
      </div>
    </div>

    {/* Description */}
    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
      {product.description}
    </p>

    {/* Stock / Quantity */}
    <div className="mt-4 flex items-center justify-between text-sm">
      <span className="text-gray-500">
        Stock:
        <span className="ml-1 font-semibold text-gray-800">
          {product.quantity}
        </span>
      </span>

      {product.quantity < 20 ? (
        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
          Low Stock
        </span>
      ) : (
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
          In Stock
        </span>
      )}
    </div>

    {/* Footer */}
    <div className="mt-6 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-400">
          Price
        </p>
        <p className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => AddToCart(product)}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-300 cursor-pointer"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  </div>
</div>
);
}
export default ProductCard;