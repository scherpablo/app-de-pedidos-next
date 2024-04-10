import FormAddProduct from "@/components/admin/FormAddProduct";
import FormProduct from "@/components/admin/FormProduct";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";

const NewProductsPage = () => {
  return (
    <>
      <Title>Panel de Administrtador - Nuevo Producto</Title>
      <Heading>Agrega tus Productos</Heading>
      <FormAddProduct>
        <FormProduct />
      </FormAddProduct>
    </>
  );
};

export default NewProductsPage;
