import React from 'react';
import PlayIbiraAppView from './PlayIbiraAppView';
import './PlayIbiraApp.css';

const PIC = (id) => 'assets/pictograms/' + id + '.svg';
const PICW = (id) => 'assets/pictograms/white/' + id + '.svg';
const PICO = (id) => 'assets/pictograms/orange/' + id + '.svg';
const OR = 'oklch(0.68 0.21 44)';
const INK = '#1a1613';
const LOOP = (() => {
  const a =
    '313.3 465.3L314 444.7L324.4 406L331 391.1L352.6 360.4L357 343.6L355.3 321.4L349.9 297.6L339.3 278.4L323.7 263.7L312.2 256.4L276.9 245.5L252.9 246L223.3 251.5L208.5 259.2L178.6 281.2L160.1 326.9L147.5 382.9L132.4 512L126.4 544.8L124.9 570.4L128.3 595L150.2 653L154.9 671.9L155 683.8L149.6 713.3L149.3 726.7L153.1 754.2L158.4 767.4L170.3 786.3L197.3 820.5L244.7 845.7L264.3 859.3L289.5 890.6L321.7 938.4L331.7 943.7L368.1 945.1L381.2 942.1L401.9 932L439.8 889.2L457.6 871.7L478.7 852.9L491.6 844L552.1 817.5L611.7 783.5L626.4 770';
  const b =
    '631.7 764.5L638.4 748.6L642.6 717.5L647.6 707L644.4 698.1L609.8 646.3L561.9 590L551.4 580.3L506.8 549.9L475.6 531.9L462.9 527L374.3 515.5L346.6 506.8L333.4 497.7L322.6 486.1L313.3 465.3';
  const p = (s) => s.split('L').map((q) => q.trim().split(' ').map(Number));
  return p(a).concat(p(b).slice(0, -1));
})();

const SP = {
  tennis: {
    name: 'Tennis',
    pic: 'tennis',
    place: 'tennis',
    queue: true,
    unit: 'Court 3',
    q: 4,
    wait: 25,
    qText: '4 in queue',
    live: true,
    members: '214 members',
    how: [
      'Singles or doubles on 4 hard courts. Bring a racket — regulars often have spare balls.',
      'Busiest on weekend mornings and after 4 PM. Weekday mornings are calm and good for first-timers.',
    ],
    rules: [
      'One set to 6 games, or 40 minutes — whichever comes first.',
      'When you finish, the next people in line take the court.',
      'Doubles pairs join the line together, as one spot.',
      'Hold a spot only for yourself or your group.',
    ],
    welcomers: ['rafael', 'juliana'],
  },
  soccer: {
    name: 'Soccer',
    pic: 'football',
    place: 'field',
    queue: true,
    unit: 'Main field',
    q: 23,
    wait: 45,
    qText: '23 waiting',
    live: true,
    members: '932 members',
    team: 7,
    how: [
      'Pickup games on the main field. No fixed teams — everyone gets a game.',
      'Come solo or bring a full team of 7.',
    ],
    rules: [
      '7 vs 7. Winner stays on, or teams swap after 15 min. Keepers can stay.',
      'Solo players are grouped into the next team of 7, in order.',
      'A team that arrives together joins the back of the line together.',
    ],
    welcomers: ['diego'],
  },
  basketball: {
    name: 'Basketball',
    pic: 'basketball',
    place: 'basket',
    queue: true,
    unit: 'Half-courts',
    q: 6,
    wait: 30,
    qText: '6 teams waiting',
    live: true,
    members: '640 members',
    team: 3,
    how: [
      '3 vs 3 on half-courts — four games run at once across the courts.',
      "Women's Open Court every Saturday morning.",
    ],
    rules: [
      'First to 11 points, or 10 minutes.',
      'Winners stay for up to 2 games, then rotate out.',
      'Solo players are matched into teams of 3.',
    ],
    welcomers: ['tati'],
  },
  volleyball: {
    name: 'Volleyball',
    pic: 'volleyball',
    place: 'beach',
    queue: true,
    unit: 'Court 1',
    q: 2,
    wait: 15,
    qText: '2 teams waiting',
    members: '188 members',
    team: 4,
    how: ['4 vs 4 on the hard court next to the sand courts.'],
    rules: ['Games to 15 points. Winners stay for 2 games.', 'Solo players join the next incomplete team.'],
    welcomers: ['marcos'],
  },
  beachvolley: {
    name: 'Beach volleyball',
    pic: 'beach-volleyball',
    place: 'beach',
    queue: true,
    unit: 'Sand court 1',
    q: 3,
    wait: 20,
    qText: '3 pairs waiting',
    members: '305 members',
    team: 2,
    how: ['Pairs, 2 vs 2, on the sand courts.'],
    rules: ['Games to 18 points. Winners stay for 2 games.', 'Pairs join the line together. Solo? You get paired up.'],
    welcomers: ['marcos'],
  },
  beachtennis: {
    name: 'Beach tennis',
    pic: 'beach-tennis',
    place: 'beach',
    queue: true,
    unit: 'Sand court 2',
    q: 0,
    wait: 0,
    qText: 'No queue',
    members: '270 members',
    team: 2,
    how: ['Doubles on the sand with paddles. Easy to pick up in one afternoon.'],
    rules: ['Games to 6, then rotate.', 'Pairs join together; solo players are paired up.'],
    welcomers: ['marcos'],
  },
  roller: {
    name: 'Roller skating',
    pic: 'roller-skating',
    place: 'marquise',
    live: true,
    liveText: '2 welcomers here',
    members: '1,280 members',
    how: ['Skating under the Marquise, the long covered walkway: smooth floor, shade, and music on Sundays.'],
    join: [
      'Just show up — no sign-up, no fee.',
      'No skates? Ask a welcomer. The crew lends skates to beginners.',
      "The flat stretch near the Bienal end is the beginners' loop.",
      'Weekly meetup on Sundays from 4 PM.',
    ],
    welcomers: ['aline', 'guilherme'],
  },
  skate: {
    name: 'Skateboarding',
    pic: 'skateboarding',
    place: 'skatepark',
    live: true,
    members: '860 members',
    how: ['Street and bowl skating at the skate park, plus flat ground under the Marquise.'],
    join: [
      'Open to all levels. Call your line before you drop in.',
      'The flat area by the Marquise is the easiest place to start.',
    ],
    welcomers: ['rodrigo'],
  },
  running: {
    name: 'Running',
    pic: 'running',
    place: 'track',
    members: '1,940 members',
    how: ['A soft track loops around the lakes — about 5 km.'],
    join: ['Run any time, no sign-up.', 'Groups leave from Gate 3 on weekday evenings. Every pace welcome.'],
    welcomers: ['paula'],
  },
  cycling: {
    name: 'Cycling',
    pic: 'cycling',
    place: 'bike',
    members: '720 members',
    how: ['A bike path circles the park.'],
    join: ['Bring a bike or rent one near Gate 3.', 'Keep right; runners have the track.'],
    welcomers: ['paula'],
  },
  gym: {
    name: 'Outdoor gym',
    pic: 'outdoor-gym',
    place: 'gym2',
    members: '410 members',
    how: ['Three free outdoor gyms with bars and machines.'],
    join: ['No queue — share the bars and swap sets.'],
    welcomers: ['diego'],
  },
  yoga: {
    name: 'Yoga',
    pic: 'yoga',
    place: 'paz',
    members: '530 members',
    how: ['Open sessions on the grass at Praça da Paz.'],
    join: ['Free sessions on Saturday mornings. Bring a mat or a towel.'],
    welcomers: ['paula'],
  },
  slackline: {
    name: 'Slackline',
    pic: 'slackline',
    place: 'paz',
    members: '150 members',
    how: ['Lines go up between the trees at Praça da Paz most weekends.'],
    join: ['Ask before you try — people love to teach.'],
    welcomers: ['rodrigo'],
  },
  capoeira: {
    name: 'Capoeira',
    pic: 'capoeira',
    place: 'paz',
    members: '220 members',
    how: ['Rodas form at Praça da Paz on Sunday afternoons.'],
    join: ['Watch first, then join the circle when you are invited in.'],
    welcomers: ['rodrigo'],
  },
};
const PL = {
  field: { name: 'Soccer field', x: 295, y: 995, sports: ['soccer'], note: 'South side, near Gate 6' },
  basket: { name: 'Basketball courts', x: 420, y: 958, sports: ['basketball'], note: '4 courts, south side' },
  tennis: { name: 'Tennis courts', x: 500, y: 868, sports: ['tennis'], note: '4 courts, near the sports area' },
  beach: {
    name: 'Volleyball & beach courts',
    x: 588,
    y: 812,
    sports: ['beachvolley', 'beachtennis', 'volleyball'],
    note: '1 hard court, 3 sand courts',
  },
  marquise: {
    name: 'Marquise',
    x: 520,
    y: 420,
    sports: ['roller', 'skate'],
    sub: 'Roller skating · Skateboarding · BMX',
    note: 'Covered walkway, center of the park',
  },
  skatepark: { name: 'Skate park', x: 615, y: 482, sports: ['skate'], note: 'Next to the Marquise' },
  track: { name: 'Running track', x: 128, y: 560, sports: ['running'], note: 'Loop around the lakes' },
  paz: {
    name: 'Praça da Paz',
    x: 283,
    y: 690,
    sports: ['yoga', 'slackline', 'capoeira'],
    sub: 'Yoga · Slackline · Capoeira',
    note: 'Open lawn, west side',
  },
  gym1: { name: 'Outdoor gym', x: 255, y: 850, sports: ['gym'], note: 'Free, open 5 AM – midnight' },
  gym2: { name: 'Outdoor gym', x: 330, y: 470, sports: ['gym'], note: 'Free, open 5 AM – midnight' },
  gym3: { name: 'Outdoor gym', x: 819, y: 782, sports: ['gym'], note: 'Free, open 5 AM – midnight' },
  bike: { name: 'Bike path', x: 212, y: 300, sports: ['cycling'], nopin: true, note: 'Around the park' },
};
const UT = [
  { id: 'wc1', kind: 'wc', x: 395, y: 605 },
  { id: 'wc2', kind: 'wc', x: 612, y: 905 },
  { id: 'wc3', kind: 'wc', x: 248, y: 420 },
  { id: 'w1', kind: 'water', x: 468, y: 575 },
  { id: 'w2', kind: 'water', x: 535, y: 912 },
  { id: 'w3', kind: 'water', x: 182, y: 700 },
  { id: 'aid', kind: 'aid', x: 440, y: 872 },
  { id: 'lock', kind: 'lock', x: 562, y: 452 },
];
const UK = {
  wc: { glyph: 'WC', title: 'Restrooms', sub: 'Open 5 AM – 10 PM', lines: [{ k: 'Accessible', v: 'Yes' }] },
  water: {
    glyph: '●',
    title: 'Drinking water',
    sub: 'Fountain',
    lines: [{ k: 'Hours', v: 'Switched off after 7 PM' }],
  },
  aid: {
    glyph: '+',
    title: 'First aid',
    sub: 'Staffed post',
    lines: [
      { k: 'Hours', v: 'Daily 6 AM – 10 PM' },
      { k: 'Emergency', v: 'Call 192' },
    ],
  },
  lock: {
    glyph: '▢',
    title: 'Lockers',
    sub: 'Free · bring your own padlock',
    lines: [{ k: 'Hours', v: '6 AM – 10 PM' }],
  },
};
const PEOPLE = {
  aline: {
    name: 'Aline Rocha',
    ini: 'AR',
    sport: 'roller',
    level: 'Long-time',
    visits: 48,
    note: 'Lends skates to beginners. Ask me anything about the Marquise.',
  },
  guilherme: {
    name: 'Guilherme Santos',
    ini: 'GS',
    sport: 'roller',
    level: 'Getting regular',
    visits: 31,
    note: "Runs the Sunday beginners' loop.",
  },
  rafael: {
    name: 'Rafael Souza',
    ini: 'RS',
    sport: 'tennis',
    level: 'Long-time',
    visits: 112,
    note: 'Weekday mornings on Court 4. Happy to rally.',
  },
  juliana: {
    name: 'Juliana Prado',
    ini: 'JP',
    sport: 'tennis',
    level: 'Getting regular',
    visits: 26,
    note: 'Started last year — I remember how it feels.',
  },
  diego: {
    name: 'Diego Almeida',
    ini: 'DA',
    sport: 'soccer',
    level: 'Long-time',
    visits: 203,
    note: 'Ask me how the line works.',
  },
  tati: {
    name: 'Tatiane Lima',
    ini: 'TL',
    sport: 'basketball',
    level: 'Long-time',
    visits: 87,
    note: "Hosts Women's Open Court on Saturdays.",
  },
  marcos: {
    name: 'Marcos Vieira',
    ini: 'MV',
    sport: 'beachvolley',
    level: 'Long-time',
    visits: 64,
    note: 'I pair up solo players on the sand.',
  },
  rodrigo: {
    name: 'Rodrigo Nunes',
    ini: 'RN',
    sport: 'skate',
    level: 'Long-time',
    visits: 140,
    note: 'Teaching drop-ins since 2015.',
  },
  paula: {
    name: 'Paula Martins',
    ini: 'PM',
    sport: 'running',
    level: 'Getting regular',
    visits: 38,
    note: 'Leads the Thursday 7 PM group, all paces.',
  },
};
const EV = {
  'e-rally': {
    title: "Beginners' Rally",
    sport: 'tennis',
    place: 'tennis',
    mon: 'OCT',
    day: '17',
    when: 'Sat, Oct 17 · 8–10 AM',
    kind: 'open',
    tags: ['Beginners'],
    org: 'Tennis welcomers',
    desc: 'Easy rallies with regulars who love teaching. Spare rackets to borrow.',
  },
  'e-wbb': {
    title: "Women's Open Court",
    sport: 'basketball',
    place: 'basket',
    mon: 'EVERY',
    day: 'Sat',
    when: 'Saturdays · 9 AM – 12 PM',
    kind: 'open',
    tags: ['Women only'],
    org: 'Hosted by Tatiane Lima',
    desc: 'Two half-courts kept for women and girls every Saturday morning. Every level, every age.',
  },
  'e-wbv': {
    title: "Women's Beach Volleyball Day",
    sport: 'beachvolley',
    place: 'beach',
    mon: 'OCT',
    day: '25',
    when: 'Sun, Oct 25 · 9 AM – 1 PM',
    kind: 'enroll',
    tags: ['Women only', 'All levels'],
    spots: 20,
    total: 32,
    opts: ['Solo', 'With a partner'],
    org: 'Beach volleyball community',
    desc: "A morning of friendly games. Come solo and we'll pair you up.",
  },
  'e-halloween': {
    title: 'Halloween Skate Night',
    sport: 'roller',
    place: 'marquise',
    mon: 'OCT',
    day: '31',
    when: 'Sat, Oct 31 · 7 PM',
    kind: 'open',
    tags: ['Everyone'],
    org: 'Ibira Roller Crew & Roda Solta Skate Shop',
    desc: "Costumes optional. Music, a slow beginners' lap at 7:30, and spare skates at the crew tent.",
  },
  'e-u12': {
    title: 'Under-12 Soccer Cup',
    sport: 'soccer',
    place: 'field',
    mon: 'NOV',
    day: '7',
    when: 'Sat, Nov 7 · 9 AM',
    kind: 'enroll',
    tags: ['Under 12'],
    spots: 5,
    total: 8,
    unitWord: 'teams',
    opts: ['Enroll a team'],
    org: 'Soccer community',
    desc: 'Teams of 7, ages 8–12. Every team plays at least 3 games.',
  },
  'e-open': {
    title: 'Free Tennis Open',
    sport: 'tennis',
    place: 'tennis',
    mon: 'NOV',
    day: '17',
    when: 'Tue, Nov 17 · 8 AM – 6 PM',
    kind: 'enroll',
    tags: ['All levels'],
    spots: 12,
    total: 16,
    opts: ['Singles', 'Doubles'],
    org: 'Tennis community',
    desc: 'A free tournament grouped by level, so first-timers play first-timers. A good way to meet the regulars.',
  },
};
const EV_ORDER = ['e-rally', 'e-wbb', 'e-wbv', 'e-halloween', 'e-u12', 'e-open'];
const LEVELS = ['Just started', 'Getting regular', 'Long-time'];
const ONB_SPORTS = [
  'tennis',
  'soccer',
  'basketball',
  'volleyball',
  'beachtennis',
  'beachvolley',
  'roller',
  'skate',
  'running',
  'cycling',
  'gym',
  'yoga',
];
const PLAN_SPORTS = ['tennis', 'beachtennis', 'soccer', 'basketball', 'beachvolley', 'roller'];
const DAYS = ['Today', 'Tomorrow', 'Sat 17', 'Sun 18'];
const TIMES = ['8 AM', '10 AM', '4 PM', '6 PM'];
const SHEET = { low: 132, mid: 360, full: 705 }; // for the 844px-tall design screen; see sheets()
const YOU_IN = [470, 548],
  YOU_OUT = [812, 1012];
