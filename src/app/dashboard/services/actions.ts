"use server";

import { prisma } from "../../../lib/prisma";
import { redirect } from "next/navigation";

export async function createService(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const duration = Number(formData.get("duration"));

  const shop = await prisma.shop.findFirst();

  if (!shop) {
    throw new Error("No shop found");
  }

  await prisma.service.create({
    data: {
      name,
      price,
      duration,
      shopId: shop.id,
    },
  });

  redirect("/dashboard/services");
}