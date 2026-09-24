const LEVELS=[...Array.from({length:12},(_,i)=>({grade:i+1,name:'Grade '+(i+1),badge:String(i+1)})),{grade:13,name:'College',badge:'C'}];

const META={
math:['Mathematics','➗','Numbers, algebra, geometry, data, and problem solving.'],
science:['Science','🔬','Life, Earth, matter, energy, investigation, and scientific thinking.'],
english:['English','🔤','Reading, writing, vocabulary, grammar, and communication.'],
arabic:['Arabic','📖','Arabic reading, writing, grammar, vocabulary, and expression.'],
islamic:['Islamic Studies','☪️','Faith, worship, Quran, manners, and Islamic values.'],
'computer-science':['Computer Science','💻','Computers, digital tools, data, algorithms, and technology.'],
art:['Art','🎨','Drawing, color, design, media, and creativity.'],
sports:['Sports & Activity','⚽','Movement, fitness, coordination, teamwork, and health.'],
geography:['Geography','🌍','Maps, places, environments, regions, and the world.'],
history:['History','🏛️','People, civilizations, events, and historical thinking.'],
programming:['Programming','</>','Coding, logic, software, and projects.'],
physics:['Physics','⚛️','Motion, forces, energy, waves, and electricity.'],
chemistry:['Chemistry','🧪','Matter, atoms, bonding, reactions, and chemical systems.']
};
const ORDER=['math','science','english','arabic','islamic','computer-science','art','sports','geography','history','programming','physics','chemistry'];

function subjectIdsForGrade(g){
  return ORDER.filter(id=>{
    if(id==='history')return g>=3;
    if(id==='programming')return g>=4;
    if(id==='physics'||id==='chemistry')return g>=10;
    return true;
  });
}
function stage(g){return g<=2?'lower':g<=5?'elementary':g<=8?'middle':g<=12?'high':'college';}

