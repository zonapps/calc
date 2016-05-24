/**
 * Created by jtcummin on 5/23/2016.
 */

CalculatorApp.config([ '$routeProvider', function($routeProvider){
        $routeProvider.otherwise({redirectTo: '/typeConverter/'});
    } ]
);

TypeConverterApp.config( [ '$routeProvider', function($routeProvider) {

    $routeProvider.when('/typeConverter/', {
        templateUrl: 'app/components/typeConverter/typeConverterView.html',
        controller: 'TypeConverterCtrl'
    } );
} ] );


