import FormAddProduct from "@/components/admin/FormAddProduct";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";

const NewProductsPage = () => {
  return (
    <>
      <Title>Panel de Administrtador - Nuevo Producto</Title>
      <Heading>Agrega tus Productos</Heading>
      <FormAddProduct />
    </>
  );
};

export default NewProductsPage;
