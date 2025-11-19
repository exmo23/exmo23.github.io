async function breakingNews()
{
    var searchText = "breaking"
    var searchLink = "https://newsapi.org/v2/everything?q=" + searchText + "&apiKey=ddf87bd817a84bcda9f4647d375619d7"
    console.log(searchLink)
    const endpoint = searchLink;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const item1 = document.querySelector
            (".item1");
            const item2 = document.querySelector
            (".item2");
            const item3 = document.querySelector
            (".item3");
            const item4 = document.querySelector
            (".item4");
            const item5 = document.querySelector
            (".item5");
            const item6 = document.querySelector
            (".item6");
            console.log(xhttp.responseType)
            console.log(xhttp)
            console.log(xhttp.response)
            parsed = JSON.parse(xhttp.response)
            item1.textContent = parsed.articles[0].title;
            item1.setAttribute('href', parsed.articles[0].url);
            item2.textContent = parsed.articles[1].title;
            item1.setAttribute('href', parsed.articles[1].url);
            item3.textContent = parsed.articles[2].title;
            item1.setAttribute('href', parsed.articles[2].url);
            item4.textContent = parsed.articles[3].title;
            item1.setAttribute('href', parsed.articles[3].url);
            item5.textContent = parsed.articles[4].title;
            item1.setAttribute('href', parsed.articles[4].url);
            item6.textContent = parsed.articles[5].title;
            item1.setAttribute('href', parsed.articles[5].url);
        }
    };
    xhttp.open("GET", searchLink);
    xhttp.send();
};

breakingNews();


async function searchNews()
{
    var searchText = document.getElementById("searchInput").value;
    var searchLink = "https://newsapi.org/v2/everything?q=" + searchText + "&apiKey=ddf87bd817a84bcda9f4647d375619d7"
    console.log(searchLink)
    const endpoint = searchLink;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const item1 = document.querySelector
            (".item1");
            const item2 = document.querySelector
            (".item2");
            const item3 = document.querySelector
            (".item3");
            const item4 = document.querySelector
            (".item4");
            const item5 = document.querySelector
            (".item5");
            const item6 = document.querySelector
            (".item6");
            console.log(xhttp.responseType)
            console.log(xhttp)
            console.log(xhttp.response)
            parsed = JSON.parse(xhttp.response)
            item1.textContent = parsed.articles[0].title;
            item2.textContent = parsed.articles[1].title;
            item3.textContent = parsed.articles[2].title;
            item4.textContent = parsed.articles[3].title;
            item5.textContent = parsed.articles[4].title;
            item6.textContent = parsed.articles[5].title;
        }
    };
    xhttp.open("GET", searchLink);
    xhttp.send();
};
/*
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
*/