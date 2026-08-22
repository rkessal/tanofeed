import './base.css';
import './pages/home.css';
import { renderNav, renderFooter, mountChrome } from './layout.js';

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  ${renderNav('/index.html')}

  <main class="main">
    <section class="hero wrap">
      <span class="eyebrow hero__eyebrow">Agência de Influencer Marketing</span>
      <h1>Menos ruído.<br />Mais influência.</h1>
      <div class="hero__foot">
        <p>A Tanofeed liga marcas a criadores de conteúdo em Portugal, com estratégia, não apenas com alcance.</p>
        <span class="hero__scroll">Scroll ↓</span>
      </div>
    </section>

    <section class="intro">
      <div class="wrap intro__grid">
        <span class="eyebrow">O que fazemos</span>
        <p>
          Somos uma agência <strong>exclusivamente</strong> de influencer marketing: não fazemos SEO, não fazemos branding
          corporativo, não fazemos gestão de ads genérica. Gerimos criadores, desenhamos campanhas de influência e ligamos
          marcas às pessoas certas para as representar.
        </p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Serviços</span>
          <h2>Focados, do início ao fim de campanha.</h2>
        </div>
        <div class="svc-teaser">
          <div class="svc-card">
            <span>01</span>
            <div>
              <h3>Agente Pessoal</h3>
              <p>Um agente dedicado que acompanha a tua carreira de perto, não um departamento.</p>
            </div>
          </div>
          <div class="svc-card">
            <span>02</span>
            <div>
              <h3>Estratégia de Campanhas</h3>
              <p>Planeamento de campanhas de influência alinhadas aos objetivos da marca.</p>
            </div>
          </div>
          <div class="svc-card">
            <span>03</span>
            <div>
              <h3>Matchmaking Marca-Criador</h3>
              <p>Seleção criteriosa do criador certo para cada marca e campanha.</p>
            </div>
          </div>
        </div>
        <p style="margin-top: var(--space-xl)">
          <a class="link-arrow" href="/servicos.html">Ver todos os serviços <span class="link-arrow__glyph">→</span></a>
        </p>
      </div>
    </section>

    <section class="split wrap">
      <div class="split-row">
        <div class="ph ph--4-5"><span class="ph__label">Imagem</span></div>
        <div class="split-row__body">
          <span class="eyebrow">Para marcas</span>
          <h3>Campanhas de influência com direção estratégica.</h3>
          <p>Da seleção de criadores ao relatório final, cuidamos de cada etapa da parceria para que a campanha sirva os seus objetivos, não apenas o algoritmo.</p>
          <a class="btn" href="/contacto.html"><span>Falar sobre uma campanha</span><span class="cta-arrow">→</span></a>
        </div>
      </div>
      <div class="split-row split-row--reverse">
        <div class="split-row__body">
          <span class="eyebrow">Para criadores</span>
          <h3>Um agente pessoal. Não uma agência.</h3>
          <p>Não vais ser um perfil numa lista gerida por várias pessoas. Tens um agente que te acompanha em cada decisão: negociações, contratos, oportunidades, como alguém do teu lado, não um departamento.</p>
          <a class="btn" href="/criadores.html"><span>Candidatar-me</span><span class="cta-arrow">→</span></a>
        </div>
        <div class="ph ph--4-5"><span class="ph__label">Imagem</span></div>
      </div>
    </section>

    <section class="brand-strip wrap">
      <div class="brand-strip__head">
        <span class="eyebrow">Marcas com quem trabalhámos</span>
        <a class="link-arrow" href="/marcas.html">Ver todas <span class="link-arrow__glyph">→</span></a>
      </div>
      <ul class="brand-strip__list">
        <li>KFC</li>
        <li>M&amp;M&rsquo;s</li>
        <li>Garnier</li>
        <li>Carrefour</li>
        <li>Extreme</li>
        <li>Hugo Boss</li>
        <li>Rimmel London</li>
        <li>L&rsquo;Oréal Paris</li>
        <li>Superdry</li>
      </ul>
    </section>

    <section class="cta-strip wrap">
      <h2>Pronto para começar uma parceria?</h2>
      <a class="btn btn--solid" href="/contacto.html"><span>Vamos conversar</span><span class="cta-arrow">→</span></a>
    </section>
  </main>

  ${renderFooter()}
`;

mountChrome();
