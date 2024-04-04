"use client";

import useStore from "@/src/store";
import ProductDetail from "./ProductDetail";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const totalOrder = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

      {order.length === 0 ? (
        <p className="text-2xl font-bold text-center mt-5">
          El carrito esata vacio
        </p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductDetail key={item.id} item={item} />
          ))}
        </div>
      )}

      <p className="text-2xl font-bold mt-10 text-center">
        Total a pagar:{" "}
        <span className="text-indigo-700 font-black">
          {formatCurrency(totalOrder)}
        </span>
      </p>
    </aside>
  );
};
export default OrderSummary;
