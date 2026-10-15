/**
 * Alex Vance Portfolio - Interactive Engine
 * Core Specialization: React.js & Node.js Full Stack Engineering
 */

// ================= DATA STORE =================

const SKILLS_DATA = [
  // Core Flags
  {
    name: 'React.js',
    category: 'frontend',
    level: 98,
    years: '5+ yrs',
    icon: 'atom',
    color: 'text-cyan-400',
    tags: ['React 18/19', 'Hooks', 'Server Components', 'Context', 'Zustand', 'TanStack Query', 'Virtual DOM']
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 95,
    years: '5+ yrs',
    icon: 'server',
    color: 'text-emerald-500',
    tags: ['Express.js', 'NestJS', 'Event Loop', 'Streams', 'Clustering', 'Asynchronous I/O', 'REST & GraphQL']
  },
  {
    name: 'JavaScript & TypeScript',
    category: 'frontend',
    level: 96,
    years: '6+ yrs',
    icon: 'code',
    color: 'text-amber-400',
    tags: ['ES2024+', 'Generics', 'Type Safety', 'Async/Await', 'Functional Programming']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 92,
    years: '4+ yrs',
    icon: 'globe',
    color: 'text-slate-200',
    tags: ['App Router', 'Server Actions', 'Streaming SSR', 'Static Generation (SSG)', 'Route Handlers']
  },
  {
    name: 'Express.js & NestJS',
    category: 'backend',
    level: 94,
    years: '5+ yrs',
    icon: 'cpu',
    color: 'text-rose-400',
    tags: ['Middleware', 'Dependency Injection', 'Authentication (JWT)', 'Rate Limiting', 'Routing']
  },
  {
    name: 'MongoDB & Mongoose',
    category: 'database',
    level: 92,
    years: '5+ yrs',
    icon: 'database',
    color: 'text-emerald-400',
    tags: ['Aggregation Pipelines', 'Schema Design', 'Indexing', 'Transactions', 'Atlas']
  },
  {
    name: 'PostgreSQL & Prisma',
    category: 'database',
    level: 90,
    years: '4+ yrs',
    icon: 'layers',
    color: 'text-blue-400',
    tags: ['Relational Schema', 'Complex Joins', 'Prisma ORM', 'ACID Compliance', 'Connection Pooling']
  },
  {
    name: 'Redis & Caching',
    category: 'database',
    level: 88,
    years: '4+ yrs',
    icon: 'zap',
    color: 'text-red-500',
    tags: ['In-Memory Cache', 'Pub/Sub', 'Rate Limiting', 'Session Storage', 'BullMQ Queues']
  },
  {
    name: 'WebSockets & Socket.io',
    category: 'backend',
    level: 90,
    years: '4+ yrs',
    icon: 'radio',
    color: 'text-purple-400',
    tags: ['Real-Time Bidirectional', 'Room Broadcasting', 'Heartbeats', 'Event Subscriptions']
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 96,
    years: '5+ yrs',
    icon: 'palette',
    color: 'text-cyan-400',
    tags: ['Design Systems', 'Responsive UI', 'Dark Mode', 'JIT Engine', 'Custom Theme Tokens']
  },
  {
    name: 'Docker & Microservices',
    category: 'devops',
    level: 86,
    years: '4+ yrs',
    icon: 'box',
    color: 'text-blue-500',
    tags: ['Multi-Stage Builds', 'Docker Compose', 'Container Orchestration', 'Isolated Services']
  },
  {
    name: 'AWS & Cloud Deployment',
    category: 'devops',
    level: 84,
    years: '3+ yrs',
    icon: 'cloud',
    color: 'text-amber-500',
    tags: ['EC2', 'S3', 'Lambda Serverless', 'CloudFront CDN', 'RDS']
  },
  {
    name: 'REST & GraphQL APIs',
    category: 'architecture',
    level: 95,
    years: '5+ yrs',
    icon: 'network',
    color: 'text-pink-400',
    tags: ['API Design', 'Schema Stitching', 'Apollo Server', 'DataLoader', 'OpenAPI/Swagger']
  },
  {
    name: 'State Management',
    category: 'frontend',
    level: 94,
    years: '5+ yrs',
    icon: 'git-merge',
    color: 'text-violet-400',
    tags: ['Redux Toolkit', 'Zustand', 'Context API', 'Jotai', 'Immer']
  },
  {
    name: 'Testing & QA',
    category: 'architecture',
    level: 88,
    years: '4+ yrs',
    icon: 'check-square',
    color: 'text-emerald-400',
    tags: ['Jest', 'Vitest', 'React Testing Library', 'Supertest', 'Cypress E2E']
  },
  {
    name: 'Git & CI/CD Pipelines',
    category: 'devops',
    level: 92,
    years: '5+ yrs',
    icon: 'git-branch',
    color: 'text-orange-400',
    tags: ['GitHub Actions', 'Automated Testing', 'Semantic Versioning', 'Branch Workflows']
  }
];

