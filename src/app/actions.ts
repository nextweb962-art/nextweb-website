"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import type { SiteContent } from "@/lib/content";
import { ADMIN_COOKIE } from "@/lib/admin";
import { writeRawContent } from "@/lib/store";

export async function saveContent(content: SiteContent) {
  const store = await cookies();
  if (store.get(ADMIN_COOKIE)?.value !== "1") {
    throw new Error("Unauthorized");
  }
  await writeRawContent(content);
  try {
    revalidatePath("/en");
    revalidatePath("/ar");
    revalidatePath("/admin962");
  } catch (error) {
    console.error("revalidatePath failed:", error);
  }
}