const UNITS={
math:{
lower:['Numbers & Counting','Addition & Subtraction','Place Value','Shapes & Measurement','Time Money & Data'],
elementary:['Whole Numbers','Fractions & Decimals','Operations','Geometry & Measurement','Data & Patterns'],
middle:['Number Systems','Ratios & Proportions','Expressions & Equations','Geometry','Statistics & Probability'],
high:['Algebra','Functions','Geometry & Trigonometry','Statistics & Probability','Modeling'],
college:['College Algebra','Functions & Modeling','Calculus Foundations','Statistics','Quantitative Applications']},
science:{
lower:['Living Things','Plants & Animals','Body & Health','Earth & Weather','Materials & Forces'],
elementary:['Life Science','Earth Systems','Matter','Energy & Forces','Scientific Investigation'],
middle:['Cells & Organisms','Earth & Space','Matter & Reactions','Forces & Energy','Scientific Inquiry'],
high:['Biology','Earth & Environment','Physical Science','Energy Systems','Research & Lab Skills'],
college:['Scientific Reasoning','Life & Earth Systems','Matter & Energy','Experimental Design','Science in Society']},
english:{
lower:['Phonics','Word Skills','Vocabulary','Grammar & Reading','Writing'],
elementary:['Reading','Vocabulary','Grammar','Writing','Speaking & Literature'],
middle:['Literature','Informational Reading','Grammar & Language','Composition','Research & Presentation'],
high:['Literary Analysis','Rhetoric & Argument','Advanced Grammar','Academic Writing','Research & Media'],
college:['Academic Reading','Critical Writing','Rhetoric','Research Writing','Professional Communication']},
arabic:{
lower:['Letters & Sounds','Word Reading','Vocabulary','Sentences','Writing'],
elementary:['Reading','Vocabulary','Grammar','Writing','Speaking & Literature'],
middle:['Reading Comprehension','Grammar','Morphology','Composition','Literature'],
high:['Advanced Reading','Grammar & Syntax','Rhetoric','Writing & Analysis','Literature'],
college:['Academic Arabic','Syntax & Morphology','Rhetoric & Style','Research Writing','Literary Analysis']},
islamic:{
lower:['Faith','Worship','Good Manners','Quran','Daily Duas'],
elementary:['Aqidah','Fiqh','Seerah','Quran & Hadith','Character'],
middle:['Belief','Worship & Fiqh','Seerah & History','Quran & Hadith','Ethics'],
high:['Aqidah','Fiqh & Contemporary Life','Quranic Studies','Hadith & Seerah','Ethics & Society'],
college:['Islamic Thought','Fiqh Studies','Quranic Studies','Hadith Studies','Ethics & Civilization']},
'computer-science':{
lower:['Computer Basics','Using Devices','Digital Creativity','Algorithms','Digital Safety'],
elementary:['Computer Systems','Documents & Media','Algorithms','Data','Digital Citizenship'],
middle:['Computer Systems','Algorithms & Logic','Data & Networks','Digital Creation','Cyber Safety'],
high:['Computing Systems','Algorithms','Data Science','Networks & Cybersecurity','Technology Projects'],
college:['Computer Architecture','Algorithms & Data Structures','Databases','Networks & Security','Software Systems']},
art:{
lower:['Lines & Shapes','Color','Texture & Pattern','Drawing','Creative Projects'],
elementary:['Drawing','Color & Painting','Design','Sculpture & Media','Art Projects'],
middle:['Drawing & Observation','Painting & Color','Design & Composition','3D & Digital Art','Art History & Portfolio'],
high:['Studio Drawing','Painting & Media','Graphic Design','Art History & Critique','Portfolio'],
college:['Studio Practice','Visual Design','Digital Media','Art Theory & History','Professional Portfolio']},
sports:{
lower:['Movement Basics','Balance','Throw & Catch','Jump & Coordinate','Teamwork & Health'],
elementary:['Fitness','Movement Skills','Games','Team Sports','Health & Safety'],
middle:['Fitness Training','Skill Development','Team Sports','Individual Sports','Health & Performance'],
high:['Fitness & Conditioning','Sports Skills','Team Strategy','Wellness','Performance Planning'],
college:['Fitness Science','Training Methods','Sports Performance','Health & Wellness','Leadership & Coaching']},
geography:{
lower:['My Places','Maps','Directions','Land Water & Weather','Our World'],
elementary:['Map Skills','Physical Geography','Human Geography','Regions & Cultures','Environment'],
middle:['Geospatial Skills','Physical Systems','Population & Cities','Global Regions','Human Environment Interaction'],
high:['Physical Geography','Human Geography','Economic Geography','Geopolitics & Regions','GIS & Research'],
college:['Geographic Thought','GIS & Spatial Analysis','Physical Systems','Human Systems','Geographic Research']},
history:{
elementary:['Understanding the Past','Early Communities','Ancient Civilizations','Important People','Change Over Time'],
middle:['Ancient Worlds','Medieval Worlds','Early Modern Era','Modern History','Historical Sources'],
high:['World History','Regional History','Modern Transformations','Conflict & Society','Historical Research'],
college:['Historiography','Ancient & Medieval Studies','Modern History','Global History','Historical Research']},
programming:{
elementary:['Coding Logic','Sequences','Variables','Conditions','Loops & Projects'],
middle:['Programming Basics','Variables & Data','Control Flow','Functions','Projects'],
high:['Programming Foundations','Data Structures','Algorithms','Object-Oriented Programming','Software Projects'],
college:['Programming Paradigms','Data Structures','Algorithms','Software Engineering','Capstone Development']},
physics:{high:['Motion','Forces','Energy','Waves','Electricity & Modern Physics'],college:['Mechanics','Waves & Oscillations','Electricity & Magnetism','Thermal & Modern Physics','Experimental Physics']},
chemistry:{high:['Matter & Atoms','Periodic Trends','Bonding','Chemical Reactions','Quantitative Chemistry'],college:['Atomic Structure','Chemical Bonding','Thermochemistry & Kinetics','Equilibrium & Acids','Laboratory Chemistry']}
};

