const translations = {
  ru: {
    subtitle:"Личная страница · TON · Telegram NFT", identity:"Личность", realname:"Раевский", nickname:"Никнейм", age:"Возраст", telegram:"Юзернейм TG", about:"Обо мне",
    aboutText1:"Привет! Я — Раевский. Раньше занимался OSINT, SWAT и другими проектами с комьюнити. Недавно начал интересоваться криптовалютой, инвестициями и NFT-подарками Telegram. Сейчас сосредоточен на этой сфере и постепенно развиваю новые направления. В будущем, возможно, займусь обучающими материалами, но пока на это не хватает времени. Большую часть дня я провожу в Telegram, поэтому могу быть занят и не всегда отвечать сразу.",
    aboutText2:"В сфере криптовалюты я нахожусь почти 1,5 года. Сейчас в основном изучаю рынок и работаю с NFT-подарками Telegram. Двигаюсь постепенно — дальше больше.",
    servicesEyebrow:"НАПРАВЛЕНИЯ", otherServices:"Прочие услуги", serviceNumbers:"Покупка физ./вирт. номеров", serviceNft:"Продажа NFT", serviceTon:"Информация о TON-кошельках", serviceExchange:"Обзор криптобирж",
    numbersEyebrow:"КАТАЛОГ", numbersTitle:"Покупка физических и виртуальных номеров", numberType:"Тип", price:"Стоимость", from300:"от 300 ₽", from100:"от 100 ₽",
    numbersNote:"Есть и другие варианты номеров. Наличие, условия и подробности уточняйте у партнёра — ссылка на его профиль находится внизу страницы.",
    privateNote:"По остальным вопросам и услугам пишите RaevYoU в личные или анонимные сообщения.",
    nftTitle:"NFT-подарки Telegram", nftDescription:"Информация и помощь по направлениям, связанным с цифровыми подарками.",
    nftEstimate:"Оценка", nftEstimateText:"Ориентировочная оценка подарков и их особенностей.", nftBuy:"Скупка", nftBuyText:"Обсуждение предложений по покупке NFT-подарков.", nftSell:"Продажа", nftSellText:"Помощь с информацией о продаже подарков.", nftSwap:"Обмен", nftSwapText:"Обсуждение вариантов обмена NFT-подарков.",
    disclaimer:"Информация на сайте носит ознакомительный характер. Стоимость цифровых активов может меняться; сделки связаны с риском.", linksTitle:"Ссылки и связь", partner:"Партнёр", channel:"Канал", stars:"Дешёвые Stars", reviews:"Отзывы", contact:"Связь"
  },
  en: {
    subtitle:"Personal page · TON · Telegram NFT", identity:"Identity", realname:"Raevsky", nickname:"Nickname", age:"Age", telegram:"Telegram username", about:"About me",
    aboutText1:"Hi! I'm Raevsky. I previously worked with OSINT, SWAT and other community projects. More recently, I've become interested in cryptocurrency, investing and Telegram NFT gifts. I'm now focusing on this area and gradually developing new directions. I may create educational materials in the future, but I don't have enough time for that yet. I spend much of my day on Telegram, so I may be busy and not always reply immediately.",
    aboutText2:"I've been interested in cryptocurrency for almost 1.5 years. At the moment, I'm mainly exploring the market and working with Telegram NFT gifts. One step at a time — more to come.",
    servicesEyebrow:"DIRECTIONS", otherServices:"Other services", serviceNumbers:"Physical / virtual numbers", serviceNft:"NFT sales", serviceTon:"TON wallet information", serviceExchange:"Crypto exchange overview",
    numbersEyebrow:"CATALOG", numbersTitle:"Physical and virtual numbers", numberType:"Type", price:"Price", from300:"from ₽300", from100:"from ₽100",
    numbersNote:"Other number options may be available. Please ask the partner about availability and terms — their profile is linked at the bottom of the page.",
    privateNote:"For other questions and services, contact RaevYoU via direct or anonymous messages.",
    nftTitle:"Telegram NFT gifts", nftDescription:"Information and assistance related to digital gifts.",
    nftEstimate:"Valuation", nftEstimateText:"Indicative assessment of gifts and their features.", nftBuy:"Buying", nftBuyText:"Discussing offers to purchase NFT gifts.", nftSell:"Selling", nftSellText:"Information and assistance related to selling gifts.", nftSwap:"Exchange", nftSwapText:"Discussing possible NFT gift exchanges.",
    disclaimer:"This website is for informational purposes only. Digital asset values can change and transactions involve risk.", linksTitle:"Links & contact", partner:"Partner", channel:"Channel", stars:"Affordable Stars", reviews:"Reviews", contact:"Contact"
  }
};

const titleText = "info or RaevYoU | Раевский";
const titleNode = document.getElementById("typed-title");
let typeIndex = 0;
function typeTitle() {
  if (typeIndex < titleText.length) {
    titleNode.textContent += titleText.charAt(typeIndex++);
    setTimeout(typeTitle, 1000 / titleText.length);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  typeTitle();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  try { localStorage.setItem("raevyou-lang", lang); } catch {}
}
function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  document.querySelectorAll("[data-theme]").forEach(btn => btn.classList.toggle("active", btn.dataset.theme === theme));
  document.querySelector('meta[name="theme-color"]').content = theme === "light" ? "#f3f4f7" : "#0b0c10";
  try { localStorage.setItem("raevyou-theme", theme); } catch {}
}
document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
document.querySelectorAll("[data-theme]").forEach(btn => btn.addEventListener("click", () => setTheme(btn.dataset.theme)));
let savedLang = "ru", savedTheme = "dark";
try { savedLang = localStorage.getItem("raevyou-lang") || "ru"; savedTheme = localStorage.getItem("raevyou-theme") || "dark"; } catch {}
setLanguage(savedLang);
setTheme(savedTheme);
