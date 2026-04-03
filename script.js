
let vocabulary = [];
let currentLanguage = 'en'; // 'en' or 'ru'

// JSON parser (for file:// fallback and comments/trailing commas)
function parseJsonText(text) {
  const noComments = text
    .split('\n')
    .map(line => line.replace(/\/\/.*$/, ''))
    .join('\n');
  const noTrailing = noComments.replace(/,\s*([}\]])/g, '$1');
  return JSON.parse(noTrailing);
}

// UI Translations
const uiTranslations = {
  en: {
    title: "📚 HSK 1–4 Vocabulary Builder",
    subtitle: "Study • Quiz • Track • Master",
    studyTab: "📖 Study",
    quizTab: "🧠 Quiz",
    allLevels: "All Levels (1–4)",
    hsk: "HSK",
    allWordTypes: "All Word Types",
    searchPlaceholder: "🔍 Search Chinese, Pinyin or English…",
    shuffle: "🔀 Shuffle",
    shuffled: "🔀 Shuffled ✓",
    unknownOnly: "👁 Unknown Only",
    unknownOnlyActive: "👁 Unknown Only ✓",
    exportCSV: "⬇ Export CSV",
    mastered: "mastered",
    of: "of",
    words: "words",
    reset: "↺ Reset",
    showMeaning: "Show Meaning",
    masterThis: "✓ Mark as Mastered",
    unmaster: "✗ Mark as Unknown",
    startQuiz: "▶ Start Quiz",
    quizModal: "Quiz Mode",
    selectLevel: "Select a level and word type, then press Start Quiz.",
    fourOption: "You'll be tested with 4-option multiple choice.",
    correct: "✅ Correct!",
    incorrect: "❌ Incorrect",
    theAnswerIs: "the answer is",
    question: "Question",
    quizCorrect: "correct",
    quizWrong: "wrong",
    excellent: "Excellent work!",
    goodEffort: "Good effort!",
    keepPracticing: "Keep practicing!",
    retry: "🔄 Retry",
    backToStudy: "📖 Back to Study",
    noWords: "No words match your filters.",
    noWordsQuiz: "Need at least 4 words to start a quiz. Add more words or change filters.",
    resetConfirm: "Reset all mastered words and spaced repetition data?",
    exportSuccess: "CSV exported successfully!",
    noMastered: "No mastered words to export yet!",
    masteredButton: "✓ Mastered",
    quizResult: "{correct} correct out of {total} questions",
    loadError: "Vocabulary loading failed. See console.",
    builtWith: "✨ Built with ❤️ for HSK learners •",
    // Word type labels
    typeNoun: "Noun",
    typeVerb: "Verb",
    typeAdj: "Adjective",
    typeAdv: "Adverb",
    typePhrase: "Phrase",
    typeNum: "Number",
    typePron: "Pronoun",
    typeConj: "Conjunction",
    typePart: "Particle",
    typeMw: "Measure Word",
    typeQues: "Question",
    typeInterj: "Interjection",
    typePrep: "Preposition",
    typeDet: "Determiner",
    typeN: "Noun",
    typeV: "Verb",
    language: "Language",
    chooseLanguage: "Choose language",
    pronounce: "Pronounce",
    seenBadgeNeedsReview: "🔥 Seen {n}× – needs review",
    seenBadgeSeen: "⏱ Seen {n}×",
    csvChinese: "Chinese",
    csvPinyin: "Pinyin",
    csvEnglish: "English",
    csvLevel: "Level",
    csvType: "Type",
    csvTimesSeen: "Times Seen",
    quizCorrectLabel: "correct",
    quizWrongLabel: "wrong",
    quizQuestion: "Question",
    nextBtn: "Next →",
    seeResults: "See Results",
    correct: "✅ Correct!",
    incorrect: "❌ Incorrect",
    theAnswerIs: "the answer is",
    retry: "🔄 Retry",
    backToStudy: "📖 Back to Study",
  },
  ru: {
    title: "📚 Словарь HSK 1–4",
    subtitle: "Учись • Тестируй • Отслеживай • Овладей",
    studyTab: "📖 Учеба",
    quizTab: "🧠 Тест",
    allLevels: "Все уровни (1–4)",
    hsk: "HSK",
    allWordTypes: "Все типы слов",
    searchPlaceholder: "🔍 Поиск по составу, пиньинь или русский…",
    shuffle: "🔀 Перемешать",
    shuffled: "🔀 Перемешано ✓",
    unknownOnly: "👁 Только неизвестные",
    unknownOnlyActive: "👁 Только неизвестные ✓",
    exportCSV: "⬇ Экспорт CSV",
    mastered: "выучено",
    of: "из",
    words: "слов",
    reset: "↺ Сброс",
    showMeaning: "Показать значение",
    masterThis: "✓ Отметить как выученное",
    unmaster: "✗ Отметить как неизвестное",
    startQuiz: "▶ Начать тест",
    quizModal: "Режим теста",
    selectLevel: "Выберите уровень и тип слова, затем нажмите «Начать тест».",
    fourOption: "Вам будет предложен тест с выбором из 4 вариантов.",
    correct: "✅ Правильно!",
    incorrect: "❌ Неправильно",
    theAnswerIs: "правильный ответ",
    question: "Вопрос",
    quizCorrect: "правильных",
    quizWrong: "ошибок",
    excellent: "Отлично!",
    goodEffort: "Хорошо постараться!",
    keepPracticing: "Продолжайте практику!",
    retry: "🔄 Повторить",
    backToStudy: "📖 Вернуться к учебе",
    noWords: "Нет слов, соответствующих вашим фильтрам.",
    noWordsQuiz: "Нужно по крайней мере 4 слова для теста. Добавьте слова или измените фильтры.",
    resetConfirm: "Сбросить все выученные слова и данные о повторении?",
    exportSuccess: "CSV успешно экспортирован!",
    noMastered: "Нет выученных слов для экспорта!",
    masteredButton: "✓ Выучено",
    quizResult: "{correct} правильных из {total} вопросов",
    loadError: "Загрузка словаря не удалась. Смотрите консоль.",
    builtWith: "✨ Создано с ❤️ для изучающих HSK •",
    // Word type labels
    typeNoun: "Существительное",
    typeVerb: "Глагол",
    typeAdj: "Прилагательное",
    typeAdv: "Наречие",
    typePhrase: "Фраза",
    typeNum: "Число",
    typePron: "Местоимение",
    typeConj: "Союз",
    typePart: "Частица",
    typeMw: "Мера измерения",
    typeQues: "Вопрос",
    typeInterj: "Междометие",
    typePrep: "Предлог",
    typeDet: "Определитель",
    typeN: "Существительное",
    typeV: "Глагол",
    language: "Язык",
    chooseLanguage: "Выберите язык",
    pronounce: "Произнести",
    seenBadgeNeedsReview: "🔥 Просмотрено {n}× – нужно повторить",
    seenBadgeSeen: "⏱ Просмотрено {n}×",
    csvChinese: "Китайский",
    csvPinyin: "Пиньинь",
    csvEnglish: "Английский",
    csvLevel: "Уровень",
    csvType: "Тип",
    csvTimesSeen: "Сколько раз видел",
    quizCorrectLabel: "правильно",
    quizWrongLabel: "ошибок",
    quizQuestion: "Вопрос",
    nextBtn: "Далее →",
    seeResults: "Показать результаты",
    correct: "✅ Правильно!",
    incorrect: "❌ Неправильно",
    theAnswerIs: "ответ",
    retry: "🔄 Повторить",
    backToStudy: "📖 Вернуться к учебе",
  }
};

