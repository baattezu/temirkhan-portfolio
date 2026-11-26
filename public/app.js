// Content lives here. To add a work screenshot: put the file in /img and add it to `shots` of a job.
const T = {
  en: {
    "nav.work": "Work", "nav.projects": "Projects", "nav.stack": "Stack", "nav.contact": "Contact",
    "hero.status": "Open to remote contracts · 14:00–19:00 UTC",
    "hero.name": "Temirkhan Bayassov",
    "hero.role": "Backend engineer. Java, Kotlin, Spring Boot, PostgreSQL.",
    "hero.lead": "I own production systems end to end and like making slow things fast — most recently a Postgres full-text search from 6.6 s down to 60 ms. Lead engineer on a multi-tenant SaaS; my own products live on verylabs.dev.",
    "hero.write": "Write to me",
    "hero.meta": "Astana, Kazakhstan · UTC+5 · English C1, Russian, Kazakh",
    "work.title": "Work",
    "work.note": "Code from these jobs is private. The previews show what was built and what it changed.",
    "projects.title": "Projects",
    "projects.note": "Own products and tools. Many repos are private — so here is what they look like and do.",
    "stack.title": "Stack",
    "contact.title": "Let's talk",
    "contact.text": "Remote contracts, 20–25 h/week, evenings in Astana. Backend, Postgres performance, or a product end to end.",
    more: "Details", open: "Open", private: "Private", live: "Live", wip: "In progress", oss: "Open source",
    present: "now",
  },
  ru: {
    "nav.work": "Опыт", "nav.projects": "Проекты", "nav.stack": "Стек", "nav.contact": "Контакт",
    "hero.status": "Открыт к удалённым контрактам · 14:00–19:00 UTC",
    "hero.name": "Темирхан Баясов",
    "hero.role": "Backend-инженер. Java, Kotlin, Spring Boot, PostgreSQL.",
    "hero.lead": "Веду продакшн-системы целиком и люблю делать медленное быстрым — последнее: полнотекстовый поиск в Postgres с 6.6 с до 60 мс. Ведущий инженер multi-tenant SaaS; свои продукты — на verylabs.dev.",
    "hero.write": "Написать",
    "hero.meta": "Астана · UTC+5 · English C1, русский, казахский",
    "work.title": "Опыт",
    "work.note": "Код с работы закрыт. Превью показывают, что сделано и что это изменило.",
    "projects.title": "Проекты",
    "projects.note": "Свои продукты и инструменты. Многие репозитории приватные — поэтому показываю, как они выглядят и что делают.",
    "stack.title": "Стек",
    "contact.title": "Связаться",
    "contact.text": "Удалённые контракты, 20–25 ч/нед, вечером по Астане. Backend, производительность Postgres или продукт целиком.",
    more: "Подробнее", open: "Открыть", private: "Приватный", live: "Работает", wip: "В разработке", oss: "Open source",
    present: "н.в.",
  },
};

const METRICS = [
  { v: "6.6 s → 60 ms", en: "Postgres FTS on 555K documents", ru: "Поиск Postgres по 555K документов" },
  { v: "42 → 1", en: "dashboard requests after killing N+1", ru: "запросов дашборда после N+1" },
  { v: "300+", en: "endpoints in a SaaS I lead", ru: "endpoints в SaaS, который веду" },
  { v: "780+", en: "automated tests", ru: "автотестов" },
];

