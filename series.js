fetch("series.json").then((result) => {
    if (!result.ok) { console.log("fail") }
    else { return result.json() }
}).then((result) => {

    result.forEach(object => {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.setAttribute("href",object.href)
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let div2 = document.createElement("div")
        let doc = document.getElementsByClassName("Movies")
        let movies = doc[0]
        movies.prepend(div)
        div.prepend(a)
        a.prepend(div2, h2)
        div2.prepend(img)
        h2.innerText = object.name
        img.setAttribute("src", object.img)
    });
})