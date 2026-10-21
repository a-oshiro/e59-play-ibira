import React from 'react';
import PlayIbiraView from './PlayIbiraView';
import './PlayIbira.css';

const SCREENS = [
  ['login', 'Log in / sign up'],
  ['profile', 'Onboarding · name & photo'],
  ['onb1', 'Onboarding · pick sports'],
  ['onb2', 'Onboarding · level'],
  ['onb3', 'Onboarding · location'],
  ['ready', 'Onboarding · ready to explore'],
  ['explore', 'Explore · Today sheet'],
  ['pin', 'Map zoomed + popover'],
  ['menu', 'Sports menu'],
  ['directions', 'Walking directions'],
  ['sport', 'Sport page · Tennis'],
  ['events', 'Events + audience filter'],
  ['event-enroll', 'Event · enroll'],
  ['event-open', 'Event · open entry'],
  ['queue-out', 'Queue · outside the park'],
  ['queue-in', 'Queue · in line'],
  ['queue-alert', 'Queue · your-turn alert'],
  ['queue-turn', 'Queue · check in'],
  ['plan', 'Plan a game · first time'],
  ['plan-done', 'Plan posted'],
  ['community', 'Community feed'],
  ['me', 'Profile & passport'],
];
const FLOWS = [
  ['login', 'Onboarding'],
  ['explore', 'Explore the map'],
  ['sport', 'Join a queue'],
  ['events', 'Explore events'],
  ['plan', 'Plan a game'],
  ['community', 'Community'],
  ['me', 'Profile & passport'],
];
const DECISIONS = [
  [
    'Events moved out of the tab bar',
    'Events live where people already look: "Coming up" on the Explore sheet, and on each sport page. One list with audience filters (Beginners, Women only, Under 12) sits behind "All events."',
  ],
  [
    '"Today" and the sports menu are one sheet',
    'Drag the sheet up and it becomes the full menu. No separate screen to find, and the map stays one swipe away.',
  ],
  [
    'The map popover replaces a place page',
    'A pin shows everything needed to decide (live, queue, next event, walk time). "See details" goes straight to the sport page, so there is no extra layer.',
  ],
  [
    'Play holds everything about playing',
    'Queues, Plan a game, and "Mine" (plans + enrollments + saved events) sit together. One "Plan a game" object covers looking for players, first time here, and sharing a playtime.',
  ],
  [
    'Geofence only gates joining',
    'Queues are visible from anywhere. Only joining and check-in need you in the park. Outside, the Join buttons go quiet with one line of explanation, not an error.',
  ],
  [
    'Groups are one spot, at the back',
    'A pre-formed team joins as a single place at the end of the line, like everyone else. Solo players are grouped in order. This deals with the line-jumping fights without adding new rules.',
  ],
  [
    '"Skip" is softer than leaving',
    'On your turn you can let the next person go and stay near the front, or leave. Nobody loses a spot for running 2 minutes late to the court.',
  ],
  [
    'Rules are set by the park',
    "Each court's rules appear in plain numbered lines. The app doesn't enforce them, and there is no reporting or rating, so it doesn't feel like policing.",
  ],
  [
    'No inbox (deferred)',
    '"Say hi" sends one message with suggested openers. A full chat inbox was cut for v1, so communities keep their WhatsApp groups and the app is just the way in.',
  ],
  [
    'Passport stays simple',
    'Visits, a streak and stamps. Checking in from the queue is automatic; "I\'m playing here" covers sports with no queue. No leaderboards or badges beyond Beginner-friendly.',
  ],
  [
    'Restricted events only for court sports',
    'Women-only, Under-12 and Beginners tags are for court sports, where the research saw the exclusion. Skating and running stay open to everyone.',
  ],
  [
    'Orange used sparingly',
    'Orange appears only on the one primary action, live and your-turn states, the selected pin and tab, and stamps. Everything else is Ink, Line and Paper. Park green and Lake only appear inside the map.',
  ],
];
// Shrinks the phone, watch and totem mockups toward real-world size on a typical desktop monitor.
const DEVICE_SCALE = 2 / 3;
// The interactive phone at the top is shown 20% larger than the gallery mockups.
const MAIN_PHONE_SCALE = DEVICE_SCALE * 1.2;
const HEADER_LINKS = [
  [
    'Board',
    'https://www.figma.com/board/G85d7bt95OvJhD42scgSYv/E-59-%7C-Weekend-Experience-Empathy-Research?node-id=84-912&t=fDnSNfsstDjiKaXD-11',
  ],
  ['Research Report', 'https://docs.google.com/document/d/1TPbWKxfYquCfnvmS8hRLWr0XcF82CHRT1uEce3Bzgb8/edit?usp=sharing'],
  ['Delivery Report', 'https://docs.google.com/document/d/1sn9CaJHh7wfPClE8i1xDNhI0ZG0uDe9pKY2DDVMcRtU/edit?usp=sharing'],
  ['User Test', '/user-test'],
];
const SHOW_DECISIONS = false;

