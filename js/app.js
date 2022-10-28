const count = document.getElementById("seconds")
let counter = 0

const timer = setInterval(() => {
    counter++
    count.innerHTML = counter
}, 1 * 1000)