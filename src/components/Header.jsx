import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/blog', label: 'Blog' },
  { href: '/blocks', label: 'Docs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-card-border shadow-sm shadow-black/20'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded-lg"
            aria-label="AXEROAI — home"
          >
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20 group-hover:shadow-brand/40 transition-shadow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" fillOpacity="0.9"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/>
              </svg>
            </div>
            <span className="font-display font-bold text-[17px] text-text-primary tracking-tight leading-none">
              AXEROAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-text-primary bg-card'
                    : 'text-text-secondary hover:text-text-primary hover:bg-card/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#"
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg"
            >
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm bg-brand hover:bg-brand-hover text-white rounded-lg transition-all font-medium shadow-lg shadow-brand/20 hover:shadow-brand/30"
            >
              Get started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="sr-only">{isOpen ? 'Close' : 'Open'} menu</span>
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="border-t border-card-border py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-text-primary bg-card'
                    : 'text-text-secondary hover:text-text-primary hover:bg-card/60'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pb-4 flex flex-col gap-2 border-t border-card-border pt-3">
            <a
              href="#"
              className="text-sm text-center py-2.5 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-card"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-sm text-center py-2.5 bg-brand hover:bg-brand-hover text-white rounded-lg transition-colors font-medium"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
