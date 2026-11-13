import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return <main className="auth-shell" id="main-content" tabIndex={-1}><Link className="brand auth-brand" href="/"><span className="brand-mark">F</span>foundry lite<span className="brand-dot">.</span></Link><section className="auth-panel"><p className="eyebrow">WELCOME BACK</p><h1>Good to see you.</h1><p className="auth-description">Continue to the local workspace demo.</p><AuthForm mode="login" /></section></main>;
}