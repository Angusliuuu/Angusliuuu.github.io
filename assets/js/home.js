(function () {
  document.querySelectorAll('a[href]').forEach((link) => {
    let destination;

    try {
      destination = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (!/^https?:$/.test(destination.protocol) || destination.origin === window.location.origin) return;

    link.target = '_blank';
    const rel = new Set((link.rel || '').split(/\s+/).filter(Boolean));
    rel.add('noopener');
    rel.add('noreferrer');
    link.rel = Array.from(rel).join(' ');
  });

  const sections = document.querySelectorAll('.reveal');
  if (!sections.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach((section) => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  sections.forEach((section) => observer.observe(section));
})();
