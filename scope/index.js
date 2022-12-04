var name= "him";
function global(){
    console.log(name);

    function inner(){
        var name= "her"
        console.log(name);
    }
}
global()