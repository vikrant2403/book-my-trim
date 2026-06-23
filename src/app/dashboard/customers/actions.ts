"use server";

import { prisma } from "../../../lib/prisma";
import { redirect } from "next/navigation";

export async function createCustomer(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  const shop = await prisma.shop.findFirst();

  if (!shop) {
    throw new Error("Shop not found");
  }

  await prisma.customer.create({
    data: {
      name,
      phone,
      shopId: shop.id,
    },
  });

  redirect("/dashboard/customers");
}