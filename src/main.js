import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  <div class="corner corner--tl">TF/26</div>
  <div class="corner corner--tr">PT&nbsp;&nbsp;·&nbsp;&nbsp;EN</div>

  <main class="stage">
    <span class="kicker"><span class="dot"></span>Agência de criadores de conteúdo</span>

    <h1 class="wordmark">TANO<span class="accent">FEED</span></h1>

    <h2 class="headline">
      <span class="line">Em</span>
      <span class="line line--accent">breve</span>
    </h2>

    <p class="lede">
      Estamos a preparar algo novo para talentos e marcas em Portugal.
      Gestão de criadores, produção de conteúdo e parcerias que fazem crescer.
    </p>

    <a class="cta" href="mailto:ola@tanofeed.com">
      <span>Fala connosco</span>
      <span class="cta-arrow" aria-hidden="true">&rarr;</span>
    </a>
  </main>

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
