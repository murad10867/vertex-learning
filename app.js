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


/* ---------- 10-page lesson player ---------- */
const LESSON_STATE_KEY = 'vertexLearningLessonStateGrade1V1';
const lessonPlayer = document.getElementById('lessonPlayer');
const closeLessonBtn = document.getElementById('closeLessonBtn');
const lessonBreadcrumb = document.getElementById('lessonBreadcrumb');
const lessonPlayerTitle = document.getElementById('lessonPlayerTitle');
const lessonPageCounter = document.getElementById('lessonPageCounter');
const lessonProgressDots = document.getElementById('lessonProgressDots');
const lessonPageContent = document.getElementById('lessonPageContent');
const lessonBackBtn = document.getElementById('lessonBackBtn');
const lessonNextBtn = document.getElementById('lessonNextBtn');
const lessonAnswerStatus = document.getElementById('lessonAnswerStatus');

let lessonSession = null;
let pageAnswers = {};

function loadLessonState(){
  try{
    const saved=JSON.parse(localStorage.getItem(LESSON_STATE_KEY)||'{}');
    return saved&&typeof saved==='object'?saved:{};
  }catch(_){return {};}
}
let lessonState=loadLessonState();
function saveLessonState(){localStorage.setItem(LESSON_STATE_KEY,JSON.stringify(lessonState));}
function lessonStateKey(subjectId,unitIndex,lessonIndex){return subjectId+':'+unitIndex+':'+lessonIndex;}

function subjectById(id){return subjects.find(s=>s.id===id);}
function currentLessonInfo(){
  if(!lessonSession) return null;
  const subject=subjectById(lessonSession.subjectId);
  if(!subject) return null;
  const unit=subject.units[lessonSession.unitIndex];
  const title=unit.lessons[lessonSession.lessonIndex];
  return {subject,unit,title};
}

function openLesson(subjectId,unitIndex,lessonIndex){
  const subject=subjectById(subjectId);
  if(!subject||!subject.units[unitIndex]||!subject.units[unitIndex].lessons[lessonIndex]) return;
  const key=lessonStateKey(subjectId,unitIndex,lessonIndex);
  const savedPage=Number(lessonState[key]&&lessonState[key].page);
  lessonSession={
    subjectId,
    unitIndex,
    lessonIndex,
    page:Number.isInteger(savedPage)?Math.max(0,Math.min(9,savedPage)):0
  };
  pageAnswers={};
  modal.hidden=true;
  lessonPlayer.hidden=false;
  document.body.style.overflow='hidden';
  renderLessonPage();
}

function leaveLesson(){
  if(!lessonSession) return;
  const info=currentLessonInfo();
  lessonPlayer.hidden=true;
  document.body.style.overflow='';
  if(info) openSubject(info.subject.id);
  lessonSession=null;
  pageAnswers={};
}

function setLessonPage(page){
  if(!lessonSession) return;
  lessonSession.page=Math.max(0,Math.min(9,page));
  const key=lessonStateKey(lessonSession.subjectId,lessonSession.unitIndex,lessonSession.lessonIndex);
  lessonState[key]={page:lessonSession.page};
  saveLessonState();
  pageAnswers={};
  renderLessonPage();
  lessonPlayer.scrollTo({top:0,behavior:'smooth'});
}

function pageType(page){
  if(page<=2) return 'EXPLANATION';
  if(page===3) return 'WORKED EXAMPLE';
  return 'QUESTIONS';
}

