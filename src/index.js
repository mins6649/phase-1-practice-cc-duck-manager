// write your code here!
fetch("http://localhost:3000/ducks")
.then(res => res.json())
.then(data => {
    displayDuck(data[0])

    data.forEach(duck =>{
        renderDuckNav(duck)
        
    })
})

const duckNav = document.getElementById("duck-nav");

let duckName = document.getElementById("duck-display-name");
let duckImage = document.getElementById("duck-display-image");
let likeButton = document.getElementById("duck-display-likes");
let currentDuck;

function renderDuckNav(duck){
    let duckImg = document.createElement('img');
    duckImg.src = duck.img_url;
    duckNav.appendChild(duckImg);

    duckImg.addEventListener("click", () => displayDuck(duck));
}

function displayDuck(duck){
    duckName.textContent = duck.name;
    duckImage.src = duck.img_url;
    likeButton.textContent = duck.likes;
    currentDuck = duck;
}

likeButton.addEventListener("click", () => { 
    currentDuck.likes++;
    likeButton.textContent = currentDuck.likes;
});

const form = document.getElementById("new-duck-form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const newDuck ={
        name: e.target["duck-name-input"].value,
        img_url: e.target["duck-image-input"].value,
        likes: 0
    }

    renderDuckNav(newDuck);
    displayDuck(newDuck);
})