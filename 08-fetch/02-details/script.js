// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    fetch("../../_shared/api.json")
        .then(response => response.json())
        .then(data => {
            let run = document.getElementById('run');
            run.addEventListener('click', () => {
                let input = document.getElementById('hero-id').value - 1;
                let heroes = data.heroes[input];

                let heroTemplate = document.getElementById('tpl-hero').content;
                let copyTemplate = document.importNode(heroTemplate, true);

                copyTemplate.querySelector('.name').innerHTML = heroes.name;
                copyTemplate.querySelector('.alter-ego').innerHTML = heroes.alterEgo;
                copyTemplate.querySelector('.powers').innerHTML = heroes.abilities.join(' + ');

                let target = document.getElementById('target');
                target.appendChild(copyTemplate);
            });
        })
        .catch(error => console.log(error))
})();