const JOBS = [
  {
    id: "steppe", org: "Steppe Tech Lab", dates: { en: "Jul 2026 — now", ru: "Июль 2026 — н.в." },
    role: { en: "Lead Full-Stack / AI Engineer", ru: "Lead Full-Stack / AI Engineer" },
    sum: { en: "Multi-tenant media-intelligence SaaS: FastAPI, async SQLAlchemy, PostgreSQL, Redis, React 19.", ru: "Multi-tenant media-intelligence SaaS: FastAPI, async SQLAlchemy, PostgreSQL, Redis, React 19." },
    bullets: {
      en: ["Lead engineer: 300+ endpoints, 780+ automated tests, Docker Compose deploys.",
        "Root-caused a full-text-search regression on a 555K-document index: 6.6 s → 50–70 ms.",
        "Killed a dashboard N+1: 42 HTTP requests → 1, payload 387 KB → 12 KB.",
        "React 19 + TypeScript SPA (~75K LOC), feature-sliced, 3 locales, own two-theme design system."],
      ru: ["Ведущий инженер: 300+ endpoints, 780+ автотестов, деплой через Docker Compose.",
        "Нашёл регрессию полнотекстового поиска на индексе из 555K документов: 6.6 с → 50–70 мс.",
        "Убрал N+1 на дашборде: 42 HTTP-запроса → 1, payload 387 KB → 12 KB.",
        "SPA на React 19 + TypeScript (~75K LOC), feature-sliced, 3 локали, своя двухтемная дизайн-система."],
    },
    tags: ["FastAPI", "PostgreSQL", "Redis", "React 19", "TypeScript"],
    preview: "perf",
  },
  {
    id: "nitec", org: "NITEC", dates: { en: "Feb — Jul 2026", ru: "Февр. — июль 2026" },
    role: { en: "Java / Kotlin Backend Engineer", ru: "Java / Kotlin Backend Engineer" },
    sum: { en: "Backend of the national e-Government portal of Kazakhstan.", ru: "Backend национального портала электронного правительства." },
    bullets: {
      en: ["Backend modules of the e-Government portal across Java and Kotlin services.",
        "REST and SOAP integrations with state registries through the interoperability gateway (SHEP).",
        "Business process automation on JBPM: analyst requirements → executable workflows."],
      ru: ["Backend-модули портала электронного правительства на Java и Kotlin.",
        "REST/SOAP-интеграции с госреестрами через шлюз электронного правительства (ШЭП).",
        "Автоматизация бизнес-процессов на JBPM: требования аналитиков → исполняемые workflow."],
    },
    tags: ["Java", "Kotlin", "SOAP", "REST", "JBPM"],
    preview: "gov",
  },
  {
    id: "om", org: "Operation Mastery", dates: { en: "Dec 2025 — Jul 2026", ru: "Дек. 2025 — июль 2026" },
    role: { en: "Fullstack Engineer · contract", ru: "Fullstack Engineer · контракт" },
    sum: { en: "Warehouse microservice of a manufacturing ERP/MES.", ru: "Микросервис складского учёта ERP/MES для производства." },
    bullets: {
      en: ["Designed and built warehouse accounting: receipts, issues, returns, write-offs with automatic stock balances.",
        "Product cost-price calculation and interchangeable materials in the BOM.",
        "Postgres indexing strategy, N+1 removal."],
      ru: ["Спроектировал и сделал складской учёт: приходы, выдачи, возвраты, списания с автоматическими остатками.",
        "Расчёт себестоимости изделий и взаимозаменяемые материалы в BOM.",
        "Стратегия индексов в Postgres, устранение N+1."],
    },
    tags: ["Spring Boot", "Kotlin", "Java", "PostgreSQL"],
    preview: "stock",
  },
  {
    id: "epam", org: "EPAM Campus", dates: { en: "Dec 2024 — Dec 2025", ru: "Дек. 2024 — дек. 2025" },
    role: { en: "Java Backend Engineer", ru: "Java Backend Engineer" },
    sum: { en: "Admitted straight to the final track. Microservices, Kafka, AWS.", ru: "Сразу на финальный уровень. Микросервисы, Kafka, AWS." },
    bullets: {
      en: ["Skipped three preparatory levels on the entry assessment.",
        "Microservice CRM with Kafka between services, PostgreSQL and MongoDB.",
        "AWS: Lambda, DynamoDB, SQS, SES, EventBridge; auth with Spring Security 6 and Cognito."],
      ru: ["Пропустил три подготовительных уровня по входному отбору.",
        "Микросервисная CRM: Kafka между сервисами, PostgreSQL и MongoDB.",
        "AWS: Lambda, DynamoDB, SQS, SES, EventBridge; авторизация на Spring Security 6 и Cognito."],
    },
    tags: ["Java 17", "Spring", "Kafka", "AWS", "MongoDB"],
    preview: "bus",
  },
];

