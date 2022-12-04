
// let p = fetch("https://goweather.herokuapp.com/weather/newyork",{
//     headers:{
//         Authentication: 'secret'
//     }
// });

// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)

//     return response.text()
// }).then((ok)=>{
//     console.log(ok)
// })


fetch("https://goweather.herokuapp.com/weather/newyork", {method:'GET', 
headers: {'Authorization': 'Basic ' }})
.then(response => response.json())
.then(json => console.log(json));