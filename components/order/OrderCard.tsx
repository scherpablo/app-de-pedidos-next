import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import completeOrder from "@/actions/complete-order-action";

type OrderCardProps = {
  order: OrderWithProducts;
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4 shadow-lg"
      >
        <p className="text-2xl font-bold">
          Cliente: <span className="font-semibold">{order.name}</span>
        </p>
        <p className="text-lg font-semibold">Detalle del Pedido:</p>
        <dl className="mt-6 space-y-4">
          {order.orderProducts.map((product) => (
            <div
              key={product.productId}
              className="flex items-center gap-2 border-gary-200 pt-4"
            >
              <dt className="flex items-center">
                <span className="font-bold">
                  ({product.quantity}) {""}
                </span>
              </dt>
              <dd className="italic font-semibold">{product.product.name}</dd>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="font-semibold text-lg">Total a Pagar: </dt>
            <dd className="text-xl font-bold">{formatCurrency(order.total)}</dd>
          </div>
        </dl>

        <form action={completeOrder}>
          <input type="hidden" value={order.id} name="order-id" />
          <input
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
            value="Marcar Orden Completada"
          />
        </form>
      </section>
    </>
  );
};

export default OrderCard;
