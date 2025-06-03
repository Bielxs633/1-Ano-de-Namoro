/**
 * Objetivo: JS para mostrar meu amor
 * Data: 01/06/25
 * Autor: Gabriel
 * Para: Eduarda
 * Versão: 3.0 (com confetes e quiz)
 **/

'use strict'

// Lista de "Eu Te Amo" em várias línguas
const loveInLanguages = [
    {language: "Português", phrase: "Eu te amo"},
    {language: "Inglês", phrase: "I love you"},
    {language: "Espanhol", phrase: "Te quiero / Te amo"},
    {language: "Francês", phrase: "Je t'aime"},
    {language: "Italiano", phrase: "Ti amo"},
    {language: "Alemão", phrase: "Ich liebe dich"},
    {language: "Japonês", phrase: "愛してる (Aishiteru)"},
    {language: "Chinês", phrase: "我爱你 (Wǒ ài nǐ)"},
    {language: "Coreano", phrase: "사랑해 (Saranghae)"},
    {language: "Russo", phrase: "Я тебя люблю (Ya tebya lyublyu)"},
    {language: "Árabe", phrase: "أحبك (Uhibbuka)"},
    {language: "Hindi", phrase: "मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)"},
    {language: "Holandês", phrase: "Ik hou van je"},
    {language: "Sueco", phrase: "Jag älskar dig"},
    {language: "Turco", phrase: "Seni seviyorum"},
    {language: "Grego", phrase: "Σ' αγαπώ (S'agapó)"},
    {language: "Hebraico", phrase: "אני אוהב אותך (Ani ohev otakh)"},
    {language: "Tailandês", phrase: "ฉันรักคุณ (Chan rak khun)"},
    {language: "Vietnamita", phrase: "Tôi yêu bạn"},
    {language: "Polonês", phrase: "Kocham cię"},
    {language: "Húngaro", phrase: "Szeretlek"},
    {language: "Tcheco", phrase: "Miluji tě"},
    {language: "Dinamarquês", phrase: "Jeg elsker dig"},
    {language: "Finlandês", phrase: "Rakastan sinua"},
    {language: "Norueguês", phrase: "Jeg elsker deg"},
    {language: "Romeno", phrase: "Te iubesc"},
    {language: "Ucraniano", phrase: "Я тебе кохаю (Ya tebe kokhayu)"},
    {language: "Indonésio", phrase: "Aku mencintaimu"},
    {language: "Malaio", phrase: "Saya sayang awak"},
    {language: "Filipino", phrase: "Mahal kita"},
    {language: "Suaíli", phrase: "Nakupenda"},
    {language: "Zulu", phrase: "Ngiyakuthanda"},
    {language: "Havaiano", phrase: "Aloha wau iā ʻoe"},
    {language: "Esperanto", phrase: "Mi amas vin"},
    {language: "Latim", phrase: "Te amo"},
    {language: "Islandês", phrase: "Ég elska þig"},
    {language: "Croata", phrase: "Volim te"},
    {language: "Sérvio", phrase: "Волим те (Volim te)"},
    {language: "Búlgaro", phrase: "Обичам те (Obicham te)"},
    {language: "Armênio", phrase: "Ես սիրում եմ քեզ (Yes sirum em k'ez)"},
    {language: "Georgiano", phrase: "მე შენ მიყვარხარ (Me shen miq'varkhar)"},
    {language: "Persa", phrase: "دوستت دارم (Dooset daram)"},
    {language: "Urdu", phrase: "میں تم سے پیار کرتا ہوں (Main tumse pyar karta hoon)"},
    {language: "Punjabi", phrase: "ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ (Main tuhānūṁ pi'ār kardā hāṁ)"},
    {language: "Bengali", phrase: "আমি তোমায় ভালোবাসি (Ami tomay bhalobashi)"},
    {language: "Tâmil", phrase: "நான் உன்னை காதலிக்கிறேன் (Nāṉ uṉṉai kātalikkiṟēṉ)"},
    {language: "Telugu", phrase: "నేను నిన్ను ప్రేమిస్తున్నాను (Nēnu ninnu prēmistunnānu)"},
    {language: "Cantonês", phrase: "我愛你 (Ngo oi ney)"}
];