function lessonExplanation(info,page){
  const subjectName=info.subject.name;
  const topic=info.title;
  const unit=info.unit.title;
  const subjectTips={
    math:['Look at the numbers carefully.','Use objects or drawings to help.','Check your answer by trying it again.'],
    science:['Observe what you can see.','Ask what changes and what stays the same.','Use simple evidence to explain your idea.'],
    english:['Say the sound or word aloud.','Look for the pattern in the word or sentence.','Read it again to check that it makes sense.'],
    arabic:['Look carefully at the letter or word.','Say the sound slowly and clearly.','Read from right to left and practice writing it.'],
    islamic:['Read the idea carefully.','Think about how we use it in daily life.','Practice the good action or remembrance.'],
    'computer-science':['Follow the steps in order.','Notice what each tool or command does.','Try the sequence again to check it.'],
    art:['Look closely at lines, shapes, and colors.','Try the idea with your own drawing.','There can be more than one creative result.'],
    sports:['Move safely and keep your space clear.','Practice slowly before going faster.','Stop if something feels unsafe.'],
    geography:['Look for place, direction, or position clues.','Use maps and symbols to help.','Connect the idea to places you know.']
  };
  const tips=subjectTips[info.subject.id]||['Look carefully.','Try it step by step.','Check your thinking.'];

  if(page===0){
    return {
      title:'Meet the idea: '+topic,
      lead:'This Grade 1 lesson is part of '+subjectName+' → '+unit+'. We will learn the main idea in small, clear steps.',
      cards:[
        ['What we learn',topic+' is the focus of this lesson. First, notice what the idea means and where you may see it.'],
        ['Why it matters','This skill helps you understand '+subjectName.toLowerCase()+' and prepares you for the next lesson.'],
        ['Your goal','By the end, you should be able to recognize the idea, explain it simply, and answer practice questions.']
      ]
    };
  }
  if(page===1){
    return {
      title:'Key ideas for '+topic,
      lead:'Use these three ideas while you learn. You do not need to rush—one idea at a time is enough.',
      cards:[
        ['Key idea 1',tips[0]],
        ['Key idea 2',tips[1]],
        ['Key idea 3',tips[2]]
      ]
    };
  }
  return {
    title:'Remember and try',
    lead:'Before the example, say the lesson idea in your own words and try a tiny practice step.',
    cards:[
      ['Remember','The lesson is about '+topic+'. Keep the main idea simple and clear.'],
      ['Try','Make your own small example of '+topic+' using something you know.'],
      ['Check','Ask yourself: “Can I explain this to someone else?” If yes, you are ready for the example.']
    ]
  };
}

function workedExample(info){
  const examples={
    math:['Example: We have 3 counters and add 2 more.','Start with 3.','Add 2 more counters.','Count them all: 5.'],
    science:['Example: Is a plant living or nonliving?','A plant grows.','A plant needs water and light.','So a plant is a living thing.'],
    english:['Example: Read the word “cat.”','Look at each letter: c-a-t.','Say the sounds slowly.','Blend them together: cat.'],
    arabic:['Example: Read the letter ب with fatha.','Find the letter: ب','Add the fatha: بَ','Say the sound clearly: “ba”.'],
    islamic:['Example: Showing good manners.','Someone greets you with salam.','Listen and respond kindly.','Good manners make our actions better.'],
    'computer-science':['Example: Give a computer a sequence.','Step 1: open the drawing app.','Step 2: choose a color.','Step 3: draw a shape. Order matters.'],
    art:['Example: Make a picture from shapes.','Draw a large circle.','Add two small circles.','Use lines and color to turn the shapes into your own picture.'],
    sports:['Example: Practice a safe jump.','Bend your knees.','Jump with two feet.','Land softly with bent knees.'],
    geography:['Example: Give a direction.','The library is to the right of the school.','Start at the school.','Move right to reach the library.']
  };
  const x=examples[info.subject.id]||['Example for '+info.title,'Look at the idea.','Try it step by step.','Check the result.'];
  return {title:x[0],steps:x.slice(1)};
}

function rotateOptions(correct,wrong1,wrong2,seed){
  const all=[correct,wrong1,wrong2];
  const shift=((seed%3)+3)%3;
  return all.slice(shift).concat(all.slice(0,shift));
}

function mcq(prompt,correct,wrong1,wrong2,seed){
  return {prompt,correct,options:rotateOptions(correct,wrong1,wrong2,seed)};
}

