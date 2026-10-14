/* =========================================================
   Data (case studies and profile live in index.html as <article class="case"> blocks)
   ========================================================= */
const NUMBERS = [
  ['12+', 'Years of Marketing Experience', ['#e50914', '#4a0408']],
  ['10M+', 'PKR Monthly Ad Spend Managed', ['#f59e0b', '#5a2a02']],
  ['35%', 'Avg. ROAS Improvement', ['#10b981', '#033b2c']],
  ['25K+', 'Conversions Delivered', ['#6366f1', '#1a1a5c']],
];

/* Brand marks: Simple Icons (CC0), single-path 24x24 */
const BRAND_ICONS = {
  "meta": "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z",
  "googleads": "M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z",
  "tiktok": "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  "linkedin": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  "snapchat": "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z",
  "googleanalytics": "M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z",
  "googletagmanager": "M12.003 0a3 3 0 0 0-2.121 5.121l6.865 6.865-4.446 4.541 1.745 1.836a3.432 3.432 0 0 1 .7.739l.012.011-.001.002a3.432 3.432 0 0 1 .609 1.953 3.432 3.432 0 0 1-.09.78l7.75-7.647c.031-.029.067-.05.098-.08.023-.023.038-.052.06-.076a2.994 2.994 0 0 0-.06-4.166l-9-9A2.99 2.99 0 0 0 12.003 0zM8.63 2.133L.88 9.809a2.998 2.998 0 0 0 0 4.238l7.7 7.75a3.432 3.432 0 0 1-.077-.729 3.432 3.432 0 0 1 3.431-3.431 3.432 3.432 0 0 1 .826.101l-5.523-5.81 4.371-4.373-2.08-2.08c-.903-.904-1.193-2.183-.898-3.342zm3.304 16.004a2.932 2.932 0 0 0-2.931 2.931A2.932 2.932 0 0 0 11.934 24a2.932 2.932 0 0 0 2.932-2.932 2.932 2.932 0 0 0-2.932-2.931z",
  "looker": "M11.9475 0c-1.1598.0021-2.0982.944-2.096 2.1038a2.1 2.1 0 00.356 1.166l.895-.8959a.884.884 0 11.565.564l-.895.895c.9593.6478 2.2621.3953 2.91-.564.6478-.9593.3953-2.262-.564-2.91A2.096 2.096 0 0011.9475 0zm-.835 6.1128a3.2629 3.2629 0 00-.653-1.965l-1.164 1.162a1.667 1.667 0 01-.318 2.012l.632 1.5449a3.2819 3.2819 0 001.503-2.754zm-3.2499 1.666h-.03c-.9217.0009-1.6697-.7455-1.6707-1.6673-.001-.9217.7454-1.6697 1.6672-1.6707a1.669 1.669 0 01.9195.275l1.152-1.152c-1.4069-1.141-3.4724-.9257-4.6135.4811s-.9257 3.4723.481 4.6135a3.2799 3.2799 0 002.7275.6652l-.633-1.5439v-.001zm4.1279 1.3359c-.728 0-1.452.106-2.15.315l.922 2.2519c2.6872-.6819 5.4184.9438 6.1002 3.631.6818 2.6873-.9439 5.4184-3.6311 6.1002s-5.4184-.9439-6.1002-3.631c-.5682-2.2394.4655-4.5774 2.5041-5.6643l-.91-2.2449c-3.6908 1.808-5.2173 6.2657-3.4093 9.9567l.0005.001c1.808 3.6909 6.2657 5.2173 9.9567 3.4093l.001-.0005c3.6913-1.8071 5.2187-6.2645 3.4116-9.9558a7.4417 7.4417 0 00-6.6865-4.1696h-.008l-.001.001z",
  "semrush": "M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"
};

/* Outline icons for the strategy tiles (24x24, stroke) */
const LINE_ICONS = {
  funnel: '<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/>',
  budget: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9h9"/>',
  page: '<rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 9h18M9 14l3 3 1.5-4.5L18 14.5z"/>',
  audience: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.4 2.7-5.5 6-5.5s6 2.1 6 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.5c2.8 0 4.5 1.6 4.5 4"/>',
};

