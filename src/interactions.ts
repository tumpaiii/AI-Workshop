export function mountInteractions() {
  const controller = new AbortController();
  const { signal } = controller;
  const observers: IntersectionObserver[] = [];
  const frames = new Set<number>();

  function observe(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    const observer = new IntersectionObserver(callback, options);
    observers.push(observer);
    return observer;
  }

  function queue(callback: FrameRequestCallback) {
    const frame = requestAnimationFrame(now => {
      frames.delete(frame);
      callback(now);
    });
    frames.add(frame);
  }

  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('ready');
    const reveal = observe((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        const number = entry.target.querySelector('[data-count]');
        if (number) counts.observe(number);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    const counts = observe((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const number = entry.target as HTMLElement;
        const end = Number(number.dataset.count);
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min(1, (now - start) / 950);
          const value = progress === 1 ? end : Math.round(end * (1 - (1 - progress) ** 2));
          number.textContent = String(value).padStart(2, '0');
          if (progress < 1) queue(tick);
        }
        queue(tick);
      }
    }, { threshold: 0.55 });
    document.querySelectorAll('.heading, .statement, .tile, .curriculum-list, .curriculum-media').forEach(element => reveal.observe(element));
    document.querySelectorAll('[data-count]').forEach(number => {
      number.textContent = '00';
    });
  }

  const topicRows = [...document.querySelectorAll('.topic')];
  const topicPhotos = [...document.querySelectorAll('.curriculum-photo')];
  function selectTopic(index: number) {
    topicRows.forEach((row, i) => {
      const active = i === index;
      row.classList.toggle('is-active', active);
      row.querySelector('button')!.setAttribute('aria-expanded', String(active));
      row.querySelector('.topic-copy')!.setAttribute('aria-hidden', String(!active));
      topicPhotos[i].classList.toggle('is-active', active);
      topicPhotos[i].setAttribute('aria-hidden', String(!active));
    });
  }
  topicRows.forEach((row, index) => {
    const button = row.querySelector('button')!;
    button.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') selectTopic(index);
    }, { signal });
    button.addEventListener('click', () => selectTopic(index), { signal });
  });

  const highlights = document.querySelector<HTMLElement>(".highlights")!;
  const motionToggle = highlights.querySelector<HTMLButtonElement>(".reel-toggle")!;
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    motionToggle.hidden = false;
    const reelVisibility = observe(([entry]) => {
      highlights.classList.toggle('playing', entry.isIntersecting);
    });
    reelVisibility.observe(highlights.querySelector<HTMLElement>(".highlights-gallery")!);
    motionToggle.addEventListener('click', () => {
      const paused = highlights.toggleAttribute('data-paused');
      motionToggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    }, { signal });
  }


  const honest = document.querySelector<HTMLElement>(".honest")!;
  const honestScroll = honest.querySelector<HTMLElement>(".honest-scroll")!;
  const honestMotion = matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
  let honestFrame = 0;
  function updateHonestMotion() {
    honestFrame = 0;
    honest.classList.toggle('motion', honestMotion.matches);
    if (!honestMotion.matches) return;
    const distance = honestScroll.offsetHeight - honest.querySelector<HTMLElement>(".honest-stage")!.offsetHeight;
    const progress = Math.max(0, Math.min(1, -honestScroll.getBoundingClientRect().top / distance));
    honest.style.setProperty('--travel', `${progress * (innerHeight * 1.04 + honest.querySelector<HTMLElement>(".honest-card")!.offsetHeight)}px`);
  }
  function queueHonestMotion() {
    if (!honestFrame) honestFrame = requestAnimationFrame(updateHonestMotion);
  }
  addEventListener('scroll', queueHonestMotion, {passive:true, signal});
  addEventListener('resize', queueHonestMotion, { signal });
  honestMotion.addEventListener('change', queueHonestMotion, { signal });
  updateHonestMotion();

  const registerDialog = document.querySelector<HTMLDialogElement>("#register-dialog")!;
  document.querySelector<HTMLButtonElement>("#register-open")!.addEventListener('click', () => registerDialog.showModal(), { signal });
  const closingMarquee = document.querySelector<HTMLElement>(".closing-marquee")!;
  if ('IntersectionObserver' in window) {
    observe(([entry]) => {
      closingMarquee.classList.toggle('is-moving', entry.isIntersecting);
    }).observe(closingMarquee);
  }

  if (document.documentElement.classList.contains('ready')) {
    const sectionReveal = observe((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, {threshold: 0.1});
    document.querySelectorAll<HTMLElement>('.price-head,.price-card,.faq-head,.faq-list details,.footer-columns>div,.footer-base,.footer-wordmark').forEach(element => {
      const position = [...element.parentElement!.children].indexOf(element);
      element.style.setProperty('--stagger', Math.min(position, 3) * 65 + 'ms');
      element.classList.add('section-reveal');
      sectionReveal.observe(element);
    });
  }

  const animatedHero = document.querySelector<HTMLElement>(".bentro-hero")!;
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let heroFrame = 0;
  function updateHeroTerrain() {
    heroFrame = 0;
    const heroBounds = animatedHero.getBoundingClientRect();
    if (heroBounds.bottom <= 0) return;
    const offset = motionPreference.matches ? 0 : Math.max(0, -heroBounds.top) * 0.22;
    animatedHero.style.setProperty('--terrain-offset', offset + 'px');
  }
  addEventListener('scroll', () => {
    if (!heroFrame) heroFrame = requestAnimationFrame(updateHeroTerrain);
  }, { passive: true, signal });
  motionPreference.addEventListener('change', updateHeroTerrain, { signal });
  updateHeroTerrain();

  return () => {
    controller.abort();
    observers.forEach(observer => observer.disconnect());
    frames.forEach(frame => cancelAnimationFrame(frame));
    cancelAnimationFrame(honestFrame);
    cancelAnimationFrame(heroFrame);
    document.documentElement.classList.remove('ready');
  };
}
