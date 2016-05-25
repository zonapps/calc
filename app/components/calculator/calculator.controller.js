/**
 * Created by jtcummin on 5/24/2016.
 */

angular.module( 'app.calculator' )
.controller( 'CalculatorController', CalculatorController )
    .$inject = ['$log'];

function CalculatorController($log) {
    this.typeIndex = 0;
    this.changeCalculator = function (index) {
        if ( this.typeIndex != index ) {
            this.typeIndex = index;
            $log.log( "Index = " + this.typeIndex );

        } else {
            $log.log( "That type already selected" );
        }

    }
    this.linkRoot = "/calculator/";
    this.types = [
        {
            name: "Type Converter"
        },
        {
            name: "Logical Operations"
        }
    ];
}