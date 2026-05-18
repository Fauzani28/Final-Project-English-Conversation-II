/* ============================================================
   WORD BANKS per difficulty (Now includes Indonesian translation)
   ============================================================ */
const WORD_BANKS = {
  easy: [
    {en: 'gun', id: 'senapan'}, {en: 'aim', id: 'bidik'}, {en: 'hit', id: 'kena'},
    {en: 'war', id: 'perang'}, {en: 'win', id: 'menang'}, {en: 'map', id: 'peta'},
    {en: 'run', id: 'lari'}, {en: 'fly', id: 'terbang'}, {en: 'top', id: 'atas'},
    {en: 'arm', id: 'lengan'}, {en: 'log', id: 'batang kayu'}, {en: 'red', id: 'merah'},
    {en: 'far', id: 'jauh'}, {en: 'big', id: 'besar'}, {en: 'new', id: 'baru'},
    {en: 'old', id: 'lama'}, {en: 'sky', id: 'langit'}, {en: 'cat', id: 'kucing'}, 
    {en: 'dog', id: 'anjing'}, {en: 'cup', id: 'cangkir'}, {en: 'foe', id: 'musuh'},
    {en: 'spy', id: 'mata-mata'}, {en: 'jet', id: 'pesawat jet'}, {en: 'bow', id: 'busur'},
    {en: 'axe', id: 'kapak'}, {en: 'gas', id: 'gas'}, {en: 'die', id: 'mati'},
    {en: 'end', id: 'akhir'}, {en: 'cut', id: 'potong'}, {en: 'ash', id: 'abu'},
    {en: 'air', id: 'udara'}, {en: 'sea', id: 'laut'}, {en: 'mud', id: 'lumpur'},
    {en: 'pit', id: 'lubang'}, {en: 'fog', id: 'kabut'}
  ],
  medium: [
    // 4 Huruf
    {en: 'tank', id: 'tank'}, {en: 'bomb', id: 'bom'}, {en: 'fire', id: 'tembak'},
    {en: 'base', id: 'markas'}, {en: 'army', id: 'tentara'}, {en: 'raid', id: 'serbuan'},
    {en: 'ally', id: 'sekutu'}, {en: 'camp', id: 'kamp'}, {en: 'hero', id: 'pahlawan'},
    {en: 'ruin', id: 'kehancuran'}, {en: 'flag', id: 'bendera'}, {en: 'fort', id: 'benteng'},
    {en: 'jeep', id: 'jip'}, {en: 'navy', id: 'angkatan laut'}, {en: 'shot', id: 'tembakan'},
    {en: 'trap', id: 'perangkap'}, {en: 'zone', id: 'zona'}, {en: 'ammo', id: 'amunisi'},
    {en: 'risk', id: 'risiko'}, {en: 'heal', id: 'sembuhkan'}, {en: 'kill', id: 'bunuh'},
    // 5 Huruf
    {en: 'shoot', id: 'tembak'}, {en: 'guard', id: 'penjaga'}, {en: 'enemy', id: 'musuh'},
    {en: 'scout', id: 'pengintai'}, {en: 'force', id: 'pasukan'}, {en: 'squad', id: 'regu'},
    {en: 'fleet', id: 'armada'}, {en: 'armor', id: 'baju besi'}, {en: 'blade', id: 'pedang tajam'},
    {en: 'blood', id: 'darah'}, {en: 'brave', id: 'berani'}, {en: 'cover', id: 'berlindung'},
    {en: 'clash', id: 'bentrokan'}, {en: 'crash', id: 'tabrakan'}, {en: 'dodge', id: 'menghindar'},
    {en: 'drill', id: 'latihan'}, {en: 'drone', id: 'pesawat nirawak'}, {en: 'glory', id: 'kejayaan'},
    {en: 'honor', id: 'kehormatan'}, {en: 'laser', id: 'laser'}, {en: 'medic', id: 'medis'},
    {en: 'melee', id: 'jarak dekat'}, {en: 'pilot', id: 'pilot'}, {en: 'radar', id: 'radar'},
    {en: 'rifle', id: 'senapan'}, {en: 'siege', id: 'pengepungan'}, {en: 'troop', id: 'pasukan'}
  ],
  hard: [
    // 6 Huruf
    {en: 'battle', id: 'pertempuran'}, {en: 'target', id: 'sasaran'}, {en: 'sniper', id: 'penembak jitu'},
    {en: 'combat', id: 'pertarungan'}, {en: 'shield', id: 'perisai'}, {en: 'attack', id: 'serang'},
    {en: 'turret', id: 'kubah senjata'}, {en: 'defend', id: 'bertahan'}, {en: 'weapon', id: 'senjata'},
    {en: 'ambush', id: 'penyergapan'}, {en: 'armory', id: 'gudang senjata'}, {en: 'bullet', id: 'peluru'},
    {en: 'bunker', id: 'bungker'}, {en: 'cannon', id: 'meriam'}, {en: 'charge', id: 'serbu'},
    {en: 'convoy', id: 'konvoi'}, {en: 'danger', id: 'bahaya'}, {en: 'deploy', id: 'menyebarkan'},
    {en: 'escape', id: 'melarikan diri'}, {en: 'flight', id: 'penerbangan'}, {en: 'gunner', id: 'penembak'},
    {en: 'helmet', id: 'helm'}, {en: 'medkit', id: 'kotak medis'}, {en: 'patrol', id: 'patroli'},
    {en: 'pistol', id: 'pistol'}, {en: 'plasma', id: 'plasma'}, {en: 'rescue', id: 'penyelamatan'},
    {en: 'rocket', id: 'roket'}, {en: 'secure', id: 'mengamankan'}, {en: 'strike', id: 'serangan'},
    // 7 Huruf
    {en: 'soldier', id: 'prajurit'}, {en: 'missile', id: 'rudal'}, {en: 'command', id: 'perintah'},
    {en: 'stealth', id: 'siluman'}, {en: 'assault', id: 'serangan'}, {en: 'destroy', id: 'hancurkan'},
    {en: 'airdrop', id: 'terjun payung'}, {en: 'cavalry', id: 'kavaleri'}, {en: 'fighter', id: 'petarung'},
    {en: 'firearm', id: 'senjata api'}, {en: 'grenade', id: 'granat'}, {en: 'hostage', id: 'sandera'},
    {en: 'invader', id: 'penjajah'}, {en: 'mission', id: 'misi'}, {en: 'officer', id: 'perwira'},
    {en: 'outpost', id: 'pos terdepan'}, {en: 'platoon', id: 'pleton'}, {en: 'protect', id: 'melindungi'},
    {en: 'retreat', id: 'mundur'}, {en: 'revenge', id: 'balas dendam'}, {en: 'shotgun', id: 'senapan patah'},
    {en: 'survive', id: 'bertahan hidup'}, {en: 'tactics', id: 'taktik'}, {en: 'torpedo', id: 'torpedo'},
    {en: 'vehicle', id: 'kendaraan'}, {en: 'victory', id: 'kemenangan'}
  ],
  extreme: [
    // 7 Huruf
    {en: 'arsenal', id: 'gudang senjata'}, {en: 'warrior', id: 'petarung'}, {en: 'veteran', id: 'veteran'},
    // 8 Huruf
    {en: 'accuracy', id: 'akurasi'}, {en: 'sabotage', id: 'sabotase'}, {en: 'invasion', id: 'invasi'},
    {en: 'tactical', id: 'taktis'}, {en: 'warplane', id: 'pesawat tempur'}, {en: 'alliance', id: 'aliansi'},
    {en: 'ambusher', id: 'penyergap'}, {en: 'assassin', id: 'pembunuh'}, {en: 'aviation', id: 'penerbangan'},
    {en: 'barracks', id: 'barak'}, {en: 'campaign', id: 'kampanye'}, {en: 'casualty', id: 'korban'},
    {en: 'conflict', id: 'konflik'}, {en: 'defenses', id: 'pertahanan'}, {en: 'dictator', id: 'diktator'},
    {en: 'dynamite', id: 'dinamit'}, {en: 'enforcer', id: 'penegak'}, {en: 'garrison', id: 'garnisun'},
    {en: 'guerrila', id: 'gerilya'}, {en: 'gunfight', id: 'baku tembak'}, {en: 'hostile', id: 'bermusuhan'},
    {en: 'infantry', id: 'infanteri'}, {en: 'ironclad', id: 'berlapis besi'}, {en: 'kamikaze', id: 'kamikaze'},
    {en: 'landmine', id: 'ranjau darat'}, {en: 'military', id: 'militer'}, {en: 'obstacle', id: 'rintangan'},
    {en: 'paralyze', id: 'melumpuhkan'}, {en: 'shrapnel', id: 'pecahan peluru'}, {en: 'skirmish', id: 'pertempuran kecil'},
    {en: 'strategy', id: 'strategi'},
    // 9 Huruf
    {en: 'battalion', id: 'batalion'}, {en: 'destroyer', id: 'penghancur'}, {en: 'artillery', id: 'artileri'},
    {en: 'explosive', id: 'bahan peledak'}, {en: 'commander', id: 'komandan'}, {en: 'munitions', id: 'amunisi'},
    {en: 'barricade', id: 'barikade'}, {en: 'advantage', id: 'keuntungan'}, {en: 'aerospace', id: 'dirgantara'},
    {en: 'assailant', id: 'penyerang'}, {en: 'bloodshed', id: 'pertumpahan darah'}, {en: 'catapult', id: 'ketapel'},
    {en: 'conqueror', id: 'penakluk'}, {en: 'crossfire', id: 'tembak-menembak'}, {en: 'defensive', id: 'defensif'},
    {en: 'devastate', id: 'menghancurkan'}, {en: 'eliminate', id: 'mengeliminasi'}, {en: 'emergency', id: 'darurat'},
    {en: 'encounter', id: 'bentrokan'}, {en: 'espionage', id: 'spionase'}, {en: 'execution', id: 'eksekusi'},
    {en: 'frontline', id: 'garis depan'}, {en: 'insurgent', id: 'pemberontak'}, {en: 'intercept', id: 'mencegat'},
    {en: 'mercenary', id: 'tentara bayaran'}, {en: 'minefield', id: 'medan ranjau'}, {en: 'navigator', id: 'navigator'},
    {en: 'offensive', id: 'serangan'}, {en: 'operation', id: 'operasi'}, {en: 'parachute', id: 'parasut'},
    {en: 'perimeter', id: 'perimeter'}, {en: 'radiation', id: 'radiasi'}, {en: 'rebellion', id: 'pemberontakan'},
    {en: 'surrender', id: 'menyerah'}, {en: 'terrorist', id: 'teroris'}, {en: 'vigilante', id: 'hakim sendiri'}
  ]
};

