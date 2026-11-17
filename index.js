const questions = [
  {
    id: 1,
    text: '당신은 새로운 사람을 만나면 자신을 소개하는 것을 좋아하나요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 2,
    text: '당신은 자주 계획을 세우는 편인가요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 3,
    text: '당신은 논쟁이나 불화를 싫어하나요?',
    yes: 'F',
    no: 'T',
  },
  {
    id: 4,
    text: '당신은 새로운 경험을 추구하나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 5,
    text: '당신은 복잡한 문제를 해결하는 것을 좋아하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 6,
    text: '당신은 대부분의 사람들이 당신을 좋아하는 편인가요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 7,
    text: '어떤 일을 처리할 때, 빠르게 결정하는 것이 중요한가요?',
    yes: 'P',
    no: 'J',
  },
  {
    id: 8,
    text: '당신은 자신이 하는 일에 대해 열정을 느끼나요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 9,
    text: '당신은 대부분의 상황에서 논리적으로 생각하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 10,
    text: '당신은 쉽게 스트레스를 받나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 11,
    text: '당신은 대부분의 시간을 집에서 보내는 것을 좋아하나요?',
    yes: 'I',
    no: 'E',
  },
  {
    id: 12,
    text: '새로운 아이디어나 가능성을 찾아보는 것이 즐겁나요?',
    yes: 'N',
    no: 'S',
  },
];

const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

let currentQuestionIndex = 0;
const answers = [];

function renderQuestion() {
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
  questionElement.textContent = questions[currentQuestionIndex].text;
}

function calculateMbti() {
  const eCount = answers.filter(answer => answer === 'E').length;
  const iCount = answers.filter(answer => answer === 'I').length;

  const nCount = answers.filter(answer => answer === 'N').length;
  const sCount = answers.filter(answer => answer === 'S').length;

  const tCount = answers.filter(answer => answer === 'T').length;
  const fCount = answers.filter(answer => answer === 'F').length;

  const jCount = answers.filter(answer => answer === 'J').length;
  const pCount = answers.filter(answer => answer === 'P').length;

  const mbti =
    (eCount >= iCount ? 'E' : 'I') +
    (nCount >= sCount ? 'N' : 'S') +
    (tCount >= fCount ? 'T' : 'F') +
    (jCount >= pCount ? 'J' : 'P');

  localStorage.setItem('mbti_result', mbti);

  window.location.href = 'result.html';
}

yesButton.addEventListener('click', () => {
  answers.push(questions[currentQuestionIndex].yes);

  if (currentQuestionIndex === questions.length - 1) {
    calculateMbti();
    return;
  }

  currentQuestionIndex++;
  renderQuestion();
});

noButton.addEventListener('click', () => {
  answers.push(questions[currentQuestionIndex].no);

  if (currentQuestionIndex === questions.length - 1) {
    calculateMbti();
    return;
  }

  currentQuestionIndex++;
  renderQuestion();
});

renderQuestion();
