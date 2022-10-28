const countSeconds = document.getElementById("seconds")
const countMinutes = document.getElementById("minutes")
const counHours = document.getElementById("hours")
let counter = 1

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

const timer = setInterval(() => {
    const hours = Math.floor(counter / 3600)
    const minutes = Math.floor(counter / 60) % 60
    const seconds = Math.floor(counter % 60)

    counHours.innerHTML = formatTime(hours)
    countMinutes.innerHTML = formatTime(minutes)
    countSeconds.innerHTML = formatTime(seconds)

    counter++

}, 1 * 1000)