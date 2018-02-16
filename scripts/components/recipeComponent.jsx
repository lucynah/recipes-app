import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import RecipeCard from "./recipeCard.jsx";

export default class RecipeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>{this.props.recipe.text}</div>);
    }
}
RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired
}