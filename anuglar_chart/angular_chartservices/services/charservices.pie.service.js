angular.module('app')
    .factory('chartPie', [function() {

        var chartBar = function(data) {
            this.dataSet = data;
            this.config = {
                options: {
                    chart: {
                        type: 'pie'
                    }
                },
                xAxis: {
                    categories:  this.dataSet.categories
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

        return chartBar;

    }]);