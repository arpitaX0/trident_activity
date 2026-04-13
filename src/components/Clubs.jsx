import { useEffect, useRef } from 'react'

const clubs = [
  // College-level Technovation clubs (real from tat.ac.in)
  { img: 'assets/club_music_1775284853863.png', icon: 'ph ph-music-note', name: 'The Music Club', desc: 'Melody, rhythm, and harmony — where artists find their voice.', delay: 0 },
  { img: 'assets/club_theatre_1775284777707.png', icon: 'ph ph-chats-circle', name: 'Communication Club', desc: 'Honing public speaking, debate, and interpersonal skills.', delay: 80 },
  { img: 'assets/club_arts_1775284893434.png', icon: 'ph ph-paint-brush', name: 'Art, Craft & Photography', desc: 'Painting, sketching, graffiti, and visual storytelling.', delay: 160 },
  { img: 'assets/club_dance_1775284873092.png', icon: 'ph ph-hand-heart', name: 'Social Responsibility Club', desc: 'Institutional social responsibility and community outreach.', delay: 240 },
  { img: 'assets/club_robot_1775284912133.png', icon: 'ph ph-robot', name: 'Robo-Trident', desc: 'Building the future, one gear at a time.', delay: 320 },
  { img: 'assets/club_code_1775285013076.png', icon: 'ph ph-code', name: 'Code Wizards', desc: 'Algorithms, hackathons, and software innovation.', delay: 400 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_innovation_lab.jpg', icon: 'ph ph-flower-lotus', name: 'Divinity & Wellness Club', desc: 'Yoga, meditation, and holistic well-being practices.', delay: 480 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/indian_business_presentation.png', icon: 'ph ph-device-mobile', name: 'App Genesis', desc: 'Mobile innovations and app development for modern life.', delay: 560 },
]

export default function Clubs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="clubs">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-16" data-animate>
          <div>
            <p
              className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
              style={{ color: '#E56D24' }}
            >
              TECHNOVATION CLUBS
            </p>
            <h2 className="section-title">Student Enrichment Clubs</h2>
            <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)', maxWidth: 560 }}>
              Trident students have about 20 different Student clubs covering both cultural and academic platforms. Each club is guided by a Professor and managed by students.
            </p>
          </div>
          <a
            href="https://tat.ac.in/activities/co-curricullar/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
            style={{ border: '1px solid rgba(62,58,54,0.2)', color: '#3E3A36' }}
          >
            View All Clubs <i className="ph ph-arrow-right"></i>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {clubs.map(({ img, icon, name, desc, delay }) => (
            <div
              key={name}
              data-animate
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                transitionDelay: `${delay}ms`,
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,58,140,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              {/* Image top */}
              <div className="overflow-hidden" style={{ height: 200 }}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* White content bottom */}
              <div className="p-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(44,58,140,0.06)', color: '#2C3A8C', fontSize: '1.1rem' }}
                >
                  <i className={icon}></i>
                </div>
                <h4 className="font-display font-bold text-base mb-1">{name}</h4>
                <p className="text-sm" style={{ color: 'rgba(62,58,54,0.55)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
