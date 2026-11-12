import React, { useEffect, useRef } from 'react';

// Cloudflare Turnstile Sitekey (Scholz & Friese Multi-Domain Widget)
const TURNSTILE_SITEKEY = "0x4AAAAAADVEqwJz-pyeZXi0";

export default function TurnstileWidget({ onToken, onExpired, theme = "light", className = "" }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let interval = null;

    const renderWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        try {
          // Container zwingend leeren, um StrictMode-Doppelrender-Fehler zu vermeiden
          containerRef.current.innerHTML = "";
          
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: TURNSTILE_SITEKEY,
            callback: (token) => {
              if (onToken) onToken(token);
            },
            "expired-callback": () => {
              if (onExpired) onExpired();
            },
            theme: theme,
            size: "normal",
          });
          if (interval) clearInterval(interval);
        } catch (e) {
          console.error("Turnstile render error:", e);
        }
      }
    };

    renderWidget();

    if (!widgetIdRef.current) {
      interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {}
        widgetIdRef.current = null;
      }
    };
  }, [theme]);

  return (
    <div className={`turnstile-wrapper my-3 ${className}`}>
      <div ref={containerRef} className="cf-turnstile-container min-h-[65px] flex items-center" />
    </div>
  );
}
