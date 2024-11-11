fetch("series.json").then((resp) => {
    if (!resp.ok) {
        console.log("fail")
    } else {
        let serials = resp.json()
        return serials
    }
}).then((serials) => {
    serials.forEach(serialobject => {
        let href = serialobject.href
        let path = window.location.pathname.slice(1)
        if (href == path) {
            let imgtag = document.getElementById("image")
            imgtag.setAttribute("src", serialobject.img)
            let h2tag = document.getElementById("name")
            h2tag.innerText = serialobject.name
            let tds = document.getElementsByClassName("td")
            let index = 1
            for (const key in serialobject.info) {

                const element = serialobject.info[key];
                console.log(element)
                tds[index].innerText = element
                index = index + 1
            }
            tds[0].innerText = serialobject.name
            let description = document.getElementsByClassName("description")[1]
            description.innerText = serialobject.description
            let iframe = document.getElementsByTagName("iframe")[0]
            iframe.setAttribute("src",serialobject.iframe)
        }

    });
})