
//fetching with options which is methods 
// async function:The async function declaration declares an async function where the await keyword is
//  permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
// avoiding the need to explicitly configure promise chains.
// creating async function 
const createToDo = async ()=>{
    //returns pormise always with await function
        let options = 
        {
        method:"POST",
        headers:{
        "Content-type":"application/json"
        },
        //JSON.stringify converts object to string
        //Json.parsec converts valid JSON to js object

        body: JSON.stringify
        ({
        title:'fo',//this are the  object 
        body:'  bar',
        userId:1,
        }),

    }
        let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
                let response = await p.json()
                return response

}                

const mainFunc = async () =>{
    let todo= await createToDo()
    console.log(todo)
}
mainFunc()
