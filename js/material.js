const toPay = () => {
    const amount = document.getElementById('amount').value
    const money = localStorage.getItem("money")
    const material = localStorage.getItem("m2")

    if (Number(money) >= Number(amount) && Number(amount) > 0) {
        let _money = Number(money) - Number(amount)
        let _material = Number(material) + Number(amount)
        
        document.getElementById('audio').play()

        localStorage.setItem("money", _money)
        localStorage.setItem("m2", _material)

        document.getElementById('money').innerHTML = _money
    }
}

const allPay = () => {
    const money = Number(localStorage.getItem("money"))
    document.getElementById('amount').value = money
}

(async () => {
    document.getElementById('money').innerHTML = `${localStorage.getItem("money")}`
})()