const toBuy = async (price, lev, product) => {
    const sekunt = localStorage.getItem("sekunt")
    const money = localStorage.getItem("money")
    const level = localStorage.getItem("level")
    const prices = [10000, 25000, 100000, 250000, 500000]
    
    if (Number(money) >= Number(price) && Number(level) >= Number(lev)) {
        
        let moneySum = Number(money) - Number(price)
        let productSum = Number(sekunt) + Number(product)
        
        document.getElementById('audio').play()

        localStorage.setItem("money", moneySum)
        localStorage.setItem("sekunt", productSum)

        for (let i=0; i < prices.length; i++) {
            if (moneySum < Number(prices[i])) {
                document.getElementById(`${prices[i]}`).classList = 'item__button'
            }
        }
    }
}

(async () => {
    const levels = [1, 4, 7, 10, 12]
    const level = localStorage.getItem("level")

    for (let i=0; i < levels.length; i++) {
        if (Number(level) >= levels[i]) {
            document.getElementById(`${levels[i]}`).classList = 'item__level enabled__level'
        }
    }

    const moneys = [10000, 25000, 100000, 250000, 500000]
    const money = localStorage.getItem("money")

    for (let i=0; i < moneys.length; i++) {
        if (Number(money) >= moneys[i] && Number(level) >= levels[i]) {
            document.getElementById(`${moneys[i]}`).classList = 'item__button enabled__button'
        }
    }
})()