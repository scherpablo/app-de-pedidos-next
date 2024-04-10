import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

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

  return <div>page</div>;
};

export default page;
