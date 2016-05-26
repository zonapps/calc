/**
 * Created by jtcummin on 5/25/2016.
 */

angular.module('app.calculator')
    .directive('calculatorButton', calculatorButton)
        .$inject = ['$log'];

function calculatorButton($log) {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/calculator/calculatorButton/calculatorButton.html',
        transclude: true,
        link: function( scope, element, attrs ) {
            scope.handleButtonPress = function() {
                $log.log( "Emitting button press on button: " + attrs['buttonName']);
                scope.$emit('calculatorButtonPress', attrs['buttonName']);
            }
        },
        scope: {
            class: "@"
        }
    };

    return directive;
}