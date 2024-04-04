"use client"

import useStore from "@/src/store";
import ProductDetail from "./ProductDetail";

const OrderSummary = () => {
  const order = useStore((state) => state.order);

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

      {order.length === 0 ? <p className="text-2xl font-bold text-center mt-5">El carrito esata vacio</p> : (
        <div className="mt-5">
          {order.map(item => (
            <ProductDetail 
            key={order.id}
            item={item}
            />
          ))}
        </div>
      )}
    </aside>
  );
};
export default OrderSummary;
