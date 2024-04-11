"use client";

import useSWR from "swr";
import { OrderWithProducts } from "@/src/types";
import Heading from "@/components/ui/Heading";
import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";
import Spinner from "@/components/ui/Spinner";
import { DiVim } from "react-icons/di";
import OrdrerItemList from "@/components/order/OrdrerItemList";

const OrdersPage = () => {
  const url = "/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <Spinner />;

  if (error) return <p className="text-center">Error al cargar los datos</p>;

  if (data)
    return (
      <>
        <div className="my-5">
          <Title>Panel de Administración - Pedidos</Title>
          <Heading>Pedidos Listos</Heading>
          <div className="-mt-10">
            <Logo />
          </div>

          {data.length ? (
            <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
              {data.map((order) => (
                <OrdrerItemList key={order.id} order={order}/>
              ))}
            </div>
          ) : (
            <p>No hay pedidos listos</p>
          )}
        </div>
      </>
    );
};

export default OrdersPage;
