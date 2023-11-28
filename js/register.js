const start = () => {
    const val = document.getElementById('company').value

    if (!val) {
        alert('Firmanyň adyny giriziň !')
        return false
    } else {
        localStorage.setItem("factoryName", val)
        localStorage.setItem("storage", 1000)
        localStorage.setItem("money", 10000)
        localStorage.setItem("tshirt", 0)
        localStorage.setItem("sekunt", 1)
        localStorage.setItem("m2", 10000)
        localStorage.setItem("level", 1)
        localStorage.setItem("b_star", 0)
        localStorage.setItem("e_star", JSON.stringify([1000, 1200, 1500, 2000, 2500, 3000, 3500, 4000, 5000, 7000, 10000, 12000]))
        localStorage.setItem("creditlimit", JSON.stringify([50000, 120000, 250000, 500000, 1000000, 5000000]))
        localStorage.setItem("taxlimit", JSON.stringify([40000, 120000, 300000, 500000, 1000000, 5000000]))
        localStorage.setItem("statistic", JSON.stringify([1, 2, 3, 5, 10, 13, 15, 17, 21, 25]))
        localStorage.setItem("credit", 0)
        localStorage.setItem("tmt", 13)
        localStorage.setItem("tax", 0)
        localStorage.setItem("time", 120)
        return true
    }
}