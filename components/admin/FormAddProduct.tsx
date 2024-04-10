import FormProduct from "./FormProduct";

const FormAddProduct = () => {
  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-lg shadow-lg max-w-3xl mx-auto">
        <form action="" className="space-y-5">
          <FormProduct />

          <input
            type="submit"
            value="agregar producto"
            className="bg-indigo-600 hover:bg-indigo-800 uppercase text-white w-full p-3 rounded-lg font-bold cursor-pointer mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default FormAddProduct;
