import { z } from "zod";

const orderSchema = z.object({
  name: z.string().min(3, "Nombre obligatorio y al menos de 3 caracteres"),
  phone: z.string().min(1, "Teléfono oblgatorio y solo números")
});

export { orderSchema };
