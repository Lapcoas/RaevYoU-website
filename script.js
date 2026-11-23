(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const S={get(k,d){try{return localStorage.getItem(k)??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const IS_DESKTOP=window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)').matches;
const DEV={pc:IS_DESKTOP?1:0,maxStars:IS_DESKTOP?130:50,starArea:9000,ft:IS_DESKTOP?0:28,dt:IS_DESKTOP?1:2,links:IS_DESKTOP?1:0,fl:IS_DESKTOP?10:5,once:IS_DESKTOP?0:1,swS:IS_DESKTOP?240:220,swF:IS_DESKTOP?140:110};
const TG='https://t.me/RaevYoU';
const I={home:'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',grid:'M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z',star:'m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',chat:'M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',send:'M21 3 3 10.2l6.4 2.4L11.8 20zM9.4 12.6 21 3',
gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
sun:'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',left:'M15 5l-7 7 7 7',right:'M9 5l7 7-7 7',up:'M12 19V5M5 12l7-7 7 7',x:'M6 6l12 12M18 6 6 18',copy:'M8 8h12v12H8zM4 16V4h12',rot:'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
gem:'M6 3h12l4 6-10 12L2 9zM2 9h20M9 3 7 9l5 12 5-12-2-6',shield:'M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6zM8.5 12l2.5 2.5 4.5-5',bank:'M3 10 12 4l9 6M5 10v8M9.7 10v8M14.3 10v8M19 10v8M3 20h18',monitor:'M3 5h18v11H3zM8 20h8M12 16v4',mega:'M3 11v2a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1zM18 9a4 4 0 0 1 0 6',bot:'M5 8h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM12 8V4M8.5 13h.01M15.5 13h.01M9 16.5h6',
users:'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 19v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8',globe:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16v4M17 18h4',type:'M5 7V5h14v2M12 5v14M9 19h6',ext:'M7 17 17 7M8 7h9v9',share:'M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13',grid2:'M5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5v-4A1.5 1.5 0 0 1 5.5 4zM14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4A1.5 1.5 0 0 1 14.5 4zM5.5 13h4A1.5 1.5 0 0 1 11 14.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4A1.5 1.5 0 0 1 5.5 13zM14.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5z',bubbles:'M10 3.5C6.4 3.5 3.5 5.9 3.5 8.9c0 1.4.6 2.7 1.7 3.7l-.6 2.3 2.4-1.2M14.5 8.5c3.3 0 6 2.2 6 5s-2.7 5-6 5c-.7 0-1.4-.1-2-.3l-3.2 1.5.7-2.7c-1.3-.9-2-2.3-2-3.5 0-2.8 2.7-5 6-5z',pcircle:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6.2 18.2c1.2-2 3.3-3 5.8-3s4.6 1 5.8 3',house:'M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-3.2V15a1.3 1.3 0 0 0-1.3-1.3h-4a1.3 1.3 0 0 0-1.3 1.3v5.5H5.5A1.5 1.5 0 0 1 4 19z',bag:'M5 8h14l-1 11.2a1.5 1.5 0 0 1-1.5 1.3h-9A1.5 1.5 0 0 1 6 19.2zM9 8V7a3 3 0 0 1 6 0v1',star2:'M12 3.8l2.5 5.1 5.6.8-4.05 3.95.95 5.6L12 16.6l-5 2.65.95-5.6L3.9 9.7l5.6-.8z',bubble:'M12 4c4.7 0 8.5 3.2 8.5 7.2S16.7 18.4 12 18.4c-.9 0-1.8-.1-2.6-.3L5.2 20l.9-3.4C4.6 15.3 3.5 13.4 3.5 11.2 3.5 7.2 7.3 4 12 4z',person:'M12 12.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2zM4.8 20c.6-3.4 3.7-5.2 7.2-5.2s6.6 1.8 7.2 5.2',sliders:'M4 7h5.5M14.5 7H20M4 17h1.5M10.5 17H20M12 4.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 14.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z',search:'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',tag:'M3 12V4h8l10 10-8 8zM7.5 8.5h.01',card:'M3 6h18v12H3zM3 10h18M7 15h3',wallet:'M3 7a2 2 0 0 1 2-2h13v3M3 7v11a2 2 0 0 0 2 2h15V8H5a2 2 0 0 1-2-1zM16 14h2'};
const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${I[n]}"/></svg>`;
$$('[data-ic]').forEach(e=>e.innerHTML=ic(e.dataset.ic));

const E={fxh:'Special effects',n7:'Prices',ob:'Place an order',vc:'Save contact',fx:'Effects brightness',fs:'Text size',hy:'Why me',p1:'Dollars',p2g:'SBP',p2:'Fast payments',p3:'Crypto',p4:'To card',p5:'Non-custodial wallet',y1t:'Always online',y1d:'Message me on Telegram any time.',y2t:'Reviews',y2d:'Check the "Reviews" tab before ordering.',y3t:'Anonymous',y3d:'You can write in private or anonymous messages.',y4t:'5 ways to pay',y4d:'$, SBP, Crypto, card and wallet.',on2:'online',pf1:'Floating symbols',pf2:'Film grain',pf3:'Cursor glow',pf4:'Vibration',sh:'Share the site',rs:'Reset settings',hd:'What I do',s1:'countries',s2:'services',s3:'per number',s4:'online',doing:'Working on:',hw:'How it works',a1t:'Write me',a1d:'Telegram @RaevYoU — tell me what you need.',a2t:'We discuss details',a2d:'Volume, price, timing. No surprises.',a3t:'Payment',a3d:'In $, SBP, Crypto, to card or non-custodial wallet.',a4t:'You get the result',a4d:'If you like, check the reviews first.',on:'24/7 online',b1:'Alias · Nickname · Username',l1:'Identity',v1:'Raevsky',l2:'Nickname',l3:'Age',v3:'19 years old',l4:'Username tg',lab:'About me:',
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
E.lv='Live rates';
$$('[data-k]').forEach(e=>e.dataset.ru=e.innerHTML);
let lang=S.get('lang',/^ru|^uk|^be|^kk/.test(navigator.language)?'ru':'en'),anim=S.get('an','1')==='1',stars=S.get('sk','1')==='1',tab='home',NV=0,moved=0,fd=1,mx=0;
const ru=()=>lang==='ru',P=(r,e)=>ru()?r:e,rail=$('#rail'),nav=$('#nav'),ts=$('#ts'),md=$('#md'),bx=$('#bx'),pg=$('#pg'),upb=$('#up'),rg=$('.ring');
$('#ls').innerHTML=LG.map(l=>`<option value="${l[0]}">${l[1]}</option>`).join('');

/* ---------- reveal on scroll ---------- */
const obs=new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;
 if(e.isIntersecting){t.classList.add('in');if(DEV.once)obs.unobserve(t)}
 else if(!DEV.once){t.style.setProperty('--ty',e.boundingClientRect.top<0?'-34px':'34px');t.classList.remove('in')}}),{threshold:.08});
const rv=el=>{el.classList.add('rv');obs.observe(el)};

function render(){
$('#svc').innerHTML=SV.map((s,i)=>`<div class="card" style="--i:${i}"><div class="in"><div class="fa" data-n="0${i+1}"><em>${ic(['gem','shield','bank','monitor','mega','bot'][i])}</em>${P(s[0],s[1])}<small>${ic('rot')}${P('нажми','tap')}</small></div><div class="fb"><b>${P(s[0],s[1])}</b>${P(s[2],s[3])}<a href="${TG}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${P('Написать','Message')}</a></div></div></div>`).join('');
$$('.card').forEach(c=>c.onclick=()=>c.classList.toggle('f'));
$('#tls').innerHTML=SV.map((s,i)=>`<button class="tl" style="--i:${i}">${ic(['gem','shield','bank','monitor','mega','bot'][i])}<span>${P(s[0],s[1])}</span></button>`).join('');
$$('.tl,.chips [data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go||'catalog'));
$('#rail').innerHTML=NU.map((n,i)=>`<div class="num" style="--i:${i%5}" data-i="${i}" data-p="${n[3]}"><b>${n[0]}</b><span>${P(n[1],n[2])}</span><small>${n[3]}₽</small><button>${P('Купить','Buy')}</button></div>`).join('')+
`<div class="num" data-i="x"><b>+888</b><span>${P('от 23.900₽','from 23,900₽')}</span><small>${P('2 шт в наличии','2 in stock')}</small><button>${P('Купить','Buy')}</button></div><div class="num" data-i="a"><b>${P('Аккаунты с отлегой','Aged accounts')}</b><button>${P('Посмотреть','View')}</button></div>`;
$$('.num').forEach(n=>{n.onclick=()=>{if(moved)return;n.dataset.i==='a'?accs():buy(sel(n))};rv(n)});
$('#faq').innerHTML=(ru()?FR:FE).map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
$$('.blk,.card,.wb,.bl,.grp,h2,.lab,.pay,.hero,.logo,.mq,.live').forEach(e=>{if(!e.classList.contains('rv'))rv(e)})}
function apply(){document.documentElement.lang=lang;document.documentElement.dir=['ar','fa','he'].includes(lang)?'rtl':'ltr';
$$('[data-k]').forEach(e=>{e.innerHTML=ru()?e.dataset.ru:(E[e.dataset.k]||e.dataset.ru)});
$$('#lg button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));$('#ls').value=lang;S.set('lang',lang);render();ui()}
function setLang(l){lang=l;apply()}
$$('#lg button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));$('#ls').onchange=e=>setLang(e.target.value);

/* ---------- settings ---------- */
function setAnim(v){anim=v;document.body.classList.toggle('na',!v);$('#an').checked=v;S.set('an',v?'1':'0');loop();bk()}
function setStars(v){stars=v;$('#sky').style.display=v?'':'none';$('#sk').checked=v;S.set('sk',v?'1':'0');loop()}
$('#an').onchange=e=>setAnim(e.target.checked);$('#sk').onchange=e=>setStars(e.target.checked);
$('#lt').checked=S.get('lt','0')==='1';document.documentElement.classList.toggle('lg',$('#lt').checked);
$('#lt').onchange=e=>{document.documentElement.classList.toggle('lg',e.target.checked);S.set('lt',e.target.checked?'1':'0');fd=1;mx=0;bd.forEach(b=>b.w=0);fit()};

/* ---------- navigation ---------- */
function loadRev(){const f=$('#reviews iframe');if(f&&!f.getAttribute('src'))f.src=f.dataset.src}
function go(id,np){tab=id;if(!np&&location.hash!=='#'+id)try{history.pushState(null,'','#'+id)}catch(e){}
document.body.classList.toggle('rvw',id==='reviews');if(id==='reviews')loadRev();swap(id);
$$('#nav button').forEach(b=>{b.classList.toggle('on',b.dataset.go===id);b.setAttribute('aria-current',b.dataset.go===id?'page':'false')});
upd();place();loop();bk();pl.classList.remove('sq');void pl.offsetWidth;pl.classList.add('sq')}
$$('#nav button').forEach(b=>b.onclick=()=>{NV=1;go(b.dataset.go)});
let tkp=0;
function upd(){tkp=0;const y=scrollY;nav.classList.toggle('show',y>40||tab!=='home');if(!mx)mx=document.documentElement.scrollHeight-innerHeight;pg.style.transform=`scaleX(${mx>0?Math.min(1,y/mx):0})`;upb.classList.toggle('show',y>400)}
upb.onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>{if(!tkp){tkp=1;requestAnimationFrame(upd)}},{passive:true});
new ResizeObserver(()=>{mx=0}).observe($('.w'));

/* ---------- modal ---------- */
const open=h=>{bx.innerHTML=h;md.classList.add('on');$$('.x').forEach(x=>x.onclick=close)},close=()=>md.classList.remove('on');
md.onclick=e=>{if(e.target===md)close()};addEventListener('keydown',e=>{if(e.key==='Escape')close()});
function buy(t){open(`<h3><span></span><button class="x" aria-label="Close">${ic('x')}</button></h3>${t?`<div class="blk" style="margin:0 0 12px">${t}</div>`:''}<p>${P('Нажмите кнопку купить чтобы перейти в личные сообщения для покупки','Press the Buy button to go to private messages and make the purchase')}</p><a class="wb" href="${TG}" target="_blank" rel="noopener">${P('Купить','Buy')}</a>`)}
function accs(){open(`<h3><span>${P('Аккаунты с отлегой','Aged accounts')}</span><button class="x" aria-label="Close">${ic('x')}</button></h3>`+AC.map(a=>`<div class="li"><div>${P(a[0],a[1])}<small>${P(a[2],a[3])}</small></div><b>${a[4]}₽</b></div>`).join(''));$$('.li').forEach(l=>l.onclick=()=>buy(sel(l)))}

/* ---------- number rail ---------- */
if(!DEV.pc){let drag=0,sx=0,sl=0;
$('#pv').onclick=()=>rail.scrollBy({left:-300,behavior:'smooth'});$('#nx').onclick=()=>rail.scrollBy({left:300,behavior:'smooth'});
rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;drag=1;moved=0;sx=e.clientX;sl=rail.scrollLeft});
addEventListener('pointermove',e=>{if(!drag)return;const d=e.clientX-sx;if(Math.abs(d)>4){moved=1;rail.classList.add('dg')}rail.scrollLeft=sl-d});
addEventListener('pointerup',()=>{drag=0;rail.classList.remove('dg');setTimeout(()=>moved=0,0)})}
let rbT=0;function rbu(){rbT=0;const b=$('.rb'),i=$('#rbi');if(!b||!b.clientWidth)return;const tw=b.clientWidth,tb=Math.max(.15,Math.min(1,rail.clientWidth/(rail.scrollWidth||1)))*tw;i.style.width=tb+'px';i.style.transform=`translateX(${rail.scrollLeft/((rail.scrollWidth-rail.clientWidth)||1)*(tw-tb)}px)`}
rail.addEventListener('scroll',()=>{if(!rbT){rbT=1;requestAnimationFrame(rbu)}},{passive:true});

/* ---------- starfield (single loop, capped fps, pauses when hidden) ---------- */
const cv=$('#sky'),cx=cv.getContext('2d');let W=0,H=0,ST=[],M=[],run=0,lt0=0;
function rs(){const w=innerWidth;if(w===W&&ST.length)return;W=cv.width=w;H=cv.height=innerHeight;
ST=Array.from({length:Math.min(DEV.maxStars,Math.round(W*H/DEV.starArea))},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+.3,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,p:Math.random()*6}))}
function dr(move){const dt=DEV.dt;cx.clearRect(0,0,W,H);
for(let i=0;i<ST.length;i++){const s=ST[i];if(move){s.x=(s.x+s.vx*dt+W)%W;s.y=(s.y+s.vy*dt+H)%H;s.p+=.02*dt}
cx.fillStyle=`rgba(255,255,255,${.14+.12*Math.sin(s.p)})`;cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()}
if(DEV.links){cx.lineWidth=1;for(let i=0;i<ST.length;i++)for(let j=i+1;j<ST.length;j++){const a=ST[i],b=ST[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;if(d2<9025){cx.strokeStyle=`rgba(255,255,255,${.05*(1-Math.sqrt(d2)/95)})`;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}}
if(move){if(Math.random()<.014*dt&&M.length<3)M.push({x:Math.random()*W*.8,y:Math.random()*H*.4,t:0});
M=M.filter(m=>{m.t+=dt;m.x+=11*dt;m.y+=5*dt;const a=Math.max(0,1-m.t/50);cx.strokeStyle=`rgba(255,255,255,${a*.8})`;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(m.x,m.y);cx.lineTo(m.x-70,m.y-32);cx.stroke();return a>0})}}
function frame(t){if(!run)return;requestAnimationFrame(frame);if(t-lt0<DEV.ft)return;lt0=t;dr(true)}
function loop(){if(!stars){run=0;cx.clearRect(0,0,W,H);return}
if(anim&&tab!=='reviews'&&!document.hidden){if(!run){run=1;requestAnimationFrame(frame)}}else{run=0;dr(false)}}
let lw=innerWidth,rt;
addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(innerWidth===lw)return;lw=innerWidth;rs();loop();fd=1;mx=0;bd.forEach(b=>b.w=0);fit();place()},140)});

