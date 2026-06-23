"use server";

import { prisma } from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function resetQueue() {
  await prisma.queue.deleteMany();

  revalidatePath("/dashboard/queue");
}