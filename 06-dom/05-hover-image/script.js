// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let img = document.querySelector('img');
    let hover = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
        img.src = hover
    })

})();
