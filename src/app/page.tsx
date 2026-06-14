import { Metadata } from "next";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Saad Ahmad</h1>
          <p className="mt-4 text-lg text-zinc-600">
            Content Creator & Filmmaker — Dubai, UAE
          </p>
          <p className="mt-2 text-zinc-500">
            3+ years producing high-impact video, written, and digital content across FinTech, real estate, lifestyle, and corporate sectors.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">About</h2>
          <p className="leading-7 text-zinc-700">
            I transform complex topics into compelling visual narratives that build audience trust and drive brand authority. Background in media studies (Gold Medalist, GPA 3.8/4.0), with hands-on experience from script to screen — including research-driven storytelling, marketing strategy, and paid social campaigns.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Core Skills</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Video Editing & Motion Graphics",
              "Scriptwriting & Direction",
              "Social Media Marketing",
              "SEO & Content Strategy",
              "FinTech & Trading Education Content",
              "AI-Assisted Content Creation",
              "UGC & Paid Ad Campaigns",
              "Compliance-Ready Financial Promotions",
            ].map((skill) => (
              <div key={skill} className="rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Experience Highlights</h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-zinc-700">
            <li>Scaled organic engagement 3–4x at Amana MENA (500 → 1,500–2,000 views/video).</li>
            <li>Produced paid UGC campaigns (Meta/TikTok/Google) driving 30–40% revenue uplift.</li>
            <li>Created market prediction content that forecasted $50+ silver target (achieved Dec 2024).</li>
            <li>Built visual content for international beauty and cosmetic brands at Nazih Group.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://www.canva.com/design/DAFJltMeQ-Q/4xah7MYVpUARu6EF0PkBZA/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              <ExternalLink size={18} />
              Canva Portfolio
            </a>
            <a
              href="mailto:saadipieces@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              <Mail size={18} />
              saadipieces@gmail.com
            </a>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-8 text-sm text-zinc-500">
          +971 561 911 332 · Dubai, UAE
        </footer>
      </main>
    </div>
  );
}
