const levelsData = [
    {
        id: 1,
        title: "Level 1: Vokal Asas & Lanjutan",
        desc: "Koleksi huruf vokal asas dan majmuk dalam Hangul.",
        items: [
            { char: "ㅏ", rumi: "a", desc: "Bunyi 'a' seperti dalam Ayam.", stroke: "1. Garis tegak ke bawah\n2. Garis pendek melintang ke kanan" },
            { char: "ㅑ", rumi: "ya", desc: "Bunyi 'ya' seperti dalam Yasin.", stroke: "1. Garis tegak ke bawah\n2. Dua garis pendek melintang ke kanan" },
            { char: "ㅓ", rumi: "eo", desc: "Bunyi 'o' serak seperti dalam Obor.", stroke: "1. Garis pendek melintang ke kiri\n2. Garis tegak ke bawah" },
            { char: "ㅕ", rumi: "yeo", desc: "Bunyi 'yo' serak.", stroke: "1. Dua garis pendek melintang\n2. Garis tegak ke bawah" },
            { char: "ㅗ", rumi: "o", desc: "Bunyi 'o' bulat seperti dalam Orang.", stroke: "1. Garis tegak pendek\n2. Garis melintang di bawah" },
            { char: "ㅛ", rumi: "yo", desc: "Bunyi 'yo' bulat.", stroke: "1. Dua garis tegak pendek\n2. Garis melintang di bawah" },
            { char: "ㅜ", rumi: "u", desc: "Bunyi 'u' seperti dalam Ular.", stroke: "1. Garis melintang panjang\n2. Garis tegak pendek ke bawah" },
            { char: "ㅠ", rumi: "yu", desc: "Bunyi 'yu' seperti dalam Yuran.", stroke: "1. Garis melintang panjang\n2. Dua garis tegak pendek ke bawah" },
            { char: "ㅡ", rumi: "eu", desc: "Bunyi 'e' seperti dalam Enam.", stroke: "1. Garis melintang lurus dari kiri ke kanan" },
            { char: "ㅣ", rumi: "i", desc: "Bunyi 'i' seperti dalam Ikan.", stroke: "1. Garis tegak lurus dari atas ke bawah" },
            { char: "ㅐ", rumi: "ae", desc: "Bunyi 'e' taling terbuka.", stroke: "Gabungan ㅏ dan ㅣ" },
            { char: "ㅒ", rumi: "yae", desc: "Bunyi 'yae'.", stroke: "Gabungan ㅑ dan ㅣ" },
            { char: "ㅔ", rumi: "e", desc: "Bunyi 'e' seperti Ekor.", stroke: "Gabungan ㅓ dan ㅣ" },
            { char: "ㅖ", rumi: "ye", desc: "Bunyi 'ye'.", stroke: "Gabungan ㅕ dan ㅣ" },
            { char: "ㅘ", rumi: "wa", desc: "Bunyi 'wa'.", stroke: "Gabungan ㅗ dan ㅏ" },
            { char: "ㅙ", rumi: "wae", desc: "Bunyi 'wae'.", stroke: "Gabungan ㅗ, ㅏ dan ㅣ" },
            { char: "ㅚ", rumi: "oe", desc: "Bunyi 'oe'.", stroke: "Gabungan ㅗ dan ㅣ" },
            { char: "ㅝ", rumi: "wo", desc: "Bunyi 'wo'.", stroke: "Gabungan ㅜ dan ㅓ" },
            { char: "ㅞ", rumi: "we", desc: "Bunyi 'we'.", stroke: "Gabungan ㅜ, ㅓ dan ㅣ" },
            { char: "ㅟ", rumi: "wi", desc: "Bunyi 'wi'.", stroke: "Gabungan ㅜ dan ㅣ" }
        ]
    },
    {
        id: 2,
        title: "Level 2: Konsonan Asas",
        desc: "Koleksi huruf konsonan asas dalam Hangul.",
        items: [
            { char: "ㄱ", rumi: "g/k", desc: "Bunyi 'G' di awal, 'K' di akhir.", stroke: "1. Kanan kemudian terus ke bawah" },
            { char: "ㄴ", rumi: "n", desc: "Bunyi 'N' seperti Nasi.", stroke: "1. Ke bawah kemudian terus ke kanan" },
            { char: "ㄷ", rumi: "d/t", desc: "Bunyi 'D' di awal, 'T' di akhir.", stroke: "1. Kanan melintang\n2. Bawah dan kanan" },
            { char: "ㄹ", rumi: "r/l", desc: "Bunyi 'R' di awal, 'L' di akhir.", stroke: "1. Z-shape berbelok" },
            { char: "ㅁ", rumi: "m", desc: "Bunyi 'M' seperti Mata.", stroke: "1. Petak empat segi" },
            { char: "ㅂ", rumi: "b/p", desc: "Bunyi 'B' di awal, 'P' di akhir.", stroke: "1. Dua tegak, dua melintang" },
            { char: "ㅅ", rumi: "s", desc: "Bunyi 'S' seperti Saya.", stroke: "1. Garisan senget bentuk A" },
            { char: "ㅇ", rumi: "ng / senyap", desc: "Senyap di atas vokal, bunyi 'NG' di bawah.", stroke: "1. Bulatan mengikut arah jam" },
            { char: "ㅈ", rumi: "j", desc: "Bunyi 'J' seperti Jari.", stroke: "1. Garis melintang dan dua kaki senget" },
            { char: "ㅎ", rumi: "h", desc: "Bunyi 'H' seperti Hati.", stroke: "1. Topi di atas bulatan" }
        ]
    },
    {
        id: 3,
        title: "Level 3: Gabungan Suku Kata",
        desc: "Cara menggabung Konsonan + Vokal (K + V).",
        items: [
            { char: "가", rumi: "ga", desc: "G (ㄱ) + A (ㅏ) = GA", stroke: "Tulis konsonan ㄱ dulu di kiri, diikuti vokal ㅏ di kanan." },
            { char: "나", rumi: "na", desc: "N (ㄴ) + A (ㅏ) = NA", stroke: "Tulis konsonan ㄴ dulu, diikuti vokal ㅏ." },
            { char: "다", rumi: "da", desc: "D (ㄷ) + A (ㅏ) = DA", stroke: "Tulis konsonan ㄷ dulu, diikuti vokal ㅏ." },
            { char: "고", rumi: "go", desc: "G (ㄱ) + O (ㅗ) = GO", stroke: "Tulis konsonan ㄱ di atas, vokal ㅗ di bawah." },
            { char: "누", rumi: "nu", desc: "N (ㄴ) + U (ㅜ) = NU", stroke: "Tulis konsonan ㄴ di atas, vokal ㅜ di bawah." }
        ]
    },
    {
        id: 4,
        title: "Level 4: Kosa Kata Mudah",
        desc: "Perkataan harian pertama anda.",
        items: [
            { char: "우유", rumi: "u-yu", desc: "Maksud: Susu", stroke: "우 (U) + 유 (YU)" },
            { char: "아이", rumi: "a-i", desc: "Maksud: Budak / Kanak-kanak", stroke: "아 (A) + 이 (I)" },
            { char: "고기", rumi: "go-gi", desc: "Maksud: Daging", stroke: "고 (GO) + 기 (GI)" },
            { char: "나무", rumi: "na-mu", desc: "Maksud: Pokok / Kayu", stroke: "나 (NA) + 무 (MU)" }
        ]
    },
    {
        id: 5,
        title: "Level 5: Batchim (Konsonan Akhir)",
        desc: "Konsonan yang terletak di bawah blok suku kata.",
        items: [
            { char: "간", rumi: "gan", desc: "Berakhir dengan konsonan ㄴ (N) di bawah.", stroke: "ㄱ + ㅏ + ㄴ (N)" },
            { char: "학", rumi: "hak", desc: "Berakhir dengan konsonan ㄱ (K) di bawah.", stroke: "ㅎ + ㅏ + ㄱ (K)" },
            { char: "문", rumi: "mun", desc: "Maksud: Pintu. Berakhir dengan bunyi N.", stroke: "ㅁ + ㅜ + ㄴ (N)" },
            { char: "밥", rumi: "bap", desc: "Maksud: Nasi. Berakhir dengan bunyi P.", stroke: "ㅂ + ㅏ + ㅂ (P)" }
        ]
    },
    {
        id: 6,
        title: "Level 6: Peraturan Sebutan Lanjutan",
        desc: "Bagaimana sebutan berubah dalam ayat sebenar.",
        items: [
            { char: "안녕하세요", rumi: "annyeonghaseyo", desc: "Maksud: Selamat Sejahtera (Formal)", stroke: "Gabungan sebutan standard harian." },
            { char: "감사합니다", rumi: "gamsahamnida", desc: "Maksud: Terima Kasih", stroke: "Perhatikan perubahan bunyi ㅁ di akhir." },
            { char: "존맛", rumi: "jonmat", desc: "Bahasa santai bermaksud 'Sangat Sedap'.", stroke: "ㅈ + ㅗ + ㄴ + ㅁ + ㅏ + ㅅ" }
        ]
    }
];

