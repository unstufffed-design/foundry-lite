import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = { title: "Create account" };

export default function SignupPage() {
  return <main className="auth-shell" id="main-content" tabIndex={-1}><Link className="brand auth-brand" href="/"><span className="brand-mark">F</span>foundry lite<span className="brand-dot">.</span></Link><section className="auth-panel"><p className="eyebrow">YOUR NEXT CHAPTER</p><h1>Start building.</h1><p className="auth-description">Explore the local workspace demo.</p><AuthForm mode="signup" /></section></main>;
}