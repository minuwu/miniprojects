
const url = "https://api.potterdb.com/v1/movies";
const btn = document.querySelector(".search");
const movieList = document.querySelector(".movieList");


btn.addEventListener("click",()=>{
    console.log("works",Date());
    // getData1();
    // getData2();
    // getData3();
    callMovie();
})

async function callMovie(){
    let ans = await axios.get(url);
    console.log(ans.data.data);
    populate(ans.data.data);
}

function populate(datas){
    for(data of datas){
        let title = document.createElement("div");
        title.innerText = data.attributes.title;
        title.classList.add("title");

        let movie = document.createElement("div");
        movie.classList.add("movie");
        movie.appendChild(title);

        let budget = document.createElement("div");
        budget.classList.add("budget");
        budget.innerText = `Budget: ${data.attributes["budget"]}`;
        movie.appendChild(budget);

        let boxOffice = document.createElement("div");
        boxOffice.classList.add("boxOffice");
        boxOffice.innerText = `Box Office Collection: ${data.attributes["box_office"]}`;
        movie.appendChild(boxOffice);

        movieList.appendChild(movie);
    }
}
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