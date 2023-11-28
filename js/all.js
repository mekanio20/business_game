const start = () => {
    let bool = true
    
    const interval = setInterval(async () => {

        let tshirt = localStorage.getItem("tshirt")
        let sekunt = localStorage.getItem("sekunt")
        let material = localStorage.getItem("m2")
        let storage = localStorage.getItem("storage")
        let tax = localStorage.getItem("tax")
        let level = localStorage.getItem("level")
        let taxlimit = JSON.parse(localStorage.getItem("taxlimit"))

        let index = -1
        let _taxlimit = NaN
        for (let i=0; i <= 12; i += 2) {
            index += 1
            if (level > i && level < i+3) {
                _taxlimit = taxlimit[index]
            }
        }

        // Maliye bergisi dolanda
        if (_taxlimit <= Number(tax)) {
            bool = false
            clearInterval(interval)
        }

        // Harytlaryn sany dolanda
        if (Number(tshirt) + Number(sekunt) > Number(storage)) {
            bool = false
            clearInterval(interval)
        }

        // Material gutaranda
        if (Number(material) - (Number(sekunt) * 5) < 0) {
            bool = false
            clearInterval(interval)
        }

        // Shertler dogry bolan yagdayynda
        if (bool == true) {
            tshirt = Number(tshirt) + Number(sekunt)
            material = Number(material) - Number(sekunt) * 5

            localStorage.setItem("tshirt", tshirt)
            localStorage.setItem("m2", material)
        }

    }, 1000)

}
start()