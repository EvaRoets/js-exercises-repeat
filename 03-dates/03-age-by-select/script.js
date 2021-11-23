// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    let run = document.getElementById('run')
    run.addEventListener('click', () => {
        let now = new Date().getTime()
        let DoB = document.getElementById('dob-day').value
        let MoB = document.getElementById('dob-month').value
        let YoB = document.getElementById('dob-year').value
        let bDay = new Date(YoB, MoB, DoB)
        // console.log(bDay)

        let calcAge = now - bDay.getTime()
        let age = Math.round(calcAge / (1000*60*60*24*365))
        // console.log(age)
        alert(`Congrats, you are ${age} years old!`)
    })

})();
