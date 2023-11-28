const pngChange = () => {
    const shirt = document.getElementById('shirt')
    const price = Number(localStorage.getItem('tmt'))

    if (price < 10) {
        shirt.src = 'images/tshirt1.png'
    } else if (price > 10 && price < 20) {
        shirt.src = 'images/tshirt2.png'
    } else {
        shirt.src = 'images/tshirt3.png'
    }
}

(async () => {
    setInterval(() => {
        let time = Number(localStorage.getItem('time'))
        let minute = Math.floor(time / 60)
        let sekund = time % 60
        
        document.getElementById('minute').innerHTML = minute
        document.getElementById('sekunt').innerHTML = sekund
        
        if (minute === 2 && sekund === 0) {           
            document.getElementById('tmt').innerHTML = Number(localStorage.getItem('tmt'))
            pngChange()
        }
    }, 1000)
})()

pngChange()