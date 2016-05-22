angular.module('app')
    .factory('chartFactory', [function() {
        return {
            pie: function(title, name, data) {
                return {
                    options: {
                        chart: {
                            type: 'pie'
                        },
                        credits: {
                            enabled: false
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                showInLegend: true
                            }
                        }
                    },
                    series: [{
                        name :name,
                        data: data
                    }],
                    title: {
                        text: title
                    },
                    loading: false
                }
            }
        }
    }]);

