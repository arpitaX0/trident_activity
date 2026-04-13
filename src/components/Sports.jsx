import { useEffect, useRef } from 'react'

const sports = [
  { img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-baseball', label: 'Cricket', color: '#2C3A8C' },
  { img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-basketball', label: 'Basketball', color: '#E56D24' },
  { img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-soccer-ball', label: 'Football', color: '#349FCC' },
  { img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-volleyball', label: 'Volleyball', color: '#E63946' },
  { img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-racquet', label: 'Badminton', color: '#2C3A8C' },
  { img: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-table', label: 'Table Tennis', color: '#E56D24' },
  { img: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-strategy', label: 'Chess', color: '#3E3A36' },
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-barbell', label: 'Gymnasium', color: '#349FCC' },
]

export default function Sports() {
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

  const allSports = [...sports, ...sports]

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="sports">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center mb-14 text-center" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#E56D24' }}
          >
            SPORTS & GAMES
          </p>
          <h2 className="section-title">Pulse & Play</h2>
          <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)', maxWidth: 620 }}>
            The college provides gaming opportunities across cricket, football, volleyball, basketball, badminton, table tennis, chess, and more. A dedicated Sports Committee organizes intra-college and inter-college events throughout the year.
          </p>
        </div>

        {/* Achievements Banner */}
        <div
          data-animate
          className="rounded-2xl p-6 mb-10 flex flex-col md:flex-row gap-6"
          style={{ background: 'rgba(44,58,140,0.06)', border: '1px solid rgba(44,58,140,0.1)' }}
        >
          <div className="flex items-start gap-3 flex-1">
            <i className="ph-fill ph-trophy text-2xl" style={{ color: '#E56D24' }}></i>
            <div>
              <h4 className="font-display font-bold text-sm mb-1">Volleyball Champions</h4>
              <p className="text-xs" style={{ color: 'rgba(62,58,54,0.6)' }}>
                5 successive championships in 2023-24 inter-college volleyball tournaments (CUTM, Sri Sri University, IMI, CV Raman).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 flex-1">
            <i className="ph-fill ph-trophy text-2xl" style={{ color: '#E56D24' }}></i>
            <div>
              <h4 className="font-display font-bold text-sm mb-1">Cricket Champions</h4>
              <p className="text-xs" style={{ color: 'rgba(62,58,54,0.6)' }}>
                Championship winners in inter-college cricket tournament organized by Red Bull at Kalinga Stadium.
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Ticker */}
        <div className="overflow-hidden" data-animate>
          <div className="sports-scroller">
            {allSports.map(({ img, icon, label, color }, i) => (
              <div
                key={`${label}-${i}`}
                className="flex-shrink-0 rounded-2xl overflow-hidden mr-6 cursor-pointer group"
                style={{ width: 240, background: '#F5EEEC', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              >
                <div className="overflow-hidden" style={{ height: 280 }}>
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 px-4 py-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ border: `1.5px solid ${color}`, color }}
                  >
                    <i className={icon}></i>
                  </div>
                  <span className="font-display font-bold text-sm">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
