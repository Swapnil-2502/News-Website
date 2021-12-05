console.log("This is my index.js file");
// 7931fec379194ac48f3e0e57a10dbf2b

let source = 'bbc-news';
let apikey = '7931fec379194ac48f3e0e57a10dbf2b';

let newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if(this.status === 200){

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles)

        let newsHTML = "";

        articles.forEach(function(element, index) {
            console.log(element, index)

            let news =`
                    <div class="accordion-item">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
                                    </button>
                                </h2>
                                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
                                    <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here </a>  </div>
                                </div>
                    </div>`;
                    newsHTML += news;
        });

        
        newsAccordian.innerHTML = newsHTML;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send();



