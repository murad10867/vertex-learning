const subjects = [
  {
    id:'math', name:'Mathematics', icon:'➗', minAge:1,
    description:'Numbers, patterns, shapes, measurement, and problem solving.',
    lessons:['Numbers & Counting','Addition Basics','Subtraction Basics','Shapes & Space','Measurement','Problem Solving']
  },
  {
    id:'science', name:'Science', icon:'🔬', minAge:1,
    description:'Explore living things, Earth, matter, energy, and experiments.',
    lessons:['Living Things','Our Earth','Matter Around Us','Forces & Motion','Energy','Simple Experiments']
  },
  {
    id:'english', name:'English', icon:'🔤', minAge:1,
    description:'Build vocabulary, reading, grammar, speaking, and writing skills.',
    lessons:['Letters & Sounds','Everyday Words','Simple Sentences','Reading Practice','Grammar Basics','Writing Practice']
  },
  {
    id:'arabic', name:'Arabic', icon:'📖', minAge:1,
    description:'Learn Arabic letters, words, reading, grammar, and expression.',
    lessons:['Arabic Letters','Sounds & Words','Short Sentences','Reading Practice','Grammar Basics','Writing & Expression']
  },
  {
    id:'islamic', name:'Islamic Studies', icon:'☪️', minAge:1,
    description:'Learn core Islamic values, worship, manners, and stories.',
    lessons:['Good Manners','Daily Worship','Pillars of Islam','Prophets & Stories','Duas','Values in Daily Life']
  },
  {
    id:'computer-science', name:'Computer Science', icon:'💻', minAge:1,
    description:'Understand computers, data, algorithms, and digital thinking.',
    lessons:['What Is a Computer?','Hardware & Software','Data Basics','Algorithms','The Internet','Digital Safety']
  },
  {
    id:'art', name:'Art', icon:'🎨', minAge:1,
    description:'Create with color, shape, drawing, design, and visual ideas.',
    lessons:['Lines & Shapes','Color Basics','Drawing Objects','Patterns','Design a Poster','Creative Project']
  },
  {
    id:'sports', name:'Sports & Activity', icon:'⚽', minAge:1,
    description:'Movement, coordination, teamwork, fitness, and healthy activity.',
    lessons:['Warm Up','Balance','Coordination','Running & Jumping','Teamwork','Healthy Movement']
  },
  {
    id:'geography', name:'Geography', icon:'🌍', minAge:1,
    description:'Discover maps, places, land, water, weather, and our world.',
    lessons:['Maps & Directions','Land and Water','Weather','Continents','Countries & Cities','People & Places']
  },
  {
    id:'history', name:'History', icon:'🏛️', minAge:3,
    description:'Travel through the past, important people, places, and events.',
    lessons:['What Is History?','Then and Now','Early Communities','Great Civilizations','Important Inventions','History Project']
  },
  {
    id:'programming', name:'Programming', icon:'</>', minAge:4,
    description:'Learn logic, code, variables, conditions, loops, and projects.',
    lessons:['Coding Logic','Commands & Sequences','Variables','If / Else','Loops','Build a Mini Project']
  },
  {
    id:'physics', name:'Physics', icon:'⚛️', minAge:10,
    description:'Explore motion, forces, energy, waves, electricity, and space.',
    lessons:['Motion','Forces','Work & Energy','Waves & Sound','Electricity','Space Physics']
  },
  {
    id:'chemistry', name:'Chemistry', icon:'🧪', minAge:10,
    description:'Understand matter, atoms, elements, reactions, and mixtures.',
    lessons:['Matter','Atoms','Elements','Compounds & Mixtures','Chemical Reactions','Acids & Bases']
  }
];

const STORAGE_KEY = 'vertexLearningProgressV1';
const ACTIVITY_KEY = 'vertexLearningActivityV1';

