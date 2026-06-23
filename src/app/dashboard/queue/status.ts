"use server";

import { prisma } from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateQueueStatus(
  id: string,
  status: string
) {
  const queueItem = await prisma.queue.findUnique({
    where: {
      id,
    },
    include: {
      customer: true,
      service: true,
    },
  });

  if (!queueItem) {
    return;
  }

  await prisma.queue.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });

  if (status === "COMPLETED") {
    await prisma.customer.update({
      where: {
        id: queueItem.customerId,
      },
      data: {
        totalVisits: {
          increment: 1,
        },

        totalSpent: {
          increment: queueItem.service.price,
        },
      },
    });
  }

  revalidatePath("/dashboard/queue");
  revalidatePath("/dashboard/customers");
}