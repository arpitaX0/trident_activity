import { useState, useEffect } from "react";
import { Users, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "About",       href: "https://about-tat.tekkzy.com/" },
  { label: "Admissions",  href: "https://admissions-tat.tekkzy.com/" },
  { label: "Academics",   href: "https://academics-tat.tekkzy.com/" },
  { label: "Research",    href: "https://research-tat.tekkzy.com/" },
  { label: "Campus Life", href: "https://campuslife-tat.tekkzy.com/" },
  { label: "Activities",  href: "https://activities-tat.tekkzy.com/" },
  { label: "Contact Us",  href: "https://contactus-tat.tekkzy.com/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Slim Utility Bar */}
      <div className={"hidden lg:block border-b border-white/5 transition-all duration-500 " + (scrolled ? "max-h-0 overflow-hidden py-0 border-b-0" : "max-h-20 py-1.5")} style={{ background: 'linear-gradient(135deg, #1a2660 0%, #2C3A8C 60%, #3a4aad 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em]">
            Approved by AICTE &nbsp;|&nbsp; Affiliated to BPUT &nbsp;|&nbsp; NAAC Accredited &nbsp;|&nbsp; NBA Accredited for 6 Programmes
          </span>
          <div className="flex items-center gap-3">
            {/* Alumni Portal */}
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 text-[10px] font-bold text-[#E8BD63] uppercase tracking-widest hover:text-[#F0D080] transition-colors whitespace-nowrap">
              <Users size={11}/> Alumni
            </a>
          </div>
        </div>
      </div>

      <header 
        className={"relative transition-all duration-500 bg-white shadow-[0_4px_20px_-4px_rgba(15,23,42,0.12)] " + (scrolled ? "py-3" : "py-5")}
      >
        <div className="mx-auto px-6 xl:px-12 flex items-center justify-between">
            
          {/* Logo Lockup */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 group cursor-pointer no-underline">
            <img src={logo} alt="TAT Logo" className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain flex-shrink-0 drop-shadow-sm" />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="serif text-[22px] md:text-[24px] font-black leading-none tracking-[0.04em] uppercase text-[#3E3A36]">Trident</div>
              <div className="w-full h-[1px] my-[3px] bg-gradient-to-r from-[#1B4D8E] to-transparent"></div>
              <div className="text-[9px] md:text-[10px] font-semibold tracking-[0.22em] uppercase leading-none text-[#1B4D8E]">Academy of Technology</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={"text-[14px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap font-extrabold transition-colors duration-500 no-underline " + 
                      (item.label === 'Activities' 
                        ? "text-[#253386] border-b-2 border-[#253386]" 
                        : "text-[#3E3A36] hover:text-[#1B4D8E]"
                      )
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Elements */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="https://apply-now.tekkzy.com/" className="text-[12px] font-bold px-7 py-3 rounded uppercase whitespace-nowrap no-underline transition-all duration-500 hover:opacity-90" style={{ backgroundColor: '#D3494B', color: '#ffffff' }}>Apply Now</a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg transition-colors active:scale-95 z-50 relative text-[#253386] bg-soft hover:bg-primary/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top overflow-hidden border-t border-primary/10 ${
            mobileOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="px-6 flex flex-col h-full overflow-y-auto pb-4">
            {NAV_LINKS.map((item, i) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 text-[15px] font-extrabold text-[#3E3A36] uppercase tracking-[0.14em] hover:text-primary hover:bg-soft/50 rounded-lg px-3 transition-all duration-500 transform no-underline ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ 
                  transitionDelay: `${mobileOpen ? i * 40 + 100 : 0}ms`, 
                  borderBottom: i !== NAV_LINKS.length - 1 ? "1px solid rgba(27,77,142,0.1)" : "none" 
                }}
              >
                {item.label}
              </a>
            ))}
            <div 
              className={`pt-8 px-2 transition-all duration-700 transform ${
                mobileOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`} 
              style={{ transitionDelay: `${mobileOpen ? NAV_LINKS.length * 40 + 150 : 0}ms` }}
            >
              <a onClick={() => setMobileOpen(false)} href="https://apply-now.tekkzy.com/" className="block text-center text-[13px] tracking-widest text-[#fff] font-extrabold px-6 py-4 rounded-xl shadow-lg transition-opacity hover:opacity-90 no-underline" style={{ backgroundColor: '#D3494B' }}>
                START APPLICATION
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