function t(key) {
  return uiTranslations[currentLanguage]?.[key] || uiTranslations.en[key] || key;
}

function updateUILanguage() {
  document.querySelectorAll('.lang-option').forEach(btn => btn.classList.remove('active'));
  const activeLangBtn = document.querySelector(`.lang-option[data-lang="${currentLanguage}"]`);
  if (activeLangBtn) activeLangBtn.classList.add('active');

  document.querySelector('h1').textContent = t('title');
  document.querySelector('.subtitle').textContent = t('subtitle');
  document.getElementById('burgerLabel').textContent = t('language');
  document.getElementById('burgerMenuTitle').textContent = t('chooseLanguage');
  document.getElementById('tabStudy').textContent = t('studyTab');
  document.getElementById('tabQuiz').textContent = t('quizTab');
  document.getElementById('levelFilter').querySelector('option[value="all"]').textContent = t('allLevels');
  document.getElementById('quizLevelFilter').querySelector('option[value="all"]').textContent = t('allLevels');
  document.getElementById('typeFilter').querySelector('option[value="all"]').textContent = t('allWordTypes');
  document.getElementById('quizTypeFilter').querySelector('option[value="all"]').textContent = t('allWordTypes');
  document.getElementById('search').placeholder = t('searchPlaceholder');
  document.getElementById('shuffleBtn').textContent = isShuffled ? t('shuffled') : t('shuffle');
  document.getElementById('unknownBtn').textContent = unknownOnly ? t('unknownOnlyActive') : t('unknownOnly');
  document.getElementById('exportBtn').textContent = t('exportCSV');
  document.getElementById('resetBtn').textContent = t('reset');
  document.getElementById('startQuizBtn').textContent = t('startQuiz');
  document.getElementById('masteredLabel').textContent = t('mastered');
  document.getElementById('ofLabel').textContent = t('of');
  document.getElementById('wordsLabel').textContent = t('words');
  const footerTextNode = document.getElementById('footerText');
  if (footerTextNode) footerTextNode.textContent = t('builtWith');
  // Translate all type filter options
  [document.getElementById('typeFilter'), document.getElementById('quizTypeFilter')].forEach(sel => {
    const options = sel.querySelectorAll('option');
    options.forEach(opt => {
      if (opt.value !== 'all') {
        const mapKey = 'type' + opt.value.charAt(0).toUpperCase() + opt.value.slice(1);
        opt.textContent = t(mapKey) || getTypeLabel(opt.value) || opt.textContent;
      }
    });
  });
  updateStats();
}

