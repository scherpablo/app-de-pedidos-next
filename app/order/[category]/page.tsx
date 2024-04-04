import ProductCard from "@/components/products/ProductCard";
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

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductCard 
          key={product.id}
          product={product}
          />
        ))}
      </div>
    </>
  );
};
export default OrderPage;