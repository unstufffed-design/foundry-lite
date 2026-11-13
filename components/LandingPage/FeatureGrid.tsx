import { ArrowUpRight, Database, Fingerprint, Gauge, Layers3, Workflow } from "lucide-react";

const features = [
  { icon: Fingerprint, title: "Account-ready screens", body: "A polished sign-in and onboarding flow you can connect to your own auth solution." },
  { icon: Database, title: "Local workspace demo", body: "Try the notes interface with data stored only in your browser." },
  { icon: Workflow, title: "Product-ready sections", body: "Landing, dashboard, workspace, and billing-preview screens to adapt." },
  { icon: Layers3, title: "A dashboard to build on", body: "Responsive navigation, useful metrics, and a working local CRUD example." },
  { icon: Gauge, title: "A fast, modern base", body: "Next.js App Router, React Server Components, Tailwind 4, and strict TypeScript." },
  { icon: ArrowUpRight, title: "Made to be changed", body: "Small modules and familiar patterns keep the starter easy to adapt and maintain." },
];

export function FeatureGrid() {
  return <div className="feature-grid">{features.map(({ icon: Icon, title, body }, index) => <article className="feature-item" key={title}><div className={`feature-icon feature-icon-${index + 1}`}><Icon size={19} /></div><h3>{title}</h3><p>{body}</p></article>)}</div>;
}