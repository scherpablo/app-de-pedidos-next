import { z } from "zod";

const orderSchema = z.object({
  name: z.string().min(3, "El nombre es obligatorio"),
  phone: z.string().min(1, "El teléfono es oblgatorio"),
  totalOrder: z.number().min(1, "El pedido no puede estar vacio"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
});

export { orderSchema };
