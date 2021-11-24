// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let ogImg = document.getElementById('source');
    let randomKitten = ogImg.getAttribute('data-image');

    let target = document.getElementById('target');
    const newImg = document.createElement('img')
    target.appendChild(newImg)

    newImg.src= randomKitten;
    ogImg.remove();

})();