let userScore = 0;
let userLevel = 1;
let currentLevelObj = null;
let currentStudyIndex = 0;
let currentQuizIndex = 0;
let quizScoreCount = 0;

window.addEventListener('DOMContentLoaded', () => {
    renderLevelCards();
    showSection('home');
});

function showSection(sectionId) {
    ['home', 'levels', 'study', 'quiz', 'result'].forEach(id => {
        const el = document.getElementById(`section-${id}`);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`section-${sectionId}`);
    if (target) target.classList.remove('hidden');
}

function renderLevelCards() {
    const container = document.getElementById('levels-container');
    container.innerHTML = '';

    levelsData.forEach(lvl => {
        const card = document.createElement('div');
        card.className = "bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 space-y-4 shadow-lg transition";
        card.innerHTML = `
            <div class="flex justify-between items-start">
                <span class="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">LEVEL ${lvl.id}</span>
                <i class="fa-solid fa-book-open text-slate-600"></i>
            </div>
            <div>
                <h3 class="font-bold text-xl text-white mb-1">${lvl.title}</h3>
                <p class="text-slate-400 text-sm">${lvl.desc}</p>
            </div>
            <button onclick="startLevel(${lvl.id})" class="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition flex items-center justify-center space-x-2">
                <span>Mula Belajar</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
        `;
        container.appendChild(card);
    });
}

function startLevel(levelId) {
    currentLevelObj = levelsData.find(l => l.id === levelId);
    currentStudyIndex = 0;
    updateStudyCard();
    showSection('study');
}

function updateStudyCard() {
    if (!currentLevelObj) return;
    const item = currentLevelObj.items[currentStudyIndex];

    document.getElementById('study-level-badge').innerText = `LEVEL ${currentLevelObj.id}`;
    document.getElementById('study-level-title').innerText = currentLevelObj.title;
    document.getElementById('study-progress-text').innerText = `${currentStudyIndex + 1} / ${currentLevelObj.items.length}`;

    const charEl = document.getElementById('study-char');
    charEl.innerText = item.char;

    if (item.char.length > 4) {
        charEl.className = "hangul-font text-xl md:text-2xl font-black text-amber-400 group-hover:scale-105 transition duration-300 text-center leading-snug break-words px-2";
    } else {
        charEl.className = "hangul-font text-5xl md:text-6xl font-black text-amber-400 group-hover:scale-105 transition duration-300 text-center leading-snug";
    }

    document.getElementById('study-romaji').innerText = item.rumi;
    document.getElementById('study-desc').innerText = item.desc;
    document.getElementById('study-stroke').innerText = item.stroke;

    const btnPrev = document.getElementById('btn-prev-char');
    btnPrev.disabled = (currentStudyIndex === 0);
    btnPrev.style.opacity = (currentStudyIndex === 0) ? '0.5' : '1';

    const btnNext = document.getElementById('btn-next-char');
    if (currentStudyIndex === currentLevelObj.items.length - 1) {
        btnNext.style.display = 'none';
    } else {
        btnNext.style.display = 'inline-flex';
    }
}

function navigateStudy(direction) {
    currentStudyIndex += direction;
    if (currentStudyIndex < 0) currentStudyIndex = 0;
    if (currentStudyIndex >= currentLevelObj.items.length) {
        currentStudyIndex = currentLevelObj.items.length - 1;
    }
    updateStudyCard();
}

function playAudio() {
    const item = currentLevelObj.items[currentStudyIndex];
    const utterance = new SpeechSynthesisUtterance(item.char);
    utterance.lang = 'ko-KR';
    window.speechSynthesis.speak(utterance);
}

function startQuizForCurrentLevel() {
    currentQuizIndex = 0;
    quizScoreCount = 0;
    showSection('quiz');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const items = currentLevelObj.items;
    if (currentQuizIndex >= items.length) {
        finishQuiz();
        return;
    }

    const currentItem = items[currentQuizIndex];
    document.getElementById('quiz-progress-text').innerText = `${currentQuizIndex + 1} / ${items.length}`;
    document.getElementById('quiz-progress-bar').style.width = `${((currentQuizIndex + 1) / items.length) * 100}%`;
    document.getElementById('quiz-char-display').innerText = currentItem.char;

    const optionsGrid = document.getElementById('quiz-options-grid');
    optionsGrid.innerHTML = '';
    document.getElementById('quiz-feedback').classList.add('hidden');

    let options = [currentItem.rumi];
    while (options.length < 4 && options.length < items.length) {
        let randomItem = items[Math.floor(Math.random() * items.length)].rumi;
        if (!options.includes(randomItem)) {
            options.push(randomItem);
        }
    }
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition text-sm md:text-base";
        btn.innerText = opt;
        btn.onclick = () => checkQuizAnswer(opt, currentItem.rumi, btn);
        optionsGrid.appendChild(btn);
    });
}

