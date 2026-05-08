import { useEffect, useRef, useState } from 'react'

const activityCategories = [
  {
    title: 'Student Clubs',
    description:
      'Trident students have about 20 different Student clubs covering both cultural and academic platforms. Each club is guided by a Professor and a faculty coordinator and is managed by 6 students constituting the Governing body.',
    icon: 'ph-fill ph-users-three',
    color: '#2C3A8C',
    gradient: 'linear-gradient(135deg, #2C3A8C 0%, #4a5bc7 100%)',
    href: '#clubs',
    stats: '20+ Clubs',
  },
  {
    title: 'Extra Curricular',
    description:
      'Trident promotes and nurtures the talents in its students. We believe that team spirit is an essential aspect of personal and professional life. Students are provided with ample opportunities in sports and physical activities.',
    icon: 'ph-fill ph-trophy',
    color: '#E56D24',
    gradient: 'linear-gradient(135deg, #E56D24 0%, #f09040 100%)',
    href: '#sports',
    stats: '15+ Sports',
  },
  {
    title: 'Co-Curricular',
    description:
      'Activities that complement the academic curriculum to promote all-round development of students including debates, quizzes, seminars, workshops and inter-college competitions.',
    icon: 'ph-fill ph-book-open-text',
    color: '#349FCC',
    gradient: 'linear-gradient(135deg, #349FCC 0%, #5bc0de 100%)',
    href: '#events',
    stats: '30+ Events',
  },
  {
    title: 'Innovation & Entrepreneurship',
    description:
      'Fostering a culture of innovation through incubation cells, startup mentoring, hackathons, and technical project competitions that prepare students for the real world.',
    icon: 'ph-fill ph-lightbulb-filament',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #a78bfa 100%)',
    href: '#innovation',
    stats: 'Innovation Cell',
  },
  {
    title: 'Sports & Games',
    description:
      'World-class sports facilities including cricket ground, football field, basketball and volleyball courts, table tennis, badminton and indoor games arena.',
    icon: 'ph-fill ph-soccer-ball',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34d399 100%)',
    href: '#sports',
    stats: '10+ Facilities',
  },
  {
    title: 'TRILOGY — Annual Magazine',
    description:
      'The flagship annual magazine of Trident showcasing literary excellence, artistic expression, and the creative spirit of students and faculty alike.',
    icon: 'ph-fill ph-newspaper',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #f472b6 100%)',
    href: '#milestones',
    stats: 'Annual Release',
  },
  {
    title: 'IEDC',
    description:
      'The Innovation & Entrepreneurship Development Cell (IEDC) supported by DST, Government of India, promotes innovative thinking and entrepreneurial skills among students.',
    icon: 'ph-fill ph-rocket-launch',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #fbbf24 100%)',
    href: '#innovation',
    stats: 'Govt. Recognized',
  },
  {
    title: 'IEDC Projects',
    description:
      'Student-driven innovation projects funded and mentored through the IEDC, turning classroom ideas into real-world prototypes and solutions.',
    icon: 'ph-fill ph-projector-screen-chart',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #38bdf8 100%)',
    href: '#innovation',
    stats: 'Active Projects',
  },
  {
    title: 'Incubation Cell',
    description:
      'A dedicated incubation center that supports student startups with mentoring, infrastructure, and seed funding to transform ideas into viable businesses.',
    icon: 'ph-fill ph-atom',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #f87171 100%)',
    href: '#innovation',
    stats: 'Startup Support',
  },
]

