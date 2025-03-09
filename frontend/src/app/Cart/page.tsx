"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  // Debug: Log cart items
  console.log("Cart contents:", cart);

  // Fix NaN issue by ensuring price is a valid number
  const subtotal = cart.reduce((acc, item) => {
    // Remove ₦ and commas, then convert to a number
    const cleanPrice = Number(String(item.price).replace(/[^\d.]/g, "")) || 0;
    return acc + cleanPrice * (item.quantity || 1);
  }, 0);

  return (
    <section className="mx-auto px-4 py-6 max-w-2xl min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Subtotal */}
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold">
              Subtotal: ₦{subtotal.toLocaleString()}
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-between">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
              onClick={() => router.push(`/Checkout?cart=${encodeURIComponent(JSON.stringify(cart))}`)}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
