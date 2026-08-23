const SUPABASE_URL = 'https://qkoyxbpqqtkeszkivpm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_s6WUbw40XYnCBGvHT4KkbQ_1tF06l2d';

const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const animeDatabase = [
  {
    id: 1,
    title: 'Solo Leveling',
    year: 2024,
    rating: 4.9,
    genres: ['Action', 'Fantasy', 'Adventure'],
    studio: 'A-1 Pictures',
    image: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg',
    episodes: 12,
    duration: '24 min',
    age: '16+',
    synopsis: 'A shadowed hunter awakens a lethal power as the world teeters on the edge of a catastrophic dungeon break.',
    featured: true
  },
  {
    id: 2,
    title: 'Kaiju No. 8',
    year: 2024,
    rating: 4.8,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    studio: 'Production I.G',
    image: 'https://cdn.myanimelist.net/images/anime/1937/148155.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1937/148155.jpg',
    episodes: 12,
    duration: '24 min',
    age: '13+',
    synopsis: 'A city defense officer uncovers a monstrous fate as the line between soldier and beast begins to dissolve.',
    featured: true
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    year: 2024,
    rating: 4.9,
    genres: ['Dark Fantasy', 'Action', 'Supernatural'],
    studio: 'MAPPA',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    episodes: 24,
    duration: '24 min',
    age: '16+',
    synopsis: 'A cursed teenager fights through brutal battles to protect the world from malicious spirits and ancient threats.',
    featured: true
  },
  {
    id: 4,
    title: 'Demon Slayer',
    year: 2024,
    rating: 4.9,
    genres: ['Adventure', 'Fantasy', 'Action'],
    studio: 'ufotable',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    episodes: 24,
    duration: '24 min',
    age: '16+',
    synopsis: 'The Demon Slayer Corps pushes deeper into the underworld as tragedy and courage shape their final stand.',
    featured: true
  },
  {
    id: 5,
    title: 'Attack on Titan',
    year: 2023,
    rating: 4.9,
    genres: ['Action', 'Drama', 'Dark Fantasy'],
    studio: 'Wit Studio',
    image: 'https://cdn.myanimelist.net/images/anime/10/47399.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/10/47399.jpg',
    episodes: 87,
    duration: '24 min',
    age: '16+',
    synopsis: 'Scars of the past erupt into a war of survival against monstrous titans and a collapsing world.',
    featured: true
  },
  {
    id: 6,
    title: 'My Hero Academia',
    year: 2023,
    rating: 4.7,
    genres: ['Superhero', 'Action', 'School'],
    studio: 'Bones',
    image: 'https://cdn.myanimelist.net/images/anime/10/75614.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/10/75614.jpg',
    episodes: 24,
    duration: '24 min',
    age: '13+',
    synopsis: 'A powerless youth rises through the ranks of hero academia and becomes a symbol of hope.',
    featured: false
  },
  {
    id: 7,
    title: 'Chainsaw Man',
    year: 2022,
    rating: 4.8,
    genres: ['Action', 'Horror', 'Fantasy'],
    studio: 'MAPPA',
    image: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    episodes: 12,
    duration: '24 min',
    age: '18+',
    synopsis: 'A desperate devil hunter becomes a human-machine hybrid and uncovers a brutal world of loyalty and chaos.',
    featured: true
  },
  {
    id: 8,
    title: 'Bleach',
    year: 2024,
    rating: 4.6,
    genres: ['Action', 'Fantasy', 'Adventure'],
    studio: 'Studio Pierrot',
    image: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
    episodes: 20,
    duration: '24 min',
    age: '13+',
    synopsis: 'An ex-shinigami tests the boundaries of power and purpose as the spirit world demands his return.',
    featured: false
  },
  {
    id: 9,
    title: 'Frieren: Beyond Journey\'s End',
    year: 2024,
    rating: 4.9,
    genres: ['Fantasy', 'Drama', 'Adventure'],
    studio: 'Madhouse',
    image: 'https://cdn.myanimelist.net/images/anime/1015/138100.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1015/138100.jpg',
    episodes: 28,
    duration: '24 min',
    age: '13+',
    synopsis: 'A legendary mage journeys beyond the battlefield to understand grief, remembrance, and the passage of time.',
    featured: false
  },
  {
    id: 10,
    title: 'Cyberpunk: Edgerunners',
    year: 2022,
    rating: 4.9,
    genres: ['Sci-Fi', 'Action', 'Cyberpunk'],
    studio: 'Trigger',
    image: 'https://cdn.myanimelist.net/images/anime/1818/126436.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1818/126436.jpg',
    episodes: 10,
    duration: '24 min',
    age: '17+',
    synopsis: 'An ambitious street runner enters Night City in search of power, identity, and a shot at rewriting destiny.',
    featured: true
  },
  {
    id: 11,
    title: 'Blue Lock',
    year: 2023,
    rating: 4.6,
    genres: ['Sports', 'Drama', 'Action'],
    studio: '8bit',
    image: 'https://cdn.myanimelist.net/images/anime/1676/130737.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1676/130737.jpg',
    episodes: 24,
    duration: '24 min',
    age: '13+',
    synopsis: 'The world\'s most ruthless striker experiment forces talented players to evolve or be left behind.',
    featured: false
  },
  {
    id: 12,
    title: 'Dr. Stone',
    year: 2024,
    rating: 4.7,
    genres: ['Adventure', 'Sci-Fi', 'Comedy'],
    studio: 'TMS Entertainment',
    image: 'https://cdn.myanimelist.net/images/anime/1676/123229.jpg',
    hero: 'https://cdn.myanimelist.net/images/anime/1676/123229.jpg',
    episodes: 22,
    duration: '24 min',
    age: '13+',
    synopsis: 'A modern genius wakes in a stone age world and turns science into a weapon against time itself.',
    featured: false
  }
];

