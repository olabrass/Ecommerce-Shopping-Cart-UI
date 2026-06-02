import { useState } from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const {cart} = useCart();
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <>

<header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
    
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
            <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
                <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2">
                        Cart Items
                    </h2>
                </div>
            </div>
        )}
    </div>

</header>
        </>
    )
}

export default Header;