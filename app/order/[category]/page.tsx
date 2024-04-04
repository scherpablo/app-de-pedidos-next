import ProductCard from "@/components/products/ProductCard";
import { categories } from "@/prisma/data/categories";
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

  return (
    <>
    <h1 className="text-4xl text-center font-black">Mostrando productos para {params.category}</h1>
      <p className="text-2xl font-semibold mt-5 mb-10 text-center">Elije y personaliza tu pedido a continuación</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default OrderPage;
