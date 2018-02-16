import React from "react";
import ReactDOM from "react-dom";
import PropTypes, { element } from "prop-types";

import RecipeList from "./recipeList.jsx";
import RecipeComponent from "./recipeComponent.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeList: [
                {
                    imgUrl: "../src/img/tabbouleh.jpg",
                    title: "TABBOULEH",
                    text: "Ugotować kaszę bulgur zgodnie z instrukcją na opakowaniu. Odcedzić i włożyć do miski.Natkę pietruszki opłukać, osuszyć i oderwać listki od gałązek. Drobno posiekać, dodać do miski z kaszą.Pomidora pokroić na ćwiartki, wykroić szypułki, usunąć nasiona z komór. Pozostały miąższ pokroić najpierw na paski, następnie w kosteczkę. Włożyć do miski ze składnikami.Dodać posiekany szczypiorek, cynamon, oliwę i sok z cytryny. Doprawić solą i pieprzem, wymieszać. Można podawać do dań mięsnych, lub np. nabierać porcje sałatki za pomocą liści małej sałaty rzymskiej. ",
                    active: false
                },
                {
                    imgUrl: "../src/img/kasza_bulgur.jpg",
                    title: "KASZA BULGUR Z WARZYWAMI I FASOLKĄ",
                    text: "Na głębokiej patelni (takiej z pokrywą) lub w szerokim garnku, na maśle i oliwie zeszklić pokrojoną w kosteczkę cebulę. Dodać rozgniecione ząbki czosnku i chwilę razem podsmażyć.Dodać pokrojoną w kostkę paprykę i mieszając co chwilę smażyć przez około 2 minuty.Wsypać suchą kaszę bulgur i podsmażać przez ok. 1 minutę mieszając. Dodać słodką paprykę w proszku, kurkumę oraz kumin.Wlać gorący bulion i zagotować, dodać fasolkę z puszki wraz z zalewą, pomidory z puszki, wymieszać i całość zagotować na dużym ogniu. Doprawić solą i pieprzem.Przykryć pokrywą, zmniejszyć ogień i gotować przez 15 minut, w międzyczasie po 10 minutach gotowania dodać cukinię pokrojoną w słupki lub kosteczkę, wymieszać, przykryć i dalej gotować przez ostatnie 5 minut.Dodać sos ostrygowy i ciągle mieszając zagotować. Następnie dodać szpinak, wymieszać i podgrzewać przez chwilę aż zwiędnie. Można podawać samodzielnie lub z poniższymi dodatkami.",
                    active: false
                },
                {
                    imgUrl: "../src/img/quinoa.jpg",
                    title: "QUINOA PO MEKSYKAŃSKU Z JEDNEJ PATELNI",
                    text: "Przygotować większą patelnię z pokrywą. Wlać do niej oliwę, dodać przeciśnięty przez praskę czosnek oraz pokrojoną na plasterki połowę papryczki chili. Mieszając chwilę podsmażyć.Dodać surową quinoa, wlać bulion, zwiększyć ogień i dodać przyprawy, wymieszać. Doprawić solą i pieprzem.Wciąż podgrzewając dodać odcedzoną kukurydzę i odcedzoną i przepłukaną fasolkę oraz pomidory z puszki. Wszystko wymieszać, przykryć i zagotować.Zmniejszyć ogień i gotować pod przykryciem przez około 20 minut. Zdjąć pokrywę i wymieszać.Dodać obrane i pokrojone awokado, skropić je połową limonki, posypać pokrojoną drugą połówką papryczki oraz listkami kolendry. Podawać z resztą limonki.",
                    active: false
                },
                {
                    imgUrl: "../src/img/ryz_smazony.jpg",
                    title: "RYŻ SMAŻONY PO TAJSKU Z KREWETKAMI",
                    text: "Ryż jaśminowy ugotować z wyprzedzeniem zgodnie z instrukcją na opakowaniu. Po ugotowaniu przepłukać, odsączyć i wyłożyć cienką warstwą na tacę i odłożyć bez przykrycia na około 1 godzinę lub dłużej jeśli mamy czas.Mango obrać i pokroić na podłużne kawałki.Krewetki oczyścić (z ogonków, pancerzy i jelit). Cebulę pokroić w kosteczkę i zeszklić w woku lub dużej patelni. Dodać pastę oraz krewetki i mieszając smażyć przez ok. 1 minutę.Dodać mango i chwilę razem podsmażyć. Dodać ryż i wymieszać. Smażyć przez ok. 2 minuty mieszając.Skropić sosem rybnym i sokiem z cytryny. Wymieszać i chwilę podsmażyć.Na koniec wymieszać ze szczypiorkiem, posiekaną papryczką chili i połową kolendry. Wyłożyć do miseczek i posypać resztą kolendry.",
                    active: false
                }
            ]
        };

        this.activateRecipe = this.activateRecipe.bind(this);
    }

    activateRecipe(recipe) {
        const clickedRecipeIndex = this.state.recipeList.indexOf(recipe);

        const newRecipeList = this.state.recipeList.map(el => {
            return Object.assign({}, el);
        });

        newRecipeList.forEach(recipe => {
            recipe.active = false;
        });

        newRecipeList[clickedRecipeIndex].active = true;

        this.setState({
            activeRecipe: recipe,
            recipeList: newRecipeList
        });
    }

    render() {
        return (
            <div>
                <RecipeList listData={this.state.recipeList} onElementClick={this.activateRecipe} />
                {this.renderRecipeDetails()}
            </div>
        );
    }

    renderRecipeDetails() {
        if (this.state.activeRecipe) {
            return <RecipeComponent recipe={this.state.activeRecipe} />
        }
    }
}