// Load vocabulary from JSON
async function loadVocabulary(lang) {
  console.log('loadVocabulary', lang, 'protocol', window.location.protocol);
  const file = lang === 'ru' ? 'ru.json' : 'vocab.json';
  const isFileProtocol = window.location.protocol === 'file:';

  // Immediately switch UI language to avoid race conditions when clicking fast.
  currentLanguage = lang;
  updateUILanguage();

  try {
    if (isFileProtocol) throw new Error('file://');

    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);

    const raw = await response.text();
    const data = parseJsonText(raw);
    vocabulary = data;

  } catch (error) {
    console.warn(`Vocabulary fetch failed for ${file}:`, error);

    const embedded = document.getElementById(lang === 'ru' ? 'hsk-ru-data' : 'hsk-en-data');
    if (embedded && embedded.textContent.trim()) {
      try {
        vocabulary = parseJsonText(embedded.textContent);
      } catch (e) {
        console.error('Fallback parse failed:', e);
        container.innerHTML = `<div class="empty-state"><div class="big-emoji">⚠️</div>${t('loadError')}</div>`;
        return;
      }
    } else {
      console.error('No embedded fallback data found for', lang);
      container.innerHTML = `<div class="empty-state"><div class="big-emoji">⚠️</div>${t('loadError')}</div>`;
      return;
    }
  }

  populateTypeFilters();
  renderWords();
  updateUILanguage();
  console.log(`Loaded vocabulary from ${file}, ${vocabulary.length} entries`);
}

