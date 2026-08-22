const NAV_LINKS = [
  { href: '/index.html', label: 'Início' },
  { href: '/sobre.html', label: 'Sobre Nós' },
  { href: '/criadores.html', label: 'Criadores' },
  { href: '/servicos.html', label: 'Serviços' },
  { href: '/marcas.html', label: 'Marcas' },
];

function navLinksHtml(current, links = NAV_LINKS) {
  return links
    .map(
      (l) =>
        `<a href="${l.href}"${current === l.href ? ' aria-current="page"' : ''}>${l.label}</a>`
    )
    .join('');
}

export function renderNav(current) {
  return `
    <header class="site-nav" id="site-nav">
      <a class="site-nav__mark" href="/index.html">TANO<span>FEED</span></a>
      <ul class="site-nav__links">${navLinksHtml(current)}</ul>
      <a class="site-nav__cta" href="/contacto.html">Fala Connosco</a>
      <button class="site-nav__toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
          <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      </button>
    </header>
    <div class="site-nav__mobile" id="nav-mobile">
      <button class="site-nav__mobile-close" id="nav-close" aria-label="Fechar menu">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      </button>
      ${navLinksHtml(current, [...NAV_LINKS, { href: '/contacto.html', label: 'Contacto' }])}
    </div>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="site-footer__top">
          <div class="site-footer__brand">
            <h3>Agência de influencer marketing. Agente pessoal de cada criador.</h3>
            <p>Sedeada em Portugal, a Tanofeed liga marcas a criadores de conteúdo e acompanha cada criador de perto, não como mais um nome numa lista.</p>
          </div>
          <div class="site-footer__col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="/sobre.html">Sobre Nós</a></li>
              <li><a href="/criadores.html">Criadores</a></li>
              <li><a href="/servicos.html">Serviços</a></li>
              <li><a href="/marcas.html">Marcas</a></li>
              <li><a href="/contacto.html">Contacto</a></li>
            </ul>
          </div>
          <div class="site-footer__col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:rayhan@tanofeed.com">rayhan@tanofeed.com</a></li>
              <li><a href="/contacto.html">Falar com a equipa</a></li>
            </ul>
          </div>
        </div>
        <div class="site-footer__bottom">
          <span>&copy; ${year} Tanofeed, Todos os direitos reservados</span>
          <span>Portugal</span>
        </div>
      </div>
    </footer>
  `;
}

export function mountChrome() {
  const glow = document.querySelector('.glow');
  if (glow) {
    window.addEventListener('pointermove', (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glow.style.setProperty('--x', `${x}%`);
      glow.style.setProperty('--y', `${y}%`);
    });
  }

  const nav = document.getElementById('site-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.getElementById('nav-toggle');
  const closeBtn = document.getElementById('nav-close');
  const mobile = document.getElementById('nav-mobile');
  if (toggle && mobile) {
    const open = () => {
      mobile.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      mobile.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  }
}
