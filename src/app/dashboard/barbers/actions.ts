"use server";

import { prisma } from "../../../lib/prisma";
import { redirect } from "next/navigation";

export async function createBarber(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const experience = Number(formData.get("experience"));

  const shop = await prisma.shop.findFirst();

  if (!shop) {
    throw new Error("Shop not found");
  }

  await prisma.barber.create({
    data: {
      name,
      phone,
      experience,
      status: "ACTIVE",
      shopId: shop.id,
    },
  });

  redirect("/dashboard/barbers");
}