function updateQuizControls() {
  // No additional controls required for this build.
}

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let mastered  = JSON.parse(localStorage.getItem('hskMastered'))  || {};
let srData    = JSON.parse(localStorage.getItem('hskSR'))        || {}; // { zh: { views, lastSeen } }
let isShuffled   = false;
let unknownOnly  = false;
let currentMode  = 'study';

// Quiz state
let quiz = { words: [], index: 0, correct: 0, answered: false };

// ─────────────────────────────────────────
// WORD TYPE LABELS
// ─────────────────────────────────────────
const typeLabels = {
  n:'Noun', v:'Verb', adj:'Adjective', adv:'Adverb', phrase:'Phrase',
  num:'Number', pron:'Pronoun', conj:'Conjunction', part:'Particle',
  mw:'Measure Word', ques:'Question', interj:'Interjection',
  prep:'Preposition', det:'Determiner'
};

function getTypeLabel(typeKey) {
  const shortTypeMap = {
    n: 'typeNoun', v: 'typeVerb', adj: 'typeAdj', adv: 'typeAdv', phrase: 'typePhrase',
    num: 'typeNum', pron: 'typePron', conj: 'typeConj', part: 'typePart',
    mw: 'typeMw', ques: 'typeQues', interj: 'typeInterj',
    prep: 'typePrep', det: 'typeDet'
  };

  const fullTypeMap = {
    noun: 'typeNoun', verb: 'typeVerb', adjective: 'typeAdj', adverb: 'typeAdv', phrase: 'typePhrase',
    number: 'typeNum', pronoun: 'typePron', conjunction: 'typeConj', particle: 'typePart',
    'measure word': 'typeMw', question: 'typeQues', interjection: 'typeInterj',
    preposition: 'typePrep', determiner: 'typeDet'
  };

  const lookup = typeKey && typeKey.toLowerCase();
  const mapKey = shortTypeMap[lookup] || fullTypeMap[lookup] || ('type' + (typeKey ? typeKey.charAt(0).toUpperCase() + typeKey.slice(1) : ''));
  return t(mapKey) || typeLabels[lookup] || typeLabels[typeKey] || typeKey || '';
}

// ─────────────────────────────────────────
// DOM REFS
// ─────────────────────────────────────────
const container       = document.getElementById('wordContainer');
const quizContainer   = document.getElementById('quizContainer');
const levelFilter     = document.getElementById('levelFilter');
const typeFilter      = document.getElementById('typeFilter');
const quizLevelFilter = document.getElementById('quizLevelFilter');
const quizTypeFilter  = document.getElementById('quizTypeFilter');
const searchInput     = document.getElementById('search');
const shuffleBtn      = document.getElementById('shuffleBtn');
const unknownBtn      = document.getElementById('unknownBtn');
const exportBtn       = document.getElementById('exportBtn');
const resetBtn        = document.getElementById('resetBtn');
const startQuizBtn    = document.getElementById('startQuizBtn');
const tabStudy        = document.getElementById('tabStudy');
const tabQuiz         = document.getElementById('tabQuiz');
const statsBar        = document.getElementById('statsBar');
const studyControls   = document.getElementById('studyControls');
const quizControls    = document.getElementById('quizControls');

// ─────────────────────────────────────────
// POPULATE TYPE FILTERS
// ─────────────────────────────────────────
function populateTypeFilters() {
  const types = [...new Set(vocabulary.map(w => w.type))].sort();
  [typeFilter, quizTypeFilter].forEach(sel => {
    sel.innerHTML = `<option value="all">${t('allWordTypes')}</option>`;
    types.forEach(typeKey => {
      const opt = document.createElement('option');
      opt.value = typeKey;
      opt.textContent = getTypeLabel(typeKey);
      sel.appendChild(opt);
    });
  });
}

