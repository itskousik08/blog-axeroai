const columns = [
  {
    heading: 'Products',
    links: [
      { label: 'API Platform', href: '#' },
      { label: 'Models', href: '#' },
      { label: 'Claude', href: '#' },
      { label: 'Enterprise', href: '#' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'For Developers', href: '#' },
      { label: 'For Business', href: '#' },
      { label: 'Education', href: '#' },
      { label: 'Healthcare', href: '#' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Documentation', href: '/blocks' },
      { label: 'Changelog', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'News', href: '/news' },
      { label: 'Research Papers', href: '#' },
      { label: 'Tutorials', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Usage Policy', href: '#' },
      { label: 'Responsible Disclosure', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 5.958 5.45-5.958zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-card-border bg-background" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-5">
            <a href="/" className="flex items-center gap-2.5 group w-fit" aria-label="AXEROAI home">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" fillOpacity="0.9"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/>
                </svg>
              </div>
              <span className="font-display font-bold text-[17px] text-text-primary tracking-tight">AXEROAI</span>
            </a>

            <p className="text-sm text-text-muted leading-relaxed max-w-[240px]">
              AI research and products that put safety at the frontier of human innovation.
            </p>

            <div className="flex items-center gap-2" role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  role="listitem"
                  className="w-8 h-8 rounded-lg border border-card-border bg-card flex items-center justify-center text-text-muted hover:text-text-primary hover:border-brand/40 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="lg:col-span-1">
              <h3 className="text-[11px] font-semibold font-display text-text-primary uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label} role="listitem">
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} AXEROAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Responsible Disclosure'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
