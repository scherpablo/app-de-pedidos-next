"use client";

import React from "react";
import { productSchema } from "@/src/schema";
import { toast } from "react-toastify";

export const FormEditProduct = ({ children }: { children: React.ReactNode }) => {
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
    };
    const result = productSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
  };

  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-lg shadow-lg max-w-3xl mx-auto">
        <form action={handleSubmit} className="space-y-5">
          {children}

          <input
            type="submit"
            value="guardar cambios"
            className="bg-indigo-600 hover:bg-indigo-800 uppercase text-white w-full p-3 rounded-lg font-bold cursor-pointer mt-5"
          />
        </form>
      </div>
    </>
  );
};