// ─────────────────────────────────────────
// FILTER WORDS
// ─────────────────────────────────────────
function getFiltered(levelSel, typeSel, searchVal, unknownOnlyFlag) {
  const term = (searchVal || '').toLowerCase();
  let list = vocabulary.filter(w => {
    const okLevel  = levelSel === 'all' || String(w.level) === levelSel;
    const okType   = typeSel  === 'all' || w.type === typeSel;
    const wordText = (w.english || w.russian || '').toLowerCase();
    const okSearch = !term ||
      w.chinese.toLowerCase().includes(term) ||
      w.pinyin.toLowerCase().includes(term)  ||
      wordText.includes(term);
    const okUnknown = !unknownOnlyFlag || !mastered[w.chinese];
    return okLevel && okType && okSearch && okUnknown;
  });
  if (isShuffled) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  return list;
}

// ─────────────────────────────────────────
// SPACED REPETITION
// ─────────────────────────────────────────
function trackView(zh) {
  if (!srData[zh]) srData[zh] = { views: 0 };
  srData[zh].views++;
  srData[zh].lastSeen = Date.now();
  localStorage.setItem('hskSR', JSON.stringify(srData));
}
function srBadge(zh) {
  if (mastered[zh]) return '';
  const d = srData[zh];
  if (!d) return '';
  if (d.views >= 5) {
    return `<span class="sr-badge">${t('seenBadgeNeedsReview').replace('{n}', d.views)}</span>`;
  }
  if (d.views >= 3) {
    return `<span class="sr-badge">${t('seenBadgeSeen').replace('{n}', d.views)}</span>`;
  }
  return '';
}

// ─────────────────────────────────────────
// AUDIO
// ─────────────────────────────────────────
function speak(text) {
  // First: try Web Speech API with an actual zh voice
  if (window.speechSynthesis) {
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang === 'zh-CN') ||
                    voices.find(v => v.lang === 'zh-TW') ||
                    voices.find(v => v.lang.startsWith('zh'));

    if (zhVoice) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang  = 'zh-CN';
      u.rate  = 0.85;
      u.voice = zhVoice;
      window.speechSynthesis.speak(u);
      return;
    }
  }

  // Fallback: Google Translate TTS (works even without local Chinese voice)
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=zh-CN&client=tw-ob`;
  const audio = new Audio(url);
  audio.play().catch(() => {
    alert('No Chinese voice found on this device and network TTS is unavailable.\nOn Linux, install a Chinese TTS voice (e.g. espeak-ng with Mandarin support).');
  });
}

// ─────────────────────────────────────────
// RENDER STUDY CARDS
// ─────────────────────────────────────────
function renderWords() {
  const filtered = getFiltered(
    levelFilter.value, typeFilter.value,
    searchInput.value, unknownOnly
  );

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="big-emoji">🔍</div>${t('noWords')}</div>`;
    updateStats();
    return;
  }

  filtered.forEach(word => {
    const isKnown = !!mastered[word.chinese];
    const card = document.createElement('div');
    card.className = 'card' + (isKnown ? ' is-mastered' : '');

    const sentenceHTML = word.sentence ? `
      <div class="sentence-block" style="display:${isKnown ? 'block' : 'none'}">
        <div class="sentence-zh">📝 ${word.sentence}</div>
        <div class="sentence-py">${word.sentencePy}</div>
        <div class="sentence-en">${getSentenceTranslation(word)}</div>
      </div>` : '';

    card.innerHTML = `
      <div class="card-header">
        <div class="badges">
          <span class="level-badge">HSK ${word.level}</span>
          <span class="type-badge">${getTypeLabel(word.type)}</span>
          ${srBadge(word.chinese)}
        </div>
        <button class="audio-btn" title="${t('pronounce')}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
      <div class="chinese">${word.chinese}</div>
      <div class="pinyin">${word.pinyin}</div>
      <div class="meaning" style="display:${isKnown ? 'block' : 'none'}">${getTranslation(word)}</div>
      ${sentenceHTML}
      <div class="card-actions">
        <button class="btn ${isKnown ? 'btn-success' : ''}" data-action="reveal">
          ${isKnown ? t('masteredButton') : t('showMeaning')}
        </button>
        ${isKnown ? '' : `<button class="btn" data-action="reveal" style="display:none"></button>`}
      </div>`;

    // Audio button
    card.querySelector('.audio-btn').addEventListener('click', () => speak(word.chinese));

    // Reveal / toggle mastered
    card.querySelector('[data-action="reveal"]').addEventListener('click', function() {
      const meaningDiv  = card.querySelector('.meaning');
      const sentBlock   = card.querySelector('.sentence-block');
      const btn         = this;   // always the actual button, regardless of data-* changes
      const shown       = meaningDiv.style.display !== 'none';

      if (!shown) {
        // First reveal: show meaning, track view
        meaningDiv.style.display = 'block';
        if (sentBlock) sentBlock.style.display = 'block';
        trackView(word.chinese);

        // Update button to two-state
        btn.textContent = t('masterThis');
        btn.className = 'btn';
        btn.removeAttribute('data-action');
        btn.dataset.action2 = 'master';
      } else if (btn.dataset.action2 === 'master') {
        // Second click: mark mastered
        mastered[word.chinese] = true;
        localStorage.setItem('hskMastered', JSON.stringify(mastered));
        card.classList.add('is-mastered');
        btn.textContent = t('masteredButton');
        btn.className = 'btn btn-success';
        delete btn.dataset.action2;
        btn.dataset.action3 = 'unmaster';
        updateStats();
        if (unknownOnly) { card.style.opacity = '0.4'; card.style.pointerEvents = 'none'; }
      } else if (btn.dataset.action3 === 'unmaster') {
        // Third click (on mastered): unmark
        delete mastered[word.chinese];
        localStorage.setItem('hskMastered', JSON.stringify(mastered));
        card.classList.remove('is-mastered');
        meaningDiv.style.display = 'none';
        if (sentBlock) sentBlock.style.display = 'none';
        btn.textContent = t('showMeaning');
        btn.className = 'btn';
        delete btn.dataset.action3;
        btn.dataset.action = 'reveal';
        updateStats();
      }
    });

    container.appendChild(card);
  });

  updateStats();
}

