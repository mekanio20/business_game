const kredit = () => {
    const amount = document.getElementById('amount').value
    const level = Number(localStorage.getItem('level'))
    const credit = Number(localStorage.getItem('credit'))
    const creditlimit = JSON.parse(localStorage.getItem('creditlimit'))
    const money = Number(localStorage.getItem('money'))

    let index = -1
    let _creditlimit = NaN
    for (let i=0; i <= 12; i += 2) {
        index += 1
        if (level > i && level < i+3) {
            _creditlimit = creditlimit[index]
        }
    }

    if (credit + Number(amount) <= _creditlimit) {
        let _money = money + Number(amount)
        let _credit = credit + Number(amount)

        localStorage.setItem('money', _money)
        localStorage.setItem('credit', _credit)

        document.getElementById('credit').innerHTML = _credit
        document.getElementById('audio').play()
    }

}

const pay = () => {
    const amount = document.getElementById('amount').value
    const credit = Number(localStorage.getItem('credit'))
    const money = Number(localStorage.getItem('money'))

    if (money >= credit && Number(amount) <= credit) {
        let _money = money - credit
        let _credit = credit - Number(amount)

        localStorage.setItem('money', _money)
        localStorage.setItem('credit', _credit)

        document.getElementById('credit').innerHTML = _credit
        document.getElementById('audio').play()
    }
}

(async () => {
    const level = Number(localStorage.getItem('level'))
    const creditlimit = JSON.parse(localStorage.getItem('creditlimit'))
    
    let index = -1
    let _creditlimit = NaN
    for (let i=0; i <= 12; i += 2) {
        index += 1
        if (level > i && level < i+3) {
            _creditlimit = creditlimit[index]
        }
    }

    document.getElementById('creditlimit').innerHTML = _creditlimit
    document.getElementById('credit').innerHTML = localStorage.getItem('credit')
})()