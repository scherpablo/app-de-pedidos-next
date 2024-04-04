import Image from "next/image";
import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import AddToOrderButton from "./AddToOrderButton";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg bg-white">
      <Image
        width={400}
        height={500}
        src={`/products/${product.image}.jpg`}
        alt={`Imagen producto ${product.name}`}
        quality={20}
        className="rounded-t-lg"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold h-14">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddToOrderButton
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductCard;
