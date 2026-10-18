import { head, put } from "@vercel/blob";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataFile = path.join(process.cwd(), "data", "content.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

const extensions: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
};

function blobEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function readRawContent(): Promise<unknown> {
  if (blobEnabled()) {
    try {
      const meta = await head("content.json");
      const response = await fetch(meta.url, { cache: "no-store" });
      return await response.json();
    } catch {
      // no blob yet — fall back to local file
    }
  }
  try {
    return JSON.parse(await readFile(dataFile, "utf8"));
  } catch {
    return null;
  }
}

export async function writeRawContent(content: unknown): Promise<void> {
  if (blobEnabled()) {
    await put("content.json", JSON.stringify(content, null, 2), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    });
    return;
  }
  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, JSON.stringify(content, null, 2), "utf8");
}

export async function saveImageFile(file: File): Promise<string> {
  const ext = extensions[file.type];
  if (!ext || file.size === 0 || file.size > 5 * 1024 * 1024) {
    throw new Error("Invalid file");
  }
  const filename = `project-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}.${ext}`;
  if (blobEnabled()) {
    const blob = await put(`uploads/${filename}`, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type,
    });
    return blob.url;
  }
  await mkdir(uploadsDir, { recursive: true });
  await writeFile(
    path.join(uploadsDir, filename),
    Buffer.from(await file.arrayBuffer())
  );
  return `/uploads/${filename}`;
}
