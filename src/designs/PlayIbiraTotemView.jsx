// Generated from "Play Ibira Totem.dc.html" (Claude Design). Markup only; behavior lives in PlayIbiraTotem.jsx.
import { Fragment } from 'react';
import { arr, s } from '../lib/template';
import Scaled from '../lib/Scaled';

export default function PlayIbiraTotemView(vals) {
  return (
    <>
      <div
        style={{ padding: `${s(vals.pad)}px`, width: vals.showSide ? '100%' : 'max-content', boxSizing: 'border-box' }}
      >
        {/* With the side panel, a 3-column grid keeps the device itself centered on the page. */}
        <div
          style={
            vals.showSide
              ? {
                  display: 'grid',
                  gridTemplateColumns: 'minmax(300px,1fr) auto minmax(0,1fr)',
                  columnGap: '56px',
                  alignItems: 'start',
                }
              : { display: 'flex', gap: '56px', alignItems: 'flex-start' }
          }
        >
          {vals.showSide ? (
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
                  WALK-UP TOTEM · IPAD 11" 834×1194
                </div>
                <div style={{ font: '900 italic 44px/0.95 Lato,sans-serif', letterSpacing: '-0.02em' }}>
                  Play Ibira Totem
                </div>
                <div style={{ font: '400 15px/1.5 Lato,sans-serif', color: '#4a4542', textWrap: 'pretty' }}>
                  A queue screen next to each court area for people who don't have the app. See who's playing and who's
                  next, check the court rules, and join the line solo or with a group — with an optional text when it's
                  your turn. Same line as the app.
                </div>
              </div>
              {vals.showDemo ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
                      Totem location
                    </div>
                    {arr(vals.locs).map((l, i_l) => (
                      <Fragment key={i_l}>
                        <div
                          className="play-ibira-totem-hover-1"
                          onClick={l?.on}
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'baseline',
                            padding: '7px 10px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            background: `${s(l?.bg)}`,
                          }}
                        >
                          {' '}
                          <span
                            style={{ font: '700 11px/1 ui-monospace,Menlo,monospace', color: '#6f6a66', width: '20px' }}
                          >
                            {l?.n}
                          </span>{' '}
                          <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{l?.name}</span>{' '}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                      className="play-ibira-totem-hover-1"
                      onClick={vals.finishGame}
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
                      <div style={{ flex: '1', font: '700 14px/1.3 Lato,sans-serif' }}>
                        Simulate: finish the next game
                      </div>
                    </div>
                    <div
                      className="play-ibira-totem-hover-1"
                      onClick={vals.reset}
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
                      <div style={{ flex: '1', font: '700 14px/1.3 Lato,sans-serif' }}>Reset the totem</div>
                    </div>
                  </div>
                  <div style={{ font: '400 13px/1.5 Lato,sans-serif', color: '#6f6a66', textWrap: 'pretty' }}>
                    {'Try: join the line with a phone number, then tap '}
                    <b style={{ color: '#1a1613' }}>DEMO</b>
                    {' to finish games and watch the line move — texts appear below.'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div
                      style={{
                        font: '700 12px/1 Lato,sans-serif',
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        color: '#6f6a66',
                        paddingBottom: '8px',
                      }}
                    >
                      Texts sent
                    </div>
                    {vals.noSms ? (
                      <div style={{ font: '400 13px/1.5 Lato,sans-serif', color: '#6f6a66', marginTop: '-8px' }}>
                        None yet.
                      </div>
                    ) : null}
                    {arr(vals.sms).map((m, i_m) => (
                      <Fragment key={i_m}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            animation: 'tFade .35s ease both',
                          }}
                        >
                          <div style={{ font: '700 12px/1 Lato,sans-serif', color: '#6f6a66' }}>
                            {'To '}
                            {m?.to}
                            {' · '}
                            {m?.at}
                          </div>
                          <div
                            style={{
                              background: '#fff',
                              borderRadius: '16px 16px 16px 4px',
                              padding: '12px 14px',
                              font: '400 14px/1.45 Lato,sans-serif',
                            }}
                          >
                            {m?.text}
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          <Scaled scale={vals.scale}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              {/* DEVICE */}
              <div
                style={{
                  width: `${vals.frame.w}px`,
                  height: `${vals.frame.h}px`,
                  borderRadius: `${vals.frame.radius}px`,
                  background: vals.frame.bg,
                  padding: `${vals.frame.pad}px`,
                  boxSizing: 'border-box',
                  boxShadow: `${s(vals.devShadow)}`,
                  flex: 'none',
                }}
              >
                <div
                  style={{
                    width: '834px',
                    height: `${vals.screenHeight}px`,
                    borderRadius: `${vals.frame.screenRadius}px`,
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f7f7f6',
                  }}
                >
                  {/* HOME */}
                  <div style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        height: '92px',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '0 40px',
                        background: '#fff',
                        boxShadow: 'inset 0 -1px 0 #e4e4e2',
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '15px',
                          background: 'oklch(0.68 0.21 44)',
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <img
                          src="assets/pictograms/white/tennis.svg"
                          alt=""
                          style={{ width: '32px', height: '32px' }}
                        />
                      </div>
                      <div style={{ font: '900 italic 26px/1 Lato,sans-serif', letterSpacing: '-0.01em', flex: '1' }}>
                        Play Ibira
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          font: '700 16px/1 Lato,sans-serif',
                          color: '#4a4542',
                        }}
                      >
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: 'oklch(0.68 0.21 44)',
                            animation: 'tPulse 1.6s ease-out infinite',
                          }}
                        />
                        <span>Live</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', paddingLeft: '18px' }}>
                        <div
                          className="play-ibira-totem-active-2"
                          onClick={vals.openVoice}
                          title="Voice mode"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: '#fff',
                            boxShadow: 'inset 0 0 0 2px #1a1613',
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <svg width="26" height="26" viewBox="0 0 24 24" style={{ display: 'block' }}>
                            <rect x="9" y="2.5" width="6" height="11.5" rx="3" style={{ fill: '#1a1613' }} />
                            <path
                              d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"
                              style={{ fill: 'none', stroke: '#1a1613', strokeWidth: '2px', strokeLinecap: 'round' }}
                            />
                          </svg>
                        </div>
                        <div
                          onClick={vals.openHelp}
                          title="Call a park supervisor"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: `${s(vals.helpBg)}`,
                            boxShadow: `${s(vals.helpSh)}`,
                            color: `${s(vals.helpFg)}`,
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                            font: '900 28px/1 Lato,sans-serif',
                          }}
                        >
                          ?
                        </div>
                        <div
                          onClick={vals.openMed}
                          title="Call a medic"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: `${s(vals.medBg)}`,
                            boxShadow: `${s(vals.medSh)}`,
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <div style={{ position: 'relative', width: '24px', height: '24px' }}>
                            <div
                              style={{
                                position: 'absolute',
                                left: '8px',
                                top: '0',
                                width: '8px',
                                height: '24px',
                                borderRadius: '2px',
                                background: `${s(vals.medFg)}`,
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '0',
                                height: '8px',
                                width: '24px',
                                borderRadius: '2px',
                                background: `${s(vals.medFg)}`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          font: '700 26px/1 Lato,sans-serif',
                          paddingLeft: '14px',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {vals.clock}
                      </div>
                    </div>
                    {vals.helpSent ? (
                      <div
                        onClick={vals.openHelp}
                        style={{
                          flex: 'none',
                          background: '#1a1613',
                          color: '#fff',
                          padding: '16px 40px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          cursor: 'pointer',
                          animation: 'tFade .4s ease both',
                        }}
                      >
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'oklch(0.68 0.21 44)',
                            display: 'grid',
                            placeItems: 'center',
                            font: '900 18px/1 Lato,sans-serif',
                          }}
                        >
                          ?
                        </div>
                        <div style={{ flex: '1', font: '700 19px/1.3 Lato,sans-serif' }}>
                          A park supervisor is on the way · ~{vals.helpEta}
                          {' min'}
                        </div>
                      </div>
                    ) : null}
                    {vals.medSent ? (
                      <div
                        onClick={vals.openMed}
                        style={{
                          flex: 'none',
                          background: 'oklch(0.56 0.2 27)',
                          color: '#fff',
                          padding: '16px 40px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          cursor: 'pointer',
                          animation: 'tFade .4s ease both',
                        }}
                      >
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: '#fff',
                            display: 'grid',
                            placeItems: 'center',
                          }}
                        >
                          <div style={{ position: 'relative', width: '16px', height: '16px' }}>
                            <div
                              style={{
                                position: 'absolute',
                                left: '5.44px',
                                top: '0',
                                width: '5.12px',
                                height: '16px',
                                borderRadius: '3px',
                                background: 'oklch(0.56 0.2 27)',
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '5.44px',
                                left: '0',
                                height: '5.12px',
                                width: '16px',
                                borderRadius: '3px',
                                background: 'oklch(0.56 0.2 27)',
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ flex: '1', font: '700 19px/1.3 Lato,sans-serif' }}>
                          Medic on the way · ~{vals.medEta}
                          {' min · stay with the injured person'}
                        </div>
                      </div>
                    ) : null}
                    {vals.hasBanner ? (
                      <div
                        style={{
                          flex: 'none',
                          background: 'oklch(0.68 0.21 44)',
                          color: '#fff',
                          padding: '20px 40px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          animation: 'tFade .4s ease both',
                        }}
                      >
                        <div style={{ font: '900 30px/1 Lato,sans-serif' }}>{vals.banner?.court}</div>
                        <div style={{ flex: '1', font: '700 22px/1.25 Lato,sans-serif' }}>
                          {'is free — '}
                          {vals.banner?.name}, you're on.
                        </div>
                      </div>
                    ) : null}
                    <div
                      style={{
                        flex: '1',
                        minHeight: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px',
                        padding: '32px 40px 0',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                        <div
                          style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '20px',
                            background: '#fff',
                            boxShadow: '0 0 0 1px #e4e4e2',
                            display: 'grid',
                            placeItems: 'center',
                            flex: 'none',
                          }}
                        >
                          <img src={vals.locPic} alt="" style={{ width: '50px', height: '50px' }} />
                        </div>
                        <div>
                          <div style={{ font: '700 40px/1.1 Lato,sans-serif' }}>{vals.locName}</div>
                          <div style={{ font: '400 19px/1.4 Lato,sans-serif', color: '#4a4542', paddingTop: '4px' }}>
                            {vals.locSub}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div
                          style={{
                            font: '700 15px/1 Lato,sans-serif',
                            letterSpacing: '.06em',
                            textTransform: 'uppercase',
                            color: '#6f6a66',
                          }}
                        >
                          On court now
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          {arr(vals.courts).map((c, i_c) => (
                            <Fragment key={i_c}>
                              <div
                                style={{
                                  borderRadius: '20px',
                                  background: `${s(c?.bg)}`,
                                  color: '#fff',
                                  padding: '20px 22px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '14px',
                                  minHeight: '150px',
                                  boxSizing: 'border-box',
                                  transition: 'background .4s',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <div
                                    style={{
                                      flex: '1',
                                      font: '700 15px/1 Lato,sans-serif',
                                      letterSpacing: '.04em',
                                      textTransform: 'uppercase',
                                      color: `${s(c?.lblFg)}`,
                                    }}
                                  >
                                    {c?.n}
                                  </div>
                                  {c?.nextFree ? (
                                    <div
                                      style={{
                                        font: '700 13px/1 Lato,sans-serif',
                                        color: '#1a1613',
                                        background: 'oklch(0.68 0.21 44)',
                                        padding: '6px 10px',
                                        borderRadius: '999px',
                                      }}
                                    >
                                      Frees next
                                    </div>
                                  ) : null}
                                </div>
                                <div style={{ font: '700 23px/1.2 Lato,sans-serif', flex: '1' }}>{c?.p}</div>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                                  <div
                                    style={{ font: '700 32px/1 Lato,sans-serif', fontVariantNumeric: 'tabular-nums' }}
                                  >
                                    {c?.left}
                                  </div>
                                  <div style={{ font: '400 16px/1 Lato,sans-serif', color: `${s(c?.lblFg)}` }}>
                                    {c?.leftLbl}
                                  </div>
                                </div>
                                <div
                                  style={{
                                    height: '5px',
                                    borderRadius: '3px',
                                    background: 'rgba(255,255,255,.16)',
                                    overflow: 'hidden',
                                  }}
                                >
                                  <div
                                    style={{
                                      height: '100%',
                                      width: `${s(c?.pct)}%`,
                                      background: 'oklch(0.68 0.21 44)',
                                      borderRadius: '3px',
                                      transition: 'width 1s linear',
                                    }}
                                  />
                                </div>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                      <div style={{ flex: '1', minHeight: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                          <div
                            style={{
                              font: '700 15px/1 Lato,sans-serif',
                              letterSpacing: '.06em',
                              textTransform: 'uppercase',
                              color: '#6f6a66',
                              flex: '1',
                            }}
                          >
                            The line
                          </div>
                          <div style={{ font: '700 17px/1 Lato,sans-serif' }}>{vals.lineCount}</div>
                        </div>
                        <div
                          style={{
                            flex: '1',
                            minHeight: '0',
                            overflowY: 'auto',
                            scrollbarWidth: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                          }}
                        >
                          {vals.lineEmpty ? (
                            <div
                              style={{
                                padding: '28px',
                                borderRadius: '18px',
                                border: '2px dashed #c9c9c7',
                                font: '400 20px/1.4 Lato,sans-serif',
                                color: '#4a4542',
                                textAlign: 'center',
                              }}
                            >
                              No one's waiting. Join and you're up next.
                            </div>
                          ) : null}
                          {arr(vals.line).map((e, i_e) => (
                            <Fragment key={i_e}>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '16px',
                                  padding: '14px 18px',
                                  borderRadius: '18px',
                                  background: `${s(e?.bg)}`,
                                  boxShadow: `${s(e?.sh)}`,
                                  animation: 'tFade .4s ease both',
                                }}
                              >
                                <div
                                  style={{
                                    width: '34px',
                                    font: '700 22px/1 Lato,sans-serif',
                                    color: '#6f6a66',
                                    fontVariantNumeric: 'tabular-nums',
                                  }}
                                >
                                  {e?.pos}
                                </div>
                                <div
                                  style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    background: '#e4e4e2',
                                    display: 'grid',
                                    placeItems: 'center',
                                    font: '700 18px/1 Lato,sans-serif',
                                    flex: 'none',
                                  }}
                                >
                                  {e?.ini}
                                </div>
                                <div
                                  style={{
                                    flex: '1',
                                    minWidth: '0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '5px',
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ font: '700 22px/1.15 Lato,sans-serif' }}>{e?.name}</div>
                                    {e?.first ? (
                                      <div
                                        style={{
                                          font: '700 13px/1 Lato,sans-serif',
                                          color: '#fff',
                                          background: 'oklch(0.68 0.21 44)',
                                          padding: '6px 10px',
                                          borderRadius: '999px',
                                        }}
                                      >
                                        Up next
                                      </div>
                                    ) : null}
                                    {e?.mine ? (
                                      <div
                                        style={{
                                          font: '700 13px/1 Lato,sans-serif',
                                          color: '#1a1613',
                                          boxShadow: 'inset 0 0 0 1.5px #1a1613',
                                          padding: '5px 9px',
                                          borderRadius: '999px',
                                        }}
                                      >
                                        Just joined
                                      </div>
                                    ) : null}
                                  </div>
                                  <div style={{ font: '400 16px/1 Lato,sans-serif', color: '#6f6a66' }}>{e?.size}</div>
                                </div>
                                <div style={{ font: '700 22px/1 Lato,sans-serif', fontVariantNumeric: 'tabular-nums' }}>
                                  {e?.eta}
                                </div>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: 'none',
                        background: '#fff',
                        boxShadow: '0 -1px 0 #e4e4e2',
                        padding: '24px 40px 32px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                        <div style={{ flex: '1', font: '400 19px/1.35 Lato,sans-serif', color: '#4a4542' }}>
                          If you join now
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                          <div style={{ font: '700 30px/1 Lato,sans-serif' }}>{vals.yourPos}</div>
                          <div style={{ font: '400 17px/1 Lato,sans-serif', color: '#6f6a66' }}>in line</div>
                        </div>
                        <div style={{ width: '1px', height: '30px', background: '#e4e4e2' }} />
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                          <div style={{ font: '700 30px/1 Lato,sans-serif' }}>{vals.waitNow}</div>
                          <div style={{ font: '400 17px/1 Lato,sans-serif', color: '#6f6a66' }}>to play</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '14px' }}>
                        <div
                          className="play-ibira-totem-active-2"
                          onClick={vals.openRules}
                          style={{
                            flex: '1',
                            height: '88px',
                            borderRadius: '20px',
                            boxShadow: 'inset 0 0 0 2px #1a1613',
                            display: 'grid',
                            placeItems: 'center',
                            font: '700 22px/1 Lato,sans-serif',
                            cursor: 'pointer',
                          }}
                        >
                          Court rules
                        </div>
                        <div
                          className="play-ibira-totem-active-3"
                          onClick={vals.openJoin}
                          style={{
                            flex: '2',
                            height: '88px',
                            borderRadius: '20px',
                            background: 'oklch(0.68 0.21 44)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            font: '700 26px/1 Lato,sans-serif',
                            cursor: 'pointer',
                            boxShadow: '0 14px 28px -16px oklch(0.68 0.21 44 / .9)',
                          }}
                        >
                          <span>Join the line</span>
                          <span style={{ fontSize: '30px' }}>→</span>
                        </div>
                      </div>
                      <div style={{ font: '400 16px/1.3 Lato,sans-serif', color: '#6f6a66', textAlign: 'center' }}>
                        Have the Play Ibira app? You can join this line from the Play tab.
                      </div>
                    </div>
                  </div>
                  {/* RULES */}
                  {vals.isRules ? (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px 48px 40px',
                        boxSizing: 'border-box',
                        gap: '32px',
                        animation: 'tUp .45s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div
                          onClick={vals.goHome}
                          style={{
                            height: '64px',
                            padding: '0 24px 0 18px',
                            borderRadius: '999px',
                            boxShadow: 'inset 0 0 0 2px #1a1613',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            font: '700 20px/1 Lato,sans-serif',
                            cursor: 'pointer',
                          }}
                        >
                          <span style={{ fontSize: '30px', lineHeight: '0' }}>‹</span>
                          <span>Back to the line</span>
                        </div>
                      </div>
                      <div>
                        <div style={{ font: '700 44px/1.1 Lato,sans-serif' }}>Court rules</div>
                        <div style={{ font: '400 20px/1.4 Lato,sans-serif', color: '#4a4542', paddingTop: '8px' }}>
                          {vals.locName}
                          {' · set by Ibirapuera Park'}
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {arr(vals.rules).map((r, i_r) => (
                          <Fragment key={i_r}>
                            <div
                              style={{
                                display: 'flex',
                                gap: '22px',
                                padding: '22px 0',
                                boxShadow: 'inset 0 -1px 0 #e4e4e2',
                              }}
                            >
                              <div
                                style={{
                                  width: '48px',
                                  height: '48px',
                                  borderRadius: '50%',
                                  background: '#1a1613',
                                  color: '#fff',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 20px/1 Lato,sans-serif',
                                  flex: 'none',
                                }}
                              >
                                {r?.n}
                              </div>
                              <div
                                style={{ font: '400 25px/1.4 Lato,sans-serif', paddingTop: '6px', textWrap: 'pretty' }}
                              >
                                {r?.t}
                              </div>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div
                        style={{
                          font: '700 15px/1 Lato,sans-serif',
                          letterSpacing: '.06em',
                          textTransform: 'uppercase',
                          color: '#6f6a66',
                          paddingTop: '8px',
                        }}
                      >
                        Using the line
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '-14px' }}>
                        {arr(vals.lineRules).map((r, i_r) => (
                          <Fragment key={i_r}>
                            <div
                              style={{
                                display: 'flex',
                                gap: '16px',
                                font: '400 22px/1.4 Lato,sans-serif',
                                color: '#1a1613',
                              }}
                            >
                              <span style={{ color: 'oklch(0.68 0.21 44)', fontWeight: '900' }}>—</span>
                              <span style={{ textWrap: 'pretty' }}>{r}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ flex: '1' }} />
                      <div
                        onClick={vals.openJoin}
                        style={{
                          height: '88px',
                          borderRadius: '20px',
                          background: 'oklch(0.68 0.21 44)',
                          color: '#fff',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 26px/1 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        Join the line
                      </div>
                    </div>
                  ) : null}
                  {/* JOIN */}
                  {vals.isJoin ? (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '36px 48px 40px',
                        boxSizing: 'border-box',
                        gap: '36px',
                        animation: 'tUp .45s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ font: '700 17px/1 Lato,sans-serif', color: '#6f6a66' }}>
                            {'Join the line · Step '}
                            {vals.step}
                            {' of 3'}
                          </div>
                          <div style={{ display: 'flex', gap: '6px', width: '220px' }}>
                            {arr(vals.dots).map((d, i_d) => (
                              <Fragment key={i_d}>
                                <div
                                  style={{
                                    flex: '1',
                                    height: '5px',
                                    borderRadius: '3px',
                                    background: `${s(d?.bg)}`,
                                    transition: 'background .3s',
                                  }}
                                />
                              </Fragment>
                            ))}
                          </div>
                        </div>
                        <div
                          onClick={vals.goHome}
                          style={{
                            height: '60px',
                            padding: '0 24px',
                            borderRadius: '999px',
                            boxShadow: 'inset 0 0 0 2px #e4e4e2',
                            display: 'grid',
                            placeItems: 'center',
                            font: '700 19px/1 Lato,sans-serif',
                            cursor: 'pointer',
                          }}
                        >
                          Cancel
                        </div>
                      </div>
                      {vals.isStep1 ? (
                        <div
                          style={{
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '28px',
                            animation: 'tFade .35s ease both',
                          }}
                        >
                          <div>
                            <div style={{ font: '700 44px/1.1 Lato,sans-serif' }}>Who's playing?</div>
                            <div style={{ font: '400 21px/1.4 Lato,sans-serif', color: '#4a4542', paddingTop: '10px' }}>
                              Groups take one spot in line and play together.
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div
                              onClick={vals.pickSolo}
                              style={{
                                height: '240px',
                                borderRadius: '24px',
                                boxShadow: `${s(vals.soloSh)}`,
                                padding: '28px',
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                transition: 'box-shadow .2s',
                              }}
                            >
                              <div style={{ display: 'flex', gap: '6px' }}>
                                <div
                                  style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1a1613' }}
                                />
                              </div>
                              <div>
                                <div style={{ font: '700 30px/1.1 Lato,sans-serif' }}>Just me</div>
                                <div
                                  style={{ font: '400 18px/1.35 Lato,sans-serif', color: '#6f6a66', paddingTop: '6px' }}
                                >
                                  {vals.soloNote}
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={vals.pickGroup}
                              style={{
                                height: '240px',
                                borderRadius: '24px',
                                boxShadow: `${s(vals.groupSh)}`,
                                padding: '28px',
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                transition: 'box-shadow .2s',
                              }}
                            >
                              <div style={{ display: 'flex', gap: '6px' }}>
                                <div
                                  style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1a1613' }}
                                />
                                <div
                                  style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: '#1a1613',
                                    opacity: '.55',
                                  }}
                                />
                                <div
                                  style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: '#1a1613',
                                    opacity: '.25',
                                  }}
                                />
                              </div>
                              <div>
                                <div style={{ font: '700 30px/1.1 Lato,sans-serif' }}>With a group</div>
                                <div
                                  style={{ font: '400 18px/1.35 Lato,sans-serif', color: '#6f6a66', paddingTop: '6px' }}
                                >
                                  {vals.groupNote}
                                </div>
                              </div>
                            </div>
                          </div>
                          {vals.showStepper ? (
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '24px',
                                padding: '24px 28px',
                                borderRadius: '24px',
                                background: '#f7f7f6',
                                animation: 'tFade .3s ease both',
                              }}
                            >
                              <div style={{ flex: '1', font: '700 22px/1.3 Lato,sans-serif' }}>
                                How many players, including you?
                              </div>
                              <div
                                onClick={vals.dec}
                                style={{
                                  width: '72px',
                                  height: '72px',
                                  borderRadius: '50%',
                                  background: '#fff',
                                  boxShadow: 'inset 0 0 0 2px #1a1613',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '400 36px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                  opacity: `${s(vals.decOp)}`,
                                }}
                              >
                                −
                              </div>
                              <div
                                style={{
                                  width: '56px',
                                  textAlign: 'center',
                                  font: '700 44px/1 Lato,sans-serif',
                                  fontVariantNumeric: 'tabular-nums',
                                }}
                              >
                                {vals.size}
                              </div>
                              <div
                                onClick={vals.inc}
                                style={{
                                  width: '72px',
                                  height: '72px',
                                  borderRadius: '50%',
                                  background: '#fff',
                                  boxShadow: 'inset 0 0 0 2px #1a1613',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '400 36px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                  opacity: `${s(vals.incOp)}`,
                                }}
                              >
                                +
                              </div>
                            </div>
                          ) : null}
                          <div style={{ flex: '1' }} />
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              gap: '10px',
                              font: '400 20px/1.3 Lato,sans-serif',
                              color: '#4a4542',
                            }}
                          >
                            <span>You'll be</span>
                            <b style={{ color: '#1a1613', fontSize: '26px' }}>{vals.yourPos}</b>
                            <span>in line · about</span>
                            <b style={{ color: '#1a1613', fontSize: '26px' }}>{vals.waitNow}</b>
                          </div>
                          <div
                            onClick={vals.next}
                            style={{
                              height: '88px',
                              borderRadius: '20px',
                              background: `${s(vals.nextBg)}`,
                              color: `${s(vals.nextFg)}`,
                              display: 'grid',
                              placeItems: 'center',
                              font: '700 26px/1 Lato,sans-serif',
                              cursor: 'pointer',
                              transition: 'background .2s',
                            }}
                          >
                            Continue
                          </div>
                        </div>
                      ) : null}
                      {vals.isStep2 ? (
                        <div
                          style={{
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '28px',
                            animation: 'tFade .35s ease both',
                          }}
                        >
                          <div>
                            <div style={{ font: '700 44px/1.1 Lato,sans-serif' }}>What's your first name?</div>
                            <div style={{ font: '400 21px/1.4 Lato,sans-serif', color: '#4a4542', paddingTop: '10px' }}>
                              It shows on this screen when it's your turn.
                            </div>
                          </div>
                          <div
                            style={{
                              height: '96px',
                              borderRadius: '20px',
                              boxShadow: 'inset 0 0 0 2px #1a1613',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0 28px',
                              gap: '4px',
                              font: '700 40px/1 Lato,sans-serif',
                            }}
                          >
                            {' '}
                            <span>{vals.name}</span>
                            <span style={{ color: '#c9c9c7', fontWeight: '400' }}>{vals.namePh}</span>
                            <div
                              style={{
                                width: '3px',
                                height: '44px',
                                background: 'oklch(0.68 0.21 44)',
                                animation: 'tBlink 1s steps(1) infinite',
                              }}
                            />
                            <div style={{ flex: '1' }} />
                            <span style={{ font: '400 20px/1 Lato,sans-serif', color: '#6f6a66' }}>
                              {vals.groupSuffix}
                            </span>{' '}
                          </div>
                          <div style={{ flex: '1' }} />
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              padding: '16px',
                              borderRadius: '24px',
                              background: '#ececeb',
                            }}
                          >
                            {arr(vals.kbd).map((row, i_row) => (
                              <Fragment key={i_row}>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                  {arr(row?.keys).map((k, i_k) => (
                                    <Fragment key={i_k}>
                                      <div
                                        className="play-ibira-totem-active-4"
                                        onClick={k?.on}
                                        style={{
                                          width: '62px',
                                          height: '72px',
                                          borderRadius: '12px',
                                          background: '#fff',
                                          boxShadow: '0 1px 0 #c9c9c7',
                                          display: 'grid',
                                          placeItems: 'center',
                                          font: '700 26px/1 Lato,sans-serif',
                                          cursor: 'pointer',
                                        }}
                                      >
                                        {k?.k}
                                      </div>
                                    </Fragment>
                                  ))}
                                </div>
                              </Fragment>
                            ))}
                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                              <div
                                className="play-ibira-totem-active-4"
                                onClick={vals.kSpace}
                                style={{
                                  width: '420px',
                                  height: '72px',
                                  borderRadius: '12px',
                                  background: '#fff',
                                  boxShadow: '0 1px 0 #c9c9c7',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 19px/1 Lato,sans-serif',
                                  color: '#6f6a66',
                                  cursor: 'pointer',
                                }}
                              >
                                space
                              </div>
                              <div
                                className="play-ibira-totem-active-5"
                                onClick={vals.kDel}
                                style={{
                                  width: '132px',
                                  height: '72px',
                                  borderRadius: '12px',
                                  background: '#d6d6d4',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 26px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                ⌫
                              </div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '14px' }}>
                            <div
                              onClick={vals.back}
                              style={{
                                flex: '1',
                                height: '88px',
                                borderRadius: '20px',
                                boxShadow: 'inset 0 0 0 2px #1a1613',
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 22px/1 Lato,sans-serif',
                                cursor: 'pointer',
                              }}
                            >
                              Back
                            </div>
                            <div
                              onClick={vals.next}
                              style={{
                                flex: '2',
                                height: '88px',
                                borderRadius: '20px',
                                background: `${s(vals.nextBg)}`,
                                color: `${s(vals.nextFg)}`,
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 26px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                transition: 'background .2s',
                              }}
                            >
                              Continue
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {vals.isStep3 ? (
                        <div
                          style={{
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '28px',
                            animation: 'tFade .35s ease both',
                          }}
                        >
                          <div>
                            <div style={{ font: '700 44px/1.1 Lato,sans-serif' }}>Get a text when you're next?</div>
                            <div
                              style={{
                                font: '400 21px/1.4 Lato,sans-serif',
                                color: '#4a4542',
                                paddingTop: '10px',
                                textWrap: 'pretty',
                              }}
                            >
                              Grab a coconut water — we'll text you when you're up next, and again when your court is
                              free.
                            </div>
                          </div>
                          <div
                            style={{
                              height: '96px',
                              borderRadius: '20px',
                              boxShadow: 'inset 0 0 0 2px #1a1613',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0 28px',
                              gap: '4px',
                              font: '700 40px/1 Lato,sans-serif',
                              fontVariantNumeric: 'tabular-nums',
                            }}
                          >
                            {' '}
                            <span style={{ color: '#6f6a66', fontWeight: '400', paddingRight: '10px' }}>+55</span>
                            <span>{vals.phoneFmt}</span>
                            <span style={{ color: '#c9c9c7', fontWeight: '400' }}>{vals.phonePh}</span>
                            <div
                              style={{
                                width: '3px',
                                height: '44px',
                                background: 'oklch(0.68 0.21 44)',
                                animation: 'tBlink 1s steps(1) infinite',
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3,1fr)',
                              gap: '10px',
                              padding: '0 60px',
                            }}
                          >
                            {arr(vals.keypad).map((k, i_k) => (
                              <Fragment key={i_k}>
                                <div
                                  className="play-ibira-totem-active-4"
                                  onClick={k?.on}
                                  style={{
                                    height: '84px',
                                    borderRadius: '18px',
                                    background: `${s(k?.bg)}`,
                                    display: 'grid',
                                    placeItems: 'center',
                                    font: '700 32px/1 Lato,sans-serif',
                                    cursor: 'pointer',
                                    visibility: `${s(k?.vis)}`,
                                  }}
                                >
                                  {k?.k}
                                </div>
                              </Fragment>
                            ))}
                          </div>
                          <div style={{ font: '400 17px/1.4 Lato,sans-serif', color: '#6f6a66', textAlign: 'center' }}>
                            Your number is only used for this line and deleted after your game.
                          </div>
                          <div style={{ flex: '1' }} />
                          <div style={{ display: 'flex', gap: '14px' }}>
                            <div
                              onClick={vals.skipPhone}
                              style={{
                                flex: '1',
                                height: '88px',
                                borderRadius: '20px',
                                boxShadow: 'inset 0 0 0 2px #1a1613',
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 20px/1.2 Lato,sans-serif',
                                cursor: 'pointer',
                                textAlign: 'center',
                                padding: '0 16px',
                              }}
                            >
                              No thanks, I'll watch the screen
                            </div>
                            <div
                              onClick={vals.textMe}
                              style={{
                                flex: '1',
                                height: '88px',
                                borderRadius: '20px',
                                background: `${s(vals.textBg)}`,
                                color: `${s(vals.textFg)}`,
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 26px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                transition: 'background .2s',
                              }}
                            >
                              Text me & join
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  {/* DONE */}
                  {vals.isDone ? (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        background: '#1a1613',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '48px',
                        boxSizing: 'border-box',
                        gap: '28px',
                        animation: 'tFade .5s ease both',
                      }}
                    >
                      <div
                        style={{
                          flex: '1',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '40px',
                        }}
                      >
                        <div style={{ font: '700 26px/1.3 Lato,sans-serif', color: '#b9b4b0' }}>
                          {"You're in line, "}
                          {vals.doneName}.
                        </div>
                        <div style={{ display: 'flex', gap: '56px' }}>
                          <div>
                            <div
                              style={{
                                font: '900 132px/0.9 Lato,sans-serif',
                                color: 'oklch(0.68 0.21 44)',
                                fontVariantNumeric: 'tabular-nums',
                              }}
                            >
                              {vals.donePos}
                            </div>
                            <div
                              style={{
                                font: '700 18px/1 Lato,sans-serif',
                                letterSpacing: '.06em',
                                textTransform: 'uppercase',
                                color: '#b9b4b0',
                                paddingTop: '14px',
                              }}
                            >
                              Your place
                            </div>
                          </div>
                          <div>
                            <div style={{ font: '900 132px/0.9 Lato,sans-serif', fontVariantNumeric: 'tabular-nums' }}>
                              {vals.doneEta}
                            </div>
                            <div
                              style={{
                                font: '700 18px/1 Lato,sans-serif',
                                letterSpacing: '.06em',
                                textTransform: 'uppercase',
                                color: '#b9b4b0',
                                paddingTop: '14px',
                              }}
                            >
                              {vals.doneEtaLbl}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            font: '400 24px/1.45 Lato,sans-serif',
                            color: '#dcd8d4',
                            maxWidth: '640px',
                            textWrap: 'pretty',
                          }}
                        >
                          {vals.doneMsg}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            padding: '24px 28px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,.07)',
                          }}
                        >
                          <div
                            style={{
                              font: '700 15px/1 Lato,sans-serif',
                              letterSpacing: '.06em',
                              textTransform: 'uppercase',
                              color: '#b9b4b0',
                            }}
                          >
                            Good to know
                          </div>
                          <div style={{ font: '400 20px/1.45 Lato,sans-serif', color: '#fff' }}>
                            Stay near the courts. When you're called, you have 5 minutes to step on — then the next
                            group plays.
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={vals.goHome}
                        style={{
                          height: '88px',
                          borderRadius: '20px',
                          background: '#fff',
                          color: '#1a1613',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 26px/1 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        Done
                      </div>
                      <div
                        style={{
                          font: '400 17px/1 Lato,sans-serif',
                          color: '#b9b4b0',
                          textAlign: 'center',
                          marginTop: '-8px',
                        }}
                      >
                        {'Back to the line in '}
                        {vals.ret}s
                      </div>
                    </div>
                  ) : null}
                  {/* VOICE */}
                  {vals.voiceOn ? (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        zIndex: '50',
                        background: '#1a1613',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px 48px',
                        boxSizing: 'border-box',
                        gap: '28px',
                        animation: 'tFade .4s ease both',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            flex: '1',
                            font: '700 17px/1 Lato,sans-serif',
                            letterSpacing: '.06em',
                            textTransform: 'uppercase',
                            color: '#b9b4b0',
                          }}
                        >
                          {'Voice mode · '}
                          {vals.locName}
                        </div>
                        <div
                          onClick={vals.closeVoice}
                          style={{
                            height: '60px',
                            padding: '0 26px',
                            borderRadius: '999px',
                            boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.35)',
                            display: 'grid',
                            placeItems: 'center',
                            font: '700 19px/1 Lato,sans-serif',
                            cursor: 'pointer',
                          }}
                        >
                          Exit voice mode
                        </div>
                      </div>
                      <div
                        style={{
                          flex: '1',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '44px',
                          textAlign: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            background: 'oklch(0.68 0.21 44)',
                            display: 'grid',
                            placeItems: 'center',
                            animation: 'tPulse 1.6s ease-out infinite',
                          }}
                        >
                          <svg width="84" height="84" viewBox="0 0 24 24" style={{ display: 'block' }}>
                            <rect x="9" y="2.5" width="6" height="11.5" rx="3" style={{ fill: '#fff' }} />
                            <path
                              d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"
                              style={{ fill: 'none', stroke: '#fff', strokeWidth: '2px', strokeLinecap: 'round' }}
                            />
                          </svg>
                        </div>
                        <div
                          style={{
                            font: '700 15px/1 Lato,sans-serif',
                            letterSpacing: '.06em',
                            textTransform: 'uppercase',
                            color: `${s(vals.vStateFg)}`,
                          }}
                        >
                          {vals.vState}
                        </div>
                        <div style={{ font: '400 34px/1.4 Lato,sans-serif', maxWidth: '680px', textWrap: 'pretty' }}>
                          {vals.vSay}
                        </div>
                      </div>
                      <div
                        style={{
                          font: '700 15px/1 Lato,sans-serif',
                          letterSpacing: '.06em',
                          textTransform: 'uppercase',
                          color: '#b9b4b0',
                        }}
                      >
                        Say or tap
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        {arr(vals.vCmds).map((c, i_c) => (
                          <Fragment key={i_c}>
                            <div
                              className="play-ibira-totem-active-6"
                              onClick={c?.on}
                              style={{
                                height: '84px',
                                borderRadius: '20px',
                                background: 'rgba(255,255,255,.08)',
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 22px/1 Lato,sans-serif',
                                cursor: 'pointer',
                              }}
                            >
                              <span>“{c?.label}”</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ font: '400 16px/1.4 Lato,sans-serif', color: '#b9b4b0', textAlign: 'center' }}>
                        Captions show everything the totem says. The raised button below the screen starts voice mode
                        too.
                      </div>
                    </div>
                  ) : null}
                  {/* HELP */}
                  {vals.helpOpen ? (
                    <div style={{ position: 'absolute', inset: '0', zIndex: '40' }}>
                      <div
                        onClick={vals.closeHelp}
                        style={{
                          position: 'absolute',
                          inset: '0',
                          background: 'rgba(26,22,19,.45)',
                          animation: 'tFade .25s ease both',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          background: '#fff',
                          borderRadius: '36px 36px 0 0',
                          padding: '44px 48px 48px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '26px',
                          animation: 'tUp .4s cubic-bezier(.2,.7,.2,1) both',
                        }}
                      >
                        <div
                          style={{
                            width: '84px',
                            height: '84px',
                            borderRadius: '50%',
                            background: 'oklch(0.68 0.21 44)',
                            color: '#fff',
                            display: 'grid',
                            placeItems: 'center',
                            font: '900 46px/1 Lato,sans-serif',
                          }}
                        >
                          ?
                        </div>
                        {vals.helpAsk ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                            <div>
                              <div style={{ font: '700 40px/1.15 Lato,sans-serif' }}>Call a park supervisor?</div>
                              <div
                                style={{
                                  font: '400 21px/1.45 Lato,sans-serif',
                                  color: '#4a4542',
                                  paddingTop: '10px',
                                  textWrap: 'pretty',
                                }}
                              >
                                {
                                  'For questions, disputes about the line, or help using this screen. Someone from the park team will come to the '
                                }
                                {vals.locNameLc}.
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '14px' }}>
                              <div
                                onClick={vals.closeHelp}
                                style={{
                                  flex: '1',
                                  height: '88px',
                                  borderRadius: '20px',
                                  boxShadow: 'inset 0 0 0 2px #1a1613',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 22px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                Cancel
                              </div>
                              <div
                                onClick={vals.sendHelp}
                                style={{
                                  flex: '2',
                                  height: '88px',
                                  borderRadius: '20px',
                                  background: 'oklch(0.68 0.21 44)',
                                  color: '#fff',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 26px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                Call a supervisor
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {vals.helpSent ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                            <div>
                              <div style={{ font: '700 40px/1.15 Lato,sans-serif' }}>Marta is on the way</div>
                              <div
                                style={{ font: '400 21px/1.45 Lato,sans-serif', color: '#4a4542', paddingTop: '10px' }}
                              >
                                {'Park supervisor · about '}
                                {vals.helpEta}
                                {" min. Wait by this screen — she'll find you here."}
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '14px' }}>
                              <div
                                onClick={vals.cancelHelp}
                                style={{
                                  flex: '1',
                                  height: '88px',
                                  borderRadius: '20px',
                                  boxShadow: 'inset 0 0 0 2px #1a1613',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 22px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                Cancel request
                              </div>
                              <div
                                onClick={vals.closeHelp}
                                style={{
                                  flex: '2',
                                  height: '88px',
                                  borderRadius: '20px',
                                  background: '#1a1613',
                                  color: '#fff',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 26px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                OK
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                  {/* MEDIC */}
                  {vals.medOpen ? (
                    <div style={{ position: 'absolute', inset: '0', zIndex: '40' }}>
                      <div
                        onClick={vals.closeMed}
                        style={{
                          position: 'absolute',
                          inset: '0',
                          background: 'rgba(26,22,19,.55)',
                          animation: 'tFade .25s ease both',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          background: '#fff',
                          borderRadius: '36px 36px 0 0',
                          padding: '44px 48px 48px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '26px',
                          animation: 'tUp .4s cubic-bezier(.2,.7,.2,1) both',
                        }}
                      >
                        <div
                          style={{
                            width: '84px',
                            height: '84px',
                            borderRadius: '50%',
                            background: 'oklch(0.56 0.2 27)',
                            display: 'grid',
                            placeItems: 'center',
                          }}
                        >
                          <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                            <div
                              style={{
                                position: 'absolute',
                                left: '13.600000000000001px',
                                top: '0',
                                width: '12.8px',
                                height: '40px',
                                borderRadius: '3px',
                                background: '#fff',
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '13.600000000000001px',
                                left: '0',
                                height: '12.8px',
                                width: '40px',
                                borderRadius: '3px',
                                background: '#fff',
                              }}
                            />
                          </div>
                        </div>
                        {vals.medAsk ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                            <div>
                              <div style={{ font: '700 40px/1.15 Lato,sans-serif' }}>Someone hurt?</div>
                              <div
                                style={{
                                  font: '400 21px/1.45 Lato,sans-serif',
                                  color: '#4a4542',
                                  paddingTop: '10px',
                                  textWrap: 'pretty',
                                }}
                              >
                                {"The park's first-aid team will be sent to the "}
                                {vals.locNameLc}
                                {". If someone isn't breathing or is unconscious, also call "}
                                <b style={{ color: '#1a1613' }}>SAMU 192</b>.
                              </div>
                            </div>
                            <div
                              onPointerDown={vals.holdStart}
                              onPointerUp={vals.holdEnd}
                              onPointerLeave={vals.holdEnd}
                              style={{
                                height: '104px',
                                borderRadius: '24px',
                                background: '#f3dcd8',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                userSelect: 'none',
                                touchAction: 'none',
                              }}
                            >
                              <div
                                style={{
                                  position: 'absolute',
                                  left: '0',
                                  top: '0',
                                  bottom: '0',
                                  width: `${s(vals.medHold)}%`,
                                  background: 'oklch(0.56 0.2 27)',
                                }}
                              />
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: '0',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 26px/1 Lato,sans-serif',
                                  color: `${s(vals.holdFg)}`,
                                }}
                              >
                                {vals.holdLabel}
                              </div>
                            </div>
                            <div
                              onClick={vals.closeMed}
                              style={{
                                height: '72px',
                                borderRadius: '20px',
                                boxShadow: 'inset 0 0 0 2px #e4e4e2',
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 21px/1 Lato,sans-serif',
                                cursor: 'pointer',
                              }}
                            >
                              Cancel
                            </div>
                          </div>
                        ) : null}
                        {vals.medSent ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                            <div>
                              <div style={{ font: '700 40px/1.15 Lato,sans-serif' }}>A medic is on the way</div>
                              <div
                                style={{ font: '400 21px/1.45 Lato,sans-serif', color: '#4a4542', paddingTop: '10px' }}
                              >
                                {'First-aid team · about '}
                                {vals.medEta}
                                {' min to the '}
                                {vals.locNameLc}.
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                padding: '22px 26px',
                                borderRadius: '20px',
                                background: '#f7f7f6',
                              }}
                            >
                              <div style={{ font: '700 19px/1.4 Lato,sans-serif' }}>Until they arrive</div>
                              <div style={{ font: '400 19px/1.45 Lato,sans-serif', color: '#4a4542' }}>
                                Stay with the person and keep them still. Don't give food or water. Wave the team over
                                when you see them.
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '14px' }}>
                              <div
                                onClick={vals.cancelMed}
                                style={{
                                  flex: '1',
                                  height: '88px',
                                  borderRadius: '20px',
                                  boxShadow: 'inset 0 0 0 2px #1a1613',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 22px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                Cancel call
                              </div>
                              <div
                                onClick={vals.closeMed}
                                style={{
                                  flex: '2',
                                  height: '88px',
                                  borderRadius: '20px',
                                  background: '#1a1613',
                                  color: '#fff',
                                  display: 'grid',
                                  placeItems: 'center',
                                  font: '700 26px/1 Lato,sans-serif',
                                  cursor: 'pointer',
                                }}
                              >
                                OK
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              {vals.showPlate ? (
                <div
                  style={{
                    width: '620px',
                    height: '150px',
                    marginTop: '-6px',
                    borderRadius: '0 0 40px 40px',
                    background: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '28px',
                    boxShadow: '0 30px 60px -36px rgba(26,22,19,.6)',
                  }}
                >
                  <div
                    className="play-ibira-totem-active-7"
                    onClick={vals.openVoice}
                    style={{
                      width: '92px',
                      height: '92px',
                      borderRadius: '50%',
                      background: '#1a1613',
                      boxShadow: '0 0 0 6px oklch(0.68 0.21 44),0 6px 0 2px #120f0d',
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" style={{ display: 'block' }}>
                      <rect x="9" y="2.5" width="6" height="11.5" rx="3" style={{ fill: '#fff' }} />
                      <path
                        d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"
                        style={{ fill: 'none', stroke: '#fff', strokeWidth: '2px', strokeLinecap: 'round' }}
                      />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '7px' }}>
                      {arr(vals.braille).map((b, i_b) => (
                        <Fragment key={i_b}>
                          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: `${s(b)}` }} />
                        </Fragment>
                      ))}
                    </div>
                    <div style={{ font: '700 15px/1.3 Lato,sans-serif', color: '#fff' }}>Press for voice</div>
                    <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#b9b4b0' }}>
                      Raised button with Braille label, on the totem body
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </Scaled>
        </div>
      </div>
    </>
  );
}
