// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById('target')

    let today = new Date()

    //weekday
    let weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    let getWeekday = weekday[today.getDay()]

    //day of month
    let getDay = today.getDate();

    //month
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
    let getMonth = month[today.getMonth()];

    //year
    let getYear = today.getFullYear();

    // Sunday 28 October 2018, 23h32

    //hour + minutes
    let getHour = today.getHours()
    let getMinutes = ('0'+today.getMinutes()).slice(-2);

    target.innerHTML = `${getWeekday} ${getDay} ${getMonth} ${getYear}, ${getHour}h${getMinutes} `;
})();
