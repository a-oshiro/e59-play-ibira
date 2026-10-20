import { useEffect, useState } from 'react';
import PlayIbiraApp from './designs/PlayIbiraApp';
import PlayIbiraTotem from './designs/PlayIbiraTotem';
import './standalone.css';

function useViewport() {
  const read = () => ({ w: window.innerWidth, h: window.innerHeight });
  const [vp, setVp] = useState(read);
  useEffect(() => {
    const on = () => setVp(read());
    window.addEventListener('resize', on);
    window.visualViewport?.addEventListener('resize', on);
    return () => {
      window.removeEventListener('resize', on);
      window.visualViewport?.removeEventListener('resize', on);
    };
  }, []);
  return vp;
}

// Fills the screen with a design that was drawn `designW` wide: scale it to the screen width and give it
// whatever height is left. If that would be shorter than `minH` (e.g. a rotated device), fit by height
// instead and center it, leaving dark bars on the sides.
function FullScreen({ designW, minH, bg, render }) {
  const { w, h } = useViewport();
  let s = w / designW;
  let H = h / s;
  if (H < minH) {
    s = h / minH;
    H = minH;
  }
  return (
    <div className="standalone-stage" style={{ background: '#1a1613' }}>
      <div style={{ width: designW * s, height: H * s, flex: 'none', background: bg, overflow: 'hidden' }}>
        <div style={{ width: designW, height: H, transform: `scale(${s})`, transformOrigin: '0 0' }}>
          {render(Math.round(H))}
        </div>
      </div>
    </div>
  );
}

// The Play Ibira app on its own, as if installed on the phone. Always "in the park".
export function PhoneApp() {
  return (
    <FullScreen
      designW={390}
      minH={640}
      bg="#fff"
      render={(H) => <PlayIbiraApp standalone screenH={H} start="login" inPark />}
    />
  );
}

// The walk-up totem on its own, as if this tablet were the totem.
export function TabletTotem() {
  return (
    <FullScreen
      designW={834}
      minH={1000}
      bg="#f7f7f6"
      render={(H) => <PlayIbiraTotem standalone screenH={H} embedded bare showDemo={false} />}
    />
  );
}
