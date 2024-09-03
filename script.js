let butt = document.getElementById("butt");
let input = document.getElementById("input");
let container = document.getElementById("container");
let PosterDiv = document.getElementById("PosterDiv");
let textData = document.getElementById("textData");

butt.addEventListener("click", () => {
    data();
})

const data = async() => {
    let movie = input.value;
    let res = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=c37526bb`)
    let jsondata = await res.json();
    console.log(jsondata)

    PosterDiv.innerHTML = `<img src="${jsondata.Poster}">`;
    textData.innerHTML = `
                    <p> Title :- ${jsondata.Title}</p>
                    <p> Director :- ${jsondata.Director}</p>
                    <p> Released Date :- ${jsondata.Released}</p>
                    <p> Actors :- ${jsondata.Actors}</p>
                    <p> Language :- ${jsondata.Language}</p>`;

    container.append(PosterDiv);
    container.append(textData);
}