import { cookies } from "next/headers";
import AdminClient from "./AdminClient";
import AdminLogin from "./AdminLogin";
import { readContent } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { ADMIN_COOKIE } from "@/lib/admin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authed = cookieStore.get(ADMIN_COOKIE)?.value === "1";
  if (!authed) return <AdminLogin />;

  const content = await readContent();
  const dict = getDictionary("en");
  const initialProjects =
    content && content.projects.length > 0
      ? content.projects
      : dict.work.items;
  const initialStats =
    content?.stats ?? { projects: "40", clients: "25", onTime: "98" };

  return (
    <AdminClient initialStats={initialStats} initialProjects={initialProjects} />
  );
}