function checkQuizAnswer(selected, correct, btnEl) {
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (selected === correct) {
        quizScoreCount++;
        feedback.className = "p-3 rounded-xl text-center text-sm font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
        feedback.innerText = "Betul! Syabas 🎉";
        btnEl.classList.add('bg-emerald-600', 'border-emerald-500');
    } else {
        feedback.className = "p-3 rounded-xl text-center text-sm font-bold bg-red-500/20 text-red-400 border border-red-500/30";
        feedback.innerText = `Salah. Jawapan betul ialah: ${correct}`;
        btnEl.classList.add('bg-red-600', 'border-red-500');
    }

    setTimeout(() => {
        currentQuizIndex++;
        loadQuizQuestion();
    }, 1200);
}

function finishQuiz() {
    const total = currentLevelObj.items.length;
    const percentage = Math.round((quizScoreCount / total) * 100);
    const pointsEarned = quizScoreCount * 10;

    userScore += pointsEarned;
    document.getElementById('stat-score').innerText = userScore;

    if (percentage >= 70 && currentLevelObj.id >= userLevel) {
        userLevel = currentLevelObj.id + 1;
        document.getElementById('stat-level').innerText = `Lvl ${userLevel}`;
    }

    document.getElementById('result-score').innerText = `${percentage}%`;
    document.getElementById('result-points').innerText = `+${pointsEarned}`;

    showSection('result');
    if (percentage >= 70) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}
