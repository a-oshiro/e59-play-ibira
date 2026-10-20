// Generated from "Play Ibira App.dc.html" (Claude Design). Markup only; behavior lives in PlayIbiraApp.jsx.
import { Fragment } from 'react';
import { arr, s } from '../lib/template';
import Scaled from '../lib/Scaled';

export default function PlayIbiraAppView(vals) {
  return (
    <Scaled scale={vals.scale}>
      <div
        style={{
          width: `${vals.frame.w}px`,
          height: `${vals.frame.h}px`,
          padding: `${vals.frame.pad}px`,
          borderRadius: `${vals.frame.radius}px`,
          background: vals.frame.bg,
          boxShadow: vals.frame.shadow,
          boxSizing: 'border-box',
          fontFamily: "Lato,'Helvetica Neue',Arial,sans-serif",
          color: '#1a1613',
          flex: 'none',
        }}
      >
        <div
          onPointerDownCapture={vals.dismissTip}
          style={{
            position: 'relative',
            width: '390px',
            height: `${vals.screenHeight}px`,
            borderRadius: `${vals.frame.screenRadius}px`,
            overflow: 'hidden',
            background: '#ffffff',
            isolation: 'isolate',
          }}
        >
          {/* ============ EXPLORE ============ */}
          {vals.isExplore ? (
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: '#f7f7f6',
                overflow: 'hidden',
                transform: `scale(${s(vals.appScale)})`,
                transition: 'transform 1s cubic-bezier(.2,.7,.2,1)',
              }}
            >
              <div
                onPointerDown={vals.mapDown}
                style={{ position: 'absolute', inset: '0', touchAction: 'none', cursor: 'grab' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '1080px',
                    height: '1310px',
                    transformOrigin: '0 0',
                    transform: `translate3d(${s(vals.tx)}px,${s(vals.ty)}px,0) scale(${s(vals.s)})`,
                    transition: `${s(vals.mapTr)}`,
                    willChange: 'transform',
                  }}
                >
                  {' '}
                  <img
                    src="assets/park-map-app.svg"
                    alt="Ibirapuera Park map"
                    draggable="false"
                    style={{
                      width: '1080px',
                      height: '1310px',
                      display: 'block',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  />{' '}
                  {vals.hasRoute ? (
                    <>
                      {' '}
                      <svg
                        width="1080"
                        height="1310"
                        viewBox="-40 -40 1080 1310"
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '0',
                          overflow: 'visible',
                          pointerEvents: 'none',
                        }}
                      >
                        <polyline
                          points={vals.routePts}
                          style={{
                            fill: 'none',
                            stroke: '#ffffff',
                            strokeWidth: '11px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            vectorEffect: 'non-scaling-stroke',
                          }}
                        />
                        <polyline
                          points={vals.routePts}
                          style={{
                            fill: 'none',
                            stroke: '#3d92c4',
                            strokeWidth: '6px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            vectorEffect: 'non-scaling-stroke',
                          }}
                        />
                      </svg>{' '}
                    </>
                  ) : null}{' '}
                </div>
              </div>
              <div style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
                {arr(vals.utils).map((u, i_u) => (
                  <Fragment key={i_u}>
                    <div
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        width: '0',
                        height: '0',
                        transform: `translate(${s(u?.x)}px,${s(u?.y)}px)`,
                        transition: `${s(vals.pinTr)}`,
                      }}
                    >
                      <div
                        onClick={u?.onClick}
                        style={{
                          position: 'absolute',
                          left: `${s(u?.off)}px`,
                          top: `${s(u?.off)}px`,
                          pointerEvents: 'auto',
                          cursor: 'pointer',
                          width: `${s(u?.size)}px`,
                          height: `${s(u?.size)}px`,
                          borderRadius: '7px',
                          background: `${s(u?.bg)}`,
                          color: `${s(u?.fg)}`,
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 9px/1 Lato,sans-serif',
                          boxShadow: '0 0 0 1px #d6d0c9',
                          opacity: `${s(u?.op)}`,
                        }}
                      >
                        {u?.glyph}
                      </div>
                    </div>
                  </Fragment>
                ))}
                {arr(vals.pins).map((p, i_p) => (
                  <Fragment key={i_p}>
                    <div
                      onClick={p?.onClick}
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        width: '0',
                        height: '0',
                        transform: `translate(${s(p?.x)}px,${s(p?.y)}px)`,
                        transition: `${s(vals.pinTr)}`,
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                        zIndex: `${s(p?.z)}`,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '0',
                          margin: `${s(p?.off)}px 0 0 ${s(p?.off)}px`,
                          transition: 'margin .25s,width .25s,height .25s,background .25s',
                          width: `${s(p?.size)}px`,
                          height: `${s(p?.size)}px`,
                          borderRadius: '50%',
                          background: `${s(p?.bg)}`,
                          display: 'grid',
                          placeItems: 'center',
                          boxShadow: `0 2px 6px rgba(26,22,19,.16),0 0 0 1px ${s(p?.ring)}`,
                        }}
                      >
                        {' '}
                        <img
                          src={p?.src}
                          alt=""
                          style={{ width: `${s(p?.icon)}px`, height: `${s(p?.icon)}px`, display: 'block' }}
                        />{' '}
                      </div>
                      {p?.showLabel ? (
                        <div
                          style={{
                            position: 'absolute',
                            left: '-60px',
                            width: '120px',
                            textAlign: 'center',
                            top: `${s(p?.labelTop)}px`,
                            whiteSpace: 'nowrap',
                            font: '700 11px/1.2 Lato,sans-serif',
                            color: '#1a1613',
                            textShadow: '0 0 3px #fff,0 0 3px #fff,0 0 3px #fff',
                          }}
                        >
                          {p?.name}
                        </div>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
                <div
                  style={{
                    position: 'absolute',
                    left: '-22px',
                    top: '-22px',
                    transform: `translate(${s(vals.you?.x)}px,${s(vals.you?.y)}px)`,
                    transition: `${s(vals.pinTr)}`,
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(61,146,196,.16)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#3d92c4',
                      boxShadow: '0 0 0 3px #fff,0 1px 4px rgba(0,0,0,.25)',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0',
                  height: '64px',
                  background: 'linear-gradient(#f7f7f6 55%,rgba(247,247,246,0))',
                  pointerEvents: 'none',
                  zIndex: '5',
                }}
              />
              {vals.noRoute ? (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: '6',
                    left: '16px',
                    right: '16px',
                    top: '56px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    onClick={vals.recenter}
                    title="Recenter"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#fff',
                      boxShadow: '0 1px 4px rgba(26,22,19,.12)',
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '2px solid #1a1613',
                        display: 'grid',
                        placeItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1a1613' }} />
                    </div>
                  </div>
                </div>
              ) : null}
              {vals.hasRoute ? (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: '6',
                    left: '12px',
                    right: '12px',
                    top: '54px',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 16px rgba(26,22,19,.12)',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    animation: 'piFade .3s ease-out',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: '#e6f1f9',
                      display: 'grid',
                      placeItems: 'center',
                      flex: 'none',
                    }}
                  >
                    <img src="assets/pictograms/running.svg" alt="" style={{ width: '30px', height: '30px' }} />
                  </div>
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <div style={{ font: '700 16px/1.25 Lato,sans-serif' }}>
                      {vals.routeTime}
                      {' walk'}
                    </div>
                    <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>
                      {'to '}
                      {vals.routeName}
                      {' · '}
                      {vals.routeDist}
                    </div>
                  </div>
                  <div
                    onClick={vals.endRoute}
                    style={{
                      padding: '9px 14px',
                      borderRadius: '10px',
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                      font: '700 14px/1 Lato,sans-serif',
                      cursor: 'pointer',
                    }}
                  >
                    End
                  </div>
                </div>
              ) : null}
              {vals.popOn ? (
                <div
                  style={{
                    position: 'absolute',
                    left: `${s(vals.pop?.left)}px`,
                    top: `${s(vals.pop?.top)}px`,
                    width: '286px',
                    transform: 'translateY(-100%)',
                    zIndex: '5',
                  }}
                >
                  <div
                    style={{
                      transformOrigin: `${s(vals.pop?.origin)}px 100%`,
                      animation: 'piPop .32s cubic-bezier(.2,.9,.25,1) both',
                      willChange: 'transform,opacity',
                    }}
                  >
                    <div
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 8px 28px rgba(26,22,19,.18)',
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      <div
                        onClick={vals.pop?.open}
                        style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: '#f1f1f0',
                            display: 'grid',
                            placeItems: 'center',
                            flex: 'none',
                            font: '700 13px/1 Lato,sans-serif',
                            color: '#6f6a66',
                          }}
                        >
                          {vals.pop?.hasPic ? (
                            <img
                              src={vals.pop?.src}
                              alt=""
                              style={{ width: '34px', height: '34px', display: 'block' }}
                            />
                          ) : null}
                          {vals.pop?.glyph}
                        </div>
                        <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ font: '700 16px/1.25 Lato,sans-serif' }}>{vals.pop?.title}</div>
                          <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{vals.pop?.sub}</div>
                        </div>
                        {vals.pop?.hasPic ? (
                          <div style={{ font: '400 20px/1 Lato,sans-serif', color: '#6f6a66', paddingTop: '8px' }}>
                            ›
                          </div>
                        ) : null}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          paddingTop: '10px',
                          borderTop: '1px solid #ececeb',
                        }}
                      >
                        {vals.pop?.live ? (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              font: '700 13px/1.3 Lato,sans-serif',
                            }}
                          >
                            <div
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'oklch(0.68 0.21 44)',
                              }}
                            />
                            Live now
                            <span style={{ fontWeight: '400', color: '#6f6a66' }}>
                              {'· '}
                              {vals.pop?.liveText}
                            </span>
                          </div>
                        ) : null}
                        {arr(vals.pop?.lines).map((l, i_l) => (
                          <Fragment key={i_l}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '12px',
                                font: '400 13px/1.35 Lato,sans-serif',
                              }}
                            >
                              <span style={{ color: '#6f6a66', width: '48px', flex: 'none' }}>{l?.k}</span>
                              <span style={{ fontWeight: '700', textAlign: 'right', textWrap: 'pretty' }}>{l?.v}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div
                          onClick={vals.pop?.directions}
                          style={{
                            flex: '1',
                            height: '40px',
                            borderRadius: '10px',
                            boxShadow: 'inset 0 0 0 1px #ddd8d2',
                            display: 'grid',
                            placeItems: 'center',
                            font: '700 14px/1 Lato,sans-serif',
                            cursor: 'pointer',
                          }}
                        >
                          Directions
                        </div>
                        {vals.pop?.hasPic ? (
                          <div
                            onClick={vals.pop?.open}
                            style={{
                              flex: '1',
                              height: '40px',
                              borderRadius: '10px',
                              background: '#1a1613',
                              color: '#fff',
                              display: 'grid',
                              placeItems: 'center',
                              font: '700 14px/1 Lato,sans-serif',
                              cursor: 'pointer',
                            }}
                          >
                            See details
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        background: '#fff',
                        transform: 'rotate(45deg)',
                        margin: `-8px 0 0 ${s(vals.pop?.arrow)}px`,
                        boxShadow: '3px 3px 6px rgba(26,22,19,.08)',
                      }}
                    />
                  </div>
                </div>
              ) : null}
              {/* bottom sheet */}
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '83px',
                  height: `${s(vals.sheetH)}px`,
                  transition: `${s(vals.sheetTr)}`,
                  background: '#fff',
                  borderRadius: '22px 22px 0 0',
                  boxShadow: '0 -4px 20px rgba(26,22,19,.10)',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: '6',
                }}
              >
                <div
                  onPointerDown={vals.sheetDown}
                  style={{ flex: 'none', padding: '8px 20px 12px', touchAction: 'none', cursor: 'grab' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '5px',
                      borderRadius: '3px',
                      background: '#ddd8d2',
                      margin: '0 auto 12px',
                    }}
                  />
                  {vals.showMenu ? (
                    <div
                      style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}
                    >
                      <div style={{ font: '700 20px/1.2 Lato,sans-serif' }}>All sports</div>
                      <div
                        onPointerDown={vals.stopPD}
                        onClick={vals.backToday}
                        style={{ font: '700 14px/1 Lato,sans-serif', textDecoration: 'underline', cursor: 'pointer' }}
                      >
                        Back to today
                      </div>
                    </div>
                  ) : null}
                  {vals.showToday ? (
                    <div
                      style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}
                    >
                      <div style={{ font: '700 20px/1.2 Lato,sans-serif' }}>Today in the park</div>
                      <div style={{ font: '400 13px/1 Lato,sans-serif', color: '#6f6a66' }}>Tue, Oct 13</div>
                    </div>
                  ) : null}
                </div>
                <div
                  className="pi-scroll"
                  style={{ flex: '1', overflowY: 'auto', scrollbarWidth: 'none', padding: '0 20px 24px' }}
                >
                  {vals.showToday ? (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'space-between',
                          padding: '4px 0 6px',
                        }}
                      >
                        <div
                          style={{
                            font: '700 12px/1 Lato,sans-serif',
                            letterSpacing: '.06em',
                            textTransform: 'uppercase',
                            color: '#6f6a66',
                          }}
                        >
                          Coming up
                        </div>
                        <div
                          onClick={vals.openEvents}
                          style={{
                            font: '700 14px/1 Lato,sans-serif',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            color: 'oklch(0.68 0.21 44)',
                          }}
                        >
                          All events
                        </div>
                      </div>
                      {arr(vals.soonEvents).map((e, i_e) => (
                        <Fragment key={i_e}>
                          <div
                            onClick={e?.go}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              padding: '11px 0',
                              borderBottom: '1px solid #ececeb',
                              cursor: 'pointer',
                            }}
                          >
                            <div
                              style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: '#f1f1f0',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 'none',
                                gap: '2px',
                              }}
                            >
                              <div
                                style={{ font: '700 9px/1 Lato,sans-serif', letterSpacing: '.06em', color: '#6f6a66' }}
                              >
                                {e?.mon}
                              </div>
                              <div style={{ font: '700 16px/1 Lato,sans-serif' }}>{e?.day}</div>
                            </div>
                            <div style={{ flex: '1', minWidth: '0' }}>
                              <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{e?.title}</div>
                              <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{e?.sub}</div>
                            </div>
                          </div>
                        </Fragment>
                      ))}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'space-between',
                          padding: '22px 0 6px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            font: '700 12px/1 Lato,sans-serif',
                            letterSpacing: '.06em',
                            textTransform: 'uppercase',
                            color: '#6f6a66',
                          }}
                        >
                          <div
                            style={{
                              width: '7px',
                              height: '7px',
                              borderRadius: '50%',
                              background: 'oklch(0.68 0.21 44)',
                            }}
                          />
                          Queues now
                        </div>
                        <div
                          onClick={vals.openMenu}
                          style={{
                            font: '700 14px/1 Lato,sans-serif',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            color: 'oklch(0.68 0.21 44)',
                          }}
                        >
                          See all
                        </div>
                      </div>
                      {arr(vals.liveRows).map((r, i_r) => (
                        <Fragment key={i_r}>
                          <div
                            onClick={r?.go}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              padding: '11px 0',
                              borderBottom: '1px solid #ececeb',
                              cursor: 'pointer',
                            }}
                          >
                            <div
                              style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: 'oklch(0.68 0.21 44)',
                                display: 'grid',
                                placeItems: 'center',
                                flex: 'none',
                              }}
                            >
                              <img src={r?.src} alt="" style={{ width: '34px', height: '34px' }} />
                            </div>
                            <div style={{ flex: '1', minWidth: '0' }}>
                              <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{r?.title}</div>
                              <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{r?.sub}</div>
                            </div>
                            <div style={{ font: '700 14px/1 Lato,sans-serif', whiteSpace: 'nowrap' }}>{r?.right}</div>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  ) : null}
                  {vals.showMenu ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', paddingTop: '6px' }}>
                      {arr(vals.menu).map((g, i_g) => (
                        <Fragment key={i_g}>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>{g?.title}</div>
                            <div
                              style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66', padding: '2px 0 6px' }}
                            >
                              {g?.sub}
                            </div>
                            {arr(g?.items).map((m, i_m) => (
                              <Fragment key={i_m}>
                                <div
                                  onClick={m?.go}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    padding: '10px 0',
                                    borderBottom: '1px solid #ececeb',
                                    cursor: 'pointer',
                                  }}
                                >
                                  <div
                                    style={{
                                      width: '48px',
                                      height: '48px',
                                      borderRadius: '12px',
                                      background: 'oklch(0.68 0.21 44)',
                                      display: 'grid',
                                      placeItems: 'center',
                                      flex: 'none',
                                    }}
                                  >
                                    <img
                                      src={m?.src}
                                      alt=""
                                      style={{ width: '38px', height: '38px', filter: 'brightness(0) invert(1)' }}
                                    />
                                  </div>
                                  <div style={{ flex: '1', minWidth: '0' }}>
                                    <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{m?.name}</div>
                                    <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>
                                      {m?.where}
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      font: '400 13px/1.3 Lato,sans-serif',
                                      color: '#1a1613',
                                      textAlign: 'right',
                                      whiteSpace: 'nowrap',
                                    }}
                                  >
                                    {m?.right}
                                  </div>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ PLAY ============ */}
          {vals.isPlay ? (
            <div
              className="pi-scroll"
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
                bottom: '83px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                padding: '58px 20px 28px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
              }}
            >
              <div style={{ font: '700 28px/1.15 Lato,sans-serif' }}>Play</div>
              {vals.hasQueue ? (
                <div
                  style={{
                    borderRadius: '16px',
                    background: '#1a1613',
                    color: '#fff',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 10px 24px -12px rgba(26,22,19,.5)',
                    animation: 'piFade .3s ease-out',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,.1)',
                        display: 'grid',
                        placeItems: 'center',
                        flex: 'none',
                      }}
                    >
                      <img src={vals.qc?.srcW} alt="" style={{ width: '26px', height: '26px' }} />
                    </div>
                    <div style={{ flex: '1', minWidth: '0' }}>
                      <div style={{ font: '700 15px/1.25 Lato,sans-serif' }}>{vals.qc?.name}</div>
                      <div style={{ font: '400 12px/1.35 Lato,sans-serif', color: '#b9b4b0' }}>{vals.qc?.who}</div>
                    </div>
                    {vals.qc?.waiting ? (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '12px',
                          flex: 'none',
                          textAlign: 'right',
                        }}
                      >
                        <div>
                          <div style={{ font: '700 18px/1 Lato,sans-serif' }}>{vals.qc?.wait}</div>
                          <div
                            style={{
                              font: '700 10px/1 Lato,sans-serif',
                              color: '#b9b4b0',
                              paddingTop: '4px',
                              letterSpacing: '.04em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Wait
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {vals.qc?.isTurn ? (
                      <div
                        style={{
                          font: '700 12px/1 Lato,sans-serif',
                          color: '#fff',
                          background: 'oklch(0.68 0.21 44)',
                          padding: '6px 9px',
                          borderRadius: '999px',
                          flex: 'none',
                        }}
                      >
                        Your turn
                      </div>
                    ) : null}
                  </div>
                  {vals.qc?.waiting ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '4px',
                            font: '700 10px/1 Lato,sans-serif',
                            letterSpacing: '.04em',
                            textTransform: 'uppercase',
                            color: '#b9b4b0',
                          }}
                        >
                          <span style={{ font: '700 13px/1 Lato,sans-serif', color: 'oklch(0.68 0.21 44)' }}>
                            {vals.qc?.ahead}
                          </span>
                          <span>Ahead</span>
                        </div>
                        <div style={{ display: 'flex', gap: '3px' }}>
                          {arr(vals.qc?.dots).map((d, i_d) => (
                            <Fragment key={i_d}>
                              <div
                                style={{ flex: '1', height: '4px', borderRadius: '2px', background: `${s(d?.bgDark)}` }}
                              />
                            </Fragment>
                          ))}
                        </div>
                      </div>
                      <div
                        className="play-ibira-app-hover-1"
                        onClick={vals.leaveQueue}
                        style={{
                          flex: 'none',
                          font: '700 13px/1 Lato,sans-serif',
                          color: '#fff',
                          cursor: 'pointer',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.25)',
                        }}
                      >
                        Leave
                      </div>
                    </div>
                  ) : null}
                  {vals.qc?.isTurn ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ flex: '1', font: '400 13px/1.4 Lato,sans-serif', color: '#dcd8d4' }}>
                        {'Head to '}
                        {vals.qc?.unit}
                        {' · '}
                        <b style={{ color: '#fff' }}>{vals.countdown}</b>
                        {' left'}
                      </div>
                      <div
                        onClick={vals.openTurn}
                        style={{
                          flex: 'none',
                          height: '38px',
                          padding: '0 16px',
                          borderRadius: '10px',
                          background: 'oklch(0.68 0.21 44)',
                          color: '#fff',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 14px/1 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        Check in
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>Queues right now</div>
                {arr(vals.queueRows).map((q, i_q) => (
                  <Fragment key={i_q}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '12px 0',
                        borderBottom: '1px solid #ececeb',
                      }}
                    >
                      <div
                        onClick={q?.go}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          flex: '1',
                          minWidth: '0',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'oklch(0.68 0.21 44)',
                            display: 'grid',
                            placeItems: 'center',
                            flex: 'none',
                          }}
                        >
                          <img src={q?.srcW} alt="" style={{ width: '34px', height: '34px' }} />
                        </div>
                        <div style={{ flex: '1', minWidth: '0' }}>
                          <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{q?.name}</div>
                          <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{q?.line}</div>
                        </div>
                      </div>
                      <div style={{ position: 'relative', flex: 'none' }}>
                        <div
                          onClick={q?.onJoin}
                          style={{
                            padding: '9px 16px',
                            borderRadius: '10px',
                            font: '700 14px/1 Lato,sans-serif',
                            cursor: `${s(q?.cursor)}`,
                            color: `${s(q?.fg)}`,
                            background: `${s(q?.bg)}`,
                            boxShadow: `${s(q?.sh)}`,
                          }}
                        >
                          {q?.btn}
                        </div>
                        {q?.showTip ? (
                          <div
                            style={{
                              position: 'absolute',
                              right: '0',
                              bottom: 'calc(100% + 10px)',
                              width: '210px',
                              padding: '10px 12px',
                              borderRadius: '10px',
                              background: '#1a1613',
                              color: '#fff',
                              font: '400 13px/1.4 Lato,sans-serif',
                              boxShadow: '0 6px 20px rgba(0,0,0,.18)',
                              zIndex: '10',
                              animation: 'piFade .2s ease-out',
                              pointerEvents: 'none',
                            }}
                          >
                            <b>Join when you're in the park.</b>
                            {' You can join a queue once you arrive.'}
                            <div
                              style={{
                                position: 'absolute',
                                right: '22px',
                                bottom: '-5px',
                                width: '10px',
                                height: '10px',
                                background: '#1a1613',
                                transform: 'rotate(45deg)',
                              }}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>Plans</div>
                </div>
                <div
                  onClick={vals.openPlan}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    borderRadius: '16px',
                    background: '#f7f7f6',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'oklch(0.68 0.21 44)',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      font: '400 26px/1 Lato,sans-serif',
                      flex: 'none',
                    }}
                  >
                    +
                  </div>
                  <div style={{ flex: '1' }}>
                    <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>Plan a game</div>
                    <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66' }}>
                      Find players, or say it's your first time
                    </div>
                  </div>
                  <div style={{ font: '400 20px/1 Lato,sans-serif', color: '#6f6a66' }}>›</div>
                </div>
                <div
                  style={{
                    font: '700 12px/1 Lato,sans-serif',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#6f6a66',
                    paddingTop: '8px',
                  }}
                >
                  Mine
                </div>
                {vals.noMine ? (
                  <div style={{ font: '400 14px/1.45 Lato,sans-serif', color: '#6f6a66' }}>
                    Plans you post and events you enroll in show up here.
                  </div>
                ) : null}
                {arr(vals.mine).map((p, i_p) => (
                  <Fragment key={i_p}>
                    <div
                      onClick={p?.go}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '4px 0 12px',
                        borderBottom: '1px solid #ececeb',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: 'oklch(0.68 0.21 44)',
                          display: 'grid',
                          placeItems: 'center',
                          flex: 'none',
                        }}
                      >
                        <img
                          src={p?.src}
                          alt=""
                          style={{ width: '34px', height: '34px', filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                      <div style={{ flex: '1', minWidth: '0' }}>
                        <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{p?.title}</div>
                        <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{p?.sub}</div>
                      </div>
                      <div
                        style={{
                          font: '700 11px/1 Lato,sans-serif',
                          color: '#6f6a66',
                          padding: '5px 8px',
                          borderRadius: '999px',
                          background: '#f1f1f0',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {p?.tag}
                      </div>
                    </div>
                  </Fragment>
                ))}
                <div
                  style={{
                    font: '700 12px/1 Lato,sans-serif',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#6f6a66',
                    paddingTop: '12px',
                  }}
                >
                  Looking for players
                </div>
                {arr(vals.openPlans).map((p, i_p) => (
                  <Fragment key={i_p}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '4px 0 12px',
                        borderBottom: '1px solid #ececeb',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#f1f1f0',
                          display: 'grid',
                          placeItems: 'center',
                          flex: 'none',
                          font: '700 14px/1 Lato,sans-serif',
                          color: '#6f6a66',
                          position: 'relative',
                        }}
                      >
                        {p?.ini}
                        <img
                          src={p?.photo}
                          alt=""
                          style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>
                      <div style={{ flex: '1', minWidth: '0' }}>
                        <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{p?.title}</div>
                        <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{p?.sub}</div>
                      </div>
                      <div
                        onClick={p?.onJoin}
                        style={{
                          padding: '9px 14px',
                          borderRadius: '10px',
                          boxShadow: 'inset 0 0 0 1px #ddd8d2',
                          font: '700 14px/1 Lato,sans-serif',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {p?.btn}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          ) : null}
          {/* ============ COMMUNITY ============ */}
          {vals.isCommunity ? (
            <div
              className="pi-scroll"
              ref={vals.comRef}
              onScroll={vals.comScroll}
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
                bottom: '83px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                padding: '58px 0 28px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ font: '700 28px/1.15 Lato,sans-serif', padding: '0 20px' }}>Community</div>
              <div
                className="pi-scroll"
                style={{
                  display: 'flex',
                  gap: '8px',
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
                  padding: '0 20px',
                  marginTop: '-6px',
                  flex: 'none',
                }}
              >
                {arr(vals.comChips).map((c, i_c) => (
                  <Fragment key={i_c}>
                    <div
                      onClick={c?.onClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '7px 12px 7px 8px',
                        borderRadius: '999px',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        font: '700 13px/1 Lato,sans-serif',
                        background: `${s(c?.bg)}`,
                        color: `${s(c?.fg)}`,
                        boxShadow: `${s(c?.sh)}`,
                      }}
                    >
                      {' '}
                      <img src={c?.src} alt="" style={{ width: '22px', height: '22px', display: 'block' }} />
                      {c?.name}{' '}
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ flex: '1', minWidth: '0' }}>
                  <div style={{ font: '700 22px/1.2 Lato,sans-serif' }}>{vals.com?.name}</div>
                  <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66' }}>
                    {vals.com?.members}
                    {' · run by players, not the park'}
                  </div>
                </div>
                <div
                  onClick={vals.com?.toggleJoin}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    font: '700 14px/1 Lato,sans-serif',
                    cursor: 'pointer',
                    background: `${s(vals.com?.joinBg)}`,
                    color: `${s(vals.com?.joinFg)}`,
                    boxShadow: `${s(vals.com?.joinSh)}`,
                  }}
                >
                  {vals.com?.joinLabel}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '0 20px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <div style={{ font: '700 14px/1.25 Lato,sans-serif' }}>Welcomers</div>
                  <div style={{ font: '400 13px/1 Lato,sans-serif', color: '#6f6a66' }}>Happy to help beginners</div>
                </div>
                <div
                  className="pi-scroll"
                  style={{
                    display: 'flex',
                    gap: '10px',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    padding: '0 20px 4px',
                    flex: 'none',
                  }}
                >
                  {arr(vals.com?.welcomers).map((w, i_w) => (
                    <Fragment key={i_w}>
                      <div
                        style={{
                          flex: 'none',
                          width: '200px',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          background: '#f7f7f6',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: '#f1f1f0',
                              display: 'grid',
                              placeItems: 'center',
                              font: '700 11px/1 Lato,sans-serif',
                              color: '#6f6a66',
                              flex: 'none',
                              position: 'relative',
                            }}
                          >
                            {w?.ini}
                            <img
                              src={w?.photo}
                              alt=""
                              style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                zIndex: '1',
                                right: '-4px',
                                bottom: '-4px',
                                width: '16px',
                                height: '16px',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" style={{ display: 'block' }}>
                                <path
                                  d="M12 2.5l7.5 3v6c0 4.6-3.2 8.6-7.5 10-4.3-1.4-7.5-5.4-7.5-10v-6z"
                                  style={{
                                    fill: '#1a1613',
                                    stroke: '#fff',
                                    strokeWidth: '1.6px',
                                    strokeLinejoin: 'round',
                                  }}
                                />
                              </svg>
                            </div>
                          </div>
                          <div style={{ minWidth: '0' }}>
                            <div style={{ font: '700 13px/1.25 Lato,sans-serif' }}>{w?.name}</div>
                            <div style={{ font: '400 11px/1.35 Lato,sans-serif', color: '#6f6a66' }}>
                              {w?.level}
                              {' · '}
                              {w?.visits}
                              {' visits'}
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={w?.sayHi}
                          style={{
                            height: '32px',
                            borderRadius: '8px',
                            background: '#fff',
                            boxShadow: 'inset 0 0 0 1px #ddd8d2',
                            display: 'grid',
                            placeItems: 'center',
                            font: '700 13px/1 Lato,sans-serif',
                            cursor: `${s(w?.hiCur)}`,
                            opacity: `${s(w?.hiOp)}`,
                          }}
                        >
                          Say hi / ask a question
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
                <div style={{ font: '700 16px/1.25 Lato,sans-serif', paddingBottom: '4px' }}>Latest</div>
                {arr(vals.com?.posts).map((p, i_p) => (
                  <Fragment key={i_p}>
                    <div style={{ display: 'flex', gap: '12px', padding: '14px 0', borderBottom: '1px solid #ececeb' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: '#f1f1f0',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 12px/1 Lato,sans-serif',
                          color: '#6f6a66',
                          flex: 'none',
                          position: 'relative',
                        }}
                      >
                        {p?.ini}
                        <img
                          src={p?.avatar}
                          alt=""
                          style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            display: `${s(p?.avDisp)}`,
                          }}
                        />
                      </div>
                      <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'baseline', flexWrap: 'wrap' }}>
                          <span style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{p?.who}</span>
                          <span style={{ font: '400 12px/1.3 Lato,sans-serif', color: '#6f6a66' }}>{p?.meta}</span>
                        </div>
                        <div style={{ font: '400 14px/1.45 Lato,sans-serif', textWrap: 'pretty' }}>{p?.text}</div>
                        {p?.isEvent ? (
                          <div
                            onClick={p?.evGo}
                            style={{
                              display: 'flex',
                              gap: '12px',
                              alignItems: 'center',
                              padding: '10px',
                              borderRadius: '12px',
                              boxShadow: '0 0 0 1px #e4e4e2',
                              cursor: 'pointer',
                            }}
                          >
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: '#f1f1f0',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '2px',
                                flex: 'none',
                              }}
                            >
                              <div style={{ font: '700 9px/1 Lato,sans-serif', color: '#6f6a66' }}>{p?.evMon}</div>
                              <div style={{ font: '700 15px/1 Lato,sans-serif' }}>{p?.evDay}</div>
                            </div>
                            <div style={{ flex: '1', minWidth: '0' }}>
                              <div style={{ font: '700 14px/1.3 Lato,sans-serif' }}>{p?.evTitle}</div>
                              <div style={{ font: '400 12px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{p?.evSub}</div>
                            </div>
                            <div style={{ font: '400 18px/1 Lato,sans-serif', color: '#6f6a66' }}>›</div>
                          </div>
                        ) : null}{' '}
                        {p?.isPhoto ? (
                          <>
                            {' '}
                            <img
                              src={p?.photoSrc}
                              alt="Skaters at the Festa Junina meetup"
                              style={{
                                width: '100%',
                                height: '170px',
                                borderRadius: '12px',
                                objectFit: 'cover',
                                display: 'block',
                                background: '#f1f1f0',
                              }}
                            />{' '}
                          </>
                        ) : null}{' '}
                        {p?.hasAction ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div
                              onClick={p?.onAction}
                              style={{
                                padding: '8px 14px',
                                borderRadius: '999px',
                                font: '700 13px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                background: `${s(p?.aBg)}`,
                                color: `${s(p?.aFg)}`,
                                boxShadow: `${s(p?.aSh)}`,
                              }}
                            >
                              {p?.action}
                            </div>
                            <div style={{ font: '400 12px/1.3 Lato,sans-serif', color: '#6f6a66' }}>
                              {p?.actionNote}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Fragment>
                ))}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '22px 0 8px',
                    font: '400 13px/1 Lato,sans-serif',
                    color: '#6f6a66',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      border: '2px solid #e4e4e2',
                      borderTopColor: '#1a1613',
                      animation: 'piSpin .8s linear infinite',
                      boxSizing: 'border-box',
                    }}
                  />
                  <span>Loading older posts</span>
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ ME (VISITOR) ============ */}
          {vals.isMeVisitor ? (
            <div
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
                bottom: '83px',
                padding: '58px 24px 32px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                animation: 'piFade .3s ease-out',
              }}
            >
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '18px',
                  textAlign: 'center',
                }}
              >
                <div style={{ position: 'relative', width: '176px', height: '110px' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '0px',
                      top: '34px',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: '#1a1613',
                      boxShadow: '0 0 0 4px #fff',
                      display: 'grid',
                      placeItems: 'center',
                      zIndex: '1',
                    }}
                  >
                    <img src="assets/pictograms/white/football.svg" alt="" style={{ width: '42px', height: '42px' }} />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '44px',
                      top: '0px',
                      width: '88px',
                      height: '88px',
                      borderRadius: '50%',
                      background: 'oklch(0.68 0.21 44)',
                      boxShadow: '0 0 0 4px #fff',
                      display: 'grid',
                      placeItems: 'center',
                      zIndex: '2',
                    }}
                  >
                    <img src="assets/pictograms/white/tennis.svg" alt="" style={{ width: '58px', height: '58px' }} />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '112px',
                      top: '34px',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: '#1a1613',
                      boxShadow: '0 0 0 4px #fff',
                      display: 'grid',
                      placeItems: 'center',
                      zIndex: '1',
                    }}
                  >
                    <img
                      src="assets/pictograms/white/roller-skating.svg"
                      alt=""
                      style={{ width: '42px', height: '42px' }}
                    />
                  </div>
                </div>
                <div style={{ font: '700 24px/1.2 Lato,sans-serif' }}>You're browsing as a visitor</div>
                <div
                  style={{
                    font: '400 15px/1.5 Lato,sans-serif',
                    color: '#6f6a66',
                    maxWidth: '280px',
                    textWrap: 'pretty',
                  }}
                >
                  {vals.gateMsg}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  onClick={vals.visitorLogin}
                  style={{
                    height: '52px',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                    font: '700 16px/1 Lato,sans-serif',
                    cursor: 'pointer',
                    background: 'oklch(0.68 0.21 44)',
                    color: '#fff',
                  }}
                >
                  Log in
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '6px',
                    paddingTop: '6px',
                    font: '400 15px/1 Lato,sans-serif',
                    color: '#6f6a66',
                  }}
                >
                  <span>Don't have an account?</span>
                  <span
                    onClick={vals.visitorSignup}
                    style={{
                      fontWeight: '700',
                      color: '#1a1613',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    Create one
                  </span>
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ ME ============ */}
          {vals.isMe ? (
            <div
              className="pi-scroll"
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
                bottom: '83px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                padding: '58px 20px 28px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {' '}
                <img
                  src={vals.mePhoto}
                  alt={vals.meName}
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    flex: 'none',
                    background: '#f1f1f0',
                  }}
                />{' '}
                <div style={{ flex: '1', minWidth: '0' }}>
                  <div style={{ font: '700 24px/1.2 Lato,sans-serif' }}>{vals.meName}</div>
                  <div style={{ font: '400 14px/1.4 Lato,sans-serif', color: '#6f6a66' }}>{vals.ageLine}</div>
                </div>
              </div>
              <div
                style={{
                  borderRadius: '20px',
                  background: '#f7f7f6',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div
                      style={{
                        font: '700 12px/1 Lato,sans-serif',
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        color: '#6f6a66',
                      }}
                    >
                      Park passport
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', paddingTop: '8px' }}>
                      <div style={{ font: '900 italic 52px/0.9 Lato,sans-serif', letterSpacing: '-0.02em' }}>
                        {vals.visitTotal}
                      </div>
                      <div style={{ font: '700 16px/1 Lato,sans-serif' }}>visits</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ font: '700 16px/1.2 Lato,sans-serif' }}>
                      {vals.streak}
                      -week streak
                    </div>
                    <div style={{ font: '400 12px/1.4 Lato,sans-serif', color: '#6f6a66' }}>Shown on your profile</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {arr(vals.perSport).map((p, i_p) => (
                    <Fragment key={i_p}>
                      <div
                        style={{
                          flex: '1',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px',
                          background: '#fff',
                          borderRadius: '12px',
                        }}
                      >
                        {' '}
                        <img src={p?.src} alt="" style={{ width: '30px', height: '30px' }} />{' '}
                        <div>
                          <div style={{ font: '700 15px/1.2 Lato,sans-serif' }}>{p?.n}</div>
                          <div style={{ font: '400 12px/1.2 Lato,sans-serif', color: '#6f6a66' }}>{p?.name}</div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
                    gap: '14px 8px',
                    paddingTop: '4px',
                  }}
                >
                  {arr(vals.stamps).map((t, i_t) => (
                    <Fragment key={i_t}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div
                          style={{
                            width: '62px',
                            height: '62px',
                            borderRadius: '50%',
                            boxSizing: 'border-box',
                            border: `${s(t?.border)}`,
                            display: 'grid',
                            placeItems: 'center',
                            transform: `rotate(${s(t?.rot)}deg)`,
                            animation: `${s(t?.anim)}`,
                          }}
                        >
                          {' '}
                          <img
                            src={t?.src}
                            alt=""
                            style={{ width: '40px', height: '40px', display: 'block', opacity: `${s(t?.op)}` }}
                          />{' '}
                        </div>
                        <div style={{ font: '700 11px/1 Lato,sans-serif', color: '#6f6a66' }}>{t?.date}</div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ position: 'relative' }}>
                  <div
                    onClick={vals.checkInHere}
                    style={{
                      height: '46px',
                      borderRadius: '12px',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 14px/1 Lato,sans-serif',
                      cursor: 'pointer',
                      background: '#fff',
                      color: `${s(vals.checkFg)}`,
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                    }}
                  >
                    {vals.checkLabel}
                  </div>
                  {vals.checkTip ? (
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: 'calc(100% + 10px)',
                        transform: 'translateX(-50%)',
                        width: '230px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        background: '#1a1613',
                        color: '#fff',
                        font: '400 13px/1.4 Lato,sans-serif',
                        boxShadow: '0 6px 20px rgba(0,0,0,.18)',
                        zIndex: '10',
                        animation: 'piFade .2s ease-out',
                        pointerEvents: 'none',
                      }}
                    >
                      <b>Check in when you're in the park.</b>
                      {' You can check in once you arrive.'}
                      <div
                        style={{
                          position: 'absolute',
                          left: '50%',
                          marginLeft: '-5px',
                          bottom: '-5px',
                          width: '10px',
                          height: '10px',
                          background: '#1a1613',
                          transform: 'rotate(45deg)',
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ font: '700 18px/1.25 Lato,sans-serif', paddingBottom: '6px' }}>Favorite sports</div>
                {arr(vals.favRows).map((f, i_f) => (
                  <Fragment key={i_f}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        padding: '12px 0',
                        borderBottom: '1px solid #ececeb',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'oklch(0.68 0.21 44)',
                            display: 'grid',
                            placeItems: 'center',
                          }}
                        >
                          <img
                            src={f?.src}
                            alt=""
                            style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }}
                          />
                        </div>
                        <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{f?.name}</div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '4px',
                          padding: '3px',
                          background: '#f1f1f0',
                          borderRadius: '10px',
                        }}
                      >
                        {arr(f?.opts).map((o, i_o) => (
                          <Fragment key={i_o}>
                            <div
                              onClick={o?.onClick}
                              style={{
                                flex: '1',
                                height: '32px',
                                borderRadius: '8px',
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 12px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                background: `${s(o?.bg)}`,
                                color: `${s(o?.fg)}`,
                                boxShadow: `${s(o?.sh)}`,
                              }}
                            >
                              {o?.label}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {arr(vals.meToggles).map((t, i_t) => (
                  <Fragment key={i_t}>
                    <div
                      onClick={t?.onClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '14px 0',
                        borderBottom: '1px solid #ececeb',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ flex: '1' }}>
                        <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{t?.title}</div>
                        <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66' }}>{t?.sub}</div>
                      </div>
                      <div
                        style={{
                          width: '44px',
                          height: '26px',
                          borderRadius: '13px',
                          background: `${s(t?.bg)}`,
                          position: 'relative',
                          transition: 'background .2s',
                          flex: 'none',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '3px',
                            left: `${s(t?.knob)}px`,
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
                  </Fragment>
                ))}
              </div>
              <div
                onClick={vals.demoInPark}
                style={{
                  display: vals.frame.chrome ? 'flex' : 'none',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px dashed #c9c9c7',
                  cursor: 'pointer',
                  flex: 'none',
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
                    background: `${s(vals.demoParkBg)}`,
                    position: 'relative',
                    transition: 'background .2s',
                    flex: 'none',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '3px',
                      left: `${s(vals.demoParkKnob)}px`,
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
            </div>
          ) : null}
          {/* ============ TAB BAR ============ */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '0',
              height: '83px',
              background: '#fff',
              borderTop: '1px solid #ececeb',
              display: 'flex',
              padding: '8px 8px 0',
              boxSizing: 'border-box',
              zIndex: '8',
            }}
          >
            {arr(vals.tabs).map((t, i_t) => (
              <Fragment key={i_t}>
                <div
                  onClick={t?.onClick}
                  style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                    cursor: 'pointer',
                    color: `${s(t?.color)}`,
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      display: 'grid',
                      placeItems: 'center',
                      position: 'relative',
                    }}
                  >
                    {t?.isExplore ? (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50% 50% 50% 0',
                          transform: 'rotate(-45deg)',
                          border: `2.2px solid ${s(t?.color)}`,
                          background: `${s(t?.fill)}`,
                          boxSizing: 'border-box',
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: `${s(t?.dot)}` }} />
                      </div>
                    ) : null}{' '}
                    {t?.isPlay ? (
                      <img
                        src={t?.playSrc}
                        alt=""
                        style={{ width: '30px', height: '30px', display: 'block', margin: '-2px' }}
                      />
                    ) : null}{' '}
                    {t?.isCommunity ? (
                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5px' }}>
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              border: `2px solid ${s(t?.color)}`,
                              background: `${s(t?.fill)}`,
                              boxSizing: 'border-box',
                            }}
                          />
                          <div
                            style={{
                              width: '11px',
                              height: '7px',
                              borderRadius: '6px 6px 1px 1px',
                              borderTop: `2px solid ${s(t?.color)}`,
                              borderRight: `2px solid ${s(t?.color)}`,
                              borderBottom: 'none',
                              borderLeft: `2px solid ${s(t?.color)}`,
                              background: `${s(t?.fill)}`,
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5px',
                            marginLeft: '-1px',
                          }}
                        >
                          <div
                            style={{
                              width: '9px',
                              height: '9px',
                              borderRadius: '50%',
                              border: `2px solid ${s(t?.color)}`,
                              background: `${s(t?.fill)}`,
                              boxSizing: 'border-box',
                            }}
                          />
                          <div
                            style={{
                              width: '14px',
                              height: '9px',
                              borderRadius: '7px 7px 1px 1px',
                              borderTop: `2px solid ${s(t?.color)}`,
                              borderRight: `2px solid ${s(t?.color)}`,
                              borderBottom: 'none',
                              borderLeft: `2px solid ${s(t?.color)}`,
                              background: `${s(t?.fill)}`,
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                      </div>
                    ) : null}
                    {t?.isMe ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            border: `2.2px solid ${s(t?.color)}`,
                            background: `${s(t?.fill)}`,
                            boxSizing: 'border-box',
                          }}
                        />
                        <div
                          style={{
                            width: '18px',
                            height: '9px',
                            borderRadius: '9px 9px 2px 2px',
                            borderTop: `2.2px solid ${s(t?.color)}`,
                            borderRight: `2.2px solid ${s(t?.color)}`,
                            borderBottom: 'none',
                            borderLeft: `2.2px solid ${s(t?.color)}`,
                            background: `${s(t?.fill)}`,
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div style={{ font: '700 11px/1 Lato,sans-serif' }}>{t?.label}</div>
                </div>
              </Fragment>
            ))}
          </div>
          {/* ============ SPORT PAGE ============ */}
          {vals.isSport ? (
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: '#fff',
                zIndex: '20',
                animation: 'piFade .25s ease-out',
              }}
            >
              <div
                className="pi-scroll"
                style={{
                  position: 'absolute',
                  inset: '0 0 104px 0',
                  overflowY: 'auto',
                  scrollbarWidth: 'none',
                  padding: '54px 20px 24px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '26px',
                }}
              >
                <div
                  onClick={vals.back}
                  style={{
                    width: '40px',
                    height: '40px',
                    flex: 'none',
                    borderRadius: '50%',
                    boxShadow: 'inset 0 0 0 1px #ddd8d2',
                    display: 'grid',
                    placeItems: 'center',
                    font: '400 24px/1 Lato,sans-serif',
                    cursor: 'pointer',
                    marginBottom: '-8px',
                  }}
                >
                  ‹
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '16px',
                      background: 'oklch(0.68 0.21 44)',
                      display: 'grid',
                      placeItems: 'center',
                      flex: 'none',
                    }}
                  >
                    <img
                      src={vals.sp?.src}
                      alt=""
                      style={{ width: '58px', height: '58px', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div style={{ minWidth: '0' }}>
                    <div style={{ font: '900 italic 30px/1 Lato,sans-serif', letterSpacing: '-0.01em' }}>
                      {vals.sp?.name}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        font: '400 14px/1.35 Lato,sans-serif',
                        color: '#6f6a66',
                        paddingTop: '6px',
                      }}
                    >
                      {vals.sp?.live ? (
                        <div
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: 'oklch(0.68 0.21 44)',
                            flex: 'none',
                          }}
                        />
                      ) : null}
                      {vals.sp?.status}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>How it's played here</div>
                  {arr(vals.sp?.how).map((h, i_h) => (
                    <Fragment key={i_h}>
                      <div style={{ font: '400 15px/1.5 Lato,sans-serif', textWrap: 'pretty' }}>{h}</div>
                    </Fragment>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '16px',
                    borderRadius: '16px',
                    background: '#f7f7f6',
                  }}
                >
                  <div style={{ font: '700 18px/1.25 Lato,sans-serif', paddingBottom: '4px' }}>
                    {vals.sp?.rulesTitle}
                  </div>
                  {arr(vals.sp?.rules).map((r, i_r) => (
                    <Fragment key={i_r}>
                      <div
                        style={{
                          display: 'flex',
                          gap: '12px',
                          padding: '8px 0',
                          font: '400 15px/1.45 Lato,sans-serif',
                          textWrap: 'pretty',
                          borderTop: `${s(r?.border)}`,
                        }}
                      >
                        <div
                          style={{
                            font: '700 13px/1.6 Lato,sans-serif',
                            color: '#6f6a66',
                            width: '14px',
                            flex: 'none',
                          }}
                        >
                          {r?.n}
                        </div>
                        <div>{r?.text}</div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>Where</div>
                  <div
                    onClick={vals.sp?.directions}
                    style={{
                      position: 'relative',
                      height: '150px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#f7f7f6',
                      boxShadow: 'inset 0 0 0 1px #ececeb',
                      cursor: 'pointer',
                    }}
                  >
                    {' '}
                    <img
                      src="assets/park-map-app.svg"
                      alt=""
                      style={{
                        position: 'absolute',
                        left: `${s(vals.sp?.mapL)}px`,
                        top: `${s(vals.sp?.mapT)}px`,
                        width: '972px',
                        height: '1179px',
                        maxWidth: 'none',
                      }}
                    />{' '}
                    <div
                      style={{
                        position: 'absolute',
                        left: '175px',
                        top: '75px',
                        transform: 'translate(-50%,-50%)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#1a1613',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,.2)',
                      }}
                    >
                      <img src={vals.sp?.srcW} alt="" style={{ width: '28px', height: '28px', display: 'block' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flex: '1' }}>
                      <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{vals.sp?.placeName}</div>
                      <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>
                        {vals.sp?.placeNote}
                      </div>
                    </div>
                    <div
                      onClick={vals.sp?.directions}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '10px',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        font: '700 14px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      Directions
                    </div>
                  </div>
                </div>
                {vals.sp?.hasEvents ? (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ font: '700 18px/1.25 Lato,sans-serif', paddingBottom: '4px' }}>Upcoming events</div>
                    {arr(vals.sp?.events).map((e, i_e) => (
                      <Fragment key={i_e}>
                        <div
                          onClick={e?.go}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '11px 0',
                            borderBottom: '1px solid #ececeb',
                            cursor: 'pointer',
                          }}
                        >
                          <div
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '12px',
                              background: '#f1f1f0',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flex: 'none',
                              gap: '2px',
                            }}
                          >
                            <div
                              style={{ font: '700 9px/1 Lato,sans-serif', letterSpacing: '.06em', color: '#6f6a66' }}
                            >
                              {e?.mon}
                            </div>
                            <div style={{ font: '700 16px/1 Lato,sans-serif' }}>{e?.day}</div>
                          </div>
                          <div style={{ flex: '1', minWidth: '0' }}>
                            <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{e?.title}</div>
                            <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{e?.sub}</div>
                          </div>
                          <div style={{ font: '400 20px/1 Lato,sans-serif', color: '#6f6a66' }}>›</div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                ) : null}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>Welcomers</div>
                  <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66', padding: '2px 0 4px' }}>
                    Regulars who are happy to show you around
                  </div>
                  {arr(vals.sp?.welcomers).map((w, i_w) => (
                    <Fragment key={i_w}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 0',
                          borderBottom: '1px solid #ececeb',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: '#f1f1f0',
                            display: 'grid',
                            placeItems: 'center',
                            font: '700 14px/1 Lato,sans-serif',
                            color: '#6f6a66',
                            flex: 'none',
                            position: 'relative',
                          }}
                        >
                          {w?.ini}
                          <img
                            src={w?.photo}
                            alt=""
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              display: 'block',
                            }}
                          />
                          <div
                            style={{
                              position: 'absolute',
                              zIndex: '1',
                              right: '-4px',
                              bottom: '-4px',
                              width: '21px',
                              height: '21px',
                              display: 'grid',
                              placeItems: 'center',
                            }}
                          >
                            <svg width="21" height="21" viewBox="0 0 24 24" style={{ display: 'block' }}>
                              <path
                                d="M12 2.5l7.5 3v6c0 4.6-3.2 8.6-7.5 10-4.3-1.4-7.5-5.4-7.5-10v-6z"
                                style={{
                                  fill: '#1a1613',
                                  stroke: '#fff',
                                  strokeWidth: '1.6px',
                                  strokeLinejoin: 'round',
                                }}
                              />
                            </svg>
                          </div>
                        </div>
                        <div style={{ flex: '1', minWidth: '0' }}>
                          <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{w?.name}</div>
                          <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>
                            {w?.level}
                            {' · '}
                            {w?.visits}
                            {' visits'}
                          </div>
                        </div>
                        <div
                          onClick={w?.sayHi}
                          style={{
                            padding: '9px 14px',
                            borderRadius: '10px',
                            boxShadow: 'inset 0 0 0 1px #ddd8d2',
                            font: '700 14px/1 Lato,sans-serif',
                            cursor: 'pointer',
                          }}
                        >
                          Say hi
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div
                  onClick={vals.sp?.goCommunity}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: '16px',
                    boxShadow: '0 0 0 1px #e4e4e2',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ flex: '1' }}>
                    <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>
                      {vals.sp?.name}
                      {' community'}
                    </div>
                    <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>
                      {vals.sp?.members}
                      {' · plans, photos and tips'}
                    </div>
                  </div>
                  <div style={{ font: '400 20px/1 Lato,sans-serif', color: '#6f6a66' }}>›</div>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  padding: '12px 20px 34px',
                  background: '#fff',
                  borderTop: '1px solid #ececeb',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                {vals.sp?.isQueue ? (
                  <>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0' }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '4px 8px',
                          alignItems: 'baseline',
                          font: '700 15px/1.3 Lato,sans-serif',
                        }}
                      >
                        {arr(vals.sp?.qParts).map((qp, i_qp) => (
                          <Fragment key={i_qp}>
                            <span style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                              {qp?.dot ? <span style={{ color: '#c9c9c7' }}>·</span> : null}
                              {qp?.t}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ font: '400 12px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{vals.sp?.qSub}</div>
                    </div>
                    <div style={{ position: 'relative', flex: 'none' }}>
                      <div
                        onClick={vals.sp?.primary}
                        style={{
                          padding: '0 20px',
                          height: '50px',
                          borderRadius: '12px',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 15px/1 Lato,sans-serif',
                          cursor: 'pointer',
                          background: `${s(vals.sp?.pBg)}`,
                          color: `${s(vals.sp?.pFg)}`,
                        }}
                      >
                        {vals.sp?.pLabel}
                      </div>
                      {vals.sp?.showTip ? (
                        <div
                          style={{
                            position: 'absolute',
                            right: '0',
                            bottom: 'calc(100% + 10px)',
                            width: '210px',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            background: '#1a1613',
                            color: '#fff',
                            font: '400 13px/1.4 Lato,sans-serif',
                            boxShadow: '0 6px 20px rgba(0,0,0,.18)',
                            zIndex: '10',
                            animation: 'piFade .2s ease-out',
                            pointerEvents: 'none',
                          }}
                        >
                          <b>Join when you're in the park.</b>
                          {' You can join a queue once you arrive.'}
                          <div
                            style={{
                              position: 'absolute',
                              right: '30px',
                              bottom: '-5px',
                              width: '10px',
                              height: '10px',
                              background: '#1a1613',
                              transform: 'rotate(45deg)',
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}
                {vals.sp?.isOpen ? (
                  <div
                    onClick={vals.sp?.primary}
                    style={{
                      flex: '1',
                      height: '50px',
                      borderRadius: '12px',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 16px/1 Lato,sans-serif',
                      cursor: 'pointer',
                      background: 'oklch(0.68 0.21 44)',
                      color: '#fff',
                    }}
                  >
                    {vals.sp?.pLabel}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          {/* ============ EVENTS LIST ============ */}
          {vals.isEvents ? (
            <div
              className="pi-scroll"
              style={{
                position: 'absolute',
                inset: '0',
                background: '#fff',
                zIndex: '20',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                padding: '54px 20px 40px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                animation: 'piFade .25s ease-out',
              }}
            >
              <div
                onClick={vals.back}
                style={{
                  width: '40px',
                  height: '40px',
                  flex: 'none',
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 1px #ddd8d2',
                  display: 'grid',
                  placeItems: 'center',
                  font: '400 24px/1 Lato,sans-serif',
                  cursor: 'pointer',
                }}
              >
                ‹
              </div>
              <div style={{ font: '700 28px/1.15 Lato,sans-serif' }}>Events</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {arr(vals.evFilters).map((f, i_f) => (
                  <Fragment key={i_f}>
                    <div
                      onClick={f?.onClick}
                      style={{
                        padding: '8px 13px',
                        borderRadius: '999px',
                        font: '700 13px/1 Lato,sans-serif',
                        cursor: 'pointer',
                        background: `${s(f?.bg)}`,
                        color: `${s(f?.fg)}`,
                        boxShadow: `${s(f?.sh)}`,
                      }}
                    >
                      {f?.label}
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {arr(vals.evList).map((e, i_e) => (
                  <Fragment key={i_e}>
                    <div
                      onClick={e?.go}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        padding: '14px 0',
                        borderBottom: '1px solid #ececeb',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '52px',
                          borderRadius: '12px',
                          background: '#f1f1f0',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flex: 'none',
                          gap: '3px',
                        }}
                      >
                        <div style={{ font: '700 9px/1 Lato,sans-serif', letterSpacing: '.06em', color: '#6f6a66' }}>
                          {e?.mon}
                        </div>
                        <div style={{ font: '700 17px/1 Lato,sans-serif' }}>{e?.day}</div>
                      </div>
                      <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{e?.title}</div>
                        <div style={{ font: '400 13px/1.35 Lato,sans-serif', color: '#6f6a66' }}>{e?.sub}</div>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', paddingTop: '2px' }}>
                          {arr(e?.chips).map((c, i_c) => (
                            <Fragment key={i_c}>
                              <div
                                style={{
                                  font: '700 11px/1 Lato,sans-serif',
                                  color: '#1a1613',
                                  padding: '5px 8px',
                                  borderRadius: '999px',
                                  background: '#f1f1f0',
                                }}
                              >
                                {c}
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
                {vals.evEmpty ? (
                  <div style={{ font: '400 14px/1.5 Lato,sans-serif', color: '#6f6a66', padding: '20px 0' }}>
                    No events with this tag yet.
                  </div>
                ) : null}
              </div>
              <div style={{ font: '400 12px/1.45 Lato,sans-serif', color: '#6f6a66' }}>
                Women-only, under-12 and beginner events are for court sports, where newcomers find it hardest to get a
                game.
              </div>
            </div>
          ) : null}
          {/* ============ EVENT PAGE ============ */}
          {vals.isEvent ? (
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: '#fff',
                zIndex: '21',
                animation: 'piFade .25s ease-out',
              }}
            >
              <div
                className="pi-scroll"
                style={{
                  position: 'absolute',
                  inset: '0 0 104px 0',
                  overflowY: 'auto',
                  scrollbarWidth: 'none',
                  padding: '54px 20px 24px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
                }}
              >
                <div
                  onClick={vals.back}
                  style={{
                    width: '40px',
                    height: '40px',
                    flex: 'none',
                    borderRadius: '50%',
                    boxShadow: 'inset 0 0 0 1px #ddd8d2',
                    display: 'grid',
                    placeItems: 'center',
                    font: '400 24px/1 Lato,sans-serif',
                    cursor: 'pointer',
                    marginBottom: '-6px',
                  }}
                >
                  ‹
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      font: '700 13px/1 Lato,sans-serif',
                      color: '#6f6a66',
                    }}
                  >
                    <img src={vals.ev?.src} alt="" style={{ width: '26px', height: '26px' }} />
                    {vals.ev?.sportName}
                  </div>
                  <div style={{ font: '700 28px/1.15 Lato,sans-serif', textWrap: 'pretty' }}>{vals.ev?.title}</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {arr(vals.ev?.tags).map((c, i_c) => (
                      <Fragment key={i_c}>
                        <div
                          style={{
                            font: '700 12px/1 Lato,sans-serif',
                            padding: '6px 10px',
                            borderRadius: '999px',
                            background: '#f1f1f0',
                          }}
                        >
                          {c}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                {vals.ev?.isOpen ? (
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: '14px',
                      background: '#f7f7f6',
                      font: '700 15px/1.4 Lato,sans-serif',
                    }}
                  >
                    Free · open to everyone · no sign-up
                    <div style={{ font: '400 13px/1.45 Lato,sans-serif', color: '#6f6a66', paddingTop: '2px' }}>
                      Just show up. Organized by the community — the park isn't involved.
                    </div>
                  </div>
                ) : null}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {arr(vals.ev?.rows).map((r, i_r) => (
                    <Fragment key={i_r}>
                      <div
                        style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid #ececeb' }}
                      >
                        <div
                          style={{
                            font: '400 14px/1.45 Lato,sans-serif',
                            color: '#6f6a66',
                            width: '88px',
                            flex: 'none',
                          }}
                        >
                          {r?.k}
                        </div>
                        <div style={{ flex: '1', font: '700 14px/1.45 Lato,sans-serif' }}>{r?.v}</div>
                        {r?.hasLink ? (
                          <div
                            onClick={r?.onLink}
                            style={{
                              font: '700 14px/1.45 Lato,sans-serif',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            }}
                          >
                            {r?.link}
                          </div>
                        ) : null}
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ font: '400 15px/1.55 Lato,sans-serif', textWrap: 'pretty' }}>{vals.ev?.desc}</div>
                {vals.ev?.isEnroll ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div
                        style={{ display: 'flex', justifyContent: 'space-between', font: '700 14px/1 Lato,sans-serif' }}
                      >
                        <span>{vals.ev?.spotsText}</span>
                        <span style={{ fontWeight: '400', color: '#6f6a66' }}>Free</span>
                      </div>
                      <div style={{ height: '6px', borderRadius: '3px', background: '#ececeb', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${s(vals.ev?.pct)}%`,
                            background: '#1a1613',
                            borderRadius: '3px',
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>Enroll as</div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '4px',
                          padding: '4px',
                          background: '#f1f1f0',
                          borderRadius: '12px',
                        }}
                      >
                        {arr(vals.ev?.opts).map((o, i_o) => (
                          <Fragment key={i_o}>
                            <div
                              onClick={o?.onClick}
                              style={{
                                flex: '1',
                                height: '38px',
                                borderRadius: '9px',
                                display: 'grid',
                                placeItems: 'center',
                                font: '700 14px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                background: `${s(o?.bg)}`,
                                color: `${s(o?.fg)}`,
                                boxShadow: `${s(o?.sh)}`,
                              }}
                            >
                              {o?.label}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ font: '400 13px/1.45 Lato,sans-serif', color: '#6f6a66' }}>{vals.ev?.optNote}</div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  padding: '12px 20px 34px',
                  background: '#fff',
                  borderTop: '1px solid #ececeb',
                  display: 'flex',
                  gap: '10px',
                }}
              >
                {vals.ev?.showCal2 ? (
                  <div
                    onClick={vals.ev?.onCal}
                    style={{
                      flex: '1',
                      height: '50px',
                      borderRadius: '12px',
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 15px/1 Lato,sans-serif',
                      cursor: 'pointer',
                    }}
                  >
                    {vals.ev?.calLabel}
                  </div>
                ) : null}
                <div
                  onClick={vals.ev?.primary}
                  style={{
                    flex: '1',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                    font: '700 16px/1 Lato,sans-serif',
                    cursor: 'pointer',
                    background: `${s(vals.ev?.pBg)}`,
                    color: `${s(vals.ev?.pFg)}`,
                    boxShadow: `${s(vals.ev?.pSh)}`,
                  }}
                >
                  {vals.ev?.pLabel}
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ PLAN A GAME ============ */}
          {vals.isPlan ? (
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: '#fff',
                zIndex: '22',
                animation: 'piUp .3s cubic-bezier(.2,.8,.2,1)',
              }}
            >
              {vals.planForm ? (
                <>
                  <div
                    className="pi-scroll"
                    style={{
                      position: 'absolute',
                      inset: '0 0 104px 0',
                      overflowY: 'auto',
                      scrollbarWidth: 'none',
                      padding: '56px 20px 24px',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ font: '700 26px/1.15 Lato,sans-serif' }}>Plan a game</div>
                      <div
                        onClick={vals.back}
                        style={{
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '50%',
                          background: '#f1f1f0',
                          display: 'grid',
                          placeItems: 'center',
                          font: '400 20px/1 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        ×
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>Sport</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '8px' }}>
                        {arr(vals.planSports).map((o, i_o) => (
                          <Fragment key={i_o}>
                            <div
                              onClick={o?.onClick}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '4px',
                                padding: '10px 4px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                background: `${s(o?.bg)}`,
                                boxShadow: `${s(o?.sh)}`,
                              }}
                            >
                              <img src={o?.src} alt="" style={{ width: '34px', height: '34px' }} />
                              <div style={{ font: '700 12px/1.2 Lato,sans-serif', textAlign: 'center' }}>
                                {o?.label}
                              </div>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>When</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {arr(vals.planDays).map((o, i_o) => (
                          <Fragment key={i_o}>
                            <div
                              onClick={o?.onClick}
                              style={{
                                padding: '9px 13px',
                                borderRadius: '999px',
                                font: '700 13px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                background: `${s(o?.bg)}`,
                                color: `${s(o?.fg)}`,
                                boxShadow: `${s(o?.sh)}`,
                              }}
                            >
                              {o?.label}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {arr(vals.planTimes).map((o, i_o) => (
                          <Fragment key={i_o}>
                            <div
                              onClick={o?.onClick}
                              style={{
                                padding: '9px 13px',
                                borderRadius: '999px',
                                font: '700 13px/1 Lato,sans-serif',
                                cursor: 'pointer',
                                background: `${s(o?.bg)}`,
                                color: `${s(o?.fg)}`,
                                boxShadow: `${s(o?.sh)}`,
                              }}
                            >
                              {o?.label}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 0',
                        borderTop: '1px solid #ececeb',
                        borderBottom: '1px solid #ececeb',
                      }}
                    >
                      <div style={{ font: '400 14px/1.3 Lato,sans-serif', color: '#6f6a66', width: '52px' }}>Where</div>
                      <div style={{ flex: '1', font: '700 15px/1.3 Lato,sans-serif' }}>{vals.planPlace}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>Players</div>
                      {arr(vals.steppers).map((t, i_t) => (
                        <Fragment key={i_t}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ flex: '1', font: '400 15px/1.3 Lato,sans-serif' }}>{t?.label}</div>
                            <div
                              onClick={t?.dec}
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                boxShadow: 'inset 0 0 0 1px #ddd8d2',
                                display: 'grid',
                                placeItems: 'center',
                                font: '400 20px/1 Lato,sans-serif',
                                cursor: 'pointer',
                              }}
                            >
                              −
                            </div>
                            <div style={{ width: '22px', textAlign: 'center', font: '700 16px/1 Lato,sans-serif' }}>
                              {t?.v}
                            </div>
                            <div
                              onClick={t?.inc}
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                boxShadow: 'inset 0 0 0 1px #ddd8d2',
                                display: 'grid',
                                placeItems: 'center',
                                font: '400 20px/1 Lato,sans-serif',
                                cursor: 'pointer',
                              }}
                            >
                              +
                            </div>
                          </div>
                        </Fragment>
                      ))}
                      <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66' }}>
                        {'Shown as: '}
                        <b style={{ color: '#1a1613' }}>{vals.needText}</b>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {arr(vals.planToggles).map((t, i_t) => (
                        <Fragment key={i_t}>
                          <div
                            onClick={t?.onClick}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              padding: '14px 0',
                              borderTop: '1px solid #ececeb',
                              cursor: 'pointer',
                            }}
                          >
                            <div style={{ flex: '1' }}>
                              <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{t?.title}</div>
                              <div
                                style={{ font: '400 13px/1.45 Lato,sans-serif', color: '#6f6a66', textWrap: 'pretty' }}
                              >
                                {t?.sub}
                              </div>
                            </div>
                            <div
                              style={{
                                width: '44px',
                                height: '26px',
                                borderRadius: '13px',
                                background: `${s(t?.bg)}`,
                                position: 'relative',
                                transition: 'background .2s',
                                flex: 'none',
                              }}
                            >
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '3px',
                                  left: `${s(t?.knob)}px`,
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
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      padding: '12px 20px 34px',
                      background: '#fff',
                      borderTop: '1px solid #ececeb',
                    }}
                  >
                    <div
                      onClick={vals.postPlan}
                      style={{
                        height: '50px',
                        borderRadius: '12px',
                        background: 'oklch(0.68 0.21 44)',
                        color: '#fff',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 16px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      Post plan
                    </div>
                  </div>
                </>
              ) : null}
              {vals.planDone ? (
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    padding: '56px 20px 34px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div
                      onClick={vals.back}
                      style={{
                        width: '36px',
                        height: '36px',
                        flex: 'none',
                        borderRadius: '50%',
                        background: '#f1f1f0',
                        display: 'grid',
                        placeItems: 'center',
                        font: '400 20px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      ×
                    </div>
                  </div>
                  <div style={{ font: '700 26px/1.2 Lato,sans-serif' }}>Your game is up</div>
                  <div
                    style={{
                      borderRadius: '16px',
                      boxShadow: '0 0 0 1px #e4e4e2',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: 'oklch(0.68 0.21 44)',
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <img
                          src={vals.planSum?.src}
                          alt=""
                          style={{ width: '38px', height: '38px', filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                      <div>
                        <div style={{ font: '700 16px/1.3 Lato,sans-serif' }}>{vals.planSum?.title}</div>
                        <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66' }}>
                          {vals.planSum?.sub}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {arr(vals.planSum?.chips).map((c, i_c) => (
                        <Fragment key={i_c}>
                          <div
                            style={{
                              font: '700 12px/1 Lato,sans-serif',
                              padding: '6px 10px',
                              borderRadius: '999px',
                              background: '#f1f1f0',
                            }}
                          >
                            {c}
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    <div
                      style={{
                        borderTop: '1px solid #ececeb',
                        paddingTop: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <div style={{ font: '400 14px/1.45 Lato,sans-serif', color: '#6f6a66' }}>
                        {vals.planSum?.notified}
                      </div>
                      {vals.sayHi ? (
                        <div
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            animation: 'piFade .4s ease-out',
                          }}
                        >
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: '#f1f1f0',
                              display: 'grid',
                              placeItems: 'center',
                              font: '700 12px/1 Lato,sans-serif',
                              color: '#6f6a66',
                              position: 'relative',
                              flex: 'none',
                            }}
                          >
                            RS
                            <img
                              src={vals.rafaelPhoto}
                              alt=""
                              style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
                          </div>
                          <div style={{ flex: '1', font: '400 14px/1.4 Lato,sans-serif' }}>
                            <b>Rafael Souza</b>
                            {' tapped "I\'ll say hi" · Long-time · 112 visits'}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div
                      onClick={vals.copyLink}
                      style={{
                        flex: '1',
                        height: '46px',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 14px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      Share link
                    </div>
                    <div
                      onClick={vals.planCal}
                      style={{
                        flex: '1',
                        height: '46px',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 14px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      {vals.planCalLabel}
                    </div>
                  </div>
                  <div style={{ flex: '1' }} />
                  <div
                    onClick={vals.planFinish}
                    style={{
                      height: '50px',
                      borderRadius: '12px',
                      background: '#1a1613',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 16px/1 Lato,sans-serif',
                      cursor: 'pointer',
                    }}
                  >
                    Done
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {/* ============ CHECK-IN SHEET ============ */}
          {vals.isCheckSheet ? (
            <div style={{ position: 'absolute', inset: '0', zIndex: '30' }}>
              <div
                onClick={vals.closeCheck}
                style={{ position: 'absolute', inset: '0', background: 'rgba(26,22,19,.32)', animation: 'piFade .2s' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  maxHeight: '78%',
                  background: '#fff',
                  borderRadius: '22px 22px 0 0',
                  padding: '10px 20px 34px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  animation: 'piUp .3s cubic-bezier(.2,.8,.2,1)',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '5px',
                    borderRadius: '3px',
                    background: '#ddd8d2',
                    margin: '0 auto',
                    flex: 'none',
                  }}
                />
                <div style={{ flex: 'none' }}>
                  <div style={{ font: '700 20px/1.2 Lato,sans-serif' }}>What are you playing today?</div>
                  <div style={{ font: '400 14px/1.4 Lato,sans-serif', color: '#6f6a66', paddingTop: '2px' }}>
                    We'll add a stamp to your passport.
                  </div>
                </div>
                <div
                  className="pi-scroll"
                  style={{
                    flex: '1',
                    minHeight: '0',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                    gap: '8px',
                  }}
                >
                  {arr(vals.checkSports).map((c, i_c) => (
                    <Fragment key={i_c}>
                      <div
                        onClick={c?.onClick}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '12px 6px 10px',
                          borderRadius: '14px',
                          background: `${s(c?.bg)}`,
                          color: `${s(c?.fg)}`,
                          cursor: 'pointer',
                          transition: 'background .15s',
                        }}
                      >
                        {' '}
                        <img src={c?.src} alt="" style={{ width: '36px', height: '36px', display: 'block' }} />{' '}
                        <div style={{ font: '700 12px/1.2 Lato,sans-serif', textAlign: 'center' }}>{c?.name}</div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div
                  onClick={vals.confirmCheck}
                  style={{
                    flex: 'none',
                    height: '52px',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                    font: '700 16px/1 Lato,sans-serif',
                    cursor: 'pointer',
                    background: `${s(vals.checkGoBg)}`,
                    color: `${s(vals.checkGoFg)}`,
                    transition: 'background .2s',
                  }}
                >
                  {vals.checkGoLabel}
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ JOIN QUEUE SHEET ============ */}
          {vals.isJoin ? (
            <div style={{ position: 'absolute', inset: '0', zIndex: '30' }}>
              <div
                onClick={vals.closeJoin}
                style={{ position: 'absolute', inset: '0', background: 'rgba(26,22,19,.32)', animation: 'piFade .2s' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: '#fff',
                  borderRadius: '22px 22px 0 0',
                  padding: '10px 20px 34px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  animation: 'piUp .3s cubic-bezier(.2,.8,.2,1)',
                }}
              >
                <div
                  style={{ width: '40px', height: '5px', borderRadius: '3px', background: '#ddd8d2', margin: '0 auto' }}
                />
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'oklch(0.68 0.21 44)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <img
                      src={vals.jn?.src}
                      alt=""
                      style={{ width: '38px', height: '38px', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div>
                    <div style={{ font: '700 20px/1.2 Lato,sans-serif' }}>Join the line</div>
                    <div style={{ font: '400 14px/1.4 Lato,sans-serif', color: '#6f6a66' }}>{vals.jn?.sub}</div>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', gap: '4px', padding: '4px', background: '#f1f1f0', borderRadius: '12px' }}
                >
                  {arr(vals.jn?.modes).map((o, i_o) => (
                    <Fragment key={i_o}>
                      <div
                        onClick={o?.onClick}
                        style={{
                          flex: '1',
                          height: '38px',
                          borderRadius: '9px',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 14px/1 Lato,sans-serif',
                          cursor: 'pointer',
                          background: `${s(o?.bg)}`,
                          color: `${s(o?.fg)}`,
                          boxShadow: `${s(o?.sh)}`,
                        }}
                      >
                        {o?.label}
                      </div>
                    </Fragment>
                  ))}
                </div>
                {vals.jn?.isTeam ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flex: '1', font: '400 15px/1.3 Lato,sans-serif' }}>People in my group</div>
                    <div
                      onClick={vals.jn?.dec}
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        display: 'grid',
                        placeItems: 'center',
                        font: '400 20px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      −
                    </div>
                    <div style={{ width: '22px', textAlign: 'center', font: '700 16px/1 Lato,sans-serif' }}>
                      {vals.jn?.size}
                    </div>
                    <div
                      onClick={vals.jn?.inc}
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        display: 'grid',
                        placeItems: 'center',
                        font: '400 20px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      +
                    </div>
                  </div>
                ) : null}
                <div
                  style={{
                    font: '400 14px/1.5 Lato,sans-serif',
                    color: '#1a1613',
                    padding: '12px 14px',
                    background: '#f7f7f6',
                    borderRadius: '12px',
                    textWrap: 'pretty',
                  }}
                >
                  {vals.jn?.note}
                </div>
                <div
                  onClick={vals.confirmJoin}
                  style={{
                    height: '50px',
                    borderRadius: '12px',
                    background: 'oklch(0.68 0.21 44)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                    font: '700 16px/1 Lato,sans-serif',
                    cursor: 'pointer',
                  }}
                >
                  {'Join · '}
                  {vals.jn?.wait}
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ DM SHEET ============ */}
          {vals.isDm ? (
            <div style={{ position: 'absolute', inset: '0', zIndex: '30' }}>
              <div
                onClick={vals.closeDm}
                style={{ position: 'absolute', inset: '0', background: 'rgba(26,22,19,.32)', animation: 'piFade .2s' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: '#fff',
                  borderRadius: '22px 22px 0 0',
                  padding: '10px 20px 34px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  animation: 'piUp .3s cubic-bezier(.2,.8,.2,1)',
                }}
              >
                <div
                  style={{ width: '40px', height: '5px', borderRadius: '3px', background: '#ddd8d2', margin: '0 auto' }}
                />
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#f1f1f0',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 15px/1 Lato,sans-serif',
                      color: '#6f6a66',
                      position: 'relative',
                      flex: 'none',
                    }}
                  >
                    {vals.dm?.ini}
                    <img
                      src={vals.dm?.photo}
                      alt=""
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ font: '700 18px/1.25 Lato,sans-serif' }}>
                      {'Say hi to '}
                      {vals.dm?.first}
                    </div>
                    <div style={{ font: '400 13px/1.4 Lato,sans-serif', color: '#6f6a66' }}>{vals.dm?.line}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {arr(vals.dm?.prompts).map((p, i_p) => (
                    <Fragment key={i_p}>
                      <div
                        onClick={p?.onClick}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '999px',
                          boxShadow: 'inset 0 0 0 1px #ddd8d2',
                          font: '400 13px/1.2 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        {p?.label}
                      </div>
                    </Fragment>
                  ))}
                </div>{' '}
                <textarea
                  value={vals.dmText ?? ''}
                  onChange={vals.dmChange}
                  rows="3"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    border: 'none',
                    borderRadius: '12px',
                    background: '#f7f7f6',
                    padding: '12px 14px',
                    font: '400 15px/1.45 Lato,sans-serif',
                    color: '#1a1613',
                    resize: 'none',
                    outline: 'none',
                  }}
                />{' '}
                <div
                  onClick={vals.sendDm}
                  style={{
                    height: '50px',
                    borderRadius: '12px',
                    background: 'oklch(0.68 0.21 44)',
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    font: '700 16px/1 Lato,sans-serif',
                    cursor: 'pointer',
                  }}
                >
                  Send message
                </div>
              </div>
            </div>
          ) : null}
          {/* ============ YOUR TURN ============ */}
          {vals.isTurn ? (
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: '#fff',
                zIndex: '35',
                padding: '56px 24px 34px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                animation: 'piUp .35s cubic-bezier(.2,.8,.2,1)',
              }}
            >
              {vals.turnWaiting ? (
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div
                      onClick={vals.closeTurn}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#f1f1f0',
                        display: 'grid',
                        placeItems: 'center',
                        font: '400 20px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      ×
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '14px',
                      textAlign: 'center',
                      paddingTop: '20px',
                    }}
                  >
                    <div
                      style={{
                        font: '700 13px/1 Lato,sans-serif',
                        color: '#fff',
                        background: 'oklch(0.68 0.21 44)',
                        padding: '7px 12px',
                        borderRadius: '999px',
                      }}
                    >
                      Your turn
                    </div>
                    <div style={{ font: '700 28px/1.2 Lato,sans-serif' }}>{vals.qc?.name}</div>
                    <div style={{ font: '400 15px/1.5 Lato,sans-serif', color: '#6f6a66', maxWidth: '280px' }}>
                      Head to the court and check in. Your spot is held for
                    </div>
                    <div
                      style={{
                        font: '700 72px/1 Lato,sans-serif',
                        fontVariantNumeric: 'tabular-nums',
                        letterSpacing: '-0.02em',
                        paddingTop: '4px',
                      }}
                    >
                      {vals.countdown}
                    </div>
                  </div>
                  <div
                    style={{
                      height: '170px',
                      flex: 'none',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#f7f7f6',
                      marginTop: '8px',
                    }}
                  >
                    {' '}
                    <img
                      src="assets/park-map-app.svg"
                      alt=""
                      style={{
                        position: 'absolute',
                        left: `${s(vals.turnMapL)}px`,
                        top: `${s(vals.turnMapT)}px`,
                        width: '972px',
                        height: '1179px',
                        maxWidth: 'none',
                      }}
                    />{' '}
                    <div
                      style={{
                        position: 'absolute',
                        left: '171px',
                        top: '85px',
                        transform: 'translate(-50%,-50%)',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#1a1613',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <img src={vals.qc?.srcW} alt="" style={{ width: '26px', height: '26px', display: 'block' }} />
                    </div>
                  </div>
                  <div style={{ flex: '1' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div
                      onClick={vals.imHere}
                      style={{
                        height: '54px',
                        borderRadius: '12px',
                        background: 'oklch(0.68 0.21 44)',
                        color: '#fff',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 17px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      I'm here
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div
                        onClick={vals.skipTurn}
                        style={{
                          flex: '1',
                          height: '46px',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0 0 1px #ddd8d2',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 14px/1 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        Skip, let next go
                      </div>
                      <div
                        onClick={vals.leaveQueue}
                        style={{
                          flex: '1',
                          height: '46px',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0 0 1px #ddd8d2',
                          display: 'grid',
                          placeItems: 'center',
                          font: '700 14px/1 Lato,sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        Leave queue
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {vals.turnChecked ? (
                <>
                  <div
                    style={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '18px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '132px',
                        height: '132px',
                        borderRadius: '50%',
                        border: '3px solid oklch(0.68 0.21 44)',
                        display: 'grid',
                        placeItems: 'center',
                        animation: 'piStamp .6s cubic-bezier(.2,.8,.2,1) forwards',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                        <img src={vals.qc?.srcO} alt="" style={{ width: '64px', height: '64px', display: 'block' }} />
                        <div
                          style={{
                            font: '900 italic 12px/1 Lato,sans-serif',
                            color: 'oklch(0.68 0.21 44)',
                            letterSpacing: '.08em',
                          }}
                        >
                          OCT 13
                        </div>
                      </div>
                    </div>
                    <div style={{ font: '700 26px/1.2 Lato,sans-serif' }}>Checked in. Enjoy the game.</div>
                    <div style={{ font: '400 15px/1.5 Lato,sans-serif', color: '#6f6a66', maxWidth: '290px' }}>
                      {vals.checkedNote}
                    </div>
                  </div>
                  <div
                    onClick={vals.finishTurn}
                    style={{
                      height: '50px',
                      borderRadius: '12px',
                      background: '#1a1613',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 16px/1 Lato,sans-serif',
                      cursor: 'pointer',
                    }}
                  >
                    Done
                  </div>
                </>
              ) : null}
            </div>
          ) : null}
          {/* ============ ONBOARDING ============ */}
          {vals.isOnb ? (
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: '#fff',
                zIndex: '60',
                display: 'flex',
                flexDirection: 'column',
                padding: '60px 20px 34px',
                boxSizing: 'border-box',
                opacity: `${s(vals.onbOp)}`,
                transform: `scale(${s(vals.onbScale)})`,
                filter: `blur(${s(vals.onbBlur)}px)`,
                pointerEvents: `${s(vals.onbPe)}`,
                transition: 'opacity .7s ease,transform .8s cubic-bezier(.2,.7,.2,1),filter .7s ease',
              }}
            >
              {vals.isAuth ? (
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ flex: '1', position: 'relative', overflow: 'hidden' }}>
                    {' '}
                    <img
                      src="assets/park-map-app.svg"
                      alt=""
                      style={{
                        position: 'absolute',
                        left: '-330px',
                        top: '-330px',
                        width: '1080px',
                        height: '1310px',
                        maxWidth: 'none',
                        opacity: '.6',
                      }}
                    />{' '}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        background:
                          'linear-gradient(180deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.7) 60%,#fff 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '18px',
                        padding: '60px 36px 0',
                      }}
                    >
                      <div
                        style={{
                          width: '88px',
                          height: '88px',
                          borderRadius: '28px',
                          background: 'oklch(0.68 0.21 44)',
                          display: 'grid',
                          placeItems: 'center',
                          boxShadow: '0 14px 30px -12px oklch(0.68 0.21 44 / .7)',
                        }}
                      >
                        <img
                          src="assets/pictograms/white/tennis.svg"
                          alt=""
                          style={{ width: '58px', height: '58px' }}
                        />
                      </div>
                      <div style={{ font: '900 italic 46px/0.95 Lato,sans-serif', letterSpacing: '-0.02em' }}>
                        Play Ibira
                      </div>
                      <div
                        style={{
                          font: '400 16px/1.45 Lato,sans-serif',
                          color: '#4a4542',
                          textAlign: 'center',
                          textWrap: 'pretty',
                        }}
                      >
                        Find a game, join the line and meet the regulars in Ibirapuera Park.
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '8px 20px 34px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div
                      onClick={vals.enterApp}
                      style={{
                        height: '52px',
                        borderRadius: '12px',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 16px/1 Lato,sans-serif',
                        cursor: 'pointer',
                        background: 'oklch(0.68 0.21 44)',
                        color: '#fff',
                      }}
                    >
                      Log in
                    </div>
                    <div
                      className="play-ibira-app-hover-2"
                      onClick={vals.enterVisitor}
                      style={{
                        height: '52px',
                        borderRadius: '12px',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 16px/1 Lato,sans-serif',
                        cursor: 'pointer',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        color: '#1a1613',
                      }}
                    >
                      Access as visitor
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '6px',
                        paddingTop: '6px',
                        font: '400 15px/1 Lato,sans-serif',
                        color: '#6f6a66',
                      }}
                    >
                      <span>Don't have an account?</span>
                      <span
                        onClick={vals.onbSignup}
                        style={{
                          fontWeight: '700',
                          color: '#1a1613',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          textUnderlineOffset: '3px',
                        }}
                      >
                        Create one
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
              {vals.hasDots ? (
                <div style={{ display: 'flex', gap: '6px', paddingBottom: '22px' }}>
                  {arr(vals.onbDots).map((d, i_d) => (
                    <Fragment key={i_d}>
                      <div
                        style={{
                          flex: '1',
                          height: '4px',
                          borderRadius: '2px',
                          background: `${s(d?.bg)}`,
                          transition: 'background .3s',
                        }}
                      />
                    </Fragment>
                  ))}
                </div>
              ) : null}
              {vals.isProfile ? (
                <div
                  className="pi-scroll"
                  style={{
                    flex: '1',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                >
                  <div
                    onClick={vals.onbBack}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                      display: 'grid',
                      placeItems: 'center',
                      font: '400 24px/1 Lato,sans-serif',
                      cursor: 'pointer',
                      flex: 'none',
                    }}
                  >
                    ‹
                  </div>
                  <div>
                    <div style={{ font: '700 24px/1.2 Lato,sans-serif' }}>What should we call you?</div>
                    <div
                      style={{
                        font: '400 15px/1.45 Lato,sans-serif',
                        color: '#6f6a66',
                        paddingTop: '6px',
                        textWrap: 'pretty',
                      }}
                    >
                      Regulars see your first name and photo when you join a line or say hi.
                    </div>
                  </div>{' '}
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      padding: '6px 0',
                    }}
                  >
                    {' '}
                    {vals.hasPhoto ? (
                      <>
                        {' '}
                        <img
                          src={vals.photo}
                          alt="Your photo"
                          style={{
                            width: '128px',
                            height: '128px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: '0 0 0 4px #fff,0 0 0 5px #ddd8d2',
                          }}
                        />{' '}
                      </>
                    ) : null}{' '}
                    {vals.noPhoto ? (
                      <div
                        style={{
                          width: '128px',
                          height: '128px',
                          borderRadius: '50%',
                          background: '#f7f7f6',
                          border: '1.5px dashed #c9c9c7',
                          boxSizing: 'border-box',
                          display: 'grid',
                          placeItems: 'center',
                          font: '300 44px/1 Lato,sans-serif',
                          color: '#6f6a66',
                        }}
                      >
                        +
                      </div>
                    ) : null}
                    <div
                      style={{
                        font: '700 15px/1 Lato,sans-serif',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      {vals.photoLabel}
                    </div>{' '}
                    <input type="file" accept="image/*" onChange={vals.onPhoto} style={{ display: 'none' }} />{' '}
                  </label>{' '}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ font: '700 13px/1 Lato,sans-serif', color: '#6f6a66' }}>Your name</div>{' '}
                    <input
                      className="play-ibira-app-focus-3"
                      value={vals.name ?? ''}
                      onChange={vals.onName}
                      placeholder="First and last name"
                      autoComplete="name"
                      style={{
                        height: '54px',
                        border: 'none',
                        outline: 'none',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px #ddd8d2',
                        padding: '0 16px',
                        font: '400 17px/1 Lato,sans-serif',
                        color: '#1a1613',
                        background: '#fff',
                        boxSizing: 'border-box',
                        width: '100%',
                      }}
                    />{' '}
                  </div>
                </div>
              ) : null}
              {vals.isSportsStep ? (
                <div
                  className="pi-scroll"
                  style={{
                    flex: '1',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                  }}
                >
                  <div
                    onClick={vals.onbBack}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                      display: 'grid',
                      placeItems: 'center',
                      font: '400 24px/1 Lato,sans-serif',
                      cursor: 'pointer',
                      flex: 'none',
                    }}
                  >
                    ‹
                  </div>
                  <div>
                    <div style={{ font: '700 24px/1.2 Lato,sans-serif' }}>What would you like to play?</div>
                    <div style={{ font: '400 15px/1.45 Lato,sans-serif', color: '#6f6a66', paddingTop: '6px' }}>
                      Pick any. We'll show you where it happens and who welcomes beginners.
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '8px' }}>
                    {arr(vals.onbSports).map((o, i_o) => (
                      <Fragment key={i_o}>
                        <div
                          onClick={o?.onClick}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '12px 4px 10px',
                            borderRadius: '14px',
                            cursor: 'pointer',
                            background: `${s(o?.bg)}`,
                            boxShadow: `${s(o?.sh)}`,
                            transition: 'box-shadow .15s',
                          }}
                        >
                          {' '}
                          <img src={o?.src} alt="" style={{ width: '46px', height: '46px' }} />{' '}
                          <div style={{ font: '700 12px/1.2 Lato,sans-serif', textAlign: 'center' }}>{o?.label}</div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              ) : null}
              {vals.isLevel ? (
                <div
                  className="pi-scroll"
                  style={{
                    flex: '1',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                  }}
                >
                  <div
                    onClick={vals.onbBack}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                      display: 'grid',
                      placeItems: 'center',
                      font: '400 24px/1 Lato,sans-serif',
                      cursor: 'pointer',
                    }}
                  >
                    ‹
                  </div>
                  <div>
                    <div style={{ font: '700 24px/1.2 Lato,sans-serif' }}>How long have you been playing?</div>
                    <div style={{ font: '400 15px/1.45 Lato,sans-serif', color: '#6f6a66', paddingTop: '6px' }}>
                      It helps regulars know how to welcome you. There's no wrong answer.
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {arr(vals.favRows).map((f, i_f) => (
                      <Fragment key={i_f}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            padding: '14px 0',
                            borderBottom: '1px solid #ececeb',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'oklch(0.68 0.21 44)',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <img
                                src={f?.src}
                                alt=""
                                style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }}
                              />
                            </div>
                            <div style={{ font: '700 15px/1.3 Lato,sans-serif' }}>{f?.name}</div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: '4px',
                              padding: '3px',
                              background: '#f1f1f0',
                              borderRadius: '10px',
                            }}
                          >
                            {arr(f?.opts).map((o, i_o) => (
                              <Fragment key={i_o}>
                                <div
                                  onClick={o?.onClick}
                                  style={{
                                    flex: '1',
                                    height: '34px',
                                    borderRadius: '8px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    font: '700 12px/1 Lato,sans-serif',
                                    cursor: 'pointer',
                                    background: `${s(o?.bg)}`,
                                    color: `${s(o?.fg)}`,
                                    boxShadow: `${s(o?.sh)}`,
                                  }}
                                >
                                  {o?.label}
                                </div>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              ) : null}
              {vals.isLoc ? (
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div
                    onClick={vals.onbBack}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      boxShadow: 'inset 0 0 0 1px #ddd8d2',
                      display: 'grid',
                      placeItems: 'center',
                      font: '400 24px/1 Lato,sans-serif',
                      cursor: 'pointer',
                    }}
                  >
                    ‹
                  </div>
                  <div
                    style={{
                      height: '210px',
                      flex: 'none',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#f7f7f6',
                    }}
                  >
                    {' '}
                    <img
                      src="assets/park-map-app.svg"
                      alt=""
                      style={{
                        position: 'absolute',
                        left: '-260px',
                        top: '-370px',
                        width: '864px',
                        height: '1048px',
                        maxWidth: 'none',
                      }}
                    />{' '}
                    <div
                      style={{
                        position: 'absolute',
                        left: '175px',
                        top: '105px',
                        transform: 'translate(-50%,-50%)',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'rgba(61,146,196,.16)',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#3d92c4',
                          boxShadow: '0 0 0 4px #fff,0 1px 4px rgba(0,0,0,.25)',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div style={{ font: '700 24px/1.2 Lato,sans-serif' }}>Use your location in the park?</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {arr(vals.locReasons).map((r, i_r) => (
                      <Fragment key={i_r}>
                        <div
                          style={{
                            display: 'flex',
                            gap: '12px',
                            font: '400 15px/1.45 Lato,sans-serif',
                            textWrap: 'pretty',
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#1a1613',
                              marginTop: '9px',
                              flex: 'none',
                            }}
                          />
                          <div>{r}</div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              ) : null}
              {vals.isReady ? (
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '26px',
                    padding: '60px 20px 34px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      flex: '1',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#f7f7f6',
                      animation: 'piFade .6s ease both',
                    }}
                  >
                    {' '}
                    <img
                      src="assets/park-map-app.svg"
                      alt=""
                      style={{
                        position: 'absolute',
                        left: '-250px',
                        top: '-330px',
                        width: '864px',
                        height: '1048px',
                        maxWidth: 'none',
                      }}
                    />{' '}
                    <div
                      style={{
                        position: 'absolute',
                        left: '175px',
                        top: '270px',
                        transform: 'translate(-50%,-50%)',
                        width: '84px',
                        height: '84px',
                        borderRadius: '50%',
                        background: 'rgba(61,146,196,.16)',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#3d92c4',
                          boxShadow: '0 0 0 4px #fff,0 1px 4px rgba(0,0,0,.25)',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: '46px',
                        top: '92px',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        background: '#fff',
                        boxShadow: '0 6px 16px -6px rgba(26,22,19,.3)',
                        display: 'grid',
                        placeItems: 'center',
                        animation: 'piPop .6s cubic-bezier(.2,.7,.2,1) 0.15s both',
                      }}
                    >
                      <img src="assets/pictograms/tennis.svg" alt="" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: '222px',
                        top: '62px',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        background: '#fff',
                        boxShadow: '0 6px 16px -6px rgba(26,22,19,.3)',
                        display: 'grid',
                        placeItems: 'center',
                        animation: 'piPop .6s cubic-bezier(.2,.7,.2,1) 0.25s both',
                      }}
                    >
                      <img src="assets/pictograms/football.svg" alt="" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: '262px',
                        top: '236px',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        background: '#fff',
                        boxShadow: '0 6px 16px -6px rgba(26,22,19,.3)',
                        display: 'grid',
                        placeItems: 'center',
                        animation: 'piPop .6s cubic-bezier(.2,.7,.2,1) 0.35s both',
                      }}
                    >
                      <img
                        src="assets/pictograms/roller-skating.svg"
                        alt=""
                        style={{ width: '40px', height: '40px' }}
                      />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: '36px',
                        top: '300px',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        background: '#fff',
                        boxShadow: '0 6px 16px -6px rgba(26,22,19,.3)',
                        display: 'grid',
                        placeItems: 'center',
                        animation: 'piPop .6s cubic-bezier(.2,.7,.2,1) 0.45s both',
                      }}
                    >
                      <img src="assets/pictograms/running.svg" alt="" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: '190px',
                        top: '392px',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        background: '#fff',
                        boxShadow: '0 6px 16px -6px rgba(26,22,19,.3)',
                        display: 'grid',
                        placeItems: 'center',
                        animation: 'piPop .6s cubic-bezier(.2,.7,.2,1) 0.55s both',
                      }}
                    >
                      <img src="assets/pictograms/basketball.svg" alt="" style={{ width: '40px', height: '40px' }} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      animation: 'piFade .6s ease .2s both',
                    }}
                  >
                    <div style={{ font: '700 28px/1.15 Lato,sans-serif' }}>
                      {"You're all set, "}
                      {vals.readyName}.
                    </div>
                    <div style={{ font: '400 16px/1.45 Lato,sans-serif', color: '#6f6a66', textWrap: 'pretty' }}>
                      See what's on today and who welcomes beginners.
                    </div>
                  </div>
                  <div
                    className="play-ibira-app-active-4"
                    onClick={vals.enterApp}
                    style={{
                      height: '64px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      font: '700 18px/1 Lato,sans-serif',
                      cursor: 'pointer',
                      background: 'oklch(0.68 0.21 44)',
                      color: '#fff',
                      flex: 'none',
                      boxShadow: '0 12px 26px -14px oklch(0.68 0.21 44 / .8)',
                      animation: 'piFade .6s ease .3s both',
                    }}
                  >
                    <span>Explore Sports in the Park</span>
                    <span style={{ fontSize: '22px' }}>→</span>
                  </div>
                </div>
              ) : null}
              {vals.hasDots ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px' }}>
                  <div
                    onClick={vals.onbNext}
                    style={{
                      height: '52px',
                      borderRadius: '12px',
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 16px/1 Lato,sans-serif',
                      cursor: 'pointer',
                      background: `${s(vals.onbBtnBg)}`,
                      color: `${s(vals.onbBtnFg)}`,
                      transition: 'background .2s',
                    }}
                  >
                    {vals.onbBtn}
                  </div>
                  {vals.isLoc ? (
                    <div
                      onClick={vals.onbSkipLoc}
                      style={{
                        height: '44px',
                        display: 'grid',
                        placeItems: 'center',
                        font: '700 15px/1 Lato,sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      Not now
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {/* ============ NOTIFICATION / TOAST / STATUS ============ */}
          {vals.hasNotif ? (
            <div
              onClick={vals.openTurn}
              style={{
                position: 'absolute',
                left: '10px',
                right: '10px',
                top: '54px',
                zIndex: '55',
                background: 'rgba(250,248,245,.94)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: '22px',
                padding: '12px 14px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                boxShadow: '0 8px 30px rgba(26,22,19,.18)',
                cursor: 'pointer',
                animation: 'piDrop .45s cubic-bezier(.2,.8,.2,1)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'oklch(0.68 0.21 44)',
                  display: 'grid',
                  placeItems: 'center',
                  flex: 'none',
                }}
              >
                <img
                  src="assets/pictograms/white/running.svg"
                  alt=""
                  style={{ width: '30px', height: '30px', display: 'block' }}
                />
              </div>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', font: '700 14px/1.3 Lato,sans-serif' }}>
                  <span>
                    {'Your turn at '}
                    {vals.qc?.name}
                  </span>
                  <span style={{ fontWeight: '400', fontSize: '12px', color: '#6f6a66' }}>now</span>
                </div>
                <div style={{ font: '400 14px/1.35 Lato,sans-serif' }}>Check in within 5:00.</div>
              </div>
            </div>
          ) : null}
          {vals.hasToast ? (
            <div
              style={{
                position: 'absolute',
                left: '20px',
                right: '20px',
                bottom: '98px',
                zIndex: '58',
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  background: '#1a1613',
                  color: '#fff',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  font: '700 14px/1.35 Lato,sans-serif',
                  animation: 'piFade .25s ease-out',
                  boxShadow: '0 6px 20px rgba(0,0,0,.2)',
                }}
              >
                {vals.toast}
              </div>
            </div>
          ) : null}
          <div
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
              height: '50px',
              zIndex: '50',
              background: '#ffffff',
              display: vals.frame.chrome ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '4px 34px 0 44px',
              boxSizing: 'border-box',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                font: "700 16px/1 -apple-system,'SF Pro Text',Lato,sans-serif",
                color: '#1a1613',
                visibility: vals.frame.chrome ? 'visible' : 'hidden',
              }}
            >
              3:42
            </div>
            <div
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                visibility: vals.frame.chrome ? 'visible' : 'hidden',
              }}
            >
              <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '11px' }}>
                <div style={{ width: '3px', height: '4px', borderRadius: '1px', background: '#1a1613' }} />
                <div style={{ width: '3px', height: '6px', borderRadius: '1px', background: '#1a1613' }} />
                <div style={{ width: '3px', height: '8px', borderRadius: '1px', background: '#1a1613' }} />
                <div style={{ width: '3px', height: '11px', borderRadius: '1px', background: '#1a1613' }} />
              </div>
              <div
                style={{
                  width: '24px',
                  height: '11px',
                  borderRadius: '3px',
                  border: '1.5px solid rgba(26,22,19,.45)',
                  boxSizing: 'border-box',
                  padding: '1px',
                  display: 'flex',
                }}
              >
                <div style={{ width: '70%', background: '#1a1613', borderRadius: '1px' }} />
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '11px',
              width: '122px',
              height: '35px',
              marginLeft: '-61px',
              borderRadius: '20px',
              background: '#000',
              display: vals.frame.chrome ? undefined : 'none',
              zIndex: '56',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '8px',
              width: '134px',
              height: '5px',
              marginLeft: '-67px',
              display: vals.frame.chrome ? undefined : 'none',
              borderRadius: '3px',
              background: '#1a1613',
              zIndex: '70',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </Scaled>
  );
}