const subjectGrid = document.getElementById('subjectGrid');
const subjectCount = document.getElementById('subjectCount');
const subjectSearch = document.getElementById('subjectSearch');
const ageFilters = document.getElementById('ageFilters');
const exploreBtn = document.getElementById('exploreBtn');
const learnView = document.getElementById('learnView');
const dashboardView = document.getElementById('dashboardView');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

const modal = document.getElementById('subjectModal');
const modalIcon = document.getElementById('modalIcon');
const modalAge = document.getElementById('modalAge');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const lessonList = document.getElementById('lessonList');

const startedCount = document.getElementById('startedCount');
const completedCount = document.getElementById('completedCount');
const streakCount = document.getElementById('streakCount');
const continueGrid = document.getElementById('continueGrid');

let activeAge = 'all';
let activeSubjectId = null;

function loadProgress(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return saved && typeof saved === 'object' ? saved : {};
  }catch(_){
    return {};
  }
}

let progress = loadProgress();

function saveProgress(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getCompleted(id){
  return Array.isArray(progress[id]) ? progress[id] : [];
}

function markActivity(){
  const today = new Date();
  const key = [today.getFullYear(), String(today.getMonth()+1).padStart(2,'0'), String(today.getDate()).padStart(2,'0')].join('-');
  let dates = [];
  try{
    const saved = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');
    if(Array.isArray(saved)) dates = saved;
  }catch(_){}
  if(!dates.includes(key)){
    dates.push(key);
    dates = dates.slice(-120);
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(dates));
  }
}

function subjectProgress(subject){
  const done = getCompleted(subject.id).length;
  return {done,total:subject.lessons.length,percent:Math.round((done/subject.lessons.length)*100)};
}

function renderSubjects(){
  const q = subjectSearch.value.trim().toLowerCase();
  const filtered = subjects.filter(subject => {
    const matchesSearch = !q || subject.name.toLowerCase().includes(q) || subject.description.toLowerCase().includes(q);
    const matchesAge = activeAge === 'all' || subject.minAge === Number(activeAge);
    return matchesSearch && matchesAge;
  });

  subjectCount.textContent = `${filtered.length} subject${filtered.length === 1 ? '' : 's'}`;
  subjectGrid.innerHTML = '';

  if(!filtered.length){
    subjectGrid.innerHTML = '<div class="empty-state">No subjects match this search.</div>';
    return;
  }

  filtered.forEach(subject => {
    const p = subjectProgress(subject);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'subject-card';
    card.dataset.subject = subject.id;
    card.innerHTML = `
      <span class="subject-age">${subject.minAge}+</span>
      <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
      <h3>${subject.name}</h3>
      <p>${subject.description}</p>
      <div class="subject-footer">
        <span>${subject.lessons.length} lessons</span>
        <span>${p.percent}% complete</span>
      </div>
    `;
    card.addEventListener('click', () => openSubject(subject.id));
    subjectGrid.appendChild(card);
  });
}

function openSubject(id){
  const subject = subjects.find(s => s.id === id);
  if(!subject) return;
  activeSubjectId = id;

  modalIcon.textContent = subject.icon;
  modalAge.textContent = `AGES ${subject.minAge}+`;
  modalTitle.textContent = subject.name;
  modalDescription.textContent = subject.description;
  renderLessons(subject);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';

  const close = modal.querySelector('.modal-close');
  if(close) close.focus();
}

function closeSubject(){
  modal.hidden = true;
  document.body.style.overflow = '';
  activeSubjectId = null;
}

function renderLessons(subject){
  const completed = getCompleted(subject.id);
  lessonList.innerHTML = '';

  subject.lessons.forEach((title,index) => {
    const isDone = completed.includes(index);
    const row = document.createElement('div');
    row.className = `lesson${isDone ? ' completed' : ''}`;
    row.innerHTML = `
      <span class="lesson-number">${index + 1}</span>
      <div>
        <strong>${title}</strong>
        <small>Lesson ${index + 1} of ${subject.lessons.length}</small>
      </div>
      <button type="button">${isDone ? '✓ Completed' : 'Mark complete'}</button>
    `;

    row.querySelector('button').addEventListener('click', () => toggleLesson(subject.id,index));
    lessonList.appendChild(row);
  });
}

