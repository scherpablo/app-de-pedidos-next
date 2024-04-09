import Link from "next/link";

type ProductPageProps = {
  page: number;
  totalPages: number;
};

const ProductsPagination = ({ page, totalPages }: ProductPageProps) => {
  return (
    <>
      <nav className="flex justify-center py-10 gap-5 text-2xl">
        {page > 1 && (
          <Link
            href={`/admin/products?page=${page - 1}`}
            className="bg-white px-4 py-2 rounded-full
          text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            &laquo;
          </Link>
        )}
        {page < totalPages && (
          <Link
            href={`/admin/products?page=${page + 1}`}
            className="bg-white px-4 py-2 rounded-full
           text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            &raquo;
          </Link>
        )}
      </nav>
    </>
  );
};

export default ProductsPagination;
