import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PlayIbira from './designs/PlayIbira';
import { PhoneApp, TabletTotem } from './Standalone';

// Which experience this screen gets:
// - phone:   narrow screens (< 700px wide, the narrowest the desktop page fits without sideways scrolling), or a touch device whose short side is < 600px (a phone turned sideways)
// - tablet:  touch-only devices (no hover, coarse pointer) at least 600px on both sides: iPads, Android tablets
// - desktop: everything else gets the full design canvas
// `?view=phone|tablet|desktop` overrides this, for testing or for sharing a specific view.
const QUERIES = {
  phone: '(max-width: 699px), (hover: none) and (pointer: coarse) and (max-height: 599px)',
  tablet: '(hover: none) and (pointer: coarse) and (min-width: 600px) and (min-height: 600px)',
};
const VIEWS = ['phone', 'tablet', 'desktop'];

function detect() {
  const forced = new URLSearchParams(window.location.search).get('view');
  if (VIEWS.includes(forced)) return forced;
  if (window.matchMedia(QUERIES.phone).matches) return 'phone';
  if (window.matchMedia(QUERIES.tablet).matches) return 'tablet';
  return 'desktop';
}

function Root() {
  const [view, setView] = useState(detect);

  useEffect(() => {
    const lists = Object.values(QUERIES).map((q) => window.matchMedia(q));
    const on = () => setView(detect());
    lists.forEach((l) => l.addEventListener('change', on));
    return () => lists.forEach((l) => l.removeEventListener('change', on));
  }, []);

  useEffect(() => {
    const standalone = view !== 'desktop';
    document.documentElement.classList.toggle('standalone', standalone);
    // Stop iOS from zooming the page when a text field is focused, which would break the app-like layout.
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute('content', `width=device-width, initial-scale=1${standalone ? ', maximum-scale=1' : ''}`);
  }, [view]);

  if (view === 'phone') return <PhoneApp />;
  if (view === 'tablet') return <TabletTotem />;
  return <PlayIbira />;
}

// No <StrictMode>: its double-mounting would re-run the prototype's timers and the totem's speech.
createRoot(document.getElementById('root')).render(<Root />);