/* ---------- toast / copy ---------- */
function toast(m){ts.textContent=m;ts.classList.add('on');setTimeout(()=>ts.classList.remove('on'),1800)}
$('#cp').onclick=()=>{try{navigator.clipboard.writeText('@RaevYoU')}catch(e){}toast(P('Скопировано','Copied'))};

/* ---------- small live bits ---------- */
const WD=['NFT','Crypto','Web','Telegram','TON'];let wi=0;
setInterval(()=>{if(!anim||document.hidden||tab!=='home')return;const w=$('#rw');w.style.opacity=0;setTimeout(()=>{wi=(wi+1)%WD.length;w.textContent=WD[wi];w.style.opacity=1},300)},2400);
$$('[data-n]').forEach(b=>{const n=+b.dataset.n,p=b.dataset.pre||'',s=b.dataset.suf||'',t0=performance.now();(function f(t){const k=anim?Math.min(1,(t-t0)/1400):1;b.textContent=p+Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)});
const pl=document.createElement('i');pl.className='pl';nav.prepend(pl);
function place(){const b=$('#nav button.on');if(!b){pl.style.opacity=0;return}pl.style.opacity=1;pl.style.width=b.offsetWidth+'px';pl.style.height=b.offsetHeight+'px';pl.style.transform=`translate(${b.offsetLeft}px,${b.offsetTop}px)`}
new ResizeObserver(place).observe(nav);addEventListener('load',place);
const ld=$('#ld');
setTimeout(()=>{ld.classList.add('off');fd=1;fit();setTimeout(()=>toast((h=>h<5?P('Доброй ночи','Good night'):h<12?P('Доброе утро','Good morning'):h<18?P('Добрый день','Good afternoon'):P('Добрый вечер','Good evening'))(new Date().getHours())),900);setTimeout(()=>ld.remove(),700)},anim?1000:100);
{const g=['₿','Ξ','₮','◈','✦','◇','$','₽','TON','NFT'].slice(0,DEV.fl);g.forEach(g=>{const f=document.createElement('i');f.className='fl';f.textContent=g;f.style.cssText=`left:${Math.random()*92}vw;font-size:${14+Math.random()*16}px;animation-duration:${22+Math.random()*26}s;animation-delay:-${Math.random()*30}s`;document.body.append(f)})}
document.addEventListener('pointerdown',e=>{const t=e.target.closest&&e.target.closest('.wb,.bl,.num,.tl,.chips>*');if(!t)return;
try{!document.body.classList.contains('no-hp')&&navigator.vibrate&&navigator.vibrate(8)}catch(_){}
const r=t.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=document.createElement('i');d.className='rp';d.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;t.appendChild(d);setTimeout(()=>d.remove(),650)},{passive:true});
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&anim){o.disconnect();setTimeout(()=>{rail.scrollBy({left:80,behavior:'smooth'});setTimeout(()=>rail.scrollBy({left:-80,behavior:'smooth'}),800)},500)}}).observe(rail);

