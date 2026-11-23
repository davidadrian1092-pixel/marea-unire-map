
const DATA = [
 {
  "id": "iasi",
  "nr": "01",
  "eticheta": "DOCUMENT NR. 01 • 1916–1918",
  "provincie": "Vechiul Regat",
  "titlu": "Iași, capitala refugiului",
  "coordonate": [
   47.1585,
   27.6014
  ],
  "imagine": "assets/iasi.jpg",
  "imagine_legenda": "Iași, capitala României în perioada refugiului, 1916–1918.",
  "descriere": "După ocuparea Bucureștiului în 1916, Regele, guvernul și Parlamentul s-au retras la Iași, care a devenit capitala țării până în 1918. Aici a fost reorganizată armata, care a rezistat la Mărăști, Mărășești și Oituz în vara anului 1917. Tot la Iași au fost făcute promisiunile de reformă agrară și electorală, iar orașul a rămas centrul politic prin care România a urmărit mersul Unirii Basarabiei.",
  "citat": "Pe aici nu se trece!",
  "citat_sursa": "Atribuit generalului Eremia Grigorescu, Mărășești, august 1917",
  "personalitati": [
   {
    "nume": "Regele Ferdinand I",
    "rol": "Suveranul României"
   },
   {
    "nume": "Regina Maria",
    "rol": "Sprijin al armatei și al diplomației"
   },
   {
    "nume": "Ion I. C. Brătianu",
    "rol": "Prim-ministru"
   }
  ]
 },
 {
  "id": "chisinau",
  "nr": "02",
  "eticheta": "DOCUMENT NR. 02 • 27 MARTIE 1918",
  "provincie": "Basarabia",
  "titlu": "Chișinău: Sfatul Țării votează Unirea",
  "coordonate": [
   47.0105,
   28.8638
  ],
  "imagine": "assets/chisinau.jpg",
  "imagine_legenda": "Sfatul Țării, Chișinău, 1918.",
  "descriere": "La 27 martie 1918 (9 aprilie, stil nou), Sfatul Țării a votat unirea Basarabiei cu România, cu 86 de voturi pentru, 3 împotrivă și 36 de abțineri. Decizia a venit după proclamarea Republicii Democratice Moldovenești și în contextul dezmembrării Imperiului Rus. Unirea a fost votată cu condiții de autonomie, de care Sfatul Țării a renunțat ulterior, în decembrie 1918.",
  "citat": "De azi înainte și pentru totdeauna se unește cu mama sa, România.",
  "citat_sursa": "Declarația Sfatului Țării, 27 martie 1918",
  "personalitati": [
   {
    "nume": "Ion Inculeț",
    "rol": "Președintele Sfatului Țării"
   },
   {
    "nume": "Pantelimon Halippa",
    "rol": "Lider al mișcării naționale"
   },
   {
    "nume": "Daniel Ciugureanu",
    "rol": "Președintele Consiliului Directorilor Generali"
   }
  ]
 },
 {
  "id": "cernauti",
  "nr": "03",
  "eticheta": "DOCUMENT NR. 03 • 28 NOIEMBRIE 1918",
  "provincie": "Bucovina",
  "titlu": "Cernăuți: Congresul General al Bucovinei",
  "coordonate": [
   48.2921,
   25.9358
  ],
  "imagine": "assets/cernauti.jpg",
  "imagine_legenda": "Cernăuți, 1918.",
  "descriere": "La 28 noiembrie 1918 (15 noiembrie, stil vechi), Congresul General al Bucovinei, întrunit la Cernăuți în Sala Sinodală, a votat unirea necondiționată a provinciei cu România. Congresul era condus de Iancu Flondor, iar Ion Nistor a avut un rol important în pregătirea lui. Unirea Bucovinei a fost votată cu puțin timp înainte de cea a Transilvaniei.",
  "citat": "Unirea necondiționată și pe vecie a Bucovinei, în vechile ei hotare, cu Regatul României.",
  "citat_sursa": "Rezoluția Congresului General al Bucovinei, 28 noiembrie 1918",
  "personalitati": [
   {
    "nume": "Iancu Flondor",
    "rol": "Președintele Congresului"
   },
   {
    "nume": "Ion Nistor",
    "rol": "Istoric și om politic"
   }
  ]
 },
 {
  "id": "alba_iulia",
  "nr": "04",
  "eticheta": "DOCUMENT NR. 04 • 1 DECEMBRIE 1918",
  "provincie": "Transilvania",
  "titlu": "Alba Iulia: Marea Adunare Națională",
  "coordonate": [
   46.0683,
   23.5716
  ],
  "imagine": "assets/alba-iulia.jpg",
  "imagine_legenda": "Marea Adunare Națională, Alba Iulia, 1 Decembrie 1918.",
  "descriere": "La 1 Decembrie 1918, 1228 de delegați aleși ai românilor din Transilvania, Banat, Crișana și Maramureș s-au întrunit la Alba Iulia, în prezența a zeci de mii de participanți. Rezoluția Unirii a fost citită de Vasile Goldiș. Adunarea a proclamat unirea cu România și a stabilit principii pentru guvernarea provinciei.",
  "citat": "Adunarea Națională a tuturor Românilor din Transilvania, Banat și Țara Ungurească [...] decretează unirea acestor Români și a tuturor teritoriilor locuite de dânșii cu România.",
  "citat_sursa": "Rezoluția de la Alba Iulia, 1 decembrie 1918",
  "personalitati": [
   {
    "nume": "Vasile Goldiș",
    "rol": "A citit Rezoluția Unirii"
   },
   {
    "nume": "Gheorghe Pop de Băsești",
    "rol": "Președintele Adunării"
   },
   {
    "nume": "Iuliu Hossu",
    "rol": "Episcop greco-catolic"
   },
   {
    "nume": "Iuliu Maniu",
    "rol": "Lider al Partidului Național Român"
   }
  ]
 }
];
const HOME = { center: [46.4, 25.3], zoom: 6 };
const state = { data: [], layer: null, markers: {}, activeId: null, filter: 'Toate' };
let map;

