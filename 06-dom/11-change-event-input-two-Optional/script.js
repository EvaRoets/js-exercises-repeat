// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    // TODO: check how to look for non-consecutive digits
    // your code here
    document.getElementById('pass-one').addEventListener('input', () => {
        let psw1 = document.getElementById('pass-one').value;
        let hasDigits = /\d\d/;
        let minChars = 8

        if ((psw1.length >= minChars) && (hasDigits.test(psw1))) {
            document.getElementById("validity").innerText = "A-Okay"
        }
    });


})();
