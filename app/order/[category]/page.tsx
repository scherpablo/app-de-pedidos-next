import { prisma } from "@/src/lib/prisma";

const getProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
};

const OrderPage = async ({ params }: { params: { category: string } }) => {
  const products = await getProducts(params.category);
  console.log(products);

  return <div>OrderPage</div>;
};
export default OrderPage;