const DEFV = { s: 0.5, tx: 195 - 515 * 0.5, ty: 236 - 760 * 0.5 };
const COMS = ['roller', 'tennis', 'soccer', 'basketball', 'skate', 'beachvolley'];

const OLD = {
  roller: {
    who: [
      ['Aline Rocha', 'AR'],
      ['Guilherme Santos', 'GS'],
      ['Bianca Ferreira', 'BF'],
      ['Caio Ramos', 'CR'],
      ['Marina Lopes', 'ML'],
    ],
    t: [
      ['Tip', 'Wrist guards save the day. The crew tent has a few spare pairs on Sundays.'],
      ['Question', 'Anyone know if the Marquise floor was resurfaced near the Bienal end?'],
      ['Update', 'Sunday playlist is up — requests welcome in the thread.'],
      ['Thanks', 'Thanks Aline for teaching me to stop without grabbing a pillar!'],
      ['Looking for skaters', 'Weekday 7 AM loop, anyone? Quiet and cool before the heat.'],
      ['Lost & found', 'Found a blue helmet near the beginners loop. Left it at the crew tent.'],
      ['Tip', 'Bring water — the kiosk by Gate 3 closes at 6 PM.'],
      ['Photos', "Great turnout at last week's meetup. 40+ skaters, 12 first-timers."],
    ],
  },
  tennis: {
    who: [
      ['Rafael Souza', 'RS'],
      ['Juliana Prado', 'JP'],
      ['Fernando Ito', 'FI'],
      ['Camila Duarte', 'CD'],
      ['Otávio Reis', 'OR'],
    ],
    t: [
      ['Looking for players', 'Anyone for doubles Thursday 7 AM? Intermediate-ish.'],
      ['Tip', 'Court 2 net is a bit low — told the park office.'],
      ['Question', 'Is it OK to warm up on the wall while waiting in line?'],
      ['Update', 'Lights on Courts 1–2 are back, evening games until 10 PM.'],
      ['Thanks', 'Rafael rallied with me for 20 min on my first day. Made my week.'],
      ['Tip', 'Spare balls in the box by Court 4 — take one, leave one.'],
      ['Looking for players', 'Beginner singles, weekends after 4 PM. Message me!'],
      ['Question', 'Does the 40 min limit apply to coaching sessions too?'],
    ],
  },
  soccer: {
    who: [
      ['Diego Almeida', 'DA'],
      ['Renan Nogueira', 'RN'],
      ['Lucas Pereira', 'LP'],
      ['Thiago Melo', 'TM'],
      ['Ana Faria', 'AF'],
    ],
    t: [
      ['Tip', 'Bring a light and a dark shirt — makes picking teams much faster.'],
      ['Update', 'Main field closed Monday morning for grass maintenance.'],
      ['Looking for players', 'Mixed game Wednesday 7 PM, need 3 more.'],
      ['Thanks', 'Good vibes in the 6 PM game yesterday. Nobody left out.'],
      ['Question', 'Does anyone keep a spare pump? Ball went flat mid-game.'],
      ['Tip', 'Line moves fastest before 9 AM on Sundays.'],
      ['Looking for players', 'Keeper wanted for Saturday morning team.'],
      ['Update', 'Water fountain by Gate 6 is fixed.'],
    ],
  },
  basketball: {
    who: [
      ['Tatiane Lima', 'TL'],
      ['Gui Martins', 'GM'],
      ['Bruna Castro', 'BC'],
      ['Paulo Henrique', 'PH'],
      ['Iara Santos', 'IS'],
    ],
    t: [
      ['Update', 'New nets on half-courts 3 and 4.'],
      ['Looking for players', 'Need a third for 3v3, Friday 6 PM.'],
      ['Tip', 'Half-court 1 gets shade after 3 PM.'],
      ['Thanks', "Thanks to everyone at Women's Open Court — 22 players!"],
      ['Question', 'Anyone running a beginner clinic? Happy to help coach.'],
      ['Tip', 'Call your own fouls, keep it moving. Winners stay 2 games max.'],
      ['Looking for players', 'Weekday lunch run, 12–1 PM.'],
      ['Photos', 'Saturday tournament recap posted in the album.'],
    ],
  },
  skate: {
    who: [
      ['Rodrigo Teixeira', 'RT'],
      ['Lia Okada', 'LO'],
      ['Vini Costa', 'VC'],
      ['Duda Alves', 'DU'],
    ],
    t: [
      ['Tip', 'Wax on the ledge by the bowl is fresh — careful.'],
      ['Question', 'Any good spot to learn to drop in without a crowd?'],
      ['Update', 'Girls skate session Sunday 10 AM, all levels.'],
      ['Thanks', 'Someone fixed my bearings for free yesterday. Legend.'],
      ['Looking for skaters', 'Filming a line this weekend, come hang.'],
      ['Tip', 'Mornings are calm, afternoons get packed with BMX.'],
    ],
  },
  beachvolley: {
    who: [
      ['Marcos Vieira', 'MV'],
      ['Paula Mendes', 'PM'],
      ['Nina Rocha', 'NR'],
      ['Vitor Braga', 'VB'],
    ],
    t: [
      ['Looking for players', 'Partner wanted for Sunday morning, beginner level.'],
      ['Tip', 'Sand is coolest before 10 AM — barefoot friendly.'],
      ['Update', 'Sand court 2 was raked and leveled this week.'],
      ['Question', 'Is there a ball we can borrow at the courts?'],
      ['Thanks', 'Marcos paired me up on my first day — still playing with the same partner!'],
      ['Tip', 'Bring sunscreen, there is zero shade on court 1.'],
    ],
  },
};
const ago = (h) => (h < 48 ? 'Yesterday' : h < 24 * 7 ? Math.floor(h / 24) + 'd' : Math.floor(h / 168) + 'w');
const olderPosts = (cid, n) => {
  const P = OLD[cid];
  if (!P) return [];
  return Array.from({ length: n }, (_, g) => {
    const w = P.who[(g * 3) % P.who.length],
      t = P.t[g % P.t.length];
    return { who: w[0], ini: w[1], meta: t[0] + ' · ' + ago(30 + g * 11), text: t[1] };
  });
};
const FACES = {
  CM: '1544005313-94ddf0286df2',
  AR: '1494790108377-be9c29b29330',
  GS: '1506794778202-cad84cf45f1d',
  RS: '1500648767791-00dcc994a43e',
  JP: '1534528741775-53994a69daeb',
  DA: '1507003211169-0a1dd7228f2d',
  TL: '1531123897727-8f129e1688ce',
  MV: '1472099645785-5658abf4ff4e',
  RN: '1519085360753-af0119f7cbe7',
  PM: '1438761681033-6461ffad8d80',
  BF: '1517841905240-472988babdf9',
  LP: '1492562080023-ab3db95bfbce',
  BC: '1529626455594-4ff0802cfb7e',
  IR: '1578057183197-423269e14014',
};
const face = (ini) =>
  FACES[ini]
    ? 'https://images.unsplash.com/photo-' + FACES[ini] + '?w=160&h=160&fit=crop&crop=faces&auto=format&q=80'
    : '';
