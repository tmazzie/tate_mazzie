// ===== Common elements for both pages =====
document.addEventListener('DOMContentLoaded', () => {
  // Language dropdown
  const langBtn = document.getElementById('langMenuBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', () => {
      langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });
  }

  langDropdown?.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const lang = li.dataset.lang;
      localStorage.setItem('appLang', lang);
      applyTranslations();
      langDropdown.style.display = 'none';
    });
  });

  const translations = {
    pl: {
      welcome: 'Witamy w aplikacji dla obcokrajowców',
      assistantPlaceholder: 'Zapytaj asystenta...',
      menuFirstSteps: 'Pierwsze kroki',
      menuSurvey: 'Ankieta',
      menuKnowledge: 'Baza wiedzy',
      menuHelp: 'Pomoc',
      phonePolice: 'Policja',
      phoneCityHall: 'Urząd Miasta',
      phoneMunicipal: 'Straż Miejska',
      phoneImmigrantCenter: 'Centrum dla Imigrantów',
      sports: 'Sport',
      culture: 'Kultura',
      recreation: 'Wypoczynek',
      hobby: 'Hobby',
      religion: 'Religia',
      uta: 'Uniwersytet Trzeciego Wieku',
      survey1: 'Czy jesteś obcokrajowcem?',
      survey2: 'Jaki jest cel Twojej wizyty?',
      survey3: 'Liczba dzieci:',
      survey4: 'Wykształcenie:',
      tourist: 'Turysta',
      jobStay: 'Chcę zostać (np. praca)',
      zero: '0',
      one: '1',
      two: '2',
      moreThanTwo: 'Więcej niż 2',
      submitBtn: 'Wyślij',
      yes: 'Tak',
      no: 'Nie',
      primary: 'Podstawowe',
      secondary: 'Średnie',
      higher: 'Wyższe',
      language: 'Język',
      home: 'Strona główna',
      title: "Pierwsze kroki — Aplikacja Płock",
      languageButton: "🌐 Język",
      firstSteps: "Pierwsze kroki",
      communication: "Komunikacja",
      publicTransport: "Transport publiczny",
      cityBike: "rower miejski",
      pkm: "PKM",
      kmTimetables: "Rozkłady KM",
      ownTransport: "Transport własny",
      drivingLicense: "Prawo jazdy",
      trafficLaw: "Prawo o ruchu drogowym",
      vehicleRegistration: "Rejestracja pojazdu",
      stay: "Pobyt",
      personalDocuments: "Dokumenty osobiste",
      pesel: "PESEL",
      residenceCard: "Karta pobytu",
      citizenshipVisa: "Obywatelstwo / Wiza",
      services: "Usługi",
      polishNumber: "Polski numer telefonu",
      insurance: "Ubezpieczenie",
      bankAccount: "Konto bankowe",
      workBusiness: "Praca i biznes",
      employment: "Zatrudnienie",
      workPermit: "Pozwolenie na pracę",
      employmentOffice: "Urząd pracy",
      centralWorkDatabase: "Centralna baza danych o pracy",
      businessRegistration: "Rejestracja działalności",
      ceidg: "CEIDG",
      krs: "Krajowy Rejestr Sądowy (KRS)",
      housing: "Mieszkanie",
      apartment: "Mieszkanie",
      buyProperty: "Kup nieruchomość",
      rentProperty: "Wynajem nieruchomości",
      socialHousing: "Mieszkania socjalne",
      collectiveAccommodation: "zakwaterowanie zbiorowe",
      education: "Edukacja",
      schooling: "Szkolnictwo",
      nursery: "Przedszkole",
      primary: "Szkoła podstawowa",
      secondary: "Szkoła średnia",
      adultEducation: "Edukacja dorosłych",
      healthSocial: "Zdrowie i społeczeństwo",
      healthServices: "Usługi zdrowotne",
      legalAid: "Pomoc prawna",
      primaryCare: "Wybór przychodni podstawowej",
      nfzTreatment: "Leczenie NFZ",
      pharmacy: "Apteka",
      pug: "PUG",
      prescription: "Recepta",
      freeTime: "Czas wolny",
      activities: "Aktywności",
      eventsCalendar: "Kalendarz wydarzeń",
      plockArta: "PŁOCK ARTA",
      plockLibrary: "Biblioteka Płocka",
      sports: "Sport",
      culture: "Kultura",
      recreation: "Rekreacja",
      hobby: "Hobby",
      religion: "Religia",
      uta: "Uniwersytet Trzeciego Wieku",
      surveyResults: "Wyniki ankiety",
      foreigner: "Obcokrajowiec",
      purpose: "Cel wizyty",
      children: "Dzieci",
      education: "Wykształcenie",
      stay: "Pobyt",
      kids: "Dzieci",
      kindergarten: "Przedszkole",
      adults: "Dorośli",
      health: "Zdrowie",
      socialAffairs: "Opieka społeczna",
      lookingForJob: "Szukam pracy",
      nhfTreatment: "Gdzie uzyskać leczenie - Narodowy Fundusz Zdrowia",
      assistantPlaceholder: 'Zapytaj asystenta...',

    },
    en: {
      welcome: 'Welcome to the app for foreigners',
      assistantPlaceholder: 'Ask the assistant...',
      menuFirstSteps: 'First Steps',
      menuSurvey: 'Survey',
      menuKnowledge: 'Knowledge Base',
      menuHelp: 'Help',
      phonePolice: 'Police',
      phoneCityHall: 'City Hall',
      phoneMunicipal: 'Municipal Police',
      phoneImmigrantCenter: 'Center for Immigrants',
      sports: 'Sports',
      culture: 'Culture',
      recreation: 'Recreation',
      hobby: 'Hobby',
      religion: 'Religion',
      uta: 'University of the Third Age',
      survey1: 'Are you a foreigner?',
      survey2: 'What is the purpose of your visit?',
      survey3: 'Number of children:',
      survey4: 'Education:',
      tourist: 'Tourist',
      jobStay: 'I want to stay (e.g., work)',
      zero: '0',
      one: '1',
      two: '2',
      moreThanTwo: 'More than 2',
      submitBtn: 'Submit',
      primary: 'Primary',
      secondary: 'Secondary',
      higher: 'Higher',
      tourist: 'Tourist',
      jobStay: 'I want to stay (e.g. job)',
      submitBtn: 'Submit',
      home: 'Home',
      language: 'Language',
      title: "First Steps — Płock App",
      languageButton: "🌐 Language",
      firstSteps: "First Steps",
      communication: "Communication",
      publicTransport: "Public transport",
      cityBike: "city bike",
      pkm: "PKM",
      kmTimetables: "KM timetables",
      ownTransport: "Own transport",
      drivingLicense: "driving license",
      trafficLaw: "traffic law",
      vehicleRegistration: "vehicle registration",
      stay: "Stay",
      personalDocuments: "Personal documents",
      pesel: "PESEL",
      residenceCard: "Residence card",
      citizenshipVisa: "Citizenship / Visa",
      services: "Services",
      polishNumber: "Polish telephone number",
      insurance: "Insurance",
      bankAccount: "Bank account",
      workBusiness: "Work & Business",
      employment: "Employment",
      workPermit: "Work permit",
      employmentOffice: "Employment office",
      centralWorkDatabase: "Central work database",
      businessRegistration: "Business registration",
      ceidg: "CEIDG",
      krs: "National Court Register (KRS)",
      housing: "Housing",
      apartment: "Apartment",
      buyProperty: "Buy property",
      rentProperty: "Rent property",
      socialHousing: "Social housing",
      collectiveAccommodation: "collective accommodation",
      education: "Education",
      schooling: "Schooling",
      nursery: "Nursery / Kindergarten",
      primary: "Primary school",
      secondary: "Secondary school",
      adultEducation: "Adult education",
      healthSocial: "Health & Social",
      healthServices: "Health services",
      legalAid: "Legal aid",
      primaryCare: "Primary care clinic selection",
      nfzTreatment: "NFZ treatment",
      pharmacy: "Pharmacy",
      pug: "PUG",
      prescription: "Prescription",
      freeTime: "Free Time",
      activities: "Activities",
      eventsCalendar: "Events calendar",
      plockArta: "PŁOCK ARTA",
      plockLibrary: "Płock Library",
      sports: "Sports",
      culture: "Culture",
      recreation: "Recreation",
      hobby: "Hobby",
      religion: "Religion",
      uta: "University of the Third Age",
      surveyResults: "Survey Results",
      foreigner: "Foreigner",
      purpose: "Purpose",
      children: "Children",
      education: "Education",
      yes: "Yes",
      no: "No",
      stay: "Stay",
      kids: "Kids",
      kindergarten: "Kindergarten",
      adults: "Adults",
      health: "Health",
      socialAffairs: "Social affairs",
      lookingForJob: "I'm looking for a job",
      nhfTreatment: "Where to get treatment - National Health Fund",
      assistantPlaceholder: 'Ask the assistant...',

    },
    ua: {
      welcome: 'Ласкаво просимо до додатку для іноземців',
      assistantPlaceholder: 'Запитайте помічника...',
      menuFirstSteps: 'Перші кроки',
      menuSurvey: 'Опитування',
      menuKnowledge: 'База знань',
      menuHelp: 'Допомога',
      phonePolice: 'Поліція',
      phoneCityHall: 'Міська рада',
      phoneMunicipal: 'Муніципальна поліція',
      phoneImmigrantCenter: 'Центр для іммігрантів',
      sports: 'Спорт',
      culture: 'Культура',
      recreation: 'Відпочинок',
      hobby: 'Хобі',
      religion: 'Релігія',
      uta: 'Університет третього віку',
      survey1: 'Ви іноземець?',
      survey2: 'Яка мета вашого візиту?',
      survey3: 'Кількість дітей:',
      survey4: 'Освіта:',
      tourist: 'Турист',
      jobStay: 'Хочу залишитися (наприклад, робота)',
      zero: '0',
      one: '1',
      two: '2',
      moreThanTwo: 'Більше ніж 2',
      submitBtn: 'Надіслати',
      yes: 'Так',
      no: 'Ні',
      primary: 'Початкова',
      secondary: 'Середня',
      higher: 'Вища',
      language: 'Мова',
      home: 'Головна',
      title: "Перші кроки — Додаток Плоцьк",
      languageButton: "🌐 Мова",
      firstSteps: "Перші кроки",
      communication: "Комунікація",
      publicTransport: "Громадський транспорт",
      cityBike: "міський велосипед",
      pkm: "PKM",
      kmTimetables: "Розклад KM",
      ownTransport: "Власний транспорт",
      drivingLicense: "Водійське посвідчення",
      trafficLaw: "Правила дорожнього руху",
      vehicleRegistration: "Реєстрація транспортного засобу",
      stay: "Проживання",
      personalDocuments: "Особисті документи",
      pesel: "PESEL",
      residenceCard: "Карта проживання",
      citizenshipVisa: "Громадянство / Віза",
      services: "Послуги",
      polishNumber: "Польський номер телефону",
      insurance: "Страхування",
      bankAccount: "Банківський рахунок",
      workBusiness: "Робота та бізнес",
      employment: "Працевлаштування",
      workPermit: "Дозвіл на роботу",
      employmentOffice: "Бюро праці",
      centralWorkDatabase: "Центральна база даних роботи",
      businessRegistration: "Реєстрація бізнесу",
      ceidg: "CEIDG",
      krs: "Національний судовий реєстр (KRS)",
      housing: "Житло",
      apartment: "Квартира",
      buyProperty: "Купити нерухомість",
      rentProperty: "Оренда нерухомості",
      socialHousing: "Соціальне житло",
      collectiveAccommodation: "колективне проживання",
      education: "Освіта",
      schooling: "Навчання",
      nursery: "Дитячий садок",
      primary: "Початкова школа",
      secondary: "Середня школа",
      adultEducation: "Освіта для дорослих",
      healthSocial: "Здоров’я та соціальні послуги",
      healthServices: "Медичні послуги",
      legalAid: "Юридична допомога",
      primaryCare: "Вибір клініки первинної допомоги",
      nfzTreatment: "Лікування NFZ",
      pharmacy: "Аптека",
      pug: "PUG",
      prescription: "Рецепт",
      freeTime: "Вільний час",
      activities: "Діяльність",
      eventsCalendar: "Календар подій",
      plockArta: "PŁOCK ARTA",
      plockLibrary: "Бібліотека Плоцька",
      sports: "Спорт",
      culture: "Культура",
      recreation: "Відпочинок",
      hobby: "Хобі",
      religion: "Релігія",
      uta: "Університет третього віку",
      surveyResults: "Результати опитування",
      foreigner: "Іноземець",
      purpose: "Мета візиту",
      children: "Діти",
      education: "Освіта",
      stay: "Перебування",
      kids: "Діти",
      kindergarten: "Дитячий садок",
      adults: "Дорослі",
      health: "Здоров’я",
      socialAffairs: "Соціальні послуги",
      lookingForJob: "Шукаю роботу",
      nhfTreatment: "Де отримати лікування — Національний фонд охорони здоров’я",
      assistantPlaceholder: 'Запитайте помічника...',

    },
    ru: {
      welcome: 'Добро пожаловать в приложение для иностранцев',
      assistantPlaceholder: 'Спросите помощника...',
      menuFirstSteps: 'Первые шаги',
      menuSurvey: 'Опрос',
      menuKnowledge: 'База знаний',
      menuHelp: 'Помощь',
      phonePolice: 'Полиция',
      phoneCityHall: 'Городская администрация',
      phoneMunicipal: 'Муниципальная полиция',
      phoneImmigrantCenter: 'Центр для иммигрантов',
      sports: 'Спорт',
      culture: 'Культура',
      recreation: 'Отдых',
      hobby: 'Хобби',
      religion: 'Религия',
      uta: 'Университет третьего возраста',
      survey1: 'Вы иностранец?',
      survey2: 'Цель вашего визита?',
      survey3: 'Количество детей:',
      survey4: 'Образование:',
      tourist: 'Турист',
      jobStay: 'Хочу остаться (например, работа)',
      zero: '0',
      one: '1',
      two: '2',
      moreThanTwo: 'Более 2',
      submitBtn: 'Отправить',
      yes: 'Да',
      no: 'Нет',
      primary: 'Начальное',
      secondary: 'Среднее',
      higher: 'Высшее',
      language: 'Язык',
      home: 'Главная',
      title: "Первые шаги — Приложение Плоцк",
      languageButton: "🌐 Язык",
      firstSteps: "Первые шаги",
      communication: "Коммуникация",
      publicTransport: "Общественный транспорт",
      cityBike: "городской велосипед",
      pkm: "PKM",
      kmTimetables: "Расписание KM",
      ownTransport: "Собственный транспорт",
      drivingLicense: "Водительское удостоверение",
      trafficLaw: "Правила дорожного движения",
      vehicleRegistration: "Регистрация транспортного средства",
      stay: "Проживание",
      personalDocuments: "Личные документы",
      pesel: "PESEL",
      residenceCard: "Карта проживания",
      citizenshipVisa: "Гражданство / Виза",
      services: "Сервисы",
      polishNumber: "Польский номер телефона",
      insurance: "Страховка",
      bankAccount: "Банковский счет",
      workBusiness: "Работа и бизнес",
      employment: "Трудоустройство",
      workPermit: "Разрешение на работу",
      employmentOffice: "Бюро занятости",
      centralWorkDatabase: "Центральная база данных работы",
      businessRegistration: "Регистрация бизнеса",
      ceidg: "CEIDG",
      krs: "Национальный судовой реестр (KRS)",
      housing: "Жильё",
      apartment: "Квартира",
      buyProperty: "Купить недвижимость",
      rentProperty: "Аренда недвижимости",
      socialHousing: "Социальное жильё",
      collectiveAccommodation: "коллективное проживание",
      education: "Образование",
      schooling: "Обучение",
      nursery: "Детский сад",
      primary: "Начальная школа",
      secondary: "Средняя школа",
      adultEducation: "Образование взрослых",
      healthSocial: "Здоровье и социальные услуги",
      healthServices: "Медицинские услуги",
      legalAid: "Юридическая помощь",
      primaryCare: "Выбор поликлиники первичной помощи",
      nfzTreatment: "Лечение NFZ",
      pharmacy: "Аптека",
      pug: "PUG",
      prescription: "Рецепт",
      freeTime: "Свободное время",
      activities: "Мероприятия",
      eventsCalendar: "Календарь событий",
      plockArta: "PŁOCK ARTA",
      plockLibrary: "Библиотека Плоцка",
      sports: "Спорт",
      culture: "Культура",
      recreation: "Отдых",
      hobby: "Хобби",
      religion: "Религия",
      uta: "Университет третьего возраста",
      surveyResults: "Результаты опроса",
      foreigner: "Иностранец",
      purpose: "Цель визита",
      children: "Дети",
      education: "Образование",
      stay: "Проживание",
      kids: "Дети",
      kindergarten: "Детский сад",
      adults: "Взрослые",
      health: "Здоровье",
      socialAffairs: "Социальные услуги",
      lookingForJob: "Ищу работу",
      nhfTreatment: "Где получить лечение — Национальный фонд здравоохранения",
      assistantPlaceholder: 'Спросите помощника...',


    }
  };

  function applyTranslations() {
    const lang = localStorage.getItem('appLang') || 'en';

    // Translate elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.dataset.translate;
      if (translations[lang]?.[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });

    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.dataset.langKey;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key]; // only changes the text inside <span>
      }
    });


    // Translate survey labels and submit button if exists
    const surveyForm = document.getElementById('survey');
    if (surveyForm) {
      const labels = surveyForm.querySelectorAll('label');
      labels.forEach((label, idx) => {
        if (idx === 0) label.firstChild.textContent = translations[lang].survey1;
        else if (idx === 3) label.firstChild.textContent = translations[lang].survey2;
        else if (idx === 6) label.firstChild.textContent = translations[lang].survey3;
        else if (idx === 11) label.firstChild.textContent = translations[lang].survey4;
      });

      const submitBtn = surveyForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.innerText = translations[lang].submitBtn;
    }
  }



  applyTranslations();

  // ===== Hamburger & phone dropdown for index.html =====
  const menuBtn = document.getElementById('hamburger');
  const menuDropdown = document.getElementById('menuDropdown');
  if (menuBtn && menuDropdown) {
    menuBtn.addEventListener('click', () => {
      menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
    });
  }

  const phoneBtn = document.getElementById('phoneBtn');
  const phoneDropdown = document.getElementById('phoneDropdown');
  if (phoneBtn && phoneDropdown) {
    phoneBtn.addEventListener('click', () => {
      phoneDropdown.style.display = phoneDropdown.style.display === 'block' ? 'none' : 'block';
    });
  }

  // ===== Assistant FAB (index.html) =====
  const chatFab = document.getElementById('chatFab');
  if (chatFab) {
    chatFab.addEventListener('click', () => {
      document.getElementById('assistantInput').focus();
    });
  }


const resultContainer = document.getElementById('result');
if (resultContainer) {
  resultContainer.innerHTML = '';      // clear previous results
  resultContainer.style.display = 'none'; // hide container
}

// ===== Survey Handling (questionnaire.html) =====
  const surveyForm = document.getElementById('survey');
  if (surveyForm) {
    surveyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const lang = localStorage.getItem('appLang') || 'en';
      const formData = new FormData(surveyForm);
      let resultHtml = `<h3>${translations[lang].surveyResults || 'Survey Results'}</h3><ul>`;

      formData.forEach((value, key) => {
        let questionText = translations[lang][key] || key;
        resultHtml += `<li><strong>${questionText}:</strong> ${value}</li>`;
      });

      resultHtml += '</ul>';

      const resultContainer = document.getElementById('result');
      if (resultContainer) {
        resultContainer.innerHTML = resultHtml;
        resultContainer.style.display = 'block'; // make sure it's visible
      }

      surveyForm.reset();
    });
  }

  

});
