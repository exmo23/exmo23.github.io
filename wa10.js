

let answerBtn = document.querySelector('#js-tweet');

const endpoint = "https://api.fbi.gov/wanted/v1/list";

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
        const total = json["total"];
        const items = json["items"];
        
        displayItems(items);
    }
    catch(err) {
        
    }
}

function testPrint() {
    console.log('oof ouch owie');
}

function displayItems(wanted) {
    const item1 = document.querySelector
    (".item1");
    const item2 = document.querySelector
    (".item2");
    const item3 = document.querySelector
    (".item3");
    item1.textContent = wanted[0].title;
    item2.textContent = wanted[1].title;
    item3.textContent = wanted[2].title;
    
}

function displayAnswer(answer) {
    const answerText = document.querySelector
    ('#js-answer-text');
    answerText.textContent = answer;
}

newTrivia()