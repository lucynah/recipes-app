import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class RecipeCard extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
        let recipeCardStyle = {
            display: "inline-block",
            borderStyle: "solid",
            width: "45%",
            height: "300px",
            background: `url(${this.props.recipe.imgUrl}) no-repeat center center`,
            backgroundSize: "cover"
        }
        if(this.props.recipe.active){
            recipeCardStyle.color = "red";
        }
        
        return (
            <div style={recipeCardStyle} onClick={this.onClickHandler}>{this.props.recipe.title}</div>
        )
    }
    onClickHandler() {
        this.props.onClick(this.props.recipe);
    }
}

RecipeCard.propTypes = {
    onClick: PropTypes.func,
    recipe: PropTypes.object.isRequired
}