const FACT_BANKS={
  science:[
    ['Which one is living?','plant','rock','chair'],
    ['What does a plant need?','water','plastic','a toy'],
    ['Which body part helps you see?','eyes','ears','feet'],
    ['Which sense helps you hear?','hearing','taste','touch'],
    ['Which is weather?','rain','table','pencil'],
    ['What shines in the daytime sky?','Sun','shoe','book'],
    ['Which can be pushed?','a ball','a smell','a sound'],
    ['A magnet can attract some things made of…','metal','paper only','water'],
    ['Which is a healthy habit?','washing hands','never sleeping','eating only candy'],
    ['Where can a fish live?','water','a desk','a backpack'],
    ['Which is nonliving?','rock','cat','tree'],
    ['A baby animal can…','grow','stay the same forever','turn into a chair']
  ],
  english:[
    ['Which word begins with C?','cat','dog','sun'],
    ['Which is a vowel?','A','B','T'],
    ['Which word is an action?','run','blue','chair'],
    ['Which word names a person?','teacher','jump','happy'],
    ['Which sentence starts correctly?','The cat runs.','the cat runs.','the Cat runs.'],
    ['Which mark can end a sentence?','.',',','/'],
    ['Which word rhymes with cat?','hat','dog','sun'],
    ['Which word begins with S?','sun','map','pig'],
    ['Which is a describing word?','big','run','desk'],
    ['Which sentence has a capital letter?','I can read.','i can read.','i Can read.'],
    ['Which word is a noun?','book','jump','quickly'],
    ['Which word has short a?','map','moon','feet']
  ],
  arabic:[
    ['Which is an Arabic letter?','ب','B','2'],
    ['Which word starts with ب?','باب','قلم','نهر'],
    ['Which mark is a fatha?','َ','ُ','ِ'],
    ['Which mark is a damma?','ُ','َ','ِ'],
    ['Which mark is a kasra?','ِ','َ','ُ'],
    ['Arabic is usually read…','right to left','left to right only','bottom to top'],
    ['Which letter is م?','م','س','ل'],
    ['Which letter is ن?','ن','ف','ك'],
    ['Which word means “book”?','كتاب','باب','بيت'],
    ['Which word means “house”?','بيت','قلم','شمس'],
    ['Which letter is و?','و','ر','د'],
    ['Which letter is ي?','ي','ب','ت']
  ],
  islamic:[
    ['Who created us?','Allah','a toy','a book'],
    ['What greeting do Muslims use?','Assalamu alaikum','Good night only','No greeting'],
    ['Which is a good manner?','honesty','lying','hurting others'],
    ['Before prayer we learn to make…','wudu','a drawing','a race'],
    ['How many daily prayers are there?','5','2','10'],
    ['Which surah opens the Quran?','Al-Fatihah','An-Nas','Al-Falaq'],
    ['Which is kind?','helping others','pushing others','taking things'],
    ['We should respect…','parents','nobody','only toys'],
    ['Before eating we remember…','Allah','a game only','nothing'],
    ['Which is good cleanliness?','washing hands','never washing','making a mess'],
    ['The Shahada teaches us about…','faith','colors','sports'],
    ['Good manners include…','kind words','shouting at everyone','breaking things']
  ],
  'computer-science':[
    ['Which part shows pictures and words?','monitor','mouse pad only','chair'],
    ['Which part helps type letters?','keyboard','cup','shoe'],
    ['Which can move the pointer?','mouse','book','speaker only'],
    ['An algorithm is…','steps in order','a random mess','a color'],
    ['Which is safer online?','ask a trusted adult','share every password','talk to anyone'],
    ['A password should be…','private','written for strangers','shared with everyone'],
    ['Drag and drop uses…','pointer movement','sleeping','jumping'],
    ['Which is software?','an app','a desk','a pencil'],
    ['Which is hardware?','keyboard','a song','a website idea'],
    ['What should you do before going online?','ask permission','hide it','tell nobody'],
    ['Kind online behavior means…','use respectful words','send mean messages','share secrets'],
    ['To save work means…','keep it for later','erase everything','turn it into paper']
  ],
  art:[
    ['Which is a primary color?','red','brown','gray'],
    ['Which is a shape?','circle','loud','fast'],
    ['A pattern…','repeats','never repeats','has no design'],
    ['Which can show texture?','rough lines','a smell only','a sound only'],
    ['Warm colors can include…','red','blue only','gray only'],
    ['Cool colors can include…','blue','orange only','brown only'],
    ['A straight line is…','not curved','always a circle','a color'],
    ['Which tool can draw?','pencil','plate','shoe'],
    ['A collage can use…','different pieces','only air','nothing'],
    ['Artists can use color to show…','mood','only numbers','only time'],
    ['Which has four equal sides?','square','triangle','circle'],
    ['A creative project can have…','your own ideas','only one possible answer','no choices']
  ],
  sports:[
    ['Before activity, it is good to…','warm up','sit forever','run into people'],
    ['A safe landing uses…','bent knees','locked knees','closed eyes'],
    ['Which uses balance?','standing on one foot','sleeping','reading'],
    ['When playing a team game, we should…','take turns','ignore rules','push others'],
    ['Exercise helps the body stay…','healthy','asleep all day','still forever'],
    ['A cool down happens…','after activity','before waking up only','never'],
    ['To catch safely, watch the…','ball','floor only','wall behind you'],
    ['A target throw aims at…','a target','anything random','another person'],
    ['Good teamwork means…','working together','arguing','never sharing'],
    ['Which is movement?','jumping','sleeping','sitting still'],
    ['When space is crowded, we should…','slow down','run faster','push through'],
    ['Water is important after activity because it helps…','hydrate the body','make shoes bigger','change the weather']
  ],
  geography:[
    ['A map shows…','places','only sounds','only food'],
    ['A map key explains…','symbols','weather only','homework only'],
    ['Opposite of left is…','right','near','up'],
    ['Which is land?','mountain','ocean','river'],
    ['Which is water?','sea','hill','road'],
    ['North, south, east, and west are…','directions','colors','foods'],
    ['Which is a place in a community?','school','triangle','number'],
    ['A city is…','a place where people live','a weather type','a color'],
    ['Rain is a type of…','weather','map symbol only','direction'],
    ['A continent is…','a large land area','a small pencil','a cloud'],
    ['Which can be on a map?','road','taste','sound'],
    ['Near means…','close','very far','underwater only']
  ]
};

