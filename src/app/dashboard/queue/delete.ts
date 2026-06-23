"use server";

import { prisma } from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteQueue(id: string) {
  await prisma.queue.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/queue");
}