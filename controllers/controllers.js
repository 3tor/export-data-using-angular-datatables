'use strict';
angular.module('scotchApp')
    // create the controller and inject Angular's $scope
    .controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    })

.controller('TablesController', function($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.message = 'Look! I am an about page.';
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
        .withDOM('frtip')
        .withPaginationType('full_numbers')
        // Active Buttons extension
        .withButtons([
            'columnsToggle',
            'colvis',
            'copy',
            'print',
            'excel',
            'pdf',
            {
                text: 'Some button',
                key: '1',
                action: function(e, dt, node, config) {
                    alert('Button activated');
                }
            }
        ]);
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];

});

// .controller('contactController', function($scope) {
// 	$scope.message = 'Contact us! JK. This is just a demo.';
// })