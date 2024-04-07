import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Image from "next/image";
import Logo from "../ui/Logo";

async function getCategories() {
  return await prisma.category.findMany();
}

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />

      <nav className="cursor-pointer">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
