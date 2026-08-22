import './base.css';
import './pages/criadores.css';
import { renderNav, renderFooter, mountChrome } from './layout.js';

const CATEGORIES = [
  {
    id: 'moda',
    name: 'Moda & Lifestyle',
    desc: 'Criadores que moldam tendências de estilo e apresentam marcas no seu dia a dia.',
    featured: true,
  },
  { id: 'beleza', name: 'Beleza', desc: 'Skincare, maquilhagem e rotinas de beleza com credibilidade junto da audiência.' },
  { id: 'fitness', name: 'Fitness & Saúde', desc: 'Treino, nutrição e bem-estar contados por quem vive disso todos os dias.' },
  { id: 'gaming', name: 'Gaming & Tech', desc: 'Reviews, gameplay e conteúdo tecnológico para públicos exigentes.' },
  { id: 'viagens', name: 'Viagens', desc: 'Destinos, experiências e conteúdo de viagem com alcance nacional e internacional.' },
  { id: 'humor', name: 'Humor & Entretenimento', desc: 'Formatos criativos e virais que aproximam marcas de audiências jovens.' },
  { id: 'familia', name: 'Parentalidade', desc: 'Vida em família e conteúdo próximo para marcas que falam com pais e mães.' },
  { id: 'food', name: 'Food', desc: 'Gastronomia, receitas e experiências à mesa que geram conversa real.' },
];

document.querySelector('#app').innerHTML = `
  <div class="noise"></div>
  <div class="glow"></div>

  ${renderNav('/criadores.html')}

  <main class="main">
    <section class="pg-hero wrap">
      <span class="eyebrow">Criadores</span>
      <h1>As áreas que procuramos representar.</h1>
      <p>
        Estamos a construir a rede de criadores da Tanofeed com cuidado — por isso, em vez de perfis, mostramos as
        áreas onde já estamos a selecionar talento. Se é criador de conteúdo, veja onde se encaixa e candidate-se.
      </p>
    </section>

    <div class="pg-filters wrap" id="pg-filters">
      <button class="pg-filter is-active" data-filter="all">Todas</button>
      ${CATEGORIES.map((c) => `<button class="pg-filter" data-filter="${c.id}">${c.name}</button>`).join('')}
    </div>

    <section class="pg-grid wrap" id="pg-grid">
      ${CATEGORIES.map(
        (c) => `
        <a class="pg-card" data-category="${c.id}" href="/contacto.html">
          <div class="ph ph--4-5"><span class="ph__label">Imagem</span></div>
          <h3>${c.name}</h3>
          <p>${c.desc}</p>
        </a>
      `
      ).join('')}
    </section>

    <section class="pg-cta wrap">
      <div>
        <h2>És criador de conteúdo?</h2>
        <p>Queremos conhecer o teu trabalho — mesmo que a tua área não esteja na lista acima.</p>
      </div>
      <a class="btn btn--solid" href="mailto:rayhan@tanofeed.com?subject=Candidatura%20de%20Criador">
        <span>Candidatar-me</span><span class="cta-arrow">→</span>
      </a>
    </section>
  </main>

  ${renderFooter()}
`;

mountChrome();

const filters = document.querySelectorAll('.pg-filter');
const cards = document.querySelectorAll('.pg-card');
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const value = btn.dataset.filter;
    cards.forEach((card) => {
      const match = value === 'all' || card.dataset.category === value;
      card.classList.toggle('pg-card--hidden', !match);
    });
  });
});