function toggleLesson(subjectId,index){
  const subject = subjects.find(s => s.id === subjectId);
  if(!subject) return;

  const completed = getCompleted(subjectId).slice();
  const existing = completed.indexOf(index);

  if(existing >= 0) completed.splice(existing,1);
  else{
    completed.push(index);
    markActivity();
  }

  completed.sort((a,b) => a-b);
  progress[subjectId] = completed;
  saveProgress();
  renderLessons(subject);
  renderSubjects();
  renderDashboard();
}

function showView(name){
  const dashboard = name === 'dashboard';
  learnView.classList.toggle('active', !dashboard);
  dashboardView.classList.toggle('active', dashboard);
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.view === name));
  if(dashboard) renderDashboard();
  window.scrollTo({top:0,behavior:'smooth'});
}

function calculateStreak(){
  let dates = [];
  try{
    const saved = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');
    if(Array.isArray(saved)) dates = [...new Set(saved)].sort();
  }catch(_){}
  if(!dates.length) return 0;

  const parse = value => {
    const [y,m,d] = value.split('-').map(Number);
    return new Date(y,m-1,d);
  };

  const today = new Date();
  today.setHours(0,0,0,0);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate()-1);

  let cursor = parse(dates[dates.length-1]);
  cursor.setHours(0,0,0,0);

  if(cursor.getTime() !== today.getTime() && cursor.getTime() !== yesterday.getTime()) return 0;

  let streak = 1;
  for(let i=dates.length-2;i>=0;i--){
    const current = parse(dates[i]);
    current.setHours(0,0,0,0);
    const expected = new Date(cursor);
    expected.setDate(cursor.getDate()-1);
    if(current.getTime() === expected.getTime()){
      streak += 1;
      cursor = current;
    }else if(current.getTime() !== cursor.getTime()){
      break;
    }
  }
  return streak;
}

function renderDashboard(){
  const started = subjects.filter(s => getCompleted(s.id).length > 0);
  const completedLessons = subjects.reduce((sum,s) => sum + getCompleted(s.id).length,0);
  const streak = calculateStreak();

  startedCount.textContent = String(started.length);
  completedCount.textContent = String(completedLessons);
  streakCount.textContent = `${streak} day${streak === 1 ? '' : 's'}`;

  continueGrid.innerHTML = '';

  if(!started.length){
    continueGrid.innerHTML = '<div class="empty-state">Start a subject and mark a lesson complete. Your progress will appear here.</div>';
    return;
  }

  started
    .sort((a,b) => subjectProgress(b).percent - subjectProgress(a).percent)
    .forEach(subject => {
      const p = subjectProgress(subject);
      const card = document.createElement('article');
      card.className = 'continue-card';
      card.innerHTML = `
        <h3>${subject.icon} ${subject.name}</h3>
        <p>${p.done} of ${p.total} lessons completed</p>
        <div class="progress"><i style="width:${p.percent}%"></i></div>
      `;
      card.addEventListener('click', () => openSubject(subject.id));
      continueGrid.appendChild(card);
    });
}

ageFilters.addEventListener('click', event => {
  const btn = event.target.closest('button[data-age]');
  if(!btn) return;
  activeAge = btn.dataset.age;
  ageFilters.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
  renderSubjects();
});

subjectSearch.addEventListener('input', renderSubjects);
exploreBtn.addEventListener('click', () => {
  document.querySelector('.subjects-section').scrollIntoView({behavior:'smooth'});
});

navLinks.forEach(link => {
  link.addEventListener('click', () => showView(link.dataset.view));
});

modal.addEventListener('click', event => {
  if(event.target.matches('[data-close-modal]')) closeSubject();
});

document.addEventListener('keydown', event => {
  if(event.key === 'Escape' && !modal.hidden) closeSubject();
});

renderSubjects();
renderDashboard();