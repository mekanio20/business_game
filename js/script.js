const toSell = () => {
    let tmt = localStorage.getItem("tmt")
    let money = localStorage.getItem("money")
    let tax = localStorage.getItem("tax")
    let tshirt = localStorage.getItem("tshirt")

    money = Number(tmt) * Number(tshirt) + Number(money)  
    tax = Number(tax) + Number(tshirt)
    tshirt = 0

    localStorage.setItem("money", money)
    localStorage.setItem("tshirt", tshirt)
    localStorage.setItem("tax", tax)

    document.getElementById("audio").play()
    
    display()
}

const display = () => {
    let star = JSON.parse(localStorage.getItem("e_star"))[Number(localStorage.getItem("level")) - 1]
    document.getElementById("money").innerHTML = `${localStorage.getItem("money")} TMT`
    document.getElementById("tshirt").innerHTML = `${localStorage.getItem("tshirt")} Sany`
    document.getElementById("tax").innerHTML = `${localStorage.getItem("tax")} TMT`
    document.getElementById("sekunt").innerHTML = `${localStorage.getItem("sekunt")} / Sekunt`
    document.getElementById("material").innerHTML = `${localStorage.getItem("m2")} M<sup>2</sup>`
    document.getElementById("level").innerHTML = `${localStorage.getItem("level")} | ${localStorage.getItem("b_star")}/${star}`
    document.getElementById("storage").innerHTML = `${localStorage.getItem("storage")} Sany`
    document.getElementById("statistic").innerHTML = `${localStorage.getItem("tmt")} TMT`
}

display()
setInterval(() => {
    display()
}, 1000)