/* ============================================================
   HIGH SCORE SYSTEM (LocalStorage)
   ============================================================ */
let highScores = JSON.parse(localStorage.getItem('typingTankHS')) || {
  easy: 0, medium: 0, hard: 0, extreme: 0, chaos: 0
};

function updateMenuHighScores() {
  ['easy', 'medium', 'hard', 'extreme', 'chaos'].forEach(diff => {
    const el = document.getElementById(`hs-${diff}`);
    if (el) el.textContent = `BEST: ${highScores[diff]}`;
  });
  
  // Jika punya skor Chaos, tampilkan di teks rahasia
  if (highScores.chaos > 0) {
    document.querySelector('.menu-hint').textContent = `[ CHAOS BEST: ${highScores.chaos} ]`;
  }
}

// Panggil sekali saat game baru dimuat
updateMenuHighScores();

/* ============================================================
   DIFFICULTY CONFIG
   ============================================================ */
const DIFF_CONFIG = {
  easy:    { damage: 2, speed: 55,  spawnRate: 3500, scorePerKill: 50,  label: 'easy'    },
  medium:  { damage: 4, speed: 75,  spawnRate: 3400, scorePerKill: 100, label: 'medium'  },
  hard:    { damage: 6, speed: 95, spawnRate: 3300, scorePerKill: 200, label: 'hard'    },
  extreme: { damage: 8, speed: 110, spawnRate: 3200, scorePerKill: 400, label: 'extreme' },
  // Tambahkan baris ini untuk mode rahasia:
  chaos:   { damage: 10, speed: 100, spawnRate: 2600, scorePerKill: 1000, label: 'chaos'   }
};

