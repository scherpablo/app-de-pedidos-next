import { OrderWithProducts } from "@/src/types";

type OrderItemListProps = {
  order: OrderWithProducts;
};

const OrdrerItemList = ({ order }: OrderItemListProps) => {
  return (
    <div className="bg-white shadow-lg p-5 rounded-lg flex flex-col">
      <div className="flex justify-between py-6 text-xl">
        <p className="font-bold">
          Cliente: <span className="text-indigo-600">{order.name}</span>
        </p>
        <p className="font-bold">
          Teléfono: <span className="text-indigo-600">{order.phone}</span>
        </p>
      </div>

      <ul
        role="list"
        className="divide-y divide-gray-200 border-t border-gray-200 font-semibold"
      >
        {order.orderProducts.map((product) => (
          <li key={product.id} className="flex gap-2 py-6">
            <p>({product.quantity}) {""}</p>
            <p className="italic">{product.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdrerItemList;
