const toBuy = async (price, product, lev) => {
    const storage = localStorage.getItem("storage")
    const money = localStorage.getItem("money")
    const level = localStorage.getItem("level")
    const prices = [20000, 40000, 80000, 150000, 300000]
    
    if (Number(money) >= Number(price) && Number(level) >= Number(lev)) {
        
        let moneySum = Number(money) - Number(price)
        let productSum = Number(storage) + Number(product)
        
        document.getElementById('audio').play()

        localStorage.setItem("money", moneySum)
        localStorage.setItem("storage", productSum)

        for (let i=0; i < prices.length; i++) {
            if (moneySum < Number(prices[i])) {
                document.getElementById(`${prices[i]}`).classList = 'item__button'
            }
        }
    }
}

(async () => {
    const levels = [2, 4, 7, 10, 12]
    const level = localStorage.getItem("level")

    for (let i=0; i < levels.length; i++) {
        if (Number(level) >= levels[i]) {
            document.getElementById(`${levels[i]}`).classList = 'item__level enabled__level'
        }
    }

    const moneys = [20000, 40000, 80000, 150000, 300000]
    const money = localStorage.getItem("money")

    for (let i=0; i < moneys.length; i++) {
        if (Number(money) >= moneys[i] && Number(level) >= levels[i]) {
            document.getElementById(`${moneys[i]}`).classList = 'item__button enabled__button'
        }
    }
})()