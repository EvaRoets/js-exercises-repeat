// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let run = document.getElementById('run')

    run.addEventListener('click', () => {
        document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    });

})();
