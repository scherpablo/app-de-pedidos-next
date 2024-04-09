import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import { prisma } from "@/src/lib/prisma";

const getPendingOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return orders;
};

const OrderPage = async () => {
  const orders = await getPendingOrders();

  return (
    <>
      <Title>Panel de Administración - Pedidos</Title>
      <Heading>Administrar Pedidos</Heading>

      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 mt-5">
          {orders.map((order) => (
            <OrderCard 
            key={order.id}
            order={order}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No hay pedidos pendientes</p>
      )}
    </>
  );
};
export default OrderPage;
