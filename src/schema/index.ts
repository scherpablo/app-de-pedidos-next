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

const searchSchema = z.object({
  search: z.string().trim().min(1, "El campo no puede estar vacio"),
});

const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El Nombre del Producto no puede ir vacio" }),
  price: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: "Precio no válido" })
    .or(z.number().min(1, { message: "La Categoría es Obligatoria" })),
  categoryId: z
    .string()
    .trim()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "La Categoría es Obligatoria" })
    .or(z.number().min(1, { message: "La Categoría es Obligatoria" })),
});

export { orderSchema, searchSchema, productSchema };
