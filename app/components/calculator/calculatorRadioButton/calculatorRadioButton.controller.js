/**
 * Created by jtcummin on 5/25/2016.
 */

angular.module( 'app.calculator' )
    .controller( 'CalculatorRadioButtonController', CalculatorRadioButtonController )
        .$inject = ['$scope', '$log'];

function CalculatorRadioButtonController( $scope, $log ) {
    $scope.$log = $log;

    this.selectedButtonName = "";

    $scope.setButtonSelected = function( buttonName ){
        this.selectedButtonName = buttonName;
        $scope.$log.log( "Selected button: " + buttonName );
    }

    $scope.isButtonSelected = function ( buttonName ){
        if ( this.selectedButtonName === buttonName )
            return true;
        else
            return false;
    }
}