export default function Activities() {
  const sectionRef = useRef(null)
  const [hoveredIdx, setHoveredIdx] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.08 }
    )
    sectionRef.current
      ?.querySelectorAll('[data-animate]')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      id="activities-overview"
      style={{ background: '#EFE7DF' }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #2C3A8C 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E56D24 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-animate>
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="h-px flex-shrink-0"
              style={{ width: 40, background: 'rgba(44,58,140,0.3)' }}
            />
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase font-inter"
              style={{ color: '#2C3A8C' }}
            >
              <i className="ph-fill ph-diamond" style={{ fontSize: 8 }} />
              Beyond the Classroom
            </span>
            <div
              className="h-px flex-shrink-0"
              style={{ width: 40, background: 'rgba(44,58,140,0.3)' }}
            />
          </div>

          <h2
            className="section-title"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            A World of{' '}
            <span className="italic" style={{ color: '#E56D24' }}>
              Opportunities
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed max-w-[680px] mx-auto mt-4 font-inter"
            style={{ color: 'rgba(62,58,54,0.7)' }}
          >
            Education in Trident is not just about books and classrooms. A
            student can achieve and accomplish many goals because of the easy
            access provided to a variety of facilities. Academics, personality
            development, honing special skills or whatever their area of
            interest, students get complete support from the faculty and senior
            students.
          </p>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activityCategories.map((cat, idx) => (
            <a
              key={cat.title}
              href={cat.href}
              data-animate
              className="group relative rounded-2xl p-6 cursor-pointer transition-all duration-500 block no-underline"
              style={{
                background:
                  hoveredIdx === idx
                    ? 'rgba(255,255,255,1)'
                    : 'rgba(255,255,255,0.6)',
                border:
                  hoveredIdx === idx
                    ? `1px solid ${cat.color}30`
                    : '1px solid rgba(62,58,54,0.08)',
                transform:
                  hoveredIdx === idx
                    ? 'translateY(-8px)'
                    : 'translateY(0)',
                boxShadow:
                  hoveredIdx === idx
                    ? `0 20px 60px ${cat.color}18`
                    : '0 2px 8px rgba(0,0,0,0.04)',
                transitionDelay: `${idx * 60}ms`,
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full transition-all duration-500"
                style={{
                  background: hoveredIdx === idx ? cat.gradient : 'transparent',
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
                style={{
                  background:
                    hoveredIdx === idx ? cat.gradient : `${cat.color}10`,
                  color:
                    hoveredIdx === idx ? '#ffffff' : cat.color,
                  transform:
                    hoveredIdx === idx ? 'scale(1.1)' : 'scale(1)',
                  boxShadow:
                    hoveredIdx === idx
                      ? `0 8px 20px ${cat.color}30`
                      : 'none',
                }}
              >
                <i className={cat.icon} style={{ fontSize: 22 }} />
              </div>

              {/* Stats Badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-3 font-inter transition-all duration-500"
                style={{
                  background: `${cat.color}10`,
                  color: cat.color,
                  border: `1px solid ${cat.color}20`,
                }}
              >
                {cat.stats}
              </div>

              {/* Title */}
              <h3
                className="font-display text-lg font-bold mb-2 transition-colors duration-300"
                style={{
                  color: hoveredIdx === idx ? cat.color : '#3E3A36',
                }}
              >
                {cat.title}
              </h3>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed font-inter mb-4"
                style={{ color: 'rgba(62,58,54,0.6)' }}
              >
                {cat.description.length > 120
                  ? cat.description.slice(0, 120) + '…'
                  : cat.description}
              </p>

              {/* Arrow link */}
              <div
                className="flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] uppercase font-inter transition-all duration-300"
                style={{
                  color: cat.color,
                  opacity: hoveredIdx === idx ? 1 : 0.6,
                }}
              >
                Explore
                <i
                  className="ph ph-arrow-right transition-transform duration-300"
                  style={{
                    transform:
                      hoveredIdx === idx
                        ? 'translateX(4px)'
                        : 'translateX(0)',
                  }}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-animate>
          <p
            className="text-sm font-inter mb-6"
            style={{ color: 'rgba(62,58,54,0.5)' }}
          >
            It is our goal to make student life, a complete one at Trident. Trident is second to
            none in this respect and the students are assured of the best results.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#clubs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white font-inter transition-all hover:-translate-y-0.5"
              style={{
                background: '#2C3A8C',
                boxShadow: '0 4px 16px rgba(44,58,140,0.3)',
              }}
            >
              <i className="ph ph-users-three" />
              Discover Clubs
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm font-inter transition-all hover:-translate-y-0.5"
              style={{
                background: 'transparent',
                border: '1px solid rgba(62,58,54,0.2)',
                color: '#3E3A36',
              }}
            >
              <i className="ph ph-calendar-dots" />
              View Events
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
