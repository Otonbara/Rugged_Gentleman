"use client";

import { useCart } from "../context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaCreditCard, FaUniversity, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import Image from "next/image";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Check if coming from "Buy Now"
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const size = searchParams.get("size");

  // If coming from "Buy Now", create a single item list
  const checkoutItems =
  name && price && image
    ? [{ 
        name, 
        price: Number(price) || 0,  // Ensure valid number
        image, 
        size: size || "N/A", 
        quantity: 1 
      }]
    : cart;

  // Calculate total price
  const total = checkoutItems.reduce((acc, item) => {
    const cleanPrice =
      typeof item.price === "string"
        ? Number((item.price as string).replace(/[^\d.]/g, ""))
        : item.price || 0;
    return acc + cleanPrice * (item.quantity || 1);
  }, 0);

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowPaymentModal(false);
        clearCart();
        router.push("/");
      }, 2000);
    }, 2000);
  };

  return (
    <section className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Display Items in Checkout */}
      {checkoutItems.length === 0 ? (
        <p className="text-center text-gray-600">No items to checkout.</p>
      ) : (
        checkoutItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 bg-gray-100 p-4 rounded-md mb-4">
            <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              {item.size && <p className="text-gray-600">Size: {item.size}</p>}
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-green-600 font-bold">₦{item.price.toLocaleString()}</p>
            </div>
          </div>
        ))
      )}      

      <div className="p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          Total Amount: <span className="text-green-600 font-bold">₦{total.toLocaleString()}</span>
        </h2>
      </div>

      {/* Payment Method Selection */}
      <div className="mt-4">
        <label className="block text-lg font-semibold mb-2">Select Payment Method:</label>
        <div className="flex flex-col gap-2">
          {["card", "bank_transfer", "cash_on_delivery"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer border p-2 rounded-md hover:bg-gray-100">
              <input type="radio" name="payment" value={method} checked={paymentMethod === method} onChange={(e) => setPaymentMethod(e.target.value)} />
              {method === "card" && <FaCreditCard className="text-blue-600" />}
              {method === "bank_transfer" && <FaUniversity className="text-green-600" />}
              {method === "cash_on_delivery" && <FaMoneyBillWave className="text-yellow-600" />}
              {method.replace("_", " ").toUpperCase()}
            </label>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500" onClick={handleCheckout}>
        Confirm & Pay
      </button>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96 text-center">
            <h2 className="text-xl font-semibold mb-4">Confirm Payment</h2>
            <p>Paying with {paymentMethod.replace("_", " ").toUpperCase()}</p>
            {isProcessing ? (
              <ImSpinner2 className="animate-spin text-green-600 text-3xl mx-auto my-4" />
            ) : paymentSuccess ? (
              <FaCheckCircle className="text-green-600 text-3xl mx-auto my-4" />
            ) : (
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 mt-4" onClick={handlePayment}>
                Confirm Payment
              </button>
            )}
            <button className="text-red-600 mt-4 block mx-auto" onClick={() => setShowPaymentModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
