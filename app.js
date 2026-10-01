const LEVELS=[...Array.from({length:12},(_,i)=>({grade:i+1,name:'الصف '+(i+1),badge:String(i+1)})),{grade:13,name:'الجامعة',badge:'ج'}];

const META={
math:['الرياضيات','➗','الأعداد والجبر والهندسة والبيانات وحل المشكلات.'],
science:['العلوم','🔬','الحياة والأرض والمادة والطاقة والاستقصاء والتفكير العلمي.'],
english:['اللغة الإنجليزية','🔤','القراءة والكتابة والمفردات والقواعد والتواصل.'],
arabic:['اللغة العربية','📖','القراءة والكتابة والقواعد والمفردات والتعبير.'],
islamic:['الدراسات الإسلامية','☪️','العقيدة والعبادات والقرآن والآداب والقيم الإسلامية.'],
'computer-science':['علوم الحاسب','💻','الحاسب والأدوات الرقمية والبيانات والخوارزميات والتقنية.'],
art:['الفنون','🎨','الرسم والألوان والتصميم والوسائط والإبداع.'],
sports:['الرياضة والنشاط','⚽','الحركة واللياقة والتوافق والعمل الجماعي والصحة.'],
geography:['الجغرافيا','🌍','الخرائط والأماكن والبيئات والمناطق والعالم.'],
history:['التاريخ','🏛️','الشعوب والحضارات والأحداث والتفكير التاريخي.'],
programming:['البرمجة','</>','البرمجة والمنطق والبرمجيات والمشروعات.'],
physics:['الفيزياء','⚛️','الحركة والقوى والطاقة والموجات والكهرباء.'],
chemistry:['الكيمياء','🧪','المادة والذرات والروابط والتفاعلات والأنظمة الكيميائية.']
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
lower:['الأعداد والعد','الجمع والطرح','القيمة المنزلية','الأشكال والقياس','الوقت والنقود والبيانات'],
elementary:['الأعداد الكلية','الكسور والأعداد العشرية','العمليات الحسابية','الهندسة والقياس','البيانات والأنماط'],
middle:['أنظمة الأعداد','النسب والتناسب','العبارات والمعادلات','الهندسة','الإحصاء والاحتمالات'],
high:['الجبر','الدوال','الهندسة وحساب المثلثات','الإحصاء والاحتمالات','النمذجة'],
college:['الجبر الجامعي','الدوال والنمذجة','أساسيات التفاضل والتكامل','الإحصاء','التطبيقات الكمية']},
science:{
lower:['الكائنات الحية','النباتات والحيوانات','الجسم والصحة','الأرض والطقس','المواد والقوى'],
elementary:['علوم الحياة','أنظمة الأرض','المادة','الطاقة والقوى','الاستقصاء العلمي'],
middle:['الخلايا والكائنات','الأرض والفضاء','المادة والتفاعلات','القوى والطاقة','البحث العلمي'],
high:['الأحياء','الأرض والبيئة','العلوم الفيزيائية','أنظمة الطاقة','البحث والمهارات المخبرية'],
college:['التفكير العلمي','أنظمة الحياة والأرض','المادة والطاقة','تصميم التجارب','العلم والمجتمع']},
english:{
lower:['الأصوات والحروف','مهارات الكلمات','المفردات','القواعد والقراءة','الكتابة'],
elementary:['القراءة','المفردات','القواعد','الكتابة','التحدث والأدب'],
middle:['الأدب','القراءة المعلوماتية','القواعد واللغة','التعبير الكتابي','البحث والعرض'],
high:['التحليل الأدبي','البلاغة والحجاج','القواعد المتقدمة','الكتابة الأكاديمية','البحث والإعلام'],
college:['القراءة الأكاديمية','الكتابة النقدية','البلاغة','الكتابة البحثية','التواصل المهني']},
arabic:{
lower:['الحروف والأصوات','قراءة الكلمات','المفردات','الجمل','الكتابة'],
elementary:['القراءة','المفردات','القواعد','الكتابة','التحدث والأدب'],
middle:['الفهم القرائي','النحو','الصرف','التعبير','الأدب'],
high:['القراءة المتقدمة','النحو والتركيب','البلاغة','الكتابة والتحليل','الأدب'],
college:['العربية الأكاديمية','النحو والصرف','البلاغة والأسلوب','الكتابة البحثية','التحليل الأدبي']},
islamic:{
lower:['الإيمان','العبادات','حسن الخلق','القرآن','الأذكار اليومية'],
elementary:['العقيدة','الفقه','السيرة','القرآن والحديث','الأخلاق'],
middle:['الإيمان','العبادات والفقه','السيرة والتاريخ','القرآن والحديث','الأخلاق'],
high:['العقيدة','الفقه والحياة المعاصرة','علوم القرآن','الحديث والسيرة','الأخلاق والمجتمع'],
college:['الفكر الإسلامي','دراسات الفقه','دراسات القرآن','دراسات الحديث','الأخلاق والحضارة']},
'computer-science':{
lower:['أساسيات الحاسب','استخدام الأجهزة','الإبداع الرقمي','الخوارزميات','السلامة الرقمية'],
elementary:['أنظمة الحاسب','المستندات والوسائط','الخوارزميات','البيانات','المواطنة الرقمية'],
middle:['أنظمة الحاسب','الخوارزميات والمنطق','البيانات والشبكات','الإنتاج الرقمي','الأمن السيبراني'],
high:['أنظمة الحوسبة','الخوارزميات','علم البيانات','الشبكات والأمن السيبراني','مشروعات التقنية'],
college:['معمارية الحاسب','الخوارزميات وهياكل البيانات','قواعد البيانات','الشبكات والأمن','أنظمة البرمجيات']},
art:{
lower:['الخطوط والأشكال','الألوان','الملمس والنمط','الرسم','مشروعات إبداعية'],
elementary:['الرسم','الألوان والتلوين','التصميم','النحت والوسائط','مشروعات فنية'],
middle:['الرسم والملاحظة','التلوين والألوان','التصميم والتكوين','الفن ثلاثي الأبعاد والرقمي','تاريخ الفن وملف الإنجاز'],
high:['الرسم الاستوديوي','التلوين والوسائط','التصميم الجرافيكي','تاريخ الفن والنقد','ملف الإنجاز'],
college:['الممارسة الفنية','التصميم البصري','الوسائط الرقمية','نظرية الفن وتاريخه','ملف الإنجاز المهني']},
sports:{
lower:['أساسيات الحركة','التوازن','الرمي والاستقبال','القفز والتوافق','العمل الجماعي والصحة'],
elementary:['اللياقة','مهارات الحركة','الألعاب','الرياضات الجماعية','الصحة والسلامة'],
middle:['تدريب اللياقة','تطوير المهارات','الرياضات الجماعية','الرياضات الفردية','الصحة والأداء'],
high:['اللياقة والإعداد البدني','المهارات الرياضية','استراتيجيات الفريق','العافية','تخطيط الأداء'],
college:['علوم اللياقة','طرائق التدريب','الأداء الرياضي','الصحة والعافية','القيادة والتدريب']},
geography:{
lower:['أماكني','الخرائط','الاتجاهات','اليابسة والماء والطقس','عالمنا'],
elementary:['مهارات الخرائط','الجغرافيا الطبيعية','الجغرافيا البشرية','المناطق والثقافات','البيئة'],
middle:['المهارات الجغرافية المكانية','الأنظمة الطبيعية','السكان والمدن','مناطق العالم','تفاعل الإنسان والبيئة'],
high:['الجغرافيا الطبيعية','الجغرافيا البشرية','الجغرافيا الاقتصادية','الجغرافيا السياسية والمناطق','نظم المعلومات الجغرافية والبحث'],
college:['الفكر الجغرافي','نظم المعلومات والتحليل المكاني','الأنظمة الطبيعية','الأنظمة البشرية','البحث الجغرافي']},
history:{
elementary:['فهم الماضي','المجتمعات الأولى','الحضارات القديمة','شخصيات مهمة','التغير عبر الزمن'],
middle:['العوالم القديمة','العصور الوسطى','بدايات العصر الحديث','التاريخ الحديث','المصادر التاريخية'],
high:['تاريخ العالم','التاريخ الإقليمي','التحولات الحديثة','الصراع والمجتمع','البحث التاريخي'],
college:['علم كتابة التاريخ','دراسات القديم والوسيط','التاريخ الحديث','التاريخ العالمي','البحث التاريخي']},
programming:{
elementary:['منطق البرمجة','التسلسل','المتغيرات','الشروط','الحلقات والمشروعات'],
middle:['أساسيات البرمجة','المتغيرات والبيانات','التحكم في التدفق','الدوال','المشروعات'],
high:['مبادئ البرمجة','هياكل البيانات','الخوارزميات','البرمجة كائنية التوجه','مشروعات البرمجيات'],
college:['أنماط البرمجة','هياكل البيانات','الخوارزميات','هندسة البرمجيات','مشروع التخرج']},
physics:{high:['الحركة','القوى','الطاقة','الموجات','الكهرباء والفيزياء الحديثة'],college:['الميكانيكا','الموجات والاهتزازات','الكهرباء والمغناطيسية','الحرارة والفيزياء الحديثة','الفيزياء التجريبية']},
chemistry:{high:['المادة والذرات','الاتجاهات الدورية','الروابط','التفاعلات الكيميائية','الكيمياء الكمية'],college:['التركيب الذري','الروابط الكيميائية','الكيمياء الحرارية والحركية','الاتزان والأحماض','الكيمياء المخبرية']}
};

