import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  <div class="corner corner--tl">Tanofeed &mdash; Est. 2026</div>

  <main class="stage">
    <span class="kicker"><span class="rule"></span>Agência de Criadores de Conteúdo<span class="rule"></span></span>

    <h1 class="wordmark">TANO<span class="accent">FEED</span></h1>

    <div class="ornament" aria-hidden="true">&#10022;</div>

    <h2 class="headline">
      <span class="line">Em</span>
      <span class="line line--accent">breve</span>
    </h2>

    <p class="lede">
      Uma curadoria seletiva de talento digital em Portugal.
      Gestão de criadores, produção de conteúdo e parcerias de excelência.
    </p>

    <a class="cta" href="mailto:rayhan@tanofeed.com">
      <span>Fala connosco</span>
      <span class="cta-arrow" aria-hidden="true">&rarr;</span>
    </a>
  </main>

  <section class="brands">
    <span class="brands-label"><span class="rule"></span>Já trabalhámos com<span class="rule"></span></span>
    <ul class="brands-list">
      <li>KFC</li>
      <li>M&amp;M&rsquo;s</li>
      <li>Garnier</li>
      <li>Carrefour</li>
      <li>Extreme</li>
      <li>Hugo Boss</li>
      <li>Rimmel London</li>
      <li>L&rsquo;Or&eacute;al Paris</li>
      <li>Superdry</li>
      <li>E mais</li>
    </ul>
  </section>

  <footer class="footer">
    <span>&copy; ${new Date().getFullYear()} Tanofeed</span>
    <span class="footer-sep">&mdash;</span>
    <span>Todos os direitos reservados</span>
  </footer>
`;

const glow = document.querySelector('.glow');
window.addEventListener('pointermove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  glow.style.setProperty('--x', `${x}%`);
  glow.style.setProperty('--y', `${y}%`);
});
