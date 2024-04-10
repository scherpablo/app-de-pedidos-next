import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import { FormEditProduct } from "@/components/admin/FormEditProduct";
import FormProduct from "@/components/admin/FormProduct";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";

const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product) {
    notFound();
  }
  return product;
};

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(+params.id);
  console.log(product);

  return (
    <>
      <Title>Panel de Administración - Editar Producto</Title>
      <Heading>Actualiza el Producto: {product.name}</Heading>
      <FormEditProduct>
        <FormProduct product={product} />
      </FormEditProduct>
    </>
  );
};

export default page;
