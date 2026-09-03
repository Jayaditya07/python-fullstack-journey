let items = document.getElementsByClassName("item")

let current_date = new Date()

items[0].innerHTML = current_date.getHours()
items[1].innerHTML = current_date.getMinutes()
items[2].innerHTML = current_date.getSeconds()