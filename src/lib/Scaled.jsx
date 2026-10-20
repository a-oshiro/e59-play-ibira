import { useLayoutEffect, useRef, useState } from 'react';

// Draws a fixed-size mockup at `scale` and sizes its box to match, so the page lays out around the scaled size.
// Uses transform (not CSS zoom) because the prototype's drag handlers already correct for transforms.
export default function Scaled({ scale = 1, children }) {
  const inner = useRef(null);
  const [size, setSize] = useState(null);

  useLayoutEffect(() => {
    const el = inner.current;
    const measure = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div style={{ width: size ? size.w * scale : undefined, height: size ? size.h * scale : undefined, flex: 'none' }}>
      <div ref={inner} style={{ width: 'max-content', transform: `scale(${scale})`, transformOrigin: '0 0' }}>
        {children}
      </div>
    </div>
  );
}