function unitsFor(id,g){
  const map=UNITS[id]||{};
  return map[stage(g)]||map.high||map.elementary||map.lower||['Foundations','Core Skills','Applications','Projects','Review'];
}
function lessonsFor(unit,g){
  const s=stage(g);
  const p=s==='lower'
    ?['Meet ','Practice ','Use ','Try ','Review ']
    :s==='elementary'
      ?['Introduction to ','Core Skills: ','Practice: ','Apply: ','Review: ']
      :s==='middle'
        ?['Foundations of ','Key Ideas: ','Skills & Practice: ','Applications: ','Challenge & Review: ']
        :s==='high'
          ?['Concepts of ','Methods in ','Problem Solving: ','Applications & Analysis: ','Assessment Review: ']
          :['Principles of ','Advanced Concepts: ','Methods & Analysis: ','Applications & Case Study: ','Synthesis & Review: '];
  return p.map(x=>x+unit);
}
function curriculum(g){
  return subjectIdsForGrade(g).map(id=>{
    const [name,icon,description]=META[id];
    return {id,name,icon,description:(g===13?'College':('Grade '+g))+' '+description,units:unitsFor(id,g).map(u=>({title:u,lessons:lessonsFor(u,g)}))};
  });
}
function levelName(g){return g===13?'College':'Grade '+g;}

const gradeGrid=document.getElementById('gradeGrid'),gradeHome=document.getElementById('gradeHome'),booksView=document.getElementById('booksView');
const backToGradesBtn=document.getElementById('backToGradesBtn'),currentGradeTitle=document.getElementById('currentGradeTitle'),currentGradeSummary=document.getElementById('currentGradeSummary'),currentGradeBadge=document.getElementById('currentGradeBadge');
const subjectSearch=document.getElementById('subjectSearch'),subjectGrid=document.getElementById('subjectGrid'),subjectCount=document.getElementById('subjectCount'),booksHeading=document.getElementById('booksHeading');
const learnView=document.getElementById('learnView'),dashboardView=document.getElementById('dashboardView'),navLinks=[...document.querySelectorAll('.nav-link[data-view]')],homeBtn=document.getElementById('homeBtn');
const modal=document.getElementById('subjectModal'),modalIcon=document.getElementById('modalIcon'),modalAge=document.getElementById('modalAge'),modalTitle=document.getElementById('modalTitle'),modalDescription=document.getElementById('modalDescription'),subjectSummary=document.getElementById('subjectSummary'),lessonList=document.getElementById('lessonList');
const lessonPlayer=document.getElementById('lessonPlayer'),closeLessonBtn=document.getElementById('closeLessonBtn'),lessonBreadcrumb=document.getElementById('lessonBreadcrumb'),lessonPlayerTitle=document.getElementById('lessonPlayerTitle'),lessonPageCounter=document.getElementById('lessonPageCounter'),lessonProgressDots=document.getElementById('lessonProgressDots'),lessonPageContent=document.getElementById('lessonPageContent'),lessonBackBtn=document.getElementById('lessonBackBtn'),lessonNextBtn=document.getElementById('lessonNextBtn'),lessonAnswerStatus=document.getElementById('lessonAnswerStatus');
const startedCount=document.getElementById('startedCount'),completedCount=document.getElementById('completedCount'),streakCount=document.getElementById('streakCount'),continueGrid=document.getElementById('continueGrid');

const PROGRESS_KEY='vertexLearningAllGradesProgressV1',STATE_KEY='vertexLearningAllGradesStateV1',ACTIVITY_KEY='vertexLearningActivityV1';
function loadObj(k){try{return JSON.parse(localStorage.getItem(k)||'{}')||{}}catch(_){return {}}}
let progress=loadObj(PROGRESS_KEY),lessonState=loadObj(STATE_KEY),activeGrade=null,activeSubjects=[],activeSubjectId=null,lessonSession=null,pageAnswers={};
const pKey=(g,s,u,l)=>g+':'+s+':'+u+':'+l;
const complete=(g,s,u,l)=>progress[pKey(g,s,u,l)]===true;
function save(){localStorage.setItem(PROGRESS_KEY,JSON.stringify(progress));localStorage.setItem(STATE_KEY,JSON.stringify(lessonState));}
function markActivity(){
  const d=new Date(),k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  let a=[];try{a=JSON.parse(localStorage.getItem(ACTIVITY_KEY)||'[]')}catch(_){}
  if(!a.includes(k)){a.push(k);localStorage.setItem(ACTIVITY_KEY,JSON.stringify(a.slice(-365)));}
}