function mathQuestion(info,seed){
  const t=info.title.toLowerCase();
  const a=1+(seed*3)%9;
  const b=1+(seed*5)%8;
  if(t.includes('subtract')){
    const big=Math.max(a,b)+3, small=Math.min(a,b);
    const ans=big-small;
    return mcq(big+' − '+small+' = ?',String(ans),String(ans+1),String(Math.max(0,ans-1)),seed);
  }
  if(t.includes('add')||t.includes('sum')||t.includes('fact')){
    const ans=a+b;
    return mcq(a+' + '+b+' = ?',String(ans),String(ans+1),String(Math.max(0,ans-1)),seed);
  }
  if(t.includes('shape')){
    const shapes=[['triangle','3'],['square','4'],['rectangle','4']];
    const x=shapes[seed%shapes.length];
    return mcq('How many sides does a '+x[0]+' have?',x[1],x[1]==='3'?'4':'3','5',seed);
  }
  if(t.includes('time')){
    const hour=1+(seed%11);
    return mcq('Which shows '+hour+" o'clock?",hour+':00',hour+':30',(hour+1)+':00',seed);
  }
  if(t.includes('compare')){
    const x=a+5,y=b;
    const correct=String(Math.max(x,y));
    return mcq('Which number is greater: '+x+' or '+y+'?',correct,correct===String(x)?String(y):String(x),'They are equal',seed);
  }
  const n=1+(seed*4)%98;
  return mcq('What number comes after '+n+'?',String(n+1),String(n-1),String(n+2),seed);
}

