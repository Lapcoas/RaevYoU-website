(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const S={get(k,d){try{return localStorage.getItem(k)??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const TG='https://t.me/RaevYoU';
const I={home:'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',grid:'M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z',star:'m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',chat:'M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',send:'M21 3 3 10.2l6.4 2.4L11.8 20zM9.4 12.6 21 3',
gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
sun:'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',left:'M15 5l-7 7 7 7',right:'M9 5l7 7-7 7',up:'M12 19V5M5 12l7-7 7 7',x:'M6 6l12 12M18 6 6 18',copy:'M8 8h12v12H8zM4 16V4h12',rot:'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
gem:'M6 3h12l4 6-10 12L2 9zM2 9h20M9 3 7 9l5 12 5-12-2-6',shield:'M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6zM8.5 12l2.5 2.5 4.5-5',bank:'M3 10 12 4l9 6M5 10v8M9.7 10v8M14.3 10v8M19 10v8M3 20h18',monitor:'M3 5h18v11H3zM8 20h8M12 16v4',mega:'M3 11v2a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1zM18 9a4 4 0 0 1 0 6',bot:'M5 8h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM12 8V4M8.5 13h.01M15.5 13h.01M9 16.5h6',
users:'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 19v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8',globe:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16v4M17 18h4',type:'M5 7V5h14v2M12 5v14M9 19h6',ext:'M7 17 17 7M8 7h9v9'};
const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${I[n]}"/></svg>`;
$$('[data-ic]').forEach(e=>e.innerHTML=ic(e.dataset.ic));

const E={s1:'countries',s2:'services',s3:'per number',s4:'online',doing:'Working on:',hw:'How it works',a1t:'Write me',a1d:'Telegram @RaevYoU — tell me what you need.',a2t:'We discuss details',a2d:'Volume, price, timing. No surprises.',a3t:'Payment',a3d:'In $, SBP, Crypto, to card or non-custodial wallet.',a4t:'You get the result',a4d:'If you like, check the reviews first.',on:'24/7 online',b1:'Alias · Nickname · Username',l1:'Identity',v1:'Raevsky',l2:'Nickname',l3:'Age',v3:'19 years old',l4:'Username tg',lab:'About me:',
about:'Hello! I\'m Raevsky, a seller and helper in the digital world. Right now I work with crypto and build websites to order. I also run my own bot for buying Telegram Stars, Telegram Premium and NFT rental. I sell physical numbers together with a partner and help with verification of blockchains, TON wallets and more. My services are in the "Services" tab',
wr:'Write me',pay:'I accept payment in $ | SBP | Crypto | to card | to non-custodial wallet |',hs:'Services',hn:'Physical numbers',
sim:'I also sell SIM cards separately. Delivery to your city varies, ask in private or anonymous messages',
t1:'Custom website',d1:'I build a website from your description, from 350₽. The price then depends on complexity and build time. Hosting is paid separately',
t2:'KYC verification',d2:'Verification of TON, wallets and exchanges from 700 rubles. I help you pass verification and we discuss everything in DM',
t3:'Advertising',d3:'1 view 50₽<br>10 views 250₽<br>50 views 700₽<br>150 views 1200₽<br>1 month of ads, 25 posts / videos a day 3400₽<br>3 months of ads, 50 posts / videos 7100₽<br>1 year of ads, 70 posts / videos a day 17 900₽',
rl:'Open the reviews site',ch:'Anonymous chat is temporarily unavailable, please message me privately',cb:'Message on Telegram',
k1:'Partner',k2:'Channel',k3:'Cheap stars',k4:'Reviews',k5:'Contact @Lapcoas',
sl:'Language',sth:'Light theme',san:'Animations',sst:'Starry background',stx:'Large text',
n1:'Home',n2:'Catalog',n3:'Reviews',n4:'Chat',n5:'Contacts',n6:'Settings'};
const SV=[['Скупка NFT','NFT buyout','Покупаю ваш NFT подарок за вашу, или рыночную цену','I buy your NFT gift for your price or the market price'],
['Верификация TON кошелька','TON wallet verification','помогаю пройти верификацию TON кошелька, проходим KYC','I help you verify your TON wallet, we go through KYC'],
['Верификация биржи','Exchange verification','также помогаю пройти KYC','I also help you pass KYC'],
['Сайт на заказ','Custom website','делаю сайт по вашему описанию, ссылкам и всему что вы дадите мне, оплата по факту','I build a site from your description, links and everything you give me, payment on delivery'],
['Реклама','Advertising','рекламирую вас / вашего Бота / прочие ваши услуги в своих сервисах и на некоторых сайтах','I promote you / your bot / your other services in my services and on some sites'],
['франшиза','Franchise','помогаю вам создать вашего Бота, и предлагаю выгодные условия франшизы с моим ботом по покупке Telegram stars, подключаю оплату и прочее','I help you create your bot and offer favorable franchise terms with my Telegram Stars bot, connect payments and more']];
const NU=[['+1','США','USA',79],['+56','Чили','Chile',79],['+1','Канада','Canada',79],['+62','Индонезия','Indonesia',79],['+880','Бангладеш','Bangladesh',99],['+998','Узбекистан','Uzbekistan',99],['+91','Индия','India',99],['+55','Бразилия','Brazil',99],['+593','Эквадор','Ecuador',129],['+54','Аргентина','Argentina',139],['+351','Португалия','Portugal',139],['+44','Великобритания','United Kingdom',159],['+372','Эстония','Estonia',159],['+66','Таиланд','Thailand',179],['+33','Франция','France',199],['+81','Япония','Japan',199],['+49','Германия','Germany',229],['+371','Латвия','Latvia',299],['+7','Россия','Russia',399],['+7 7','Казахстан','Kazakhstan',399]];
const AC=[['США [+1]','USA [+1]','6-8 лет','6-8 years',399],['Казахстан [+7 7]','Kazakhstan [+7 7]','2020','2020',990],['США [+1]','USA [+1]','2015','2015',1299],['Казахстан [+7 7]','Kazakhstan [+7 7]','2016','2016',1499],['Россия [+7]','Russia [+7]','2016','2016',1499]];
const FR=`Как заказать?|Напиши мне в Telegram @RaevYoU.
Какие способы оплаты?|$, СБП, Crypto, карта, некастодиальный кошелёк.
Как убедиться в надёжности?|Загляни во вкладку «Отзывы».
Где найти все услуги?|Во вкладке «Каталог».
Что такое физ. номера?|Реальные номера с SIM-картами, продаю вместе с партнёром.
Как купить номер?|Выбери номер в каталоге и нажми «Купить».
Есть ли доставка симок?|Зависит от города, уточняй в личных сообщениях.
Что за аккаунты с отлегой?|Аккаунты, созданные давно. Список в каталоге.
Как проходит скупка NFT?|Покупаю NFT подарок за твою или рыночную цену.
Сколько стоит скупка?|Твоя цена или рыночная, обсуждаем в ЛС.
Что за верификация TON?|Помогаю пройти KYC TON кошелька.
Что за верификация биржи?|Помогаю пройти KYC на бирже.
Сколько стоит KYC?|От 700 рублей.
Сколько стоит сайт?|От 350₽, дальше зависит от сложности и времени.
Хостинг входит в цену?|Нет, хостинг оплачивается отдельно.
Как заказать сайт?|Пришли описание, ссылки и всё, что нужно для сайта.
Когда оплата за сайт?|Оплата по факту.
Что даёт реклама?|Рекламирую тебя, твоего бота или услуги в своих сервисах.
Сколько стоит реклама?|От 50₽ за 1 показ, есть пакеты до года.
Что за франшиза?|Помогаю создать бота и даю выгодные условия франшизы.
Есть ли Telegram Stars и Premium?|Да, через моего бота по покупке Stars и Premium.
Есть ли аренда NFT?|Да, у моего бота, детали в ЛС.
Можно ли написать анонимно?|Да, в личные или анонимные сообщения.
Работает ли анонимный чат?|Пока нет, пиши в личные сообщения.
Где контакты партнёра?|Во вкладке «Контакты».`.split('\n').map(x=>x.split('|'));
const FE=`How do I order?|Message me on Telegram @RaevYoU.
Which payment methods?|$, SBP, Crypto, card, non-custodial wallet.
How can I check reliability?|See the "Reviews" tab.
Where are all services?|In the "Catalog" tab.
What are physical numbers?|Real numbers with SIM cards, sold with my partner.
How do I buy a number?|Pick a number in the catalog and press "Buy".
Do you deliver SIM cards?|Depends on your city, ask in private messages.
What are aged accounts?|Accounts created long ago. See the list in the catalog.
How does NFT buyout work?|I buy your NFT gift for your or the market price.
How much is the buyout?|Your price or market price, we discuss in DM.
What is TON verification?|I help you pass KYC for a TON wallet.
What is exchange verification?|I help you pass KYC on an exchange.
How much is KYC?|From 700 rubles.
How much is a website?|From 350₽, then depends on complexity and time.
Is hosting included?|No, hosting is paid separately.
How do I order a website?|Send a description, links and everything needed.
When do I pay for a website?|Payment on delivery.
What does advertising give?|I promote you, your bot or services in my services.
How much is advertising?|From 50₽ per view, packages up to a year.
What is the franchise?|I help create your bot and give favorable franchise terms.
Telegram Stars and Premium?|Yes, via my bot for buying Stars and Premium.
Is NFT rental available?|Yes, in my bot, details in DM.
Can I write anonymously?|Yes, via private or anonymous messages.
Does the anonymous chat work?|Not yet, please message me privately.
Where are partner contacts?|In the "Contacts" tab.`.split('\n').map(x=>x.split('|'));
const LG=[['en','English'],['ru','Русский'],['zh','中文'],['es','Español'],['hi','हिन्दी'],['ar','العربية'],['pt','Português'],['bn','বাংলা'],['fr','Français'],['de','Deutsch'],['ja','日本語'],['ko','한국어'],['tr','Türkçe'],['it','Italiano'],['vi','Tiếng Việt'],['pl','Polski'],['uk','Українська'],['id','Indonesia'],['th','ไทย'],['nl','Nederlands'],['fa','فارسی'],['he','עברית'],['sv','Svenska'],['cs','Čeština'],['ro','Română'],['el','Ελληνικά'],['hu','Magyar']];
$$('[data-k]').forEach(e=>e.dataset.ru=e.innerHTML);
let lang=S.get('lang','ru'),anim=S.get('an','1')==='1',stars=S.get('sk','1')==='1',tab='home';
const ru=()=>lang==='ru',P=(r,e)=>ru()?r:e;
$('#ls').innerHTML=LG.map(l=>`<option value="${l[0]}">${l[1]}</option>`).join('');
const obs=new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;if(e.isIntersecting)t.classList.add('in');else{t.style.setProperty('--ty',e.boundingClientRect.top<0?'-14px':'14px');t.classList.remove('in')}}),{threshold:.08});
const rv=el=>{el.classList.add('rv');obs.observe(el)};
function render(){
$('#svc').innerHTML=SV.map((s,i)=>`<div class="card"><div class="in"><div class="fa"><em>${ic(['gem','shield','bank','monitor','mega','bot'][i])}</em>${P(s[0],s[1])}<small>${ic('rot')}${P('нажми','tap')}</small></div><div class="fb"><b>${P(s[0],s[1])}</b>${P(s[2],s[3])}<a href="${TG}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${P('Написать','Message')}</a></div></div></div>`).join('');
$$('.card').forEach(c=>c.onclick=()=>c.classList.toggle('f'));
$('#rail').innerHTML=NU.map((n,i)=>`<div class="num" data-i="${i}"><b>${n[0]}</b><span>${P(n[1],n[2])}</span><small>${n[3]}₽</small><button>${P('Купить','Buy')}</button></div>`).join('')+
`<div class="num" data-i="x"><b>+888</b><span>${P('от 23.900₽','from 23,900₽')}</span><small>${P('2 шт в наличии','2 in stock')}</small><button>${P('Купить','Buy')}</button></div><div class="num" data-i="a"><b>${P('Аккаунты с отлегой','Aged accounts')}</b><button>${P('Посмотреть','View')}</button></div>`;
$$('.num').forEach(n=>{n.onclick=()=>{if(moved)return;n.dataset.i==='a'?accs():buy()};rv(n)});
$('#faq').innerHTML=(ru()?FR:FE).map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
$$('.blk,.card,.wb,.bl,.grp,h2,.lab,.pay,.hero,.logo,.mq').forEach(e=>{if(!e.classList.contains('rv'))rv(e)});}
function apply(){const L=ru()?'ru':'en';document.documentElement.lang=lang;document.documentElement.dir=['ar','fa','he'].includes(lang)?'rtl':'ltr';
$$('[data-k]').forEach(e=>{e.innerHTML=ru()?e.dataset.ru:(E[e.dataset.k]||e.dataset.ru)});
$$('#lg button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));$('#ls').value=lang;S.set('lang',lang);render()}
function setLang(l){lang=l;apply()}
$$('#lg button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));$('#ls').onchange=e=>setLang(e.target.value);
function theme(l){document.body.classList.toggle('light',l);$$('#th button').forEach(b=>b.classList.toggle('on',(b.dataset.th==='light')===l));$('#tg').checked=l;S.set('th',l?'l':'d')}
$$('#th button').forEach(b=>b.onclick=()=>theme(b.dataset.th==='light'));$('#tg').onchange=e=>theme(e.target.checked);
function setAnim(v){anim=v;document.body.classList.toggle('na',!v);$('#an').checked=v;S.set('an',v?'1':'0');loop()}
function setStars(v){stars=v;$('#sky').style.display=v?'':'none';$('#sk').checked=v;S.set('sk',v?'1':'0');loop()}
$('#an').onchange=e=>setAnim(e.target.checked);$('#sk').onchange=e=>setStars(e.target.checked);
$('#lt').checked=S.get('lt','0')==='1';document.documentElement.classList.toggle('lg',$('#lt').checked);
$('#lt').onchange=e=>{document.documentElement.classList.toggle('lg',e.target.checked);S.set('lt',e.target.checked?'1':'0')};
const nav=$('#nav');
function go(id){tab=id;document.body.classList.toggle('rvw',id==='reviews');$$('.tab').forEach(t=>t.classList.toggle('on',t.id===id));$$('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.go===id));scrollTo(0,0);upd();place();pl.classList.remove('sq');void pl.offsetWidth;pl.classList.add('sq')}
$$('#nav button').forEach(b=>b.onclick=()=>go(b.dataset.go));
function upd(){nav.classList.toggle('show',scrollY>40||tab!=='home');const m=document.documentElement.scrollHeight-innerHeight;$('#pg').style.width=(m>0?scrollY/m*100:0)+'%';$('#up').classList.toggle('show',scrollY>400)}$('#up').onclick=()=>scrollTo({top:0,behavior:'smooth'});addEventListener('scroll',upd,{passive:true});
const md=$('#md'),bx=$('#bx');
const open=h=>{bx.innerHTML=h;md.classList.add('on');$$('.x').forEach(x=>x.onclick=close)},close=()=>md.classList.remove('on');
md.onclick=e=>{if(e.target===md)close()};addEventListener('keydown',e=>{if(e.key==='Escape')close()});
function buy(){open(`<h3><span></span><button class="x" aria-label="Close">${ic('x')}</button></h3><p>${P('Нажмите кнопку купить чтобы перейти в личные сообщения для покупки','Press the Buy button to go to private messages and make the purchase')}</p><a class="wb" href="${TG}" target="_blank" rel="noopener">${P('Купить','Buy')}</a>`)}
function accs(){open(`<h3><span>${P('Аккаунты с отлегой','Aged accounts')}</span><button class="x" aria-label="Close">${ic('x')}</button></h3>`+AC.map(a=>`<div class="li"><div>${P(a[0],a[1])}<small>${P(a[2],a[3])}</small></div><b>${a[4]}₽</b></div>`).join(''));$$('.li').forEach(l=>l.onclick=buy)}
const rail=$('#rail');let drag=0,sx=0,sl=0,moved=0;
$('#pv').onclick=()=>rail.scrollBy({left:-300,behavior:'smooth'});$('#nx').onclick=()=>rail.scrollBy({left:300,behavior:'smooth'});
rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;drag=1;moved=0;sx=e.clientX;sl=rail.scrollLeft});
addEventListener('pointermove',e=>{if(!drag)return;const d=e.clientX-sx;if(Math.abs(d)>4){moved=1;rail.classList.add('dg')}rail.scrollLeft=sl-d});
addEventListener('pointerup',()=>{drag=0;rail.classList.remove('dg');setTimeout(()=>moved=0,0)});
const cv=$('#sky'),cx=cv.getContext('2d');let W,H,ST=[],run=0;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;ST=Array.from({length:Math.min(150,Math.round(W*H/9000))},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+.3,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,p:Math.random()*6}))}
function dr(){cx.clearRect(0,0,W,H);const c=document.body.classList.contains('light')?'0,0,0':'255,255,255';
ST.forEach(s=>{if(anim){s.x=(s.x+s.vx+W)%W;s.y=(s.y+s.vy+H)%H;s.p+=.02}cx.fillStyle=`rgba(${c},${.3+.25*Math.sin(s.p)})`;cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()});
for(let i=0;i<ST.length;i++)for(let j=i+1;j<ST.length;j++){const a=ST[i],b=ST[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<95){cx.strokeStyle=`rgba(${c},${.12*(1-d/95)})`;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
if(anim&&stars)requestAnimationFrame(dr);else run=0}
function loop(){if(stars&&!run){run=1;dr()}else if(stars)dr()}
addEventListener('resize',()=>{rs();loop()});
const ts=$('#ts');$('#cp').onclick=()=>{try{navigator.clipboard.writeText('@RaevYoU')}catch(e){}ts.textContent=P('Скопировано','Copied');ts.classList.add('on');setTimeout(()=>ts.classList.remove('on'),1600)};
document.addEventListener('pointermove',e=>{const t=e.target.closest&&e.target.closest('.blk,.num,.bl');if(t){const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')}});
const WD=['NFT','Crypto','Web','Telegram','TON'];let wi=0;setInterval(()=>{if(!anim)return;const w=$('#rw');w.style.opacity=0;setTimeout(()=>{wi=(wi+1)%WD.length;w.textContent=WD[wi];w.style.opacity=1},300)},2400);
$$('[data-n]').forEach(b=>{const n=+b.dataset.n,p=b.dataset.pre||'',s=b.dataset.suf||'',t0=performance.now();(function f(t){const k=anim?Math.min(1,(t-t0)/1400):1;b.textContent=p+Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)});
const pl=document.createElement('i');pl.className='pl';nav.prepend(pl);
function place(){const b=$('#nav button.on');if(!b)return;pl.style.width=b.offsetWidth+'px';pl.style.height=b.offsetHeight+'px';pl.style.transform=`translate(${b.offsetLeft}px,${b.offsetTop}px)`}
new ResizeObserver(place).observe(nav);addEventListener('load',place);
nav.addEventListener('pointermove',e=>{const r=nav.getBoundingClientRect();nav.style.setProperty('--hx',((e.clientX-r.left)/r.width*100)+'%')});
const ua=navigator.userAgent;if(/Chrome\//.test(ua)&&!/CriOS|FxiOS|EdgiOS/.test(ua)){
const gm=(a,hi,mid)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" preserveAspectRatio="none"><defs><linearGradient id="g" ${a}><stop offset="0" stop-color="${hi}"/><stop offset=".22" stop-color="${mid}"/><stop offset=".78" stop-color="${mid}"/><stop offset="1" stop-color="#000"/></linearGradient></defs><rect width="100" height="30" fill="url(#g)"/></svg>`);
document.body.insertAdjacentHTML('beforeend',`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="lq" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feImage href="${gm('','#f00','#800')}" preserveAspectRatio="none" result="a"/><feImage href="${gm('x2="0" y2="1"','#0f0','#080')}" preserveAspectRatio="none" result="b"/><feComposite in="a" in2="b" operator="arithmetic" k2="1" k3="1" result="m"/><feDisplacementMap in="SourceGraphic" in2="m" scale="26" xChannelSelector="R" yChannelSelector="G"/></filter></svg>`);nav.classList.add('rf')}
rs();theme(S.get('th','d')==='l');setAnim(anim);setStars(stars);apply();upd();go('home');
})();
