//DATA
const datas=[
{
    title: "Pizza",
    image: "images/pica.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit, repellendus praesentium soluta qui quia perferendis deserunt ab, in fuga porro voluptate voluptates quaerat, nemo totam ducimus ullam neque iure aperiam sed! Totam tenetur soluta, deleniti ab est, debitis sit suscipit itaque maxime facilis cumque inventore voluptas, veniam quia quo. ",
    category: "salty"

},
{
    title: "Fried Eggs",
    image: "images/veze.jpg",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit, repellendus praesentium soluta qui quia perferendis deserunt ab, in fuga porro voluptate voluptates quaerat, nemo totam ducimus ullam neque iure aperiam sed! Totam tenetur soluta, deleniti ab est, debitis sit suscipit itaque maxime facilis cumque inventore voluptas, veniam quia quo.",
    category: "egg"

},
{
    title: "Dessert",
    image: "images/torte.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit, repellendus praesentium soluta qui quia perferendis deserunt ab, in fuga porro voluptate voluptates quaerat, nemo totam ducimus ullam neque iure aperiam sed! Totam tenetur soluta, deleniti ab est, debitis sit suscipit itaque maxime facilis cumque inventore voluptas, veniam quia quo.",
    category: "dessert"
},
{
    title: "Pancake",
    image: "images/pite.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit, repellendus praesentium soluta qui quia perferendis deserunt ab, in fuga porro voluptate voluptates quaerat, nemo totam ducimus ullam neque iure aperiam sed! Totam tenetur soluta, deleniti ab est, debitis sit suscipit itaque maxime facilis cumque inventore voluptas, veniam quia quo.",
    category: "dessert"

},
{
    title: "Hamburger",
    image: "images/hamburger.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit, repellendus praesentium soluta qui quia perferendis deserunt ab, in fuga porro voluptate voluptates quaerat, nemo totam ducimus ullam neque iure aperiam sed! Totam tenetur soluta, deleniti ab est, debitis sit suscipit itaque maxime facilis cumque inventore voluptas, veniam quia quo.",
    category: "fast-food"

},
{
    title: "Potatoe",
    image: "images/patate.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit, repellendus praesentium soluta qui quia perferendis deserunt ab, in fuga porro voluptate voluptates quaerat, nemo totam ducimus ullam neque iure aperiam sed! Totam tenetur soluta, deleniti ab est, debitis sit suscipit itaque maxime facilis cumque inventore voluptas, veniam quia quo.",
    category: "fast-food"

}


];

let container=document.querySelector('.container');
let hamburger=document.querySelector(".hamburger");
let menu=document.querySelector(".menu");
let x= document.querySelector(".x");
let submit=document.querySelector("#submit");
let categoriesHtml=document.querySelector(".categories");
let display;


//event listeners
hamburger.addEventListener('click', changeClass);
x.addEventListener("click", visible1);
window.addEventListener("DOMContentLoaded", function() {
    display= datas.map( function (data) {

        return `<div class="box">
        <h1>${data.title}</h1>
        <div class="imgClass">
    
    <img src="${data.image}" alt="">
    
        </div>
    <p> ${data.description}...</p>
    <div class="lin"><a href="">Read more...</a></div>
    </div>`
    
 
     });
     display=display.join(""); 
container.innerHTML=display;
    });

//functions

//HAMBURGER
function changeClass() {
    menu.classList.remove("inactive");
menu.classList.add("active");


}

//X
function visible1() {
    menu.classList.remove("active");
    menu.classList.toggle("inactive");
}



submit.addEventListener('click', (e)=> {
    e.preventDefault();
})


let initialCategories=["all"];
let categories=[]

datas.map(data=> {
 initialCategories.push(data.category);



})
categories=new Set(initialCategories) //removes duplicates


categories.forEach(category=> {
var list=document.createElement('li');
list.classList.add("category");
list.innerText=category;
categoriesHtml.appendChild(list);




})

let cat=document.querySelectorAll(".categories .category");
console.log(cat);


cat.forEach(cat=> {

cat.addEventListener('click', ()=> {
if(cat.innerText=="all") {
container.innerHTML=display;
}
else {


 const filtered=datas.filter(data=> data.category===cat.innerText)
let filteredElements=filtered.map(filter=> {
    return `<div class="box">
    <h1>${filter.title}</h1>
    <div class="imgClass">

<img src="${filter.image}" alt="">

    </div>
<p> ${filter.description}...</p>
<div class="lin"><a href="">Lexoni me shume</a></div>
</div>`



})
container.innerHTML=filteredElements;
}






})


})