/* ---------- logo fit ---------- */
function fit(){const L=$('.logo');if(!L||!L.offsetParent)return;const s=L.firstElementChild;s.style.fontSize='100px';s.style.fontSize=(100*L.clientWidth/s.getBoundingClientRect().width)+'px';fd=0}
document.fonts&&document.fonts.ready.then(()=>{fd=1;fit()});

/* ---------- tab swap ---------- */
const pos={};let sw;
function swap(id){clearTimeout(sw);const cur=$('.tab.on'),nx=$('#'+id);const sf=NV;NV=0;document.body.dataset.sf=sf?'1':'';
if(cur&&cur!==nx)pos[cur.id]=scrollY;
if(cur===nx){scrollTo({top:0,behavior:'smooth'});return}
const fin=()=>{$$('.tab').forEach(t=>{t.classList.remove('out');t.classList.toggle('on',t===nx)});scrollTo(0,pos[id]||0);mx=0;upd();if(fd)fit();rail.dispatchEvent(new Event('scroll'))};
if(cur&&cur!==nx&&anim){cur.classList.add('out');sw=setTimeout(fin,sf?DEV.swS:DEV.swF)}else fin()}
const TB=['home','catalog','reviews','chat','contacts','settings'],VB=[...TB,'prices'],sel=e=>e.innerText.replace(/\s*\n+\s*/g,' · ').replace(/ · (Купить|Buy)$/,'');let pm=0;

