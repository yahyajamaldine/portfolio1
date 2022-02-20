const mediumarticles='https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yahyajamaldine';

const MAX_ARTICLES=10;
const article_item=document.querySelectorAll('.article_item');
const article_item_image=document.querySelectorAll('.article_item_image');
const article_item_textPar=document.querySelectorAll('.article_item_text p:first-of-type');
const article_item_date=document.querySelectorAll('.article_item_date');
let Array_Link=new Array(MAX_ARTICLES);

fetch(mediumarticles,{headers:{Accept:"application/json"}})
.then((res) => res.json())
.then((data) => data.items.filter((item) => item.title.length > 0))
.then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
.then((articles)=>{
  articles.map((article,index)=>{
        article_item_image[index].style.backgroundImage="url('"+article.thumbnail+"')";
        article_item_textPar[index].textContent=article.title;
        let datePub=new Date(article.pubDate);
        datePub=datePub.toDateString();
        article_item_date[index].textContent=datePub;
        Array_Link[index]=article.guid;
        article_item[index].addEventListener('click',()=>{
            open(Array_Link[index]);
        })
    })
  

})
.catch((error)=>console.log(error));


/*pubDate*/

/*article_item_image.style.backgroundImage = "url('https://cdn-images-1.medium.com/max/2600/0*yrtLYFNQ3AuKb7to')";*/
 

