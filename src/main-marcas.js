import './base.css';
import './pages/marcas.css';
import { renderNav, renderFooter, mountChrome } from './layout.js';

const BRANDS = [
  'KFC',
  'M&amp;M&rsquo;s',
  'Garnier',
  'Carrefour',
  'Extreme',
  'Hugo Boss',
  'Rimmel London',
  'L&rsquo;Oréal Paris',
  'Superdry',
];

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  ${renderNav('/marcas.html')}

  <main class="main">
    <section class="cat-hero wrap">
      <span class="eyebrow">Marcas</span>
      <h1>Marcas com quem já trabalhámos.</h1>
      <p>Campanhas de influencer marketing para marcas de beleza, moda, grande consumo e retalho, em Portugal e além.</p>
    </section>

    <div class="cat-grid wrap">
      ${BRANDS.map(
        (b, i) => `
        <div class="cat-tile">
          <span>${String(i + 1).padStart(2, '0')}</span>
          <h3>${b}</h3>
        </div>
      `
      ).join('')}
    </div>

    <section class="cta-strip wrap">
      <h2>A sua marca podia estar nesta lista.</h2>
      <a class="btn btn--solid" href="/contacto.html"><span>Falar sobre uma campanha</span><span class="cta-arrow">→</span></a>
    </section>
  </main>

  ${renderFooter()}
`;

mountChrome();