/* ---------- search / filter ---------- */
function flt(){const q=$('#q').value.trim().toLowerCase();let n=0;$$('#rail .num').forEach(e=>{const ok=(!q||e.textContent.toLowerCase().includes(q))&&(!pm||(+e.dataset.p&&+e.dataset.p<=pm));e.style.display=ok?'':'none';if(ok)n++});$('#nf').hidden=n>0;rail.dispatchEvent(new Event('scroll'))}
function ui(){$('#q').placeholder=P('Поиск страны или кода','Search country or code');$('#fq').placeholder=P('Поиск по FAQ','Search FAQ');$('#nf').textContent=P('Ничего не найдено','Nothing found');
$('#pc').innerHTML=[0,99,199,399].map(m=>`<button data-m="${m}" class="${m==pm?'on':''}">${m?P('до ','up to ')+m+'₽':P('Все','All')}</button>`).join('');$$('#pc button').forEach(b=>b.onclick=()=>{pm=+b.dataset.m;ui()});flt();rp();rfx()}
$('#q').oninput=flt;$('#fq').oninput=e=>{const q=e.target.value.toLowerCase();$$('#faq details').forEach(d=>d.style.display=d.textContent.toLowerCase().includes(q)?'':'none')};
addEventListener('popstate',()=>go(VB.includes(location.hash.slice(1))?location.hash.slice(1):'home',1));
$$('[data-pf]').forEach(i=>{const k=i.dataset.pf,f=()=>document.body.classList.toggle('no-'+k,!i.checked);i.checked=S.get('pf_'+k,k==='gr'?'0':'1')==='1';f();i.onchange=()=>{S.set('pf_'+k,i.checked?'1':'0');f()}});
$('#shr').onclick=async()=>{let u;try{u=new URL('../',location.href).href}catch(e){u=location.href}try{if(navigator.share){await navigator.share({title:'RaevYoU',url:u});return}}catch(e){return}try{await navigator.clipboard.writeText(u)}catch(e){}toast(P('Ссылка скопирована','Link copied'))};
$('#rst').onclick=()=>{try{localStorage.clear()}catch(e){}location.reload()};
$$('.pa').forEach(i=>i.src=$('.av').src);

/* ---------- marquee bands (runs only while visible) ---------- */
['NFT ✦ CRYPTO ✦ WEB ✦ TELEGRAM ✦ ','TON ✦ KYC ✦ STARS ✦ PREMIUM ✦ '].forEach((u,i)=>$$('.bd i')[i].textContent=u.repeat(3)+u.repeat(3));
const bd=$$('.bd i').map((e,i)=>({e,d:i?1:-1,x:0,w:0,n:0}));let ly=0,vl=0,bRun=0,bVis=0;
function bt(){bRun=0;if(!(tab==='home'&&anim&&bVis&&!document.hidden))return;const y=scrollY,dy=Math.abs(y-ly);ly=y;vl+=(Math.min(dy,60)-vl)*.12;
bd.forEach(b=>{if(!b.w){b.w=b.e.scrollWidth/2;if(!b.w)return;if(!b.n){b.x=b.d>0?-b.w:0;b.n=1}}const w=b.w;b.x+=b.d*(.7+vl*.6);if(b.d<0&&b.x<=-w)b.x+=w;if(b.d>0&&b.x>=0)b.x-=w;b.e.style.transform=`translate3d(${b.x}px,0,0)`});bRun=1;requestAnimationFrame(bt)}
function bk(){if(!bRun&&tab==='home'&&anim&&bVis&&!document.hidden){bRun=1;ly=scrollY;requestAnimationFrame(bt)}}
new IntersectionObserver(es=>{bVis=es[0].isIntersecting;bk()}).observe($('.bands'));
new IntersectionObserver(es=>$('.logo').classList.toggle('off',!es[0].isIntersecting)).observe($('.logo'));

/* ---------- clock ---------- */
const clk=()=>{if(!document.hidden&&tab!=='reviews')$('#clk').textContent=new Date().toLocaleTimeString('en-GB')};clk();setInterval(clk,1000);