// ─────────────────────────────────────────
// STATS
// ─────────────────────────────────────────
function updateStats() {
  const total = vocabulary.length;
  const count = Object.keys(mastered).filter(w => vocabulary.some(v => v.chinese === w)).length;
  const pct   = total > 0 ? Math.round((count / total) * 100) : 0;
  document.getElementById('progressCount').textContent = count;
  document.getElementById('totalCount').textContent    = total;
  document.getElementById('progressBar').style.width   = pct + '%';
  document.getElementById('progressPct').textContent   = pct + '%';
}

// ─────────────────────────────────────────
// EXPORT PROGRESS (CSV)
// ─────────────────────────────────────────
function exportCSV() {
  const masteredWords = vocabulary.filter(w => mastered[w.chinese]);
  if (masteredWords.length === 0) { alert(t('noMastered')); return; }

  const rows = [[
    t('csvChinese'), t('csvPinyin'), t('csvEnglish'),
    t('csvLevel'), t('csvType'), t('csvTimesSeen')
  ]];
  masteredWords.forEach(w => {
    rows.push([
      w.chinese, w.pinyin, w.english, w.level, w.type,
      srData[w.chinese]?.views || 0
    ]);
  });

  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'hsk_mastered_words.csv';
  a.click();
}

// ─────────────────────────────────────────
// QUIZ MODE
// ─────────────────────────────────────────
function startQuiz() {
  const words = getFiltered(
    quizLevelFilter.value, quizTypeFilter.value, '', false
  );
  if (words.length < 4) {
    alert(t('noWordsQuiz'));
    return;
  }
  quiz = { words, index: 0, correct: 0, answered: false };
  renderQuizCard();
}

