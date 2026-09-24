const CURRENT_GRADE = 1;
const STORAGE_KEY = 'vertexLearningProgressGrade1V1';
const ACTIVITY_KEY = 'vertexLearningActivityV1';

const U = (title, lessons) => ({title, lessons});

const subjects = [
  {
    id:'math', name:'Mathematics', icon:'➗',
    description:'Build Grade 1 number sense, operations, shapes, measurement, time, money, and data.',
    units:[
      U('Numbers and Place Value',['Count to 20','Read and Write Numbers to 20','Count to 100','Tens and Ones','Compare Numbers']),
      U('Addition',['Addition Stories','Add Within 10','Add Within 20','Missing Addends','Addition Strategies']),
      U('Subtraction',['Subtraction Stories','Subtract Within 10','Subtract Within 20','Fact Families','Subtraction Strategies']),
      U('Shapes and Measurement',['2D Shapes','3D Shapes','Compare Lengths','Measure With Objects','Compare Weight and Capacity']),
      U('Time, Money and Data',['Tell Time to the Hour','Tell Time to the Half Hour','Coins and Values','Picture Graphs','Math Review'])
    ]
  },
  {
    id:'science', name:'Science', icon:'🔬',
    description:'Explore living things, the body, materials, weather, Earth, and simple investigations.',
    units:[
      U('Living Things',['Living and Nonliving','Needs of Living Things','Plant Parts','Animal Body Parts','Life Cycles']),
      U('Plants and Animals',['Plant Needs','Animal Needs','Habitats','Parents and Young','How Living Things Change']),
      U('My Body and Senses',['Body Parts','Five Senses','Healthy Food','Exercise and Rest','Keeping Clean']),
      U('Earth and Weather',['Land and Water','Weather Types','Seasons','Day and Night','Sun Moon and Sky']),
      U('Materials and Forces',['Hard and Soft','Sink or Float','Pushes and Pulls','Magnets Around Us','Simple Investigation'])
    ]
  },
  {
    id:'english', name:'English', icon:'🔤',
    description:'Practice Grade 1 phonics, vocabulary, grammar, reading, and writing.',
    units:[
      U('Phonics 1',['Short A','Short E','Short I','Short O','Short U']),
      U('Phonics 2',['CVC Words','Beginning Blends','Ending Blends','Digraphs','Word Families']),
      U('Vocabulary',['School Words','Family Words','Action Words','Describing Words','Sight Words']),
      U('Grammar and Reading',['Nouns','Verbs','Adjectives','Capitals and Periods','Read a Short Passage']),
      U('Writing',['Build a Sentence','Write About Myself','Write About a Picture','Sequence a Story','Write a Short Story'])
    ]
  },
  {
    id:'arabic', name:'Arabic', icon:'📖',
    description:'Learn Grade 1 Arabic letters, sounds, vowels, words, reading, and writing.',
    units:[
      U('Arabic Letters 1',['ا ب ت ث','ج ح خ','د ذ ر ز','س ش ص ض','Letter Review 1']),
      U('Arabic Letters 2',['ط ظ ع غ','ف ق ك ل','م ن هـ و ي','Letter Forms','Letter Review 2']),
      U('Sounds and Vowels',['Fatha','Damma','Kasra','Sukoon','Long Vowels']),
      U('Words and Reading',['Two-Letter Words','Three-Letter Words','Common Words','Picture and Word Match','Read Short Phrases']),
      U('Sentences and Writing',['Build a Simple Sentence','Read Simple Sentences','Copy Words','Write From a Picture','Arabic Review'])
    ]
  },
  {
    id:'islamic', name:'Islamic Studies', icon:'☪️',
    description:'Learn Grade 1 beliefs, worship, manners, short surahs, and daily duas.',
    units:[
      U('Faith',['Allah Is Our Creator','The Shahada','Love Allah','Love the Prophet','Thanking Allah']),
      U('Worship',['Cleanliness','Wudu Steps','Five Daily Prayers','Facing the Qiblah','Prayer Manners']),
      U('Good Manners',['Salam','Respect Parents','Kindness','Honesty','Helping Others']),
      U('Quran',['Al-Fatihah','Al-Ikhlas','Al-Falaq','An-Nas','Quran Manners']),
      U('Daily Duas',['Before Eating','After Eating','Before Sleeping','After Waking','Entering and Leaving Home'])
    ]
  },
  {
    id:'computer-science', name:'Computer Science', icon:'💻',
    description:'Learn computer parts, digital tools, sequencing, creativity, and online safety.',
    units:[
      U('Meet the Computer',['What Is a Computer?','Monitor','Keyboard','Mouse and Touchpad','Computer Parts Review']),
      U('Using a Computer',['Click and Double Click','Drag and Drop','Typing Letters','Typing Numbers','Open and Close an App']),
      U('Digital Creativity',['Draw With Shapes','Use Colors','Add Text','Save a Picture','Create a Simple Poster']),
      U('Algorithms',['What Is an Instruction?','Put Steps in Order','Follow a Sequence','Find the Missing Step','Make a Simple Algorithm']),
      U('Digital Safety',['Ask Before Going Online','Keep Information Private','Strong Password Idea','Kind Online Behavior','Tell a Trusted Adult'])
    ]
  },
  {
    id:'art', name:'Art', icon:'🎨',
    description:'Create with line, shape, color, texture, pattern, and imagination.',
    units:[
      U('Lines and Shapes',['Straight and Curved Lines','Basic Shapes','Shape Pictures','Big and Small Shapes','Line and Shape Review']),
      U('Color',['Primary Colors','Mixing Colors','Warm Colors','Cool Colors','Color Mood']),
      U('Texture and Pattern',['Real Textures','Drawn Textures','Repeat Patterns','Nature Patterns','Pattern Artwork']),
      U('Drawing',['Draw an Object','Draw an Animal','Draw a Person','Draw a Place','Add Details']),
      U('Creative Projects',['Paper Collage','Nature Art','Poster Design','Story Picture','My Grade 1 Art Project'])
    ]
  },
  {
    id:'sports', name:'Sports & Activity', icon:'⚽',
    description:'Practice movement, balance, coordination, teamwork, and healthy activity.',
    units:[
      U('Movement Basics',['Safe Warm Up','Walk and Run','Stop and Start','Change Direction','Cool Down']),
      U('Balance',['Stand on One Foot','Walk a Line','Balance and Reach','Balance With an Object','Balance Challenge']),
      U('Throw and Catch',['Underhand Throw','Overhand Throw','Catch With Two Hands','Throw at a Target','Partner Throw and Catch']),
      U('Jump and Coordinate',['Two-Foot Jump','Hop','Skip','Hand-Eye Coordination','Movement Course']),
      U('Teamwork and Health',['Take Turns','Follow Game Rules','Work as a Team','Why Exercise Matters','Healthy Activity Review'])
    ]
  },
  {
    id:'geography', name:'Geography', icon:'🌍',
    description:'Learn about maps, directions, land, water, weather, and places around the world.',
    units:[
      U('My Places',['My Home','My School','My Neighborhood','My City','Places I Visit']),
      U('Maps',['What Is a Map?','Map Symbols','Simple Map Keys','Draw a Room Map','Follow a Simple Map']),
      U('Directions',['Left and Right','Near and Far','North South East West','Give Directions','Direction Review']),
      U('Land Water and Weather',['Land and Water','Mountains and Plains','Rivers and Seas','Weather Types','Seasons']),
      U('Our World',['Continents','Countries','Cities','Different Homes Around the World','People and Places Review'])
    ]
  }
];