function renderGradeGrid(){
  gradeGrid.innerHTML='';
  LEVELS.forEach(l=>{
    const n=subjectIdsForGrade(l.grade).length,b=document.createElement('button');
    b.className='grade-card'+(l.grade===13?' college-card':'');b.type='button';
    b.innerHTML='<span class="grade-card-badge">'+l.badge+'</span><span class="grade-card-copy"><strong>'+l.name+'</strong><small>'+n+' subject books · '+(n*25)+' lessons</small></span><span class="grade-card-arrow">→</span>';
    b.onclick=()=>selectGrade(l.grade);gradeGrid.appendChild(b);
  });
}
function selectGrade(g){
  activeGrade=g;activeSubjects=curriculum(g);gradeHome.hidden=true;booksView.hidden=false;subjectSearch.value='';
  currentGradeTitle.textContent=levelName(g);currentGradeBadge.textContent=g===13?'C':g;
  currentGradeSummary.textContent=activeSubjects.length+' subject books · 5 units each · 25 lessons per book';
  booksHeading.textContent=levelName(g)+' books';renderBooks();window.scrollTo({top:0,behavior:'smooth'});
}
function showGradeHome(){activeGrade=null;activeSubjects=[];booksView.hidden=true;gradeHome.hidden=false;window.scrollTo({top:0,behavior:'smooth'});}
function bookDone(book){let n=0;book.units.forEach((u,ui)=>u.lessons.forEach((_,li)=>{if(complete(activeGrade,book.id,ui,li))n++;}));return n;}
function renderBooks(){
  const q=subjectSearch.value.toLowerCase().trim(),arr=activeSubjects.filter(b=>!q||b.name.toLowerCase().includes(q));
  subjectCount.textContent=arr.length+' books · '+(arr.length*25)+' lessons';subjectGrid.innerHTML='';
  arr.forEach(book=>{
    const d=bookDone(book),b=document.createElement('button');b.className='subject-card';b.type='button';
    b.innerHTML='<span class="subject-age">'+levelName(activeGrade)+'</span><span class="subject-icon">'+book.icon+'</span><h3>'+book.name+'</h3><p>'+book.description+'</p><div class="subject-footer"><span>5 units · 25 lessons</span><span>'+Math.round(d/25*100)+'% complete</span></div>';
    b.onclick=()=>openBook(book.id);subjectGrid.appendChild(b);
  });
}
function openBook(id){
  const book=activeSubjects.find(x=>x.id===id);if(!book)return;activeSubjectId=id;const d=bookDone(book);
  modalIcon.textContent=book.icon;modalAge.textContent='VERTEX LEARNING · '+levelName(activeGrade);modalTitle.textContent=book.name;modalDescription.textContent=book.description;
  subjectSummary.innerHTML='<span>5 units</span><span>25 lessons</span><span>'+d+' completed</span>';renderUnits(book);modal.hidden=false;document.body.style.overflow='hidden';
}
function closeBook(){modal.hidden=true;document.body.style.overflow='';activeSubjectId=null;}
function renderUnits(book){
  lessonList.innerHTML='';
  book.units.forEach((u,ui)=>{
    let done=0;u.lessons.forEach((_,li)=>{if(complete(activeGrade,book.id,ui,li))done++;});
    const card=document.createElement('section');card.className='unit-card'+(ui===0?' open':'');
    const head=document.createElement('button');head.type='button';head.className='unit-head';
    head.innerHTML='<span class="unit-head-left"><span class="unit-number">'+(ui+1)+'</span><span><strong>'+u.title+'</strong><small>5 lessons</small></span></span><span class="unit-progress">'+done+'/5 complete</span>';
    const list=document.createElement('div');list.className='unit-lessons';
    u.lessons.forEach((title,li)=>{
      const done=complete(activeGrade,book.id,ui,li),state=lessonState[pKey(activeGrade,book.id,ui,li)]||{},row=document.createElement('div');row.className='unit-lesson'+(done?' completed':'');
      row.innerHTML='<span class="unit-lesson-number">'+(li+1)+'</span><div><strong>'+title+'</strong><small>10 pages · 3 explanations · 1 example · 60 questions</small></div><button type="button">'+(done?'Review lesson':Number(state.page)>0?'Continue':'Start lesson')+'</button>';
      row.querySelector('button').onclick=()=>openLesson(book.id,ui,li);list.appendChild(row);
    });
    head.onclick=()=>card.classList.toggle('open');card.append(head,list);lessonList.appendChild(card);
  });
}
function openLesson(id,ui,li){
  const state=lessonState[pKey(activeGrade,id,ui,li)]||{};lessonSession={grade:activeGrade,id,ui,li,page:Math.max(0,Math.min(9,Number(state.page)||0))};pageAnswers={};
  modal.hidden=true;lessonPlayer.hidden=false;document.body.style.overflow='hidden';renderLessonPage();
}
function info(){
  const books=curriculum(lessonSession.grade),book=books.find(x=>x.id===lessonSession.id),unit=book.units[lessonSession.ui];
  return {grade:lessonSession.grade,book,unit,title:unit.lessons[lessonSession.li]};
}
function setPage(p){lessonSession.page=Math.max(0,Math.min(9,p));lessonState[pKey(lessonSession.grade,lessonSession.id,lessonSession.ui,lessonSession.li)]={page:lessonSession.page};save();pageAnswers={};renderLessonPage();lessonPlayer.scrollTo({top:0,behavior:'smooth'});}
function tone(g){return g<=2?'simple':g<=5?'elementary':g<=8?'middle':g<=12?'high':'college';}
function explain(x,page){
  const lvl=tone(x.grade),topic=x.title;
  if(page===0)return {title:topic,lead:lvl==='simple'?'Learn this idea in small steps.':lvl==='college'?'Study the principle, context, and purpose of this topic.':'Learn the key concept and connect it to what you already know.',cards:[['What it is','This lesson focuses on '+topic+'.'],['Why it matters','It builds an important skill in '+x.book.name+'.'],['Goal','Understand the idea and use it correctly.']]};
  if(page===1)return {title:'Key ideas: '+topic,lead:'Focus on the most important ideas.',cards:[['Idea 1','Identify the main rule, fact, or process.'],['Idea 2','Work through it one step at a time.'],['Idea 3','Use the idea in a new situation.']]};
  return {title:'Remember and try',lead:'Get ready for the worked example.',cards:[['Remember','Say one important fact about '+topic+'.'],['Try','Create a small example of '+topic+'.'],['Check','Explain how it connects to '+x.unit.title+'.']]};
}
function example(x){
  const s=x.book.id,g=x.grade;
  if(s==='math'){if(g<=2)return ['Small-number example','Start with 4.','Add 3.','Count to 7.'];if(g<=5)return ['Number problem','Read carefully.','Choose an operation.','Solve and check.'];if(g<=8)return ['Equation example','Write what you know.','Choose a rule.','Solve and verify.'];return ['Advanced math example','Model the problem.','Apply a method.','Interpret the result.'];}
  const map={science:['Observe','Collect evidence','Explain'],english:['Read','Identify the language skill','Apply it'],arabic:['Read','Identify the language feature','Use it'],islamic:['Learn the idea','Connect it to a value or rule','Apply it respectfully'],'computer-science':['Define the task','Follow the computing steps','Check the output'],art:['Study an example','Choose elements and tools','Create and reflect'],sports:['Review safe technique','Practice','Evaluate'],geography:['Study a map or place','Find the pattern','Explain the relationship'],history:['Identify time and place','Study evidence','Explain change or cause'],programming:['Read the problem','Build the logic','Test and debug'],physics:['List known values','Choose the principle','Solve with units'],chemistry:['Identify substances','Apply the rule or equation','Check the result']};
  return ['Worked example: '+x.title,...(map[s]||['Understand','Apply','Check'])];
}
function rot(c,a,b,seed){const x=[c,a,b],n=seed%3;return x.slice(n).concat(x.slice(0,n));}
function q(prompt,c,a,b,seed){return {prompt,correct:c,options:rot(c,a,b,seed)};}
function makeQ(x,seed){
  if(x.book.id==='math'){
    if(x.grade<=2){const a=1+seed%9,b=1+(seed*3)%8,n=a+b;return q(a+' + '+b+' = ?',String(n),String(n+1),String(Math.max(0,n-1)),seed);}
    if(x.grade<=5){const a=20+seed%80,b=2+seed%18,n=a-b;return q(a+' − '+b+' = ?',String(n),String(n+1),String(n-1),seed);}
    if(x.grade<=8){const n=2+seed%8,k=3+seed%9;return q('Solve x + '+k+' = '+(n+k),String(n),String(n+1),String(n-1),seed);}
    const n=1+seed%5,m=2+seed%5,c=1+seed%4,y=m*n+c;return q('For y = '+m+'x + '+c+', find y when x = '+n,String(y),String(y+m),String(y-c),seed);
  }
  const bank=[
    ['Which topic are you studying?',x.title,x.unit.title,'A different topic'],
    ['Which unit contains this lesson?',x.unit.title,x.title,'Notebook'],
    ['Which book are you studying?',x.book.name,'Dashboard','A different book'],
    ['What helps you learn this topic?','Practice and check','Guess only','Skip examples'],
    ['What should you do after a mistake?','Review and try again','Stop','Choose randomly'],
    ['What is the goal of the worked example?','Show how the idea is used','Hide the method','Change the subject'],
    ['Which action supports learning?','Careful thinking','Random clicking','Skipping'],
    ['What comes before question pages?','Explanation and example','Nothing','Dashboard'],
    ['A good way to check understanding is to…','Explain it in your own words','Ignore it','Skip it'],
    ['Which lesson are you in?',x.title,x.book.name,x.unit.title]
  ];
  const z=bank[seed%bank.length];return q(z[0],z[1],z[2],z[3],seed);
}
function pageQuestions(x,page){const base=x.grade*1000+lessonSession.ui*200+lessonSession.li*50+(page-4)*10;return Array.from({length:10},(_,i)=>makeQ(x,base+i));}
function addNext(label,disabled=false){const w=document.createElement('div');w.className='page-next-wrap';const b=document.createElement('button');b.id='pageNextBtn';b.className='primary-btn page-next-btn';b.type='button';b.textContent=label;b.disabled=disabled;b.onclick=next;w.appendChild(b);lessonPageContent.appendChild(w);}
function renderLessonPage(){
  const x=info(),p=lessonSession.page;lessonBreadcrumb.textContent=levelName(x.grade)+' · '+x.book.name+' · '+x.unit.title;lessonPlayerTitle.textContent=x.title;lessonPageCounter.textContent='Page '+(p+1)+' of 10';
  lessonProgressDots.innerHTML='';for(let i=0;i<10;i++){const d=document.createElement('i');if(i<p)d.className='done';if(i===p)d.className='active';lessonProgressDots.appendChild(d);}
  lessonBackBtn.disabled=p===0;lessonAnswerStatus.textContent='';
  if(p<=2){const e=explain(x,p);lessonPageContent.innerHTML='<span class="lesson-type">EXPLANATION '+(p+1)+' OF 3</span><h1>'+e.title+'</h1><p class="page-lead">'+e.lead+'</p><div class="explanation-grid">'+e.cards.map(c=>'<article class="explain-card"><span>LEARN</span><h3>'+c[0]+'</h3><p>'+c[1]+'</p></article>').join('')+'</div>';lessonNextBtn.disabled=false;lessonNextBtn.textContent='Next →';addNext('Next page →');return;}
  if(p===3){const e=example(x);lessonPageContent.innerHTML='<span class="lesson-type">WORKED EXAMPLE</span><h1>'+x.title+'</h1><p class="page-lead">Study one example before the questions.</p><article class="worked-example"><small>EXAMPLE</small><h3>'+e[0]+'</h3><div class="example-steps">'+e.slice(1).map((s,i)=>'<div><strong>Step '+(i+1)+':</strong> '+s+'</div>').join('')+'</div></article>';lessonNextBtn.disabled=false;lessonNextBtn.textContent='Start questions →';addNext('Start questions →');return;}
  renderQPage(x,p);
}
function renderQPage(x,p){
  pageAnswers={};const qs=pageQuestions(x,p);lessonPageContent.innerHTML='<div class="question-page-head"><div><span class="lesson-type">QUESTIONS · PAGE '+(p-3)+' OF 6</span><h1>'+x.title+'</h1></div><span id="questionScore" class="question-score">0 / 10 answered</span></div><p class="page-lead">Answer all 10 questions to continue.</p><div id="questionList" class="question-list"></div>';
  const list=document.getElementById('questionList');qs.forEach((z,i)=>{const card=document.createElement('article');card.className='question-card';card.innerHTML='<div class="question-title"><span class="question-number">'+(i+1)+'</span><strong>'+z.prompt+'</strong></div><div class="answer-options"></div><div class="question-feedback"></div>';const opts=card.querySelector('.answer-options'),fb=card.querySelector('.question-feedback');
    z.options.forEach(o=>{const b=document.createElement('button');b.type='button';b.textContent=o;b.onclick=()=>{if(pageAnswers[i])return;const ok=o===z.correct;pageAnswers[i]={correct:ok};card.classList.add(ok?'correct':'wrong');fb.textContent=ok?'Correct!':'Correct answer: '+z.correct;[...opts.children].forEach(x=>{x.disabled=true;if(x.textContent===z.correct)x.classList.add('correct-answer');else if(x===b&&!ok)x.classList.add('wrong-answer');});gate();};opts.appendChild(b);});list.appendChild(card);});
  lessonNextBtn.disabled=true;lessonNextBtn.textContent=p===9?'Finish lesson ✓':'Next page →';addNext(p===9?'Finish lesson ✓':'Next page →',true);gate();
}
function gate(){const a=Object.keys(pageAnswers).length,c=Object.values(pageAnswers).filter(x=>x.correct).length,s=document.getElementById('questionScore');if(s)s.textContent=a+' / 10 answered · '+c+' correct';lessonAnswerStatus.textContent=a<10?'Answer '+(10-a)+' more':c+'/10 correct';lessonNextBtn.disabled=a<10;const b=document.getElementById('pageNextBtn');if(b)b.disabled=a<10;}
function next(){if(!lessonSession)return;if(lessonSession.page===9){finish();return;}setPage(lessonSession.page+1);}
function finish(){const x=info();progress[pKey(x.grade,x.book.id,lessonSession.ui,lessonSession.li)]=true;lessonState[pKey(x.grade,x.book.id,lessonSession.ui,lessonSession.li)]={page:9,completed:true};save();markActivity();lessonPlayer.hidden=true;document.body.style.overflow='';const id=x.book.id;activeGrade=x.grade;activeSubjects=curriculum(x.grade);lessonSession=null;renderBooks();renderDashboard();openBook(id);}
function leave(){const x=info();lessonPlayer.hidden=true;document.body.style.overflow='';lessonSession=null;activeGrade=x.grade;activeSubjects=curriculum(x.grade);openBook(x.book.id);}
function streak(){let a=[];try{a=JSON.parse(localStorage.getItem(ACTIVITY_KEY)||'[]')}catch(_){};return a.length?1:0;}
function renderDashboard(){
  const keys=Object.keys(progress).filter(k=>progress[k]);completedCount.textContent=keys.length;const books=new Set(keys.map(k=>k.split(':').slice(0,2).join(':')));startedCount.textContent=books.size;streakCount.textContent=streak()+' day'+(streak()===1?'':'s');continueGrid.innerHTML='';
  if(!books.size){continueGrid.innerHTML='<div class="empty-state">Start a lesson and it will appear here.</div>';return;}
  [...books].slice(0,12).forEach(k=>{const [g,id]=k.split(':'),grade=Number(g),book=curriculum(grade).find(x=>x.id===id);if(!book)return;let d=0;book.units.forEach((u,ui)=>u.lessons.forEach((_,li)=>{if(complete(grade,id,ui,li))d++;}));const c=document.createElement('article');c.className='continue-card';c.innerHTML='<h3>'+book.icon+' '+levelName(grade)+' · '+book.name+'</h3><p>'+d+' of 25 lessons completed</p><div class="progress"><i style="width:'+Math.round(d/25*100)+'%"></i></div>';c.onclick=()=>{showView('learn');selectGrade(grade);openBook(id);};continueGrid.appendChild(c);});
}
function showView(name){const d=name==='dashboard';learnView.classList.toggle('active',!d);dashboardView.classList.toggle('active',d);navLinks.forEach(x=>x.classList.toggle('active',x.dataset.view===name));if(d)renderDashboard();window.scrollTo({top:0,behavior:'smooth'});}

