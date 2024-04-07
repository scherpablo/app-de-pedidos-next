import Logo from "../ui/Logo";

const adminNavigation = [
  { url: "/admin/orders", text: "Pedídos", blank: false },
  { url: "/admin/products", text: "Productos", blank: false },
  { url: "/order/cafes", text: "Ver Kiosco", blank: true },
];

const AdminSidebar = () => {
  return (
    <>
      <div className="space-y-3">
        <Logo />
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
          Navegación
        </p>
        <nav className="flex flex-col">
          <h1>desde admin sidebar</h1>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