const seg = (opts, cur, set) =>
  opts.map((o) => ({
    label: o,
    onClick: () => set(o),
    bg: o === cur ? '#fff' : 'transparent',
    fg: o === cur ? INK : '#6f6a66',
    sh: o === cur ? '0 1px 3px rgba(26,22,19,.12)' : 'none',
  }));
const chip = (on) => ({ bg: on ? INK : '#fff', fg: on ? '#fff' : INK, sh: on ? 'none' : 'inset 0 0 0 1px #ddd8d2' });
const sw = (on) => ({ bg: on ? INK : '#ddd8d2', knob: on ? 21 : 3 });

class PlayIbiraAppLogic extends React.Component {
  state = this.base();

  base() {
    return {
      onb: null,
      tab: 'explore',
      stack: [],
      sheet: 'mid',
      dragH: null,
      sheetTab: 'today',
      sel: null,
      popOn: false,
      route: null,
      view: this.defView(),
      anim: true,
      inPark: false,
      queue: null,
      turn: null,
      notif: false,
      join: null,
      plan: { sport: 'tennis', day: 'Sat 17', time: '10 AM', have: 1, need: 1, first: true, notify: true },
      sayHi: false,
      myPlans: [],
      enrolled: {},
      cal: {},
      planCal: false,
      evOpt: {},
      visitor: false,
      gateMsg: '',
      checkSheet: false,
      checkSport: null,
      community: 'roller',
      comN: {},
      comLoading: false,
      joined: { tennis: true },
      dm: null,
      dmText: '',
      toast: null,
      picked: { tennis: 'Just started', running: 'Getting regular' },
      badge: false,
      ageShown: true,
      visits: { tennis: 3, running: 4 },
      streak: 3,
      stamps: [
        ['tennis', 'Oct 10'],
        ['running', 'Oct 4'],
        ['tennis', 'Oct 3'],
        ['running', 'Sep 27'],
        ['tennis', 'Sep 26'],
        ['running', 'Sep 20'],
        ['running', 'Sep 19'],
      ],
      name: '',
      photo: null,
      leaving: false,
      checkedToday: false,
      newStamp: false,
      evFilter: 'All',
      welcomed: {},
      joinedPlans: {},
      tick: 0,
    };
  }

  componentDidMount() {
    this.reset(this.props.start);
    this.timer = setInterval(() => this.onTick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.popT);
    clearTimeout(this.toastT);
    clearTimeout(this.notifT);
    clearTimeout(this.hiT);
    clearTimeout(this.leaveT);
  }
  componentDidUpdate(pp) {
    if (pp.start !== this.props.start || pp.nonce !== this.props.nonce) this.reset(this.props.start);
    else if (pp.inPark !== this.props.inPark && this.props.inPark != null)
      this.setState({ inPark: !!this.props.inPark });
  }

  carolinaPlan() {
    return { sport: 'tennis', day: 'Sat 17', time: '10 AM', needText: 'Needs 1 player · singles', first: true };
  }

  reset(start) {
    const s = this.base();
    const qd = { sport: 'tennis', ahead: 3, wait: 18, size: 1 };
    switch (start || 'login') {
      case 'login':
        s.onb = -1;
        break;
      case 'profile':
        s.onb = 0;
        break;
      case 'onb1':
        s.onb = 1;
        break;
      case 'onb2':
        s.onb = 2;
        break;
      case 'onb3':
        s.onb = 3;
        break;
      case 'ready':
        s.onb = 4;
        s.name = 'Carolina Mendes';
        break;
      case 'pin':
        Object.assign(s, { sel: 'tennis', sheet: 'low', view: this.focusView(PL.tennis), popOn: true });
        break;
      case 'menu':
        Object.assign(s, { sheet: 'full', sheetTab: 'menu' });
        break;
      case 'directions':
        s.inPark = true;
        Object.assign(s, {
          route: 'tennis',
          sheet: 'low',
          view: this.routeView(this.calcRoute(YOU_IN, PL.tennis).pts),
        });
        break;
      case 'sport':
        s.stack = [{ t: 'sport', id: 'tennis' }];
        break;
      case 'events':
        s.stack = [{ t: 'events' }];
        break;
      case 'event-enroll':
        s.stack = [{ t: 'event', id: 'e-open' }];
        break;
      case 'event-open':
        s.stack = [{ t: 'event', id: 'e-halloween' }];
        break;
      case 'queue-out':
        s.tab = 'play';
        break;
      case 'queue-in':
        Object.assign(s, { tab: 'play', inPark: true, queue: qd, myPlans: [this.carolinaPlan()] });
        break;
      case 'queue-alert':
        Object.assign(s, {
          tab: 'play',
          inPark: true,
          queue: { ...qd, ahead: 0, wait: 0 },
          turn: { left: 300, checked: false, open: false },
          notif: true,
          myPlans: [this.carolinaPlan()],
        });
        break;
      case 'queue-turn':
        Object.assign(s, {
          tab: 'play',
          inPark: true,
          queue: { ...qd, ahead: 0, wait: 0 },
          turn: { left: 287, checked: false, open: true },
        });
        break;
      case 'plan':
        Object.assign(s, { tab: 'play', stack: [{ t: 'plan', done: false }] });
        break;
      case 'plan-done':
        Object.assign(s, {
          tab: 'play',
          stack: [{ t: 'plan', done: true }],
          sayHi: true,
          myPlans: [this.carolinaPlan()],
        });
        break;
      case 'community':
        s.tab = 'community';
        break;
      case 'me':
        s.tab = 'me';
        break;
      default:
        break;
    }
    clearTimeout(this.notifT);
    clearTimeout(this.popT);
    if (this.props.inPark) s.inPark = true;
    this.setState(s);
  }

  onTick() {
    const st = this.state;
    if (st.turn && !st.turn.checked && st.turn.left > 0)
      this.setState({ turn: { ...st.turn, left: st.turn.left - 1 } });
    else if (st.queue && !st.turn) {
      const t = st.tick + 1;
      if (t % 12 === 0 && st.queue.ahead > 1)
        this.setState({
          tick: t,
          queue: { ...st.queue, ahead: st.queue.ahead - 1, wait: Math.max(4, st.queue.wait - 6) },
        });
      else this.setState({ tick: t });
    }
  }

  showToast(msg) {
    clearTimeout(this.toastT);
    this.setState({ toast: msg });
    this.toastT = setTimeout(() => this.setState({ toast: null }), 2400);
  }

  // In phone mode the screen is the real viewport height, not the 844px design screen.
  screenH() {
    return this.props.screenH || 844;
  }
  vy(y) {
    return Math.round((y * this.screenH()) / 844);
  }
  sheets() {
    const H = this.screenH();
    if (H === 844) return SHEET;
    const full = H - 139;
    return { low: 132, mid: Math.min(360, Math.round(full * 0.51)), full };
  }
  defView() {
    return { ...DEFV, ty: this.vy(236) - 760 * 0.5 };
  }

  // ---------- map ----------
  focusView(p) {
    const s = 1.05;
    return { s, tx: Math.round(195 - (p.x + 40) * s), ty: Math.round(this.vy(420) - (p.y + 40) * s) };
  }
  calcRoute(from, place) {
    const to = [place.x, place.y],
      n = LOOP.length;
    const near = (p) => {
      let bi = 0,
        bd = 1e12;
      LOOP.forEach((q, i) => {
        const d = (q[0] - p[0]) ** 2 + (q[1] - p[1]) ** 2;
        if (d < bd) {
          bd = d;
          bi = i;
        }
      });
      return bi;
    };
    const i = near(from),
      j = near(to);
    const walk = (dir) => {
      const out = [];
      for (let k = i, c = 0; c <= n; k = (k + dir + n) % n, c++) {
        out.push(LOOP[k]);
        if (k === j) break;
      }
      return out;
    };
    const len = (a) => a.reduce((s, p, x) => (x ? s + Math.hypot(p[0] - a[x - 1][0], p[1] - a[x - 1][1]) : 0), 0);
    const f = walk(1),
      b = walk(-1);
    const pts = [from, ...(len(f) < len(b) ? f : b), to];
    const m = len(pts) * 1.6;
    return { pts, m };
  }
  routeView(pts) {
    const xs = pts.map((p) => p[0] + 40),
      ys = pts.map((p) => p[1] + 40);
    const x0 = Math.min(...xs),
      x1 = Math.max(...xs),
      y0 = Math.min(...ys),
      y1 = Math.max(...ys);
    const s = Math.min(320 / Math.max(1, x1 - x0), this.vy(400) / Math.max(1, y1 - y0), 1.1);
    return { s, tx: 195 - ((x0 + x1) / 2) * s, ty: this.vy(375) - ((y0 + y1) / 2) * s };
  }
  you() {
    return this.state.inPark ? YOU_IN : YOU_OUT;
  }

