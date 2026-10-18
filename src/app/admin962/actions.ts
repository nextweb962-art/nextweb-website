"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { ADMIN_COOKIE } from "@/lib/admin";

const uploadsDir = path.join(process.cwd(), "public", "uploads");

const extensions: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
};

export async function verifyPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD ?? "nextweb962";
  if (password !== expected) return false;
  const store = await cookies();
  store.set(ADMIN_COOKIE, "1", {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return true;
}

export async function logout() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
}

export async function uploadImage(file: File) {
  const store = await cookies();
  if (store.get(ADMIN_COOKIE)?.value !== "1") {
    throw new Error("Unauthorized");
  }
  const ext = extensions[file.type];
  if (!ext || file.size === 0 || file.size > 5 * 1024 * 1024) {
    throw new Error("Invalid file");
  }
  const filename = `project-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}.${ext}`;
  await mkdir(uploadsDir, { recursive: true });
  await writeFile(
    path.join(uploadsDir, filename),
    Buffer.from(await file.arrayBuffer())
  );
  return `/uploads/${filename}`;
}
