async function infoas() {
    let weather1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("20 DEG")
        }, 2000);
    })
    let weather2 = new Promise ((resolve,rejec)=>{
        setTimeout(() => {
            resolve("24DEG")

        }, 6000);
    })
    console.log("fetching weather1 please wait async is waiting me")
    let w1 = await weather1
    console.log("fetched value of weather 1 is :"+ w1)

    console.log("fetching weather2 please wait async is waiting me")
    let w2 = await weather2
    console.log("fetched value of weather 2 is :"+ w2)
    return[w1,w2]

}
const fun2 = async()=>{
    console.log("iam not going to the render according to the place , i am going to render according to the then is appplied to me")
    
}
const main =  async() =>{
    let a = await infoas()
    let b= await fun2()//the fun2 must be in the async funciton so that the await can be added to its properties
    //.then is the weapon to run which funciton first, here we don't have the async thing as it is the alternative of the async
    b.then((value)=>{
return(value)    })
    
}
main()