/* ---------- NEW: live crypto rates ---------- */
{const box=$('#live'),URL_='https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,the-open-network&vs_currencies=usd&include_24hr_change=true';let busy=0;
const fmt=v=>v>=1000?'$'+Math.round(v).toLocaleString('en-US'):'$'+v.toFixed(2);
const paint=d=>{let any=0;$$('#live .lv').forEach(el=>{const x=d&&d[el.dataset.id];if(!x||typeof x.usd!=='number')return;any=1;const c=x.usd_24h_change||0;el.querySelector('b').textContent=fmt(x.usd);const em=el.querySelector('em');em.textContent=(c>=0?'▲ ':'▼ ')+Math.abs(c).toFixed(2)+'%';el.classList.toggle('dn',c<0);el.classList.remove('tk');void el.offsetWidth;el.classList.add('tk')});if(any)box.hidden=false};
const pull=async()=>{if(busy||document.hidden||tab!=='home')return;busy=1;try{let c=null;try{c=JSON.parse(sessionStorage.getItem('rv_lv')||'null')}catch(e){}
if(c&&Date.now()-c.t<55000){paint(c.d)}else{const r=await fetch(URL_,{cache:'no-store'});if(!r.ok)throw 0;const d=await r.json();try{sessionStorage.setItem('rv_lv',JSON.stringify({t:Date.now(),d}))}catch(e){}paint(d)}}catch(e){}busy=0};
setTimeout(pull,1800);setInterval(pull,60000)}

