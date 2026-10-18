"use server";

import { cookies } from "next/headers";
import { ADMIN_COOKIE } from "@/lib/admin";
import { saveImageFile } from "@/lib/store";

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
  return saveImageFile(file);
}
