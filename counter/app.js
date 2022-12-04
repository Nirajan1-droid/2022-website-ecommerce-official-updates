
// const dec = document.getElementById("decrease");
// const inc = document.getElementById("increase");
// const reset = document.getElementById("reset");


let count = 0;
const btns = document.querySelectorAll(".btn");
const counted = document.querySelector("#counted");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            if(count>0){
            count--;}
            else{
                count;
            }

        }
        else if(styles.contains("increase")){
            count++;

        }
        else{
            count =0;
        }
        counted.textContent = count;
    })
//xuteko kura haru: queryselector is accessing id of span and 
//to select btn decrease/increase/reset queryselectorAll is used where .btn is used
//queryselector uses css matching way to search for that exact name ie. btn and along with the other entities attached to it
//btns ma selectorAll(btn) halera
//btns.forEach(function(btn){
   // btn.addEventListner('click',function(e){
//const a = e.currentTarget.classList;
//
   //})
// })

    
});


  

// dec.addEventListener("click",function(){
//     if(count > 0){
//         count--;
//     }
//     else{
//     count;
//     }
//     counted.textContent = count;
// });
// inc.addEventListener("click",function(){
    
//     count ++;
    
//     counted.textContent = count;
// });
// reset.addEventListener("click",function(){
    
//     count = 0;
    
//     counted.textContent = count;
// });
