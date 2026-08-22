import './base.css';
import './pages/servicos.css';
import { renderNav, renderFooter, mountChrome } from './layout.js';

const SERVICES = [
  {
    num: '01',
    title: 'Agente Pessoal',
    desc: 'Cada criador tem um agente dedicado, não um gestor de conta partilhado, alguém que acompanha a carreira de perto, do posicionamento às oportunidades certas.',
  },
  {
    num: '02',
    title: 'Estratégia de Campanhas',
    desc: 'Desenhamos campanhas de influência a partir dos objetivos reais da marca, não de um briefing genérico copiado de outra indústria.',
  },
  {
    num: '03',
    title: 'Matchmaking Marca-Criador',
    desc: 'Selecionamos os criadores certos para cada campanha com base em audiência, tom e credibilidade, não apenas em número de seguidores.',
  },
  {
    num: '04',
    title: 'Produção de Conteúdo',
    desc: 'Direção criativa e acompanhamento de produção para conteúdo nativo, feito para performar na plataforma onde vive.',
  },
  {
    num: '05',
    title: 'Negociação & Contratos',
    desc: 'Tratamos da parte comercial entre marcas e criadores: condições claras, prazos definidos e sem surpresas para nenhuma das partes.',
  },
  {
    num: '06',
    title: 'Relatórios & Performance',
    desc: 'Acompanhamos cada campanha até ao fim, com relatórios que servem para decidir a próxima parceria, não só para arquivar.',
  },
];

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  ${renderNav('/servicos.html')}

  <main class="main">
    <section class="svc-hero wrap">
      <span class="eyebrow">Serviços</span>
      <h1>Só o que é influencer marketing. Nada mais.</h1>
      <p>Sem pacotes de marketing genéricos anexados. Cada serviço existe para tornar uma parceria entre marca e criador mais forte.</p>
    </section>

    <div class="wrap">
      ${SERVICES.map(
        (s, i) => `
        <div class="svc-row${i % 2 === 1 ? ' svc-row--reverse' : ''}">
          <div class="ph ph--16-9"><span class="ph__label">Imagem</span></div>
          <div class="svc-row__body">
            <span class="svc-row__num">${s.num}</span>
            <h2>${s.title}</h2>
            <p>${s.desc}</p>
          </div>
        </div>
      `
      ).join('')}
    </div>

    <section class="cta-strip wrap">
      <h2>Não sabe bem por onde começar?</h2>
      <a class="btn btn--solid" href="/contacto.html"><span>Fala Connosco</span><span class="cta-arrow">→</span></a>
    </section>
  </main>

  ${renderFooter()}
`;

mountChrome();
