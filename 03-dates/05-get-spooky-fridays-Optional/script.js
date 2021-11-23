// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let run = document.getElementById('run');

    run.addEventListener('click', () => {
        let year = document.getElementById('year').value
        let beginYear = new Date(year, 0, 1);
        console.log(beginYear)
        let endYear = new Date(year, 11, 31)
        console.log(endYear)

        for (let i = beginYear; i <= endYear; i.setDate(i.getDate()+1)) {

            if (i.getDate() === 13 && i.getDay() === 5){
                let month = new Array(12);
                month[0] = "January";
                month[1] = "February";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "August";
                month[8] = "September";
                month[9] = "October";
                month[10] = "November";
                month[11] = "December";
                let freakyMonths = month[i.getMonth()];
                console.log(freakyMonths)
            }
        }
    })


})();
