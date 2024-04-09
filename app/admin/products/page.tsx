import ProductsTable from "@/components/admin/ProductsTable";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import { prisma } from "@/src/lib/prisma";

const getProducts = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize;

  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true,
    },
  });

  return products;
};

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = +searchParams.page || 1; //El + convierte el string a number
  const pageSize = 10;

  const products = await getProducts(page, pageSize);

  return (
    <>
      <Title>Panel de Administración Productos</Title>
      <Heading>Adminstrar Productos</Heading>
      <ProductsTable products={products} />
    </>
  );
};

export default ProductsPage;