/* ---------- device-specific input ---------- */
if(DEV.pc){const cg=$('#cg');let px=0,py=0,pend=0;
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;px=e.clientX;py=e.clientY;if(pend)return;pend=1;requestAnimationFrame(()=>{pend=0;cg.style.opacity=1;cg.style.transform=`translate(${px}px,${py}px)`;if(tab==='home')rg.style.transform=`perspective(500px) rotateY(${(px/innerWidth-.5)*24}deg) rotateX(${-(py/innerHeight-.5)*24}deg)`})},{passive:true});
addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;if(/^[1-6]$/.test(e.key))go(TB[e.key-1]);else if(tab==='catalog'&&e.key==='/'){e.preventDefault();$('#q').focus()}});
let kb='';addEventListener('keydown',e=>{if(/INPUT|TEXTAREA/.test(document.activeElement.tagName))return;kb=(kb+e.key).slice(-8).toLowerCase();for(const k in FX)if(kb.endsWith(k))FX[k]()})}
else{let tx,ty;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
document.addEventListener('touchend',e=>{if(tab==='reviews'||e.target.closest('.rail,.md,input,select'))return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>90&&Math.abs(dy)<45){const t=TB[TB.indexOf(tab)+(dx<0?1:-1)];if(t)go(t)}},{passive:true});
if(window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission!=='function'){let g=0,b=0,pend=0;addEventListener('deviceorientation',e=>{if(tab!=='home'||e.gamma==null||!anim)return;g=Math.max(-25,Math.min(25,e.gamma));b=Math.max(-25,Math.min(25,(e.beta||0)-50));if(pend)return;pend=1;requestAnimationFrame(()=>{pend=0;rg.style.transform=`perspective(500px) rotateY(${g*.9}deg) rotateX(${-b*.9}deg)`})},{passive:true})}}
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();cmd()}});
function rp(){const g=(t,rows)=>`<h2 style="font-size:1.1rem">${t}</h2><div class="blk">${rows.map(r=>`<div class="li"><div>${r[0]}${r[1]?`<small>${r[1]}</small>`:''}</div><b>${r[2]}</b></div>`).join('')}</div>`;
$('#pl2').innerHTML=g(P('Физические номера','Physical numbers'),NU.map(n=>[n[0]+' '+P(n[1],n[2]),'',n[3]+'₽']).concat([['+888',P('2 шт в наличии','2 in stock'),P('от 23.900₽','from 23,900₽')]]))+g(P('Аккаунты с отлегой','Aged accounts'),AC.map(a=>[P(a[0],a[1]),P(a[2],a[3]),a[4]+'₽']))+g(P('Услуги','Services'),[[P('Сайт на заказ','Custom website'),P('хостинг отдельно','hosting is separate'),P('от 350₽','from 350₽')],[P('Верификация KYC','KYC verification'),'TON, '+P('кошельки, биржи','wallets, exchanges'),P('от 700₽','from 700₽')]])+g(P('Реклама','Advertising'),[[P('1 показ','1 view'),'','50₽'],[P('10 показов','10 views'),'','250₽'],[P('50 показов','50 views'),'','700₽'],[P('150 показов','150 views'),'','1200₽'],[P('1 месяц','1 month'),P('25 постов / роликов в день','25 posts / videos a day'),'3400₽'],[P('3 месяца','3 months'),P('50 постов / роликов','50 posts / videos'),'7100₽'],[P('1 год','1 year'),P('70 постов / роликов в день','70 posts / videos a day'),'17 900₽']]);
$$('#pl2 .li').forEach(l=>l.onclick=()=>buy(sel(l)));$$('#pl2 h2,#pl2 .blk').forEach(rv)}
function wiz(){let sv=-1,wt='';const dr=()=>{open(`<h3><span>${P('Оформить заказ','Place an order')}</span><button class="x" aria-label="Close">${ic('x')}</button></h3><p class="mut" style="margin:0 0 10px">${P('1. Выберите услугу','1. Pick a service')}</p><div class="chips" id="wc">${SV.map((s,i)=>`<button data-i="${i}" class="${i==sv?'on':''}">${P(s[0],s[1])}</button>`).join('')}</div><p class="mut" style="margin:14px 0 6px">${P('2. Опишите задачу','2. Describe the task')}</p><textarea class="in2" id="wt" rows="4" placeholder="${P('Что нужно сделать?','What do you need?')}">${wt}</textarea><button class="wb" id="wg" style="width:100%;margin-top:6px">${P('Скопировать и открыть Telegram','Copy & open Telegram')}</button>`);
$$('#wc button').forEach(b=>b.onclick=()=>{wt=$('#wt').value;sv=+b.dataset.i;dr()});$('#wg').onclick=async()=>{const m=(sv>=0?P('Услуга: ','Service: ')+P(SV[sv][0],SV[sv][1])+'\n':'')+$('#wt').value;try{await navigator.clipboard.writeText(m)}catch(e){}toast(P('Сообщение скопировано','Message copied'));window.open(TG,'_blank');close()}};dr()}
function cmd(){const T=P(['Главная','Каталог','Отзывы','Чат','Контакты','Настройки'],['Home','Catalog','Reviews','Chat','Contacts','Settings']),all=[...TB.map((t,i)=>({t:T[i],k:P('вкладка','tab'),f:()=>go(t)})),{t:P('Прайс','Prices'),k:P('вкладка','tab'),f:()=>go('prices')},{t:P('Оформить заказ','Place an order'),k:P('действие','action'),f:wiz},...EFF.map(e=>({t:P('Эффект: ','Effect: ')+P(e[1],e[2]),k:P('эффект','effect'),f:()=>FX[e[0]]()})),{t:P('Написать в Telegram','Message on Telegram'),k:'Telegram',f:()=>window.open(TG,'_blank')},...SV.map(s=>({t:P(s[0],s[1]),k:P('услуга','service'),f:()=>go('catalog')})),...NU.map(n=>({t:n[0]+' '+P(n[1],n[2]),k:n[3]+'₽',f:()=>{go('catalog');buy(n[0]+' · '+P(n[1],n[2])+' · '+n[3]+'₽')}})),...(ru()?FR:FE).map(f=>({t:f[0],k:'FAQ',f:()=>go('settings')}))];
open(`<h3><span>${P('Поиск','Search')}</span><button class="x" aria-label="Close">${ic('x')}</button></h3><input class="in2" id="cq" autocomplete="off" placeholder="${P('Что найти?','Search anything…')}"><div id="cr"></div>`);
const cr=$('#cr'),q=$('#cq');let s2=0,cu=[];const dr=()=>{const v=q.value.trim().toLowerCase();cu=all.filter(i=>!v||i.t.toLowerCase().includes(v)).slice(0,8);cr.innerHTML=cu.map((i,n)=>`<div class="pr${n==s2?' on':''}" data-n="${n}">${ic('search')}<span>${i.t}</span><small>${i.k}</small></div>`).join('');$$('.pr').forEach(p=>p.onclick=()=>{close();cu[p.dataset.n].f()})};
q.oninput=()=>{s2=0;dr()};q.onkeydown=e=>{if(e.key==='ArrowDown'){s2=Math.min(cu.length-1,s2+1);dr();e.preventDefault()}else if(e.key==='ArrowUp'){s2=Math.max(0,s2-1);dr();e.preventDefault()}else if(e.key==='Enter'&&cu[s2]){close();cu[s2].f()}};dr();q.focus()}
$('#sb').onclick=cmd;$('#ord').onclick=wiz;
$('#vc').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['BEGIN:VCARD\nVERSION:3.0\nFN:Раевский (RaevYoU)\nNICKNAME:RaevYoU\nURL:https://t.me/RaevYoU\nNOTE:Telegram @RaevYoU\nEND:VCARD'],{type:'text/vcard'}));a.download='RaevYoU.vcf';a.click();toast(P('Контакт сохранён','Contact saved'))};
const fx=$('#fxr'),fsr=$('#fsr'),sF=v=>{document.body.style.setProperty('--fx',v/100);S.set('fx',v)},sS=v=>{document.documentElement.style.setProperty('--fs',v/100);S.set('fs',v)};
fx.value=S.get('fx',100);fsr.value=S.get('fs',100);sF(+fx.value);sS(+fsr.value);fx.oninput=()=>sF(+fx.value);fsr.oninput=()=>{sS(+fsr.value);fd=1;mx=0;bd.forEach(b=>b.w=0);fit()};
const T0=document.title;document.addEventListener('visibilitychange',()=>{document.title=document.hidden?'RaevYoU — '+P('вернись','come back'):T0;loop();bk()});
const EFF=[['matrix','Матрица','Matrix'],['snow','Снег','Snow'],['confetti','Конфетти','Confetti'],['warp','Варп','Warp'],['glitch','Глитч','Glitch']];
function fxc(ms,bg,draw){const c=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;z-index:95;pointer-events:none;background:'+bg;c.width=innerWidth;c.height=innerHeight;document.body.append(c);const x=c.getContext('2d'),t0=performance.now();(function f(t){if(t-t0>ms){c.remove();return}draw(x,c.width,c.height,t-t0);requestAnimationFrame(f)})(t0)}
const FX={matrix(){const y=[];let n=0;const g='RAEVYOU01NFTTON$₿Ξ';fxc(5000,'#000c',(x,w,h)=>{if(n++%3)return;while(y.length<Math.floor(w/16))y.push(0);x.fillStyle='#0000001a';x.fillRect(0,0,w,h);x.fillStyle='#fff';x.font='14px monospace';y.forEach((v,i)=>{x.fillText(g[Math.random()*g.length|0],i*16,v*16);y[i]=v*16>h&&Math.random()>.96?0:v+1})})},
snow(){const s=Array.from({length:120},()=>({x:Math.random(),y:Math.random(),r:1+Math.random()*2.5,v:.0015+Math.random()*.003,p:Math.random()*6}));fxc(7000,'transparent',(x,w,h,t)=>{x.clearRect(0,0,w,h);x.fillStyle='#fff';s.forEach(f=>{f.y=(f.y+f.v)%1;x.beginPath();x.arc((f.x+Math.sin(t/900+f.p)*.02)*w,f.y*h,f.r,0,7);x.fill()})})},
confetti(){const p=Array.from({length:140},()=>({x:innerWidth/2,y:innerHeight,vx:(Math.random()-.5)*16,vy:-8-Math.random()*14,r:Math.random()*6,s:3+Math.random()*5,c:Math.random()>.5?'#fff':'#888'}));fxc(3500,'transparent',(x,w,h)=>{x.clearRect(0,0,w,h);p.forEach(q=>{q.vy+=.35;q.x+=q.vx;q.y+=q.vy;q.r+=.2;x.save();x.translate(q.x,q.y);x.rotate(q.r);x.fillStyle=q.c;x.fillRect(-q.s,-q.s/2,q.s*2,q.s);x.restore()})})},
warp(){const s=Array.from({length:160},()=>({a:Math.random()*6.28,d:Math.random()*.2,v:.002+Math.random()*.01}));fxc(3500,'#000a',(x,w,h)=>{x.clearRect(0,0,w,h);x.fillStyle='#000c';x.fillRect(0,0,w,h);x.strokeStyle='#fff';const m=Math.max(w,h);s.forEach(q=>{const d0=q.d;q.d+=q.v*(1+q.d*6);x.lineWidth=1+q.d*2;x.beginPath();x.moveTo(w/2+Math.cos(q.a)*d0*m,h/2+Math.sin(q.a)*d0*m);x.lineTo(w/2+Math.cos(q.a)*q.d*m,h/2+Math.sin(q.a)*q.d*m);x.stroke();if(q.d>1)q.d=0})})},
glitch(){document.body.classList.add('glt');setTimeout(()=>document.body.classList.remove('glt'),1800)}};
function rfx(){$('#fxc').innerHTML=EFF.map(e=>`<button data-e="${e[0]}">${P(e[1],e[2])}</button>`).join('');$$('#fxc button').forEach(b=>b.onclick=()=>FX[b.dataset.e]())}
let lt=0;$('.logo').addEventListener('click',()=>{if(++lt>=5){lt=0;FX.matrix()}setTimeout(()=>lt=0,2000)});
rs();setAnim(anim);setStars(stars);apply();upd();go(VB.includes(location.hash.slice(1))?location.hash.slice(1):'home',1);
})();