function unitsFor(id,g){
  const map=UNITS[id]||{};
  return map[stage(g)]||map.high||map.elementary||map.lower||['الأساسيات','المهارات الأساسية','التطبيقات','المشروعات','المراجعة'];
}
function lessonsFor(unit,g){
  const s=stage(g);
  const p=s==='lower'
    ?['تعرّف على ','تدرّب على ','استخدم ','جرّب ','مراجعة ']
    :s==='elementary'
      ?['مقدمة في ','المهارات الأساسية: ','تدريب: ','تطبيق: ','مراجعة: ']
      :s==='middle'
        ?['أساسيات ','الأفكار الرئيسة: ','المهارات والتدريب: ','التطبيقات: ','التحدي والمراجعة: ']
        :s==='high'
          ?['مفاهيم ','طرائق ','حل المشكلات: ','التطبيق والتحليل: ','مراجعة التقويم: ']
          :['مبادئ ','مفاهيم متقدمة: ','الطرائق والتحليل: ','التطبيق ودراسة الحالة: ','التركيب والمراجعة: '];
  return p.map(x=>x+unit);
}
function curriculum(g){
  return subjectIdsForGrade(g).map(id=>{
    const [name,icon,description]=META[id];
    return {id,name,icon,description:levelName(g)+' · '+description,units:unitsFor(id,g).map(u=>({title:u,lessons:lessonsFor(u,g)}))};
  });
}
function levelName(g){return g===13?'الجامعة':'الصف '+g;}

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
    b.innerHTML='<span class="grade-card-badge">'+l.badge+'</span><span class="grade-card-copy"><strong>'+l.name+'</strong><small>'+n+' كتب · '+(n*25)+' درسًا</small></span><span class="grade-card-arrow">→</span>';
    b.onclick=()=>selectGrade(l.grade);gradeGrid.appendChild(b);
  });
}
function selectGrade(g){
  activeGrade=g;activeSubjects=curriculum(g);gradeHome.hidden=true;booksView.hidden=false;subjectSearch.value='';
  currentGradeTitle.textContent=levelName(g);currentGradeBadge.textContent=g===13?'ج':g;
  currentGradeSummary.textContent=activeSubjects.length+' كتابًا · 5 وحدات لكل كتاب · 25 درسًا لكل كتاب';
  booksHeading.textContent='كتب '+levelName(g);renderBooks();window.scrollTo({top:0,behavior:'smooth'});
}
function showGradeHome(){activeGrade=null;activeSubjects=[];booksView.hidden=true;gradeHome.hidden=false;window.scrollTo({top:0,behavior:'smooth'});}
function bookDone(book){let n=0;book.units.forEach((u,ui)=>u.lessons.forEach((_,li)=>{if(complete(activeGrade,book.id,ui,li))n++;}));return n;}
function renderBooks(){
  const q=subjectSearch.value.toLowerCase().trim(),arr=activeSubjects.filter(b=>!q||b.name.toLowerCase().includes(q));
  subjectCount.textContent=arr.length+' كتب · '+(arr.length*25)+' درسًا';subjectGrid.innerHTML='';
  arr.forEach(book=>{
    const d=bookDone(book),b=document.createElement('button');b.className='subject-card';b.type='button';
    b.innerHTML='<span class="subject-age">'+levelName(activeGrade)+'</span><span class="subject-icon">'+book.icon+'</span><h3>'+book.name+'</h3><p>'+book.description+'</p><div class="subject-footer"><span>5 وحدات · 25 درسًا</span><span>'+Math.round(d/25*100)+'% مكتمل</span></div>';
    b.onclick=()=>openBook(book.id);subjectGrid.appendChild(b);
  });
}
function openBook(id){
  const book=activeSubjects.find(x=>x.id===id);if(!book)return;activeSubjectId=id;const d=bookDone(book);
  modalIcon.textContent=book.icon;modalAge.textContent='VERTEX LEARNING · '+levelName(activeGrade);modalTitle.textContent=book.name;modalDescription.textContent=book.description;
  subjectSummary.innerHTML='<span>5 وحدات</span><span>25 درسًا</span><span>'+d+' مكتمل</span>';renderUnits(book);modal.hidden=false;document.body.style.overflow='hidden';
}
function closeBook(){modal.hidden=true;document.body.style.overflow='';activeSubjectId=null;}
function renderUnits(book){
  lessonList.innerHTML='';
  book.units.forEach((u,ui)=>{
    let done=0;u.lessons.forEach((_,li)=>{if(complete(activeGrade,book.id,ui,li))done++;});
    const card=document.createElement('section');card.className='unit-card'+(ui===0?' open':'');
    const head=document.createElement('button');head.type='button';head.className='unit-head';
    head.innerHTML='<span class="unit-head-left"><span class="unit-number">'+(ui+1)+'</span><span><strong>'+u.title+'</strong><small>5 دروس</small></span></span><span class="unit-progress">'+done+'/5 مكتمل</span>';
    const list=document.createElement('div');list.className='unit-lessons';
    u.lessons.forEach((title,li)=>{
      const done=complete(activeGrade,book.id,ui,li),state=lessonState[pKey(activeGrade,book.id,ui,li)]||{},row=document.createElement('div');row.className='unit-lesson'+(done?' completed':'');
      row.innerHTML='<span class="unit-lesson-number">'+(li+1)+'</span><div><strong>'+title+'</strong><small>10 صفحات · 3 شروحات · مثال واحد · 60 سؤالًا</small></div><button type="button">'+(done?'مراجعة الدرس':Number(state.page)>0?'متابعة':'ابدأ الدرس')+'</button>';
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
  if(page===0)return {title:topic,lead:lvl==='simple'?'تعلّم الفكرة بخطوات صغيرة.':lvl==='college'?'ادرس المبدأ والسياق والهدف من هذا الموضوع.':'تعلّم المفهوم الرئيس واربطه بما تعرفه مسبقًا.',cards:[['ما هو؟','يركز هذا الدرس على '+topic+'.'],['لماذا هو مهم؟','يبني مهارة مهمة في مادة '+x.book.name+'.'],['الهدف','افهم الفكرة واستخدمها بطريقة صحيحة.']]};
  if(page===1)return {title:'الأفكار الرئيسة: '+topic,lead:'ركّز على أهم الأفكار.',cards:[['الفكرة 1','حدّد القاعدة أو الحقيقة أو العملية الرئيسة.'],['الفكرة 2','اعمل خطوة بخطوة.'],['الفكرة 3','استخدم الفكرة في موقف جديد.']]};
  return {title:'تذكّر وجرّب',lead:'استعد للمثال المحلول.',cards:[['تذكّر','اذكر حقيقة مهمة عن '+topic+'.'],['جرّب','أنشئ مثالًا بسيطًا عن '+topic+'.'],['تحقق','اشرح كيف يرتبط بوحدة '+x.unit.title+'.']]};
}
function example(x){
  const s=x.book.id,g=x.grade;
  if(s==='math'){if(g<=2)return ['مثال بأعداد صغيرة','ابدأ بالعدد 4.','أضف 3.','عدّ حتى 7.'];if(g<=5)return ['مسألة عددية','اقرأ بعناية.','اختر العملية المناسبة.','حل ثم تحقق.'];if(g<=8)return ['مثال على معادلة','اكتب المعطيات.','اختر القاعدة.','حل وتحقق.'];return ['مثال رياضي متقدم','نمذج المسألة.','طبّق الطريقة.','فسّر النتيجة.'];}
  const map={science:['لاحظ','اجمع الأدلة','فسّر'],english:['اقرأ','حدّد المهارة اللغوية','طبّقها'],arabic:['اقرأ','حدّد الظاهرة اللغوية','استخدمها'],islamic:['تعلّم الفكرة','اربطها بقيمة أو حكم','طبّقها باحترام'],'computer-science':['حدّد المهمة','اتبع خطوات الحوسبة','تحقق من الناتج'],art:['ادرس مثالًا','اختر العناصر والأدوات','أنشئ ثم قيّم'],sports:['راجع الطريقة الآمنة','تدرّب','قيّم'],geography:['ادرس خريطة أو مكانًا','اكتشف النمط','فسّر العلاقة'],history:['حدّد الزمان والمكان','ادرس الأدلة','فسّر التغير أو السبب'],programming:['اقرأ المشكلة','ابنِ المنطق','اختبر وأصلح الأخطاء'],physics:['اكتب القيم المعروفة','اختر المبدأ','حل مع الوحدات'],chemistry:['حدّد المواد','طبّق القاعدة أو المعادلة','تحقق من النتيجة']};
  return ['مثال محلول: '+x.title,...(map[s]||['افهم','طبّق','تحقق'])];
}
function rot(c,a,b,seed){const x=[c,a,b],n=seed%3;return x.slice(n).concat(x.slice(0,n));}
function q(prompt,c,a,b,seed){return {prompt,correct:c,options:rot(c,a,b,seed)};}
function makeQ(x,seed){
  if(x.book.id==='math'){
    if(x.grade<=2){const a=1+seed%9,b=1+(seed*3)%8,n=a+b;return q(a+' + '+b+' = ؟',String(n),String(n+1),String(Math.max(0,n-1)),seed);}
    if(x.grade<=5){const a=20+seed%80,b=2+seed%18,n=a-b;return q(a+' − '+b+' = ؟',String(n),String(n+1),String(n-1),seed);}
    if(x.grade<=8){const n=2+seed%8,k=3+seed%9;return q('حل: س + '+k+' = '+(n+k),String(n),String(n+1),String(n-1),seed);}
    const n=1+seed%5,m=2+seed%5,c=1+seed%4,y=m*n+c;return q('إذا كانت ص = '+m+'س + '+c+'، أوجد ص عندما س = '+n,String(y),String(y+m),String(y-c),seed);
  }
  const bank=[
    ['ما الموضوع الذي تدرسه؟',x.title,x.unit.title,'موضوع مختلف'],
    ['في أي وحدة يوجد هذا الدرس؟',x.unit.title,x.title,'الدفتر'],
    ['ما المادة التي تدرسها؟',x.book.name,'لوحة التقدم','مادة مختلفة'],
    ['ما الذي يساعدك على تعلّم هذا الموضوع؟','التدرب والتحقق','التخمين فقط','تجاوز الأمثلة'],
    ['ماذا تفعل بعد الخطأ؟','أراجع وأحاول مرة أخرى','أتوقف','أختار عشوائيًا'],
    ['ما هدف المثال المحلول؟','إظهار كيفية استخدام الفكرة','إخفاء الطريقة','تغيير الموضوع'],
    ['أي تصرف يدعم التعلّم؟','التفكير بعناية','النقر العشوائي','التجاوز'],
    ['ماذا يأتي قبل صفحات الأسئلة؟','الشرح والمثال','لا شيء','لوحة التقدم'],
    ['طريقة جيدة للتحقق من الفهم هي…','شرح الفكرة بكلماتك','تجاهلها','تجاوزها'],
    ['ما الدرس الذي أنت فيه؟',x.title,x.book.name,x.unit.title]
  ];
  const z=bank[seed%bank.length];return q(z[0],z[1],z[2],z[3],seed);
}
function pageQuestions(x,page){const base=x.grade*1000+lessonSession.ui*200+lessonSession.li*50+(page-4)*10;return Array.from({length:10},(_,i)=>makeQ(x,base+i));}
function addNext(label,disabled=false){const w=document.createElement('div');w.className='page-next-wrap';const b=document.createElement('button');b.id='pageNextBtn';b.className='primary-btn page-next-btn';b.type='button';b.textContent=label;b.disabled=disabled;b.onclick=next;w.appendChild(b);lessonPageContent.appendChild(w);}
function renderLessonPage(){
  const x=info(),p=lessonSession.page;lessonBreadcrumb.textContent=levelName(x.grade)+' · '+x.book.name+' · '+x.unit.title;lessonPlayerTitle.textContent=x.title;lessonPageCounter.textContent='الصفحة '+(p+1)+' من 10';
  lessonProgressDots.innerHTML='';for(let i=0;i<10;i++){const d=document.createElement('i');if(i<p)d.className='done';if(i===p)d.className='active';lessonProgressDots.appendChild(d);}
  lessonBackBtn.disabled=p===0;lessonAnswerStatus.textContent='';
  if(p<=2){const e=explain(x,p);lessonPageContent.innerHTML='<span class="lesson-type">شرح '+(p+1)+' من 3</span><h1>'+e.title+'</h1><p class="page-lead">'+e.lead+'</p><div class="explanation-grid">'+e.cards.map(c=>'<article class="explain-card"><span>تعلّم</span><h3>'+c[0]+'</h3><p>'+c[1]+'</p></article>').join('')+'</div>';lessonNextBtn.disabled=false;lessonNextBtn.textContent='← التالي';addNext('← الصفحة التالية');return;}
  if(p===3){const e=example(x);lessonPageContent.innerHTML='<span class="lesson-type">مثال محلول</span><h1>'+x.title+'</h1><p class="page-lead">ادرس مثالًا واحدًا قبل البدء بالأسئلة.</p><article class="worked-example"><small>مثال</small><h3>'+e[0]+'</h3><div class="example-steps">'+e.slice(1).map((s,i)=>'<div><strong>الخطوة '+(i+1)+':</strong> '+s+'</div>').join('')+'</div></article>';lessonNextBtn.disabled=false;lessonNextBtn.textContent='← ابدأ الأسئلة';addNext('← ابدأ الأسئلة');return;}
  renderQPage(x,p);
}
function renderQPage(x,p){
  pageAnswers={};const qs=pageQuestions(x,p);lessonPageContent.innerHTML='<div class="question-page-head"><div><span class="lesson-type">أسئلة · الصفحة '+(p-3)+' من 6</span><h1>'+x.title+'</h1></div><span id="questionScore" class="question-score">0 / 10 مجاب</span></div><p class="page-lead">أجب عن الأسئلة العشرة للمتابعة.</p><div id="questionList" class="question-list"></div>';
  const list=document.getElementById('questionList');qs.forEach((z,i)=>{const card=document.createElement('article');card.className='question-card';card.innerHTML='<div class="question-title"><span class="question-number">'+(i+1)+'</span><strong>'+z.prompt+'</strong></div><div class="answer-options"></div><div class="question-feedback"></div>';const opts=card.querySelector('.answer-options'),fb=card.querySelector('.question-feedback');
    z.options.forEach(o=>{const b=document.createElement('button');b.type='button';b.textContent=o;b.onclick=()=>{if(pageAnswers[i])return;const ok=o===z.correct;pageAnswers[i]={correct:ok};card.classList.add(ok?'correct':'wrong');fb.textContent=ok?'إجابة صحيحة!':'الإجابة الصحيحة: '+z.correct;[...opts.children].forEach(x=>{x.disabled=true;if(x.textContent===z.correct)x.classList.add('correct-answer');else if(x===b&&!ok)x.classList.add('wrong-answer');});gate();};opts.appendChild(b);});list.appendChild(card);});
  lessonNextBtn.disabled=true;lessonNextBtn.textContent=p===9?'إنهاء الدرس ✓':'← الصفحة التالية';addNext(p===9?'إنهاء الدرس ✓':'← الصفحة التالية',true);gate();
}
function gate(){const a=Object.keys(pageAnswers).length,c=Object.values(pageAnswers).filter(x=>x.correct).length,s=document.getElementById('questionScore');if(s)s.textContent=a+' / 10 مجاب · '+c+' صحيح';lessonAnswerStatus.textContent=a<10?'أجب عن '+(10-a)+' أسئلة إضافية':c+'/10 صحيح';lessonNextBtn.disabled=a<10;const b=document.getElementById('pageNextBtn');if(b)b.disabled=a<10;}
function next(){if(!lessonSession)return;if(lessonSession.page===9){finish();return;}setPage(lessonSession.page+1);}
function finish(){const x=info();progress[pKey(x.grade,x.book.id,lessonSession.ui,lessonSession.li)]=true;lessonState[pKey(x.grade,x.book.id,lessonSession.ui,lessonSession.li)]={page:9,completed:true};save();markActivity();lessonPlayer.hidden=true;document.body.style.overflow='';const id=x.book.id;activeGrade=x.grade;activeSubjects=curriculum(x.grade);lessonSession=null;renderBooks();renderDashboard();openBook(id);}
function leave(){const x=info();lessonPlayer.hidden=true;document.body.style.overflow='';lessonSession=null;activeGrade=x.grade;activeSubjects=curriculum(x.grade);openBook(x.book.id);}
function streak(){let a=[];try{a=JSON.parse(localStorage.getItem(ACTIVITY_KEY)||'[]')}catch(_){};return a.length?1:0;}
function renderDashboard(){
  const keys=Object.keys(progress).filter(k=>progress[k]);completedCount.textContent=keys.length;const books=new Set(keys.map(k=>k.split(':').slice(0,2).join(':')));startedCount.textContent=books.size;streakCount.textContent=streak()+' يوم';continueGrid.innerHTML='';
  if(!books.size){continueGrid.innerHTML='<div class="empty-state">ابدأ درسًا وسيظهر هنا.</div>';return;}
  [...books].slice(0,12).forEach(k=>{const [g,id]=k.split(':'),grade=Number(g),book=curriculum(grade).find(x=>x.id===id);if(!book)return;let d=0;book.units.forEach((u,ui)=>u.lessons.forEach((_,li)=>{if(complete(grade,id,ui,li))d++;}));const c=document.createElement('article');c.className='continue-card';c.innerHTML='<h3>'+book.icon+' '+levelName(grade)+' · '+book.name+'</h3><p>'+d+' من 25 درسًا مكتمل</p><div class="progress"><i style="width:'+Math.round(d/25*100)+'%"></i></div>';c.onclick=()=>{showView('learn');selectGrade(grade);openBook(id);};continueGrid.appendChild(c);});
}
function showView(name){const d=name==='dashboard';learnView.classList.toggle('active',!d);dashboardView.classList.toggle('active',d);navLinks.forEach(x=>x.classList.toggle('active',x.dataset.view===name));if(d)renderDashboard();window.scrollTo({top:0,behavior:'smooth'});}

renderGradeGrid();renderDashboard();
subjectSearch.oninput=renderBooks;backToGradesBtn.onclick=showGradeHome;homeBtn.onclick=()=>{showView('learn');showGradeHome();};navLinks.forEach(x=>x.onclick=()=>showView(x.dataset.view));modal.onclick=e=>{if(e.target.matches('[data-close-modal]'))closeBook();};lessonBackBtn.onclick=()=>{if(lessonSession&&lessonSession.page>0)setPage(lessonSession.page-1);};lessonNextBtn.onclick=next;closeLessonBtn.onclick=leave;

/* Notebook */
const NOTEBOOK_TOTAL_PAGES=10000,NOTEBOOK_PAGE_HEIGHT=940,NOTEBOOK_PAGE_KEY='vertexLearningNotebookPageV1:';
const notebookBtn=document.getElementById('notebookBtn'),notebook=document.getElementById('notebook'),closeNotebookBtn=document.getElementById('closeNotebookBtn'),notebookScroller=document.getElementById('notebookScroller'),notebookVirtualSpace=document.getElementById('notebookVirtualSpace'),notebookCurrentPage=document.getElementById('notebookCurrentPage'),notebookPageInput=document.getElementById('notebookPageInput'),notebookGoBtn=document.getElementById('notebookGoBtn');
let notebookOpen=false,timers={};
function pageKey(p){return NOTEBOOK_PAGE_KEY+p;}function getText(p){return localStorage.getItem(pageKey(p))||'';}function saveText(p,v){localStorage.setItem(pageKey(p),v);}
function makePage(p){const w=document.createElement('section');w.className='notebook-page';w.dataset.page=p;w.style.top=((p-1)*NOTEBOOK_PAGE_HEIGHT+20)+'px';const n=document.createElement('div');n.className='notebook-page-number';n.textContent='الصفحة '+p;const t=document.createElement('textarea');t.className='notebook-page-text';t.placeholder='اكتب ملاحظاتك هنا...';t.value=getText(p);t.oninput=()=>{clearTimeout(timers[p]);timers[p]=setTimeout(()=>saveText(p,t.value),180);};t.onblur=()=>saveText(p,t.value);w.append(n,t);return w;}
function renderNotebook(){if(!notebookOpen)return;const top=notebookScroller.scrollTop,h=notebookScroller.clientHeight||innerHeight,first=Math.max(1,Math.floor(top/NOTEBOOK_PAGE_HEIGHT)-2),last=Math.min(NOTEBOOK_TOTAL_PAGES,Math.ceil((top+h)/NOTEBOOK_PAGE_HEIGHT)+2),keep=new Set();for(let p=first;p<=last;p++){keep.add(String(p));if(!notebookVirtualSpace.querySelector('[data-page="'+p+'"]'))notebookVirtualSpace.appendChild(makePage(p));}[...notebookVirtualSpace.querySelectorAll('.notebook-page')].forEach(el=>{if(!keep.has(el.dataset.page)){const t=el.querySelector('textarea');saveText(Number(el.dataset.page),t.value);el.remove();}});const cur=Math.min(NOTEBOOK_TOTAL_PAGES,Math.max(1,Math.floor((top+NOTEBOOK_PAGE_HEIGHT*.42)/NOTEBOOK_PAGE_HEIGHT)+1));notebookCurrentPage.textContent='الصفحة '+cur.toLocaleString()+' من 10,000';notebookPageInput.value=cur;}
function openNotebook(){notebookOpen=true;notebook.hidden=false;document.body.style.overflow='hidden';notebookVirtualSpace.style.height=(NOTEBOOK_TOTAL_PAGES*NOTEBOOK_PAGE_HEIGHT+40)+'px';renderNotebook();}
function closeNotebook(){notebookOpen=false;notebook.hidden=true;document.body.style.overflow='';}
function jumpNotebook(){const p=Math.max(1,Math.min(10000,Math.round(Number(notebookPageInput.value)||1)));notebookScroller.scrollTop=(p-1)*NOTEBOOK_PAGE_HEIGHT;renderNotebook();}
notebookBtn.onclick=openNotebook;closeNotebookBtn.onclick=closeNotebook;notebookGoBtn.onclick=jumpNotebook;notebookPageInput.onkeydown=e=>{if(e.key==='Enter')jumpNotebook();};notebookScroller.addEventListener('scroll',renderNotebook,{passive:true});
