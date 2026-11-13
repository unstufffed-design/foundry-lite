import { ArrowDownRight, ArrowUpRight, CreditCard, Users, WalletCards } from "lucide-react";

const metrics = [
  // These are illustrative values; connect real billing and analytics queries before launch.
  { label: "Monthly revenue", value: "$12,840", change: "+12.8%", icon: WalletCards, positive: true, note: "vs. last month" },
  { label: "Active customers", value: "2,431", change: "+8.2%", icon: Users, positive: true, note: "vs. last month" },
  { label: "Paid subscriptions", value: "1,892", change: "−2.4%", icon: CreditCard, positive: false, note: "vs. last month" },
];

export function StatCards() {
  return <div className="stat-grid">{metrics.map(({ label, value, change, icon: Icon, positive, note }) => <article className="stat-card" key={label}><div className="stat-card-top"><span>{label}</span><Icon size={18} /></div><strong>{value}</strong><p className={positive ? "stat-change positive" : "stat-change negative"}>{positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{change}<span>{note}</span></p></article>)}</div>;
}