import Link from "next/link";

type ProductPageProps = {
  page: number;
};

const ProductsPagination = ({ page }: ProductPageProps ) => {
  return (
    <>
      <nav className="flex justify-center py-10 gap-5 text-2xl">
        <Link href={`/admin/products?page=${page - 1}`}>&laquo;</Link>
        <Link href={`/admin/products?page=${page + 1}`}>&raquo;</Link>
      </nav>
    </>
  );
};

export default ProductsPagination;
