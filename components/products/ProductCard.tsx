import Image from "next/image";
import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border bg-white">
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <div className="w-52 h-52 relative">
          <Image
            fill
            src={`/products/${product.image}.jpg`}
            alt="Imagen Producto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
