"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import type { SiteContent } from "@/lib/content";
import { ADMIN_COOKIE } from "@/lib/admin";

const dataFile = path.join(process.cwd(), "data", "content.json");

export async function saveContent(content: SiteContent) {
  const store = await cookies();
  if (store.get(ADMIN_COOKIE)?.value !== "1") {
    throw new Error("Unauthorized");
  }
  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, JSON.stringify(content, null, 2), "utf8");
  revalidatePath("/en");
  revalidatePath("/ar");
  revalidatePath("/admin962");
}
