const academicsLinks = [
  { href: 'https://academics-tat.tekkzy.com/departments-of-engineering/', label: 'Undergraduate Studies' },
  { href: 'https://academics-tat.tekkzy.com/', label: 'Postgraduate Studies' },
  { href: 'https://academics-tat.tekkzy.com/', label: 'Doctoral Programs' },
  { href: 'https://research-tat.tekkzy.com/', label: 'Research Centers' },
  { href: 'https://academics-tat.tekkzy.com/', label: 'Academic Calendar' },
]

const campusLinks = [
  { href: 'https://campuslife-tat.tekkzy.com/', label: 'Student Hostels' },
  { href: 'https://activities-tat.tekkzy.com/', label: 'Clubs & Societies' },
  { href: 'https://campuslife-tat.tekkzy.com/', label: 'Sports & Recreation' },
  { href: 'https://campuslife-tat.tekkzy.com/', label: 'Health & Wellness' },
  { href: 'https://campuslife-tat.tekkzy.com/', label: 'Campus Safety' },
]

const resourcesLinks = [
  { href: 'https://admissions-tat.tekkzy.com', label: 'Admissions Portal' },
  { href: 'https://alumni-tat.tekkzy.com/', label: 'Alumni Network' },
  { href: 'https://placements-tat.tekkzy.com', label: 'Career Placements' },
  { href: 'https://academics-tat.tekkzy.com/', label: 'NIRF Data' },
  { href: 'https://tat.tekkzy.com/', label: 'Tenders & Notices' },
]

const socials = [
  { href: 'https://tat.tekkzy.com/', icon: 'ph ph-facebook-logo', label: 'Facebook' },
  { href: 'https://tat.tekkzy.com/', icon: 'ph ph-twitter-logo', label: 'Twitter' },
  { href: 'https://tat.tekkzy.com/', icon: 'ph ph-linkedin-logo', label: 'LinkedIn' },
  { href: 'https://tat.tekkzy.com/', icon: 'ph ph-instagram-logo', label: 'Instagram' },
]

const contactItems = [
  {
    href: '/contact',
    icon: 'ph ph-map-pin',
    text: <>F2/A, Chandaka Industrial Estate,<br />In front of Infocity, Bhubaneswar,<br />Odisha, Pin: 751024, India</>,
  },
  { href: 'tel:+919861191195', icon: 'ph ph-phone', text: '+91 98611 91195' },
  { href: 'mailto:info@trident.ac.in', icon: 'ph ph-envelope-simple', text: 'info@trident.ac.in' },
]

function FooterLinkCol({ heading, links }) {
  return (
    <div>
      {/* Column heading with bottom border accent */}
      <h5
        className="font-inter text-xs font-black tracking-[0.22em] uppercase text-white mb-5 pb-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        {heading}
      </h5>
      <ul className="space-y-3">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => (e.target.style.color = '#ffffff')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.5)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-0"
      style={{ background: '#0d0d0d' }}
    >
      {/* Large watermark logo — bottom right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{ width: 340, height: 340, opacity: 0.07 }}
      >
        <img
          src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* ─── Newsletter Section ─── */}
        <div 
          className="mb-16 rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 xl:p-12 gap-8"
          style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)',
            borderLeft: '6px solid #eab308' 
          }}
        >
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="font-display font-bold text-4xl text-white mb-3 leading-tight tracking-tight">
              Stay informed,<br />
              stay <span style={{ color: '#eab308' }}>ahead.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.
            </p>
          </div>

          {/* Form Content */}
          <div className="lg:w-5/12 w-full flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 border rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              />
              <button 
                className="font-bold text-xs tracking-widest uppercase rounded-lg px-6 py-3 flex items-center justify-center gap-2 flex-shrink-0 transition-opacity hover:opacity-90"
                style={{ background: '#eab308', color: '#1a1a1a' }}
              >
                SUBSCRIBE <i className="ph ph-arrow-right"></i>
              </button>
            </div>
            <p className="text-[10px] uppercase tracking-wider font-bold mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              NO SPAM. ONLY UPDATES THAT MATTER.
            </p>
          </div>
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo lockup */}
            <a href="https://tat.tekkzy.com/" className="flex items-center gap-3 mb-6 no-underline">
              <img
                src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
                alt="TAT Logo"
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span
                  className="font-inter font-black text-white leading-none tracking-[0.06em] uppercase"
                  style={{ fontSize: 20 }}
                >
                  TRIDENT
                </span>
                <span
                  className="font-inter font-bold text-white/40 tracking-[0.2em] uppercase leading-tight mt-0.5"
                  style={{ fontSize: 8.5 }}
                >
                  ACADEMY OF TECHNOLOGY
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Empowering the next generation of global leaders through world-class technical education,{' '}
              innovative research, and an unwavering
              commitment to excellence.
            </p>

            {/* Contact list */}
            <div className="space-y-4">
              {contactItems.map(({ href, icon, text }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-start gap-3 no-underline group"
                >
                  {/* Square icon */}
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    <i className={`${icon} text-sm`}></i>
                  </div>
                  <span
                    className="text-sm leading-snug pt-0.5 transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <FooterLinkCol heading="Academics" links={academicsLinks} />
          <FooterLinkCol heading="Campus Life" links={campusLinks} />
          <FooterLinkCol heading="Resources" links={resourcesLinks} />
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <span
            className="font-inter font-bold tracking-[0.15em] uppercase text-center md:text-left"
            style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}
          >
            © 2026 Trident Academy of Technology. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-base transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.45)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#ffffff'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                }}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
