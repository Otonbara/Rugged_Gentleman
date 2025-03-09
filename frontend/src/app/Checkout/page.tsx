"use client";

import { Suspense } from "react";
import Checkoutcontent from "../components/CheckoutContent";

export default function Checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkoutcontent />
    </Suspense>
  );
}