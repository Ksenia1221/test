const questions = [
  {
    question:
      "Когда была создана Европейская экономическая комиссия ООН (ЕЭК)?",
    answers: [
      { text: "1945 г.", correct: false },
      { text: "1947 г.", correct: true },
      { text: "1951 г.", correct: false },
      { text: "1960 г.", correct: false },
    ],
  },
  {
    question: "Какова главная задача ЕЭК ООН в области стандартизации?",
    answers: [
      { text: "Разработка новых экономических теорий", correct: false },
      {
        text: "Определение приоритетов в области стандартизации на правительственном уровне ",
        correct: true,
      },
      {
        text: "Проведение международных экономических форумов",
        correct: false,
      },
      { text: "Обучение специалистов в области экономики", correct: false },
    ],
  },
  {
    question: "Какую цель преследует Перечень ЕЭК ООН по стандартизации?",
    answers: [
      { text: "Установление новых торговых соглашений", correct: false },
      {
        text: "Помощь правительствам в решении проблем национальной стандартизации",
        correct: true,
      },
      {
        text: "Создание новых международных организаций  ",
        correct: false,
      },
      { text: "Проведение ежегодных конференций ", correct: false },
    ],
  },
  {
    question:
      "Какова основная цель Продовольственной и сельскохозяйственной организации ООН (ФАО)?",
    answers: [
      { text: "Установление международных стандартов", correct: false },
      {
        text: "Проведение международных конференций по экологии",
        correct: false,
      },
      {
        text: "Разработка новых технологий для сельского хозяйства",
        correct: false,
      },
      {
        text: "Содействие подъему всеобщего благосостояния через повышение уровня питания и жизни народов",
        correct: true,
      },
    ],
  },
  {
    question: "Какова основная цель «Кодекса Алиментариус»?",
    answers: [
      {
        text: "Разработка новых технологий для сельского хозяйства  ",
        correct: false,
      },
      {
        text: " Координация работ по стандартизации продуктов питания и защита потребителей",
        correct: true,
      },
      {
        text: "Проведение международных конференций по экологии",
        correct: false,
      },
      {
        text: "Установление цен на продукты питания",
        correct: false,
      },
    ],
  },
  {
    question:
      "Какое количество международных стандартов было принято Комиссией ФАО/ВОЗ за время её деятельности?",
    answers: [
      {
        text: "Более 300 ",
        correct: true,
      },
      {
        text: "Более 200",
        correct: false,
      },
      {
        text: "Более 100",
        correct: false,
      },
      {
        text: "Более 400",
        correct: false,
      },
    ],
  },
  {
    question:
      "Какой орган ЕЭК является основным рабочим органом по вопросам стандартизации?",
    answers: [
      {
        text: "Комиссия по транспорту",
        correct: false,
      },
      {
        text: "Комитет по сельскому хозяйству",
        correct: false,
      },
      {
        text: "Группа по вопросам политики в области стандартизации",
        correct: true,
      },
      {
        text: "Рабочая группа по углю ",
        correct: false,
      },
    ],
  },
  {
    question: "Что такое ФАО?",
    answers: [
      {
        text: "Федеральное агентство по охране окружающей среды",
        correct: false,
      },
      {
        text: "Всемирная организация здравоохранения",
        correct: false,
      },
      {
        text: "Продовольственная и сельскохозяйственная организация ООН",
        correct: true,
      },
      {
        text: "Международный валютный фонд  ",
        correct: false,
      },
    ],
  },
  {
    question: "Цель международной стандартизации - это ...",
    answers: [
      {
        text: "устранение технических барьеров в торговле",
        correct: true,
      },
      {
        text: "привлечение предприятий (организаций) к обязательному участию в  стандартизации  ",
        correct: false,
      },
      {
        text: "упразднение национальных стандартов",
        correct: false,
      },
      {
        text: "разработка самых высоких требований",
        correct: false,
      },
    ],
  },
  {
    question: "Международные стандарты ИСО для стран-участниц имеют статус: ",
    answers: [
      {
        text: "обязательный",
        correct: false,
      },
      {
        text: "рекомендательный",
        correct: true,
      },
      {
        text: "",
        correct: false,
      },
      {
        text: "",
        correct: false,
      },
    ],
  },
  {
    question: "Какие из перечисленных товаров – объекты стандартизации МЭК",
    answers: [
      {
        text: "медь",
        correct: false,
      },
      {
        text: "диэлектрические материалы",
        correct: true,
      },
      {
        text: "трансформаторы",
        correct: true,
      },
      {
        text: "",
        correct: false,
      },
    ],
  },
  {
    question:
      "Вас интересуют требования международных стандартов к питательной  ценности пищевых продуктов. К какому документу вы обратитесь: ",
    answers: [
      {
        text: "Международным стандартам ИСО",
        correct: false,
      },
      {
        text: "«Кодексу Алиментариус» ФАО/ВОЗ",
        correct: true,
      },
      {
        text: "Перечню сертифицированных в РФ пищевых товаров",
        correct: false,
      },
      {
        text: "",
        correct: false,
      },
    ],
  },
  {
    question: "Главная задача ЕЭК ООН в области стандартизации ",
    answers: [
      {
        text: "содействие заключению международного соглашения по основным пищевым стандартам",
        correct: false,
      },
      {
        text: "развитию служб здравоохранения, профилактике болезней и борьбе с ними,  созданию широкого круга кадров здравоохранения, оздоровлению окружающей  среды",
        correct: false,
      },
      {
        text: "разработке основных направлений политики по стандартизации на прави- тельственном уровне и определении приоритетов в этой области  ",
        correct: true,
      },
      {
        text: "",
        correct: false,
      },
    ],
  },
  {
    question:
      "К компетенции Всемирной торговой организации (ВТО) не относится… ",
    answers: [
      {
        text: "создание и развитие эффективной службы здравоохранения, оздоровления  окружающей среды",
        correct: true,
      },
      {
        text: "соглашение по тарифам и торговле  ",
        correct: false,
      },
      {
        text: "защита прав интеллектуальной собственности",
        correct: false,
      },
      {
        text: "инвестиционная деятельность",
        correct: false,
      },
    ],
  },
  {
    question: "Европейские стандарты разрабатывает (ют)...",
    answers: [
      {
        text: "национальные организации стран ЕС ",
        correct: false,
      },
      {
        text: "европейский комитет по стандартизации",
        correct: true,
      },
      {
        text: "региональные организации",
        correct: false,
      },
      {
        text: "ведомственные организации ",
        correct: false,
      },
    ],
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(questions);

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Далее";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  const totalErrors = questions.length - score; // Количество ошибок

  let grade; // Переменная для хранения оценки

  // Определяем оценку в зависимости от количества ошибок
  if (totalErrors === 0) {
    grade = 5; // Все правильно
  } else if (totalErrors <= 2) {
    grade = 4; // 1-2 ошибки
  } else if (totalErrors === 6) {
    grade = 3; // 6 ошибок
  } else {
    grade = 2; // Больше 6 ошибок
  }

  // Выводим сообщение о счете и оценке
  questionElement.innerHTML = `Твой счет ${score} из ${questions.length}! Оценка: ${grade}`;
  nextButton.innerHTML = "Начать заново";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
