// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById('target')
    let date = new Date()
    let hour = date.getHours();
    let minute = date.getMinutes()

    if (hour >= 17 && minute > 30) {
        target.innerHTML = "Buona sera"
    } else if (hour > 17) {
        target.innerHTML = "Buona sera"
    } else {
        target.innerHTML = "Hello Hello!"
    }
})();