const PROJECTS = [
  {
    id: "batyrsbee", name: "batyrsbee", status: "live", url: "https://batyrsbee.com", img: "/img/batyrsbee.webp", extra: "/img/batyrsbee-phone.webp",
    sum: { en: "Dates, a city and a budget turn into ready trips: flight, hotel and events with one price.", ru: "Даты, город и бюджет превращаются в готовые поездки: перелёт, отель и события с одной ценой." },
    body: { en: "Built for Business Cup 2.0, MVP live. Search over flights, hotels and concerts/games in the destination, price alerts, favourites.", ru: "Сделан для Business Cup 2.0, MVP в проде. Поиск по перелётам, отелям и событиям в городе, ценовые алерты, избранное." },
    tags: ["Next.js", "Hono", "PostgreSQL", "TypeScript"],
  },
  {
    id: "sitesforme", name: "sitesfor.me", status: "live", url: "https://sitesfor.me", img: "/img/sitesforme.webp", extra: "/img/sitesforme-editor.webp",
    sum: { en: "Website builder for small businesses in Kazakhstan. Describe it — get a site with prices and a lead form.", ru: "Конструктор сайтов для малого бизнеса Казахстана. Описал бизнес — получил сайт с ценами и формой заявки." },
    body: { en: "Built end to end: the editor, the API, the cloud it runs on. AI generation of structure and copy, built-in CRM, leads to Telegram.", ru: "Сделан целиком: редактор, API и облако, на котором он живёт. ИИ-генерация структуры и текстов, встроенная CRM, заявки в Telegram." },
    tags: ["React 19", "Hono", "Nx", "Claude API", "Cloudflare"],
  },
  {
    id: "temirslearn", name: "temirslearn", status: "private", url: "https://temirslearn.verylabs.dev", img: "/img/temirslearn.webp",
    sum: { en: "My learning platform: 85 interactive lessons, a code judge in the browser, a voice AI interviewer.", ru: "Моя платформа подготовки: 85 интерактивных уроков, судья кода в браузере, голосовое ИИ-интервью." },
    body: { en: "18 tracks from how computers work to Postgres internals, each lesson with its own widget. Python judge on Pyodide in a Web Worker, profession roadmaps, notes.", ru: "18 треков — от устройства компьютера до внутренностей Postgres, у каждого урока свой виджет. Судья на Pyodide в Web Worker, роудмапы профессий, заметки." },
    tags: ["React", "MDX", "Hono", "Workers", "D1", "Workers AI"],
  },
  {
    id: "temirsjob", name: "temirsjob", status: "private", url: "https://temirsjob.verylabs.dev", cover: "job",
    sum: { en: "Job hunting on autopilot: 7 sources, rule scoring, an LLM judge, cron twice a day.", ru: "Поиск работы на автопилоте: 7 источников, скоринг правилами, LLM-судья, крон дважды в день." },
    body: { en: "A Python pipeline ported to Cloudflare Workers + D1. Vacancies are scored by rules first, then judged by gpt-oss-120b on Workers AI.", ru: "Python-пайплайн, перенесённый на Cloudflare Workers + D1. Вакансии сначала оцениваются правилами, потом — gpt-oss-120b на Workers AI." },
    tags: ["Hono", "Workers", "D1", "Cron", "LLM"],
  },
  {
    id: "verylabs", name: "Very Labs", status: "live", url: "https://verylabs.dev", img: "/img/verylabs.webp",
    sum: { en: "Our three-engineer R&D lab. I run scoping and infrastructure.", ru: "Наша R&D-лаборатория из трёх инженеров. На мне скоуп и инфраструктура." },
    body: { en: "Bilingual static site on Next.js 16, served by a Cloudflare Worker with a lead form behind it.", ru: "Двуязычный статический сайт на Next.js 16, отдаётся Cloudflare Worker, за ним — форма заявок." },
    tags: ["Next.js 16", "Tailwind 4", "Workers"],
  },
  {
    id: "story", name: "story-factory", status: "private", cover: "story",
    sum: { en: "Story idea → vertical low-poly video with voice, music and subtitles.", ru: "Идея истории → вертикальное low-poly видео с озвучкой, музыкой и субтитрами." },
    body: { en: "CLI and studio: Claude writes the script, Piper speaks it, Blender renders, ffmpeg assembles 1080×1920 at 24 fps.", ru: "CLI и студия: Claude пишет сценарий, Piper озвучивает, Blender рендерит, ffmpeg собирает 1080×1920, 24 fps." },
    tags: ["Node", "Claude API", "Blender", "ffmpeg"],
  },
  {
    id: "itjobs", name: "itjobsfor.me", status: "wip", cover: "itjobs",
    sum: { en: "Remote IT jobs for developers from Kazakhstan, with match scores and an AI mock interview.", ru: "Удалённая работа в IT для разработчиков из Казахстана: оценка совпадения и пробное ИИ-интервью." },
    body: { en: "Monorepo: Hono API on Workers, React + Vite cabinet, Next.js landing.", ru: "Монорепо: Hono API на Workers, кабинет на React + Vite, лендинг на Next.js." },
    tags: ["Hono", "React", "Next.js", "AI"],
  },
  {
    id: "remoodle", name: "ReMoodle", status: "oss", cover: "bot",
    sum: { en: "Telegram bot over the university Moodle API: grades, deadlines, admissions.", ru: "Telegram-бот поверх Moodle API университета: оценки, дедлайны, поступление." },
    body: { en: "Open-source contributor since 2023. Used by students and applicants of Astana IT University.", ru: "Контрибьютор с 2023. Пользуются студенты и абитуриенты Astana IT University." },
    tags: ["Telegram", "Moodle API"],
  },
];

