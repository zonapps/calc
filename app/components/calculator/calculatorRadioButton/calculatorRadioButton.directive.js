/**
 * Created by jtcummin on 5/25/2016.
 */
angular.module('app.calculator')
    .directive('calculatorRadioButton', calculatorRadioButton)
    .$inject = ['$log'];

function calculatorRadioButton($log) {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/calculator/calculatorButton/calculatorButton.html',
        transclude: true,
        link: function( scope, element, attrs ) {
            scope.handleButtonPress = function() {
                scope.setButtonSelected({buttonName: attrs['buttonName']});
            }
        },
        scope: {
            class: "@",
            selectedButtonName: "@",
            setButtonSelected: '&ctrlRadioSet'
        }
    };

    return directive;
}