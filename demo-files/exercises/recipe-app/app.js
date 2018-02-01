(function(){
angular
    .module('recipeApp', [])
    .controller('RecipeController', function(){
        this.recipe = recipe;
    });
var recipe = {
    name: 'Cookies',
    ingredients: ['flour','eggs','chocolate','butter'],
    prepTime: '1 hour',
    cookTime: '30 min',
    isVegan: true,
    isGlutenFree: false,
    isPaleo: true
};

})();