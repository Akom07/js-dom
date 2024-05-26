const h1 = document.querySelector(".h1")

h1.style.color = "blue"
h1.style.background = "green"


//-------------Q2---------------------
const p = document.querySelector("#p1")
p.style.fontWeight = "bold"



//--------------Q3--------------------

const img = document.querySelector("img")

img.src = "https://images.unsplash.com/photo-1714779573259-216b0cf746be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"

//---------------Q4---------------------

const ul = document.querySelector("ul")
let li = document.createElement("li")
li.innerText = "list 1"
let li2 = document.createElement("li")
li2.innerText = "list 2"
let li3 = document.createElement("li")
li3.innerText = "list 3"

ul.append(li)
ul.append(li2)
ul.append(li3)

ul.style.display = "flex"
ul.style.color = "blue"
ul.style.border = "1px solid black"
ul.style.listStyle = "none"

//-----------------Q5--------------------

const table = document.querySelector("#table")

let tr = document.createElement("tr")
let tr2 = document.createElement("tr")

let th = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
th.innerText = "row1"
th2.innerText = "row1"
th3.innerText = "row1"
tr.append(th, th2, th3)

let td = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
td.innerText = "row2"
td2.innerText = "row2"
td3.innerText = "row2"

tr2.append(td, td2, td3)
table.append(tr, tr2)

