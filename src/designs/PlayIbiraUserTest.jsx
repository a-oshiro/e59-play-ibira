import { useEffect, useState } from 'react';
import PlayIbiraApp from './PlayIbiraApp';
import './PlayIbira.css';

// Same size as the interactive phone on the main page.
const PHONE_SCALE = (2 / 3) * 1.2;
const TASKS = [
  'Find a sport you’d like to try.',
  'Find out how it works at the park: the rules and how to join.',
  'Check out the community for that sport.',
  "Now, let's imagine you came to the park wanting to play that sport but its courts are full. Enter the line to play (if the selected sport doesn't have lines, please pick another).",
];

const label = { font: '700 11px/1 Lato,sans-serif', letterSpacing: '.12em', color: '#6f6a66' };

// Five 1–5 buttons. Nothing is stored: the moderator reads the answer off the screen.
function Scale({ value, onChange }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const on = value === n;
          return (
            <button
              key={n}
              type="button"
              className={on ? undefined : 'play-ibira-hover-1'}
              aria-pressed={on}
              onClick={() => onChange(n)}
              style={{
                flex: '1',
                height: '44px',
                borderRadius: '10px',
                border: `1.5px solid ${on ? '#1a1613' : '#c9c4bf'}`,
                background: on ? '#1a1613' : '#fff',
                color: on ? '#fff' : '#1a1613',
                font: '700 16px/1 Lato,sans-serif',
                cursor: 'pointer',
              }}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '6px',
          font: '400 12px/1.3 Lato,sans-serif',
          color: '#6f6a66',
        }}
      >
        <span>Not at all</span>
        <span>Very confident</span>
      </div>
    </div>
  );
}

function FinishDialog({ onClose }) {
  const [after, setAfter] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const on = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        background: 'rgba(26,22,19,.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ut-finish-q"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '440px',
          maxWidth: '100%',
          background: '#fff',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 20px 60px rgba(0,0,0,.25)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {done ? (
          <>
            <div style={{ font: '900 italic 28px/1.05 Lato,sans-serif', letterSpacing: '-0.01em' }}>Thank you!</div>
            <div style={{ font: '400 15px/1.5 Lato,sans-serif', color: '#4a4542' }}>
              That's the end of the test. Thanks for sharing your thoughts.
            </div>
          </>
        ) : (
          <>
            <div style={label}>BEFORE YOU GO</div>
            <div id="ut-finish-q" style={{ font: '700 18px/1.4 Lato,sans-serif', textWrap: 'pretty' }}>
              Same question: from 1–5, how confident would you feel showing up now? What changed, or didn’t?
            </div>
            <Scale value={after} onChange={setAfter} />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="play-ibira-hover-1"
                onClick={onClose}
                style={{
                  padding: '12px 18px',
                  borderRadius: '10px',
                  border: '1.5px solid #c9c4bf',
                  background: '#fff',
                  font: '700 14px/1 Lato,sans-serif',
                  cursor: 'pointer',
                }}
              >
                Back to test
              </button>
              <button
                type="button"
                disabled={after == null}
                onClick={() => setDone(true)}
                style={{
                  padding: '12px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  background: after == null ? '#d6d6d4' : '#1a1613',
                  color: '#fff',
                  font: '700 14px/1 Lato,sans-serif',
                  cursor: after == null ? 'default' : 'pointer',
                }}
              >
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Desktop-only test mode at /user-test: the phone prototype next to the test script, with a confidence
// question before and after.
export default function PlayIbiraUserTest() {
  const [before, setBefore] = useState(null);
  const [finishing, setFinishing] = useState(false);

  return (
    <>
      <section style={{ padding: '80px 56px 120px' }}>
        <div className="pi-center-row pi-center-row--phone">
          <div className="pi-side" style={{ width: '340px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={label}>USER TEST</div>
              <div style={{ font: '900 italic 44px/0.95 Lato,sans-serif', letterSpacing: '-0.02em' }}>Play Ibira</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ font: '700 15px/1.45 Lato,sans-serif', textWrap: 'pretty' }}>
                On a scale of 1–5, how confident would you feel showing up alone to play a sport at a park where you
                know no one?
              </div>
              <Scale value={before} onChange={setBefore} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={label}>YOUR TASKS</div>
              <div style={{ font: '400 15px/1.5 Lato,sans-serif', color: '#4a4542', textWrap: 'pretty' }}>
                You just moved to São Paulo and want to try a sport at Ibirapuera Park this Saturday.
              </div>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {TASKS.map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
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
                      {i + 1}
                    </span>
                    <span style={{ font: '400 15px/1.5 Lato,sans-serif', textWrap: 'pretty' }}>{t}</span>
                  </li>
                ))}
              </ol>
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px dashed #c9c9c7',
                  font: '700 14px/1.4 Lato,sans-serif',
                }}
              >
                Please think out loud as you go.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFinishing(true)}
              style={{
                height: '52px',
                borderRadius: '12px',
                border: 'none',
                background: '#1a1613',
                color: '#fff',
                font: '700 16px/1 Lato,sans-serif',
                cursor: 'pointer',
              }}
            >
              Finish Test
            </button>
          </div>
          <PlayIbiraApp start="login" inPark scale={PHONE_SCALE} />
        </div>
      </section>
      {finishing ? <FinishDialog onClose={() => setFinishing(false)} /> : null}
    </>
  );
}
