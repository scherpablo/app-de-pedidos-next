"use server"

import { orderSchema } from "@/src/schema"

const createOrder = async (data: unknown)=>{
    const result = orderSchema.safeParse(data)

    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    try {
        
    } catch (error) {
        console.log(error)
    }
}

export {createOrder}