/**
 * Created by jtcummin on 5/25/2016.
 */

angular.module('app.calculator')
    .directive( 'typeConverterCalc', typeConverterCalc );

function typeConverterCalc() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/calculator/typeConverterCalc/typeConverterCalc.html',
    }
}