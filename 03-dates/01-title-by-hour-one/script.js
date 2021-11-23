// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById('target')
    let hour = new Date().getHours();

    if (hour < 18) {
        target.innerHTML = "Hello!"
    } else {
        target.innerHTML = "Good evening"
    }

})();
