import { useEffect, useRef } from 'react'

const leaders = [
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/discover_graduation.jpg',
    role: 'CHAIRMAN',
    name: 'Dr. Chandan Kumar Das',
    subtitle: 'Sports Committee',
    delay: 100,
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg',
    role: 'FACULTY GUIDE',
    name: 'Dr. Mili Panigrahi',
    subtitle: 'Music Club (ETC)',
    delay: 200,
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg',
    role: 'FACULTY GUIDE',
    name: 'Mr. Manoj Kumar Rath',
    subtitle: 'Communication Club',
    delay: 300,
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_research_scholars.jpg',
    role: 'SPORTS OFFICER',
    name: 'Mr. Pratap Kumar Rath',
    subtitle: 'Sports & Games Committee',
    delay: 400,
  },
]

export default function Leadership() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#F5EEEC' }} id="leadership">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#E56D24' }}
          >
            FACULTY & GUIDANCE
          </p>
          <h2 className="section-title">Club Mentors & Leaders</h2>
          <p className="text-lg mx-auto" style={{ color: 'rgba(62,58,54,0.6)', maxWidth: 560 }}>
            Each club is guided by a Professor and a faculty coordinator, ensuring students receive expert mentorship and direction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map(({ img, role, name, subtitle, delay }) => (
            <div
              key={name}
              data-animate
              className="leader-card text-center rounded-2xl overflow-hidden bg-white cursor-pointer"
              style={{
                transitionDelay: `${delay}ms`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,58,140,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
              }}
            >
              <div className="overflow-hidden" style={{ height: 220 }}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p
                  className="font-inter text-[10px] font-black tracking-[0.2em] uppercase mb-2"
                >
                  {role}
                </p>
                <h3 className="font-display font-bold text-base mb-1">{name}</h3>
                <p className="text-xs" style={{ color: 'rgba(62,58,54,0.5)' }}>{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
