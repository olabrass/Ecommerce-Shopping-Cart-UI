import { useState } from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const {cart, removeFromCart, clearCart} = useCart();
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

    return (
        <>

<header className="sticky top-0 z-50 bg-white shadow-md px-24 py-4 flex justify-between items-center">
    
    <div className="flex items-center gap-2">
        <FaStore className="text-3xl text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">
            PhillyMart
        </h1>
    </div>

    <div className="relative">
        <button className="cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
        <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer" />

        {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
            </span>
        )}
        </button>
        {showDropdown && (
            <div className="absolute right-0 mt-2 w-120 bg-white border rounded shadow-lg z-50 px-2">
                <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2">
                        Cart Items
                    </h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-sm">Your Cart is Empty</p>
                    ) : (<> 
                  <ul className="max-h-80 overflow-y-auto space-y-3 pr-2">
  {cart.map((item) => (
    <li
      key={item.id}
      className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Product Info */}
      <div className="flex items-center gap-4">
        {/* Product Avatar */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white">
            <img
      src={item.image}
      alt={item.name}
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">
            {item.name}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
              Qty: {item.qty}
            </span>

            <span className="text-sm text-gray-500">
              ${item.price} each
            </span>
          </div>
        </div>
      </div>

      {/* Price & Action */}
      <div className="flex flex-col items-end gap-2">
        <p className="text-lg font-bold text-gray-900">
          ${(item.qty * item.price).toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-all hover:bg-red-500 hover:text-white"
        >
          Remove
        </button>
      </div>
    </li>
  ))}
</ul>
        <div className="mt-4 flex justify-between font-semibold p-4">
            <span>Total:</span>
            <span>${total}</span>
        </div>
        <button onClick={clearCart} className="mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600">
        Clear Cart
        </button>


                     </>)}
                </div>
            </div>
        )}
    </div>

</header>

<div className="mx-auto max-w-7xl px-16 py-10">
  {/* Badge */}
  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
    Built with React + JSON Server
  </div>

  {/* Main Title */}
  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
    Product Catalogue
  </h1>

  {/* Subtitle */}
  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
    A modern e-commerce product listing built with React, powered by a mock REST API using JSON Server.
    Clean UI, responsive design, and scalable architecture.
  </p>

  {/* Optional Stats / Meta */}
  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
    <span className="rounded-lg bg-gray-100 px-3 py-1">
      ⚛️ React Frontend
    </span>
    <span className="rounded-lg bg-gray-100 px-3 py-1">
      🗄️ JSON Server API
    </span>
    <span className="rounded-lg bg-gray-100 px-3 py-1">
      🛒 E-commerce UI
    </span>
    <span className="rounded-lg bg-gray-100 px-3 py-1">
      📱 Fully Responsive
    </span>
  </div>

  {/* Divider */}
  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
</div>
        </>
    )
}

export default Header;