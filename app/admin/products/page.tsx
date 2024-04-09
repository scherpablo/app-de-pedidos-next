import ProductsTable from "@/components/admin/ProductsTable";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import { prisma } from "@/src/lib/prisma";

const getProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return products;
};

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <Title>Panel de Administración Productos</Title>
      <Heading>Adminstrar Productos</Heading>
      <ProductsTable products={products} />
    </>
  );
};

export default ProductsPage;
