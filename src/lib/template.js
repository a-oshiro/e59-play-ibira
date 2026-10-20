// Small helpers the generated *View.jsx files use to match Claude Design's template rules.

// `{{ x }}` inside a string attribute renders null/undefined as empty text.
export const s = v => v ?? '';

// `<sc-for list>` treats anything that isn't an array as an empty list.
export const arr = v => (Array.isArray(v) ? v : []);

// A whole `style="{{ x }}"` may be a CSS string; React wants an object.
export const css = v => {
  if (typeof v !== 'string') return v;
  const o = {};
  for (const decl of v.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    o[prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = decl.slice(i + 1).trim();
  }
  return o;
};