  selectPlace(id) {
    clearTimeout(this.popT);
    const p = id.startsWith('u:') ? UT.find((u) => u.id === id.slice(2)) : PL[id];
    this.setState({
      sel: id,
      popOn: false,
      route: null,
      sheet: 'low',
      sheetTab: 'today',
      dragH: null,
      view: this.focusView(p),
      anim: true,
    });
    this.popT = setTimeout(() => this.setState({ popOn: true }), 440);
  }
  clearSel() {
    clearTimeout(this.popT);
    this.setState({ sel: null, popOn: false, sheet: this.state.route ? 'low' : 'mid' });
  }
  directions(placeId) {
    const p = placeId.startsWith('u:') ? UT.find((u) => u.id === placeId.slice(2)) : PL[placeId];
    const r = this.calcRoute(this.you(), p);
    clearTimeout(this.popT);
    this.setState({
      stack: [],
      tab: 'explore',
      sel: null,
      popOn: false,
      route: placeId,
      sheet: 'low',
      dragH: null,
      view: this.routeView(r.pts),
      anim: true,
    });
  }
  mapDown = (e) => {
    const el = e.currentTarget;
    const k = el.getBoundingClientRect().width / el.offsetWidth || 1;
    const sx = e.clientX,
      sy = e.clientY,
      v0 = this.state.view;
    let moved = false;
    const mv = (ev) => {
      const dx = (ev.clientX - sx) / k,
        dy = (ev.clientY - sy) / k;
      if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
      if (moved) this.setState({ anim: false, view: { ...v0, tx: v0.tx + dx, ty: v0.ty + dy } });
    };
    const up = () => {
      window.removeEventListener('pointermove', mv);
      window.removeEventListener('pointerup', up);
      if (!moved && this.state.sel) this.clearSel();
    };
    window.addEventListener('pointermove', mv);
    window.addEventListener('pointerup', up);
  };
  sheetDown = (e) => {
    const el = e.currentTarget;
    const k = el.getBoundingClientRect().width / el.offsetWidth || 1;
    const sy = e.clientY,
      h0 = this.state.dragH ?? this.sheets()[this.state.sheet];
    let moved = false;
    const mv = (ev) => {
      const dy = (ev.clientY - sy) / k;
      if (Math.abs(dy) > 5) moved = true;
      if (moved) this.setState({ dragH: Math.max(110, Math.min(this.screenH() - 124, h0 - dy)) });
    };
    const up = () => {
      window.removeEventListener('pointermove', mv);
      window.removeEventListener('pointerup', up);
      if (!moved) {
        this.setSheet(this.state.sheet === 'full' ? 'mid' : this.state.sheet === 'mid' ? 'full' : 'mid');
        return;
      }
      const h = this.state.dragH;
      let best = 'mid',
        bd = 1e9;
      const sizes = this.sheets();
      for (const n in sizes) {
        const d = Math.abs(sizes[n] - h);
        if (d < bd) {
          bd = d;
          best = n;
        }
      }
      this.setSheet(best);
    };
    window.addEventListener('pointermove', mv);
    window.addEventListener('pointerup', up);
  };
  setSheet(n) {
    const patch = { sheet: n, dragH: null, sheetTab: n === 'full' ? this.state.sheetTab : 'today' };
    if (n !== 'low') {
      patch.sel = null;
      patch.popOn = false;
      clearTimeout(this.popT);
    }
    this.setState(patch);
  }

  // ---------- nav ----------
  push(item) {
    this.setState((s) => ({ stack: [...s.stack, item] }));
  }
  back = () => this.setState((s) => ({ stack: s.stack.slice(0, -1) }));
  goSport(id) {
    this.push({ t: 'sport', id });
  }
  goEvent(id) {
    this.push({ t: 'event', id });
  }
  setTab(t) {
    this.setState({ tab: t, stack: [] });
  }

  // ---------- queue ----------
  gate(why) {
    this.setState({ tab: 'me', stack: [], join: null, tip: null, dm: null, gateMsg: why || '' });
  }
  openJoin(sport) {
    if (this.state.visitor) return this.gate(`Log in to join the ${SP[sport].name.toLowerCase()} line.`);
    if (!this.state.inPark) return this.setState({ tip: sport });
    if (this.state.queue) return;
    this.setState({ join: { sport, mode: 'Just me', size: SP[sport].team || 2 } });
  }
  confirmJoin = () => {
    const j = this.state.join,
      sp = SP[j.sport];
    this.setState({
      join: null,
      stack: [],
      tab: 'play',
      queue: {
        sport: j.sport,
        ahead: Math.max(1, sp.q),
        wait: Math.max(5, sp.wait),
        size: j.mode === 'Just me' ? 1 : j.size,
      },
      tick: 0,
    });
    this.showToast('Your spot is held');
  };
  leaveQueue = () => {
    this.setState({ queue: null, turn: null, notif: false });
    this.showToast('You left the queue');
  };
  simulateTurn = () => {
    this.setState({
      queue: { ...this.state.queue, ahead: 0, wait: 0 },
      turn: { left: 300, checked: false, open: false },
      notif: true,
    });
    clearTimeout(this.notifT);
    this.notifT = setTimeout(() => this.setState({ notif: false }), 7000);
  };
  openTurn = () => {
    if (!this.state.turn) return;
    clearTimeout(this.notifT);
    this.setState({ notif: false, turn: { ...this.state.turn, open: true } });
  };
  closeTurn = () => this.setState({ turn: { ...this.state.turn, open: false } });
  imHere = () => {
    const sp = this.state.queue.sport;
    this.setState((s) => ({
      turn: { ...s.turn, checked: true },
      visits: { ...s.visits, [sp]: (s.visits[sp] || 0) + 1 },
      stamps: [[sp, 'Today'], ...s.stamps],
      newStamp: true,
      checkedToday: true,
    }));
  };
  skipTurn = () => {
    this.setState({ turn: null, notif: false, queue: { ...this.state.queue, ahead: 2, wait: 12 }, tick: 0 });
    this.showToast("We'll notify you again soon");
  };
  finishTurn = () => this.setState({ turn: null, queue: null, notif: false });

  // ---------- plan ----------
  setPlan(p) {
    this.setState((s) => ({ plan: { ...s.plan, ...p } }));
  }
  needText(p) {
    const n = p.need,
      h = p.have,
      word = n === 1 ? 'player' : 'players';
    if (p.sport === 'tennis' || p.sport === 'beachtennis') {
      if (h === 1 && n === 1) return 'Needs 1 player · singles';
      if (h + n === 4) return `Needs ${n} for doubles, we're ${h}`;
    }
    return h === 1 ? `Needs ${n} ${word}` : `Needs ${n} ${word}, we're ${h}`;
  }
  postPlan = () => {
    const p = this.state.plan;
    this.setState((s) => ({
      stack: [...s.stack.slice(0, -1), { t: 'plan', done: true }],
      sayHi: false,
      myPlans: [{ sport: p.sport, day: p.day, time: p.time, needText: this.needText(p), first: p.first }, ...s.myPlans],
    }));
    clearTimeout(this.hiT);
    if (p.first) this.hiT = setTimeout(() => this.setState({ sayHi: true }), 2200);
  };

