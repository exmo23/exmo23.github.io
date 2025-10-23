let triviaBtn = document.querySelector("#js-new-quote").
addEventListener('click', newTrivia);

let answerBtn = document.querySelector('#js-tweet');

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function newTrivia() {
    // console.log("Success")
    try {
        const answerText = document.querySelector
        ('#js-answer-text');
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        answerText.textContent = " ";
        const json = await response.json();
        console.log(json);
        const answer = json['answer'];
        const question = json['question'];
        displayTrivia(question);
        answerBtn.addEventListener('click', function(){answerText.textContent = answer;});
    }
    catch(err) {
        
    }
}

function testPrint() {
    console.log('oof ouch owie');
}

function displayTrivia(question) {
    const questionText = document.querySelector
    ('#js-quote-text');
    questionText.textContent = question;
}

function displayAnswer(answer) {
    const answerText = document.querySelector
    ('#js-answer-text');
    answerText.textContent = answer;
}

newTrivia()