function genericQuestion(info,seed){
  if(info.subject.id==='math') return mathQuestion(info,seed);
  const bank=FACT_BANKS[info.subject.id]||[
    ['Which choice best matches this lesson?','the lesson idea','an unrelated idea','nothing'],
    ['What should you do first?','look carefully','guess without looking','skip everything'],
    ['How can you learn well?','practice','never try','ignore feedback']
  ];
  const item=bank[seed%bank.length];
  return mcq(item[0],item[1],item[2],item[3],seed);
}

function questionsForPage(info,page){
  const practicePage=page-4;
  const base=(info.unit.title.length+info.title.length+lessonSession.unitIndex*17+lessonSession.lessonIndex*23+practicePage*10);
  return Array.from({length:10},(_,i)=>genericQuestion(info,base+i));
}

function renderLessonPage(){
  const info=currentLessonInfo();
  if(!info) return;
  const page=lessonSession.page;

  lessonBreadcrumb.textContent='Grade 1 · '+info.subject.name+' · '+info.unit.title;
  lessonPlayerTitle.textContent=info.title;
  lessonPageCounter.textContent='Page '+(page+1)+' of 10';

  lessonProgressDots.innerHTML='';
  for(let i=0;i<10;i++){
    const dot=document.createElement('i');
    if(i<page) dot.className='done';
    if(i===page) dot.className='active';
    lessonProgressDots.appendChild(dot);
  }

  lessonBackBtn.disabled=page===0;
  lessonAnswerStatus.textContent='';

  if(page<=2){
    const x=lessonExplanation(info,page);
    lessonPageContent.innerHTML=
      '<span class="lesson-type">EXPLANATION '+(page+1)+' OF 3</span>'+
      '<h1>'+x.title+'</h1>'+
      '<p class="page-lead">'+x.lead+'</p>'+
      '<div class="explanation-grid">'+x.cards.map(c=>
        '<article class="explain-card"><span>LEARN</span><h3>'+c[0]+'</h3><p>'+c[1]+'</p></article>'
      ).join('')+'</div>';
    lessonNextBtn.disabled=false;
    lessonNextBtn.textContent='Next →';
    return;
  }

  if(page===3){
    const x=workedExample(info);
    lessonPageContent.innerHTML=
      '<span class="lesson-type">WORKED EXAMPLE</span>'+
      '<h1>'+info.title+'</h1>'+
      '<p class="page-lead">Watch one example from start to finish before you begin the questions.</p>'+
      '<article class="worked-example"><small>EXAMPLE</small><h3>'+x.title+'</h3>'+
      '<div class="example-steps">'+x.steps.map((s,i)=>'<div><strong>Step '+(i+1)+':</strong> '+s+'</div>').join('')+'</div></article>';
    lessonNextBtn.disabled=false;
    lessonNextBtn.textContent='Start questions →';
    return;
  }

  renderQuestionPage(info,page);
}

function renderQuestionPage(info,page){
  const questions=questionsForPage(info,page);
  pageAnswers={};
  const qPage=page-3;

  lessonPageContent.innerHTML=
    '<div class="question-page-head"><div><span class="lesson-type">QUESTIONS · PAGE '+qPage+' OF 6</span>'+
    '<h1>'+info.title+'</h1></div><span id="questionScore" class="question-score">0 / 10 answered</span></div>'+
    '<p class="page-lead">Answer all 10 questions to continue.</p><div id="questionList" class="question-list"></div>';

  const list=document.getElementById('questionList');
  questions.forEach((q,index)=>{
    const card=document.createElement('article');
    card.className='question-card';
    card.innerHTML=
      '<div class="question-title"><span class="question-number">'+(index+1)+'</span><strong>'+q.prompt+'</strong></div>'+
      '<div class="answer-options"></div><div class="question-feedback"></div>';
    const options=card.querySelector('.answer-options');
    const feedback=card.querySelector('.question-feedback');

    q.options.forEach(option=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.textContent=option;
      btn.addEventListener('click',()=>{
        if(pageAnswers[index]) return;
        const correct=option===q.correct;
        pageAnswers[index]={answered:true,correct};
        card.classList.add(correct?'correct':'wrong');
        feedback.textContent=correct?'Correct!':'Not quite. The correct answer is '+q.correct+'.';
        Array.from(options.children).forEach(b=>{
          b.disabled=true;
          if(b.textContent===q.correct) b.classList.add('correct-answer');
          else if(b===btn&&!correct) b.classList.add('wrong-answer');
        });
        updateQuestionGate(page);
      });
      options.appendChild(btn);
    });
    list.appendChild(card);
  });

  lessonNextBtn.disabled=true;
  lessonNextBtn.textContent=page===9?'Finish lesson ✓':'Next 10 questions →';
  updateQuestionGate(page);
}

