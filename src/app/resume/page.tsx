import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { education, skillGroups, workExperience } from "@/data/resume";

export const metadata: Metadata = {
  title: "脱敏简历",
  description: "HY 的脱敏版前端工程师简历，展示工作经历、项目经历、技术栈和教育经历。",
};

export const dynamic = "force-dynamic";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <section className="mb-16 rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-signal">Resume</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{profile.displayName} / {profile.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-signal px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white">
            返回首页
          </Link>
          {profile.publicContacts.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-white hover:bg-white/10"
            >
              {contact.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading eyebrow="Experience" title="工作经历" />
        <div className="space-y-5">
          {workExperience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{item.company}</h2>
                  <p className="mt-1 text-rain">{item.role}</p>
                </div>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading eyebrow="Project Experience" title="重点项目经历" />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <span className="text-sm text-rain">{project.period}</span>
              </div>
              <p className="leading-8 text-slate-300">{project.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>- {achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading eyebrow="Skills" title="技能栈" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <h2 className="mb-4 font-semibold text-white">{group.title}</h2>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Education" title="教育经历" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold text-white">{item.school}</h2>
              <p className="mt-3 text-slate-300">{item.degree}</p>
              <p className="mt-2 text-sm text-rain">{item.period}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