const PROJECTS_DATA = [
  {
    id: 'flowpulse',
    title: 'FlowPulse — Real-Time Collaborative Workspace',
    tag: 'realtime',
    tagLabel: 'React + Node + WebSockets',
    description: 'An enterprise real-time collaborative workspace featuring interactive kanban boards, live document editing with CRDTs, and multi-user cursor tracking.',
    imagePlaceholder: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
    stack: ['React 18', 'Node.js', 'Express', 'Socket.io', 'Redux Toolkit', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://example.com/flowpulse-demo',
    githubUrl: 'https://github.com/example/flowpulse',
    stats: {
      latency: '< 40ms sync',
      concurrency: '10k+ concurrent users',
      uptime: '99.98%'
    },
    architecture: {
      client: 'React 18 SPA with optimistic UI updates, virtualized canvas rendering, and Zustand store.',
      server: 'Node.js cluster utilizing Socket.io adapters, Redis Pub/Sub for cross-node broadcasting, and Express REST API.',
      database: 'MongoDB Atlas with compound indexing on workspace IDs and change streams for document auditing.',
      keyChallenges: 'Handled packet ordering and conflict-free replicated data types (CRDT) for simultaneous text updates without overwrites.'
    }
  },
  {
    id: 'streamsync',
    title: 'StreamSync — High-Throughput Media Streaming Engine',
    tag: 'distributed',
    tagLabel: 'React + Node + Redis',
    description: 'A cloud video streaming and transcoding platform delivering adaptive bitrate streams with sub-second buffering and custom interactive player analytics.',
    imagePlaceholder: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
    stack: ['React', 'Node.js', 'Express', 'FFmpeg', 'Redis', 'PostgreSQL', 'AWS S3'],
    liveUrl: 'https://example.com/streamsync-demo',
    githubUrl: 'https://github.com/example/streamsync',
    stats: {
      throughput: '50k+ video streams',
      transcodeSpeed: '3x realtime',
      storage: 'Distributed S3 Tiers'
    },
    architecture: {
      client: 'React custom HLS/DASH media player with dynamic buffer control, keyboard shortcuts, and frame scrubbing.',
      server: 'Node.js streaming server with HTTP 206 Partial Content range requests, streaming directly from S3 without buffering entire files into RAM.',
      database: 'PostgreSQL for metadata, watch histories, and Redis cache for user playback states and token validation.',
      keyChallenges: 'Zero-memory-leak streaming using Node.js stream pipelines (`stream.pipeline`) and backpressure management.'
    }
  },
  {
    id: 'devmetrics',
    title: 'DevMetrics — API Telemetry & Performance Profiler',
    tag: 'fintech',
    tagLabel: 'Next.js + NestJS + TimescaleDB',
    description: 'A high-performance observability platform for Node.js microservices. Ingests, aggregates, and visualizes p95 latencies, memory spikes, and distributed error traces.',
    imagePlaceholder: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    stack: ['React', 'Next.js 14', 'Node.js (NestJS)', 'TimescaleDB', 'Chart.js', 'Tailwind'],
    liveUrl: 'https://example.com/devmetrics-demo',
    githubUrl: 'https://github.com/example/devmetrics',
    stats: {
      ingestion: '15,000 req/sec',
      p95Latency: '28ms query response',
      retention: '90-day time-series'
    },
    architecture: {
      client: 'Next.js 14 App Router dashboard with live streaming charts, auto-refresh polling, and interactive trace breakdowns.',
      server: 'NestJS modular architecture with fastify HTTP engine, background batching workers, and JWT authentication.',
      database: 'TimescaleDB (PostgreSQL time-series hypertable) with automatic retention policies and continuous aggregates.',
      keyChallenges: 'Buffered batch inserts in Node.js to protect the database from ingestion spikes during traffic surges.'
    }
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere — Headless E-Commerce Platform',
    tag: 'realtime',
    tagLabel: 'React + Node + Stripe',
    description: 'A lightning-fast headless e-commerce store with real-time stock sync, instantaneous fuzzy search, and secure multi-currency Stripe payment checkout.',
    imagePlaceholder: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    stack: ['React', 'Node.js', 'Express', 'Stripe API', 'Redis', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com/shopsphere-demo',
    githubUrl: 'https://github.com/example/shopsphere',
    stats: {
      conversionSpeed: '98/100 Lighthouse',
      checkoutLatency: '< 1.2s roundtrip',
      catalogSize: '50k+ SKUs'
    },
    architecture: {
      client: 'React SPA with client-side routing, optimistic cart updates, and mobile-first responsive checkout drawer.',
      server: 'Node.js Express backend with Stripe Webhook idempotency handling, rate limiting, and Redis product caching.',
      database: 'PostgreSQL with transactional row locking for inventory integrity during flash sales.',
      keyChallenges: 'Eliminated race conditions in stock reservation during concurrent high-demand checkout spikes.'
    }
  }
];

// ================= AUDIO EFFECTS ENGINE (Web Audio API) =================
class SoundFX {
  constructor() {
    this.enabled = false;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playBeep(freq = 440, type = 'sine', duration = 0.08, gainVal = 0.04) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    this.playBeep(523.25, 'triangle', 0.1, 0.05); // C5
    setTimeout(() => this.playBeep(659.25, 'triangle', 0.1, 0.05), 80); // E5
    setTimeout(() => this.playBeep(783.99, 'triangle', 0.2, 0.06), 160); // G5
  }

  playKey() {
    if (!this.enabled) return;
    const freqs = [320, 360, 400, 440];
    const f = freqs[Math.floor(Math.random() * freqs.length)];
    this.playBeep(f, 'square', 0.03, 0.02);
  }
}

const sound = new SoundFX();

// ================= TYPEWRITER EFFECT =================
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Full Stack Engineer (React.js + Node.js)',
    'React.js UI Specialist & Architect',
    'Node.js & Backend Services Specialist',
    'MERN & PERN Stack Craftsman',
    'High-Performance Web Developer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ================= SKILLS GRID RENDERER =================
function renderSkills(category = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === category);

  container.innerHTML = filtered.map(skill => {
    // Special highlight styling for React and Node
    const isCoreFocus = skill.name.includes('React') || skill.name.includes('Node');
    const borderGlow = isCoreFocus ? 'border-brand-500/60 dark:border-brand-500/50 shadow-md shadow-brand-500/10' : 'border-slate-200 dark:border-darkBorder';

    return `
      <div class="skill-card p-4 rounded-2xl bg-white dark:bg-darkSurface ${borderGlow} hover:border-brand-500/80 transition-all hover:-translate-y-1 group">
        <div class="flex items-center justify-between mb-2">
          <span class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 ${skill.color}">
            <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
          </span>
          <span class="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-brand-500 transition-colors">
            ${skill.years}
          </span>
        </div>
        
        <div class="flex items-center gap-1.5 mb-1">
          <h4 class="font-bold text-sm text-slate-900 dark:text-white">${skill.name}</h4>
          ${isCoreFocus ? '<span class="px-1.5 py-0.2 rounded text-[10px] bg-brand-500/10 text-brand-500 font-mono font-bold">CORE</span>' : ''}
        </div>

        <!-- Proficiency Meter -->
        <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden my-2">
          <div class="bg-gradient-to-r from-brand-500 to-accent-cyan h-full rounded-full transition-all duration-700" style="width: ${skill.level}%"></div>
        </div>

        <div class="flex flex-wrap gap-1 mt-2">
          ${skill.tags.slice(0, 3).map(tag => `
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ================= PROJECTS GRID RENDERER =================
function renderProjects(tag = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = tag === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.tag === tag);

  container.innerHTML = filtered.map(proj => {
    return `
      <div class="project-card rounded-3xl bg-white dark:bg-darkSurface border border-slate-200 dark:border-darkBorder overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
        
        <!-- Project Preview Graphic Banner -->
        <div class="h-48 w-full p-6 relative flex flex-col justify-between overflow-hidden" style="background: ${proj.imagePlaceholder}">
          <!-- Subtle grid overlay -->
          <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div class="relative z-10 flex items-center justify-between">
            <span class="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white font-mono text-xs font-semibold">
              ${proj.tagLabel}
            </span>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Production Ready"></span>
            </div>
          </div>

          <div class="relative z-10">
            <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
              ${proj.title.split('—')[0]}
            </h3>
            <p class="text-xs text-white/90 font-medium">
              ${proj.title.split('—')[1] || ''}
            </p>
          </div>
        </div>

        <!-- Project Details Body -->
        <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              ${proj.description}
            </p>

            <!-- Metrics Pills -->
            <div class="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 text-center">
              <div>
                <div class="text-[11px] text-slate-400 font-mono">LATENCY / SPEED</div>
                <div class="font-bold text-xs text-slate-800 dark:text-slate-200 font-mono">${Object.values(proj.stats)[0]}</div>
              </div>
              <div>
                <div class="text-[11px] text-slate-400 font-mono">SCALE / CAPACITY</div>
                <div class="font-bold text-xs text-slate-800 dark:text-slate-200 font-mono">${Object.values(proj.stats)[1]}</div>
              </div>
              <div>
                <div class="text-[11px] text-slate-400 font-mono">STATUS</div>
                <div class="font-bold text-xs text-emerald-500 font-mono">${Object.values(proj.stats)[2]}</div>
              </div>
            </div>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 mt-4">
              ${proj.stack.map(tech => `
                <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                  ${tech}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-4 flex items-center justify-between gap-3">
            <button class="open-deep-dive-btn flex-1 py-2.5 px-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm" data-id="${proj.id}">
              <i data-lucide="layers" class="w-3.5 h-3.5"></i>
              <span>Architecture Deep Dive</span>
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" title="View Source on GitHub">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 hover:bg-brand-500/20 transition-colors" title="Live Preview">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>

        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Attach Deep Dive Listeners
  document.querySelectorAll('.open-deep-dive-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      sound.playBeep(600, 'sine', 0.08);
      openProjectModal(id);
    });
  });
}

// ================= PROJECT DEEP DIVE MODAL =================
function openProjectModal(id) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  const proj = PROJECTS_DATA.find(p => p.id === id);
  if (!modal || !content || !proj) return;

  content.innerHTML = `
    <div class="space-y-6 font-sans">
      <div class="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span class="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-mono text-xs font-semibold">
          System Architecture & Deep Dive
        </span>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-2">${proj.title}</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">${proj.description}</p>
      </div>

      <!-- Architecture Breakdown Cards -->
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-1 flex items-center gap-1.5">
            <i data-lucide="monitor" class="w-4 h-4"></i>
            <span>Frontend Architecture (React.js)</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${proj.architecture.client}</p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1 flex items-center gap-1.5">
            <i data-lucide="server" class="w-4 h-4"></i>
            <span>Backend Services (Node.js)</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${proj.architecture.server}</p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-violet-500 mb-1 flex items-center gap-1.5">
            <i data-lucide="database" class="w-4 h-4"></i>
            <span>Persistence & Caching Layer</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${proj.architecture.database}</p>
        </div>

        <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <h4 class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1 flex items-center gap-1.5">
            <i data-lucide="alert-triangle" class="w-4 h-4"></i>
            <span>Key Engineering Hurdle Solved</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${proj.architecture.keyChallenges}</p>
        </div>
      </div>

      <!-- Tech Stack Matrix -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${proj.stack.map(s => `<span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300">${s}</span>`).join('')}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>Repository</span>
        </a>
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors flex items-center gap-2">
          <i data-lucide="external-link" class="w-4 h-4"></i>
          <span>Live Deployment</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.add('hidden');
}

// ================= INTERACTIVE TERMINAL ENGINE =================
function initTerminal() {
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const clearBtn = document.getElementById('clear-term-btn');
  const quickBtns = document.querySelectorAll('.term-quick-btn');

  if (!form || !input || !output) return;

  const commandHistory = [];
  let historyIdx = -1;

  function appendOutput(html) {
    const entry = document.createElement('div');
    entry.className = 'terminal-line my-1.5 leading-relaxed';
    entry.innerHTML = html;
    output.appendChild(entry);
    output.scrollTop = output.scrollHeight;
  }

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    sound.playKey();
    commandHistory.push(cmd);
    historyIdx = commandHistory.length;

    // Display user command in log
    appendOutput(`<div class="text-slate-400 font-mono"><span class="text-emerald-400 font-bold">visitor@alex-vance:~$</span> ${escapeHtml(cmd)}</div>`);

    const lower = cmd.toLowerCase().trim();
    const args = lower.split(' ');
    const primary = args[0];

    switch (primary) {
      case 'help':
        appendOutput(`
          <div class="text-slate-300 font-mono space-y-1">
            <div class="text-accent-cyan font-bold mb-1">Available Commands:</div>
            <div><span class="text-brand-400 w-28 inline-block">about</span> : Display engineering biography and philosophy</div>
            <div><span class="text-brand-400 w-28 inline-block">react</span> : Detailed overview of React.js competencies</div>
            <div><span class="text-brand-400 w-28 inline-block">node</span> : Detailed overview of Node.js competencies</div>
            <div><span class="text-brand-400 w-28 inline-block">skills</span> : Full list of technical skills and tools</div>
            <div><span class="text-brand-400 w-28 inline-block">projects</span> : Showcase of production full-stack systems</div>
            <div><span class="text-brand-400 w-28 inline-block">experience</span> : Career milestones and positions held</div>
            <div><span class="text-brand-400 w-28 inline-block">contact</span> : Direct email, GitHub, and social links</div>
            <div><span class="text-brand-400 w-28 inline-block">cat resume.txt</span> : View full text resume</div>
            <div><span class="text-brand-400 w-28 inline-block">sudo hire</span> : Launch hiring handshake celebration</div>
            <div><span class="text-brand-400 w-28 inline-block">npm run dev</span> : Simulate starting full-stack dev server</div>
            <div><span class="text-brand-400 w-28 inline-block">theme [dark|light]</span> : Toggle visual theme</div>
            <div><span class="text-brand-400 w-28 inline-block">clear</span> : Clear terminal display</div>
          </div>
        `);
        break;

      case 'about':
        appendOutput(`
          <div class="text-slate-300 space-y-1">
            <span class="text-brand-400 font-bold">Alex Vance</span> — Full Stack Engineer (React.js & Node.js Specialist).
            <br>5+ years building distributed backends and reactive client applications.
            <br>Philosophy: "Performance is a non-negotiable feature; code clarity is king."
          </div>
        `);
        break;

      case 'react':
        appendOutput(`
          <div class="text-cyan-400 font-bold mb-1">⚡ React.js Ecosystem Mastery:</div>
          <div class="text-slate-300 space-y-1">
            • React 18 & 19 (Server Components, Actions, Suspense, Concurrent Mode)
            • State Management: Redux Toolkit, Zustand, Context API, TanStack Query
            • Next.js App Router, Streaming SSR, Incremental Static Regeneration (ISR)
            • 60fps UI animations, Virtual DOM optimization, Web Vitals tuning (LCP/INP)
          </div>
        `);
        break;

      case 'node':
        appendOutput(`
          <div class="text-emerald-400 font-bold mb-1">🚀 Node.js Backend Mastery:</div>
          <div class="text-slate-300 space-y-1">
            • Frameworks: Express.js, NestJS (Fastify adapter)
            • Architecture: REST APIs, GraphQL (Apollo), gRPC, WebSockets (Socket.io)
            • Core internals: Event Loop, Buffer/Streams, Multi-process Clustering, Worker Threads
            • Security: JWT session rotation, OAuth2/OIDC, Rate Limiting, Helmet, Sanitization
          </div>
        `);
        break;

      case 'skills':
        appendOutput(`
          <div class="text-accent-violet font-bold mb-1">Technical Stack:</div>
          <div class="text-slate-300">
            <strong>Core:</strong> React.js, Node.js, TypeScript, JavaScript, Next.js, Express.js<br>
            <strong>Databases:</strong> MongoDB, PostgreSQL, Redis, Prisma, TimescaleDB<br>
            <strong>Cloud/DevOps:</strong> Docker, AWS (S3, EC2, Lambda), CI/CD (GitHub Actions)<br>
            <strong>Realtime:</strong> WebSockets, Socket.io, BullMQ, Redis Pub/Sub
          </div>
        `);
        break;

      case 'projects':
        appendOutput(`
          <div class="text-amber-400 font-bold mb-1">Featured Production Systems:</div>
          <div class="text-slate-300 space-y-1">
            1. <strong>FlowPulse</strong> [React, Node, Socket.io, Mongo] — Collaborative Canvas & Kanban
            <br>2. <strong>StreamSync</strong> [React, Node, Redis, PostgreSQL] — High-Throughput Video Engine
            <br>3. <strong>DevMetrics</strong> [Next.js, NestJS, TimescaleDB] — 15k req/sec Telemetry Ingestion
            <br>4. <strong>ShopSphere</strong> [React, Node, Stripe, Redis] — Sub-100ms Headless E-Commerce
          </div>
        `);
        break;

      case 'experience':
        appendOutput(`
          <div class="text-slate-300 space-y-1">
            • <strong class="text-brand-400">Senior Full Stack Engineer</strong> @ CloudScale Systems (2023 - Present)
            <br>• <strong class="text-accent-cyan">Full Stack Software Engineer</strong> @ InnovateX Technologies (2021 - 2023)
            <br>• <strong class="text-accent-violet">Software Engineer</strong> @ AgileStack Studios (2019 - 2021)
          </div>
        `);
        break;

      case 'contact':
        appendOutput(`
          <div class="text-slate-300 space-y-1">
            Email: <a href="mailto:alex.vance.dev@example.com" class="text-brand-400 underline">alex.vance.dev@example.com</a>
            <br>GitHub: <a href="https://github.com" target="_blank" class="text-brand-400 underline">github.com/alexvance</a>
            <br>LinkedIn: <a href="https://linkedin.com" target="_blank" class="text-brand-400 underline">linkedin.com/in/alexvance</a>
            <br>Location: San Francisco, CA (Open to Worldwide Remote)
          </div>
        `);
        break;

      case 'cat':
        if (args[1] === 'resume.txt' || args[1] === 'resume') {
          openResumeModal();
          appendOutput(`<div class="text-emerald-400">Opening visual resume viewer...</div>`);
        } else {
          appendOutput(`<div class="text-rose-400">cat: ${args[1] || 'file'}: No such file. Try 'cat resume.txt'</div>`);
        }
        break;

      case 'sudo':
        if (args[1] === 'hire') {
          sound.playSuccess();
          showToast('🎉 Handshake Initiated! Directing you to the contact form...', 'success');
          appendOutput(`
            <div class="text-emerald-400 font-bold">
              [ACCESS GRANTED] Initiating contact handshake protocol...
              <br>Redirecting to contact form. Let's build something exceptional together!
            </div>
          `);
          setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        } else {
          appendOutput(`<div class="text-rose-400">sudo: permission denied. Try 'sudo hire' 😉</div>`);
        }
        break;

      case 'npm':
        if (args[1] === 'run' && args[2] === 'dev') {
          appendOutput(`
            <div class="text-slate-300 font-mono text-xs space-y-1">
              <span class="text-emerald-400">&gt; portfolio@1.0.0 dev</span><br>
              <span class="text-slate-400">&gt; concurrent "next dev" "node server/api.js"</span><br>
              <span class="text-cyan-400">[React 19] Ready on http://localhost:3000</span><br>
              <span class="text-emerald-400">[Node.js/Express] API Server running on port 5000</span><br>
              <span class="text-purple-400">[Socket.io] WebSocket Gateway authenticated</span>
            </div>
          `);
        } else {
          appendOutput(`<div class="text-slate-400">Try 'npm run dev'</div>`);
        }
        break;

      case 'theme':
        if (args[1] === 'light') {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          appendOutput(`<div class="text-amber-400">Theme switched to light mode.</div>`);
        } else if (args[1] === 'dark') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          appendOutput(`<div class="text-brand-400">Theme switched to dark mode.</div>`);
        } else {
          appendOutput(`<div class="text-slate-400">Usage: theme [dark|light]</div>`);
        }
        break;

      case 'clear':
        output.innerHTML = '';
        break;

      default:
        appendOutput(`<div class="text-rose-400">Command not recognized: '${escapeHtml(cmd)}'. Type <span class="text-white underline cursor-pointer" onclick="document.getElementById('terminal-input').value='help';">help</span> for commands.</div>`);
        break;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value;
    input.value = '';
    handleCommand(val);
  });

  // History Navigation with Up/Down Arrow
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        historyIdx--;
        input.value = commandHistory[historyIdx] || '';
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < commandHistory.length - 1) {
        historyIdx++;
        input.value = commandHistory[historyIdx] || '';
      } else {
        historyIdx = commandHistory.length;
        input.value = '';
      }
      e.preventDefault();
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      output.innerHTML = '';
      sound.playBeep(300, 'sine', 0.05);
    });
  }

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        input.value = cmd;
        handleCommand(cmd);
        input.value = '';
      }
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ================= TOAST NOTIFICATION ENGINE =================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900';
  
  toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl ${bg} shadow-2xl text-xs sm:text-sm font-medium transition-all transform duration-300 translate-y-4 opacity-0`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-4 h-4"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

// ================= RESUME MODAL HANDLERS =================
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    sound.playBeep(500, 'triangle', 0.07);
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) modal.classList.add('hidden');
}

// ================= INTERACTIVE BACKGROUND PARTICLES =================
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const count = Math.min(Math.floor(width / 22), 55);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8
    });
  }

  let mouseX = -999;
  let mouseY = -999;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const dotColor = isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.25)';
    const lineColor = isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.05)';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.stroke();
        }
      }

      // Attract/glow near mouse
      const mdx = p.x - mouseX;
      const mdy = p.y - mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.1)';
        ctx.stroke();
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// ================= DOM INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Initialize Canvas & Typewriter
  initParticleCanvas();
  initTypewriter();

  // 3. Render Initial Skills & Projects
  renderSkills('all');
  renderProjects('all');

  // 4. Initialize Terminal
  initTerminal();

  // 5. Scroll Progress Bar
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + '%';
  });

  // 6. Theme Toggle (Persisted in localStorage)
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      sound.playBeep(480, 'sine', 0.05);
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // 7. Sound Toggle
  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      sound.enabled = !sound.enabled;
      if (sound.enabled) {
        sound.init();
        sound.playBeep(660, 'sine', 0.08);
        if (soundIcon) soundIcon.setAttribute('data-lucide', 'volume-2');
        showToast('🔊 Audio feedback enabled', 'info');
      } else {
        if (soundIcon) soundIcon.setAttribute('data-lucide', 'volume-x');
        showToast('🔇 Audio feedback muted', 'info');
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // 8. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // 9. About Tabs Handler
  const tabBtns = document.querySelectorAll('.about-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playBeep(520, 'sine', 0.04);
      tabBtns.forEach(b => {
        b.classList.remove('active-tab');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      });
      btn.classList.add('active-tab');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');

      const target = btn.getAttribute('data-tab');
      document.querySelectorAll('.about-tab-content').forEach(content => {
        content.classList.add('hidden');
      });
      const targetContent = document.getElementById(`tab-${target}`);
      if (targetContent) targetContent.classList.remove('hidden');
    });
  });

  // 10. Skills Category Filters
  const skillFilters = document.querySelectorAll('.skill-filter-btn');
  skillFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playBeep(450, 'sine', 0.04);
      skillFilters.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      const cat = btn.getAttribute('data-category');
      renderSkills(cat);
    });
  });

  // 11. Projects Category Filters
  const projectFilters = document.querySelectorAll('.project-filter-btn');
  projectFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playBeep(450, 'sine', 0.04);
      projectFilters.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      const tag = btn.getAttribute('data-tag');
      renderProjects(tag);
    });
  });

  // 12. Modal Close Buttons
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);

  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }

  // 13. Resume Modal Buttons
  const openResumeBtn = document.getElementById('open-resume-btn');
  const openResumeMobile = document.getElementById('open-resume-btn-mobile');
  const closeResumeBtn = document.getElementById('close-resume-btn');
  const printResumeBtn = document.getElementById('print-resume-btn');

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResumeModal);
  if (openResumeMobile) openResumeMobile.addEventListener('click', openResumeModal);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResumeModal);

  const resumeBackdrop = document.getElementById('resume-modal');
  if (resumeBackdrop) {
    resumeBackdrop.addEventListener('click', (e) => {
      if (e.target === resumeBackdrop) closeResumeModal();
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });

  // 14. Copy Email Handler
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('alex.vance.dev@example.com');
        sound.playSuccess();
        showToast('📋 Email copied to clipboard: alex.vance.dev@example.com', 'success');
      } catch (err) {
        showToast('Email: alex.vance.dev@example.com', 'info');
      }
    });
  }

  // 15. Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sound.playBeep(580, 'sine', 0.08);

      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      submitBtn.disabled = true;
      submitBtnText.textContent = 'Transmitting...';

      setTimeout(() => {
        sound.playSuccess();
        showToast(`🚀 Thank you, ${name}! Your message has been sent. I'll reply to ${email} promptly.`, 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtnText.textContent = 'Transmit Message';
      }, 900);
    });
  }

  // Initial Lucide Icons Render
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
