angular.module("morrisonApp", ['ngGrid']).controller("largestLanesGridCtrl", function ($scope) {
    var largestLanesGridData =
    [
        { origin: "TAI", dest: "LAX", netwgt: "9000", totalwgt: "12000", avgpricekg: "3.50", total: "80000" },
        { origin: "HKO", dest: "SFO", netwgt: "13000", totalwgt: "15000", avgpricekg: "2.50", total: "160000" }
    ];

    $scope.largestLanesGridData = largestLanesGridData;

    $scope.largestLanesGridColumnData =
    [
        { field: 'origin', displayName: 'Origin', width: 50 },
        { field: 'dest', displayName: 'Dest', width: 50 },
        { field: 'netwgt', displayName: 'Net Weight' },
        { field: 'totalwgt', displayName: 'Total Weight' },
        { field: 'avgpricekg', displayName: 'Avg Price/Kg' },
        { field: 'total', displayName: 'Total' }
    ];


    $scope.largestLanesGrid = {
        data: 'largestLanesGridData',
        columnDefs: 'largestLanesGridColumnData',
        selectedItems: [],
        multiSelect: false
    }
});
