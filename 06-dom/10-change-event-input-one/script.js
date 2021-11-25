// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // TODO: check how to make counter stop at 10
    // your code here
    document.getElementById('pass-one').addEventListener('input', () => {
        let psw1 = document.getElementById('pass-one');
        let length = document.getElementById('pass-one').value.length;
        let maxChars = 10


        if (length >= maxChars) {
            psw1.value = psw1.value.substr(0, 10);
        }
        document.getElementById("counter").innerText = `${length}/10`

    })
})();