/* Supabase reviews and anonymous messaging backend (merged from backend.js). */
/* RaevYoU Supabase client: public publishable key only. */
(() => {
  'use strict';
  const SUPABASE_URL = 'https://qsxlvufosgsdabsykxjx.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_cf8VV0mjDDtC7psZWJd_6g_7_fWErQJ';
  const $ = (s) => document.querySelector(s);
  const dict = {
    ru: {
      namePlaceholder:'Аноним',reviewPlaceholder:'Поделитесь впечатлением…',back:'Назад',reviewsTitle:'Отзывы',live:'АКТИВНО',reviewsSub:'Отзывы публикуются после проверки.',
      leaveReview:'Оставить отзыв',yourName:'Ваше имя',rating:'Оценка',reviewText:'Текст отзыва',sendReview:'Отправить отзыв',
      latestReviews:'Последние отзывы',refresh:'Обновить',loading:'Загрузка отзывов…',noReviews:'Пока нет опубликованных отзывов.',
      reviewSent:'Отзыв отправлен на проверку.',reviewFailed:'Не удалось отправить отзыв. Попробуйте ещё раз.',
      needAuth:'Включите Anonymous Sign-Ins в Supabase Auth, чтобы отправлять отзывы и писать в чат.',
      chatTitle:'Анонимный чат',private:'ПРИВАТНО',chatSub:'Напиши сообщение — ответ появится здесь же. Имя и личные данные указывать не нужно.',
      conversation:'Диалог',connecting:'Подключение…',chatLoading:'Подключаем анонимный чат…',chatPlaceholder:'Напиши сообщение…',
      chatNote:'Не отправляй пароли, адреса и другие личные данные.',connected:'На связи',send:'Отправить',chatFailed:'Не удалось подключить чат.',
      msgFailed:'Не удалось отправить сообщение.',sent:'Отправлено',emptyMsg:'Напиши сообщение, чтобы начать диалог.',
      admin:'Раевский',visitor:'Вы',reply:'Ответ'
    },
    en: {
      namePlaceholder:'Anonymous',reviewPlaceholder:'Share your experience…',back:'Back',reviewsTitle:'Reviews',live:'LIVE',reviewsSub:'Reviews are published after moderation.',
      leaveReview:'Leave a review',yourName:'Your name',rating:'Rating',reviewText:'Review text',sendReview:'Submit review',
      latestReviews:'Latest reviews',refresh:'Refresh',loading:'Loading reviews…',noReviews:'No published reviews yet.',
      reviewSent:'Your review was submitted for moderation.',reviewFailed:'Could not submit the review. Please try again.',
      needAuth:'Enable Anonymous Sign-Ins in Supabase Auth to submit reviews and use chat.',
      chatTitle:'Anonymous chat',private:'PRIVATE',chatSub:'Send a message — the reply will appear here. No name or personal details are needed.',
      conversation:'Conversation',connecting:'Connecting…',chatLoading:'Connecting anonymous chat…',chatPlaceholder:'Write a message…',
      chatNote:'Do not send passwords, addresses, or other personal information.',connected:'Connected',send:'Send',chatFailed:'Could not connect to chat.',
      msgFailed:'Could not send the message.',sent:'Sent',emptyMsg:'Send a message to start the conversation.',
      admin:'RaevYoU',visitor:'You',reply:'Reply'
    }
  };
  let client = null, currentUser = null, conversation = null, channel = null, bootPromise = null, lang = 'ru';

  function t(k){ return (dict[lang] || dict.ru)[k] || k; }
  function setLang(){
    lang = document.documentElement.lang && document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'ru';
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[lang][key]) el.textContent = dict[lang][key];
    });
    const input = $('#rv-chat-input'); if(input) input.placeholder=t('chatPlaceholder');
  }
  function status(el, message){ if(el) el.textContent=message || ''; }
  function escText(value){ return String(value ?? ''); }
  function fmtDate(value){
    try { return new Intl.DateTimeFormat(lang==='ru'?'ru-RU':'en-GB',{dateStyle:'medium'}).format(new Date(value)); }
    catch(_){ return ''; }
  }
  function getClient(){
    if(client) return client;
    if(!window.supabase || !window.supabase.createClient) throw new Error('Supabase SDK unavailable');
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth:{ persistSession:true, autoRefreshToken:true, detectSessionInUrl:true }
    });
    return client;
  }
  async function ensureUser(){
    if(currentUser) return currentUser;
    if(bootPromise) return bootPromise;
    bootPromise=(async()=>{
      const c=getClient();
      const {data:{session},error:sessionError}=await c.auth.getSession();
      if(sessionError) throw sessionError;
      if(session && session.user){currentUser=session.user;return currentUser;}
      const {data,error}=await c.auth.signInAnonymously();
      if(error) throw error;
      currentUser=data.user;
      return currentUser;
    })();
    try{return await bootPromise;}finally{bootPromise=null;}
  }
  async function loadReviews(){
    const list=$('#rv-list'); if(!list) return;
    list.textContent=t('loading');
    try{
      const c=getClient();
      const {data,error}=await c.from('reviews')
        .select('id,author_name,rating,body,reply,reply_admin_name,created_at')
        .eq('status','published').order('created_at',{ascending:false}).limit(40);
      if(error) throw error;
      list.replaceChildren();
      if(!data || !data.length){const e=document.createElement('div');e.className='rv-empty';e.textContent=t('noReviews');list.append(e);return;}
      for(const r of data){
        const card=document.createElement('article');card.className='rv-review';
        const top=document.createElement('div');top.className='rv-review-top';
        const name=document.createElement('div');name.className='rv-author';name.textContent=escText(r.author_name)||'Аноним';
        const date=document.createElement('time');date.className='rv-date';date.textContent=fmtDate(r.created_at);
        top.append(name,date);
        const stars=document.createElement('div');stars.className='rv-stars';stars.textContent='★'.repeat(Math.max(0,Math.min(5,Number(r.rating)||0)))+'☆'.repeat(5-Math.max(0,Math.min(5,Number(r.rating)||0)));
        const body=document.createElement('div');body.className='rv-review-body';body.textContent=escText(r.body);
        card.append(top,stars,body);
        if(r.reply){
          const reply=document.createElement('div');reply.className='rv-reply';
          const label=document.createElement('strong');label.textContent=(r.reply_admin_name||t('admin'))+': ';
          const text=document.createElement('span');text.textContent=escText(r.reply);
          reply.append(label,text);card.append(reply);
        }
        list.append(card);
      }
    }catch(err){list.textContent=err.message || t('reviewFailed');}
  }
  async function submitReview(ev){
    ev.preventDefault();
    const form=$('#rv-form'),button=form.querySelector('button[type="submit"]'),msg=$('#rv-form-status');
    const name=$('#rv-name').value.trim().slice(0,40),body=$('#rv-body').value.trim().slice(0,1200),rating=Number($('#rv-rating').value);
    if(!name || !body || !Number.isInteger(rating) || rating<1 || rating>5) return;
    button.disabled=true;status(msg,'');
    try{
      const user=await ensureUser();
      const {error}=await getClient().from('reviews').insert({
        author_id:user.id,author_name:name,rating,body,status:'pending'
      });
      if(error) throw error;
      form.reset();status(msg,t('reviewSent'));
    }catch(err){
      status(msg,err.message && /anonymous|signup|disabled|not enabled/i.test(err.message) ? t('needAuth') : (err.message||t('reviewFailed')));
    }finally{button.disabled=false;}
  }
  function appendMessage(m){
    const list=$('#rv-chat-messages'); if(!list || !m) return;
    if(list.querySelector(`[data-message-id="${CSS.escape(String(m.id))}"]`)) return;
    const empty=list.querySelector('.rv-empty');if(empty)empty.remove();
    const item=document.createElement('div');item.className='rv-msg '+(m.sender==='visitor'?'visitor':'admin');
    item.dataset.messageId=String(m.id);
    const text=document.createElement('div');text.className='rv-msg-text';text.textContent=escText(m.body);
    const meta=document.createElement('div');meta.className='rv-msg-meta';
    meta.textContent=(m.sender==='visitor'?t('visitor'):(m.admin_name||t('admin')))+' · '+new Date(m.created_at).toLocaleTimeString(lang==='ru'?'ru-RU':'en-GB',{hour:'2-digit',minute:'2-digit'});
    item.append(text,meta);list.append(item);list.scrollTop=list.scrollHeight;
  }
  async function connectChat(){
    const state=$('#rv-chat-state'),list=$('#rv-chat-messages');
    status(state,t('connecting'));
    try{
      const user=await ensureUser(),c=getClient();
      let {data:conv,error:convError}=await c.from('conversations').select('id,alias,status')
        .eq('visitor_id',user.id).order('created_at',{ascending:false}).limit(1).maybeSingle();
      if(convError) throw convError;
      if(!conv){
        const created=await c.from('conversations').insert({visitor_id:user.id}).select('id,alias,status').single();
        if(created.error) throw created.error;
        conv=created.data;
      }
      conversation=conv;
      const {data:messages,error}=await c.from('messages').select('id,conversation_id,sender,admin_name,body,created_at')
        .eq('conversation_id',conversation.id).order('created_at',{ascending:true}).limit(100);
      if(error) throw error;
      list.replaceChildren();
      if(messages && messages.length) messages.forEach(appendMessage);
      else {const empty=document.createElement('div');empty.className='rv-empty';empty.textContent=t('emptyMsg');list.append(empty);}
      status(state,t('connected'));
      if(channel) await c.removeChannel(channel);
      channel=c.channel('visitor-chat-'+conversation.id)
        .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages',filter:'conversation_id=eq.'+conversation.id},payload=>appendMessage(payload.new))
        .subscribe((s)=>{if(s==='SUBSCRIBED')status(state,t('connected'));});
    }catch(err){
      status(state,t('chatFailed'));
      list.replaceChildren();
      const empty=document.createElement('div');empty.className='rv-empty';
      empty.textContent=err.message && /anonymous|signup|disabled|not enabled/i.test(err.message) ? t('needAuth') : (err.message||t('chatFailed'));
      list.append(empty);
    }
  }
  async function sendMessage(ev){
    ev.preventDefault();
    const input=$('#rv-chat-input'),button=$('#rv-chat-form button'),msg=$('#rv-chat-status');
    const body=input.value.trim().slice(0,1500);if(!body || !conversation) return;
    button.disabled=true;status(msg,'');
    try{
      const user=await ensureUser();
      const {data,error}=await getClient().from('messages').insert({
        conversation_id:conversation.id,sender:'visitor',body
      }).select('id,conversation_id,sender,body,created_at').single();
      if(error) throw error;
      input.value='';appendMessage(data);status(msg,t('sent'));
    }catch(err){status(msg,err.message||t('msgFailed'));}
    finally{button.disabled=false;}
  }
  function back(){if(typeof window.go==='function')window.go('home');else location.hash='#home';}
  function init(){
    setLang();
    const reviewForm=$('#rv-form'),chatForm=$('#rv-chat-form');
    if(reviewForm) reviewForm.addEventListener('submit',submitReview);
    if(chatForm) chatForm.addEventListener('submit',sendMessage);
    $('#rv-refresh')?.addEventListener('click',loadReviews);
    document.querySelectorAll('[data-rv-back]').forEach(b=>b.addEventListener('click',back));
    const chatInput=$('#rv-chat-input');if(chatInput)chatInput.placeholder=t('chatPlaceholder');
    loadReviews();
    if(location.hash==='#chat') connectChat();
    const observer=new MutationObserver(()=>{setLang();});
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    document.querySelectorAll('#nav button[data-go="chat"]').forEach(b=>b.addEventListener('click',()=>{if(!conversation)connectChat();}));
    document.querySelectorAll('#nav button[data-go="reviews"]').forEach(b=>b.addEventListener('click',loadReviews));
    window.addEventListener('hashchange',()=>{if(location.hash==='#chat'&&!conversation)connectChat();});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