/* ink = logo colour on the tile; fx adds the TikTok-style colour split */
const CHANNELS = [
  { name: 'Meta Ads', icon: 'meta', grad: ['#0a7cff', '#082a66'], ink: '#fff' },
  { name: 'Google Ads', icon: 'googleads', grad: ['#4285f4', '#1b3d8f'], ink: '#fff' },
  { name: 'TikTok Ads', icon: 'tiktok', grad: ['#202020', '#000'], ink: '#fff', fx: 'glitch' },
  { name: 'LinkedIn Ads', icon: 'linkedin', grad: ['#0a66c2', '#06284d'], ink: '#fff' },
  { name: 'Snapchat Ads', icon: 'snapchat', grad: ['#fffc00', '#e8c200'], ink: '#111' },
];

const STRATEGY = [
  { name: 'Full-Funnel Growth Strategy', line: 'funnel', grad: ['#e50914', '#3a0408'], ink: '#fff' },
  { name: 'Budget & P&L Management', line: 'budget', grad: ['#10b981', '#06362b'], ink: '#fff' },
  { name: 'CRO & Landing Pages', line: 'page', grad: ['#f59e0b', '#4d2a04'], ink: '#fff' },
  { name: 'Audience Segmentation', line: 'audience', grad: ['#8b5cf6', '#25104d'], ink: '#fff' },
];

const TOOLS = [
  { name: 'Google Analytics 4', icon: 'googleanalytics', grad: ['#f9ab00', '#8a3d00'], ink: '#fff' },
  { name: 'Google Tag Manager', icon: 'googletagmanager', grad: ['#4285f4', '#1b3d8f'], ink: '#fff' },
  { name: 'Meta Pixel', icon: 'meta', grad: ['#0a7cff', '#082a66'], ink: '#fff' },
  { name: 'Looker Studio', icon: 'looker', grad: ['#2da5d5', '#0b3f59'], ink: '#fff' },
  { name: 'SEMrush', icon: 'semrush', grad: ['#ff642d', '#7a1d00'], ink: '#fff' },
  { name: 'Ahrefs', word: 'ahrefs', grad: ['#1f5eff', '#0a1f66'], ink: '#fff' },
];