function updateQuestionGate(page){
  const answered=Object.keys(pageAnswers).length;
  const correct=Object.values(pageAnswers).filter(x=>x.correct).length;
  const score=document.getElementById('questionScore');
  if(score) score.textContent=answered+' / 10 answered · '+correct+' correct';
  lessonAnswerStatus.textContent=answered<10 ? 'Answer '+(10-answered)+' more question'+(10-answered===1?'':'s') : correct+'/10 correct';
  lessonNextBtn.disabled=answered<10;
}

function completeCurrentLesson(){
  const info=currentLessonInfo();
  if(!info) return;
  const key=lessonKey(info.subject.id,lessonSession.unitIndex,lessonSession.lessonIndex);
  progress[key]=true;
  saveProgress();
  markActivity();
  const stateKey=lessonStateKey(info.subject.id,lessonSession.unitIndex,lessonSession.lessonIndex);
  lessonState[stateKey]={page:9,completed:true};
  saveLessonState();
  lessonPlayer.hidden=true;
  document.body.style.overflow='';
  lessonSession=null;
  pageAnswers={};
  renderSubjects();
  renderDashboard();
  openSubject(info.subject.id);
}

lessonBackBtn.addEventListener('click',()=>{
  if(lessonSession&&lessonSession.page>0) setLessonPage(lessonSession.page-1);
});
lessonNextBtn.addEventListener('click',()=>{
  if(!lessonSession) return;
  if(lessonSession.page===9){completeCurrentLesson();return;}
  setLessonPage(lessonSession.page+1);
});
closeLessonBtn.addEventListener('click',leaveLesson);

/* Replace the old lesson rows with real lesson launch buttons. */
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
      '<span class="unit-head-left"><span class="unit-number">'+(ui+1)+'</span><span><strong>'+unit.title+'</strong><small>5 lessons · 10 pages each</small></span></span>'+
      '<span class="unit-progress">'+totals.done+'/5 complete</span>';
    const lessons=document.createElement('div');
    lessons.className='unit-lessons';

    unit.lessons.forEach((title,li)=>{
      const done=isComplete(subject.id,ui,li);
      const state=lessonState[lessonStateKey(subject.id,ui,li)];
      const resume=state&&!done&&Number.isInteger(Number(state.page))&&Number(state.page)>0;
      const row=document.createElement('div');
      row.className='unit-lesson'+(done?' completed':'');
      row.innerHTML=
        '<span class="unit-lesson-number">'+(li+1)+'</span>'+
        '<div><strong>'+title+'</strong><small>10 pages · 3 explanations · 1 example · 60 questions</small></div>'+
        '<button type="button">'+(done?'Review lesson':resume?'Continue':'Start lesson')+'</button>';
      row.querySelector('button').addEventListener('click',()=>openLesson(subject.id,ui,li));
      lessons.appendChild(row);
    });

    head.addEventListener('click',()=>card.classList.toggle('open'));
    card.appendChild(head);
    card.appendChild(lessons);
    lessonList.appendChild(card);
  });
}
