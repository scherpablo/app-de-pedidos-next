"use client";

import useStore from "@/src/store";
import ProductDetail from "./ProductDetail";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/cerate-order-action";
import { orderSchema } from "@/src/schema";

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const totalOrder = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      totalOrder,
      order
    };

    const result = orderSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return
    }

    const response = await createOrder(data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
    }
  };

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

      {order.length === 0 ? (
        <p className="text-2xl font-semibold text-center mt-5">
          El pedido esata vacio
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

      <form action={handleCreateOrder} className="w-full mt-10 space-y-5">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Tu nombre"
          className="p-2 border rounded-lg w-full"
        />
        <input
          type="number"
          name="phone"
          id=""
          placeholder="Tu telefóno"
          className="p-2 border rounded-lg w-full"
        />

        <input
          type="submit"
          value="confirmar pedido"
          className="text-center font-xl text-white bg-black p-3 rounded-lg w-full uppercase cursor-pointer font-bold"
        />
      </form>
    </aside>
  );
};
export default OrderSummary;