function renderQuizCard() {
  if (quiz.index >= quiz.words.length) { renderQuizEnd(); return; }

  const word = quiz.words[quiz.index];
  // Build 4 options: 1 correct + 3 random wrong
  const wrongPool = vocabulary.filter(w => w.chinese !== word.chinese);
  const shuffledWrong = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [word, ...shuffledWrong].sort(() => Math.random() - 0.5);

  const sentenceHTML = word.sentence ? `
    <div class="quiz-sentence" id="quizSentence" style="display:none">
      <div class="sentence-zh">📝 ${word.sentence}</div>
      <div class="sentence-py">${word.sentencePy}</div>
      <div class="sentence-en">${getSentenceTranslation(word)}</div>
    </div>` : '<div id="quizSentence"></div>';

  quizContainer.innerHTML = `
    <div class="quiz-score-bar">
      <span>✅ <strong id="qCorrect">${quiz.correct}</strong> ${t('quizCorrect')}</span>
      <span style="color:#888">${t('quizQuestion')} ${quiz.index + 1} / ${quiz.words.length}</span>
      <span>❌ <strong id="qWrong">${quiz.index - quiz.correct}</strong> ${t('quizWrong')}</span>
    </div>
    <div class="quiz-card">
      <div class="quiz-lbadge">HSK ${word.level} · ${getTypeLabel(word.type)}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:12px">
        <div class="quiz-chinese">${word.chinese}</div>
        <button onclick="speak('${word.chinese.replace(/'/g,"\\'")}');" class="audio-btn" title="${t('pronounce')}">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
      <div class="quiz-pinyin">${word.pinyin}</div>
      <div class="quiz-options" id="quizOptions">
        ${options.map((opt, i) => {
          const label = currentLanguage === 'ru'
            ? (opt.russian && opt.russian.trim() ? opt.russian : (opt.english ? opt.english + ' (англ)' : 'нет перевода'))
            : (opt.english || '');
          return `
            <button class="quiz-opt" data-correct="${opt.chinese === word.chinese}" data-idx="${i}">
              ${label}
            </button>`;
        }).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      ${sentenceHTML}
      <div class="quiz-nav">
        <button class="btn" id="quizNextBtn" style="display:none" onclick="advanceQuiz()">
          ${quiz.index + 1 < quiz.words.length ? t('nextBtn') : t('seeResults')}
        </button>
      </div>
    </div>`;

  // Attach option listeners
  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(btn, word));
  });
}

function handleQuizAnswer(btn, word) {
  if (quiz.answered) return;
  quiz.answered = true;

  const isCorrect = btn.dataset.correct === 'true';
  if (isCorrect) { quiz.correct++; trackView(word.chinese); }

  // Highlight all options
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  const fb = document.getElementById('quizFeedback');
  const qs = document.getElementById('quizSentence');
  if (isCorrect) {
    fb.textContent = t('correct');
    fb.className = 'quiz-feedback correct';
  } else {
    fb.textContent = `❌ ${t('incorrect')} — ${t('theAnswerIs')} "${getTranslation(word)}"`;
    fb.className = 'quiz-feedback wrong';
  }

  if (qs && word.sentence) qs.style.display = 'block';
  document.getElementById('quizNextBtn').style.display = 'inline-block';
}

function advanceQuiz() {
  quiz.index++;
  quiz.answered = false;
  renderQuizCard();
}

