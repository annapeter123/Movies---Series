let a = "12 Hello"
//alert(a / 10)
let b = true
let c = null
let d
//alert(d)
let movie = { name: "Harry Potter", date: "01.01.1000", sayhello: function () { alert("Hello!") } }
//movie.sayhello()
//alert (a.toUpperCase())
let e = 1.23456
//alert (e.toFixed(3))
let fruits = ["apple", "strawberry", "grape", "strawberry", "orange", "banana"]
//alert(fruits[3])
fruits[5] = "pear"
fruits.pop()
fruits.push("blueberry", "blackberry")
fruits.shift()
fruits.unshift("watermelon", "melon")
fruits.splice(5, 2)
fruits.splice(-2, 0, "lemon", "lime")
//alert(fruits)
//alert(fruits.length)
//alert(fruits.indexOf("strawberry"))
//alert(fruits.includes("strawberry"))
let test = fruits.filter(value => value.length > 5)
//alert(test)
fruits.forEach(function (value, index, array) { console.log(value) })
let day = prompt("enter the day")
//day = day.toUpperCase
if (day == "MONDAY") { alert("Thank you!"); console.log(day) }
else { alert("Try again") }
let day2 = day == "monday" ? alert("Okay!") : alert("Not okay!")
/*switch (day) {
    case "monday": alert("It's monday!")
        break;
    case "tuesday": alert("It's tuesday!")
        break;
    case "wednesday": alert("It's wednesday!")
        break;
    default: alert("Wrong day!")
}
let number = +prompt("enter a number")
switch (number) {
    case 1: alert("You entered 1")
        break;
    case 2:
    case 3: alert("You entered 2 or 3")
        break;
    default: alert("You entered a wrong number")*/
/*}let message = "Goodbye"
function sayhello(name) {
    message = "Hello"
    alert("hello" + message + name)
}
alert(message)
sayhello("name")
sayhello("name")
alert(message)*/
/*function sum(numberone, numbertwo) {
    let result = +numberone + +numbertwo
    return result
}
let one = prompt("Enter first number")
let two = prompt("Enter second number")
alert(sum(one, two))
let sayhi = function () { alert("Hi!") }
sayhi()
function ask(question, yes, no) {
    if (confirm(question)) { yes() }
    else { no() }
}
function getno() { alert("You clicked no!") }
ask("Do you like this website?", function () { alert("You clicked yes!") }, getno)
let saygoodbye = () => {alert ("Goodbye!")}
saygoodbye ()
let getdouble = (number) => {return number*2}
 alert (getdouble (5))*/
document.body.style.background = "#245782"
let main = document.getElementById("main")
let div = document.createElement("div")
div.innerText = "Hello!"
div.textContent = "Bye!"
div.innerHTML = "<i>Good day!</i>"
//main.prepend(div)
//main.append(div)
main.before(div)
//main.after(div)
div.className = "newdiv"
div.classList.add("newdiv")
div.setAttribute("class", "newdiv")
setTimeout(() => {
    div.remove()
}, 3000);
main.style.background = "#937564"
let footer = document.getElementsByClassName("footer")
console.log(footer)
footer[0].style.background = "#181120"
let alldivs = document.getElementsByTagName("div")
console.log(alldivs)
let main2 = document.querySelector("#main")
main2.style.background = "#300120"
let footersections = document.querySelectorAll(".footer-section")
footersections[1].style.background = "#555444"
let footersection = document.querySelector(".footer-section")
footersection.style.background = "#019283"
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //resolve("Hello I kept my promise!")
    }, 4000);
    setTimeout(() => {
        reject("Hello I failed!")
    }, 8000);
})
promise.then((result) => { console.log(result) },
    (error) => { console.log(error) })
promise.catch((reason) => { new Error("failed to load") })
promise.finally(() => { console.log("Promise is finished") })
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(786540)
    }, 5000);
    setTimeout(() => {
        reject("rejected!")
    }, 7000);
})
promise2.then((result) => {
    console.log(result)
    return result += 2000000
}).then((result) => {
    console.log(result)
    return result -= 700000
}).then((result) => {
    console.log(result)
})
