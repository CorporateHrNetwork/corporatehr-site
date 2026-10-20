/* Zermatt-style viewport motion: Waypoint/fadeInUp behavior reproduced with IntersectionObserver. */
const selectors=['img','.card','.logo-card','.testimonials blockquote','.metric','.feature-list > div','[class*="banner"]','[class*="hero-panel"]'];
const apply=()=>{const items=document.querySelectorAll(selectors.join(','));if(!items.length)return;items.forEach(el=>{if(el.dataset.zermattMotion==='1')return;el.dataset.zermattMotion='1';el.classList.add(el.tagName==='IMG'?'zermatt-image-reveal':'zermatt-reveal')});if(!('IntersectionObserver'in window)){items.forEach(el=>el.classList.add('is-visible'));return}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');observer.unobserve(entry.target)})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});items.forEach(el=>{if(!el.classList.contains('is-visible'))observer.observe(el)})};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();

// Shared viewport zoom: observes new route content and replays on re-entry.
const crnZoomSelector = 'img:not([aria-hidden="true"]):not([role="presentation"]), .card, .logo-card, .metric, .panel, .summary-card, .stat-card, .feature-list > div, .testimonials blockquote, [class$="-card"], [class$="-panel"]';
if ('IntersectionObserver' in window) {
  const seen = new WeakSet();
  const viewport = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => target.classList.toggle('crn-zoom-visible', isIntersecting));
  }, {threshold: .08});
  function observeTree(root) {
    if (!(root instanceof Element)) return;
    const candidates = [...root.querySelectorAll(crnZoomSelector)];
    if (root.matches(crnZoomSelector)) candidates.push(root);
    candidates.forEach(el => {
      if (seen.has(el)) return;
      seen.add(el); viewport.observe(el);
    });
  }
  function startZoom() {
    const root = document.querySelector('#root') || document.querySelector('main');
    if (!root) return;
    observeTree(root);
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(observeTree))).observe(root, {childList:true, subtree:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startZoom, {once:true});
  else startZoom();
}