const CONTACT = [
  { label: 'Email', value: 'kum.mirza91@gmail.com', href: 'mailto:kum.mirza91@gmail.com', grad: ['#e50914', '#3a0408'] },
  { label: 'LinkedIn', value: 'kumailalimirza ↗', href: 'https://www.linkedin.com/in/kumailalimirza', grad: ['#0a66c2', '#06284d'], external: true, icon: 'linkedin' },
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const gradient = (g) => `linear-gradient(135deg, ${g[0]}, ${g[1]})`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function smileSvg() {
  return `<svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="33" cy="40" r="6" fill="#fff"/><circle cx="67" cy="40" r="6" fill="#fff"/>
    <path d="M28 62q22 22 44 0" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
  </svg>`;
}

/* =========================================================
   Render rows
   ========================================================= */
const caseArticles = () => $$('#caseList article.case');
const splitList = (v) => (v ? v.split(',').map((x) => x.trim()).filter(Boolean) : []);

function renderCases() {
  $('#rowCases').innerHTML = caseArticles().map((a) => {
    const d = a.dataset;
    const logos = splitList(d.logos);
    const kicker = $('.case-kicker', a).textContent;
    return `
    <button class="card card-case" data-case="${esc(a.id)}" style="--g:linear-gradient(135deg, ${d.grad.split(',').join(', ')})" aria-label="Open case study: ${esc(d.card)}">
      ${logos[0] ? brandSvg(logos[0], 'brand-ghost') : ''}
      <span class="card-k">K</span>
      <span class="card-big">${esc(d.big)}</span>
      <span class="card-biglabel">${esc(d.biglabel)}</span>
      <span class="card-name">${esc(d.card)}</span>
      <span class="card-hover">
        <span class="card-play"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg></span>
        <span class="card-hover-tag">${esc(kicker)}</span>
        <span class="card-hover-line">${esc(d.hover)}</span>
      </span>
    </button>`;
  }).join('');
}

function renderNumbers() {
  $('#rowNumbers').innerHTML = NUMBERS.map(([n, label, g], i) => `
    <div class="top-item">
      <span class="top-rank" aria-hidden="true">${i + 1}</span>
      <div class="card card-stat" style="--g:${gradient(g)}">
        <span class="card-big">${esc(n)}</span>
        <span class="card-name">${esc(label)}</span>
      </div>
    </div>`).join('');
}

const brandSvg = (name, cls) =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${BRAND_ICONS[name]}"/></svg>`;
const lineSvg = (name, cls) =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${LINE_ICONS[name]}</svg>`;

function renderTiles(containerId, items) {
  $(containerId).innerHTML = items.map((t) => {
    const mark = t.icon ? brandSvg(t.icon, 'brand-logo') : t.line ? lineSvg(t.line, 'brand-logo') : `<span class="brand-word">${esc(t.word)}</span>`;
    const ghost = t.icon ? brandSvg(t.icon, 'brand-ghost') : t.line ? lineSvg(t.line, 'brand-ghost') : `<span class="brand-ghost brand-ghost-word">${esc(t.word)}</span>`;
    return `
    <div class="card card-tile card-brand${t.fx ? ' fx-' + t.fx : ''}" style="--g:${gradient(t.grad)}; --ink:${t.ink}">
      ${ghost}
      ${mark}
      <span class="card-tile-name">${esc(t.name)}</span>
    </div>`;
  }).join('');
}

function renderContact() {
  $('#rowContact').innerHTML = CONTACT.map((c) => {
    const inner = `
      ${c.icon ? brandSvg(c.icon, 'brand-ghost') : ''}
      <span class="card-tile-kicker">${esc(c.label)}</span>
      <span class="card-tile-name small">${esc(c.value)}</span>`;
    return c.href
      ? `<a class="card card-tile card-link" style="--g:${gradient(c.grad)}" href="${c.href}"${c.external ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>`
      : `<div class="card card-tile" style="--g:${gradient(c.grad)}">${inner}</div>`;
  }).join('');
}

/* =========================================================
   Row arrows
   ========================================================= */
let dragMoved = false;

function initRows() {
  $$('.row-wrap').forEach((wrap) => {
    const scroller = $('.row-scroller', wrap);
    const left = $('.row-arrow.left', wrap);
    const right = $('.row-arrow.right', wrap);
    const pager = document.createElement('div');
    pager.className = 'pager';
    pager.setAttribute('aria-hidden', 'true');
    wrap.parentElement.appendChild(pager);

    const update = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      left.hidden = scroller.scrollLeft < 8;
      right.hidden = scroller.scrollLeft > max - 8;
      // Netflix-style page dashes
      const pages = max > 8 ? Math.ceil(scroller.scrollWidth / scroller.clientWidth) : 0;
      if (pager.children.length !== pages) pager.innerHTML = '<i></i>'.repeat(pages);
      const cur = pages ? Math.min(pages - 1, Math.round((scroller.scrollLeft / max) * (pages - 1))) : 0;
      [...pager.children].forEach((d, i) => d.classList.toggle('on', i === cur));
    };
    const page = (dir) => scroller.scrollBy({ left: dir * scroller.clientWidth * 0.85, behavior: reduceMotion ? 'auto' : 'smooth' });

    left.addEventListener('click', () => page(-1));
    right.addEventListener('click', () => page(1));
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    // Click-and-drag scrolling with the mouse (touch already scrolls natively)
    let down = false, startX = 0, startLeft = 0;
    scroller.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; dragMoved = false; startX = e.clientX; startLeft = scroller.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 6) { dragMoved = true; scroller.classList.add('dragging'); }
      if (dragMoved) scroller.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      scroller.classList.remove('dragging');
      setTimeout(() => { dragMoved = false; }, 0);
    });

    update();
    wrap._update = update; // re-run once the dashboard is visible (sizes are 0 while hidden)
  });
}
const refreshRows = () => $$('.row-wrap').forEach((w) => w._update && w._update());

/* Scroll-triggered reveal: rows rise in and their cards stagger left to right */
function initReveal() {
  const rows = $$('.row');
  if (reduceMotion || !('IntersectionObserver' in window)) { rows.forEach((r) => r.classList.add('seen')); return; }
  $$('.row-scroller').forEach((sc) => [...sc.children].forEach((c, i) => c.style.setProperty('--i', i)));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('seen');
      $$('.card-stat .card-big', e.target).forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  rows.forEach((r) => { r.classList.add('reveal'); io.observe(r); });
}

function countUp(el) {
  const raw = el.textContent;
  const m = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!m || reduceMotion) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num);
  const dec = (num.split('.')[1] || '').length;
  const t0 = performance.now();
  const tick = (now) => {
    const p = Math.min((now - t0) / 1200, 1);
    el.textContent = pre + (target * (1 - Math.pow(1 - p, 3))).toFixed(dec) + post;
    if (p < 1) requestAnimationFrame(tick); else el.textContent = raw;
  };
  requestAnimationFrame(tick);
}

/* Hero parallax + fade as you scroll down */
const heroArt = $('.hero-art');
const heroContent = $('.hero-content');
function heroScroll() {
  if (reduceMotion) return;
  const y = Math.min(window.scrollY, window.innerHeight);
  heroArt.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0003})`;
  heroContent.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
  heroContent.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.4)));
}
window.addEventListener('scroll', heroScroll, { passive: true });

