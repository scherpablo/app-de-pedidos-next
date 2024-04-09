const FormSessionAdmin = () => {
  return (
    <>
      <form action="" className="flex flex-col mt-5 gap-2">
        <label htmlFor="" className="uppercase font-semibold">
          Usuario
        </label>
        <input type="text" placeholder="usuario" className="rounded-lg p-3" />

        <label htmlFor="" className="uppercase font-semibold">
          Contraseña
        </label>
        <input
          type="text"
          placeholder="contraseña"
          className="rounded-lg p-3"
        />

        <input
          type="button"
          value="Ingresar"
          className="bg-indigo-600 p-3 rounded-lg mt-5 uppercase text-white font-bold hover:bg-indigo-700"
        />
      </form>
    </>
  );
};

export default FormSessionAdmin;
