import type { ReactNode } from "react";
import { Sidebar } from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div className="dashboard-shell"><Sidebar /><div className="dashboard-main">{children}</div></div>;
}