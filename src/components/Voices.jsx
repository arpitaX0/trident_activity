import { useEffect, useRef } from 'react'

export default function Voices() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="voices">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center">
        <div className="w-full max-w-[820px]">
          {/* Heading — left-aligned like reference */}
          <div className="mb-12" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#2C3A8C' }}
          >
            ALUMNI VOICES
          </p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#3E3A36', lineHeight: 1.1 }}>
            Voices of{' '}
            <em
              className="not-italic italic"
              style={{
                background: 'linear-gradient(135deg, #2C3A8C, #E56D24)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trident
            </em>
          </h2>
        </div>

        {/* Quote Card — white, centered, matching reference */}
        <div
          data-animate
          className="relative rounded-3xl p-10 md:p-14"
          style={{
            background: 'white',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
            border: '1px solid rgba(62,58,54,0.06)',
            maxWidth: 820,
          }}
        >
          {/* Large grey quote mark + gold accent line */}
          <div
            className="font-serif leading-none mb-4"
            style={{ fontSize: '4rem', color: 'rgba(62,58,54,0.08)', lineHeight: 1, marginBottom: 0 }}
          >
            &#8220;
          </div>
          <div
            className="w-12 h-0.5 mb-6"
            style={{ background: '#c9a96e' }}
          ></div>

          <blockquote
            className="font-display italic font-medium mb-8"
            style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', lineHeight: 1.75, color: '#3E3A36' }}
          >
            "The ecosystem at Trident is unparalleled. It provides the exact blend of rigorous academics and creative freedom needed to thrive in today's rapid technological landscape."
          </blockquote>

          <div className="h-px mb-6" style={{ background: 'rgba(62,58,54,0.1)' }}></div>

          <div className="flex items-center gap-4">
            <img
              src="https://loremflickr.com/120/120/india,portrait?random=31"
              alt="Aarav Sharma"
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              style={{ border: '2px solid #2C3A8C', padding: 2 }}
            />
            <div>
              <span className="block font-bold text-base" style={{ color: '#3E3A36' }}>Aarav Sharma</span>
              <span className="block text-xs" style={{ color: 'rgba(62,58,54,0.5)' }}>Alumnus, Class of '23 · Data Scientist</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
