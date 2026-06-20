// 선생님께서 원하시는 문제로 자유롭게 수정하실 수 있습니다.
const quizData = [
    {
        question: "1. 미국의 최대 명절 중 하나인 '추수감사절(Thanksgiving Day)'은 언제일까요?",
        options: ["10월 마지막 주 목요일", "11월 넷째 주 목요일", "12월 첫째 주 일요일", "11월 11일"],
        answer: 1 // 컴퓨터는 0부터 세기 때문에 '1'은 두 번째 보기를 의미합니다.
    },
    {
        question: "2. 영국(UK)의 전통 음식으로, 튀긴 생선과 감자튀김이 함께 나오는 요리는?",
        options: ["해기스(Haggis)", "피시 앤 칩스(Fish and Chips)", "로스트 비프", "미트 파이"],
        answer: 1
    },
    {
        question: "3. 호주의 수도는 어디일까요?",
        options: ["시드니(Sydney)", "멜버른(Melbourne)", "캔버라(Canberra)", "브리즈번(Brisbane)"],
        answer: 2
    },
    {
        question: "4. 스코틀랜드의 전통 의상으로, 체크무늬가 특징인 남성용 치마의 이름은?",
        options: ["킬트(Kilt)", "판초(Poncho)", "기모노(Kimono)", "사리(Sari)"],
        answer: 0
    },
    {
        question: "5. 다음 중 영어가 국가의 공식 언어(공용어)가 아닌 나라는?",
        options: ["뉴질랜드", "캐나다", "남아프리카 공화국", "멕시코"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const quizEl = document.getElementById('quiz');
const scoreEl = document.getElementById('score');

// 문제 불러오기 함수
function loadQuestion() {
    optionsEl.innerHTML = ''; // 이전 보기 초기화
    
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

// 정답 확인 함수
function checkAnswer(selectedIndex) {
    const currentQuizData = quizData[currentQuestionIndex];
    
    if (selectedIndex === currentQuizData.answer) {
        score++;
        alert("정답입니다! 훌륭해요! 🎉");
    } else {
        alert(`아쉽네요! 정답은 '${currentQuizData.options[currentQuizData.answer]}' 입니다. 😅`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// 결과 화면 보여주기
function showResult() {
    quizEl.classList.add('hide');
    resultEl.classList.remove('hide');
    scoreEl.innerText = score;
}

// 퀴즈 다시 시작
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizEl.classList.remove('hide');
    resultEl.classList.add('hide');
    loadQuestion();
}

// 웹페이지가 열리면 첫 문제 시작
loadQuestion();
