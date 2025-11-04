const endpoint = "https://newsapi.org/v2/top-headlines?q=keyword&apiKey=ddf87bd817a84bcda9f4647d375619d7";
const data = await fetch(endpoint);
if(!data.ok) {
    throw new Error('Response status: ${response.status}');
}

const result = await Response.json();
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

function displayItems(news) {
    const item1 = document.querySelector
    (".item1");
    const item2 = document.querySelector
    (".item2");
    const item3 = document.querySelector
    (".item3");
    item1.textContent = news.articles[0];
    item2.textContent = news.articles[1];
    item3.textContent = news.articles[2];
    
}

function displayAnswer(answer) {
    const answerText = document.querySelector
    ('#js-answer-text');
    answerText.textContent = answer;
}

newTrivia()