/* ============================================================
   AUDIO CONTEXT (Web Audio API - simple sound effects)
   ============================================================ */
let audioCtx = null;

function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

/** Play a short synthesized sound */
function playSound(type) {
  try {
    const ctx = getAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (type === 'shoot') {
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.start(); osc.stop(ctx.currentTime + 0.14);
    } else if (type === 'explode') {
      const bufSize = ctx.sampleRate * 0.2;
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const g2 = ctx.createGain();
      src.connect(g2); g2.connect(ctx.destination);
      g2.gain.setValueAtTime(0.4, ctx.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      src.start(); src.stop(ctx.currentTime + 0.25);
      return;
    } else if (type === 'hit') {
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start(); osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'type') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.start(); osc.stop(ctx.currentTime + 0.04);
    } else if (type === 'error') {
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.start(); osc.stop(ctx.currentTime + 0.15);
    }
  } catch(e) { /* silent fail */ }
}

/* ============================================================
   STAR FIELD GENERATOR
   ============================================================ */
function generateStars() {
  const sf = document.getElementById('starField');
  sf.innerHTML = '';
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2 + 0.5;
    s.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${size}px; height:${size}px;
      --t:${(Math.random()*3+1.5).toFixed(1)}s;
      animation-delay:${(Math.random()*3).toFixed(1)}s;
    `;
    sf.appendChild(s);
  }
}

/* ============================================================
   SVG BUILDER — Enemy Tank
   ============================================================ */
function buildEnemySVG() {
  return `<svg viewBox="0 0 80 56" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="24" width="64" height="20" rx="3" fill="#3a0a0a" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="14" y="14" width="38" height="15" rx="3" fill="#2a0505" stroke="#ff4444" stroke-width="1"/>
    <!-- Cannon pointing left -->
    <rect x="4" y="18" width="18" height="7" rx="2" fill="#200303" stroke="#cc2222" stroke-width="1"/>
    <!-- Wheels -->
    <circle cx="14" cy="44" r="9" fill="#1a0505" stroke="#ff4444" stroke-width="1.5"/>
    <circle cx="14" cy="44" r="4" fill="#3a0a0a"/>
    <circle cx="58" cy="44" r="9" fill="#1a0505" stroke="#ff4444" stroke-width="1.5"/>
    <circle cx="58" cy="44" r="4" fill="#3a0a0a"/>
    <circle cx="36" cy="44" r="7" fill="#1a0505" stroke="#ff4444" stroke-width="1"/>
    <circle cx="36" cy="44" r="3" fill="#3a0a0a"/>
    <!-- Track -->
    <rect x="6" y="38" width="64" height="8" rx="2" fill="none" stroke="#882222" stroke-width="2" stroke-dasharray="6,4"/>
    <!-- Skull emblem -->
    <text x="44" y="35" font-size="10" fill="#ff4444" text-anchor="middle">☠</text>
  </svg>`;
}

/* ============================================================
   GAME STATE
   ============================================================ */
let gameState = {
  hp: 100,
  score: 0,
  combo: 1,
  timeLeft: 60,
  enemies: [],
  bullets: [],
  activeEnemy: null,
  typedIndex: 0,
  difficulty: 'easy',
  running: false,
  paused: false,
  timerInterval: null,
  spawnInterval: null,
  animFrame: null,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  kills: 0,
};

/* ============================================================
   UI ELEMENT REFERENCES
   ============================================================ */
const menuScreen  = document.getElementById('menuScreen');
const gameScreen  = document.getElementById('gameScreen');
const endScreen   = document.getElementById('endScreen');
const pauseScreen = document.getElementById('pauseScreen');
const hpBar       = document.getElementById('hpBar');
const hpNum       = document.getElementById('hpNum');
const scoreVal    = document.getElementById('scoreVal');
const comboVal    = document.getElementById('comboVal');
const timerVal    = document.getElementById('timerVal');
const hudDiff     = document.getElementById('hudDiff');
const typedChars  = document.getElementById('typedChars');
const playerTank  = document.getElementById('playerTank');
const enemyLayer  = document.getElementById('enemyLayer');
const screenFlash = document.getElementById('screenFlash');
const entLayer    = document.getElementById('entitiesLayer');
const endTitle    = document.getElementById('endTitle');
const endScore    = document.getElementById('endScore');
const endKills    = document.getElementById('endKills');
const endAcc      = document.getElementById('endAcc');
const mobileInput = document.getElementById('mobileInput');
const mobileKbBtn = document.getElementById('mobileKbBtn');

// Buttons
const restartBtn      = document.getElementById('restartBtn');
const homeBtn         = document.getElementById('homeBtn');
const hudPauseBtn     = document.getElementById('hudPauseBtn');
const resumeBtn       = document.getElementById('resumeBtn');
const pauseRestartBtn = document.getElementById('pauseRestartBtn');
const pauseHomeBtn    = document.getElementById('pauseHomeBtn');

/* ============================================================
   MENU: Difficulty selection
   ============================================================ */
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    startGame(btn.dataset.diff);
  });
});

/* ============================================================
   SECRET CHAOS MODE (Easter Egg)
   ============================================================ */
const secretModeBtn = document.querySelector('.menu-hint');
secretModeBtn.style.cursor = 'pointer'; // Mengubah kursor jadi telunjuk saat di-hover

secretModeBtn.addEventListener('click', () => {
  // Gabungkan SEMUA kata dari Easy sampai Extreme
  // Jadi kadang muncul 3 huruf, kadang 15 huruf secara acak!
  WORD_BANKS.chaos = [
    ...WORD_BANKS.easy, 
    ...WORD_BANKS.medium, 
    ...WORD_BANKS.hard, 
    ...WORD_BANKS.extreme
  ];
  
  // Mulai game dengan mode rahasia
  startGame('chaos');
});

/* ============================================================
   START GAME
   ============================================================ */


   /* ============================================================
   MOBILE KEYBOARD LOGIC
   ============================================================ */
mobileKbBtn.addEventListener('click', () => {
  mobileInput.focus();
  mobileKbBtn.style.background = 'var(--cyan)'; // Ubah warna saat aktif
});

mobileInput.addEventListener('blur', () => {
  mobileKbBtn.style.background = 'var(--green)'; // Kembali ke warna asal jika keyboard tertutup
});

mobileInput.addEventListener('input', (e) => {
  if (!gameState.running || gameState.paused) return;
  const val = mobileInput.value;
  if (val.length > 0) {
    const char = val.slice(-1).toLowerCase(); // Ambil huruf terakhir yang diketik
    mobileInput.value = ''; // Langsung kosongkan lagi agar tidak menumpuk
    
    // Pastikan yang ditekan adalah huruf a-z
    if (char.match(/[a-z]/)) {
      processInputChar(char);
    }
  }
});
function startGame(diff) {
  clearInterval(gameState.timerInterval);
  clearInterval(gameState.spawnInterval);
  cancelAnimationFrame(gameState.animFrame);

  gameState = {
    hp: 100, score: 0, combo: 1,
    timeLeft: 120,
    enemies: [], bullets: [],
    activeEnemy: null, typedIndex: 0,
    difficulty: diff, running: true, paused: false,
    timerInterval: null, spawnInterval: null,
    animFrame: null,
    totalKeystrokes: 0, correctKeystrokes: 0, kills: 0,
  };

  hudDiff.textContent = diff.toUpperCase();
  hudDiff.className = 'hud-diff ' + diff;
  timerVal.classList.remove('danger');

  enemyLayer.innerHTML = '';
  document.querySelectorAll('.bullet, .explosion, .mini-hit, .score-popup').forEach(e => e.remove());

  menuScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  pauseScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  generateStars();
  updateHUD();

  gameState.timerInterval = setInterval(tickTimer, 1000);

  const cfg = DIFF_CONFIG[diff];
  gameState.spawnInterval = setInterval(spawnEnemy, cfg.spawnRate);
  spawnEnemy();

  lastTime = performance.now();
  gameLoop(lastTime);

  document.addEventListener('keydown', handleKey);
}

/* ============================================================
   PAUSE LOGIC
   ============================================================ */
function togglePause() {
  if (!gameState.running || gameState.hp <= 0 || gameState.timeLeft <= 0) return;

  gameState.paused = !gameState.paused;

  if (gameState.paused) {
    clearInterval(gameState.timerInterval);
    clearInterval(gameState.spawnInterval);
    cancelAnimationFrame(gameState.animFrame);
    pauseScreen.classList.remove('hidden');
  } else {
    pauseScreen.classList.add('hidden');
    const cfg = DIFF_CONFIG[gameState.difficulty];
    gameState.timerInterval = setInterval(tickTimer, 1000);
    gameState.spawnInterval = setInterval(spawnEnemy, cfg.spawnRate);
    
    lastTime = performance.now(); 
    gameState.animFrame = requestAnimationFrame(gameLoop);
  }
}

function goHome() {
  gameState.running = false;
  clearInterval(gameState.timerInterval);
  clearInterval(gameState.spawnInterval);
  cancelAnimationFrame(gameState.animFrame);
  document.removeEventListener('keydown', handleKey);
  
  pauseScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  menuScreen.classList.remove('hidden');
}

hudPauseBtn.addEventListener('click', togglePause);
resumeBtn.addEventListener('click', togglePause);
pauseRestartBtn.addEventListener('click', () => startGame(gameState.difficulty));
restartBtn.addEventListener('click', () => startGame(gameState.difficulty));
pauseHomeBtn.addEventListener('click', goHome);
homeBtn.addEventListener('click', goHome);


/* ============================================================
   TIMER TICK
   ============================================================ */
function tickTimer() {
  if (!gameState.running || gameState.paused) return;
  gameState.timeLeft--;
  if (gameState.timeLeft <= 10) {
    timerVal.classList.add('danger');
  }
  if (gameState.timeLeft <= 0) {
    endGame('victory');
  }
  updateHUD();
}

/* ============================================================
   SPAWN ENEMY
   ============================================================ */
function spawnEnemy() {
  if (!gameState.running || gameState.paused) return;

  const words = WORD_BANKS[gameState.difficulty];
  const wordObj = words[Math.floor(Math.random() * words.length)];
  const cfg   = DIFF_CONFIG[gameState.difficulty];

  const el = document.createElement('div');
  el.className = 'enemy';
  const startX = entLayer.offsetWidth + 20;
  el.style.left = startX + 'px';
  el.innerHTML = buildEnemySVG() + `<div class="enemy-word" id="ew-${Date.now()}"></div>`;
  enemyLayer.appendChild(el);

  const wordEl = el.querySelector('.enemy-word');

  const enemy = {
    id: Date.now() + Math.random(),
    word: wordObj.en,      // English word to type
    wordId: wordObj.id,    // Indonesian translation to read
    el,
    wordEl,
    x: startX,
    speed: cfg.speed,
    typedIndex: 0,
    alive: true,
    isDying: false, // Flag menunggu peluru terakhir
  };

  renderEnemyWord(enemy);
  gameState.enemies.push(enemy);

  if (!gameState.activeEnemy) setActiveEnemy(enemy);
}

/* ============================================================
   RENDER ENEMY WORD (Above the Tank)
   ============================================================ */
function renderEnemyWord(enemy) {
  let html = '';
  // Ini tetap mencetak kata bahasa Inggris di atas tank
  for (let i = 0; i < enemy.word.length; i++) {
    const ch = enemy.word[i];
    if (i < enemy.typedIndex) {
      html += `<span class="char-done">${ch}</span>`;
    } else if (i === enemy.typedIndex) {
      html += `<span class="char-current">${ch}</span>`;
    } else {
      html += `<span class="char-pending">${ch}</span>`;
    }
  }
  enemy.wordEl.innerHTML = html;
}

/* ============================================================
   SET ACTIVE ENEMY
   ============================================================ */
function setActiveEnemy(enemy) {
  if (gameState.activeEnemy) {
    gameState.activeEnemy.el.classList.remove('active');
  }
  gameState.activeEnemy = enemy;
  gameState.typedIndex  = enemy ? enemy.typedIndex : 0;
  
  if (enemy) {
    enemy.el.classList.add('active');
    updateWordDisplay(enemy);
  } else {
    typedChars.innerHTML = '';
  }
}

/* ============================================================
   UPDATE WORD DISPLAY (Center of the screen)
   ============================================================ */
function updateWordDisplay(enemy) {
  if (!enemy) { typedChars.innerHTML = ''; return; }
  // Tampilkan bahasa Indonesia di tengah layar untuk dibaca
  typedChars.innerHTML = `<span style="color: var(--cyan); text-shadow: 0 0 10px var(--cyan); text-transform: uppercase;">${enemy.wordId}</span>`;
}

/* ============================================================
   KEYBOARD INPUT HANDLER (Desktop & Mobile)
   ============================================================ */
// Menangkap ketikan dari keyboard fisik PC/Laptop
function handleKey(e) {
  if (e.key === 'Escape') {
    togglePause();
    return;
  }

  if (!gameState.running || gameState.paused) return;
  if (e.key.length !== 1 || e.ctrlKey || e.altKey || e.metaKey) return;
  
  processInputChar(e.key.toLowerCase());
}

// Logika inti pemrosesan huruf (digunakan oleh PC dan HP)
function processInputChar(key) {
  gameState.totalKeystrokes++;

  const enemy = gameState.activeEnemy;
  if (!enemy) return;

  const expected = enemy.word[enemy.typedIndex];

  if (key === expected) {
    gameState.correctKeystrokes++;
    enemy.typedIndex++;
    playSound('type');
    renderEnemyWord(enemy); 

    const isKillShot = (enemy.typedIndex >= enemy.word.length);
    fireBullet(enemy, isKillShot);

    if (isKillShot) {
      enemy.isDying = true;
      enemy.el.classList.add('dying');
      
      const next = gameState.enemies.find(e => e.alive && !e.isDying);
      setActiveEnemy(next || null);
    }
  } else {
    // --- JIKA SALAH KETIK ---
    playSound('error'); // Bunyi "tet!" langsung terdengar
    resetCombo();
    
    // Reset ketikan musuh ke awal
    enemy.typedIndex = 0;
    renderEnemyWord(enemy);
    
    // Musuh balas menembak! (Darah akan berkurang saat peluru sampai)
    fireEnemyBullet(enemy); 
  }
}

/* ============================================================
   FIRE BULLET
   ============================================================ */
function fireBullet(targetEnemy, isKillShot = false) {
  playerTank.classList.remove('recoil');
  void playerTank.offsetWidth;
  playerTank.classList.add('recoil');
  playerTank.addEventListener('animationend', () => playerTank.classList.remove('recoil'), { once: true });

  playSound('shoot');
  screenFlash.classList.add('shake');
  setTimeout(() => screenFlash.classList.remove('shake'), 300);

  const bullet = document.createElement('div');
  bullet.className = 'bullet';
  if (isKillShot) bullet.classList.add('kill-shot'); // Efek warna beda untuk kill shot

  const playerRight = 90 + 40; 
  bullet.style.left = playerRight + 'px';
  entLayer.appendChild(bullet);

  const bObj = {
    el: bullet,
    x: playerRight,
    targetEnemy,
    speed: 1200, // Dipercepat sedikit agar lebih responsif
    isKillShot
  };
  gameState.bullets.push(bObj);
}

/* ============================================================
   FIRE ENEMY BULLET (Saat salah ketik)
   ============================================================ */
function fireEnemyBullet(enemy) {
  // Buat elemen peluru musuh
  const bullet = document.createElement('div');
  bullet.className = 'bullet enemy-bullet';
  
  // Posisi awal di tank musuh
  const enemyLeft = enemy.x;
  bullet.style.left = enemyLeft + 'px';
  entLayer.appendChild(bullet);

  // Posisi akhir (Tank Pemain ada di x: 130)
  const targetX = 130; 
  
  // Animasi peluru meluncur ke pemain
  bullet.animate([
    { left: enemyLeft + 'px' },
    { left: targetX + 'px' }
  ], { 
    duration: 250, // Kecepatan peluru musuh (ms)
    easing: 'linear' 
  }).onfinish = () => {
    bullet.remove(); // Hapus peluru saat sampai
    
    // Kurangi darah dan berikan efek hit TEPAT SAAT peluru mengenai pemain
    if (gameState.running) {
      playSound('hit');
      flashScreen('red');
      spawnMiniHit(targetX + 20, 28); // Efek percikan di tank pemain
      takeDamage(DIFF_CONFIG[gameState.difficulty].damage);
    }
  };
}

/* ============================================================
   DESTROY ENEMY (Hanya dipanggil saat kill shot mengenai target)
   ============================================================ */
function destroyEnemy(enemy) {
  if (!enemy.alive) return;
  enemy.alive = false; 

  spawnExplosion(enemy.x + 40, entLayer.offsetHeight - 40);
  playSound('explode');

  const cfg = DIFF_CONFIG[gameState.difficulty];
  const gained = cfg.scorePerKill * gameState.combo;
  gameState.score += gained;
  gameState.kills++;
  gameState.combo = Math.min(gameState.combo + 1, 8); 

  const popup = document.createElement('div');
  popup.className = 'score-popup';
  popup.textContent = `+${gained}`;
  popup.style.left = (enemy.x + 20) + 'px';
  popup.style.bottom = (entLayer.offsetHeight + 20) + 'px';
  gameScreen.appendChild(popup);
  setTimeout(() => popup.remove(), 1000);

  enemy.el.remove();
  gameState.enemies = gameState.enemies.filter(e => e !== enemy);

  updateHUD();
  flashScreen('green');
}

/* ============================================================
   SPAWN MINI HIT
   ============================================================ */
function spawnMiniHit(x, y) {
  const hit = document.createElement('div');
  hit.className = 'mini-hit';
  hit.style.left = x + 'px';
  hit.style.bottom = y + 'px';
  hit.innerHTML = '<div class="mini-hit-core"></div>';
  entLayer.appendChild(hit);
  setTimeout(() => hit.remove(), 150);
}

/* ============================================================
   EXPLOSIONS
   ============================================================ */
function spawnExplosion(x, y) {
  const exp = document.createElement('div');
  exp.className = 'explosion';
  exp.style.left = (x - 40) + 'px';
  exp.style.bottom = (y - 40) + 'px';
  exp.innerHTML = `
    <div class="explosion-flash"></div>
    <div class="explosion-ring"></div>
    <div class="explosion-ring"></div>
    <div class="explosion-ring"></div>
  `;
  for (let i = 0; i < 10; i++) {
    const sp = document.createElement('div');
    sp.className = 'spark';
    const angle = (i / 10) * Math.PI * 2;
    const dist  = 30 + Math.random() * 30;
    sp.style.setProperty('--sx', (Math.cos(angle) * dist) + 'px');
    sp.style.setProperty('--sy', (Math.sin(angle) * dist - 40) + 'px');
    sp.style.setProperty('--sd', (0.4 + Math.random() * 0.4) + 's');
    sp.style.left = '38px'; sp.style.top = '38px';
    exp.appendChild(sp);
  }
  entLayer.appendChild(exp);
  setTimeout(() => exp.remove(), 800);
}

/* ============================================================
   PLAYER TAKE DAMAGE
   ============================================================ */
function takeDamage(amount) {
  gameState.hp = Math.max(0, gameState.hp - amount);
  updateHUD();
  if (gameState.hp <= 0) endGame('gameover');
}

function resetCombo() {
  gameState.combo = 1;
  updateHUD();
}

function flashScreen(color) {
  screenFlash.className = color;
  screenFlash.style.opacity = '1';
  setTimeout(() => { screenFlash.style.opacity = '0'; }, 150);
}

function updateHUD() {
  const hp = gameState.hp;
  hpBar.style.width = hp + '%';
  if (hp > 60) {
    hpBar.style.background = 'var(--hp-full)';
    hpBar.style.boxShadow  = '0 0 8px var(--hp-full)';
  } else if (hp > 30) {
    hpBar.style.background = 'var(--hp-mid)';
    hpBar.style.boxShadow  = '0 0 8px var(--hp-mid)';
  } else {
    hpBar.style.background = 'var(--hp-low)';
    hpBar.style.boxShadow  = '0 0 8px var(--hp-low)';
  }
  hpNum.textContent = hp;

  scoreVal.textContent = gameState.score.toString().padStart(6, '0');
  comboVal.textContent = '×' + gameState.combo;
  timerVal.textContent = gameState.timeLeft.toString().padStart(2, '0');
}

/* ============================================================
   MAIN GAME LOOP
   ============================================================ */
let lastTime = 0;

function gameLoop(ts = 0) {
  if (!gameState.running || gameState.paused) return;
  const dt = Math.min((ts - lastTime) / 1000, 0.1);
  lastTime = ts;

  // Move enemies left
  gameState.enemies.forEach(enemy => {
    if (!enemy.alive) return;
    enemy.x -= enemy.speed * dt;
    enemy.el.style.left = enemy.x + 'px';

    // Jika musuh menabrak player
    if (enemy.x < 130) {
      enemy.el.remove();
      gameState.enemies = gameState.enemies.filter(e => e !== enemy);

      if (gameState.activeEnemy === enemy) {
        const next = gameState.enemies.find(e => e.alive && !e.isDying);
        setActiveEnemy(next || null);
      }

      playSound('hit');
      flashScreen('red');
      takeDamage(15);
      spawnExplosion(140, entLayer.offsetHeight - 40);
    }
  });

  // Move bullets and check collisions
  gameState.bullets = gameState.bullets.filter(b => {
    if (!b.el.parentNode) return false;
    b.x += b.speed * dt;
    b.el.style.left = b.x + 'px';

    // Jika peluru mengenai target X musuh
    if (b.x >= b.targetEnemy.x) {
      b.el.remove(); 
      
      if (b.targetEnemy.alive) {
        if (b.isKillShot) {
          // Hanya meledak penuh kalau ini peluru terakhir
          destroyEnemy(b.targetEnemy);
        } else {
          // Jika belum peluru terakhir, keluarkan mini hit
          spawnMiniHit(b.targetEnemy.x, 28);
        }
      }
      return false; 
    }

    // Safety check jika peluru nyasar ke luar layar
    if (b.x > entLayer.offsetWidth + 40) {
      b.el.remove(); return false;
    }
    return true;
  });

  gameState.animFrame = requestAnimationFrame(gameLoop);
}

/* ============================================================
   END GAME
   ============================================================ */
function endGame(result) {
  gameState.running = false;
  clearInterval(gameState.timerInterval);
  clearInterval(gameState.spawnInterval);
  cancelAnimationFrame(gameState.animFrame);
  document.removeEventListener('keydown', handleKey);
  pauseScreen.classList.add('hidden'); 

  // Hitung Akurasi
  const acc = gameState.totalKeystrokes > 0
    ? Math.round((gameState.correctKeystrokes / gameState.totalKeystrokes) * 100)
    : 0;

  // --- LOGIKA HIGH SCORE ---
  if (gameState.score > highScores[gameState.difficulty]) {
    // Simpan rekor baru
    highScores[gameState.difficulty] = gameState.score;
    localStorage.setItem('typingTankHS', JSON.stringify(highScores));
    updateMenuHighScores(); 
    
    // Tampilan jika pecah rekor
    endTitle.textContent = 'NEW HIGH SCORE!';
    endTitle.className   = 'end-title victory';
    endTitle.style.color = 'var(--gold)';
    endTitle.style.textShadow = '0 0 30px var(--gold)';
    endScreen.className  = 'screen victory';
  } else {
    // Tampilan standar jika TIDAK pecah rekor
    endTitle.style = ''; // Reset style warna emas
    if (result === 'victory') {
      endTitle.textContent  = 'VICTORY!';
      endTitle.className    = 'end-title victory';
      endScreen.className   = 'screen victory';
    } else {
      endTitle.textContent  = 'GAME OVER';
      endTitle.className    = 'end-title gameover';
      endScreen.className   = 'screen';
    }
  }

  // Update nilai statistik di layar akhir
  endScore.textContent = gameState.score.toString().padStart(6, '0');
  endKills.textContent = gameState.kills;
  endAcc.textContent   = acc + '%';

  // --- TAMBAHAN: Memunculkan "Created by Fachri" ---
  let creditText = document.getElementById('creatorCredit');
  if (!creditText) {
    creditText = document.createElement('div');
    creditText.id = 'creatorCredit';
    
    // Styling agar tampilannya keren dan serasi dengan game
    creditText.style.marginTop = '40px';
    creditText.style.fontSize = '1.2rem';
    creditText.style.color = 'var(--cyan, #00ffff)'; // Warna Cyan
    creditText.style.textShadow = '0 0 10px var(--cyan, #00ffff)';
    creditText.style.letterSpacing = '3px';
    creditText.style.textTransform = 'uppercase';
    creditText.style.fontWeight = 'bold';
    
    // Memasukkan teks ke dalam endScreen
    endScreen.appendChild(creditText);
  }
  
  // Set teks yang akan selalu muncul saat Win/Lose
  creditText.textContent = 'Created by Fachri';

  // Transisi memunculkan layar akhir
  setTimeout(() => {
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
  }, 600);
}

/* ============================================================
   AMBIENT PARTICLES
   ============================================================ */
(function spawnAmbientParticles() {
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'ambient-particle';
    p.style.setProperty('--af', (5 + Math.random() * 8).toFixed(1) + 's');
    p.style.setProperty('--ad', (Math.random() * 8).toFixed(1) + 's');
    p.style.setProperty('--ax', ((Math.random() - 0.5) * 60).toFixed(0) + 'px');
    p.style.left = (Math.random() * 100) + '%';
    document.getElementById('gameWrapper').appendChild(p);
  }
})();

generateStars();