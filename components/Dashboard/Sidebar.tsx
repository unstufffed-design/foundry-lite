"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, LayoutDashboard, Settings2 } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/workspace", label: "Workspace", icon: Settings2 },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();
  return <aside className="dashboard-sidebar"><Link className="brand sidebar-brand" href="/"><span className="brand-mark">F</span><span className="sidebar-brand-name">foundry lite<span className="brand-dot">.</span></span></Link><nav className="sidebar-nav" aria-label="Dashboard navigation">{links.map(({ href, label, icon: Icon }) => <Link className={`sidebar-link ${pathname === href ? "is-active" : ""}`} href={href} key={label} aria-label={label} aria-current={pathname === href ? "page" : undefined}><Icon size={18} /><span>{label}</span></Link>)}</nav><div className="sidebar-bottom"><span className="sidebar-plan"><i /> Starter workspace</span></div></aside>;
}