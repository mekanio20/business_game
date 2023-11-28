(async () => {
    setInterval(() => {
        let time = Number(localStorage.getItem('time'))
        let credit = Number(localStorage.getItem('credit'))

        localStorage.setItem('time', time - 1)

        if (time === 0) {

            if (credit > 0) {
                let _credit = Math.floor((credit / 100) * 2) + credit
                localStorage.setItem('credit', _credit)
            }

            localStorage.setItem('time', 120)

            let statistic = JSON.parse(localStorage.getItem('statistic'))
            let rand = Number(statistic[Math.floor(Math.random() * 10)])

            localStorage.setItem('tmt', rand)
        }
    }, 1000)
})()