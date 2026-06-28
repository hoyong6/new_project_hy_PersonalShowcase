import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { siteLinks } from '@/data/site-links';
import { aiCodingMetrics, aiCodingWorkflow } from '@/data/ai-coding';
import { skillGroups } from '@/data/resume';

const heroImage = '/images/rain-triptych-no-dialogue-background.png';
const comicImage = '/images/kisame-itachi-rain-comic-final.png';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main>
      <section className='relative isolate overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={heroImage}
            alt='雨夜漫画横向视觉图'
            fill
            priority
            className='object-cover opacity-55'
            sizes='100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/30' />
          <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent' />
        </div>
        <div className='mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='max-w-3xl'>
            <p className='mb-5 inline-flex rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm text-signal'>
              React / Next.js / TypeScript / Web3 / Browser Extension
            </p>
            <h1 className='text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl'>
              {profile.displayName}
              <span className='mt-4 block text-2xl text-rain sm:text-3xl'>{profile.title}</span>
            </h1>
            <p className='mt-7 max-w-2xl text-lg leading-9 text-slate-200'>{profile.tagline}</p>
            <div className='mt-9 flex flex-wrap gap-4'>
              <Link
                href='/resume'
                className='rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white'>
                查看简历
              </Link>
              <a
                href='https://blog.akkc38.cn/'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10'>
                访问博客
              </a>
            </div>
          </div>
          <div className='rounded-lg border border-white/10 bg-white/5 p-3 shadow-glow backdrop-blur'>
            <Image
              src={comicImage}
              alt='雨夜漫画四格视觉图'
              width={1254}
              height={1254}
              priority
              className='aspect-square rounded object-cover'
            />
          </div>
        </div>
      </section>

      <div className='rain-tile-surface'>
        <section className='mx-auto max-w-7xl px-5 py-20 sm:px-8'>
          <SectionHeading
            eyebrow='Profile'
            title='长期做复杂前端，也在用 AI coding 扩展交付半径'
            description={profile.summary}
          />
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
            {profile.highlights.map(item => (
              <div
                key={item}
                className='rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-slate-200'>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-5 py-20 sm:px-8'>
          <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
            <div>
              <SectionHeading
                eyebrow='AI Coding'
                title='把 AI 当成工程协作者，而不是空洞关键词'
                description='个人新博客从搭建到上线，大量环节由 AI coding 辅助完成；我负责需求判断、代码审查、取舍和最终交付质量。'
              />
              <div className='grid gap-3 sm:grid-cols-2'>
                {aiCodingMetrics.map(item => (
                  <div key={item.label} className='rounded-lg border border-signal/20 bg-signal/10 p-4'>
                    <p className='text-2xl font-semibold text-white'>{item.value}</p>
                    <p className='mt-2 text-sm text-slate-300'>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='grid gap-4 md:grid-cols-2'>
              {aiCodingWorkflow.map(item => (
                <article key={item.title} className='rounded-lg border border-white/10 bg-white/[0.04] p-5'>
                  <h3 className='font-semibold text-white'>{item.title}</h3>
                  <p className='mt-3 text-sm leading-7 text-slate-300'>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-5 py-20 sm:px-8'>
          <SectionHeading eyebrow='Skills' title='技术栈分组' description='目前接触的技术栈, AI技能扩展中。' />
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {skillGroups.map(group => (
              <article key={group.title} className='rounded-lg border border-white/10 bg-white/[0.04] p-5'>
                <h3 className='mb-4 font-semibold text-white'>{group.title}</h3>
                <div className='flex flex-wrap gap-2'>
                  {group.skills.map(skill => (
                    <span key={skill} className='rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300'>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-5 py-20 sm:px-8'>
          <SectionHeading eyebrow='Projects' title='精选项目' description='精选项目，技术职责、难点和业务结果。' />
          <div className='grid gap-5 lg:grid-cols-2'>
            {projects.map(project => (
              <article key={project.title} className='rounded-lg border border-white/10 bg-white/[0.04] p-6'>
                <div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
                  <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
                  <span className='text-sm text-rain'>{project.period}</span>
                </div>
                <p className='leading-8 text-slate-300'>{project.summary}</p>
                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.stack.map(item => (
                    <span key={item} className='rounded-full border border-signal/20 px-3 py-1 text-xs text-signal'>
                      {item}
                    </span>
                  ))}
                </div>
                <ul className='mt-5 space-y-3 text-sm leading-7 text-slate-300'>
                  {project.achievements.map(item => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-5 py-20 sm:px-8'>
          <SectionHeading eyebrow='Links' title='站点入口' description='目前上线的网站，后续网站扩展中' />
          <div className='grid gap-5 md:grid-cols-3'>
            {siteLinks
              .filter(link => link.enabled)
              .map(link => (
                <article key={link.title} className='rounded-lg border border-white/10 bg-white/[0.04] p-6'>
                  <span className='mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-rain'>
                    {link.status === 'live' ? 'Live' : 'Coming Soon'}
                  </span>
                  <h3 className='text-xl font-semibold text-white'>{link.title}</h3>
                  <p className='mt-4 min-h-24 leading-8 text-slate-300'>{link.description}</p>
                  {link.url ? (
                    <a
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-white hover:bg-white/10'>
                      打开链接
                    </a>
                  ) : (
                    <span className='mt-6 inline-flex rounded-full border border-white/10 px-5 py-2 text-sm text-slate-500'>
                      等待上线
                    </span>
                  )}
                </article>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