const subjectGrid = document.getElementById('subjectGrid');
const subjectCount = document.getElementById('subjectCount');
const subjectSearch = document.getElementById('subjectSearch');
const exploreBtn = document.getElementById('exploreBtn');
const learnView = document.getElementById('learnView');
const dashboardView = document.getElementById('dashboardView');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const modal = document.getElementById('subjectModal');
const modalIcon = document.getElementById('modalIcon');
const modalAge = document.getElementById('modalAge');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const subjectSummary = document.getElementById('subjectSummary');
const lessonList = document.getElementById('lessonList');
const startedCount = document.getElementById('startedCount');
const completedCount = document.getElementById('completedCount');
const streakCount = document.getElementById('streakCount');
const continueGrid = document.getElementById('continueGrid');

let activeSubjectId = null;

function loadProgress(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return saved && typeof saved === 'object' ? saved : {};
  }catch(_){ return {}; }
}
let progress = loadProgress();

function saveProgress(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function lessonKey(subjectId, unitIndex, lessonIndex){ return subjectId + ':' + unitIndex + ':' + lessonIndex; }
function isComplete(subjectId, unitIndex, lessonIndex){ return progress[lessonKey(subjectId,unitIndex,lessonIndex)] === true; }

function markActivity(){
  const d=new Date();
  const key=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  let dates=[];
  try{ const saved=JSON.parse(localStorage.getItem(ACTIVITY_KEY)||'[]'); if(Array.isArray(saved)) dates=saved; }catch(_){}
  if(!dates.includes(key)){
    dates.push(key);
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(dates.slice(-120)));
  }
}