const STACK = [
  ["Languages", "Языки", "Java, Kotlin, SQL, Python, TypeScript"],
  ["Backend", "Backend", "Spring Boot, Spring Security, JPA/Hibernate, FastAPI, Hono, REST, SOAP"],
  ["Data", "Данные", "PostgreSQL (tuning, indexes, FTS), Redis, MongoDB, DynamoDB, Kafka"],
  ["Cloud", "Облако", "AWS (Lambda, SQS, Cognito, EKS), Cloudflare Workers, Docker, Kubernetes"],
  ["Frontend", "Frontend", "React 19, TypeScript, Next.js"],
  ["Testing", "Тесты", "JUnit 5, Mockito, pytest"],
];

const EDU = {
  en: ["MSc Computer Science, Astana IT University · 2025–2027", "BSc Software Engineering, Astana IT University · 2022–2025", "2nd place, ICCSDFAI Hackathon · 2025"],
  ru: ["Магистратура CS, Astana IT University · 2025–2027", "Бакалавриат Software Engineering, Astana IT University · 2022–2025", "2 место, хакатон ICCSDFAI · 2025"],
};

// ---------- previews (work code is private, so these are drawn) ----------
const PREVIEWS = {
  perf: () => `
    <div class="pv perf">
      <div class="pv-row"><span>FTS · before</span><i class="bar slow" style="--w:100%"></i><b>6.6 s</b></div>
      <div class="pv-row"><span>FTS · after</span><i class="bar fast" style="--w:1.2%"></i><b>60 ms</b></div>
      <div class="pv-row"><span>requests</span><i class="bar slow" style="--w:100%"></i><b>42</b></div>
      <div class="pv-row"><span>requests</span><i class="bar fast" style="--w:2.4%"></i><b>1</b></div>
      <div class="pv-row"><span>payload</span><i class="bar slow" style="--w:100%"></i><b>387 KB</b></div>
      <div class="pv-row"><span>payload</span><i class="bar fast" style="--w:3.1%"></i><b>12 KB</b></div>
    </div>`,
  gov: () => `
    <svg class="pv" viewBox="0 0 360 180" aria-hidden="true">
      <g class="box"><rect x="8" y="70" width="88" height="40" rx="8"/><text x="52" y="94">e-Gov portal</text></g>
      <g class="box acc"><rect x="136" y="70" width="88" height="40" rx="8"/><text x="180" y="94">SHEP</text></g>
      <g class="box"><rect x="266" y="14" width="86" height="34" rx="8"/><text x="309" y="35">registry</text></g>
      <g class="box"><rect x="266" y="73" width="86" height="34" rx="8"/><text x="309" y="94">registry</text></g>
      <g class="box"><rect x="266" y="132" width="86" height="34" rx="8"/><text x="309" y="153">registry</text></g>
      <path class="ln" d="M96 90H136M224 90C246 90 244 31 266 31M224 90H266M224 90C246 90 244 149 266 149"/>
      <text class="cap" x="116" y="62">REST</text><text class="cap" x="245" y="62">SOAP</text>
      <g class="box ghost"><rect x="8" y="132" width="88" height="34" rx="8"/><text x="52" y="153">JBPM</text></g>
      <path class="ln dash" d="M52 110V132"/>
    </svg>`,
  stock: () => `
    <svg class="pv" viewBox="0 0 360 180" aria-hidden="true">
      ${["receipt", "issue", "return", "write-off"].map((t, i) => `<g class="box"><rect x="8" y="${10 + i * 42}" width="88" height="32" rx="8"/><text x="52" y="${30 + i * 42}">${t}</text></g><path class="ln" d="M96 ${26 + i * 42}C120 ${26 + i * 42} 120 90 140 90"/>`).join("")}
      <g class="box acc"><rect x="140" y="68" width="92" height="44" rx="8"/><text x="186" y="88">stock</text><text class="cap" x="186" y="103">balance</text></g>
      <path class="ln" d="M232 90H262"/>
      <g class="box"><rect x="262" y="68" width="90" height="44" rx="8"/><text x="307" y="88">cost price</text><text class="cap" x="307" y="103">BOM · alt.</text></g>
    </svg>`,
  bus: () => `
    <svg class="pv" viewBox="0 0 360 180" aria-hidden="true">
      ${["leads", "deals", "users", "notify"].map((t, i) => `<g class="box"><rect x="${8 + i * 88}" y="12" width="76" height="34" rx="8"/><text x="${46 + i * 88}" y="33">${t}</text></g><path class="ln" d="M${46 + i * 88} 46V78"/>`).join("")}
      <rect class="kafka" x="8" y="78" width="340" height="22" rx="6"/><text class="kt" x="178" y="93">Kafka</text>
      <g class="box ghost"><rect x="8" y="128" width="100" height="34" rx="8"/><text x="58" y="149">PostgreSQL</text></g>
      <g class="box ghost"><rect x="128" y="128" width="100" height="34" rx="8"/><text x="178" y="149">MongoDB</text></g>
      <g class="box acc"><rect x="248" y="128" width="100" height="34" rx="8"/><text x="298" y="149">AWS Lambda</text></g>
      <path class="ln dash" d="M58 100V128M178 100V128M298 100V128"/>
    </svg>`,
};