const episodeMap = {
  'Solo Leveling': [
    { id: 1, number: 1, title: 'The First Encounter', duration: '23:50', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg' },
    { id: 2, number: 2, title: 'The Awakening', duration: '24:10', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg' },
    { id: 3, number: 3, title: 'The Silent Rift', duration: '24:07', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg' },
    { id: 4, number: 4, title: 'Blood in the Dust', duration: '24:25', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg' },
    { id: 5, number: 5, title: 'A Hunter\'s Promise', duration: '23:54', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg' },
    { id: 6, number: 6, title: 'The Shadow Realm', duration: '24:16', server: 'Server 3', thumbnail: 'https://cdn.myanimelist.net/images/anime/1768/138164.jpg' }
  ],
  'Jujutsu Kaisen': [
    { id: 1, number: 1, title: 'The Cursed Womb', duration: '23:41', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg' },
    { id: 2, number: 2, title: 'Grieve and Fight', duration: '24:02', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg' },
    { id: 3, number: 3, title: 'The Strongest Weapon', duration: '24:18', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg' },
    { id: 4, number: 4, title: 'Dark Domain', duration: '23:48', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg' },
    { id: 5, number: 5, title: 'Too Late', duration: '24:36', server: 'Server 3', thumbnail: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg' }
  ],
  'Demon Slayer': [
    { id: 1, number: 1, title: 'The First Hashira', duration: '24:09', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg' },
    { id: 2, number: 2, title: 'The Splintered Blade', duration: '24:01', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg' },
    { id: 3, number: 3, title: 'The Night of the Demon', duration: '24:22', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg' },
    { id: 4, number: 4, title: 'A Crying Silence', duration: '23:58', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg' }
  ],
  'Attack on Titan': [
    { id: 1, number: 1, title: 'To You, 2,000 Years Later', duration: '24:09', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/10/47399.jpg' },
    { id: 2, number: 2, title: 'The Wall', duration: '24:17', server: 'Server 1', thumbnail: 'https://cdn.myanimelist.net/images/anime/10/47399.jpg' },
    { id: 3, number: 3, title: 'The Battle of Trost', duration: '24:45', server: 'Server 2', thumbnail: 'https://cdn.myanimelist.net/images/anime/10/47399.jpg' }
  ]
};

const state = {
  user: null,
  accent: '#8A2BE2',
  darkMode: true,
  activeHeroIndex: 0,
  authTab: 'login',
  authMethod: 'email',
  dashboardTab: 'appearance',
  modalOpen: null,
  searchQuery: '',
  selectedCategory: 'updated',
  selectedGenre: 'All',
  selectedServer: 'Server 1',
  selectedEpisode: 1,
  selectedAnime: animeDatabase[0],
  otpCountdown: 30,
  otpTimerId: null,
  episodeQuery: '',
  currentAnimeTitle: 'Solo Leveling'
};

const heroItems = animeDatabase.filter((item) => item.featured).slice(0, 4);

const els = {
  heroCarousel: document.getElementById('heroCarousel'),
  heroDots: document.getElementById('heroDots'),
  prevSlide: document.getElementById('prevSlide'),
  nextSlide: document.getElementById('nextSlide'),
  searchInput: document.getElementById('globalSearch'),
  searchResults: document.getElementById('searchResults'),
  catalogFilters: document.getElementById('catalogFilters'),
  genreFilters: document.getElementById('genreFilters'),
  themeTrigger: document.querySelector('.theme-trigger'),
  themeMenu: document.querySelector('.theme-menu'),
  authModal: document.getElementById('authModal'),
  otpModal: document.getElementById('otpModal'),
  profileModal: document.getElementById('profileModal'),
  issueModal: document.getElementById('issueModal'),
  openProfile: document.getElementById('openProfile'),
  authTabs: document.querySelectorAll('.auth-tab'),
  authMethodButtons: document.querySelectorAll('.method-button'),
  authForm: document.getElementById('authForm'),
  otpDigits: document.querySelectorAll('.otp-digit'),
  resendOtp: document.getElementById('resendOtp'),
  dashboardTabs: document.querySelectorAll('.dashboard-tab'),
  dashboardPanels: document.querySelectorAll('.dashboard-panel'),
  themeToggle: document.getElementById('themeToggle'),
  authHeading: document.getElementById('authHeading'),
  episodeSearch: document.getElementById('episodeSearch'),
  episodeList: document.getElementById('episodeList'),
  serverTabs: document.querySelectorAll('.server-tab'),
  videoPlayToggle: document.getElementById('videoPlayToggle'),
  speedSelect: document.getElementById('speedSelect'),
  qualitySelect: document.getElementById('qualitySelect'),
  audioTrack: document.getElementById('audioTrack'),
  volumeSlider: document.getElementById('volumeSlider'),
  playerTitle: document.getElementById('playerTitle'),
  playerMeta: document.getElementById('playerMeta'),
  playerEpisodeLabel: document.getElementById('playerEpisodeLabel'),
  videoStage: document.getElementById('videoStage')
};

function showToast(message, type = 'info', title = 'Notice') {
  const container = document.getElementById('aniToastContainer') || (() => {
    const node = document.createElement('div');
    node.id = 'aniToastContainer';
    node.setAttribute('aria-live', 'polite');
    node.style.position = 'fixed';
    node.style.right = '20px';
    node.style.bottom = '20px';
    node.style.zIndex = '1500';
    node.style.display = 'flex';
    node.style.flexDirection = 'column';
    node.style.gap = '10px';
    document.body.appendChild(node);
    return node;
  })();

  const icons = { success: '✓', error: '!', info: 'i' };
  const colors = {
    success: { bg: 'rgba(38, 214, 155, 0.15)', border: '#26d69b' },
    error: { bg: 'rgba(255, 76, 119, 0.15)', border: '#ff4d72' },
    info: { bg: 'rgba(15, 21, 35, 0.9)', border: '#4b5d8f' }
  };

  const toast = document.createElement('div');
  toast.style.background = colors[type]?.bg || colors.info.bg;
  toast.style.border = `1px solid ${colors[type]?.border || colors.info.border}`;
  toast.style.borderRadius = '12px';
  toast.style.color = '#f5f7ff';
  toast.style.boxShadow = '0 16px 30px rgba(0, 0, 0, 0.3)';
  toast.style.padding = '12px 14px';
  toast.style.minWidth = '220px';
  toast.style.maxWidth = '320px';
  toast.style.fontSize = '13px';
  toast.style.lineHeight = '1.4';
  toast.style.transition = 'all 0.2s ease';
  toast.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:${type === 'error' ? 'rgba(255,76,119,0.2)' : type === 'success' ? 'rgba(38,214,155,0.18)' : 'rgba(138,43,226,0.2)'};font-weight:700;">${icons[type] || 'i'}</span>
      <div>
        <div style="font-weight:700;margin-bottom:2px;">${title}</div>
        <div style="color:#d9def2;">${message}</div>
      </div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 220);
  }, 2600);
}

function setAccent(color, options = {}) {
  const { persist = true } = options;
  state.accent = color;
  document.documentElement.style.setProperty('--accent', color);
  document.documentElement.style.setProperty('--accent-strong', color);

  if (color === '#00F3FF') {
    document.documentElement.style.setProperty('--accent-soft', 'rgba(0, 243, 255, 0.22)');
  } else if (color === '#FF0055') {
    document.documentElement.style.setProperty('--accent-soft', 'rgba(255, 0, 85, 0.22)');
  } else {
    document.documentElement.style.setProperty('--accent-soft', 'rgba(138, 43, 226, 0.22)');
  }

  document.querySelectorAll('.theme-option').forEach((option) => {
    option.classList.toggle('active', option.dataset.accent === color);
  });

  document.querySelectorAll('.accent-swatch').forEach((swatch) => {
    swatch.classList.toggle('active', swatch.dataset.accent === color);
  });

  if (persist) {
    persistUserPreference({ accent_color: color });
  }
}

function setThemeMode(isDark, options = {}) {
  const { persist = true } = options;
  state.darkMode = isDark;
  document.body.classList.toggle('light-theme', !isDark);
  els.themeToggle?.classList.toggle('active', isDark);

  if (persist) {
    persistUserPreference({ dark_mode: isDark });
  }
}

function getFilteredAnimeList() {
  let items = [...animeDatabase];

  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    items = items.filter((anime) => {
      const haystack = `${anime.title} ${anime.genres.join(' ')} ${anime.studio} ${anime.year}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  if (state.selectedGenre !== 'All') {
    items = items.filter((anime) => anime.genres.includes(state.selectedGenre));
  }

  switch (state.selectedCategory) {
    case 'updated':
      items = [...items].sort((a, b) => b.year - a.year);
      break;
    case 'trending':
      items = [...items].sort((a, b) => b.rating - a.rating);
      break;
    case 'rated':
      items = [...items].sort((a, b) => b.rating - a.rating);
      break;
    case 'recommended':
      items = [...items].sort((a, b) => b.rating - a.rating).slice(0, 5);
      break;
    default:
      break;
  }

  return [...items].slice(0, 8);
}

function renderGenreFilters() {
  const genres = ['All', ...new Set(animeDatabase.flatMap((anime) => anime.genres))];
  if (!els.genreFilters) return;
  els.genreFilters.innerHTML = genres
    .map(
      (genre) => `
        <button class="genre-pill ${state.selectedGenre === genre ? 'active' : ''}" type="button" data-genre="${genre}">${genre}</button>
      `
    )
    .join('');
}

function renderHero() {
  if (!els.heroCarousel) return;

  els.heroCarousel.innerHTML = heroItems
    .map(
      (slide, index) => `
        <article class="hero-slide ${index === state.activeHeroIndex ? 'active' : ''}" style="background-image: url('${slide.hero || slide.image}')">
          <div class="hero-content">
            <div class="hero-badges">
              <span class="badge primary">ENG DUB</span>
              <span class="badge">4K HD</span>
              <span class="badge">EP ${slide.episodes}</span>
              <span class="badge">${slide.age}</span>
            </div>
            <h1 class="hero-title">${slide.title}</h1>
            <div class="meta-row">
              <span class="tag">⭐ ${slide.rating.toFixed(1)}</span>
              <span class="tag">${slide.year}</span>
              <span class="tag">${slide.duration}</span>
            </div>
            <p class="hero-synopsis">${slide.synopsis}</p>
            <div class="hero-actions">
              <button class="primary-button" type="button">Start Watching Ep 1</button>
              <button class="secondary-button" type="button" data-watchlist-id="${slide.id}">Add to Watchlist</button>
            </div>
            <div class="hero-meta">
              <span>${slide.genres.slice(0, 2).join(' • ')}</span>
              <span>English Dub Available</span>
              <span>${slide.studio}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  if (!els.heroDots) return;
  els.heroDots.innerHTML = heroItems
    .map(
      (_, index) => `
        <button class="hero-dot ${index === state.activeHeroIndex ? 'active' : ''}" type="button" data-slide-index="${index}" aria-label="Go to slide ${index + 1}"></button>
      `
    )
    .join('');
}

function renderHeroSlider() {
  renderHero();
}

function renderAnimeCard(item) {
  return `
    <article class="anime-card" data-anime-id="${item.id}">
      <div class="card-art" style="background-image: url('${item.image}')">
        <div class="card-overlays">
          <div class="card-top">
            <span class="card-badge">ENG DUB</span>
            <button class="card-bookmark" type="button" aria-label="Add ${item.title} to watchlist" data-watchlist-id="${item.id}">♥</button>
          </div>
          <div class="card-bottom">
            <span class="card-hd">HD</span>
            <span class="card-hd">EP ${item.episodes}</span>
          </div>
        </div>

        <div class="card-preview">
          <div class="preview-header">
            <span>${item.title}</span>
            <span>★ ${item.rating.toFixed(1)}</span>
          </div>
          <div class="preview-tags">
            ${item.genres.slice(0, 2).map((genre) => `<span>${genre}</span>`).join('')}
          </div>
          <p>${item.synopsis}</p>
          <div class="preview-footer">
            <span>${item.episodes} Episodes</span>
            <span>${item.studio}</span>
          </div>
          <button class="preview-button" type="button" data-watchlist-id="${item.id}">Watch Now</button>
        </div>
      </div>

      <div class="card-info">
        <div class="card-meta">
          <span>${item.year}</span>
          <span class="card-rating"><span class="star">★</span> ${item.rating.toFixed(1)}</span>
        </div>
        <h3 class="card-name">${item.title}</h3>
        <div class="card-footer">
          <span class="card-episodes">${item.genres[0]}</span>
          <button class="card-cta" type="button" data-watchlist-id="${item.id}">Watch</button>
        </div>
      </div>
    </article>
  `;
}

function renderGrid(containerId, items) {
  const container = document.getElementById(containerId) || document.querySelector(`#${containerId}`);
  if (!container) return;
  container.innerHTML = items.map(renderAnimeCard).join('');

  container.querySelectorAll('.anime-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.card-bookmark') || event.target.closest('.card-cta') || event.target.closest('.preview-button')) {
        return;
      }
      const id = Number(card.dataset.animeId);
      const anime = animeDatabase.find((item) => item.id === id);
      if (anime) {
        state.selectedAnime = anime;
        updatePlayer(anime);
      }
    });
  });
}

function renderAnimeCards() {
  const fallbackSections = [
    ['recentlyUpdated', getFilteredAnimeList().slice(0, 5)],
    ['trendingNow', [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 5)],
    ['topRated', [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 5)],
    ['recommended', [...animeDatabase].filter((anime) => anime.genres.includes('Fantasy') || anime.genres.includes('Action')).slice(0, 5)]
  ];

  fallbackSections.forEach(([sectionId, items]) => {
    renderGrid(sectionId, items);
    renderGrid(`${sectionId}-grid`, items);
  });
}

function renderAllSections() {
  const updated = getFilteredAnimeList().slice(0, 5);
  const trending = [...animeDatabase].sort((a, b) => b.rating - a.rating).filter((anime) => anime.title !== state.selectedAnime?.title).slice(0, 5);
  const rated = [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 5);
  const recommended = [...animeDatabase].filter((anime) => anime.genres.includes('Fantasy') || anime.genres.includes('Action')).slice(0, 5);

  renderGrid('recentlyUpdated', updated);
  renderGrid('trendingNow', trending);
  renderGrid('topRated', rated);
  renderGrid('recommended', recommended);
  renderGrid('recently-updated-grid', updated);
  renderGrid('trending-grid', trending);
  renderGrid('top-rated-grid', rated);
  renderGrid('for-you-grid', recommended);
  renderAnimeCards();
}

function showSearchResults(items) {
  if (!items.length) {
    els.searchResults.innerHTML = '<div class="search-result-item"><span>No matches found</span></div>';
    els.searchResults.classList.remove('hidden');
    return;
  }

  els.searchResults.innerHTML = items
    .slice(0, 5)
    .map(
      (item) => `
        <button class="search-result-item" type="button" data-result-id="${item.id}">
          <div class="search-result-meta">
            <strong>${item.title}</strong>
            <small>${item.genres.join(' • ')} • ${item.year}</small>
          </div>
          <span>${item.rating.toFixed(1)} ★</span>
        </button>
      `
    )
    .join('');

  els.searchResults.classList.remove('hidden');
}

function updateSearchMatches() {
  const query = state.searchQuery.trim().toLowerCase();

  if (!query) {
    els.searchResults.classList.add('hidden');
    return;
  }

  const matches = animeDatabase.filter((anime) => {
    const haystack = `${anime.title} ${anime.genres.join(' ')} ${anime.studio} ${anime.year} ${anime.rating}`.toLowerCase();
    return haystack.includes(query);
  });

  showSearchResults(matches);
}

function updatePlayer(anime) {
  state.selectedAnime = anime;
  state.currentAnimeTitle = anime.title;
  const videoBackground = anime.hero || anime.image;

  els.videoStage.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(7,9,15,0.7)), url('${videoBackground}')`;
  els.playerTitle.textContent = anime.title;
  els.playerMeta.textContent = `${anime.year} • ${anime.genres[0]} • ${anime.episodes} Episodes`;
  els.playerEpisodeLabel.textContent = `EP 1 • ${anime.age} • English Dub`;

  const episodesForAnime = episodeMap[anime.title] || [
    { number: 1, title: 'The First Encounter', duration: '23:50', server: 'Server 1', thumbnail: anime.image },
    { number: 2, title: 'The Awakening', duration: '24:10', server: 'Server 1', thumbnail: anime.image }
  ];

  state.selectedEpisode = episodesForAnime[0]?.number || 1;
  renderEpisodeList(episodesForAnime);
}

function renderEpisodeList(episodesForAnime = episodeMap[state.currentAnimeTitle] || []) {
  const selectedTitle = state.currentAnimeTitle || state.selectedAnime?.title || 'Solo Leveling';
  const list = (episodesForAnime.length ? episodesForAnime : episodeMap[selectedTitle] || []).filter((episode) => {
    const query = state.episodeQuery.trim().toLowerCase();
    const serverMatch = episode.server === state.selectedServer;
    if (!query) return serverMatch;
    return serverMatch && `${episode.number} ${episode.title}`.toLowerCase().includes(query);
  });

  els.episodeList.innerHTML = (list.length ? list : []).map((episode) => `
    <button class="episode-item ${Number(episode.number) === Number(state.selectedEpisode) ? 'active' : ''}" type="button" data-episode-number="${episode.number}">
      <div class="left">
        <span class="episode-thumb" style="background-image: url('${episode.thumbnail || state.selectedAnime?.image}')"></span>
        <div class="episode-meta">
          <strong>Episode ${episode.number}</strong>
          <span>${episode.title}</span>
        </div>
      </div>
      <span class="episode-duration">${episode.duration}</span>
    </button>
  `).join('') || '<div class="episode-item"><div class="episode-meta"><strong>No episodes found</strong><span>Try another filter.</span></div></div>';

  els.episodeList.querySelectorAll('.episode-item').forEach((item) => {
    item.addEventListener('click', () => {
      state.selectedEpisode = Number(item.dataset.episodeNumber);
      renderEpisodeList(episodeMap[selectedTitle] || []);
      els.playerEpisodeLabel.textContent = `EP ${state.selectedEpisode} • ${state.selectedAnime?.age || '16+'} • English Dub`;
    });
  });
}

function setModal(modalName, shouldOpen) {
  const map = {
    authModal: els.authModal,
    otpModal: els.otpModal,
    profileModal: els.profileModal,
    issueModal: els.issueModal
  };

  Object.entries(map).forEach(([key, element]) => {
    const open = key === modalName && shouldOpen;
    if (element) {
      element.classList.toggle('hidden', !open);
      element.setAttribute('aria-hidden', String(!open));
    }
  });

  if (shouldOpen) {
    state.modalOpen = modalName;
  } else if (state.modalOpen === modalName) {
    state.modalOpen = null;
  }
}

function setAuthTab(tab) {
  state.authTab = tab;
  els.authTabs.forEach((button) => button.classList.toggle('active', button.dataset.authTab === tab));
  els.authHeading.textContent = tab === 'login' ? 'Welcome back' : 'Create your account';
}

function setMethod(method) {
  state.authMethod = method;
  els.authMethodButtons.forEach((button) => button.classList.toggle('active', button.dataset.method === method));
  const phoneRow = document.querySelector('.phone-row');
  const passwordInput = document.querySelector('.auth-form input[type="password"]');

  if (method === 'phone') {
    phoneRow?.classList.remove('hidden');
    phoneRow?.classList.add('visible');
    if (passwordInput) passwordInput.placeholder = 'Create your password';
  } else {
    phoneRow?.classList.add('hidden');
    phoneRow?.classList.remove('visible');
    if (passwordInput) passwordInput.placeholder = 'Enter your password';
  }
}

function startOtpCountdown() {
  if (state.otpTimerId) clearInterval(state.otpTimerId);
  state.otpCountdown = 30;

  const tick = () => {
    state.otpCountdown -= 1;
    if (state.otpCountdown <= 0) {
      els.resendOtp.textContent = 'Resend Code';
      clearInterval(state.otpTimerId);
      state.otpTimerId = null;
      return;
    }
    els.resendOtp.textContent = `Resend Code in ${state.otpCountdown}s`;
  };

  tick();
  state.otpTimerId = setInterval(tick, 1000);
}

function setupOtpInputBehavior() {
  els.otpDigits.forEach((input, index) => {
    input.addEventListener('input', (event) => {
      const value = event.target.value.replace(/\D/g, '').slice(0, 1);
      event.target.value = value;
      if (value && index < els.otpDigits.length - 1) {
        els.otpDigits[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && !input.value && index > 0) {
        els.otpDigits[index - 1].focus();
      }
    });
  });
}

function renderDashboardTab(tab) {
  state.dashboardTab = tab;
  els.dashboardTabs.forEach((button) => button.classList.toggle('active', button.dataset.dashboardTab === tab));
  els.dashboardPanels.forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === tab));
}

function nextSlide() {
  state.activeHeroIndex = (state.activeHeroIndex + 1) % heroItems.length;
  renderHero();
}

function prevSlide() {
  state.activeHeroIndex = (state.activeHeroIndex - 1 + heroItems.length) % heroItems.length;
  renderHero();
}

function getInitials(name) {
  const value = (name || 'Guest').trim();
  if (!value) return 'G';
  return value
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('') || value[0].toUpperCase();
}

function syncUserUI() {
  const userFallback = state.user?.user_metadata?.full_name || state.user?.email?.split('@')[0] || 'Guest';
  const initials = getInitials(userFallback);

  document.querySelectorAll('.profile-avatar').forEach((avatar) => {
    avatar.textContent = initials;
  });

  const profileHeading = document.querySelector('.profile-header-identity h3');
  if (profileHeading) {
    profileHeading.textContent = state.user ? (state.user.user_metadata?.full_name || userFallback) : 'Guest';
  }

  const profileMetaStrong = document.querySelector('.profile-meta strong');
  const profileMetaSmall = document.querySelector('.profile-meta small');
  if (profileMetaStrong) profileMetaStrong.textContent = state.user ? userFallback : 'Guest';
  if (profileMetaSmall) profileMetaSmall.textContent = state.user ? 'Premium' : 'Guest';
}

async function persistUserPreference(payload = {}) {
  if (!supabase || !state.user) return false;

  const safePayload = {
    id: state.user.id,
    accent_color: state.accent,
    dark_mode: state.darkMode,
    updated_at: new Date().toISOString(),
    ...payload
  };

  const { error } = await supabase.from('profiles').upsert(safePayload, { onConflict: 'id' });
  if (error) {
    showToast('Failed to save your profile preferences.', 'error', 'Profile');
    return false;
  }

  return true;
}

async function loadProfilePreferences() {
  if (!supabase || !state.user) return;

  const { data, error } = await supabase.from('profiles').select('accent_color, dark_mode').eq('id', state.user.id).maybeSingle();
  if (error) {
    console.warn('Unable to load profile preferences:', error.message);
    return;
  }

  if (!data) return;

  if (data.accent_color) {
    setAccent(data.accent_color, { persist: false });
  }

  if (typeof data.dark_mode === 'boolean') {
    setThemeMode(Boolean(data.dark_mode), { persist: false });
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();

  if (!supabase) {
    showToast('Supabase is not loaded. Check the client script and network connection.', 'error', 'Auth');
    return;
  }

  const emailField = document.querySelector('.auth-form input[type="email"]');
  const passwordField = document.querySelector('.auth-form input[type="password"]');

  if (!emailField || !passwordField) {
    showToast('The auth form is incomplete.', 'error', 'Auth');
    return;
  }

  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  if (!email || !password) {
    showToast('Please enter both email and password.', 'error', 'Auth');
    return;
  }

  if (state.authTab === 'signup') {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin || 'http://localhost' }
    });

    if (error) {
      showToast(error.message, 'error', 'Sign up');
      return;
    }

    state.user = data?.user || null;
    syncUserUI();
    showToast('Account created. Please confirm your email to finish sign-in.', 'success', 'Sign up');
    setModal('authModal', false);
    setModal('otpModal', true);
    startOtpCountdown();
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    showToast(error.message, 'error', 'Login');
    return;
  }

  state.user = data?.user || null;
  syncUserUI();
  setModal('authModal', false);
  setModal('otpModal', false);
  showToast('Welcome back. You are now signed in.', 'success', 'Login');
}

async function handleLogout() {
  if (!supabase) {
    showToast('Supabase is not loaded.', 'error', 'Logout');
    return;
  }

  const { error } = await supabase.auth.signOut();
  if (error) {
    showToast(error.message, 'error', 'Logout');
    return;
  }

  state.user = null;
  syncUserUI();
  setModal('profileModal', false);
  showToast('You have been signed out.', 'info', 'Logout');
}

async function addToWatchlist(anime) {
  if (!anime) return;

  if (!supabase) {
    showToast('Supabase is not available. Watchlist sync is disabled.', 'error', 'Watchlist');
    return;
  }

  if (!state.user) {
    showToast('Please log in to save items to your watchlist.', 'error', 'Watchlist');
    setModal('authModal', true);
    return;
  }

  const payload = {
    user_id: state.user.id,
    anime_id: anime.id,
    title: anime.title,
    year: anime.year,
    rating: anime.rating,
    genres: anime.genres,
    studio: anime.studio,
    image: anime.image,
    hero: anime.hero,
    synopsis: anime.synopsis,
    duration: anime.duration,
    episodes: anime.episodes,
    age: anime.age,
    added_at: new Date().toISOString()
  };

  const { error } = await supabase.from('watchlist').insert(payload);
  if (error) {
    showToast(error.message || 'Unable to add this anime to your watchlist.', 'error', 'Watchlist');
    return;
  }

  showToast(`${anime.title} was added to your watchlist.`, 'success', 'Watchlist');
}

function ensureLogoutButton() {
  const header = document.querySelector('.profile-header');
  if (!header) return;

  let logoutButton = document.getElementById('logoutButton');
  if (!logoutButton) {
    logoutButton = document.createElement('button');
    logoutButton.id = 'logoutButton';
    logoutButton.type = 'button';
    logoutButton.className = 'ghost-button';
    logoutButton.textContent = state.user ? 'Log Out' : 'Login';
    logoutButton.addEventListener('click', async () => {
      if (!state.user) {
        setModal('profileModal', false);
        setModal('authModal', true);
        return;
      }
      await handleLogout();
    });
    header.appendChild(logoutButton);
  }

  logoutButton.textContent = state.user ? 'Log Out' : 'Login';
}

function bindEvents() {
  els.prevSlide.addEventListener('click', prevSlide);
  els.nextSlide.addEventListener('click', nextSlide);

  els.heroDots.addEventListener('click', (event) => {
    const dot = event.target.closest('.hero-dot');
    if (!dot) return;
    state.activeHeroIndex = Number(dot.dataset.slideIndex);
    renderHero();
  });

  setInterval(() => {
    nextSlide();
  }, 5500);

  els.searchInput.addEventListener('input', (event) => {
    state.searchQuery = event.target.value;
    updateSearchMatches();
    renderAllSections();
  });

  els.searchResults.addEventListener('click', (event) => {
    const result = event.target.closest('.search-result-item');
    if (!result) return;
    const id = Number(result.dataset.resultId);
    const match = animeDatabase.find((anime) => anime.id === id);
    if (match) {
      state.searchQuery = match.title;
      els.searchInput.value = match.title;
      state.selectedGenre = 'All';
      renderGenreFilters();
      renderAllSections();
      updatePlayer(match);
      els.searchResults.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.theme-trigger') && !event.target.closest('.theme-option')) {
      els.themeMenu.classList.add('hidden');
    }

    const watchlistTrigger = event.target.closest('[data-watchlist-id]');
    if (watchlistTrigger) {
      const id = Number(watchlistTrigger.dataset.watchlistId);
      const anime = animeDatabase.find((item) => item.id === id);
      if (anime) {
        addToWatchlist(anime);
      }
    }
  });

  els.themeTrigger.addEventListener('click', () => {
    els.themeMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('.theme-option').forEach((button) => {
    button.addEventListener('click', () => {
      setAccent(button.dataset.accent);
      els.themeMenu.classList.add('hidden');
    });
  });

  document.querySelectorAll('.accent-swatch').forEach((button) => {
    button.addEventListener('click', () => {
      setAccent(button.dataset.accent);
    });
  });

  els.openProfile.addEventListener('click', () => setModal('profileModal', true));

  document.querySelectorAll('[data-close]').forEach((button) => {
    button.addEventListener('click', () => {
      setModal(button.dataset.close, false);
    });
  });

  document.querySelectorAll('.auth-tab').forEach((button) => {
    button.addEventListener('click', () => setAuthTab(button.dataset.authTab));
  });

  document.querySelectorAll('.method-button').forEach((button) => {
    button.addEventListener('click', () => setMethod(button.dataset.method));
  });

  els.authForm.addEventListener('submit', handleAuthSubmit);

  els.resendOtp.addEventListener('click', () => {
    if (!state.otpTimerId) {
      startOtpCountdown();
    }
  });

  document.getElementById('verifyOtp').addEventListener('click', () => {
    const values = Array.from(els.otpDigits).map((digit) => digit.value).join('');
    if (values.length === 6 && values.split('').every((digit) => digit !== '')) {
      setModal('otpModal', false);
      setThemeMode(true);
      showToast('Verification complete. Your account is ready.', 'success', 'Access');
      return;
    }
    els.otpDigits.forEach((digit) => {
      digit.style.borderColor = 'rgba(255, 77, 109, 0.9)';
    });
    showToast('Please enter the full 6-digit code.', 'error', 'Verification');
  });

  els.dashboardTabs.forEach((button) => {
    button.addEventListener('click', () => renderDashboardTab(button.dataset.dashboardTab));
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    setThemeMode(!state.darkMode);
  });

  els.episodeSearch.addEventListener('input', (event) => {
    state.episodeQuery = event.target.value;
    renderEpisodeList(episodeMap[state.currentAnimeTitle] || []);
  });

  els.serverTabs.forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedServer = button.dataset.server;
      els.serverTabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.server === state.selectedServer));
      renderEpisodeList(episodeMap[state.currentAnimeTitle] || []);
    });
  });

  document.getElementById('openIssueModal').addEventListener('click', () => setModal('issueModal', true));
  document.querySelector('.issue-form').addEventListener('submit', (event) => {
    event.preventDefault();
    setModal('issueModal', false);
    showToast('Issue report sent. Thanks for helping us improve the stream.', 'success', 'Support');
  });

  els.videoPlayToggle.addEventListener('click', () => {
    const playButton = document.querySelector('.play-toggle');
    const nextValue = playButton.textContent === '▶' ? '❚❚' : '▶';
    playButton.textContent = nextValue;
    els.videoPlayToggle.textContent = nextValue;
  });

  document.querySelector('.play-toggle').addEventListener('click', () => {
    const playButton = document.querySelector('.play-toggle');
    const nextValue = playButton.textContent === '▶' ? '❚❚' : '▶';
    playButton.textContent = nextValue;
    els.videoPlayToggle.textContent = nextValue;
  });

  els.speedSelect.addEventListener('change', (event) => {
    const speed = Number(event.target.value);
    document.querySelector('.timecode').textContent = `22:${Math.round(speed * 10)} / 24:00`;
  });

  els.volumeSlider.addEventListener('input', (event) => {
    const value = Number(event.target.value);
    event.target.style.accentColor = value > 60 ? 'var(--accent)' : '#b0b7d1';
  });

  document.querySelectorAll('.filter-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedCategory = button.dataset.category;
      document.querySelectorAll('.filter-pill').forEach((pill) => pill.classList.toggle('active', pill.dataset.category === state.selectedCategory));
      renderAllSections();
    });
  });

  document.querySelectorAll('.genre-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedGenre = button.dataset.genre;
      renderGenreFilters();
      renderAllSections();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.modalOpen) {
      setModal(state.modalOpen, false);
    }
  });
}

async function initSupabase() {
  if (!supabase) {
    showToast('Supabase client failed to load. Please make sure the script is included before app.js.', 'error', 'Supabase');
    return;
  }

  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.warn('Session lookup failed:', error.message);
  }

  if (session?.user) {
    state.user = session.user;
    syncUserUI();
    await loadProfilePreferences();
  }

  supabase.auth.onAuthStateChange(async (event, nextSession) => {
    state.user = nextSession?.user || null;
    syncUserUI();
    ensureLogoutButton();

    if (state.user) {
      await loadProfilePreferences();
      setModal('authModal', false);
      setModal('otpModal', false);
      setModal('profileModal', false);
      showToast(event === 'SIGNED_OUT' ? 'Signed out successfully.' : 'Authentication updated.', 'success', 'Account');
    } else if (event === 'SIGNED_OUT') {
      showToast('You have been signed out.', 'info', 'Account');
    }
  });
}

function initialize() {
  setThemeMode(true, { persist: false });
  setAccent('#8A2BE2', { persist: false });
  renderGenreFilters();
  renderHero();
  renderAnimeCards();
  renderAllSections();
  updatePlayer(state.selectedAnime);
  bindEvents();
  setupOtpInputBehavior();
  setAuthTab('login');
  setMethod('email');
  renderDashboardTab('appearance');
  syncUserUI();
  ensureLogoutButton();
  initSupabase();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

window.AniDubApp = {
  state,
  animeDatabase,
  addToWatchlist,
  handleLogout,
  setAccent,
  setThemeMode,
  showToast,
  persistUserPreference,
  supabase
};
