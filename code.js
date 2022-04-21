let newsAPI="http://api.mediastack.com/v1/news?countries=usin&access_key=8efc04ca68a77e845266d8c85cb64ef2";
let dummyImage="dummy.png";

let app=document.querySelector(".app");
let screen ={
    main:app.querySelector(".main-screen"),
    news:app.querySelector(".news-screen")
};
let catogaries = ["Generel","Business","Technology","Entairtainment","health","Science","Sports"];

for(let i=0;i<catogaries.length;i++){
    let div =document.createElement("div");
    div.innerText=catogaries[i];
    div.addEventListener("click",function(){

screen.main.querySelector(".catogaries.active").classList.remove("active");

div.classList.add("active");
fetchCatogaryNews(catogaries[i]);
});

if(i==0){
    div.classList.add("active");
    fetchCatogaryNews(catogaries[i]);
}
screen.main.querySelector(".catagories").appendChild(div);
}

async function fetchCatogaryNews(catogary){
try {
    let res=await fetch (newsAPI + catogary.lowercase());
    let data =await res.json();
    let news= data.data;

 for(let i=0;i<news.length;i++){
div=document.childElement("div");

div.classList.add("item");
div.addEventListener("click",function(){
    showFullNews(news[i]);
 });

 div.innerHTML =`
 <div class="thumbnail">
 <img src=${news[i].image||dummyImage}>
 </div>
 <div class="detail">
     <h2>${news[i].title}</h2>
     <p>${news[i].description}</p>
 </div>`;

 screen.main.querySelector(".news-list").appendChild(div)
 } }
 catch(msg){}
}