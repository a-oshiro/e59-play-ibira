// Generated from "Play Ibira.dc.html" (Claude Design). Markup only; behavior lives in PlayIbira.jsx.
import { Fragment } from 'react';
import { arr, s } from '../lib/template';
import PlayIbiraApp from './PlayIbiraApp';
import PlayIbiraTotem from './PlayIbiraTotem';
import PlayIbiraNotifications from './PlayIbiraNotifications';

// One group of screens. Columns are the device's width and wrap to fit the window; the title spans the
// first row so it lines up with the left edge of the centered grid.
function GalleryGrid({ title, colW, children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, ${colW}px)`,
        justifyContent: 'center',
        gap: '40px 32px',
      }}
    >
      <div style={{ gridColumn: '1 / -1', font: '700 11px/1 Lato,sans-serif', letterSpacing: '.12em', color: '#6f6a66' }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function GalleryItem({ n, label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
        <span
          style={{
            font: '700 11px/1 ui-monospace,Menlo,monospace',
            padding: '3px 6px',
            borderRadius: '4px',
            background: '#1a1613',
            color: '#fff',
            flex: 'none',
          }}
        >
          {n}
        </span>
        <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

export default function PlayIbiraView(vals) {
  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          padding: '18px 56px',
          borderBottom: '1px solid rgba(26,22,19,.12)',
        }}
      >
        <div style={{ font: '700 15px/1.2 Lato,sans-serif', whiteSpace: 'nowrap' }}>
          DGMD E59 <span style={{ color: '#c9c4bf', padding: '0 6px' }}>|</span>
          <span style={{ fontWeight: 400, color: '#4a4542' }}>Weekend Experience</span>
        </div>
        <nav style={{ display: 'flex', gap: '28px' }}>
          {arr(vals.headerLinks).map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{ font: '700 14px/1.2 Lato,sans-serif', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>
      <section id="t1" style={{ padding: '100px 56px 0' }}>
        {/* Sidebar | phone | empty column, so the phone itself is centered on the page. */}
        <div className="pi-center-row pi-center-row--phone">
          <div
            className="pi-side"
            style={{
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              flex: 'none',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ font: '700 11px/1 Lato,sans-serif', letterSpacing: '.12em', color: '#6f6a66' }}>
                CLICKABLE PROTOTYPE · IPHONE 390×844
              </div>
              <div style={{ font: '900 italic 44px/0.95 Lato,sans-serif', letterSpacing: '-0.02em' }}>Play Ibira</div>
              <div style={{ font: '400 15px/1.5 Lato,sans-serif', color: '#4a4542', textWrap: 'pretty' }}>
                Discover, join and keep playing community sports in Ibirapuera Park. Sample data for Tue, Oct 13, 2026;
                you're Carolina, 42, new to tennis.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div
                style={{
                  font: '700 12px/1 Lato,sans-serif',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: '#6f6a66',
                  paddingBottom: '8px',
                }}
              >
                Jump to a flow
              </div>
              {arr(vals.jumps).map((j, i_j) => (
                <Fragment key={i_j}>
                  <div
                    className="play-ibira-hover-1"
                    onClick={j?.onClick}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'baseline',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: `${s(j?.bg)}`,
                    }}
                  >
                    {' '}
                    <span style={{ font: '700 11px/1 ui-monospace,Menlo,monospace', color: '#6f6a66', width: '20px' }}>
                      {j?.n}
                    </span>{' '}
                    <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{j?.label}</span>{' '}
                  </div>
                </Fragment>
              ))}
            </div>
            <div
              onClick={vals.toggleInPark}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1.5px dashed #c9c9c7',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  font: '700 10px/1 ui-monospace,Menlo,monospace',
                  letterSpacing: '.06em',
                  color: '#6f6a66',
                  padding: '4px 6px',
                  borderRadius: '5px',
                  background: '#e8e8e7',
                }}
              >
                DEMO
              </div>
              <div style={{ flex: '1', font: '700 14px/1.3 Lato,sans-serif' }}>Simulate: I'm in the park</div>
              <div
                style={{
                  width: '44px',
                  height: '26px',
                  borderRadius: '13px',
                  background: `${s(vals.inParkBg)}`,
                  position: 'relative',
                  transition: 'background .2s',
                  flex: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: `${s(vals.inParkKnob)}px`,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#fff',
                    boxShadow: '0 1px 3px rgba(0,0,0,.2)',
                    transition: 'left .2s',
                  }}
                />
              </div>
            </div>
            <div style={{ font: '400 13px/1.5 Lato,sans-serif', color: '#6f6a66', textWrap: 'pretty' }}>
              {'Try: tap a pin, drag the sheet up, flip the '}
              <b style={{ color: '#1a1613' }}>DEMO</b>
              {' toggle above, then join a queue in Play, then tap "DEMO: my turn".'}
            </div>
          </div>
          <PlayIbiraApp start={vals.start} nonce={vals.nonce} inPark={vals.inPark} scale={vals.mainPhoneScale} />
        </div>
      </section>
      <section id="t1b" style={{ padding: '360px 56px 0' }}>
        <PlayIbiraTotem embedded={true} scale={vals.deviceScale} />
      </section>
      <section id="t2" style={{ padding: '200px 56px 160px' }}>
        <div style={{ font: '700 22px/1.2 Lato,sans-serif', paddingBottom: '6px', textAlign: 'center' }}>All screens</div>
        <div
          style={{
            font: '400 14px/1.5 Lato,sans-serif',
            color: '#6f6a66',
            paddingBottom: '48px',
            textAlign: 'center',
          }}
        >
          Each frame is the live prototype, opened at a given state.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
          <GalleryGrid title="MOBILE APP · IPHONE 390×844" colW={vals.phoneColW}>
            {arr(vals.gallery).map((g) => (
              <GalleryItem key={g.n} n={g.n} label={g.label}>
                <div id={`shot-app-${s(g?.n)}`} style={{ width: 'max-content' }}>
                  <PlayIbiraApp start={g?.start} inPark={true} scale={vals.deviceScale} />
                </div>
              </GalleryItem>
            ))}
            {arr(vals.notifPhones).map((g) => (
              <GalleryItem key={g.n} n={g.n} label={g.label}>
                <PlayIbiraNotifications screen={g?.k} scale={vals.deviceScale} />
              </GalleryItem>
            ))}
          </GalleryGrid>
          <GalleryGrid title="SMARTWATCH · NOTIFICATIONS & QUEUE" colW={vals.watchColW}>
            {arr(vals.notifWatch).map((g) => (
              <GalleryItem key={g.n} n={g.n} label={g.label}>
                <PlayIbiraNotifications screen={g?.k} scale={vals.deviceScale} />
              </GalleryItem>
            ))}
          </GalleryGrid>
          <GalleryGrid title={'WALK-UP TOTEM · IPAD 11"'} colW={vals.totemColW}>
            {arr(vals.totemGallery).map((g) => (
              <GalleryItem key={g.n} n={g.n} label={g.label}>
                <div id={`shot-totem-${s(g?.n)}`} style={{ width: 'max-content' }}>
                  <PlayIbiraTotem embedded={true} bare={true} start={g?.start} showDemo={false} scale={vals.deviceScale} />
                </div>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </div>
        {vals.showDecisions ? (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', padding: '280px 0 16px' }}>
              <div style={{ font: '700 22px/1.2 Lato,sans-serif', flex: '1' }}>Design decisions</div>
              <div
                onClick={vals.toggleAllDec}
                style={{
                  font: '700 13px/1 Lato,sans-serif',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: '#6f6a66',
                }}
              >
                {vals.allDecLabel}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '900px',
                borderTop: '1px solid rgba(26,22,19,.12)',
              }}
            >
              {arr(vals.decisions).map((d, i_d) => (
                <Fragment key={i_d}>
                  <div style={{ borderBottom: '1px solid rgba(26,22,19,.12)' }}>
                    <div
                      className="play-ibira-hover-1"
                      onClick={d?.toggle}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '16px 4px',
                        cursor: 'pointer',
                      }}
                    >
                      {' '}
                      <span
                        style={{ font: '700 11px/1 ui-monospace,Menlo,monospace', color: '#6f6a66', width: '20px' }}
                      >
                        {d?.n}
                      </span>{' '}
                      <div style={{ flex: '1', font: '700 15px/1.35 Lato,sans-serif' }}>{d?.t}</div>
                      <div
                        style={{
                          font: '400 20px/1 Lato,sans-serif',
                          color: '#6f6a66',
                          width: '20px',
                          textAlign: 'center',
                        }}
                      >
                        {d?.icon}
                      </div>
                    </div>
                    {d?.open ? (
                      <div
                        style={{
                          padding: '0 40px 18px 38px',
                          font: '400 14px/1.55 Lato,sans-serif',
                          color: '#4a4542',
                          textWrap: 'pretty',
                        }}
                      >
                        {d?.b}
                      </div>
                    ) : null}
                  </div>
                </Fragment>
              ))}
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
