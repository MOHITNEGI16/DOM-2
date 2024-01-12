// fetching part 
const heading = document.getElementById("mainHeading");
const body = document.getElementById("body");
const toggleDiv = document.getElementById("toggle");
const toggleCircle = document.getElementById("circle");
const animeImage = document.getElementById("imageAnime");
const word = document.getElementById("animeWord");
const vidDiv = document.getElementById("darkVid")
const mvideo = document.getElementById("myVideo");

// console.log(mvideo);

// all the functions are here
let condition = false;
toggleDiv.addEventListener("click",()=>{
     condition = condition==false?true:false;


console.log(mvideo);

    if(condition){
        heading.style.color = "white";
        body.style.backgroundColor = "black";
        toggleDiv.style.backgroundColor = "white";
        toggleCircle.style.transform = " translateX(165%)";
        animeImage.style.backgroundImage = "url('https://i.pinimg.com/474x/1c/ad/05/1cad052989892342f1bfb34d3f63bf60.jpg')";
        animeImage.style.backgroundSize = "cover";
        animeImage.style.backgroundPosition = "center";
        word.style.marginTop = "210px";
        word.style.transform = "rotate(0deg)";
        word.innerText = "Welcome To Dark..."
        vidDiv.style.display = "block";
        mvideo.muted = false; 
        mvideo.autoplay = true;
        mvideo.play();

    }
    else{
        heading.style.color = "brown";
        body.style.backgroundColor = "rgb(223, 206, 206)";
        toggleDiv.style.backgroundColor = "black";
        toggleCircle.style.transform = " translateX(2%)";
        animeImage.style.backgroundImage = "url('./anime/83a0f711-6b4a-4ec8-bb95-81a7d726.jpg')";
        animeImage.style.backgroundSize = "cover";
        // animeImage.style.backgroundPosition = "center";
        word.style.marginTop = "60px";
        word.style.transform = "rotate(-10deg)";
        word.innerText = "...Ready For Dark"
        vidDiv.style.display = "none";
        mvideo.muted = true;
        mvideo.autoplay = false;
    }
    
    

});

function currentCondition(){
    
}
