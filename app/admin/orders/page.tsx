import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import { prisma } from "@/src/lib/prisma";
import { orderSchema } from "@/src/schema";

const getPendingOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })
  return orders
};

const OrderPage = async () => {
const orders = await getPendingOrders();

  return (
    <>
      <Title>Panel de Administración Pedidos</Title>
      <Heading>Administrar Pedidos</Heading>
    </>
  );
};
export default OrderPage;
