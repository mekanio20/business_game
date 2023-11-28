const toBuy = async (price, lev) => {
    const money = localStorage.getItem("money")
    const b_star = localStorage.getItem("b_star")
    const e_star = JSON.parse(localStorage.getItem("e_star"))
    const prices = [25000, 50000, 150000, 300000, 600000]
    
    if (Number(money) >= Number(price)) {
        let level = Number(localStorage.getItem("level")) 
        let moneySum = Number(money) - Number(price)
        let levelUp = Number(lev) + Number(b_star)

        for (let i = Number(level - 1); i < e_star.length; i++) {
            if (levelUp >= e_star[i]) {
                levelUp = levelUp - e_star[i]
                level += 1
            } else {
                break
            }
        }
        localStorage.setItem("money", moneySum)

        if (level === 13) {
            localStorage.setItem("b_star", 12000)
            localStorage.setItem("level", level - 1)
        } else {
            localStorage.setItem("b_star", levelUp)
            localStorage.setItem("level", level)
        }

        document.getElementById('audio').play()

        for (let i=0; i < prices.length; i++) {
            if (moneySum < Number(prices[i])) {
                document.getElementById(`${prices[i]}`).classList = 'item__button'
            }
        }
    }
}

(async () => {
    const prices = [25000, 50000, 150000, 300000, 600000]
    const money = localStorage.getItem("money")

    for (let i=0; i < prices.length; i++) {
        if (Number(money) >= prices[i]) {
            document.getElementById(`${prices[i]}`).classList = 'item__button enabled__button'
        }
    }
})()