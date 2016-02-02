angular.module('app')
.factory('chartPie', [function() {

        var chartPie = function(data) {
            this.dataSet = data;
            this.config = {
                options: {
                    chart: {
                        type: 'pie'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            showInLegend: true
                        }
                    }
                },

                series: [{
                    name :this.dataSet.name,
                    data: this.dataSet.data
                }],
                title: {
                    text: this.dataSet.title
                },
                loading: false
            }

        }

        return chartPie;

    }]);