renderGradeGrid();renderDashboard();
subjectSearch.oninput=renderBooks;backToGradesBtn.onclick=showGradeHome;homeBtn.onclick=()=>{showView('learn');showGradeHome();};navLinks.forEach(x=>x.onclick=()=>showView(x.dataset.view));modal.onclick=e=>{if(e.target.matches('[data-close-modal]'))closeBook();};lessonBackBtn.onclick=()=>{if(lessonSession&&lessonSession.page>0)setPage(lessonSession.page-1);};lessonNextBtn.onclick=next;closeLessonBtn.onclick=leave;

/* Notebook */
const NOTEBOOK_TOTAL_PAGES=10000,NOTEBOOK_PAGE_HEIGHT=940,NOTEBOOK_PAGE_KEY='vertexLearningNotebookPageV1:';
const notebookBtn=document.getElementById('notebookBtn'),notebook=document.getElementById('notebook'),closeNotebookBtn=document.getElementById('closeNotebookBtn'),notebookScroller=document.getElementById('notebookScroller'),notebookVirtualSpace=document.getElementById('notebookVirtualSpace'),notebookCurrentPage=document.getElementById('notebookCurrentPage'),notebookPageInput=document.getElementById('notebookPageInput'),notebookGoBtn=document.getElementById('notebookGoBtn');
let notebookOpen=false,timers={};
function pageKey(p){return NOTEBOOK_PAGE_KEY+p;}function getText(p){return localStorage.getItem(pageKey(p))||'';}function saveText(p,v){localStorage.setItem(pageKey(p),v);}
function makePage(p){const w=document.createElement('section');w.className='notebook-page';w.dataset.page=p;w.style.top=((p-1)*NOTEBOOK_PAGE_HEIGHT+20)+'px';const n=document.createElement('div');n.className='notebook-page-number';n.textContent='Page '+p;const t=document.createElement('textarea');t.className='notebook-page-text';t.placeholder='Write your notes here...';t.value=getText(p);t.oninput=()=>{clearTimeout(timers[p]);timers[p]=setTimeout(()=>saveText(p,t.value),180);};t.onblur=()=>saveText(p,t.value);w.append(n,t);return w;}
function renderNotebook(){if(!notebookOpen)return;const top=notebookScroller.scrollTop,h=notebookScroller.clientHeight||innerHeight,first=Math.max(1,Math.floor(top/NOTEBOOK_PAGE_HEIGHT)-2),last=Math.min(NOTEBOOK_TOTAL_PAGES,Math.ceil((top+h)/NOTEBOOK_PAGE_HEIGHT)+2),keep=new Set();for(let p=first;p<=last;p++){keep.add(String(p));if(!notebookVirtualSpace.querySelector('[data-page="'+p+'"]'))notebookVirtualSpace.appendChild(makePage(p));}[...notebookVirtualSpace.querySelectorAll('.notebook-page')].forEach(el=>{if(!keep.has(el.dataset.page)){const t=el.querySelector('textarea');saveText(Number(el.dataset.page),t.value);el.remove();}});const cur=Math.min(NOTEBOOK_TOTAL_PAGES,Math.max(1,Math.floor((top+NOTEBOOK_PAGE_HEIGHT*.42)/NOTEBOOK_PAGE_HEIGHT)+1));notebookCurrentPage.textContent='Page '+cur.toLocaleString()+' of 10,000';notebookPageInput.value=cur;}
function openNotebook(){notebookOpen=true;notebook.hidden=false;document.body.style.overflow='hidden';notebookVirtualSpace.style.height=(NOTEBOOK_TOTAL_PAGES*NOTEBOOK_PAGE_HEIGHT+40)+'px';renderNotebook();}
function closeNotebook(){notebookOpen=false;notebook.hidden=true;document.body.style.overflow='';}
function jumpNotebook(){const p=Math.max(1,Math.min(10000,Math.round(Number(notebookPageInput.value)||1)));notebookScroller.scrollTop=(p-1)*NOTEBOOK_PAGE_HEIGHT;renderNotebook();}
notebookBtn.onclick=openNotebook;closeNotebookBtn.onclick=closeNotebook;notebookGoBtn.onclick=jumpNotebook;notebookPageInput.onkeydown=e=>{if(e.key==='Enter')jumpNotebook();};notebookScroller.addEventListener('scroll',renderNotebook,{passive:true});
