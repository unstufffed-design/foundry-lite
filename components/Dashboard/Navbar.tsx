import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type NavbarProps = { email: string; section?: string };

export function Navbar({ email, section = "Overview" }: NavbarProps) {
  const initials = email.slice(0, 2).toUpperCase();
  return <header className="dashboard-navbar sticky top-0 z-30"><div><p className="dashboard-breadcrumb"><Link className="dashboard-home-link" href="/">Home</Link><span>/</span> Workspace <span>/</span> {section}</p><p className="dashboard-date">Your product, in good shape.</p></div><div className="navbar-actions"><ThemeToggle /><span className="user-avatar" title={email}>{initials}</span></div></header>;
}