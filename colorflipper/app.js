const demo = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["red","blue", "green","black"];
//btn , colors[random], colors[random]
demo.addEventListener('click',function(){
    const random = randomNumber();
    console.log("random");
    document.body.style.backgroundColor=colors[random];
    color.textContent =colors[random];
    

});
function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}
//colors ko length refers to the number of arrays declared in that array
//that length is now is the number which is 4 in our case or 0-3
//math.random now multiplies with that colors .length thing to generate random nunber
//queryselector selects that randomly generated number/ position pointed to that part of the array



// const colors = ["green","red", "rgba(133,122,200)","#f15025"];
// const btn = document.getElementById("btn");

// const color  = document.querySelector(".color");
// //query selector selects the span class and play with it
// btn.addEventListener('click', function(){
//     //get random number betwen 0 and 2
//     const randomNumber= getRandomNumber();
//     console.log(randomNumber);
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];

// });
//     function getRandomNumber(){
//         return Math.floor(Math.random()* colors.length);
//     }






























