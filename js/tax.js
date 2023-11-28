const toPay = () => {
    const amount = document.getElementById('amount').value
    const money = localStorage.getItem("money")
    const tax = localStorage.getItem("tax")

    if (Number(money) >= Number(amount) && Number(amount) > 0 && Number(tax) >= Number(amount)) {
        let _money = Number(money) - Number(amount)
        let _tax = Number(tax) - Number(amount)
        
        document.getElementById('audio').play()

        localStorage.setItem("money", _money)
        localStorage.setItem("tax", _tax)

        document.getElementById('tax').innerHTML = _tax
    }
}

const allPay = () => {
    const tax = Number(localStorage.getItem("tax"))
    document.getElementById('amount').value = tax
}

(async () => {
    const level = Number(localStorage.getItem('level'))
    const taxlimit = JSON.parse(localStorage.getItem('taxlimit'))
    
    let index = -1
    let _taxlimit = NaN
    for (let i=0; i <= 12; i += 2) {
        index += 1
        if (level > i && level < i+3) {
            _taxlimit = taxlimit[index]
        }
    }

    document.getElementById('taxlimit').innerHTML = _taxlimit
    document.getElementById('tax').innerHTML = `${localStorage.getItem("tax")}`
})()