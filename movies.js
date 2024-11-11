let movies = document.querySelector(".Movies")
function createmovie(name, image) {
    let div = document.createElement("div")
    let a = document.createElement("a")
    let href = name.toLowerCase().replaceAll(" ", "") + ".html"
    console.log(href)
    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let div2 = document.createElement("div")
    h2.innerText = name
    img.setAttribute("src", image)
    a.setAttribute("href", href)
    movies.append(div)
    div.append(a)
    a.append(div2)
    div2.append(img)
    a.append(h2)
}
fetch("/db.json").then((result) => {
    console.log(result)
    return result.json()
}).then((result) => {
    console.log(result)
    console.log(result[1].name)
    //createmovie(result[0].name,result[0].img)
    //createmovie(result[1].name,result[1].img)
    result.forEach(film => {
        createmovie(film.name, film.img)
    });
})
//let element = document.getElementById("link1")
//element.onclick=function(){alert("good morning")}