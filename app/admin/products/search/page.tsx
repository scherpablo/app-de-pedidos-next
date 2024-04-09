import FormProductSearch from "@/components/admin/FormProductSearch";
import ProductsTable from "@/components/admin/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

const serachProducts = async (searchTerm: string) => {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { search: string };
}) => {
  const products = await serachProducts(searchParams.search);

  return (
    <>
      <Heading>
        Resultados de búsqueda para:{" "}
        <span className="font-bold uppercase">{searchParams.search}</span>
      </Heading>
      <div className="flex justify-end">
        <FormProductSearch />
      </div>
      {products.length ? (
        <ProductsTable products={products} />
      ) : (
        <p className="flex justify-center">
          No se encontraron productos realcionados con la búsqueda
        </p>
      )}
    </>
  );
};
export default SearchPage;
