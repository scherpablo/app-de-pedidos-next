import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Image from "next/image";

async function getCategories() {
  return await prisma.category.findMany();
}

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <div className="w-40 h-40 relative my-0 mx-auto">
        <Image
          // width={150}
          // height={150}
          fill
          src={`/logo.svg`}
          alt="Imagen Logo"
        />
      </div>

      <nav className="cursor-pointer">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