/* =========================================================
   Modal
   ========================================================= */
const modal = $('#modal');
let lastFocus = null;

/* Turn each .bars list into bars: width is relative to the best campaign in that list. */
function decorateBars(root) {
  $$('.bars', root).forEach((ol) => {
    const items = $$('li', ol);
    const max = Math.max(...items.map((li) => parseFloat(li.dataset.v) || 0));
    items.forEach((li, i) => {
      if ($('.b-track', li)) return;
      li.style.setProperty('--w', ((parseFloat(li.dataset.v) / max) * 100).toFixed(1) + '%');
      li.style.setProperty('--i', i);
      const track = document.createElement('span');
      track.className = 'b-track';
      track.innerHTML = '<span class="b-fill"></span>';
      li.insertBefore(track, $('.b-val', li));
    });
  });
}

function openModal(article, fromEl) {
  const d = article.dataset;
  $('#mBanner').style.setProperty('--g', `linear-gradient(135deg, ${d.grad.split(',').join(', ')})`);
  $('#mBigNum').textContent = d.big;
  $('#mLogo').innerHTML = splitList(d.logos).map((l) => brandSvg(l, 'banner-logo')).join('');
  $('#mKicker').textContent = $('.case-kicker', article).textContent;
  $('#mTitle').textContent = d.card || $('.case-title', article).textContent;

  // The pop-up shows the same article as the résumé view; the banner already carries the kicker.
  const clone = article.cloneNode(true);
  clone.removeAttribute('id');
  $$('.case-kicker', clone).forEach((el) => el.remove());
  $('#mContent').replaceChildren(clone);
  decorateBars(clone);

  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  $('#modalCard').scrollTop = 0;
  const mc = $('#modalCard');
  if (fromEl && !reduceMotion) {
    // Zoom out of the card that was clicked, like Netflix's expanding tile.
    const r = fromEl.getBoundingClientRect();
    const m = mc.getBoundingClientRect();
    mc.style.transformOrigin = `${r.left + r.width / 2 - m.left}px ${r.top + r.height / 2 - m.top}px`;
    mc.style.setProperty('--from', String(Math.min(0.5, r.width / m.width)));
  } else {
    mc.style.transformOrigin = '50% 30%';
    mc.style.setProperty('--from', '0.94');
  }
  requestAnimationFrame(() => {
    modal.classList.add('show');
    $('.modal-close').focus();
  });
}

