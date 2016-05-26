/**
 * Created by jtcummin on 5/24/2016.
 */

angular.module( 'app.calculator' )
.controller( 'CalculatorController', CalculatorController )
    .$inject = ['$scope','$log'];

function CalculatorController($scope, $log) {
    $scope.$log = $log;
    this.typeIndex = 0;
    this.changeCalculator = function (index) {
        if ( this.typeIndex != index ) {
            this.typeIndex = index;
            $log.log( "Index = " + this.typeIndex );

        } else {
            $log.log( "That type already selected" );
        }

    }
    this.types = [
        {
            name: "Type Converter"
        },
        {
            name: "Logical Operations"
        }
    ];

    $scope.$on('calculatorButtonPress', function( event, data ) {
        $scope.$log.log( "Calculator Received Event: " + event.name + ", data: " + data );
    });
}