const COVERS = {
  job: () => `<div class="cover term"><p><em>05:00</em> fetch 7 sources … 412 new</p><p><em>05:01</em> rules → 38 pass</p><p><em>05:03</em> judge gpt-oss-120b → 6 ≥ 60</p><p class="ok">✓ digest saved</p></div>`,
  story: () => `<div class="cover flow"><span>idea</span><i></i><span>Claude</span><i></i><span>Piper</span><i></i><span>Blender</span><i></i><span>.mp4</span></div>`,
  itjobs: () => `<div class="cover cards"><div><b>Senior Kotlin</b><small>remote · EU</small><em>92%</em></div><div><b>Java Backend</b><small>contract</small><em>81%</em></div><div><b>Platform eng.</b><small>remote · US</small><em>64%</em></div></div>`,
  bot: () => `<div class="cover chat"><p class="me">/grades</p><p>Algorithms — 94<br>Databases — 88<br>Deadline: Lab 4, Fri 23:59</p></div>`,
};

// ---------- render ----------
let lang = localStorage.getItem("lang") || ((navigator.language || "en").toLowerCase().startsWith("ru") ? "ru" : "en");
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = (a) => `<ul class="tags">${a.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const badge = (s) => `<span class="badge ${s}">${T[lang][s]}</span>`;

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = t[el.dataset.t]));
  document.querySelectorAll("[data-lang]").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));

  $("#metrics").innerHTML = METRICS.map((m) => `<div class="metric"><b>${m.v}</b><span>${m[lang]}</span></div>`).join("");

  $("#jobs").innerHTML = JOBS.map((j) => `
    <article class="job" data-job="${j.id}">
      <div class="job-text">
        <p class="when">${j.dates[lang]}</p>
        <h3>${esc(j.org)}</h3>
        <p class="role">${j.role[lang]}</p>
        <p class="sum">${j.sum[lang]}</p>
        <ul class="bullets">${j.bullets[lang].map((b) => `<li>${b}</li>`).join("")}</ul>
        ${tags(j.tags)}
        <button class="link more" data-open="job:${j.id}">${t.more} →</button>
      </div>
      <div class="job-pv">${PREVIEWS[j.preview]()}${(j.shots || []).map((s) => `<img src="${s}" alt="" loading="lazy">`).join("")}</div>
    </article>`).join("");

  $("#grid").innerHTML = PROJECTS.map((p) => `
    <article class="card" data-open="proj:${p.id}" tabindex="0">
      <div class="thumb">${p.img ? `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy">` : COVERS[p.cover]()}</div>
      <div class="card-body">
        <div class="card-top"><h3>${esc(p.name)}</h3>${badge(p.status)}</div>
        <p>${p.sum[lang]}</p>
        ${tags(p.tags.slice(0, 4))}
      </div>
    </article>`).join("");

  $("#stacklist").innerHTML = STACK.map(([en, ru, v]) => `<div><dt>${lang === "ru" ? ru : en}</dt><dd>${v}</dd></div>`).join("");
  $("#edu").innerHTML = EDU[lang].map((e) => `<p>${e}</p>`).join("");
}

// ---------- sheet: dialog on desktop, bottom sheet on phone ----------
function openSheet(key) {
  const [kind, id] = key.split(":");
  const t = T[lang];
  let html = "";
  if (kind === "proj") {
    const p = PROJECTS.find((x) => x.id === id);
    html = `
      <div class="sh-media">${p.img ? `<img src="${p.img}" alt="">` : COVERS[p.cover]()}${p.extra ? `<img src="${p.extra}" alt="" class="extra">` : ""}</div>
      <div class="card-top"><h3>${esc(p.name)}</h3>${badge(p.status)}</div>
      <p>${p.sum[lang]}</p><p class="dim">${p.body[lang]}</p>${tags(p.tags)}
      ${p.url && p.status !== "wip" ? `<a class="btn primary" href="${p.url}" target="_blank" rel="noopener">${t.open} ${new URL(p.url).host} ↗</a>` : ""}`;
  } else {
    const j = JOBS.find((x) => x.id === id);
    html = `
      <p class="when">${j.dates[lang]}</p><h3>${esc(j.org)}</h3><p class="role">${j.role[lang]}</p>
      <div class="sh-pv">${PREVIEWS[j.preview]()}</div>
      <ul class="bullets">${j.bullets[lang].map((b) => `<li>${b}</li>`).join("")}</ul>${tags(j.tags)}`;
  }
  $("#sheetbody").innerHTML = html;
  $("#sheet").hidden = $("#back").hidden = false;
  requestAnimationFrame(() => document.body.classList.add("sheet-open"));
}
function closeSheet() {
  document.body.classList.remove("sheet-open");
  setTimeout(() => ($("#sheet").hidden = $("#back").hidden = true), 220);
}

document.addEventListener("click", (e) => {
  const l = e.target.closest("[data-lang]");
  if (l) { lang = l.dataset.lang; localStorage.setItem("lang", lang); render(); return; }
  const o = e.target.closest("[data-open]");
  if (o) openSheet(o.dataset.open);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSheet();
  if (e.key === "Enter" && e.target.matches("[data-open]")) openSheet(e.target.dataset.open);
});
$("#back").addEventListener("click", closeSheet);
$("#close").addEventListener("click", closeSheet);

// swipe down to close the bottom sheet
let y0 = null;
$("#sheet").addEventListener("touchstart", (e) => { if ($("#sheet").scrollTop <= 0) y0 = e.touches[0].clientY; }, { passive: true });
$("#sheet").addEventListener("touchend", (e) => { if (y0 !== null && e.changedTouches[0].clientY - y0 > 80) closeSheet(); y0 = null; });

render();
