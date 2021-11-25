// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // TODO: check why src doesn't change to gallery[i]
    // your code here
    let next = document.getElementById('next')
    next.addEventListener('click', () => {
        for (let i = 0; i < gallery.length; i++) {
            let img = document.getElementsByTagName('img')
            console.log(gallery[i])
            img.src = gallery[i]
        }
    })
})();
