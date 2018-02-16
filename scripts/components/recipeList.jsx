import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import RecipeCard from "./recipeCard.jsx";
import RecipeComponent from "./recipeComponent.jsx";

export default class RecipeList extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    renderCards() {
        return this.props.listData.map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} onClick={this.props.onElementClick} />
        });
    }

    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }
}