// // Quiz - Personalize com suas perguntas
// const quizQuestions = [
//     {
//         question: "Qual é a minha cor favorita?",
//         options: ["Azul", "Roxo", "Vermelho", "Preto"],
//         answer: 1
//     },
//     {
//         question: "Qual é a minha comida preferida?",
//         options: ["Hamburguer", "Strogonoff", "Lasanha", "Batata"],
//         answer: 3
//     },
//     {
//         question: "Qual foi minha posição no basquete?",
//         options: ["Armador", "Ala", "Ala-Armador", "Pivo"],
//         answer: 2
//     },
//     {
//         question: "Qual meu animal favorito?",
//         options: ["Pato", "Capivara", "Ornitorrinco", "Macaco"],
//         answer: 0
//     },
//     {
//         question: "Qual estação do ano eu prefiro?",
//         options: ["Verão", "Outono", "Primavera", "Inverno"],
//         answer: 3
//     },
//     {
//         question: "Qual meu jogo preferido?",
//         options: ["Hollow Knight", "Balatro", "The Last of Us", "Clash Royale"],
//         answer: 2
//     }
// ];

// let currentQuestion = 0;
// let quizScore = 0;

// Funções globais para o botão de Eu Te Amo
window.showLoveInAllLanguages = function() {
    createConfetti(); // Adiciona confetes
    
    const modal = document.getElementById('loveLanguagesModal');
    const grid = document.getElementById('languagesGrid');
    
    grid.innerHTML = '';
    
    loveInLanguages.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${item.language}:</strong> ${item.phrase}`;
        grid.appendChild(div);
    });
    
    modal.style.display = 'flex';
};

window.closeLoveLanguages = function() {
    document.getElementById('loveLanguagesModal').style.display = 'none';
};

// Função para criar confetes
function createConfetti() {
    const colors = ['#ff0000', '#ff1493', '#00bfff', '#32cd32', '#ff8c00', '#ffd700', '#9400d3'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Posição aleatória
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Cor aleatória
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Forma aleatória (quadrado ou círculo)
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        // Duração e atraso aleatórios
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 2) + 's';
        
        document.body.appendChild(confetti);
        
        // Remover após a animação
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// // Funções do Quiz
// function startQuiz() {
//     currentQuestion = 0;
//     quizScore = 0;
//     document.getElementById('quiz-start').style.display = 'none';
//     document.getElementById('quiz-next').style.display = 'inline-block';
//     document.getElementById('quiz-result').textContent = '';
//     showQuestion();
// }

// function showQuestion() {
//     const questionObj = quizQuestions[currentQuestion];
//     document.getElementById('quiz-progress').textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
//     document.getElementById('quiz-question').textContent = questionObj.question;
    
//     const optionsContainer = document.getElementById('quiz-options');
//     optionsContainer.innerHTML = '';
    
//     questionObj.options.forEach((option, index) => {
//         const optionElement = document.createElement('div');
//         optionElement.className = 'quiz-option';
//         optionElement.textContent = option;
//         optionElement.addEventListener('click', () => selectAnswer(index));
//         optionsContainer.appendChild(optionElement);
//     });
    
//     document.getElementById('quiz-next').style.display = 'none';
// }

// function selectAnswer(selectedIndex) {
//     const questionObj = quizQuestions[currentQuestion];
//     const options = document.querySelectorAll('.quiz-option');
    
//     // Desabilitar todas as opções
//     options.forEach(option => {
//         option.style.pointerEvents = 'none';
//     });
    
//     // Marcar a resposta correta
//     options[questionObj.answer].classList.add('correct');
    
//     // Verificar se a resposta está correta
//     if (selectedIndex === questionObj.answer) {
//         quizScore++;
//         document.getElementById('quiz-result').textContent = 'Resposta correta!';
//     } else {
//         options[selectedIndex].classList.add('incorrect');
//         document.getElementById('quiz-result').textContent = `Errou! A resposta correta é: ${questionObj.options[questionObj.answer]}`;
//     }
    
//     document.getElementById('quiz-next').style.display = 'inline-block';
// }

// function nextQuestion() {
//     currentQuestion++;
    
//     if (currentQuestion < quizQuestions.length) {
//         showQuestion();
//     } else {
//         // Fim do quiz
//         showQuizResult();
//     }
// }

// function showQuizResult() {
//     const quizContainer = document.getElementById('quiz-options');
//     quizContainer.innerHTML = '';
//     document.getElementById('quiz-question').textContent = '';
//     document.getElementById('quiz-progress').textContent = '';
//     document.getElementById('quiz-next').style.display = 'none';
    
//     const percentage = Math.round((quizScore / quizQuestions.length) * 100);
//     let message = '';
    
//     if (percentage >= 90) {
//         message = `Nada mais que sua obrigação ${quizScore} de ${quizQuestions.length} (${percentage}%) - É isso ai `;
//     } else if (percentage >= 60) {
//         message = `Hummm e ai pae? ${quizScore} de ${quizQuestions.length} (${percentage}%) - Vamo querer mais ai? `;
//     } else {
//         message = `Oloko ${quizScore} de ${quizQuestions.length} (${percentage}%) - ...`;
//     }
    
//     document.getElementById('quiz-result').innerHTML = `<h3>Resultado do Quiz</h3><p>${message}</p>`;
//     document.getElementById('quiz-start').style.display = 'inline-block';
//     document.getElementById('quiz-start').textContent = 'Fazer Novamente';
// }

document.addEventListener('DOMContentLoaded', function() {
    // Configuração da data do próximo aniversário
    const now = new Date();
    let nextYear = now.getFullYear() + 1;
    
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    if (currentMonth < 5 || (currentMonth === 5 && currentDay < 13)) {
        nextYear = now.getFullYear();
    }
    
    const anniversaryDate = new Date(nextYear, 5, 13);
    
    // Atualiza a contagem
    function updateCountdown() {
        const now = new Date();
        const diff = anniversaryDate - now;
        
        if (diff <= 0) {
            anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
            updateCountdown();
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Animação de corações
    const heartsContainer = document.querySelector('.hearts-animation');
    
    function createHeart() {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '0';
        heart.style.opacity = '0';
        heart.style.animation = `float-up ${Math.random() * 3 + 2}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createHeart, 300);
    
    // Estilos para animação dos corações
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de digitação para o poema
    const poemLines = document.querySelectorAll('.poem p');
    poemLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }, index * 1500);
    });
    
    // Mensagens de amor
    const loveMessages = [
        "Você é a pessoa mais incrível que já conheci!",
        "Meu coração bate mais forte quando estou com você",
        "Cada momento ao seu lado é especial",
        "Você me faz a pessoa mais feliz do mundo",
        "Nada se compara ao seu sorriso",
        "Você é o Ctrl+C no meu coração ( não tem como apagar! )",
        "Meu coração escolheu você",
        "Até meu Wi-Fi fica com inveja do nossa conexão!",
        "Você + Eu = <3 ( Melhor algoritmo de todos! )",
        "Nem o Ctrl+Z desfaz o que eu sinto por você."
    ];
    
    function showRandomMessage() {
        const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        const notification = document.createElement('div');
        notification.className = 'love-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 1000);
        }, 3000);
    }
    
    setInterval(showRandomMessage, 10000);

    // Fecha o modal ao clicar fora do conteúdo
    document.addEventListener('click', function(event) {
        const modal = document.getElementById('loveLanguagesModal');
        if (event.target === modal) {
            closeLoveLanguages();
        }
    });
    
    // Inicializar quiz
    const quizStartBtn = document.getElementById('quiz-start');
    const quizNextBtn = document.getElementById('quiz-next');
    
    quizStartBtn.addEventListener('click', startQuiz);
    quizNextBtn.addEventListener('click', nextQuestion);
});