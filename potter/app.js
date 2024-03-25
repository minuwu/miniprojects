
const url = "https://api.potterdb.com/v1/characters";
const btn = document.querySelector(".search");

btn.addEventListener("click",()=>{
    console.log("works",Date());
    // getData1();
    // getData2();
    getData3();
})

async function getData1(){
    let answer = await fetch(url);
    console.log(answer);
    let response = await answer.json();
    console.log(response);
    console.log(response.data[0].attributes.name);
    console.log(response.data[2].attributes.name);
    console.log(response.data[44].attributes.name);
}

function getData2(){
    let answer = fetch(url);
    answer
    .then((result)=>{
        console.log(result);
        return result.json();
    })
    .then((result)=>{
        console.log(result.data[0].attributes.name);
        console.log(result.data[2].attributes.name);
        console.log(result.data[44].attributes.name);
    })
    .catch((err)=>{
        console.log(err);
    });
}

async function getData3(){
    let response = await axios.get(url);
    console.log(response);
    console.log(response.data.data[3].attributes.name);
    console.log(response.data.data[5].attributes.name);
    console.log(response.data.data[35].attributes.name);
}