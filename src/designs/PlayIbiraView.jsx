// Generated from "Play Ibira.dc.html" (Claude Design). Markup only; behavior lives in PlayIbira.jsx.
import { Fragment } from 'react';
import { arr, s } from '../lib/template';
import PlayIbiraApp from './PlayIbiraApp';
import PlayIbiraTotem from './PlayIbiraTotem';
import PlayIbiraNotifications from './PlayIbiraNotifications';

export default function PlayIbiraView(vals) {
  return (
    <>
      <section id="t1" style={{ padding: '48px 56px 0' }}>
        {/* Sidebar | phone | empty column, so the phone itself is centered on the page. */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px,1fr) auto minmax(0,1fr)',
            columnGap: '56px',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              justifySelf: 'end',
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
          <PlayIbiraApp start={vals.start} nonce={vals.nonce} inPark={vals.inPark} scale={vals.deviceScale} />
        </div>
      </section>
      <section id="t1b" style={{ padding: '360px 56px 0' }}>
        <PlayIbiraTotem embedded={true} scale={vals.deviceScale} />
      </section>
      <section id="t2" style={{ padding: '360px 56px 160px', width: 'max-content', margin: '0 auto' }}>
        <div style={{ font: '700 22px/1.2 Lato,sans-serif', paddingBottom: '6px' }}>All screens</div>
        <div style={{ font: '400 14px/1.5 Lato,sans-serif', color: '#6f6a66', paddingBottom: '28px' }}>
          Each frame is the live prototype, opened at a given state. Zoom out to see them all.
        </div>
        <div style={{ display: 'flex', gap: '120px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ font: '700 11px/1 Lato,sans-serif', letterSpacing: '.12em', color: '#6f6a66' }}>
              MOBILE APP · IPHONE 390×844
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px 32px',
                width: `${vals.phoneGridW}px`,
                flex: 'none',
              }}
            >
              {arr(vals.gallery).map((g, i_g) => (
                <Fragment key={i_g}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                      <span
                        style={{
                          font: '700 11px/1 ui-monospace,Menlo,monospace',
                          padding: '3px 6px',
                          borderRadius: '4px',
                          background: '#1a1613',
                          color: '#fff',
                        }}
                      >
                        {g?.n}
                      </span>
                      <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{g?.label}</span>
                    </div>
                    <div id={`shot-app-${s(g?.n)}`} style={{ width: 'max-content' }}>
                      <PlayIbiraApp start={g?.start} inPark={true} scale={vals.deviceScale} />
                    </div>
                  </div>
                </Fragment>
              ))}
              {arr(vals.notifPhones).map((g, i_g) => (
                <Fragment key={i_g}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                      <span
                        style={{
                          font: '700 11px/1 ui-monospace,Menlo,monospace',
                          padding: '3px 6px',
                          borderRadius: '4px',
                          background: '#1a1613',
                          color: '#fff',
                        }}
                      >
                        {g?.n}
                      </span>
                      <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{g?.label}</span>
                    </div>
                    <PlayIbiraNotifications screen={g?.k} scale={vals.deviceScale} />
                  </div>
                </Fragment>
              ))}
            </div>
            <div
              style={{
                font: '700 11px/1 Lato,sans-serif',
                letterSpacing: '.12em',
                color: '#6f6a66',
                paddingTop: '40px',
              }}
            >
              SMARTWATCH · NOTIFICATIONS & QUEUE
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 32px' }}>
              {arr(vals.notifWatch).map((g, i_g) => (
                <Fragment key={i_g}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                      <span
                        style={{
                          font: '700 11px/1 ui-monospace,Menlo,monospace',
                          padding: '3px 6px',
                          borderRadius: '4px',
                          background: '#1a1613',
                          color: '#fff',
                        }}
                      >
                        {g?.n}
                      </span>
                      <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{g?.label}</span>
                    </div>
                    <PlayIbiraNotifications screen={g?.k} scale={vals.deviceScale} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ font: '700 11px/1 Lato,sans-serif', letterSpacing: '.12em', color: '#6f6a66' }}>
              WALK-UP TOTEM · IPAD 11"
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(3,${vals.totemColW}px)`, gap: '40px 32px' }}>
              {arr(vals.totemGallery).map((g, i_g) => (
                <Fragment key={i_g}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                      <span
                        style={{
                          font: '700 11px/1 ui-monospace,Menlo,monospace',
                          padding: '3px 6px',
                          borderRadius: '4px',
                          background: '#1a1613',
                          color: '#fff',
                        }}
                      >
                        {g?.n}
                      </span>
                      <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{g?.label}</span>
                    </div>
                    <div id={`shot-totem-${s(g?.n)}`} style={{ width: 'max-content' }}>
                      <PlayIbiraTotem
                        embedded={true}
                        bare={true}
                        start={g?.start}
                        showDemo={false}
                        scale={vals.deviceScale}
                      />
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
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
