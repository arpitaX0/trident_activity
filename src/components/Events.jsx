import { useEffect, useRef } from 'react'

const events = [
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg',
    badge: 'ANNUAL CULTURAL FEST',
    badgeBg: '#E56D24',
    title: 'TRIFEST',
    desc: 'The flagship annual cultural celebration — a platform to showcase talents across music, dance, drama, art, and the diverse spirit of Trident.',
    link: 'RELIVE THE MEMORIES',
    linkColor: '#E56D24',
    href: 'https://tat.ac.in/trifest-2/',
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg',
    badge: 'ANNUAL TECHFEST',
    badgeBg: '#2C3A8C',
    title: 'UDAYAN',
    desc: 'The annual technical festival — the ultimate challenge for young minds to solve real-world problems through technology and innovation.',
    link: 'EXPLORE PROJECTS',
    linkColor: '#2C3A8C',
    href: 'https://tat.ac.in/udayan/',
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    badge: 'BUSINESS MEET',
    badgeBg: '#349FCC',
    title: 'ELIXIR',
    desc: 'The annual Business Meet that brings together aspiring entrepreneurs, industry leaders, and innovative business ideas under one roof.',
    link: 'LEARN MORE',
    linkColor: '#349FCC',
    href: 'https://tat.ac.in/elixer/',
  },
  {
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    badge: 'INTELLECTUAL GROUP',
    badgeBg: '#3E3A36',
    title: 'MANAN',
    desc: 'The intellectual group fostering critical thinking, academic debates, and scholarly discussions among students.',
    link: 'DISCOVER MORE',
    linkColor: '#E56D24',
    href: 'https://tat.ac.in/manan-2/',
  },
]

export default function Events() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="events">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-14" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#E56D24' }}
          >
            ANNUAL FESTIVALS & EVENTS
          </p>
          <h2 className="section-title">Legacy Events</h2>
          <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)', maxWidth: 600 }}>
            Trident promotes and nurtures talent through a series of annual events that provide a platform for students to showcase their abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(({ img, badge, badgeBg, title, desc, link, linkColor, href }) => (
            <div
              key={title}
              data-animate
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: 420 }}
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15,15,30,0.88) 0%, rgba(15,15,30,0.1) 55%)' }}
              />

              <div
                className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-white"
                style={{ background: badgeBg }}
              >
                {badge}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display font-bold text-3xl text-white mb-2">{title}</h3>
                <p className="text-white/70 text-sm mb-5">{desc}</p>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-xs font-black tracking-[0.15em] uppercase transition-all"
                  style={{ color: linkColor }}
                >
                  {link} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