function subjectTotals(subject){
  const total=subject.units.reduce((n,u)=>n+u.lessons.length,0);
  let done=0;
  subject.units.forEach((u,ui)=>u.lessons.forEach((_,li)=>{if(isComplete(subject.id,ui,li)) done++;}));
  return {done,total,percent:Math.round((done/total)*100)};
}

function unitTotals(subject, unitIndex){
  const unit=subject.units[unitIndex];
  let done=0;
  unit.lessons.forEach((_,li)=>{if(isComplete(subject.id,unitIndex,li)) done++;});
  return {done,total:unit.lessons.length};
}

function renderSubjects(){
  const q=subjectSearch.value.trim().toLowerCase();
  const filtered=subjects.filter(s=>
    !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) ||
    s.units.some(u=>u.title.toLowerCase().includes(q)||u.lessons.some(l=>l.toLowerCase().includes(q)))
  );

  subjectCount.textContent = filtered.length===subjects.length
    ? '9 subjects · 225 lessons'
    : filtered.length + ' subject' + (filtered.length===1?'':'s');

  subjectGrid.innerHTML='';
  if(!filtered.length){
    subjectGrid.innerHTML='<div class="empty-state">No Grade 1 subjects match this search.</div>';
    return;
  }

  filtered.forEach(subject=>{
    const p=subjectTotals(subject);
    const card=document.createElement('button');
    card.type='button';
    card.className='subject-card';
    card.innerHTML=
      '<span class="subject-age">Grade 1</span>'+
      '<span class="subject-icon" aria-hidden="true">'+subject.icon+'</span>'+
      '<h3>'+subject.name+'</h3>'+
      '<p>'+subject.description+'</p>'+
      '<div class="subject-footer"><span>5 units · 25 lessons</span><span>'+p.percent+'% complete</span></div>';
    card.addEventListener('click',()=>openSubject(subject.id));
    subjectGrid.appendChild(card);
  });
}

function openSubject(id){
  const subject=subjects.find(s=>s.id===id);
  if(!subject) return;
  activeSubjectId=id;
  const p=subjectTotals(subject);
  modalIcon.textContent=subject.icon;
  modalAge.textContent='VERTEX LEARNING · GRADE 1';
  modalTitle.textContent=subject.name;
  modalDescription.textContent=subject.description;
  subjectSummary.innerHTML='<span>5 units</span><span>25 lessons</span><span>'+p.done+' completed</span>';
  renderUnits(subject);
  modal.hidden=false;
  document.body.style.overflow='hidden';
}

function closeSubject(){
  modal.hidden=true;
  document.body.style.overflow='';
  activeSubjectId=null;
}