function closeModal() {
  if (modal.hidden) return;
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
  setTimeout(() => { modal.hidden = true; }, reduceMotion ? 0 : 250);
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab' && !modal.hidden) {
    const f = $$('button, a[href]', $('#modalCard')).filter((el) => !el.disabled);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* =========================================================
   Profile gate -> dashboard
   ========================================================= */
const gate = $('#gate');
const app = $('#app');
app.inert = true; // the gate owns focus until a profile is chosen
const GREETINGS = {
  'Kumail Ali Mirza': 'Welcome back, Kumail',
};

$$('.profile').forEach((btn) => {
  const av = $('.avatar', btn);
  av.style.background = btn.dataset.color;
  av.innerHTML = smileSvg();
});

$$('.profile').forEach((btn) => {
  btn.addEventListener('click', () => enter(btn));
});

function enter(btn, jumpTo) {
  const who = btn.dataset.who;
  const color = btn.dataset.color;
  $('#greeting').textContent = GREETINGS[who] || 'Welcome';
  const navAv = $('#navAvatar');
  navAv.style.background = color;
  navAv.innerHTML = smileSvg();

  gate.classList.add('leaving');
  btn.classList.add('chosen');

  const reveal = () => {
    document.body.classList.remove('is-gate');
    gate.hidden = true;
    app.inert = false;
    window.scrollTo(0, 0);
    app.classList.add('in');
    refreshRows();
    initReveal();
    heroScroll();
    if (jumpTo) {
      const t = $(jumpTo);
      if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - 70);
    }
    $('#playFeatured').focus({ preventScroll: true });
  };
  if (reduceMotion) { reveal(); return; }
  // Profile zooms, then the K logo sting plays, then the dashboard fades in.
  setTimeout(() => {
    const intro = $('#intro');
    intro.hidden = false;
    requestAnimationFrame(() => intro.classList.add('play'));
    setTimeout(() => {
      reveal();
      intro.classList.add('out');
      setTimeout(() => { intro.hidden = true; intro.classList.remove('play', 'out'); }, 600);
    }, 1500);
  }, 600);
}

$('#gateResume').addEventListener('click', (e) => {
  e.preventDefault();
  enter($('.profile'), '#resume');
});

$('#switchProfile').addEventListener('click', () => {
  closeModal();
  app.classList.remove('in');
  $$('.row').forEach((r) => r.classList.remove('seen'));
  app.inert = true;
  gate.hidden = false;
  gate.classList.remove('leaving');
  $$('.profile.chosen').forEach((b) => b.classList.remove('chosen'));
  document.body.classList.add('is-gate');
  window.scrollTo(0, 0);
  $('.profile').focus();
});

/* =========================================================
   Wiring
   ========================================================= */
renderCases();
decorateBars(document);
renderNumbers();
renderTiles('#rowChannels', CHANNELS);
renderTiles('#rowStrategy', STRATEGY);
renderTiles('#rowTools', TOOLS);
renderContact();
initRows();

$('#year').textContent = new Date().getFullYear();

document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-case]');
  if (card && !dragMoved) openModal(document.getElementById(card.dataset.case), card);
});
$('#playFeatured').addEventListener('click', (e) => openModal(document.getElementById('case-apparel'), e.currentTarget));
$('#openAbout').addEventListener('click', (e) => openModal(document.getElementById('profile'), e.currentTarget));

/* Smooth scroll with nav offset */
$$('[data-scroll]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = $(a.getAttribute('href'));
    if (!target) return;
    const y = a.getAttribute('href') === '#top' ? 0 : target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

/* Nav background + active link */
const nav = $('#nav');
const links = $$('.nav-links a');
const sections = links.map((a) => $(a.getAttribute('href')));
function onScroll() {
  nav.classList.toggle('solid', window.scrollY > 40);
  const probe = window.scrollY + 140;
  let current = 0;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top + window.scrollY <= probe) current = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
