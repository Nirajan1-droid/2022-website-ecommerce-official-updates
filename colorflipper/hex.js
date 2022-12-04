const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const id  = document.getElementById("btn");
const color = document.querySelector(".color");
//query selector ko bela hamile span use gareko hunxau jun ma content hunxa
//tyo content everythime random kura point hunebela that random pointed thing shifts in that position of the document or we can say that 
//changes everytime the random thing points to another posiiton

id.addEventListener('click',function(){
    
    let hexcol = "#" ;
    for(let i=0;i<6;i++)
    {
        hexcol += hex[randomNumber()];
        

    } 
    color.textContent = hexcol;
    document.body.style.backgroundColor = hexcol;
});

function randomNumber(){
    return Math.floor(Math.random()* hex.length);
}