function renderUnits(subject){
  lessonList.innerHTML='';
  subject.units.forEach((unit,ui)=>{
    const totals=unitTotals(subject,ui);
    const card=document.createElement('section');
    card.className='unit-card'+(ui===0?' open':'');
    const head=document.createElement('button');
    head.type='button';
    head.className='unit-head';
    head.innerHTML=
      '<span class="unit-head-left"><span class="unit-number">'+(ui+1)+'</span><span><strong>'+unit.title+'</strong><small>5 lessons</small></span></span>'+
      '<span class="unit-progress">'+totals.done+'/5 complete</span>';
    const lessons=document.createElement('div');
    lessons.className='unit-lessons';

    unit.lessons.forEach((title,li)=>{
      const done=isComplete(subject.id,ui,li);
      const row=document.createElement('div');
      row.className='unit-lesson'+(done?' completed':'');
      row.innerHTML=
        '<span class="unit-lesson-number">'+(li+1)+'</span>'+
        '<div><strong>'+title+'</strong><small>Unit '+(ui+1)+' · Lesson '+(li+1)+'</small></div>'+
        '<button type="button">'+(done?'✓ Completed':'Mark complete')+'</button>';
      row.querySelector('button').addEventListener('click',()=>{
        const key=lessonKey(subject.id,ui,li);
        progress[key]=!isComplete(subject.id,ui,li);
        if(progress[key]) markActivity();
        saveProgress();
        renderUnits(subject);
        const p=subjectTotals(subject);
        subjectSummary.innerHTML='<span>5 units</span><span>25 lessons</span><span>'+p.done+' completed</span>';
        renderSubjects();
        renderDashboard();
      });
      lessons.appendChild(row);
    });

    head.addEventListener('click',()=>card.classList.toggle('open'));
    card.appendChild(head);
    card.appendChild(lessons);
    lessonList.appendChild(card);
  });
}

function calculateStreak(){
  let dates=[];
  try{const saved=JSON.parse(localStorage.getItem(ACTIVITY_KEY)||'[]');if(Array.isArray(saved)) dates=[...new Set(saved)].sort();}catch(_){}
  if(!dates.length) return 0;
  const parse=v=>{const [y,m,d]=v.split('-').map(Number);return new Date(y,m-1,d);};
  const today=new Date();today.setHours(0,0,0,0);
  const yesterday=new Date(today);yesterday.setDate(today.getDate()-1);
  let cursor=parse(dates[dates.length-1]);cursor.setHours(0,0,0,0);
  if(cursor.getTime()!==today.getTime()&&cursor.getTime()!==yesterday.getTime()) return 0;
  let streak=1;
  for(let i=dates.length-2;i>=0;i--){
    const current=parse(dates[i]);current.setHours(0,0,0,0);
    const expected=new Date(cursor);expected.setDate(cursor.getDate()-1);
    if(current.getTime()===expected.getTime()){streak++;cursor=current;}else break;
  }
  return streak;
}

function renderDashboard(){
  const started=subjects.filter(s=>subjectTotals(s).done>0);
  const completed=subjects.reduce((sum,s)=>sum+subjectTotals(s).done,0);
  startedCount.textContent=String(started.length);
  completedCount.textContent=String(completed);
  const streak=calculateStreak();
  streakCount.textContent=streak+' day'+(streak===1?'':'s');
  continueGrid.innerHTML='';

  if(!started.length){
    continueGrid.innerHTML='<div class="empty-state">Complete a Grade 1 lesson and your progress will appear here.</div>';
    return;
  }

  started.forEach(subject=>{
    const p=subjectTotals(subject);
    const card=document.createElement('article');
    card.className='continue-card';
    card.innerHTML='<h3>'+subject.icon+' '+subject.name+'</h3><p>'+p.done+' of 25 lessons completed</p><div class="progress"><i style="width:'+p.percent+'%"></i></div>';
    card.addEventListener('click',()=>openSubject(subject.id));
    continueGrid.appendChild(card);
  });
}

function showView(name){
  const dashboard=name==='dashboard';
  learnView.classList.toggle('active',!dashboard);
  dashboardView.classList.toggle('active',dashboard);
  navLinks.forEach(link=>link.classList.toggle('active',link.dataset.view===name));
  if(dashboard) renderDashboard();
  window.scrollTo({top:0,behavior:'smooth'});
}

subjectSearch.addEventListener('input',renderSubjects);
exploreBtn.addEventListener('click',()=>document.querySelector('.subjects-section').scrollIntoView({behavior:'smooth'}));
navLinks.forEach(link=>link.addEventListener('click',()=>showView(link.dataset.view)));
modal.addEventListener('click',event=>{if(event.target.matches('[data-close-modal]')) closeSubject();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!modal.hidden) closeSubject();});

renderSubjects();
renderDashboard();