class PlayIbiraLogic extends React.Component {
  // In the park by default: the prototype behaves as if you're standing next to the courts.
  state = { start: 'login', nonce: 0, inPark: true, totem: true, dec: {} };
  renderVals() {
    return {
      deviceScale: DEVICE_SCALE,
      mainPhoneScale: MAIN_PHONE_SCALE,
      headerLinks: HEADER_LINKS.map(([label, href]) => ({ label, href })),
      phoneColW: Math.round(414 * DEVICE_SCALE),
      watchColW: Math.round(324 * DEVICE_SCALE),
      totemColW: Math.round(870 * DEVICE_SCALE),
      showDecisions: SHOW_DECISIONS,
      showTotem: this.state.totem,
      totemBg: this.state.totem ? '#1a1613' : '#d6d6d4',
      totemKnob: this.state.totem ? 21 : 3,
      toggleTotem: () => this.setState((s) => ({ totem: !s.totem })),
      start: this.state.start,
      nonce: this.state.nonce,
      inPark: this.state.inPark,
      inParkBg: this.state.inPark ? '#1a1613' : '#d6d6d4',
      inParkKnob: this.state.inPark ? 21 : 3,
      toggleInPark: () => this.setState((s) => ({ inPark: !s.inPark })),
      jumps: FLOWS.map(([k, l], i) => ({
        n: String(i + 1).padStart(2, '0'),
        label: l,
        bg: this.state.start === k ? '#e6e0d8' : 'transparent',
        onClick: () => this.setState((s) => ({ start: k, nonce: s.nonce + 1 })),
      })),
      totemGallery: [
        ['home', 'Totem · the line'],
        ['rules', 'Totem · court rules'],
        ['join1', "Totem · who's playing"],
        ['join2', 'Totem · first name'],
        ['join3', 'Totem · text me'],
        ['done', "Totem · you're in line"],
        ['voice', 'Totem · voice mode'],
        ['help', 'Totem · supervisor called'],
        ['medic', 'Totem · call a medic'],
      ].map(([k, l], i) => ({ n: 'T' + (i + 1), label: l, start: k })),
      notifPhones: [
        ['n1', "Notification · you're next"],
        ['n2', 'Notification · 5 min to your turn'],
      ].map(([k, label], i) => ({ k, label, n: String(SCREENS.length + i + 1).padStart(2, '0') })),
      notifWatch: [
        ['w1', "Watch · you're next"],
        ['w2', 'Watch · 5 min to your turn'],
        ['w3', 'Watch · my spot in line'],
      ].map(([k, label], i) => ({ k, label, n: 'W' + (i + 1) })),
      gallery: SCREENS.map(([k, l], i) => ({ n: String(i + 1).padStart(2, '0'), label: l, start: k })),
      decisions: DECISIONS.map(([t, b], i) => {
        const open = !!this.state.dec[i];
        return {
          n: String(i + 1).padStart(2, '0'),
          t,
          b,
          open,
          icon: open ? '−' : '+',
          toggle: () => this.setState((s) => ({ dec: { ...s.dec, [i]: !s.dec[i] } })),
        };
      }),
      allDecLabel: DECISIONS.every((_, i) => this.state.dec[i]) ? 'Collapse all' : 'Expand all',
      toggleAllDec: () => {
        const all = DECISIONS.every((_, i) => this.state.dec[i]);
        this.setState({ dec: all ? {} : Object.fromEntries(DECISIONS.map((_, i) => [i, true])) });
      },
    };
  }
}

export default class PlayIbira extends PlayIbiraLogic {
  render() {
    return PlayIbiraView({ ...this.props, ...this.renderVals() });
  }
}
