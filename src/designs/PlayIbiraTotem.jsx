import React from 'react';
import PlayIbiraTotemView from './PlayIbiraTotemView';
import './PlayIbiraTotem.css';

const OR = 'oklch(0.68 0.21 44)',
  INK = '#1a1613';
const LOCS = {
  tennis: {
    name: 'Tennis courts',
    pic: 'tennis',
    sub: '4 hard courts · Singles or doubles · 40 min games',
    unit: 'Court',
    game: 40,
    max: 4,
    soloNote: 'Play singles, or get paired with the next solo player.',
    groupNote: 'A pair or a doubles team, up to 4.',
    courts: [
      ['Rafael & Juliana', 3],
      ['Bruno, Lia, Caio & Ana', 14],
      ['Marcos', 22],
      ['Tânia & Iara', 31],
    ],
    line: [
      ['Pedro', 2, ''],
      ['Kenji', 1, ''],
      ['Sofia', 4, ''],
    ],
    rules: [
      'One set to 6 games, or 40 minutes — whichever comes first.',
      'When you finish, the next people in line take the court.',
      'Pairs and doubles teams join the line together, as one spot.',
      'Non-marking tennis shoes only. No glass on the courts.',
    ],
  },
  basketball: {
    name: 'Basketball half-courts',
    pic: 'basketball',
    sub: '4 half-courts · 3 vs 3 · First to 11 or 10 min',
    unit: 'Half-court',
    game: 10,
    max: 3,
    soloNote: "You'll be matched into the next team of 3.",
    groupNote: 'Bring your 2 or 3 — the rest get filled in.',
    courts: [
      ['Diego’s team', 2],
      ['Tati’s team', 5],
      ['Lucas’s team', 7],
      ['Open run', 9],
    ],
    line: [
      ['Renan', 3, ''],
      ['Bia', 1, ''],
      ['Gui', 2, ''],
      ['Paula', 3, ''],
    ],
    rules: [
      'First to 11 points, or 10 minutes.',
      'Winners stay for up to 2 games, then rotate out.',
      'Solo players are matched into teams of 3, in order.',
      "Women's Open Court every Saturday, 8–11 AM.",
    ],
  },
  beachvolley: {
    name: 'Beach volleyball',
    pic: 'beach-volleyball',
    sub: '2 sand courts · Pairs, 2 vs 2 · Games to 18',
    unit: 'Sand court',
    game: 20,
    max: 2,
    soloNote: "You'll be paired with the next solo player.",
    groupNote: 'You and a partner, as one pair.',
    courts: [
      ['Marcos & Duda', 6],
      ['Lara & Téo', 15],
    ],
    line: [
      ['Nina', 2, ''],
      ['Vitor', 1, ''],
    ],
    rules: [
      'Games to 18 points. Winners stay for 2 games.',
      'Pairs join the line together. Solo? You get paired up.',
      'Rake the sand when you leave the court.',
    ],
  },
};
const LINE_RULES = [
  "Join only when you're at the courts — spots aren't held for people who leave.",
  "When you're called, you have 5 minutes to step on. Then the next group plays.",
  'Same line for the app and this screen — everyone is in one order.',
];
const fmtPhone = (d) => {
  if (!d) return '';
  let s = '(' + d.slice(0, 2);
  if (d.length > 2) s += ') ' + d.slice(2, 7);
  if (d.length > 7) s += '-' + d.slice(7, 11);
  return s;
};
const PH_MASK = '(11) 98765-4321';
const label = (e) => (e.size > 1 ? `${e.name} +${e.size - 1}` : e.name);
const ini = (n) =>
  n
    .replace(/[^A-Za-zÀ-ÿ ]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
const hm = () => {
  const d = new Date();
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
};
const KB = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

class PlayIbiraTotemLogic extends React.Component {
  state = this.init('tennis');
  init(k) {
    const L = LOCS[k];
    return {
      loc: k,
      courts: L.courts.map((c, i) => ({ n: i + 1, p: c[0], left: c[1] * 60 - ((i * 23) % 60) })),
      line: L.line.map((e, i) => ({ id: 's' + i, name: e[0], size: e[1], phone: e[2] })),
      view: 'home',
      step: 1,
      mode: null,
      size: 2,
      name: '',
      phone: '',
      banner: null,
      sms: [],
      ret: 0,
      last: null,
      voice: false,
      vSay: '',
      vState: 'Speaking',
      help: null,
      med: null,
      medHold: 0,
    };
  }
  componentDidMount() {
    this.t = setInterval(() => this.tick(), 1000);
    this.applyStart(this.props.start);
  }
  componentDidUpdate(pp) {
    if (pp.start !== this.props.start) this.applyStart(this.props.start);
  }
  applyStart(k) {
    if (!k || k === 'home') return;
    const s = this.state,
      L = LOCS[s.loc];
    const map = {
      rules: { view: 'rules' },
      join1: { view: 'join', step: 1, mode: 'group', size: 2 },
      join2: { view: 'join', step: 2, mode: 'solo', name: 'Ana' },
      join3: { view: 'join', step: 3, mode: 'solo', name: 'Ana', phone: '1198765' },
      done: {
        view: 'done',
        ret: 15,
        line: [...s.line, { id: 'g', name: 'Ana', size: 1, phone: '11987654321', mine: true }],
        last: { name: 'Ana', pos: s.line.length + 1, eta: this.est(s.line.length, s), phone: '11987654321' },
      },
      voice: { voice: true, vState: 'Listening', vSay: this.summary() },
      help: { help: 'sent-open' },
      medic: { med: 'ask', medHold: 62 },
    };
    this.setState(map[k] || {});
  }
  componentWillUnmount() {
    clearInterval(this.t);
    clearTimeout(this.bt);
    clearInterval(this.holdT);
    clearTimeout(this.vT);
    clearTimeout(this.vT2);
    this.hush();
  }
  hush() {
    try {
      window.speechSynthesis && window.speechSynthesis.cancel();
    } catch (e) {}
  }
  say(text, st) {
    this.setState({ vSay: text, vState: st || 'Speaking' });
    this.hush();
    try {
      if (window.speechSynthesis) {
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.95;
        u.onend = () => this.state.voice && this.setState({ vState: 'Listening' });
        window.speechSynthesis.speak(u);
      }
    } catch (e) {}
  }
  summary() {
    const s = this.state,
      L = LOCS[s.loc],
      n = s.line.length;
    const nx = s.line[0];
    return `${L.name}. ${n ? n + (n === 1 ? ' group' : ' groups') + ' waiting.' : 'No one is waiting.'} ${nx ? 'Up next: ' + label(nx).replace('+', 'plus ') + '.' : ''} If you join now, the wait is about ${Math.max(0, this.est(n, s))} minutes. Say join, who's next, rules, or help.`;
  }
  resetJoin() {
    return { view: 'home', step: 1, mode: null, size: 2, name: '', phone: '', ret: 0 };
  }
  tick() {
    const s = this.state;
    const courts = s.courts.map((c) => ({ ...c, left: Math.max(0, c.left - 1) }));
    let patch = { courts };
    if (s.view === 'done' && !this.props.start) {
      if (s.ret <= 1) patch = { ...patch, ...this.resetJoin() };
      else patch.ret = s.ret - 1;
    }
    this.setState(patch, () => {
      const i = this.state.courts.findIndex((c) => c.left === 0 && (c.p || this.state.line.length));
      if (i >= 0) this.rotate(i);
    });
  }
  rotate(i) {
    this.setState((s) => {
      const L = LOCS[s.loc],
        line = [...s.line],
        head = line.shift(),
        sms = [...s.sms];
      const courts = s.courts.map((c, j) =>
        j !== i ? c : head ? { ...c, p: label(head), left: L.game * 60 } : { ...c, p: '', left: 0 },
      );
      if (head && head.phone)
        sms.unshift({
          to: fmtPhone(head.phone),
          at: hm(),
          text: `Play Ibira: ${L.unit} ${i + 1} is yours, ${head.name}! Head over now — you have 5 min to step on.`,
        });
      if (line[0] && line[0].phone && !line[0].warned) {
        line[0] = { ...line[0], warned: true };
        sms.unshift({
          to: fmtPhone(line[0].phone),
          at: hm(),
          text: `Play Ibira: You're next in line at the ${L.name.toLowerCase()}, ${line[0].name}. Stay close — we'll text again when your court is free.`,
        });
      }
      return { courts, line, sms, banner: head ? { court: `${L.unit} ${i + 1}`, name: label(head) } : s.banner };
    });
    clearTimeout(this.bt);
    this.bt = setTimeout(() => this.setState({ banner: null }), 8000);
  }
  est(pos, s) {
    const L = LOCS[s.loc],
      ls = s.courts.map((c) => c.left / 60).sort((a, b) => a - b),
      n = ls.length;
    return Math.round(ls[pos % n] + Math.floor(pos / n) * L.game);
  }
  join(phone) {
    this.setState((s) => {
      const L = LOCS[s.loc],
        nm = s.name.trim();
      const entry = {
        id: 'u' + Date.now(),
        name: nm,
        size: s.mode === 'group' ? (L.max === 2 ? 2 : s.size) : 1,
        phone,
        mine: true,
      };
      const line = [...s.line.map((e) => ({ ...e, mine: false })), entry],
        pos = line.length - 1,
        sms = [...s.sms];
      if (pos === 0 && phone) {
        line[0] = { ...entry, warned: true };
        sms.unshift({
          to: fmtPhone(phone),
          at: hm(),
          text: `Play Ibira: You're next in line at the ${L.name.toLowerCase()}, ${nm}. Stay close — we'll text again when your court is free.`,
        });
      }
      return { line, sms, view: 'done', ret: 15, last: { name: nm, pos: pos + 1, eta: this.est(pos, s), phone } };
    });
  }
  voiceJoin() {
    this.say('Okay, joining as one player. Say your first name after the tone.', 'Speaking');
    clearTimeout(this.vT);
    clearTimeout(this.vT2);
    this.vT = setTimeout(() => this.setState({ vState: 'Listening', vSay: 'Listening for your name…' }), 3600);
    this.vT2 = setTimeout(() => {
      const s = this.state;
      const pos = s.line.length;
      this.setState((st) => ({
        line: [
          ...st.line.map((e) => ({ ...e, mine: false })),
          { id: 'v' + Date.now(), name: 'Ana', size: 1, phone: '', mine: true },
        ],
      }));
      this.say(
        `Heard: Ana. You're number ${pos + 1} in line, about ${Math.max(0, this.est(pos, s))} minutes. When you're next, this totem will call your name out loud.`,
      );
    }, 6200);
  }
  renderVals() {
    const s = this.state,
      L = LOCS[s.loc],
      n = s.line.length;
    const w = (m) => (m <= 0 ? 'Now' : `~${m} min`);
    let mi = -1;
    s.courts.forEach((c, i) => {
      if (c.p && (mi < 0 || c.left < s.courts[mi].left)) mi = i;
    });
    const courts = s.courts.map((c, i) => {
      const free = !c.p;
      return {
        n: `${L.unit} ${c.n}`,
        p: free ? 'Free now' : c.p,
        left: free ? 'Open' : `${Math.max(1, Math.ceil(c.left / 60))} min`,
        leftLbl: free ? '' : 'left',
        pct: free ? 0 : Math.round((100 * c.left) / (L.game * 60)),
        nextFree: i === mi && n > 0,
        bg: free ? OR : INK,
        lblFg: free ? '#fff' : '#b9b4b0',
      };
    });
    const line = s.line.map((e, i) => ({
      pos: i + 1,
      name: label(e),
      ini: ini(e.name),
      size: e.size > 1 ? `${e.size} players` : 'Solo',
      eta: w(this.est(i, s)),
      first: i === 0,
      mine: !!e.mine,
      bg: i === 0 ? '#fff' : 'transparent',
      sh: i === 0 ? 'inset 0 0 0 2px #1a1613' : 'inset 0 -1px 0 #e4e4e2',
    }));
    const can = s.step === 1 ? !!s.mode : s.name.trim().length >= 2;
    const go = (v) => () => this.setState({ ...this.resetJoin(), view: v });
    const typeCh = (ch) => () =>
      this.setState((st) => {
        if (st.name.length >= 14) return null;
        const up = !st.name || st.name.endsWith(' ');
        return { name: st.name + (up ? ch : ch.toLowerCase()) };
      });
    const addD = (d) => () => this.setState((st) => (st.phone.length >= 11 ? null : { phone: st.phone + d }));
    const pad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((k) => ({
      k,
      vis: k ? 'visible' : 'hidden',
      bg: k === '⌫' ? '#e4e4e2' : '#f7f7f6',
      on: k === '⌫' ? () => this.setState((st) => ({ phone: st.phone.slice(0, -1) })) : k ? addD(k) : () => {},
    }));
    const pf = fmtPhone(s.phone),
      last = s.last || { name: '', pos: 0, eta: 0, phone: '' };
    return {
      clock: hm(),
      locName: L.name,
      locSub: L.sub,
      locPic: `assets/pictograms/${L.pic}.svg`,
      hasBanner: !!s.banner,
      banner: s.banner || { court: '', name: '' },
      courts,
      line,
      lineEmpty: n === 0,
      lineCount: n === 0 ? 'Empty' : n === 1 ? '1 waiting' : `${n} waiting`,
      yourPos: '#' + (n + 1),
      waitNow: w(this.est(n, s)),
      rules: L.rules.map((t, i) => ({ n: i + 1, t })),
      lineRules: LINE_RULES,
      isRules: s.view === 'rules',
      isJoin: s.view === 'join',
      isDone: s.view === 'done',
      openRules: go('rules'),
      openJoin: go('join'),
      goHome: () => this.setState(this.resetJoin()),
      step: s.step,
      isStep1: s.step === 1,
      isStep2: s.step === 2,
      isStep3: s.step === 3,
      dots: [1, 2, 3].map((i) => ({ bg: i <= s.step ? INK : '#e4e4e2' })),
      soloNote: L.soloNote,
      groupNote: L.groupNote,
      soloSh: s.mode === 'solo' ? 'inset 0 0 0 3px #1a1613' : 'inset 0 0 0 1.5px #ddd8d2',
      groupSh: s.mode === 'group' ? 'inset 0 0 0 3px #1a1613' : 'inset 0 0 0 1.5px #ddd8d2',
      pickSolo: () => this.setState({ mode: 'solo' }),
      pickGroup: () => this.setState({ mode: 'group' }),
      showStepper: s.mode === 'group' && L.max > 2,
      size: s.size,
      dec: () => this.setState((st) => ({ size: Math.max(2, st.size - 1) })),
      inc: () => this.setState((st) => ({ size: Math.min(L.max, st.size + 1) })),
      decOp: s.size <= 2 ? 0.3 : 1,
      incOp: s.size >= L.max ? 0.3 : 1,
      nextBg: can ? OR : '#e4e4e2',
      nextFg: can ? '#fff' : '#9a9590',
      next: () => {
        if (can) this.setState({ step: s.step + 1 });
      },
      back: () => this.setState({ step: s.step - 1 }),
      name: s.name,
      namePh: s.name ? '' : 'Name',
      groupSuffix: s.mode === 'group' ? `+${(L.max === 2 ? 2 : s.size) - 1} on the line` : '',
      kbd: KB.map((r) => ({ keys: r.split('').map((k) => ({ k, on: typeCh(k) })) })),
      kSpace: () =>
        this.setState((st) =>
          !st.name || st.name.endsWith(' ') || st.name.length >= 14 ? null : { name: st.name + ' ' },
        ),
      kDel: () => this.setState((st) => ({ name: st.name.slice(0, -1) })),
      phoneFmt: pf,
      phonePh: PH_MASK.slice(pf.length),
      // Was `pad`, which collided with the `pad` padding value below and left the keypad empty.
      keypad: pad,
      textBg: s.phone.length === 11 ? OR : '#e4e4e2',
      textFg: s.phone.length === 11 ? '#fff' : '#9a9590',
      textMe: () => {
        if (s.phone.length === 11) this.join(s.phone);
      },
      skipPhone: () => this.join(''),
      doneName: last.name,
      donePos: '#' + last.pos,
      doneEta: last.eta <= 0 ? 'Now' : `${last.eta}′`,
      doneEtaLbl: last.eta <= 0 ? 'Court is free' : 'Minutes, about',
      doneMsg: last.phone
        ? `We'll text ${fmtPhone(last.phone)} when you're next, and again when your court is free.`
        : 'Keep an eye on this screen — your name shows at the top of the line when you’re up next.',
      ret: s.ret,
      locNameLc: L.name.toLowerCase(),
      openVoice: () => {
        this.setState({ voice: true });
        setTimeout(() => this.say(this.summary()), 50);
      },
      closeVoice: () => {
        clearTimeout(this.vT);
        clearTimeout(this.vT2);
        this.hush();
        this.setState({ voice: false });
      },
      voiceOn: s.voice,
      vSay: s.vSay,
      vState: s.vState,
      vStateFg: s.vState === 'Listening' ? OR : '#b9b4b0',
      vCmds: [
        { label: 'Join', on: () => this.voiceJoin() },
        {
          label: "Who's next?",
          on: () =>
            this.say(
              s.line.length
                ? 'Up next: ' +
                    s.line
                      .slice(0, 3)
                      .map(
                        (e, i) =>
                          label(e).replace('+', 'plus ') + ', about ' + Math.max(0, this.est(i, s)) + ' minutes',
                      )
                      .join('. Then ') +
                    '.'
                : 'No one is waiting. A court frees up in about ' + Math.max(0, this.est(0, s)) + ' minutes.',
            ),
        },
        { label: 'Rules', on: () => this.say('Court rules. ' + L.rules.join(' ')) },
        {
          label: 'Help',
          on: () => {
            this.setState({ help: 'sent' });
            this.say('A park supervisor is on the way. Please wait by this totem.');
          },
        },
      ],
      openHelp: () => this.setState({ help: s.help === 'sent' ? 'sent-open' : 'ask' }),
      closeHelp: () => this.setState({ help: s.help && s.help.startsWith('sent') ? 'sent' : null }),
      sendHelp: () => this.setState({ help: 'sent-open' }),
      cancelHelp: () => this.setState({ help: null }),
      helpOpen: s.help === 'ask' || s.help === 'sent-open',
      helpAsk: s.help === 'ask',
      helpSent: !!s.help && s.help.startsWith('sent'),
      helpEta: 5,
      helpBg: s.help && s.help.startsWith('sent') ? OR : '#fff',
      helpFg: s.help && s.help.startsWith('sent') ? '#fff' : INK,
      helpSh: s.help && s.help.startsWith('sent') ? 'none' : 'inset 0 0 0 2px #1a1613',
      openMed: () => this.setState({ med: s.med && s.med.startsWith('sent') ? 'sent-open' : 'ask', medHold: 0 }),
      closeMed: () => {
        clearInterval(this.holdT);
        this.setState({ med: s.med && s.med.startsWith('sent') ? 'sent' : null, medHold: 0 });
      },
      cancelMed: () => this.setState({ med: null }),
      medOpen: s.med === 'ask' || s.med === 'sent-open',
      medAsk: s.med === 'ask',
      medSent: !!s.med && s.med.startsWith('sent'),
      medEta: 6,
      medBg: s.med && s.med.startsWith('sent') ? 'oklch(0.56 0.2 27)' : '#fff',
      medFg: s.med && s.med.startsWith('sent') ? '#fff' : 'oklch(0.56 0.2 27)',
      medSh: s.med && s.med.startsWith('sent') ? 'none' : 'inset 0 0 0 2px oklch(0.56 0.2 27)',
      medHold: s.medHold,
      holdFg: s.medHold > 55 ? '#fff' : 'oklch(0.56 0.2 27)',
      holdLabel: s.medHold > 0 ? 'Keep holding…' : 'Hold to call a medic',
      holdStart: () => {
        clearInterval(this.holdT);
        this.holdT = setInterval(() => {
          const h = this.state.medHold + 4;
          if (h >= 100) {
            clearInterval(this.holdT);
            this.setState({ medHold: 0, med: 'sent-open' });
          } else this.setState({ medHold: h });
        }, 50);
      },
      holdEnd: () => {
        clearInterval(this.holdT);
        if (this.state.med === 'ask') this.setState({ medHold: 0 });
      },
      braille: ['#fff', '#fff', '#6f6a66', '#fff', '#6f6a66', '#fff'],
      showDemo: this.props.showDemo ?? true,
      showTitle: !this.props.embedded,
      pad: this.props.embedded ? 0 : 56,
      showSide: !this.props.bare,
      devShadow: this.props.bare ? 'none' : '0 40px 80px -40px rgba(26,22,19,.55)',
      showPlate: !this.props.bare,
      locs: Object.keys(LOCS).map((k, i) => ({
        n: String(i + 1).padStart(2, '0'),
        name: LOCS[k].name,
        bg: k === s.loc ? '#e6e0d8' : 'transparent',
        on: () => this.setState(this.init(k)),
      })),
      finishGame: () => {
        if (mi >= 0) this.rotate(mi);
      },
      reset: () => this.setState(this.init(s.loc)),
      sms: s.sms.slice(0, 5),
      noSms: s.sms.length === 0,
    };
  }
}

export default class PlayIbiraTotem extends PlayIbiraTotemLogic {
  static defaultProps = { showDemo: true };

  render() {
    return PlayIbiraTotemView({ ...this.props, ...this.renderVals() });
  }
}
