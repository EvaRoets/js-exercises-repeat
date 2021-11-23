// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let colorInput = document.getElementById('color')
    let run = document.getElementById('run')

    run.addEventListener('click', function() {
        document.body.style.backgroundColor = colorInput.value;
    })

})();
