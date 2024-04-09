const FormProductSearch = () => {
  return (
    <>
      <form action="" className="flex items-center">
        <input
          type="text"
          placeholder="Buscar producto"
          name="search"
          className="w-full p-3 rounded-l-lg placeholder-gray-400 shadow-lg"
        ></input>

        <input
          type="submit"
          value={'buscar'}
          className="bg-indigo-600 p-3 rounded-r-lg uppercase text-white cursor-pointer font-bold hover:bg-indigo-800"
        />
      </form>
    </>
  );
};
export default FormProductSearch;