  renderVals() {
    const st = this.state,
      V = !!st.visitor;
    const top = st.stack[st.stack.length - 1] || null;
    const v = st.view;
    const s = v.s;
    const scr = (x, y) => ({ x: Math.round(v.tx + (x + 40) * s), y: Math.round(v.ty + (y + 40) * s) });
    const sheetH = st.dragH ?? this.sheets()[st.sheet];
    const nextEventAt = (pid) => EV_ORDER.map((id) => ({ id, ...EV[id] })).find((e) => e.place === pid);

    // pins
    const pins = Object.entries(PL)
      .filter(([, p]) => !p.nopin)
      .map(([id, p]) => {
        const q = scr(p.x, p.y),
          on = st.sel === id,
          sp = SP[p.sports[0]];
        const big = s >= 0.8;
        const size = on ? 46 : big ? 36 : 28;
        return {
          ...q,
          off: -size / 2,
          labelTop: size / 2 + 3,
          z: on ? 4 : 2,
          size,
          icon: on ? 34 : big ? 28 : 22,
          bg: on ? OR : '#fff',
          fg: on ? '#fff' : INK,
          ring: on ? 'rgba(255,255,255,.9)' : '#e4e4e2',
          src: on ? PICW(sp.pic) : PIC(sp.pic),
          name: p.name,
          showLabel: s >= 0.8 && !on,
          onClick: () => this.selectPlace(id),
        };
      });
    const utils = UT.map((u) => {
      const q = scr(u.x, u.y),
        on = st.sel === 'u:' + u.id;
      const sm = s < 0.6 && !on;
      const size = on ? 28 : sm ? 9 : s >= 0.8 ? 22 : 18;
      return {
        ...q,
        off: -size / 2,
        size,
        glyph: sm ? '' : UK[u.kind].glyph,
        bg: on ? OR : sm ? '#9a948e' : '#fff',
        fg: on ? '#fff' : '#6f6a66',
        op: on ? 1 : 0.92,
        onClick: () => this.selectPlace('u:' + u.id),
      };
    });
    const yp = this.you();
    const you = scr(yp[0], yp[1]);

    // popover
    let pop = { left: 0, top: 0, arrow: 0, lines: [] };
    if (st.sel) {
      const isU = st.sel.startsWith('u:');
      const raw = isU ? UT.find((u) => u.id === st.sel.slice(2)) : PL[st.sel];
      const q = scr(raw.x, raw.y);
      const left = Math.max(12, Math.min(390 - 286 - 12, q.x - 143));
      const r = this.calcRoute(this.you(), raw);
      const mins = Math.max(1, Math.round(r.m / 75));
      if (isU) {
        const k = UK[raw.kind];
        pop = {
          left,
          top: q.y - 22,
          arrow: Math.max(18, Math.min(254, q.x - left - 7)),
          origin: Math.max(18, Math.min(254, q.x - left)),
          hasPic: false,
          glyph: k.glyph,
          title: k.title,
          sub: k.sub,
          live: false,
          lines: [...k.lines, { k: 'Walk', v: mins + ' min' }],
          directions: () => this.directions(st.sel),
          open: () => {},
        };
      } else {
        const sp = SP[raw.sports[0]];
        const ne = nextEventAt(st.sel);
        const lines = [];
        if (sp.queue) lines.push({ k: 'Queue', v: sp.q ? `${sp.qText} · ~${sp.wait} min` : 'No queue' });
        if (ne)
          lines.push({
            k: 'Next',
            v: `${ne.title}, ${ne.mon === 'EVERY' ? 'Sat' : ne.mon.charAt(0) + ne.mon.slice(1).toLowerCase() + ' ' + ne.day}`,
          });
        lines.push({ k: 'Walk', v: mins + ' min' });
        pop = {
          left,
          top: q.y - 30,
          arrow: Math.max(18, Math.min(254, q.x - left - 7)),
          origin: Math.max(18, Math.min(254, q.x - left)),
          hasPic: true,
          glyph: '',
          src: PIC(sp.pic),
          title: raw.name,
          sub: raw.sub || sp.name,
          live: !!sp.live,
          liveText: sp.queue
            ? `${sp.q} ${sp.q === 1 ? 'person' : 'people'} playing next`
            : sp.liveText || 'People skating now',
          lines,
          directions: () => this.directions(st.sel),
          open: () => this.goSport(raw.sports[0]),
        };
        if (sp.queue) pop.liveText = 'Games in progress';
      }
    }
    // route
    let routePts = '',
      routeTime = '',
      routeDist = '',
      routeName = '';
    if (st.route) {
      const isU = st.route.startsWith('u:');
      const raw = isU ? UT.find((u) => u.id === st.route.slice(2)) : PL[st.route];
      const r = this.calcRoute(this.you(), raw);
      routePts = r.pts.map((p) => p.join(',')).join(' ');
      routeTime = Math.max(1, Math.round(r.m / 75)) + ' min';
      routeDist = r.m >= 1000 ? (r.m / 1000).toFixed(1) + ' km' : Math.round(r.m / 10) * 10 + ' m';
      routeName = isU ? UK[raw.kind].title.toLowerCase() : raw.name;
    }

    const liveRows = ['soccer', 'tennis', 'basketball', 'roller'].map((id) => {
      const sp = SP[id];
      return {
        src: PICW(sp.pic),
        title: id === 'tennis' ? 'Tennis · Court 3' : sp.name,
        sub: sp.queue ? `${sp.qText} · ${PL[sp.place].name}` : `${sp.liveText} · ${PL[sp.place].name}`,
        right: sp.queue ? `~${sp.wait} min` : 'Open',
        go: () => this.goSport(id),
      };
    });
    const evSub = (e) => `${e.when} · ${PL[e.place].name}`;
    const soonEvents = ['e-rally', 'e-wbv', 'e-halloween'].map((id) => ({
      ...EV[id],
      sub: evSub(EV[id]),
      go: () => this.goEvent(id),
    }));
    const menuItem = (id) => {
      const sp = SP[id];
      return {
        src: PIC(sp.pic),
        name: sp.name,
        where: PL[sp.place].name,
        right: sp.queue ? (sp.q ? `~${sp.wait} min wait` : 'No wait') : sp.live ? 'Live now' : 'Anytime',
        go: () => this.goSport(id),
      };
    };
    const menu = [
      {
        title: 'Courts & fields',
        sub: 'Take turns. See the line before you go.',
        items: ['tennis', 'soccer', 'basketball', 'volleyball', 'beachvolley', 'beachtennis'].map(menuItem),
      },
      {
        title: 'Join in anytime',
        sub: 'No line. Just show up.',
        items: ['roller', 'skate', 'running', 'cycling', 'gym', 'yoga', 'slackline', 'capoeira'].map(menuItem),
      },
    ];
    const sheetTabs = [
      ['today', 'Today'],
      ['menu', 'All sports'],
    ].map(([k, l]) => ({
      label: l,
      stop: (e) => e.stopPropagation(),
      onClick: () => this.setState({ sheetTab: k }),
      bg: st.sheetTab === k ? '#fff' : 'transparent',
      fg: st.sheetTab === k ? INK : '#6f6a66',
      sh: st.sheetTab === k ? '0 1px 3px rgba(26,22,19,.12)' : 'none',
    }));
    const sheetFull = st.sheet === 'full' && st.dragH == null;

    // play
    const q = st.queue;
    let qc = { src: '', name: '', unit: '', who: '', ahead: 0, wait: '', dots: [], isTurn: false, waiting: false };
    if (q) {
      const sp = SP[q.sport];
      qc = {
        src: PIC(sp.pic),
        srcW: PICW(sp.pic),
        srcO: PICO(sp.pic),
        name: `${sp.name} · ${sp.unit}`,
        unit: sp.unit,
        who: q.size > 1 ? `Group of ${q.size} · one spot` : 'Just you',
        ahead: q.ahead,
        wait: q.ahead ? `~${q.wait} min` : 'Now',
        isTurn: !!st.turn,
        waiting: !st.turn,
        dots: Array.from({ length: Math.max(q.ahead, 0) + 1 }, (_, i) => ({
          bg: i === q.ahead ? INK : '#e4e4e2',
          bgDark: i === q.ahead ? 'oklch(0.68 0.21 44)' : 'rgba(255,255,255,.18)',
        })),
      };
    }
    const queueRows = ['tennis', 'soccer', 'basketball', 'beachvolley', 'volleyball'].map((id) => {
      const sp = SP[id],
        mine = q && q.sport === id,
        can = st.inPark && !q;
      return {
        src: PIC(sp.pic),
        srcW: PICW(sp.pic),
        name: `${sp.name} · ${sp.unit}`,
        line: mine ? "You're in this line" : sp.q ? `${sp.qText} · ~${sp.wait} min` : 'No queue — walk on',
        btn: mine ? 'Joined' : 'Join',
        bg: can ? '#fff' : '#f1f1f0',
        fg: can ? INK : '#a8a29c',
        sh: can ? 'inset 0 0 0 1px #ddd8d2' : 'none',
        cursor: 'pointer',
        showTip: st.tip === id,
        onJoin: () => this.openJoin(id),
        go: () => this.goSport(id),
      };
    });
    const mine = [
      ...st.myPlans.map((p) => ({
        src: PIC(SP[p.sport].pic),
        title: `${SP[p.sport].name} · ${p.day}, ${p.time}`,
        sub: p.needText + (p.first ? ' · first time' : ''),
        tag: 'Plan',
        go: () =>
          this.setTab('community') ||
          this.setState({ community: p.sport === 'tennis' ? 'tennis' : this.state.community }),
      })),
      ...Object.keys(st.enrolled)
        .filter((id) => EV[id])
        .map((id) => ({
          src: PIC(SP[EV[id].sport].pic),
          title: EV[id].title,
          sub: `${EV[id].when} · ${st.enrolled[id]}`,
          tag: 'Enrolled',
          go: () => this.goEvent(id),
        })),
      ...Object.keys(st.cal)
        .filter((id) => EV[id] && st.cal[id] && !st.enrolled[id])
        .map((id) => ({
          src: PIC(SP[EV[id].sport].pic),
          title: EV[id].title,
          sub: EV[id].when,
          tag: 'In calendar',
          go: () => this.goEvent(id),
        })),
    ];
    const openPlans = [
      { id: 'p1', ini: 'LP', title: 'Lucas · Beach tennis · Today 6 PM', sub: "Needs 1 for doubles, we're 3" },
      { id: 'p2', ini: 'BC', title: 'Bruna · Basketball · Sat 9 AM', sub: "Women's Open Court · needs 2" },
    ].map((p) => ({
      ...p,
      photo: face(p.ini),
      btn: st.joinedPlans[p.id] ? 'Going' : 'Join',
      onJoin: () => {
        if (V) return this.gate('Log in to join a game.');
        this.setState((s2) => ({ joinedPlans: { ...s2.joinedPlans, [p.id]: !s2.joinedPlans[p.id] } }));
        if (!st.joinedPlans[p.id]) this.showToast("You're in — they've been told");
      },
    }));

    // community
    const cid = st.community,
      csp = SP[cid];
    const comChips = COMS.map((id) => ({
      name: SP[id].name,
      src: id === cid ? PICW(SP[id].pic) : PIC(SP[id].pic),
      onClick: () => {
        this.setState({ community: id });
        if (this.comEl) this.comEl.scrollTop = 0;
      },
      ...chip(id === cid),
      ...(id === cid ? { bg: OR } : {}),
    }));
    const welc = (id) => {
      const p = PEOPLE[id];
      return {
        ...p,
        photo: face(p.ini),
        sayHi: () => {
          if (!V) this.setState({ dm: id, dmText: '' });
        },
        hiOp: V ? 0.4 : 1,
        hiCur: V ? 'default' : 'pointer',
      };
    };
    const postsBy = {
      roller: [
        {
          who: 'Ibira Roller Crew',
          ini: 'IR',
          meta: 'Event · 2h',
          text: 'Halloween Skate Night is on! Costumes optional — spare skates at the crew tent.',
          ev: 'e-halloween',
        },
        {
          who: 'Bianca Ferreira',
          ini: 'BF',
          meta: 'First time · 3h',
          text: "Hi! I'm coming to skate for the first time on Sunday afternoon. Anyone around?",
          welcome: 'w1',
        },
        {
          who: 'Guilherme Santos',
          ini: 'GS',
          meta: 'Plan · 5h',
          text: "Sunday 4 PM · beginners' loop at the Marquise · 5 going",
          plan: 'pl1',
        },
        {
          who: 'Aline Rocha',
          ini: 'AR',
          meta: 'Photos · Yesterday',
          text: 'Festa Junina skate meetup — thank you to everyone who came!',
          photo: 'event photo · Festa Junina meetup',
        },
      ],
      soccer: [
        {
          who: 'Diego Almeida',
          ini: 'DA',
          meta: 'Tip · 1h',
          text: "Line is long today (23). Solo? Tell me at the bench and I'll slot you into the next 7.",
        },
        {
          who: 'Lucas Pereira',
          ini: 'LP',
          meta: 'First time · 4h',
          text: 'Never played pickup here. Is it OK to show up alone on a Saturday?',
          welcome: 'w-soc',
        },
        {
          who: 'Renan Nogueira',
          ini: 'RN',
          meta: 'Plan · 6h',
          text: 'Sun 9 AM · Main field · team of 7 · needs 2 players',
          plan: 'pl-soc',
        },
      ],
      basketball: [
        {
          who: 'Tatiane Lima',
          ini: 'TL',
          meta: 'Update · 2h',
          text: "Women's Open Court this Saturday 8–11 AM. All levels — we'll split teams by experience.",
        },
        {
          who: 'Bruna Castro',
          ini: 'BC',
          meta: 'First time · 5h',
          text: "Haven't played since school. Anyone up for slow 3v3 on a weekday evening?",
          welcome: 'w-bb',
        },
        {
          who: 'Gui Martins',
          ini: 'GM',
          meta: 'Plan · 8h',
          text: 'Thu 7 PM · Half-court 2 · needs 1 player',
          plan: 'pl-bb',
        },
      ],
      skate: [
        {
          who: 'Rodrigo Teixeira',
          ini: 'RT',
          meta: 'Tip · 3h',
          text: 'Bowl is wet from the morning rain — flat ground under the Marquise is dry and empty.',
        },
        {
          who: 'Lia Okada',
          ini: 'LO',
          meta: 'First time · 6h',
          text: 'Just bought my first board. Where do beginners usually practice?',
          welcome: 'w-sk',
        },
      ],
      beachvolley: [
        {
          who: 'Marcos Vieira',
          ini: 'MV',
          meta: 'Tip · 1h',
          text: "Sand court 1 has a 3-pair line. Solo? Come find me at the net, I'll pair you up.",
        },
        {
          who: 'Paula Mendes',
          ini: 'PM',
          meta: 'Plan · 4h',
          text: 'Sat 4 PM · Sand court 2 · pair · needs 1 player',
          plan: 'pl-bv',
        },
      ],
      tennis: [
        ...(st.myPlans.some((p) => p.sport === 'tennis')
          ? [
              {
                who: 'Carolina Mendes',
                ini: 'CM',
                meta: 'First time · just now',
                text: 'Tennis · Sat 10 AM · first time · needs 1 player',
                welcome: 'self',
                selfNote: 'Rafael will say hi',
              },
            ]
          : []),
        {
          who: 'Rafael Souza',
          ini: 'RS',
          meta: 'Event · 1d',
          text: 'Free Tennis Open sign-ups are open. Grouped by level — first-timers very welcome.',
          ev: 'e-open',
        },
        {
          who: 'Juliana Prado',
          ini: 'JP',
          meta: 'Tip · 2d',
          text: 'Weekday mornings are the quietest. Court 4 is the beginner court before 10 AM.',
        },
      ],
    };
    const basePosts = postsBy[cid] || [
      {
        who: PEOPLE[csp.welcomers[0]].name,
        ini: PEOPLE[csp.welcomers[0]].ini,
        meta: 'Tip · 1d',
        text: csp.queue
          ? `New here? Say hi before you join the line — we'll explain how it works.`
          : `New here? Just come along — we'll show you the ropes.`,
      },
    ];
    const posts = [...basePosts, ...olderPosts(cid, Math.max(0, st.comN[cid] || 8))].map((p, i) => {
      const o = {
        ...p,
        avatar: face(p.ini),
        avDisp: face(p.ini) ? 'block' : 'none',
        photoSrc: p.photo
          ? 'https://images.unsplash.com/photo-1622640338505-2ad7465bda17?w=700&h=420&fit=crop&auto=format&q=75'
          : '',
        isEvent: !!p.ev,
        isPhoto: !!p.photo,
        hasAction: !!(p.welcome || p.plan),
        action: '',
        actionNote: '',
        aBg: '#fff',
        aFg: INK,
        aSh: 'inset 0 0 0 1px #ddd8d2',
        onAction: () => {},
      };
      if (p.ev) {
        const e = EV[p.ev];
        Object.assign(o, {
          evMon: e.mon,
          evDay: e.day,
          evTitle: e.title,
          evSub: evSub(e),
          evGo: () => this.goEvent(p.ev),
        });
      }
      if (p.welcome === 'self')
        Object.assign(o, {
          hasAction: true,
          action: 'Your plan',
          actionNote: st.sayHi ? 'Rafael Souza: "I\'ll say hi"' : '3 welcomers notified',
          onAction: () => this.setTab('play'),
        });
      else if (p.welcome) {
        const on = !!st.welcomed[p.welcome];
        Object.assign(o, {
          action: on ? 'Welcomed' : 'Say welcome',
          actionNote: on ? 'You and 6 others' : '6 people said welcome',
          onAction: () => this.setState((s2) => ({ welcomed: { ...s2.welcomed, [p.welcome]: !on } })),
          ...(on ? { aBg: '#f1f1f0', aSh: 'none' } : {}),
        });
      }
      if (p.plan) {
        const on = !!st.welcomed[p.plan];
        Object.assign(o, {
          action: on ? 'Going' : "I'm in",
          actionNote: on ? '6 going' : '5 going',
          onAction: () => this.setState((s2) => ({ welcomed: { ...s2.welcomed, [p.plan]: !on } })),
          ...(on ? { aBg: '#f1f1f0', aSh: 'none' } : {}),
        });
      }
      if (V && o.hasAction) Object.assign(o, { onAction: () => {}, aBg: '#f1f1f0', aFg: '#a8a29c', aSh: 'none' });
      if (V && o.evGo) o.evGo = () => {};
      return o;
    });
    const joined = !!st.joined[cid];
    const com = {
      name: csp.name,
      members: csp.members,
      welcomers: csp.welcomers.map(welc),
      posts,
      joinLabel: joined ? 'Joined' : 'Join',
      joinBg: joined ? '#fff' : OR,
      joinFg: joined ? OR : '#fff',
      joinSh: joined ? 'inset 0 0 0 1.5px oklch(0.68 0.21 44)' : 'none',
      toggleJoin: () => {
        if (V) return this.gate(`Log in to join ${csp.name}.`);
        this.setState((s2) => ({ joined: { ...s2.joined, [cid]: !joined } }));
        if (!joined) this.showToast(`You joined ${csp.name}`);
      },
    };

    // me
    const favRows = Object.keys(st.picked).map((id) => ({
      name: SP[id].name,
      src: PIC(SP[id].pic),
      opts: seg(LEVELS, st.picked[id], (l) => this.setState((s2) => ({ picked: { ...s2.picked, [id]: l } }))).map(
        (o) => ({ ...o, label: o.label === 'Long-time' ? 'Long-time player' : o.label }),
      ),
    }));
    const visitTotal = Object.values(st.visits).reduce((a, b) => a + b, 0);
    const perSport = Object.entries(st.visits).map(([id, n]) => ({ src: PIC(SP[id].pic), n, name: SP[id].name }));
    const stamps = [
      ...st.stamps.slice(0, 7).map(([id, d], i) => ({
        src: PICO(SP[id].pic),
        date: d,
        border: `2px solid ${OR}`,
        color: OR,
        op: 1,
        rot: [-8, 6, -4, 9, -10, 3, -6][i % 7],
        anim: i === 0 && st.newStamp ? 'piStamp .6s cubic-bezier(.2,.8,.2,1) forwards' : 'none',
      })),
      {
        src: PIC('tennis'),
        date: 'Next',
        border: '2px dashed #ddd8d2',
        color: '#ddd8d2',
        op: 0.15,
        rot: 0,
        anim: 'none',
      },
    ];
    const meToggles = [
      {
        title: 'Beginner-friendly badge',
        sub: 'Show newcomers they can say hi to you',
        on: st.badge,
        onClick: () => this.setState((s2) => ({ badge: !s2.badge })),
      },
      {
        title: 'Show my age',
        sub: 'Your birthdate always stays private',
        on: st.ageShown,
        onClick: () => this.setState((s2) => ({ ageShown: !s2.ageShown })),
      },
    ].map((t) => ({ ...t, ...sw(t.on) }));

    // sport page
    let sp = { how: [], rules: [], events: [], welcomers: [] };
    if (top && top.t === 'sport') {
      const id = top.id,
        x = SP[id],
        pl = PL[x.place];
      const evs = EV_ORDER.filter((e) => EV[e].sport === id).map((e) => ({
        ...EV[e],
        sub: evSub(EV[e]),
        go: () => this.goEvent(e),
      }));
      const rules = (x.queue ? x.rules : x.join).map((t, i) => ({
        n: i + 1,
        text: t,
        border: i ? '1px solid #ececeb' : 'none',
      }));
      const inQ = q && q.sport === id;
      sp = {
        name: x.name,
        src: PIC(x.pic),
        srcW: PICW(x.pic),
        live: !!x.live,
        status: x.queue
          ? x.live
            ? `Live now · ${pl.name}`
            : pl.name
          : x.live
            ? `Live now · ${x.liveText || pl.name}`
            : `Anytime · ${pl.name}`,
        how: x.how,
        rulesTitle: x.queue ? 'House rules & the line' : 'How to join in',
        rules,
        placeName: pl.name,
        placeNote: pl.note,
        mapL: 175 - (pl.x + 40) * 0.9,
        mapT: 75 - (pl.y + 40) * 0.9,
        directions: () => this.directions(x.place),
        hasEvents: evs.length > 0,
        events: evs,
        welcomers: x.welcomers.map(welc),
        members: x.members,
        goCommunity: () => {
          this.setState({ stack: [], tab: 'community', community: COMS.includes(id) ? id : this.state.community });
        },
        isQueue: !!x.queue,
        isOpen: !x.queue,
        qParts: (x.q ? [x.unit, x.qText, `~${x.wait} min`] : [x.unit, 'No queue']).map((p, i) => ({
          t: p,
          dot: i > 0,
        })),
        qSub: inQ
          ? "You're in this line"
          : st.inPark
            ? 'Your spot is held while you walk around'
            : 'Visible from anywhere',
        pLabel: x.queue ? (inQ ? 'View my spot' : 'Join') : 'Say hi to a welcomer',
        pBg: x.queue && !st.inPark && !inQ ? '#f1f1f0' : inQ ? INK : OR,
        pFg: x.queue && !st.inPark && !inQ ? '#8a847e' : '#fff',
        primary: () => {
          if (V)
            return this.gate(
              x.queue ? `Log in to join the ${x.name.toLowerCase()} line.` : 'Log in to talk with welcomers.',
            );
          if (!x.queue) return this.setState({ dm: x.welcomers[0], dmText: '' });
          if (inQ) return this.setTab('play');
          if (!st.inPark) return this.setState({ tip: 'sp:' + id });
          if (!q) this.openJoin(id);
          else this.showToast('You can be in one line at a time');
        },
      };
      if (x.queue && !st.inPark && !inQ) {
        sp.pLabel = 'Join';
      }
      sp.showTip = st.tip === 'sp:' + id;
    }
    // events list
    const evFilters = ['All', 'Beginners', 'Women only', 'Under 12'].map((f) => ({
      label: f,
      onClick: () => this.setState({ evFilter: f }),
      ...chip(st.evFilter === f),
    }));
    const evList = EV_ORDER.filter((id) => st.evFilter === 'All' || EV[id].tags.includes(st.evFilter)).map((id) => {
      const e = EV[id];
      return {
        ...e,
        sub: evSub(e),
        chips: [
          e.kind === 'open' ? 'Open entry' : st.enrolled[id] ? 'Enrolled' : 'Enroll',
          ...e.tags.filter((t) => t !== 'Everyone'),
        ],
        go: () => this.goEvent(id),
      };
    });
    // event page
    let ev = { tags: [], rows: [], opts: [] };
    if (top && top.t === 'event') {
      const id = top.id,
        e = EV[id],
        enr = st.enrolled[id],
        inCal = !!st.cal[id];
      const opt = st.evOpt[id] || e.opts?.[0];
      const toggleCal = () => {
        this.setState((s2) => ({ cal: { ...s2.cal, [id]: !inCal } }));
        if (!inCal) this.showToast('Added to your calendar');
      };
      ev = {
        title: e.title,
        src: PIC(SP[e.sport].pic),
        sportName: SP[e.sport].name,
        tags: e.tags,
        isOpen: e.kind === 'open',
        isEnroll: e.kind === 'enroll' && !enr,
        desc: e.desc,
        rows: [
          { k: 'When', v: e.when },
          {
            k: 'Where',
            v: PL[e.place].name,
            hasLink: true,
            link: 'Directions',
            onLink: () => this.directions(e.place),
          },
          { k: 'Organizer', v: e.org },
        ],
        spotsText: `${e.spots} of ${e.total} ${e.unitWord || 'spots'} left`,
        pct: Math.round((1 - e.spots / (e.total || 1)) * 100),
        opts: e.opts ? seg(e.opts, opt, (o) => this.setState((s2) => ({ evOpt: { ...s2.evOpt, [id]: o } }))) : [],
        optNote:
          opt === 'Doubles' || opt === 'With a partner'
            ? "No partner yet? Enroll and we'll match you with someone at your level."
            : opt === 'Enroll a team'
              ? 'Add your team name and players on the next step.'
              : "You'll play people at your level.",
        showCal2: e.kind === 'enroll' && !!enr,
        calLabel: inCal ? 'In calendar ✓' : 'Add to calendar',
        onCal: toggleCal,
      };
      if (e.kind === 'open')
        Object.assign(ev, {
          pLabel: inCal ? 'Added to calendar ✓' : 'Add to calendar',
          pBg: inCal ? '#fff' : OR,
          pFg: inCal ? INK : '#fff',
          pSh: inCal ? 'inset 0 0 0 1px #ddd8d2' : 'none',
          primary: toggleCal,
        });
      else if (enr)
        Object.assign(ev, {
          pLabel: `Enrolled · ${enr}`,
          pBg: '#fff',
          pFg: INK,
          pSh: 'inset 0 0 0 1px #ddd8d2',
          primary: () => {
            this.setState((s2) => {
              const n = { ...s2.enrolled };
              delete n[id];
              return { enrolled: n };
            });
            this.showToast('Enrollment cancelled');
          },
        });
      else
        Object.assign(ev, {
          pLabel: 'Enroll · free',
          pBg: OR,
          pFg: '#fff',
          pSh: 'none',
          primary: () => {
            if (V) return this.gate('Log in to enroll in events.');
            this.setState((s2) => ({ enrolled: { ...s2.enrolled, [id]: opt } }));
            this.showToast("You're enrolled");
          },
        });
    }
    // plan
    const p = st.plan;
    const planSports = PLAN_SPORTS.map((id) => ({
      label: SP[id].name,
      src: PIC(SP[id].pic),
      onClick: () => this.setPlan({ sport: id }),
      bg: p.sport === id ? '#fff' : '#f7f7f6',
      sh: p.sport === id ? `inset 0 0 0 2px ${INK}` : 'inset 0 0 0 1px #ececeb',
    }));
    const planDays = DAYS.map((d) => ({ label: d, onClick: () => this.setPlan({ day: d }), ...chip(p.day === d) }));
    const planTimes = TIMES.map((d) => ({ label: d, onClick: () => this.setPlan({ time: d }), ...chip(p.time === d) }));
    const steppers = [
      {
        label: "We're",
        v: p.have,
        dec: () => this.setPlan({ have: Math.max(1, p.have - 1) }),
        inc: () => this.setPlan({ have: Math.min(14, p.have + 1) }),
      },
      {
        label: 'Looking for',
        v: p.need,
        dec: () => this.setPlan({ need: Math.max(1, p.need - 1) }),
        inc: () => this.setPlan({ need: Math.min(13, p.need + 1) }),
      },
    ];
    const planToggles = [
      {
        title: "It's my first time",
        sub: 'Welcomers and regulars get a heads-up and can tap "I\'ll say hi."',
        on: p.first,
        onClick: () => this.setPlan({ first: !p.first }),
      },
      {
        title: 'Tell players nearby',
        sub: `People in or heading to the park who play ${SP[p.sport].name.toLowerCase()} can join.`,
        on: p.notify,
        onClick: () => this.setPlan({ notify: !p.notify }),
      },
    ].map((t) => ({ ...t, ...sw(t.on) }));
    const lastPlan = st.myPlans[0] || this.carolinaPlan();
    const planSum = {
      src: PIC(SP[lastPlan.sport].pic),
      title: `${SP[lastPlan.sport].name} · ${lastPlan.day}, ${lastPlan.time}`,
      sub: PL[SP[lastPlan.sport].place].name,
      chips: [lastPlan.needText, ...(lastPlan.first ? ['First time'] : [])],
      notified: lastPlan.first
        ? `3 welcomers and 18 ${SP[lastPlan.sport].name.toLowerCase()} players nearby were told.`
        : `18 ${SP[lastPlan.sport].name.toLowerCase()} players nearby were told.`,
    };
    const planCalOn = !!st.planCal;

    // join sheet
    let jn = { modes: [] };
    if (st.join) {
      const x = SP[st.join.sport];
      const team = st.join.mode !== 'Just me';
      jn = {
        src: PIC(x.pic),
        sub: `${x.name} · ${x.unit} · ${x.q ? x.qText : 'no queue'}`,
        wait: x.q ? `~${x.wait} min` : 'now',
        isTeam: team,
        size: st.join.size,
        modes: seg(['Just me', 'My group'], st.join.mode, (m) =>
          this.setState((s2) => ({ join: { ...s2.join, mode: m } })),
        ),
        dec: () => this.setState((s2) => ({ join: { ...s2.join, size: Math.max(2, s2.join.size - 1) } })),
        inc: () => this.setState((s2) => ({ join: { ...s2.join, size: Math.min(x.team || 4, s2.join.size + 1) } })),
        note: team
          ? 'Groups take one spot at the back of the line — the same as everyone else. All of you check in together.'
          : x.team && x.team > 2
            ? `You'll be grouped with other solo players into the next team of ${x.team}, in the order you joined.`
            : "You'll get a notification when it's your turn. Then you have 5 minutes to check in.",
      };
    }
    // dm
    let dm = { prompts: [] };
    if (st.dm) {
      const pp = PEOPLE[st.dm];
      const sname = SP[pp.sport].name.toLowerCase();
      const prompts =
        pp.sport === 'roller'
          ? ["I'm new — can I join on Sunday?", 'Do you lend skates?', 'Which part is good for beginners?']
          : [`First time playing ${sname} here — any tips?`, 'How does the line work?', 'When do you usually play?'];
      dm = {
        ini: pp.ini,
        photo: face(pp.ini),
        first: pp.name.split(' ')[0],
        line: `${pp.level} · ${pp.visits} visits · Welcomer`,
        prompts: prompts.map((t) => ({ label: t, onClick: () => this.setState({ dmText: t }) })),
      };
    }
    // onboarding
    const onbSports = ONB_SPORTS.map((id) => {
      const on = !!st.picked[id];
      return {
        label: SP[id].name,
        src: PIC(SP[id].pic),
        bg: on ? '#fff' : '#f7f7f6',
        sh: on ? `inset 0 0 0 2px ${INK}` : 'inset 0 0 0 1px #ececeb',
        onClick: () =>
          this.setState((s2) => {
            const n = { ...s2.picked };
            if (n[id]) delete n[id];
            else n[id] = 'Just started';
            return { picked: n };
          }),
      };
    });
    const canNext = st.onb === 0 ? st.name.trim().length > 0 : st.onb !== 1 || Object.keys(st.picked).length > 0;
    const onbStep = st.onb ?? -2;
    const tabsDef = [
      ['explore', 'Explore'],
      ['play', 'Play'],
      ['community', 'Community'],
      ['me', 'Me'],
    ];
    const turnPl = q ? PL[SP[q.sport].place] : PL.tennis;

    return {
      isExplore: st.tab === 'explore',
      isPlay: st.tab === 'play',
      isCommunity: st.tab === 'community',
      isMe: st.tab === 'me' && !V,
      demoInPark: () => this.setState((s2) => ({ inPark: !s2.inPark, tip: null })),
      demoParkBg: st.inPark ? INK : '#d6d6d4',
      demoParkKnob: st.inPark ? 21 : 3,
      isMeVisitor: st.tab === 'me' && V,
      gateMsg: st.gateMsg || 'Join lines, communities and events — and keep a passport of your visits.',
      comVisitor: V,
      visitorLogin: () => {
        this.setState({ visitor: false, gateMsg: '' });
        this.showToast('Welcome back, Carolina');
      },
      visitorSignup: () => this.setState({ onb: 0, gateMsg: '' }),
      tx: v.tx,
      ty: v.ty,
      s,
      mapTr: st.anim ? 'transform .42s cubic-bezier(.33,1,.68,1)' : 'none',
      pinTr: st.anim ? 'transform .42s cubic-bezier(.33,1,.68,1)' : 'none',
      mapDown: this.mapDown,
      pins,
      utils,
      you,
      popOn: st.popOn && !!st.sel,
      pop,
      hasRoute: !!st.route,
      noRoute: !st.route,
      routePts,
      routeTime,
      routeDist,
      routeName,
      endRoute: () => this.setState({ route: null, sheet: 'mid', view: this.defView(), anim: true }),
      recenter: () => {
        this.clearSel();
        this.setState({
          anim: true,
          view: st.inPark
            ? { s: 0.75, tx: 195 - (YOU_IN[0] + 40) * 0.75, ty: this.vy(231) - (YOU_IN[1] + 40) * 0.75 }
            : this.defView(),
          sheet: 'mid',
        });
      },
      sheetH,
      sheetTr: st.dragH == null ? 'height .35s cubic-bezier(.2,.8,.2,1)' : 'none',
      sheetDown: this.sheetDown,
      sheetFull,
      sheetNotFull: !sheetFull,
      sheetTabs,
      showToday: st.sheetTab !== 'menu',
      showMenu: st.sheetTab === 'menu',
      stopPD: (e) => e.stopPropagation(),
      backToday: () => this.setState({ sheetTab: 'today' }),
      liveRows,
      soonEvents,
      menu,
      openEvents: () => this.push({ t: 'events' }),
      openMenu: () => {
        clearTimeout(this.popT);
        this.setState({ sheet: 'full', dragH: null, sheetTab: 'menu', sel: null, popOn: false });
      },
      toggleInPark: () => this.setState((s2) => ({ inPark: !s2.inPark })),
      inParkBg: st.inPark ? INK : '#ddd8d2',
      inParkKnob: st.inPark ? 21 : 3,
      hasQueue: !!q,
      qc,
      queueRows,
      dismissTip: () => {
        if (this.state.tip) this.setState({ tip: null });
      },
      outsidePark: !st.inPark,
      leaveQueue: this.leaveQueue,
      simulateTurn: this.simulateTurn,
      openTurn: this.openTurn,
      countdown: st.turn ? `${Math.floor(st.turn.left / 60)}:${String(st.turn.left % 60).padStart(2, '0')}` : '5:00',
      openPlan: () => this.setState({ stack: [{ t: 'plan', done: false }], plan: { ...this.base().plan } }),
      mine,
      noMine: mine.length === 0,
      openPlans,
      comChips,
      com,
      ageLine: st.ageShown ? `42 · ${visitTotal} visits to the park` : `${visitTotal} visits to the park`,
      visitTotal,
      streak: st.streak,
      perSport,
      stamps,
      favRows,
      meToggles,
      checkInHere: () => {
        if (!st.inPark) return this.setState({ tip: 'checkin' });
        if (st.checkedToday) return;
        this.setState({ checkSheet: true, checkSport: Object.keys(st.picked)[0] || null });
      },
      isCheckSheet: !!st.checkSheet,
      closeCheck: () => this.setState({ checkSheet: false }),
      checkSports: [...Object.keys(st.picked), ...Object.keys(SP).filter((id) => !st.picked[id])].map((id) => ({
        name: SP[id].name,
        src: st.checkSport === id ? PICW(SP[id].pic) : PIC(SP[id].pic),
        bg: st.checkSport === id ? OR : '#f7f7f6',
        fg: st.checkSport === id ? '#fff' : INK,
        onClick: () => this.setState({ checkSport: id }),
      })),
      checkCanGo: !!st.checkSport,
      checkGoBg: st.checkSport ? OR : '#f1f1f0',
      checkGoFg: st.checkSport ? '#fff' : '#a8a29c',
      checkGoLabel: st.checkSport ? 'Stamp my passport · ' + SP[st.checkSport].name : 'Pick a sport',
      confirmCheck: () => {
        const x = st.checkSport;
        if (!x) return;
        this.setState((s2) => ({
          checkSheet: false,
          checkedToday: true,
          newStamp: true,
          visits: { ...s2.visits, [x]: (s2.visits[x] || 0) + 1 },
          stamps: [[x, 'Today'], ...s2.stamps],
        }));
        this.showToast('Stamped: ' + SP[x].name + ', today');
      },
      checkLabel: st.checkedToday ? 'Checked in today ✓' : "I'm playing here",
      checkFg: st.inPark || st.checkedToday ? INK : '#a8a29c',
      checkTip: st.tip === 'checkin',
      tabs: tabsDef.map(([k, l]) => ({
        label: l,
        color: st.tab === k ? OR : '#6f6a66',
        fill: st.tab === k ? OR : 'transparent',
        dot: st.tab === k ? '#fff' : '#6f6a66',
        isExplore: k === 'explore',
        isPlay: k === 'play',
        playSrc: st.tab === 'play' ? 'assets/pictograms/orange/running.svg' : 'assets/pictograms/gray/running.svg',
        isCommunity: k === 'community',
        isMe: k === 'me',
        onClick: () => this.setTab(k),
      })),
      back: this.back,
      comRef: (el) => {
        this.comEl = el;
      },
      comScroll: (e) => {
        const el = e.currentTarget;
        if (this.state.comLoading || el.scrollHeight - el.scrollTop - el.clientHeight > 240) return;
        const c = this.state.community;
        this.setState({ comLoading: true });
        clearTimeout(this.comT);
        this.comT = setTimeout(
          () => this.setState((s2) => ({ comLoading: false, comN: { ...s2.comN, [c]: (s2.comN[c] || 8) + 8 } })),
          700,
        );
      },
      isSport: !!top && top.t === 'sport',
      sp,
      isEvents: !!top && top.t === 'events',
      evFilters,
      evList,
      evEmpty: evList.length === 0,
      isEvent: !!top && top.t === 'event',
      ev,
      isPlan: !!top && top.t === 'plan',
      planForm: !!top && top.t === 'plan' && !top.done,
      planDone: !!top && top.t === 'plan' && !!top.done,
      planSports,
      planDays,
      planTimes,
      planPlace: PL[SP[p.sport].place].name,
      steppers,
      needText: this.needText(p),
      planToggles,
      postPlan: this.postPlan,
      planSum,
      sayHi: st.sayHi,
      copyLink: () => this.showToast('Link copied — share it anywhere'),
      planCal: () => {
        this.setState({ planCal: !planCalOn });
        if (!planCalOn) this.showToast('Added to your calendar');
      },
      planCalLabel: planCalOn ? 'In calendar ✓' : 'Add to calendar',
      planFinish: () => this.setState({ stack: [], tab: 'play' }),
      isJoin: !!st.join,
      jn,
      closeJoin: () => this.setState({ join: null }),
      confirmJoin: this.confirmJoin,
      isDm: !!st.dm,
      dm,
      dmText: st.dmText,
      dmChange: (e) => this.setState({ dmText: e.target.value }),
      closeDm: () => this.setState({ dm: null }),
      sendDm: () => {
        const n = PEOPLE[st.dm].name.split(' ')[0];
        this.setState({ dm: null });
        this.showToast(`Sent to ${n}. Replies show up in Community.`);
      },
      isTurn: !!st.turn && st.turn.open,
      turnWaiting: !!st.turn && !st.turn.checked,
      turnChecked: !!st.turn && st.turn.checked,
      turnMapL: 171 - (turnPl.x + 40) * 0.9,
      turnMapT: 85 - (turnPl.y + 40) * 0.9,
      imHere: this.imHere,
      skipTurn: this.skipTurn,
      closeTurn: this.closeTurn,
      finishTurn: this.finishTurn,
      checkedNote: q
        ? `Stamp added to your passport — ${st.visits[q.sport] || 1} ${SP[q.sport].name.toLowerCase()} visits so far.`
        : '',
      rafaelPhoto: face('RS'),
      isOnb: st.onb !== null,
      isAuth: st.onb === -1,
      isProfile: st.onb === 0,
      isSportsStep: st.onb === 1,
      isLevel: st.onb === 2,
      isLoc: st.onb === 3,
      isReady: st.onb === 4,
      hasDots: onbStep >= 0 && onbStep <= 3,
      onbOp: st.leaving ? 0 : 1,
      onbScale: st.leaving ? 1.03 : 1,
      onbBlur: st.leaving ? 8 : 0,
      onbPe: st.leaving ? 'none' : 'auto',
      appScale: st.onb !== null && !st.leaving ? 1.06 : 1,
      name: st.name,
      hasPhoto: !!st.photo,
      noPhoto: !st.photo,
      photo: st.photo || '',
      photoLabel: st.photo ? 'Change photo' : 'Add a photo',
      onName: (e) => this.setState({ name: e.target.value }),
      onPhoto: (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = () => this.setState({ photo: r.result });
        r.readAsDataURL(f);
      },
      meName: st.name.trim() || 'Carolina Mendes',
      mePhoto: st.photo || face('CM').replace('w=160&h=160', 'w=240&h=240'),
      readyName: st.name.trim().split(' ')[0] || 'Carolina',
      onbSignup: () => this.setState({ onb: 0 }),
      enterVisitor: () => {
        if (st.leaving) return;
        this.setState({ leaving: true, visitor: true, tab: 'explore', stack: [] });
        clearTimeout(this.leaveT);
        this.leaveT = setTimeout(() => this.setState({ onb: null, leaving: false }), 850);
      },
      enterApp: () => {
        if (st.leaving) return;
        this.setState({ leaving: true, visitor: false, tab: st.visitor && st.onb === 4 ? 'me' : 'explore', stack: [] });
        clearTimeout(this.leaveT);
        this.leaveT = setTimeout(() => this.setState({ onb: null, leaving: false }), 850);
      },
      onbDots: [0, 1, 2, 3].map((i) => ({ bg: i <= onbStep ? INK : '#e4e4e2' })),
      onbSports,
      onbBtn: st.onb === 3 ? 'Allow while using the app' : 'Continue',
      onbBtnBg: canNext ? OR : '#f1f1f0',
      onbBtnFg: canNext ? '#fff' : '#a8a29c',
      onbNext: () => {
        if (!canNext) return;
        this.setState({ onb: Math.min(4, st.onb + 1) });
      },
      onbBack: () => this.setState({ onb: Math.max(-1, st.onb - 1) }),
      onbSkipLoc: () => this.setState({ onb: 4 }),
      locReasons: [
        'See where you are on the park map and get walking directions to any court.',
        'Hold your place in a queue — joining only works once you are in the park.',
        'Your exact location is never shown to other people.',
      ],
      hasNotif: !!st.notif,
      hasToast: !!st.toast,
      toast: st.toast || '',
      // `standalone`: the app fills a real phone, so drop the mockup bezel, fake status bar and demo toggle.
      frame: this.props.standalone
        ? { w: 390, h: this.screenH(), pad: 0, radius: 0, bg: '#fff', shadow: 'none', screenRadius: 0, chrome: false }
        : {
            w: 414,
            h: 868,
            pad: 12,
            radius: 64,
            bg: '#1a1613',
            shadow: '0 30px 60px -20px rgba(26,22,19,.35)',
            screenRadius: 52,
            chrome: true,
          },
      screenHeight: this.screenH(),
    };
  }
}

export default class PlayIbiraApp extends PlayIbiraAppLogic {
  static defaultProps = { start: 'login', nonce: 0 };

  render() {
    return PlayIbiraAppView({ ...this.props, ...this.renderVals() });
  }
}
