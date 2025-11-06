const endpoint = "https://newsapi.org/v2/top-headlines?q=breaking&apiKey=ddf87bd817a84bcda9f4647d375619d7";

async function newTrivia() {
    // console.log("Success")
    try {
        const data = await fetch(endpoint);
        if(!data.ok) {
            console.log('AAAAARRGGGGHHHHH AAUUAUUHGHGHGHHAUGUHAGAHUHG')
            throw Error('Response status: bad');
        }  
        //const result = JSON.parse(data.responseText);
        console.log(data.totalResults);
        result = await data.json();
        //const total = json["total"];
        //const items = json["items"];
        console.log(result)
        displayItems(result)
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
    item1.textContent = news.articles[0].title;
    item2.textContent = news.articles[1].title;
    item3.textContent = news.articles[2].title;
    
}

newTrivia()