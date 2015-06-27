(function(){

    angular
        .module('myApp', [])

        .controller('MainController', function(){
            this.cat = cat
        });

    var cat = {
        name: 'Ms. Whiskers',
        age: 9,
        eyes: 'blue'
    };

})();