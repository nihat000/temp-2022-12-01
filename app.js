const idEl = document.getElementsByTagName('input')[0]
const nameEl = document.getElementsByTagName('input')[1]
const surnameEl = document.getElementsByTagName('input')[2]
const btn = document.getElementsByTagName('button')[0]

const table = document.createElement('table')
document.body.append(table)

let tr = document.createElement('tr')
let td1  = document.createElement('td')
let td2  = document.createElement('td')
let td3  = document.createElement('td')

td1.innerText = "id"
td2.innerText = "name"
td3.innerText = "surname"

tr.append(td1,td2,td3)
document.getElementsByTagName('table')[0].append(tr)


btn.addEventListener('click',btnClick)

function btnClick(){
    let tr = document.createElement('tr')
    let td1  = document.createElement('td')
    let td2  = document.createElement('td')
    let td3  = document.createElement('td')
    
    td1.innerText  = idEl.value
    td2.innerText  = nameEl.value
    td3.innerText  = surnameEl.value

    tr.append(td1,td2,td3)
    document.getElementsByTagName('table')[0].append(tr)
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data=> {
    data.forEach(el => {

        let tr = document.createElement('tr')
        let td1  = document.createElement('td')
        let td2  = document.createElement('td')
        let td3  = document.createElement('td')
        
        td1.innerText  = el.id
        td2.innerText  = el.name
        td3.innerText  = el.username
        tr.append(td1,td2,td3)
        document.getElementsByTagName('table')[0].append(tr)


    });

   
})