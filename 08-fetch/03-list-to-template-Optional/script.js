// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    fetch("../../_shared/api.json")
        .then(response => response.json())
        .then(data => {
            let run = document.getElementById('run');
            run.addEventListener('click', () => {
                let allHeroes = data.heroes;
                let heroTemplate = document.getElementById('tpl-hero').content;
                let copyTemplate = document.importNode(heroTemplate, true);
                // console.log(allHeroes)

                for (let i = 0; i < allHeroes.length; i++) {
                    let hero = data.heroes[i];
                    console.log(hero)

                    // TODO: check why error is thrown at 3rd hero
                    copyTemplate.querySelector('.name').innerHTML = hero.name;
                    copyTemplate.querySelector('.alter-ego').innerHTML = hero.alterEgo;
                    copyTemplate.querySelector('.powers').innerHTML = hero.abilities.join(' + ');

                    let target = document.getElementById('target');
                    target.appendChild(copyTemplate);
                }
            })
        })
})();
