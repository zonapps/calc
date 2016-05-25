/**
 * Created by jtcummin on 5/24/2016.
 */

angular.module('app.calculator')
    .directive('calculator', calculator);

function calculator() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/calculator/calculator.html',
        controller: CalculatorController,
        controllerAs: 'calc'
    };
}
