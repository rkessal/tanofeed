import './base.css';
import './pages/contacto.css';
import { renderNav, renderFooter, mountChrome } from './layout.js';

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  ${renderNav('/contacto.html')}

  <main class="main">
    <section class="ct-hero wrap">
      <span class="eyebrow">Contacto</span>
      <h1>Vamos conversar.</h1>
      <p>Diga-nos se é uma marca à procura de criadores ou um criador à procura de representação — respondemos sempre por email.</p>
    </section>

    <div class="ct-paths wrap">
      <div class="ct-path">
        <h2>Sou uma marca</h2>
        <p>Fale-nos sobre a campanha, o público que quer alcançar e o prazo que tem em mente.</p>
        <a class="btn" href="mailto:rayhan@tanofeed.com?subject=Parceria%20de%20Marca">
          <span>Falar sobre uma campanha</span><span class="cta-arrow">→</span>
        </a>
      </div>
      <div class="ct-path">
        <h2>Sou criador</h2>
        <p>Conte-nos sobre o seu conteúdo, a sua audiência e onde publica.</p>
        <a class="btn" href="mailto:rayhan@tanofeed.com?subject=Candidatura%20de%20Criador">
          <span>Candidatar-me</span><span class="cta-arrow">→</span>
        </a>
      </div>
    </div>

    <div class="ct-direct wrap">
      <a href="mailto:rayhan@tanofeed.com">rayhan@tanofeed.com</a>
      <span>Portugal</span>
    </div>
  </main>

  ${renderFooter()}
`;

mountChrome();