function renderQuizEnd() {
  const total = quiz.words.length;
  const pct   = Math.round((quiz.correct / total) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
  const msg   = pct >= 80 ? t('excellent') : pct >= 50 ? t('goodEffort') : t('keepPracticing');
  const resultText = t('quizResult').replace('{correct}', quiz.correct).replace('{total}', total);

  quizContainer.innerHTML = `
    <div class="quiz-end">
      <div>${emoji}</div>
      <div class="score-big">${pct}%</div>
      <h2>${msg}</h2>
      <p>${resultText}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn" onclick="startQuiz()">${t('retry')}</button>
        <button class="btn btn-outline" onclick="switchMode('study')">${t('backToStudy')}</button>
      </div>
    </div>`;
}

// ─────────────────────────────────────────
// MODE SWITCHING
// ─────────────────────────────────────────
function switchMode(mode) {
  currentMode = mode;
  const isStudy = mode === 'study';

  tabStudy.classList.toggle('active', isStudy);
  tabQuiz.classList.toggle('active', !isStudy);

  container.style.display      = isStudy ? '' : 'none';
  quizContainer.style.display  = isStudy ? 'none' : '';
  statsBar.style.display       = isStudy ? '' : 'none';
  studyControls.style.display  = isStudy ? '' : 'none';
  quizControls.style.display   = isStudy ? 'none' : '';

  if (!isStudy) {
    quizContainer.innerHTML = `
      <div class="quiz-end" style="padding:40px 36px">
        <div style="font-size:3rem">🧠</div>
        <h2 style="margin:16px 0 10px">${t('quizModal')}</h2>
        <p>${t('selectLevel')}</p>
        <p style="font-size:0.9rem;color:#aaa;margin-top:8px">${t('fourOption')}</p>
      </div>`;
  }
}

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
tabStudy.addEventListener('click', () => switchMode('study'));
tabQuiz.addEventListener('click',  () => switchMode('quiz'));

levelFilter.addEventListener('change', renderWords);
typeFilter.addEventListener('change',  renderWords);
searchInput.addEventListener('input',  renderWords);

shuffleBtn.addEventListener('click', () => {
  isShuffled = !isShuffled;
  shuffleBtn.textContent = isShuffled ? '🔀 ' + t('shuffled') : '🔀 ' + t('shuffle');
  shuffleBtn.classList.toggle('active', isShuffled);
  renderWords();
});

unknownBtn.addEventListener('click', () => {
  unknownOnly = !unknownOnly;
  unknownBtn.textContent = unknownOnly ? '👁 ' + t('unknownOnlyActive') : '👁 ' + t('unknownOnly');
  unknownBtn.classList.toggle('active', unknownOnly);
  renderWords();
});

exportBtn.addEventListener('click', exportCSV);

resetBtn.addEventListener('click', () => {
  if (confirm(t('resetConfirm'))) {
    localStorage.removeItem('hskMastered');
    localStorage.removeItem('hskSR');
    mastered = {};
    srData   = {};
    renderWords();
  }
});

startQuizBtn.addEventListener('click', startQuiz);

const burgerBtn = document.getElementById('burgerBtn');
const burgerLangMenu = document.getElementById('burgerLangMenu');

// Burger language menu only
document.querySelectorAll('.lang-option').forEach(opt => {
  opt.addEventListener('click', (e) => {
    const lang = e.currentTarget.dataset.lang;
    switchLanguage(lang);
    burgerLangMenu.classList.add('hidden');
  });
});

burgerBtn.addEventListener('click', () => {
  burgerLangMenu.classList.toggle('hidden');
});

window.addEventListener('click', (e) => {
  if (!burgerLangMenu.contains(e.target) && e.target !== burgerBtn) {
    burgerLangMenu.classList.add('hidden');
  }
});

function switchLanguage(lang) {
  console.log('switchLanguage called:', { from: currentLanguage, to: lang });
  if (lang === currentLanguage) return;
  document.querySelectorAll('.lang-option').forEach(btn => btn.classList.remove('active'));
  const targetBtn = document.querySelector(`.lang-option[data-lang="${lang}"]`);
  if (targetBtn) targetBtn.classList.add('active');
  loadVocabulary(lang);
}

function getTranslation(word) {
  if (currentLanguage === 'ru') {
    if (word.russian && word.russian.trim()) return word.russian;
    if (word.english && word.english.trim()) return word.english + ' (англ)';
    return 'нет перевода';
  }
  return word.english || '';
}

function getSentenceTranslation(word) {
  if (currentLanguage === 'ru') {
    if (word.sentenceRu && word.sentenceRu.trim()) return word.sentenceRu;
    if (word.sentenceEn && word.sentenceEn.trim()) return word.sentenceEn + ' (англ)';
    return '';
  }
  return word.sentenceEn || '';
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
loadVocabulary('en');
