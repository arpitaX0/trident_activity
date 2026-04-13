import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: 'https://about-tat.tekkzy.com/' },
    { name: 'Admissions', href: 'https://admissions-tat.tekkzy.com/' },
    { name: 'Academics', href: 'https://academics-tat.tekkzy.com/' },
    { name: 'Research', href: 'https://research-tat.tekkzy.com/' },
    { name: 'Campus Life', href: 'https://campuslife-tat.tekkzy.com/' },
    { name: 'Activities', href: 'https://activities-tat.tekkzy.com/' },
    { name: 'Contact Us', href: 'https://contactus-tat.tekkzy.com/' },
  ]

  return (
    <div className="fixed top-0 left-0 w-full z-[1000]" id="siteHeaderWrap">
      {/* Utility Bar */}
      <div
        className={`border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[44px] opacity-100'
        }`}
        style={{ background: '#2C3A8C' }}
        id="utilityBar"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-2.5 flex justify-between items-center text-[11px] font-bold text-white/80 uppercase tracking-[0.18em] font-inter">
          <span>
            Affiliated to BPUT &nbsp;<span className="opacity-40">|</span>&nbsp; NAAC 'A' Accredited
          </span>
          <a
            href="https://alumni-tat.tekkzy.com/"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <i className="ph ph-users-three" style={{ fontSize: 12 }}></i> Alumni
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white border-b border-black/5 shadow-sm transition-all duration-500 ${
          isScrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
        id="mainHeader"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 no-underline flex-shrink-0">
            <img
              src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
              alt="TAT Logo"
              className="object-contain block"
              style={{ width: 52, height: 52 }}
            />
            <div className="flex flex-col justify-center">
              <span className="font-display text-[22px] font-black text-[#3E3A36] leading-none tracking-[0.04em] uppercase">
                Trident
              </span>
              <div
                className="w-full my-1"
                style={{ height: 1, background: 'linear-gradient(to right, #2C3A8C, transparent)' }}
              ></div>
              <span className="font-inter text-[9px] font-bold tracking-[0.22em] uppercase leading-none" style={{ color: '#2C3A8C' }}>
                Academy of Technology
              </span>
            </div>
          </a>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex flex-grow justify-center" aria-label="Primary navigation">
            <ul className="flex gap-8 list-none">
              {navLinks.map(({ name, href }) => {
                const isActive = name === 'Activities' // Current site site is Activities
                return (
                  <li key={name}>
                    <a
                      href={href}
                      className={`font-inter text-[13px] font-extrabold uppercase tracking-[0.16em] whitespace-nowrap transition-all duration-300 relative group ${
                        isActive ? 'text-brand-blue' : 'text-[#3E3A36] hover:text-brand-blue'
                      }`}
                    >
                      {name}
                      <span
                        className={`absolute -bottom-[6px] left-0 h-[2px] bg-brand-blue transition-all duration-300 ${
                          isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                        }`}
                      ></span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden sm:block flex-shrink-0">
            <a
              href="https://apply-now.tekkzy.com/"
              className="inline-block font-inter text-white text-[12px] font-bold uppercase tracking-[0.1em] px-7 py-3 rounded-md no-underline whitespace-nowrap transition-all hover:-translate-y-0.5"
              style={{
                background: '#E63946',
                boxShadow: '0 4px 18px rgba(230,57,70,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c1121f'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(230,57,70,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E63946'
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(230,57,70,0.3)'
              }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex items-center justify-center border-none rounded-lg p-2 cursor-pointer text-2xl transition-all relative z-[60] flex-shrink-0"
            style={{ background: 'rgba(44,58,140,0.08)', color: '#2C3A8C' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <i className="ph ph-x"></i>
            ) : (
              <i className="ph ph-list"></i>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-500 border-t ${
            isMobileMenuOpen
              ? 'max-h-[85vh] opacity-100 py-6 overflow-y-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          style={{ borderColor: 'rgba(44,58,140,0.1)' }}
          id="mobileDrawer"
        >
          <div className="px-6 flex flex-col">
            {navLinks.map(({ name, href }) => {
              const isActive = name === 'Activities'
              return (
                <a
                  key={name}
                  href={href}
                  className={`block py-3.5 px-4 font-inter text-[15px] font-extrabold uppercase tracking-[0.14em] no-underline border-b rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-brand-blue bg-brand-blue/5 border-brand-blue/20'
                      : 'text-[#3E3A36] hover:text-brand-blue hover:bg-brand-blue/5 border-brand-blue/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </a>
              )
            })}
            <div className="pt-6 px-2 pb-2">
              <a
                href="https://apply-now.tekkzy.com/"
                className="block text-center font-inter text-white text-[13px] font-extrabold uppercase tracking-[0.2em] px-6 py-4 rounded-xl no-underline transition-all hover:-translate-y-0.5"
                style={{
                  background: '#E63946',
                  boxShadow: '0 10px 30px rgba(230,57,70,0.4)',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                START APPLICATION
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
