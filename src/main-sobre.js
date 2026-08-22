import './base.css';
import './pages/sobre.css';
import { renderNav, renderFooter, mountChrome } from './layout.js';

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  ${renderNav('/sobre.html')}

  <main class="main">
    <section class="doc-hero wrap">
      <span class="eyebrow">Sobre Nós</span>
      <p class="doc-hero__lede" style="margin-top: var(--space-lg)">
        Influencer marketing merece uma agência que só faz isso.
      </p>
    </section>

    <article class="doc">
      <div class="doc__block">
        <h2>Porque só fazemos influência</h2>
        <p>
          Podíamos ter sido mais uma agência de marketing com um departamento de influenciadores. Escolhemos não ser.
          Achamos que fazer uma coisa bem exige foco total — por isso é só isto que a Tanofeed faz: gerir criadores,
          desenhar campanhas de influência e ligar marcas às pessoas certas para as representar.
        </p>
        <p>
          Nada de SEO, nada de branding corporativo, nada de gestão de tráfego pago genérica. Se o projeto não passa
          por um criador de conteúdo, não é connosco.
        </p>
      </div>

      <div class="doc__block">
        <h2>Como trabalhamos</h2>
        <p>
          Cada parceria começa por perceber o que a marca precisa de comunicar e que criador — pela audiência, pelo
          tom, pela credibilidade no tema — consegue fazer isso de forma genuína. Preferimos <strong>menos parcerias,
          melhor ajustadas</strong> a listas longas de perfis que apenas cumprem números.
        </p>
        <p>
          Do lado dos criadores, isso significa negociação séria, contratos claros e oportunidades que respeitam o
          trabalho de construir uma audiência — não pedidos de conteúdo grátis em troca de exposição.
        </p>
      </div>

      <div class="doc__block">
        <h2>Onde estamos</h2>
        <p>
          A Tanofeed está sedeada em Portugal e trabalha com marcas nacionais e internacionais. A lista de marcas com
          quem já colaborámos está <a class="link-arrow" href="/marcas.html">na página Marcas</a>.
        </p>
      </div>

      <div class="doc__signoff">
        <p>Quer perceber se somos a agência certa para a sua marca ou para si como criador?</p>
        <a class="btn" href="/contacto.html"><span>Fala Connosco</span><span class="cta-arrow">→</span></a>
      </div>
    </article>
  </main>

  ${renderFooter()}
`;

mountChrome();
