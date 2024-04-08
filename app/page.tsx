import Link from "next/link";

const adminNavigation = [
  { url: "/admin/orders", text: "Pedidos", blank: false },
  { url: "/order/cafes", text: "Ingresar al Kiosco como cliente", blank: true },
];

export default function Home() {
  return (
    <>
      <h1 className="mt-20 text-5xl font-bold text-center">
        Bienvenido al Kiosco Virtual
      </h1>
      <div className="flex flex-col my-32 mx-auto w-1/4">
        {adminNavigation.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className="mt-10 font-bold bg-amber-400 p-3 rounded-lg text-center uppercase hover:bg-amber-500"
          >
            {link.text}
          </Link>
        ))}
        <p className="mt-20 text-lg font-semibold">
          Ingresar al Kiosco como Admin{" "}
          <span className="text-xs font-medium">(completa el formulario)</span>
        </p>

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
      </div>
    </>
  );
}
