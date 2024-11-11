let name = document.getElementById("name")
let image = document.getElementById("image")
let table = document.getElementsByClassName("td")
let description = document.getElementById("description")
let iframe = document.getElementById("iframe")
console.log(table)
fetch("/db.json").then(resp => { if (!resp.ok) { throw new Error("Fail") } else return resp.json() })
    .then(resp => {
        console.log(resp)
        let p = (window.location.pathname.replace("/", ""))
        let path = p.replace(".html", "")
        console.log(path)
        resp.forEach(element => {
            let m = element.name.toLowerCase()
            let moviename = m.trim().split(" ").join("")

            if (moviename == path) {
                name.innerText = element.name
                image.setAttribute("src", element.img)
                let index = 1
                let info = element.table
                table[0].innerText = element.name
                for (const key in info) {
                    const element = info[key];
                    table[index].innerText = element
                    index++
                }
                description.innerText = element.description
                iframe.setAttribute("src", element.iframe)
            }

        });
    })
