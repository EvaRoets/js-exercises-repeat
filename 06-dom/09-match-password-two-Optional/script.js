// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let run = document.getElementById('run');

    run.addEventListener('click', () => {
        let psw1 = document.getElementById('pass-one').value;
        let psw2 = document.getElementById('pass-two').value;

        if (psw1 !== psw2) {
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
            // console.log(psw1)
            // console.log(psw2)
        }
    });

})();
