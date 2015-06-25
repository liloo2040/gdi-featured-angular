(function(){

    angular
        .module('myApp', [])

        .controller('RecipeController', function(){
            this.recipes = recipes
        });

    var recipes = [
    {
        name: 'Waffles',
        cookTime: 9,
        prepTime: 10,
        ingredients: ['flour', 'water', 'sugar', 'vanilla'],
        directions: "Mix everything together in a bowl with a whisk. Use a waffle press to make your waffles!",
        isVegan: false,
        isPaleo: true,
        isGlutenFree: true
    },
    {
        name: 'Waffles',
        cookTime: 9,
        prepTime: 10,
        ingredients: ['flour', 'water', 'sugar', 'vanilla'],
        directions: "Mix everything together in a bowl with a whisk. Use a waffle press to make your waffles!",
        isVegan: false,
        isPaleo: true,
        isGlutenFree: true
    }
    ];

})();