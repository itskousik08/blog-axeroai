import { useState, useEffect } from 'react';

const CONSENT_KEY = 'axeroai_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        // Small delay so it doesn't flash on first render
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available (e.g. SSR)
    }
  }, []);

  const saveAndClose = (analytics, marketing) => {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ essential: true, analytics, marketing, timestamp: Date.now() })
      );
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9000] p-3 sm:p-5 animate-in slide-in-from-bottom"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="max-w-xl mx-auto bg-card border border-card-border rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
        <div className="p-5">
          <div className="flex gap-4">
            {/* Icon */}
            <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold font-display text-text-primary mb-1">
                We use cookies
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                We use cookies to enhance your experience and analyze traffic. Your essential cookies are always active.
              </p>

              {/* Manage panel */}
              {showManage && (
                <div className="mt-4 p-4 bg-background rounded-xl border border-card-border space-y-3">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">Manage preferences</p>
                  
                  {/* Essential */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-primary">Essential</p>
                      <p className="text-xs text-text-muted">Required for the site to work</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs text-success bg-success/10 border border-success/20 rounded-full">Always on</span>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-primary">Analytics</p>
                      <p className="text-xs text-text-muted">Help us understand site usage</p>
                    </div>
                    <button
                      onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                      className={`relative w-10 h-5 rounded-full transition-colors ${prefs.analytics ? 'bg-brand' : 'bg-card-border'}`}
                      role="switch"
                      aria-checked={prefs.analytics}
                      aria-label="Toggle analytics cookies"
                    >
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${prefs.analytics ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-primary">Marketing</p>
                      <p className="text-xs text-text-muted">Personalized content and ads</p>
                    </div>
                    <button
                      onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                      className={`relative w-10 h-5 rounded-full transition-colors ${prefs.marketing ? 'bg-brand' : 'bg-card-border'}`}
                      role="switch"
                      aria-checked={prefs.marketing}
                      aria-label="Toggle marketing cookies"
                    >
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${prefs.marketing ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </button>
                  </div>

                  <button
                    onClick={() => saveAndClose(prefs.analytics, prefs.marketing)}
                    className="w-full mt-1 py-2 bg-brand hover:bg-brand-hover text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Save preferences
                  </button>
                </div>
              )}

              {/* Action buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => saveAndClose(true, true)}
                  className="px-4 py-2 text-sm bg-brand hover:bg-brand-hover text-white rounded-lg transition-colors font-medium"
                >
                  Accept all
                </button>
                <button
                  onClick={() => saveAndClose(false, false)}
                  className="px-4 py-2 text-sm border border-card-border text-text-secondary hover:text-text-primary hover:border-text-muted rounded-lg transition-colors"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={() => setShowManage(!showManage)}
                  className="px-4 py-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
                >
                  {showManage ? 'Hide' : 'Manage'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
