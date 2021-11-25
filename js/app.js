const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const day = document.getElementById("day");
const dayOfTheYear = document.getElementById("dayOfTheYear");
const weekNumber = document.getElementById("weekNumber");
const container = document.querySelector(".container");
const currentTimezone = document.getElementById("currentTimezone");
const timesOfDay = document.getElementById("timesOfDay");
const more = document.getElementById("more");
const moreText = document.querySelector(".more__text");
const quotesActions = document.getElementById("quotesActions");
const quotesWords = document.getElementById("quotesWords");
const quotesAuthor = document.getElementById("quotesAuthor");

quotesActions.addEventListener("click", renderQuotes);

more.addEventListener("click", () => {
  if (container.classList.contains("menu-open")) {
    moreText.textContent = "MORE";
    container.classList.remove("menu-open");
  } else {
    moreText.textContent = "LESS";
    container.classList.add("menu-open");
  }
});

currentTimezone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
function renderDay(currentDay) {
  if (currentDay == 0) {
    day.textContent = 7;
  } else if (currentDay >= 1 && currentDay <= 6) {
    day.textContent = currentDay;
  } else {
    day.textContent = "error";
  }
}
function renderHours(timeHours) {
  hours.textContent = timeHours;
  if (timeHours >= 6 && timeHours <= 16) {
    container.classList.remove("dark");
  } else {
    container.classList.add("dark");
  }
  if (timeHours >= 6 && timeHours <= 10) {
    timesOfDay.textContent = "MORNING";
  } else if (timeHours >= 11 && timeHours <= 16) {
    timesOfDay.textContent = "DAY";
  } else if (timeHours >= 17 && timeHours <= 22) {
    timesOfDay.textContent = "EVENING";
  } else {
    timesOfDay.textContent = "NIGHT";
  }
}
function renderMinutes(minute) {
  if (minute >= 1 && minute < 10) {
    minutes.textContent = "0" + minute;
  } else if (minute === 0) {
    minutes.textContent = "00";
  } else {
    minutes.textContent = minute;
  }
}
function getTime() {
  let time = new Date();
  renderMinutes(time.getMinutes());
  renderDay(time.getDay());
  renderHours(time.getHours());
  var oneJan = new Date(time.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((time - oneJan) / (24 * 60 * 60 * 1000));
  dayOfTheYear.textContent = numberOfDays;
  let weekResult = Math.ceil((time.getDay() + 1 + numberOfDays) / 7);
  weekNumber.textContent = weekResult - 1;
}
setInterval(getTime, 1000);

function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "./audio.mp3"; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  audio.volume = 0.1;
}
soundClick();

function renderQuotes() {
  const quotes = [
    {
      text: "Суть современного мира: самый умный получил по морде от самого сильного по заказу самого богатого.",
      author: "Джокер (Joker) (2012)",
    },
    {
      text: "Странно, тут заперто... Как будто нас уже ждали.",
      author: "Барт Симпсон (Bart Simpson)",
    },
    {
      text: "Порадуй меня. Или хотя бы не сильно расстрой.",
      author: "Эйб Симпсон (Abe Simpson)",
    },
    {
      text: "Я знала, что ты забудешь купить мне подарок, поэтому мой подарок тебе — это твой подарок мне.",
      author: "Мардж Симпсон (Marge Simpson)",
    },
    {
      text: "Я сделаю для тебя все, что угодно... если это не слишком сложно.",
      author: "Гомер Симпсон (Homer Simpson)",
    },
    {
      text: "Наш брак основан на лжи, но также на лжи основаны другие прекрасные вещи как религия и история Америки.",
      author: "Гомер Симпсон (Homer Simpson)",
    },
    {
      text: "Еще один день на работе — ещё одна украденная ручка.",
      author: "Гомер Симпсон (Homer Simpson)",
    },
    {
      text: "Если женщина говорит мужчине, что он самый умный, значит, она понимает, что второго такого дурака она не найдет.",
      author: "Фаина Раневская",
    },
    {
      text: "Знаете это чувство: когда стоишь вот так, на самом краю обрыва — так и тянет прыгнуть?... У меня его нет.",
      author:
        "Пираты Карибского моря: На странных берегах",
    },
    {
      text: "Он желает Жемчужину! Капитану Тернеру нужна Жемчужина! А тебя грызет совесть! А ты со своим советом братства! Хоть кто-то спасал меня потому, что соскучился?!",
      author: "Пираты Карибского моря: На краю Света ",
    },
    {
      text: "Друзья, не бойтесь! С Тиа Дальмой я давно в дружбе, не разольешь водой! Мы с ней как брат с сестрой. Были. В прошлом. Давно...",
      author: "Пираты Карибского моря: Сундук мертвеца",
    },
    {
      text: "Плавание – это не спорт. Плавание – это способ не утонуть.",
      author: "Джордж Карлин",
    },
    {
      text: "Странная вещь: Дональд Дак не надевал штанов, но, выходя из душа, обвязывался полотенцем... Спрашивается, почему?",
      author: "Друзья (Friends)",
    },
    {
      text: "Женщина, конечно, умнее. Вы когда-нибудь слышали о женщине, которая бы потеряла голову только от того, что у мужчины красивые ноги?      ",
      author: "Фаина Раневская",
    },
    {
      text: "Мы, женщины, любим искренних мужчин, которые говорят о нас то, что мы думаем.",
      author: "Дороти Паркер",
    },
    {
      text: "У меня такая безупречная репутация, что меня уже давно пора скомпрометировать.",
      author: "Служебный роман",
    },
    {
      text: "Мне нужна его кепочка. А ещё власть над миром. Но сначала кепочка.",
      author: "Хельга Патаки",
    },
  ];
  const quotesNumber = (Math.random() * quotes.length).toFixed();

  quotesWords.textContent = quotes[quotesNumber].text;
  quotesAuthor.textContent = quotes[quotesNumber].author;
}
renderQuotes();
window.onload = function () {
  const o = ymaps.geolocation;
  document.getElementById("city").innerHTML = o.city;
  document.getElementById("country").innerHTML = o.country;
};
