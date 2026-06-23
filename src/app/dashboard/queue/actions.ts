"use server";

import { prisma } from "../../../lib/prisma";
import { redirect } from "next/navigation";

export async function createQueue(formData: FormData) {
  const customerName = formData.get("customerName") as string;
  const phone = formData.get("phone") as string;
  const barberId = formData.get("barberId") as string;
  const serviceId = formData.get("serviceId") as string;

  const shop = await prisma.shop.findFirst();

  if (!shop) {
    throw new Error("Shop not found");
  }

  const customer = await prisma.customer.create({
    data: {
      name: customerName,
      phone,
      shopId: shop.id,
    },
  });

  const lastToken = await prisma.queue.findFirst({
    orderBy: {
      tokenNumber: "desc",
    },
  });

  const nextToken = lastToken
    ? lastToken.tokenNumber + 1
    : 1;

  await prisma.queue.create({
    data: {
      tokenNumber: nextToken,
      status: "WAITING",
      customerId: customer.id,
      barberId,
      serviceId,
    },
  });

  redirect("/dashboard/queue");
}