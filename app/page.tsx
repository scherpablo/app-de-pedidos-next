import Link from "next/link";
import Logo from "@/components/ui/Logo";
import FormSessionAdmin from "@/components/ui/FormSessionAdmin";

const adminNavigation = [
  // { url: "/admin/orders", text: "Pedidos", blank: false },
  { url: "/order/cafes", text: "Ingresar al Kiosco", blank: true },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex flex-col mx-auto p-10 w-full md:w-1/3">
          {adminNavigation.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className="mt-10 font-bold bg-amber-400 p-3 rounded-lg text-center uppercase hover:bg-amber-500"
            >
              {link.text}
            </Link>
          ))}
          <p className="mt-20 text-2xl text-center font-semibold">
            Llena el formulario para iniciar sesión como Administrador
          </p>

          <FormSessionAdmin />
        </div>
      </div>
    </>
  );
}
