function updateTime() {
    var time = new Date()

    h = time.getHours()
    m = time.getMinutes()

    document.getElementById('hour').innerHTML = String(h).padStart(2, '0')
    document.getElementById('min').innerHTML = String(m).padStart(2, '0')
}

setInterval(updateTime, 5000)