const $ = (s) => document.querySelector(s);
const panel = $('#panel');
const body = $('#panel-body');

/* ---------- Hartă ---------- */
function initMap() {
  map = L.map('map', { scrollWheelZoom: false, zoomControl: false, minZoom: 5, maxZoom: 12 }).setView(HOME.center, HOME.zoom);
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  state.layer = L.layerGroup().addTo(map);
}

function pinIcon(active) {
  return L.divIcon({
    className: '',
    html: `<div class="archive-pin ${active ? 'active' : ''}"><span class="ring"></span><span class="core"></span></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });
}

function renderMarkers() {
  state.layer.clearLayers();
  state.markers = {};
  state.data
    .filter((p) => state.filter === 'Toate' || p.provincie === state.filter)
    .forEach((p) => {
      const m = L.marker(p.coordonate, { icon: pinIcon(p.id === state.activeId), title: p.titlu, keyboard: true })
        .bindTooltip(p.id === 'alba_iulia' ? 'Alba Iulia' : p.titlu.split(':')[0].split(',')[0], {
          direction: 'top', offset: [0, -14], className: 'city-tip'
        })
        .on('click', () => select(p.id));
      m.addTo(state.layer);
      state.markers[p.id] = m;
    });
}

/* ---------- Panou lateral ---------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function template(p) {
  return `
    <p class="label text-crimson mb-3">${esc(p.eticheta)}</p>
    <h2 class="font-serif text-4xl md:text-[2.6rem] font-semibold leading-[1.05] mb-6">${esc(p.titlu)}</h2>
    <figure class="mb-6">
      <div class="border border-rule bg-paper p-1">
        <img src="${esc(p.imagine)}" alt="${esc(p.imagine_legenda)}" class="w-full h-52 object-cover"
             onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'label text-sepia h-52 flex items-center justify-center text-center px-4',textContent:'Imagine de arhivă: adaugă fișierul ${esc(p.imagine)}'}))">
      </div>
      <figcaption class="label text-sepia mt-2">${esc(p.imagine_legenda)}</figcaption>
    </figure>
    <p class="text-[15px] leading-relaxed text-ink mb-8">${esc(p.descriere)}</p>
    <blockquote class="border-l-2 border-gold pl-5 mb-8">
      <p class="font-serif italic text-[1.4rem] leading-snug">“${esc(p.citat)}”</p>
      <cite class="label text-sepia block mt-3 not-italic">${esc(p.citat_sursa)}</cite>
    </blockquote>
    <section>
      <h3 class="label text-sepia border-b border-rule pb-2 mb-1">Personalități marcante</h3>
      <ul>
        ${p.personalitati.map((x) => `
          <li class="flex items-baseline justify-between gap-4 py-3 border-b border-rule">
            <span class="font-serif text-xl font-semibold">${esc(x.nume)}</span>
            <span class="text-xs text-sepia text-right">${esc(x.rol)}</span>
          </li>`).join('')}
      </ul>
    </section>`;
}

function showPanel(p) {
  const open = !panel.classList.contains('translate-x-full');
  const swap = () => {
    body.innerHTML = template(p);
    panel.scrollTop = 0;
    requestAnimationFrame(() => body.classList.remove('fade'));
  };
  panel.classList.remove('translate-x-full');
  if (open) {
    body.classList.add('fade');
    setTimeout(swap, 250);
  } else {
    body.classList.add('fade');
    swap();
  }
}

function closePanel() {
  panel.classList.add('translate-x-full');
  state.activeId = null;
  renderMarkers();
}

/* ---------- Acțiuni ---------- */
function select(id) {
  const p = state.data.find((x) => x.id === id);
  if (!p) return;
  state.activeId = id;
  renderMarkers();
  map.flyTo(p.coordonate, 8, { duration: 1.5 });
  showPanel(p);
}

function overview() {
  closePanel();
  map.flyTo(HOME.center, HOME.zoom, { duration: 1.5 });
}

function setFilter(f) {
  state.filter = f;
  document.querySelectorAll('.tab').forEach((t) => t.setAttribute('aria-selected', t.dataset.f === f));
  const visible = state.data.filter((p) => f === 'Toate' || p.provincie === f);
  if (state.activeId && !visible.some((p) => p.id === state.activeId)) closePanel();
  renderMarkers();
  if (f === 'Toate') map.flyTo(HOME.center, HOME.zoom, { duration: 1.2 });
  else if (visible[0]) map.flyTo(visible[0].coordonate, 7, { duration: 1.2 });
}

function bindUI() {
  $('#close').addEventListener('click', closePanel);
  $('#overview').addEventListener('click', overview);
  $('#tabs').addEventListener('click', (e) => {
    const b = e.target.closest('.tab');
    if (b) setFilter(b.dataset.f);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });
}

/* ---------- Start ---------- */
function toMap(id) {
  $('#harta').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => select(id), 700);
}

function initNav() {
  document.querySelectorAll('.goto').forEach((b) => b.addEventListener('click', () => toMap(b.dataset.city)));
  const links = [...document.querySelectorAll('#toc a')];
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((l) => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach((s) => io.observe(s));
}

function init() {
  initMap();
  state.data = DATA;
  map.on('click', () => map.scrollWheelZoom.enable());
  map.on('mouseout', () => map.scrollWheelZoom.disable());
  bindUI();
  initNav();
  renderMarkers();
}
init();
